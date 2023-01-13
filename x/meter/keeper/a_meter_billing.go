package keeper

// electrad query meter currentcycle-id
// electrad tx meter prepare-bill [cycle-id] [record]
// electrad tx meter prepare-bill 78 false --from bob -y

import (
	"context"
	"electra/x/meter/types"
	"encoding/json"
	"fmt"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"math"
	"time"
)

type meterReading struct {
	whphase1 uint64
	whphase2 uint64
	whphase3 uint64
}

type meterReadingInOut struct { // Watt Hours
	inphase1  uint64
	inphase2  uint64
	inphase3  uint64
	outphase1 uint64
	outphase2 uint64
	outphase3 uint64
}

// Enrich the ppcMAP with the actual produced WH amounts Phase1RemainingWh Phase2RemainingWh Phase3RemainingWh
func addCurrentProduction(ppcMap map[string]types.PowerPurchaseContract, currentCycleProduceOutMap map[string]meterReading, previousCycleProduceOutMap map[string]meterReading) map[string]types.PowerPurchaseContract {
	comment := "=== addCurrentProduction =============================================\n"
	for producerDeviceID, ppc := range ppcMap {

		ppc.ContractID = ppcMap[producerDeviceID].ContractID
		ppc.ContractName = ppcMap[producerDeviceID].ContractName
		ppc.ContractDeviceID = ppcMap[producerDeviceID].ContractDeviceID
		ppc.ContractActive = ppcMap[producerDeviceID].ContractActive
		ppc.ContractPhase = ppcMap[producerDeviceID].ContractPhase             // 1|2|3|6 6 = 3 phases
		ppc.ContractForAll = ppcMap[producerDeviceID].ContractForAll           // true: sell to all
		ppc.ContractForAllPrice = ppcMap[producerDeviceID].ContractForAllPrice // 0 = free
		ppc.ContractForAllCurency = ppcMap[producerDeviceID].ContractForAllCurency
		ppc.ContractPreferred = ppcMap[producerDeviceID].ContractPreferred
		ppc.ContractPreferredPrice = ppcMap[producerDeviceID].ContractPreferredPrice
		ppc.ContractPreferredCurency = ppcMap[producerDeviceID].ContractPreferredCurency
		ppc.ContractStartDate = ppcMap[producerDeviceID].ContractStartDate
		ppc.ContractEndDate = ppcMap[producerDeviceID].ContractEndDate

		ppc.Phase1RemainingWh = currentCycleProduceOutMap[producerDeviceID].whphase1 - previousCycleProduceOutMap[producerDeviceID].whphase1
		ppc.Phase2RemainingWh = currentCycleProduceOutMap[producerDeviceID].whphase2 - previousCycleProduceOutMap[producerDeviceID].whphase2
		ppc.Phase3RemainingWh = currentCycleProduceOutMap[producerDeviceID].whphase3 - previousCycleProduceOutMap[producerDeviceID].whphase3
		comment += fmt.Sprintf("addCurrentProduction to Producer %s %s produced WH.1= %d WH.2= %d WH.3= %d\n %+v\n\n", resolvName(producerDeviceID), producerDeviceID, ppc.Phase1RemainingWh, ppc.Phase2RemainingWh, ppc.Phase3RemainingWh, ppc)
		if (ppc.Phase1RemainingWh < 0) || (ppc.Phase2RemainingWh < 0) || (ppc.Phase3RemainingWh < 0) { // Trowgh and error
			comment += "Error Producter WH Decreased"
		}
		ppcMap[producerDeviceID] = ppc
	}
	writelog(comment)
	fmt.Println(comment)
	return ppcMap
}

func setCustomerbillingline(lineid uint64, cycleid uint64, lineWh uint64, lineWhPrice uint64, customerDeviceID string, producerID string, contractID string, curency string, decremented uint64, phase uint64) (L types.Customerbillingline) {
	var temp types.Customerbillingline = types.Customerbillingline{
		Lineid:           lineid,
		CycleID:          cycleid,
		LineWh:           decremented,
		CustomerDeviceID: customerDeviceID,
		ProducerDeviceID: producerID,
		LineWhPrice:      lineWhPrice,
		LineWhTotalPrice: (lineWhPrice * decremented),
		Curency:          curency,
		BillContractID:   contractID,
		Phase:            phase,
	}
	return temp
}

func setProducerbillingline(lineid uint64, cycleid uint64, lineWh uint64, lineWhPrice uint64, customerDeviceID string, producerID string, billContractID string, curency string, decremented uint64, phase uint64) (L types.Producerbillingline) {
	var temp types.Producerbillingline = types.Producerbillingline{
		Lineid:           lineid,
		CycleID:          cycleid,
		LineWh:           decremented,
		CustomerDeviceID: customerDeviceID,
		ProducerDeviceID: producerID,
		LineWhPrice:      lineWhPrice,
		LineWhTotalPrice: (lineWhPrice * decremented),
		Curency:          curency,
		BillContractID:   billContractID,
		Phase:            phase,
	}
	return temp
}

// Get Meter Readings from the blockchain // Follow only once the chain to reduce load
func (k Keeper) loadMeterReadingValues(ctx sdk.Context, cycleID uint64) (map[string]meterReading, map[string]meterReading, map[string]meterReading, map[string]meterReading, error) {
	// Performance Management
	start := time.Now()
	// Local Variables
	var previousConsumerMap map[string]meterReading = make(map[string]meterReading)
	var previousProducerMap map[string]meterReading = make(map[string]meterReading)
	var currentConsumerMap map[string]meterReading = make(map[string]meterReading)
	var currentProducerMap map[string]meterReading = make(map[string]meterReading)
	var i int = 0
	// Find the cycle start and end timestamps
	theCycle, _ := k.GetBillingcycles(ctx, cycleID)
	currenttimebegin := theCycle.Begin
	currenttimeend := theCycle.End
	comment := fmt.Sprintf("# BEGIN  loadMeterReadingValues cycleID:%d Timebegin:%d Timeend:%d ###################################", cycleID, currenttimebegin, currenttimeend)
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MeterreadingsKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})
	defer iterator.Close()
	for ; iterator.Valid(); iterator.Next() {
		var val types.Meterreadings                               // The original format on the block chain
		var mrInn meterReading = currentConsumerMap[val.DeviceID] // To save memory usage we use this type that is far more compact
		var mrOUT meterReading = currentProducerMap[val.DeviceID] // To save memory usage we use this type that is far more compact
		i++
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		comment += fmt.Sprintf("\n\t#%d %s val.Timestamp:%d previous:%t current:%t future:%t ", i, resolvName(val.DeviceID), val.Timestamp, (val.Timestamp < currenttimebegin), ((val.Timestamp >= currenttimebegin) && (val.Timestamp <= currenttimeend)), (val.Timestamp > currenttimeend))
		if val.Timestamp < currenttimebegin { // More safe than ((val.Timestamp <= prevtimeend))
			switch val.Phase {
			case 1:
				{ // Previous Cycles
					if mrInn.whphase1 < val.Whin {
						mrInn.whphase1 = val.Whin
						previousConsumerMap[val.DeviceID] = mrInn
						comment += fmt.Sprintf(" previous Consum ")
					} // values can come in disorder so we upgrade only if it is bigger
					if mrOUT.whphase1 < val.Whout {
						mrOUT.whphase1 = val.Whout
						previousProducerMap[val.DeviceID] = mrOUT
						comment += fmt.Sprintf(" previous Produc ")
					} // values can come in disorder so we upgrade only if it is bigger
				}
			case 2:
				{
					if mrInn.whphase2 < val.Whin {
						mrInn.whphase2 = val.Whin
						previousConsumerMap[val.DeviceID] = mrInn
					} // values can come in disorder so we upgrade only if it is bigger
					if mrOUT.whphase2 < val.Whout {
						mrOUT.whphase2 = val.Whout
						previousProducerMap[val.DeviceID] = mrOUT
					} // values can come in disorder so we upgrade only if it is bigger
				}
			case 3:
				{
					if mrInn.whphase3 < val.Whin {
						mrInn.whphase3 = val.Whin
						previousConsumerMap[val.DeviceID] = mrInn
					} // values can come in disorder so we upgrade only if it is bigger
					if mrOUT.whphase3 < val.Whout {
						mrOUT.whphase3 = val.Whout
						previousProducerMap[val.DeviceID] = mrOUT
					} // values can come in disorder so we upgrade only if it is bigger
				}
			}
		} else {
			if (val.Timestamp >= currenttimebegin) && (val.Timestamp <= currenttimeend) {
				switch val.Phase {
				case 1:
					{ // Current Cycles
						if mrInn.whphase1 < val.Whin {
							mrInn.whphase1 = val.Whin
							currentConsumerMap[val.DeviceID] = mrInn
							comment += fmt.Sprintf(" current Consum ")
						} // values can come in disorder so we upgrade only if it is bigger
						if mrOUT.whphase1 < val.Whout {
							mrOUT.whphase1 = val.Whout
							currentProducerMap[val.DeviceID] = mrOUT
							comment += fmt.Sprintf(" current Produc ")
						} // values can come in disorder so we upgrade only if it is bigger
					}
				case 2:
					{
						if mrInn.whphase2 < val.Whin {
							mrInn.whphase2 = val.Whin
							currentConsumerMap[val.DeviceID] = mrInn
						} // values can come in disorder so we upgrade only if it is bigger
						if mrOUT.whphase2 < val.Whout {
							mrOUT.whphase2 = val.Whout
							currentProducerMap[val.DeviceID] = mrOUT
						} // values can come in disorder so we upgrade only if it is bigger
					}
				case 3:
					{
						if mrInn.whphase3 < val.Whin {
							mrInn.whphase3 = val.Whin
							currentConsumerMap[val.DeviceID] = mrInn
						} // values can come in disorder so we upgrade only if it is bigger
						if mrOUT.whphase3 < val.Whout {
							mrOUT.whphase3 = val.Whout
							currentProducerMap[val.DeviceID] = mrOUT
						} // values can come in disorder so we upgrade only if it is bigger
					}
				}
			}
		}
	}
	comment += fmt.Sprintf("\n\npreviousConsumerMap:%+v\n\npreviousProducerMap:%+v\n\ncurrentConsumerMap:%+v\n\ncurrentProducerMap:%+v\n", previousConsumerMap, previousProducerMap, currentConsumerMap, currentProducerMap)
	// Performance Management
	elapsed := time.Since(start)
	comment += fmt.Sprintf("\n# END # loadMeterReadingValues  took %s @ %s #############################\n", elapsed, time.Now())
	writelog(comment)
	return previousConsumerMap, previousProducerMap, currentConsumerMap, currentProducerMap, nil
}

// Find the producer contract offering the smallest customer price for any customer
func smallestAvailablePriceForAll(ppcMap map[string]types.PowerPurchaseContract, curency string, phase uint64, demandedWh uint64) (price uint64, sellerDeviceIDkey string, minPrice uint64, contractID string, err error) {
	var zminPrice uint64 = math.MaxUint64 // put the the iterator to the maximum possible value
	var zminPriceDeviceID, zContractID string = "", ""
	var zminPriceAvailableWh uint64 = 0
	i := 1
	for _, element := range ppcMap {
		if (element.ContractForAllPrice < zminPrice) && (element.ContractForAllCurency == curency) && (element.ContractActive == true) && (element.ContractForAll == true) && (((element.Phase1RemainingWh > 0) && (phase == 1)) || ((element.Phase2RemainingWh > 0) && (phase == 2)) || ((element.Phase3RemainingWh > 0) && (phase == 3))) {
			zminPrice = element.ContractForAllPrice
			zminPriceDeviceID = element.ContractDeviceID
			zContractID = element.ContractID
			switch phase {
			case 1:
				{
					zminPriceAvailableWh = element.Phase1RemainingWh
				}
			case 2:
				{
					zminPriceAvailableWh = element.Phase2RemainingWh
				}
			case 3:
				{
					zminPriceAvailableWh = element.Phase3RemainingWh
				}
			}
			i++
		}
	}
	return zminPrice, zminPriceDeviceID, zminPriceAvailableWh, zContractID, err
}

// Find the agreement offering the smallest customer preffered price subscribed
func smallestAvailablePricePreferred(ppaMap map[string]types.PpaMap, ppcMap map[string]types.PowerPurchaseContract, deviceIDkey, preferredCurency string, phase uint64, demandedWh uint64) (price uint64, sellerDeviceIDkey string, WhAvailableForCustomer uint64, contractID string, err error) {
	var minPrice uint64 = math.MaxUint64 // put the the iterator to the maximum possible value
	var minPriceDeviceID, zContractID string = "", ""
	var minPriceAvailableWh uint64 = 0
	i := 1
	for _, element := range ppaMap {
		if (element.ContractPreferredPrice < minPrice) && (element.ContractPreferredCurency == preferredCurency) {
			minPrice = element.ContractPreferredPrice
			minPriceDeviceID = element.ProducerDeviceID
			zContractID = element.AgreementID
			switch phase {
			case 1:
				{
					minPriceAvailableWh = ppcMap[element.ProducerDeviceID].Phase1RemainingWh
				}
			case 2:
				{
					minPriceAvailableWh = ppcMap[element.ProducerDeviceID].Phase2RemainingWh
				}
			case 3:
				{
					minPriceAvailableWh = ppcMap[element.ProducerDeviceID].Phase3RemainingWh
				}
			}
			i++
		}
	}
	return minPrice, minPriceDeviceID, minPriceAvailableWh, zContractID, err
}

// Decrement
func decrementPpcRemainingWh(ppcMap map[string]types.PowerPurchaseContract, deviceID string, phase uint64, WhToDecrement uint64) (remainsToDecrement uint64, decremented uint64, err error) { // decrement the producer
	var currentWh, zremainsToDecrement, zdecremented uint64 = 0, 0, 0
	var tempPPC types.PowerPurchaseContract = ppcMap[deviceID]
	switch phase { // decrement according to the phase
	case 1:
		{
			currentWh = ppcMap[deviceID].Phase1RemainingWh
			if currentWh >= WhToDecrement {
				tempPPC.Phase1RemainingWh = currentWh - WhToDecrement
				zdecremented = WhToDecrement
			} else {
				tempPPC.Phase1RemainingWh = 0
				zremainsToDecrement = WhToDecrement - currentWh
				zdecremented = currentWh
			}
		}
	case 2:
		currentWh = ppcMap[deviceID].Phase2RemainingWh
		if currentWh >= WhToDecrement {
			tempPPC.Phase2RemainingWh = currentWh - WhToDecrement
			zdecremented = WhToDecrement
		} else {
			tempPPC.Phase2RemainingWh = 0
			zremainsToDecrement = WhToDecrement - currentWh
			zdecremented = currentWh
		}
	case 3:
		currentWh = ppcMap[deviceID].Phase3RemainingWh
		if currentWh >= WhToDecrement {
			tempPPC.Phase3RemainingWh = currentWh - WhToDecrement
			zdecremented = WhToDecrement
		} else {
			tempPPC.Phase3RemainingWh = 0
			zremainsToDecrement = WhToDecrement - currentWh
			zdecremented = currentWh
		}
	}
	ppcMap[deviceID] = tempPPC // Update
	return zremainsToDecrement, zdecremented, err
}

// Function tested in /lab/test
// Build the bill for a specific user customerdeviceID
func buildBill(ppaMap map[string]types.PpaMap, ppcMap map[string]types.PowerPurchaseContract, customerDeviceID string, consumedWh uint64, currency string, consumerBillLines []types.Customerbillingline, producerBillLines []types.Producerbillingline, customerbill types.Customerbills, producerbill types.Producerbills, phase uint64, cycleID uint64, moduleParamBestForCustomer bool) (cBillingline []types.Customerbillingline, pBillLines []types.Producerbillingline, cbill types.Customerbills, pbill types.Producerbills, err error) {
	const maxBillingIteration = 16
	var comment string = ""
	var loopcount int = 0
	var lineID, remainsToDecrement, decremented uint64 = 0, 0, 0 // Iteration variable for energy calculation reinitialized at 0
	var thisCustomerbill types.Customerbills = customerbill      // Get the current bill for customer customerDeviceID
	thisCustomerbill.BillCurrency = currency                     // Set the currency
	for (consumedWh > 0) && (loopcount < maxBillingIteration) && (err == nil) {
		loopcount++
		lineID++
		decremented = 0
		comment += fmt.Sprintf("=> buildBill Iteration #%d\n", loopcount) // Debug_Trace
		aPrice, aSellerID, aWhAvailableForCustomer, aContractID, _ := smallestAvailablePriceForAll(ppcMap, currency, phase, consumedWh)
		pPrice, pSellerID, pWhAvailableForCustomer, pContractID, _ := smallestAvailablePricePreferred(ppaMap, ppcMap, customerDeviceID, currency, phase, consumedWh)
		comment += fmt.Sprintf(">> buildBill required=%d | aPrice %d aWhAvailable %d | pPrice %d, pWhAvailable %d |\n", consumedWh, aPrice, aWhAvailableForCustomer, pPrice, pWhAvailableForCustomer)
		if (pWhAvailableForCustomer == 0) && (aWhAvailableForCustomer == 0) {
			// Throw error
			stErr := "No remaining WH in any active contract\n"
			comment += fmt.Sprintf(stErr) //err = errors.New(stErr) //log.Println(err)
		} else {
			// Write the billing lines // Settle both consumer and producer billLines
			switch moduleParamBestForCustomer {
			case true:
				{
					if (aPrice > pPrice) && (pWhAvailableForCustomer > 1) {
						// Choose the pPrice
						before := ppcMap[pSellerID].Phase1RemainingWh
						// DEBUG fmt.Printf("  *** Choose the pPrice | before %d seller:%s\n", before, pSellerID)
						remainsToDecrement, decremented, _ = decrementPpcRemainingWh(ppcMap, pSellerID, phase, consumedWh) // DEBUG
						after := ppcMap[pSellerID].Phase1RemainingWh
						// DEBUG fmt.Printf("  *** Choose the pPrice | after %d seller:%s\n", after, pSellerID)								// DEBUG
						comment += fmt.Sprintf(">> buildBill | BestForCust=%t > Choose pPrice | before:%dWh after:%dWh remainsToDecrement:%d decremented:%d from seller having %d %s\n", moduleParamBestForCustomer, before, after, remainsToDecrement, decremented, pWhAvailableForCustomer, pSellerID)
						consumerBillLines = append(consumerBillLines, setCustomerbillingline(lineID, cycleID, pWhAvailableForCustomer, pPrice, customerDeviceID, pSellerID, pContractID, currency, decremented, phase))
						thisCustomerbill.BillTotalPrice += pPrice * decremented
						thisCustomerbill.BillTotalWh += decremented
						producerBillLines = append(producerBillLines, setProducerbillingline(lineID, cycleID, pWhAvailableForCustomer, pPrice, customerDeviceID, pSellerID, pContractID, currency, decremented, phase)) // Add to the producer line
					} else {
						if aWhAvailableForCustomer > 1 { // Select the best price for the customer what ever it covers only a fraction of the WH consumed
							// Choose the aPrice
							before := ppcMap[aSellerID].Phase1RemainingWh
							remainsToDecrement, decremented, _ = decrementPpcRemainingWh(ppcMap, aSellerID, phase, consumedWh)
							after := ppcMap[aSellerID].Phase1RemainingWh
							comment += fmt.Sprintf(">> buildBill BestForCust=%t > Choose aPrice | before:%dWh after:%dWh remainsToDecrement:%d decremented:%d seller having:%d at price:%d from contract:%s seller%s\n", moduleParamBestForCustomer, before, after, remainsToDecrement, decremented, aWhAvailableForCustomer, aPrice, aContractID, aSellerID)
							consumerBillLines = append(consumerBillLines, setCustomerbillingline(lineID, cycleID, aWhAvailableForCustomer, aPrice, customerDeviceID, aSellerID, aContractID, currency, decremented, phase)) //
							thisCustomerbill.BillTotalPrice += aPrice * decremented
							thisCustomerbill.BillTotalWh += decremented
							producerBillLines = append(producerBillLines, setProducerbillingline(lineID, cycleID, aWhAvailableForCustomer, aPrice, customerDeviceID, aSellerID, aContractID, currency, decremented, phase)) //
						} else { // Throw error
							comment += fmt.Sprintf(" >> ERROR No remaining WH in any active contract for consumer %s phase &d cycleid:\n", customerDeviceID, phase)
							comment += fmt.Sprintf("======================================================\n")

						}
					}
				}
			case false:
				{
					if aPrice >= pPrice {
						// Choose the aPrice
						remainsToDecrement, decremented, _ = decrementPpcRemainingWh(ppcMap, aSellerID, phase, consumedWh)                                                                                              //
						consumerBillLines = append(consumerBillLines, setCustomerbillingline(lineID, cycleID, aWhAvailableForCustomer, aPrice, customerDeviceID, aSellerID, aContractID, currency, decremented, phase)) //
						thisCustomerbill.BillTotalPrice += aPrice * decremented                                                                                                                                         //
						thisCustomerbill.BillTotalWh += decremented                                                                                                                                                     //
						producerBillLines = append(producerBillLines, setProducerbillingline(lineID, cycleID, aWhAvailableForCustomer, aPrice, customerDeviceID, aSellerID, aContractID, currency, decremented, phase)) //
					} else { // Select the best price for the producer
						// Choose the pPrice
						remainsToDecrement, decremented, _ = decrementPpcRemainingWh(ppcMap, pSellerID, phase, consumedWh)                                                                                              //
						consumerBillLines = append(consumerBillLines, setCustomerbillingline(lineID, cycleID, pWhAvailableForCustomer, pPrice, customerDeviceID, pSellerID, pContractID, currency, decremented, phase)) //
						thisCustomerbill.BillTotalPrice += pPrice * decremented                                                                                                                                         //
						thisCustomerbill.BillTotalWh += decremented                                                                                                                                                     //
						producerBillLines = append(producerBillLines, setProducerbillingline(lineID, cycleID, pWhAvailableForCustomer, aPrice, customerDeviceID, aSellerID, aContractID, currency, decremented, phase)) //
					}
				}
			}
		}
		consumedWh = remainsToDecrement
	}
	writelog(comment)
	// Return the function values  Update the total amount of the customerbill and the producerbill
	return consumerBillLines, producerBillLines, thisCustomerbill, producerbill, nil
}

// PPCMAP key is ContractDeviceID
func ppcList2ppcMap(ppcList []types.PowerPurchaseContract) map[string]types.PowerPurchaseContract {
	var ppcMap = make(map[string]types.PowerPurchaseContract)
	for _, ppc := range ppcList {
		ppcMap[ppc.ContractDeviceID] = ppc // Copy the contract in the map witht the ContractDeviceID as key
	}
	return ppcMap
}

// The PPAMAP key is the ConsumerDeviceID
func ppaList2ppaMap(ppaList []types.PpaMap) map[string]types.PpaMap {
	var ppaMap = make(map[string]types.PpaMap)
	for _, ppa := range ppaList {
		ppaMap[ppa.ConsumerDeviceID] = ppa // Copy the agreement in the map witht the ConsumerDeviceID as ey
	}
	return ppaMap
}

// TEST_VERSION:	func makePrepareBill(ppcMap map[string]PowerPurchaseContract,ppaMap map[string]PpaMap, cycleID uint64)(Rcustomerbill map[string]Customerbills, customerbillinglines []Customerbillingline, producerbillinglines []Producerbillingline, comment string, err error){
/*
func (k msgServer) makePrepareBill(goCtx context.Context, CycleID uint64)(Customerbill map[string]types.Customerbills, Customerbillinglines []types.Customerbillingline, Producerbillinglines []types.Producerbillingline, comment string, err error){
		// Constants
		const moduleParamBestForCustomer = true 													// Select the best price for the customer or for the producer
		const maxBillingIteration = 16 																//
		const currency = "uelectra"																		// TO DO: Set as module parameter for each chain
		// Performance Management
		start := time.Now()
		// Local variables
		var billCounter uint64 = 0
		var customerBillLines []types.Customerbillingline
		// cBillingline []types.Customerbillingline, pBillLines []types.Producerbillingline, cbill  types.Customerbills, pbill types.Producerbills
		var producerBillLines []types.Producerbillingline
		var customerbill map[string]types.Customerbills	= make(map[string]types.Customerbills)

		PreviousCycleID := CycleID
		PreviousCycleID--								// Decrement the current cycle ID to get the previous

		comment += fmt.Sprintf("CycleID: %d  Previous CycleID: %d\n", CycleID, PreviousCycleID)


	comment += fmt.Sprintf("makePrepareBill Cycle:%d took %s @ %s\n", CycleID, elapsed,time.Now())
	writelog(comment)
	return customerbill, customerBillLines, producerBillLines, comment, err
}
*/

func makePrepareBill(ppcMap map[string]types.PowerPurchaseContract, ppaMap map[string]types.PpaMap, cycleID uint64, previousCycleConsumeInMap map[string]meterReading, previousCycleProduceOutMap map[string]meterReading, currentCycleConsumeInMap map[string]meterReading, currentCycleProduceOutMap map[string]meterReading) (Rcustomerbill map[string]types.Customerbills, customerbillinglines []types.Customerbillingline, producerbillinglines []types.Producerbillingline, comment string, err error) {
	// Performance Management
	start := time.Now()
	// Constants
	const moduleParamBestForCustomer = true // Select the best price for the customer or for the producer
	const maxBillingIteration = 16
	const currency = "uelectra" // TO DO: Set as module parameter for each chain
	// Local variables
	var customerBillLines []types.Customerbillingline
	var producerBillLines []types.Producerbillingline
	var customerbill map[string]types.Customerbills = make(map[string]types.Customerbills)
	var billCounter uint64 = 0
	var currentbillCycleID uint64 = cycleID
	var consumedWh uint64 = 0
	// CycleID definitions
	PreviousCycleID := cycleID
	PreviousCycleID-- // Decrement the current cycle ID to get the previous
	comment = fmt.Sprintf("# makePrepareBill # CycleID: %d  Previous CycleID: %d\n", cycleID, PreviousCycleID)

	comment += "=== addCurrentProduction =============================================\n"
	ppcMap = addCurrentProduction(ppcMap, currentCycleProduceOutMap, previousCycleProduceOutMap)

	for customerDeviceID, _ := range currentCycleConsumeInMap { // makePrepareBill Polls the current list of customers
		billCounter++
		thisCustomerBill := customerbill[customerDeviceID] // Get the current bill for customer customerDeviceID
		thisCustomerBill.BillCurrency = currency           // Set the currency
		thisCustomerBill.BillCycleID = currentbillCycleID
		thisCustomerBill.BillDate = uint64(time.Now().Unix())
		thisCustomerBill.CustomerDeviceID = customerDeviceID
		thisCustomerBill.Paid = false
		var consumed meterReading // Get the amount of WH consumed & Set the WH consumed value per phase
		consumed.whphase1 = currentCycleConsumeInMap[customerDeviceID].whphase1 - previousCycleConsumeInMap[customerDeviceID].whphase1
		consumed.whphase2 = currentCycleConsumeInMap[customerDeviceID].whphase2 - previousCycleConsumeInMap[customerDeviceID].whphase2
		consumed.whphase3 = currentCycleConsumeInMap[customerDeviceID].whphase3 - previousCycleConsumeInMap[customerDeviceID].whphase3

		for phase := uint64(1); phase < uint64(2); phase++ { // Add a For loop for phase1 / phase2 / phase3
			switch phase {
			case 1:
				consumedWh = consumed.whphase1
			case 2:
				consumedWh = consumed.whphase2
			case 3:
				consumedWh = consumed.whphase3
			}
			customerRequestedWh := consumedWh // Keep the value to compare against
			comment += fmt.Sprintf("\n\n========= Build Bill ============================================\n## BEGIN makePrepareBill for %s #%d phase %d | WH consumed: %d curremcy: %s id: %s\n", resolvName(customerDeviceID), billCounter, phase, consumedWh, currency, customerDeviceID)
			var lineID, remainsToDecrement, decremented uint64 = 0, 0, 0 // Iteration variable for energy calculation reinitialized at 0
			var loopcount int = 0
			thisCustomerBill.BillCurrency = currency // Set the currency
			for (consumedWh > 0) && (loopcount < maxBillingIteration) && (err == nil) {
				loopcount++
				lineID++
				decremented = 0
				comment += fmt.Sprintf("=> buildBill Cust:%s Iteration #%d\n", resolvName(customerDeviceID), loopcount) // Debug_Trace
				aPrice, aSellerID, aWhAvailableForCustomer, aContractID, _ := smallestAvailablePriceForAll(ppcMap, currency, phase, consumedWh)
				pPrice, pSellerID, pWhAvailableForCustomer, pContractID, _ := smallestAvailablePricePreferred(ppaMap, ppcMap, customerDeviceID, currency, phase, consumedWh)
				comment += fmt.Sprintf("\tbuildBill Phase:%d required=%d | aPrice=%d aWhAvailable=%d | pPrice=%d, pWhAvailable=%d |\n", phase, consumedWh, aPrice, aWhAvailableForCustomer, pPrice, pWhAvailableForCustomer)
				if (pWhAvailableForCustomer == 0) && (aWhAvailableForCustomer == 0) {
					//Throw error
				} else {
					// Write the billing lines // Settle both consumer and producer billLines
					switch moduleParamBestForCustomer {
					case true:
						{
							if (aPrice > pPrice) && (pWhAvailableForCustomer > 1) {
								remainsToDecrement, decremented, _ = decrementPpcRemainingWh(ppcMap, pSellerID, phase, consumedWh)
								customerBillLines = append(customerBillLines, setCustomerbillingline(lineID, cycleID, pWhAvailableForCustomer, pPrice, customerDeviceID, pSellerID, pContractID, currency, decremented, phase))
								thisCustomerBill.BillTotalPrice += pPrice * decremented                                                                                                                                         //
								thisCustomerBill.BillTotalWh += decremented                                                                                                                                                     //
								producerBillLines = append(producerBillLines, setProducerbillingline(lineID, cycleID, pWhAvailableForCustomer, pPrice, customerDeviceID, pSellerID, pContractID, currency, decremented, phase)) // Add to the producer line
								consumedWh = remainsToDecrement                                                                                                                                                                 // Reset consumedWh to the remaining
							} else {
								if aWhAvailableForCustomer > 1 { // Select the best price for the customer what ever it covers only a fraction of the WH consumed
									remainsToDecrement, decremented, _ = decrementPpcRemainingWh(ppcMap, aSellerID, phase, consumedWh)
									thisCustomerBill.BillTotalPrice += aPrice * decremented //
									thisCustomerBill.BillTotalWh += decremented
									customerBillLines = append(customerBillLines, setCustomerbillingline(lineID, cycleID, pWhAvailableForCustomer, pPrice, customerDeviceID, pSellerID, pContractID, currency, decremented, phase)) //
									producerBillLines = append(producerBillLines, setProducerbillingline(lineID, cycleID, aWhAvailableForCustomer, aPrice, customerDeviceID, aSellerID, aContractID, currency, decremented, phase)) //
									consumedWh = remainsToDecrement                                                                                                                                                                 // Reset consumedWh to the remaining
								} else { // Throw error
									stErr := fmt.Sprintf("\t\t !!! ERROR | Choose aPrice or pPrice | No remaining WH in any active contract for consumer %s phase &d cycleid:\n", customerDeviceID, phase)
									fmt.Println(stErr)              // Throw error
									loopcount = maxBillingIteration // Exit the loop
								}
							}
						}
					}
				}
				// Check bill validity | Valid only IF all the requested ennergy has been invoiced
				if thisCustomerBill.BillTotalWh == customerRequestedWh {
					thisCustomerBill.BillValid = true
				} else { // Bill Uncompleted
					thisCustomerBill.BillValid = false
				}
				customerbill[customerDeviceID] = thisCustomerBill // Record the bill
				comment += fmt.Sprintf(">>>> makePrepareBill Invoice valid:%t Consumer:%s billTotalWh=%d  Requested=%d Phase=%d\n", thisCustomerBill.BillValid, customerDeviceID, thisCustomerBill.BillTotalWh, customerRequestedWh, phase)
			}
		}
	}
	comment += "### Output customerbill ###################\n"
	jsonStr, _ := json.MarshalIndent(customerbill, "", " ")
	comment += fmt.Sprintf("%+s\n", jsonStr)
	comment += "### Output customerBillLines ###################\n"
	jsonStr, _ = json.MarshalIndent(customerBillLines, "", " ")
	comment += fmt.Sprintf("%+s\n", jsonStr)
	comment += "### Output producerBillLines ###################\n"
	jsonStr, _ = json.MarshalIndent(producerBillLines, "", " ")
	comment += fmt.Sprintf("%+s\n", jsonStr)
	elapsed := time.Since(start)
	comment += fmt.Sprintf("### END ### makePrepareBill Cycle:%d took %s @ %s\n", cycleID, elapsed, time.Now())
	writelog(comment)
	return customerbill, customerBillLines, producerBillLines, comment, err
}

func (k msgServer) recordAllPreparedBills(goCtx context.Context, customerBill map[string]types.Customerbills, customerBillingLines []types.Customerbillingline, producerBillingLines []types.Producerbillingline, executePayment bool) (string, error) {
	// Performance Management
	start := time.Now()
	ctx := sdk.UnwrapSDKContext(goCtx)
	comment := "### START ### recordAllPreparedBills ########################\n"
	//////// customer Bill /////////////////////////////////////////////////////////////////////////////////////////////////////////////
	for _, cbill := range customerBill {
		// Check if the value already exists
		_, isFound := k.GetCustomerbills(
			ctx,
			cbill.BillCycleID,
			cbill.CustomerDeviceID,
		)
		if isFound {
			errmsg := fmt.Sprintf("# recordAllPreparedBills # Error: index already set Cycle:%d Customer:%s\n", cbill.BillCycleID, cbill.CustomerDeviceID)
			comment += errmsg
		} else {
			if cbill.BillTotalPrice > 0 {
				// set the specific customerbilling in the store from its index
				k.SetCustomerbills(
					ctx,
					cbill,
				)
				comment += fmt.Sprintf("# recordAllPreparedBills # OK customer Bill REGISTERED Cycle:%d Total:%d %s Customer:%s\n", cbill.BillCycleID, cbill.BillTotalPrice, cbill.BillCurrency, resolvName(cbill.CustomerDeviceID))
			} else {
				comment += fmt.Sprintf("# recordAllPreparedBills # WARNING cannot register when price =0 Cycle:%d Total:%d %s Customer:%s\n", cbill.BillCycleID, cbill.BillTotalPrice, cbill.BillCurrency, resolvName(cbill.CustomerDeviceID))
			}
		}
	}
	//////// customer billing line /////////////////////////////////////////////////////////////////////////////////////////////////////
	for _, cbill := range customerBillingLines {
		// Check if the value already exists
		_, isFound := k.GetCustomerbillingline(
			ctx,
			cbill.CustomerDeviceID,
			cbill.CycleID,
			cbill.Lineid,
			cbill.Paid,
		)
		if isFound {
			errmsg := fmt.Sprintf("# recordAllPreparedBills # Error: index already set Line:%d Cycle:%d Customer:%s\n", cbill.Lineid, cbill.CycleID, resolvName(cbill.CustomerDeviceID))
			comment += errmsg
			// sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, errmsg)
		} else {
			if cbill.LineWhTotalPrice > 0 {
				///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				// Proceed to the payment
				// Note: This module uses the SendCoins function of bankKeeper so Add SendCoins to x/meter/types/expected_keepers.go
				///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				if executePayment == true {
					customer, _ := sdk.AccAddressFromBech32(cbill.CustomerDeviceID)
					producer, _ := sdk.AccAddressFromBech32(cbill.ProducerDeviceID)
					amount, err := sdk.ParseCoinsNormalized(string(cbill.LineWhTotalPrice) + cbill.Curency)
					if err != nil {
						errmsg := "Cannot parse coins in invoice amount"
						comment += errmsg
						//return nil, sdkerrors.Wrap(types.ErrWrongLoanState, errmsg)
					}
					// send tokens from the customer to the producer
					err = k.bankKeeper.SendCoins(ctx, customer, producer, amount)
					if err != nil {
						errmsg := "Sendcoin failed to send coins"
						comment += errmsg
						//return nil, sdkerrors.Wrap(types.ErrWrongLoanState, "Cannot parse coins in loan amount")
					} else {
						// Update the bill with the payment result
						// cbill.Paid = true
					}
				}
				///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				// END payment
				///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				//  set the specific billingline in the store from its index
				k.SetCustomerbillingline(
					ctx,
					cbill,
				)
				comment += fmt.Sprintf("# recordAllPreparedBills # OK Customer billing line REGISTERED Cycle:%d Line:%d Phase:%d Total:%d %s Customer:%s\n", cbill.CycleID, cbill.Lineid, cbill.Phase, cbill.LineWhTotalPrice, cbill.Curency, resolvName(cbill.CustomerDeviceID))
			} else {
				comment += fmt.Sprintf("# recordAllPreparedBills # WARNING price =0 Cycle:%d Line:%d Phase:%d Total:%d %s Customer:%s\n", cbill.CycleID, cbill.Lineid, cbill.Phase, cbill.LineWhTotalPrice, cbill.Curency, resolvName(cbill.CustomerDeviceID))
			}
		}
	}
	//////// producer billing line /////////////////////////////////////////////////////////////////////////////////////////////////////
	for _, cbill := range producerBillingLines {
		// Check if the value already exists
		_, isFound := k.GetCustomerbillingline(
			ctx,
			cbill.ProducerDeviceID,
			cbill.CycleID,
			cbill.Lineid,
			cbill.Paid,
		)
		if isFound {
			errmsg := fmt.Sprintf("# recordAllPreparedBills # Error: index already set Line:%d Cycle:%d Producer:%s\n", cbill.Lineid, cbill.CycleID, resolvName(cbill.ProducerDeviceID))
			comment += errmsg
			// sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, errmsg)
		} else {
			if cbill.LineWhTotalPrice > 0 {
				//  set the specific customerbillingline in the store from its index
				k.SetProducerbillingline(
					ctx,
					cbill,
				)
				comment += fmt.Sprintf("# recordAllPreparedBills # OK Producer billing line REGISTERED Cycle:%d Line:%d Phase:%d Total:%d %s Producer:%s Customer:%s\n", cbill.CycleID, cbill.Lineid, cbill.Phase, cbill.LineWhTotalPrice, cbill.Curency, resolvName(cbill.ProducerDeviceID), resolvName(cbill.CustomerDeviceID))
			} else {
				comment += fmt.Sprintf("# recordAllPreparedBills # WARNING price =0 Cycle:%d Line:%d Phase:%d Total:%d Producer:%s %s Customer:%s\n", cbill.CycleID, cbill.Lineid, cbill.Phase, cbill.LineWhTotalPrice, cbill.Curency, resolvName(cbill.ProducerDeviceID), resolvName(cbill.CustomerDeviceID))
			}
		}
	}

	// TO DO: save the bill in Json

	elapsed := time.Since(start)
	comment += fmt.Sprintf("### END ### recordAllPreparedBills took %s @ %s ###############\n", elapsed, time.Now())
	writelog(comment)
	return comment, nil
}

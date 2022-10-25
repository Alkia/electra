package keeper
// electrad query meter currentcycle-id
// electrad tx meter prepare-bill [cycle-id] [record]
// electrad tx meter prepare-bill 78 false --from bob -y

import (
	"context"
	"fmt"
	"encoding/json"
	"time"
	"math"

	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setCustomerbillingline(lineid uint64, cycleid uint64, lineWh uint64, lineWhPrice uint64, customerDeviceID string, producerID string, contractID string, curency string, decremented uint64, phase uint64)(L types.Customerbillingline){
	var temp types.Customerbillingline = types.Customerbillingline {
		Lineid : 				lineid,
		CycleID :				cycleid,
		LineWh :				decremented,	
		CustomerDeviceID :		customerDeviceID,
		ProducerDeviceID :		producerID, 
		LineWhPrice :			lineWhPrice,
		LineWhTotalPrice :		(lineWhPrice * decremented),   // BEFORE :(lineWhPrice * lineWh),
		Curency 	:			curency,
		BillContractID :		contractID,
		Phase:					phase,
	}
	return temp
}


func setProducerbillingline(lineid uint64, cycleid uint64, lineWh uint64, lineWhPrice uint64, customerDeviceID string, producerID string, billContractID string, curency string, decremented uint64, phase uint64)(L types.Producerbillingline){
	var temp types.Producerbillingline = types.Producerbillingline {
		Lineid : 				lineid,
		CycleID :				cycleid,
		LineWh :				decremented,	
		CustomerDeviceID :		customerDeviceID,
		ProducerDeviceID :		producerID, 
		LineWhPrice :			lineWhPrice,
		LineWhTotalPrice :		(lineWhPrice * decremented), // Before(lineWhPrice * lineWh),
		Curency 	:			curency,
		BillContractID :		billContractID,
		Phase:					phase,
	}
	return temp
}


type meterReading struct {
	whphase1		uint64
	whphase2 		uint64
	whphase3		uint64
}

type meterReadingInOut struct {    // Watt Hours
	inphase1		uint64
	inphase2 		uint64
	inphase3		uint64
	outphase1		uint64
	outphase2 		uint64
	outphase3		uint64
}

// Get Meter Readings from the blockchain // Follow only once the chain to reduce load 
func (k Keeper) loadMeterReadingValues(ctx sdk.Context, cycleID uint64)(map[string]meterReading, map[string]meterReading, map[string]meterReading, map[string]meterReading, error) {   
	// Local Variables
	var	previousConsumerMap	map[string]meterReading = make(map[string]meterReading)
	var previousProducerMap	map[string]meterReading = make(map[string]meterReading)
	var currentConsumerMap	map[string]meterReading = make(map[string]meterReading)
	var currentProducerMap  map[string]meterReading = make(map[string]meterReading)
	// Find the cycle start and end timestamps
	theCycle, _ := k.GetBillingcycles(ctx, cycleID)
		currenttimebegin := theCycle.Begin
		currenttimeend   := theCycle.End
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MeterreadingsKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})
	defer iterator.Close()
	for ; iterator.Valid(); iterator.Next() {
		var val types.Meterreadings								// The original format on the block chain
		var mrInn meterReading = currentConsumerMap[val.DeviceID]  // To save memory usage we use this type that is far more compact
		var mrOUT meterReading = currentProducerMap[val.DeviceID]  // To save memory usage we use this type that is far more compact		
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if ((val.Timestamp < currenttimebegin)) { // More safe than ((val.Timestamp <= prevtimeend))
			switch val.Phase {
				case 1: {							// Previous Cycles
					if (mrInn.whphase1 < val.Whin)   { mrInn.whphase1 = val.Whin  ; previousConsumerMap[val.DeviceID] = mrInn } // values can come in disorder so we upgrade only if it is bigger
					if (mrOUT.whphase1 < val.Whout)  { mrOUT.whphase1 = val.Whout ; previousProducerMap[val.DeviceID] = mrOUT } // values can come in disorder so we upgrade only if it is bigger
				} 
				case 2: {
					if (mrInn.whphase2 < val.Whin)   { mrInn.whphase2 = val.Whin  ; previousConsumerMap[val.DeviceID] = mrInn } // values can come in disorder so we upgrade only if it is bigger
					if (mrOUT.whphase2 < val.Whout)  { mrOUT.whphase2 = val.Whout ; previousProducerMap[val.DeviceID] = mrOUT } // values can come in disorder so we upgrade only if it is bigger
				} 
				case 3: {
					if (mrInn.whphase3 < val.Whin)   { mrInn.whphase3 = val.Whin  ; previousConsumerMap[val.DeviceID] = mrInn } // values can come in disorder so we upgrade only if it is bigger
					if (mrOUT.whphase3 < val.Whout)  { mrOUT.whphase3 = val.Whout ; previousProducerMap[val.DeviceID] = mrOUT } // values can come in disorder so we upgrade only if it is bigger
				} 			
				} 	
		} else {
			if ((val.Timestamp >= currenttimebegin) && (val.Timestamp <= currenttimeend)) {
				switch val.Phase {
				case 1:  {								// Current Cycles
					if (mrInn.whphase1  < val.Whin)  { mrInn.whphase1 = val.Whin  ; currentConsumerMap[val.DeviceID] = mrInn } // values can come in disorder so we upgrade only if it is bigger
					if (mrOUT.whphase1 < val.Whout)  { mrOUT.whphase1 = val.Whout ; currentProducerMap[val.DeviceID] = mrOUT } // values can come in disorder so we upgrade only if it is bigger
				} 
				case 2: {
					if (mrInn.whphase2  < val.Whin)  { mrInn.whphase2 = val.Whin  ; currentConsumerMap[val.DeviceID] = mrInn } // values can come in disorder so we upgrade only if it is bigger
					if (mrOUT.whphase2 < val.Whout)  { mrOUT.whphase2 = val.Whout ; currentProducerMap[val.DeviceID] = mrOUT } // values can come in disorder so we upgrade only if it is bigger
				} 
				case 3: {
					if (mrInn.whphase3  < val.Whin)  { mrInn.whphase3 = val.Whin  ; currentConsumerMap[val.DeviceID] = mrInn } // values can come in disorder so we upgrade only if it is bigger
					if (mrOUT.whphase3 < val.Whout)  { mrOUT.whphase3 = val.Whout ; currentProducerMap[val.DeviceID] = mrOUT } // values can come in disorder so we upgrade only if it is bigger
				}  	
				}
			} 
		} 
	}
	return previousConsumerMap, previousProducerMap, currentConsumerMap, currentProducerMap, nil
}


// Find the producer contract offering the smallest customer price for any customer
func smallestAvailablePriceForAll(ppcMap map[string]types.PowerPurchaseContract, curency string, phase uint64, demandedWh uint64)(price uint64, sellerDeviceIDkey string, minPrice uint64, contractID string, err error) {
	var zminPrice uint64 = math.MaxUint64 // put the the iterator to the maximum possible value
	var zminPriceDeviceID, zContractID string = "", ""
	var zminPriceAvailableWh uint64 = 0 
	i:=1
	for _ , element := range ppcMap {  
			if (element.ContractForAllPrice < zminPrice) && (element.ContractForAllCurency == curency)  && (element.ContractActive == true) && (element.ContractForAll == true) && ( ((element.Phase1RemainingWh > 0) && (phase == 1)) ||((element.Phase2RemainingWh > 0) && (phase == 2)) || ((element.Phase3RemainingWh > 0) && (phase == 3)) ) {  
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
func smallestAvailablePricePreferred(ppaMap map[string]types.PpaMap, ppcMap map[string]types.PowerPurchaseContract,deviceIDkey, preferredCurency string, phase uint64, demandedWh uint64) (price uint64, sellerDeviceIDkey string, WhAvailableForCustomer uint64, contractID string, err error) {
	var minPrice uint64 = math.MaxUint64 // put the the iterator to the maximum possible value
	var minPriceDeviceID, zContractID string =  "", ""
	var minPriceAvailableWh  uint64 = 0 
	i:=1
		for _ , element := range ppaMap {  
		if (element.ContractPreferredPrice < minPrice) && (element.ContractPreferredCurency ==preferredCurency) {  
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
func decrementPpcRemainingWh(ppcMap map[string]types.PowerPurchaseContract, deviceID string,  phase uint64, WhToDecrement uint64) (remainsToDecrement uint64, decremented uint64, err error) {	// decrement the producer 
	var currentWh, zremainsToDecrement,  zdecremented  uint64 = 0 , 0, 0
	var tempPPC types.PowerPurchaseContract = ppcMap[deviceID]
	switch phase {		// decrement according to the phase
		case 1:
			{
				currentWh = ppcMap[deviceID].Phase1RemainingWh  
				if (currentWh >= WhToDecrement) {
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
			if (currentWh >= WhToDecrement) {
				tempPPC.Phase2RemainingWh = currentWh - WhToDecrement
				zdecremented = WhToDecrement	
			} else {
				tempPPC.Phase2RemainingWh = 0
				zremainsToDecrement = WhToDecrement - currentWh
				zdecremented = currentWh
			}
		case 3:
			currentWh = ppcMap[deviceID].Phase3RemainingWh
			if (currentWh >= WhToDecrement) {
				tempPPC.Phase3RemainingWh = currentWh - WhToDecrement
				zdecremented = WhToDecrement	
			} else {
				tempPPC.Phase3RemainingWh = 0
				zremainsToDecrement = WhToDecrement - currentWh
				zdecremented = currentWh
			}
	}
	ppcMap[deviceID] = tempPPC 									// Update		
	return zremainsToDecrement,  zdecremented, err
}


// Function tested in /lab/test
// Build the bill for a specific user customerdeviceID
func buildBill(ppaMap map[string]types.PpaMap, ppcMap map[string]types.PowerPurchaseContract, customerDeviceID string, consumedWh uint64, currency string, consumerBillLines []types.Customerbillingline, producerBillLines []types.Producerbillingline, customerbill types.Customerbills, producerbill types.Producerbills, phase uint64, cycleID uint64, moduleParamBestForCustomer bool)(cBillingline []types.Customerbillingline, pBillLines []types.Producerbillingline, cbill  types.Customerbills, pbill types.Producerbills, err error){
		const maxBillingIteration = 16 	
		var comment string = ""
		var loopcount int = 0
		var lineID, remainsToDecrement, decremented uint64 = 0, 0, 0						// Iteration variable for energy calculation reinitialized at 0	
		var thisCustomerbill types.Customerbills = customerbill 				// Get the current bill for customer customerDeviceID
		thisCustomerbill.BillCurrency = currency						// Set the currency
		for ((consumedWh > 0) && (loopcount < maxBillingIteration) && (err == nil)) {
			loopcount++
			lineID++
			decremented = 0
			comment += fmt.Sprintf("=> buildBill Iteration #%d\n", loopcount) 													// Debug_Trace
			aPrice, aSellerID, aWhAvailableForCustomer,  aContractID, _ := smallestAvailablePriceForAll(ppcMap, currency, phase, consumedWh)
			pPrice, pSellerID, pWhAvailableForCustomer,  pContractID, _ := smallestAvailablePricePreferred(ppaMap, ppcMap, customerDeviceID, currency, phase, consumedWh)	
			comment += fmt.Sprintf(">> buildBill required=%d | aPrice %d aWhAvailable %d | pPrice %d, pWhAvailable %d |\n", consumedWh, aPrice , aWhAvailableForCustomer, pPrice , pWhAvailableForCustomer)	
			if ((pWhAvailableForCustomer == 0) && (aWhAvailableForCustomer ==0)) {			
					// Throw error
					stErr := "No remaining WH in any active contract\n"		
					comment += fmt.Sprintf(stErr)	//err = errors.New(stErr) //log.Println(err)
				}  else {
					// Write the billing lines // Settle both consumer and producer billLines   
					switch (moduleParamBestForCustomer){
						case true:  {
							if (aPrice > pPrice) && (pWhAvailableForCustomer > 1) {
								// Choose the pPrice
								before:=ppcMap[pSellerID].Phase1RemainingWh	
								// DEBUG fmt.Printf("  *** Choose the pPrice | before %d seller:%s\n", before, pSellerID)
								remainsToDecrement, decremented, _ = decrementPpcRemainingWh(ppcMap, pSellerID, phase, consumedWh)									// DEBUG  
								after:=ppcMap[pSellerID].Phase1RemainingWh	
								// DEBUG fmt.Printf("  *** Choose the pPrice | after %d seller:%s\n", after, pSellerID)								// DEBUG 
								comment += fmt.Sprintf(">> buildBill | BestForCust=%t > Choose pPrice | before:%dWh after:%dWh remainsToDecrement:%d decremented:%d from seller having %d %s\n", moduleParamBestForCustomer, before, after, remainsToDecrement, decremented, pWhAvailableForCustomer, pSellerID)	
								consumerBillLines = append(consumerBillLines, setCustomerbillingline(lineID, cycleID, pWhAvailableForCustomer, pPrice,  customerDeviceID, pSellerID,pContractID, currency, decremented, phase))	
								thisCustomerbill.BillTotalPrice += pPrice * decremented 		
								thisCustomerbill.BillTotalWh += decremented 	
								producerBillLines = append(producerBillLines, setProducerbillingline(lineID, cycleID, pWhAvailableForCustomer, pPrice, customerDeviceID, pSellerID,  pContractID, currency, decremented, phase)) 				// Add to the producer line
								} else {
								if ( aWhAvailableForCustomer > 1) {	// Select the best price for the customer what ever it covers only a fraction of the WH consumed
								// Choose the aPrice	
								before:=ppcMap[aSellerID].Phase1RemainingWh	
								remainsToDecrement, decremented,  _ = decrementPpcRemainingWh(ppcMap, aSellerID, phase, consumedWh) 			
								after:=ppcMap[aSellerID].Phase1RemainingWh	
								comment += fmt.Sprintf(">> buildBill BestForCust=%t > Choose aPrice | before:%dWh after:%dWh remainsToDecrement:%d decremented:%d seller having:%d at price:%d from contract:%s seller%s\n",moduleParamBestForCustomer, before, after, remainsToDecrement, decremented, aWhAvailableForCustomer,  aPrice,  aContractID,  aSellerID)	
								consumerBillLines = append(consumerBillLines, setCustomerbillingline(lineID, cycleID, aWhAvailableForCustomer, aPrice, customerDeviceID, aSellerID, aContractID, currency, decremented, phase)) 	//
								thisCustomerbill.BillTotalPrice += aPrice * decremented 	
								thisCustomerbill.BillTotalWh += decremented 	
								producerBillLines = append(producerBillLines, setProducerbillingline(lineID, cycleID, aWhAvailableForCustomer, aPrice, customerDeviceID, aSellerID, aContractID, currency, decremented, phase)) 				//
								} else { 		// Throw error
									comment += fmt.Sprintf(" >> ERROR No remaining WH in any active contract for consumer %s phase &d cycleid:\n", customerDeviceID ,phase)		
									comment += fmt.Sprintf("======================================================\n")
	
								}	
							}
						}
					case false: { if(aPrice >= pPrice ){
							// Choose the aPrice
							remainsToDecrement, decremented, _ = decrementPpcRemainingWh(ppcMap, aSellerID, phase, consumedWh) 																	//
							consumerBillLines = append(consumerBillLines, setCustomerbillingline(lineID, cycleID, aWhAvailableForCustomer, aPrice, customerDeviceID, aSellerID, aContractID, currency, decremented, phase)) 	//
							thisCustomerbill.BillTotalPrice += aPrice * decremented 																							//
							thisCustomerbill.BillTotalWh += decremented 																									//
							producerBillLines = append(producerBillLines, setProducerbillingline(lineID, cycleID, aWhAvailableForCustomer, aPrice, customerDeviceID,  aSellerID, aContractID, currency, decremented, phase)) 				// 
						} else {											// Select the best price for the producer
							// Choose the pPrice
							remainsToDecrement, decremented, _ = decrementPpcRemainingWh(ppcMap, pSellerID, phase, consumedWh)																	//
							consumerBillLines = append(consumerBillLines, setCustomerbillingline(lineID, cycleID, pWhAvailableForCustomer, pPrice, customerDeviceID,  pSellerID, pContractID, currency, decremented, phase))		//
							thisCustomerbill.BillTotalPrice += pPrice * decremented 																							//
							thisCustomerbill.BillTotalWh += decremented 																										//
							producerBillLines = append(producerBillLines, setProducerbillingline(lineID, cycleID, pWhAvailableForCustomer, aPrice, customerDeviceID, aSellerID, aContractID, currency, decremented, phase)) 				//
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
		var currentbillCycleID uint64 = CycleID	
		var consumedWh uint64 = 0	
		var ppcMap = make(map[string]types.PowerPurchaseContract)
		var ppaMap = make(map[string]types.PpaMap) 	
			//var remainsToDecrement, decremented uint64
			//var consumedWh uint64 = 0	

		// CycleID definitions
		PreviousCycleID := CycleID
		PreviousCycleID--								// Decrement the current cycle ID to get the previous
		
		comment += fmt.Sprintf("CycleID: %d  Previous CycleID: %d\n", CycleID, PreviousCycleID)
		ctx := sdk.UnwrapSDKContext(goCtx)
		var ppcList []types.PowerPurchaseContract = k.GetAllPowerPurchaseContract(ctx)  	// from x/meter/keeper/power_purchase_contract.go
		var ppaList []types.PpaMap = k.GetAllPpaMap(ctx)   // from x/meter/keeper/ppa_map.go GetAllPpaMap returns all ppaMap  func (k Keeper) GetAllPpaMap(ctx sdk.Context) (list []types.PpaMap)

		/* Audit */
			comment += "============= PPC ================\n"
			for _, element := range ppcList{
				comment += fmt.Sprintf("PPC: %s %s\n",element.ContractID,element.ContractName)
			}
			comment += "============= PPA ================\n"
			for _, element := range ppaList{
				comment += fmt.Sprintf("ppa: %s Con:%s Prd:%s CID:%s\n",element.AgreementID, element.ConsumerDeviceID, element.ProducerDeviceID, element.ContractID)
			}
		
		previousCycleConsumeInMap, previousCycleProduceOutMap, currentConsumeInMap, currentProduceOutMap, _ := k.loadMeterReadingValues(ctx, CycleID)

		/* Audit data load */
		comment += "============= currentConsumeInMap ================\n"
		for key, element := range currentConsumeInMap{
			comment += fmt.Sprintf("currentConsumeInMap: %s IN:%d\n",key,element.whphase1)
		}
		comment += "============= currentProduceOutMap ================\n"
		for key, element := range currentProduceOutMap{
			comment += fmt.Sprintf("currentProduceOutMap: %s OUT:%d\n",key,element.whphase1)
		}
		comment += "============= previousCycleConsumeInMap ================\n"
		for key, element := range previousCycleConsumeInMap{
			comment += fmt.Sprintf("previousCycleConsumeInMap: %s IN:%d\n",key,element.whphase1)
		}
		comment += "============= previousCycleProduceOutMap ================\n"
		for key, element := range previousCycleProduceOutMap{
			comment += fmt.Sprintf("previousCycleProduceOutMap: %s OUT:%d\n",key,element.whphase1)
		}
		writelog(comment)
		comment = ""
	// makePrepareBill | Step 1: Create for each customer his bill and the the related producer billing line
	for customerDeviceID, _ := range currentConsumeInMap {		// makePrepareBill Polls the current list of customers
		billCounter++
		var consumed meterReading // Get the amount of WH consumed & Set the WH consumed value per phase 
		consumed.whphase1	 = currentConsumeInMap[customerDeviceID].whphase1 - previousCycleConsumeInMap[customerDeviceID].whphase1
		consumed.whphase2 	 = currentConsumeInMap[customerDeviceID].whphase2 - previousCycleConsumeInMap[customerDeviceID].whphase2
		consumed.whphase3	 = currentConsumeInMap[customerDeviceID].whphase3 - previousCycleConsumeInMap[customerDeviceID].whphase3									
		var thisCustomerBill types.Customerbills  = customerbill[customerDeviceID]
		var thisProducerBill types.Producerbills  // = producerbill[producerDeviceID]

		thisCustomerBill = customerbill[customerDeviceID]
		thisCustomerBill.BillCycleID = currentbillCycleID 
		thisCustomerBill.BillDate = uint64(time.Now().Unix()) 
		thisCustomerBill.BillCurrency = customerDeviceID 
		thisCustomerBill.CustomerdeviceID = customerDeviceID
		thisCustomerBill.Paid = false
		for phase := uint64(1); phase < uint64(2); phase++ { // Add a For loop for phase1 / phase2 / phase3 
			switch (phase){																			
				case 1: consumedWh = consumed.whphase1
				case 2: consumedWh = consumed.whphase2
				case 3: consumedWh = consumed.whphase3
			}
			customerRequestedWh := consumedWh			// Keep the value to compare against
			comment += fmt.Sprintf(">> buildBill #%d phase %d ===  WH consumed (to be billed now): %d curremcy: %s id: %s\n", billCounter, phase, consumedWh, currency, customerDeviceID)
			customerBillLines, producerBillLines, thisCustomerBill, thisProducerBill, _ = buildBill(ppaMap, ppcMap, customerDeviceID, consumedWh, currency, customerBillLines, producerBillLines, thisCustomerBill, thisProducerBill, phase, currentbillCycleID, moduleParamBestForCustomer)
			// Check bill validity | Valid only IF all the requested ennergy has been invoiced
			if (thisCustomerBill.BillTotalWh == customerRequestedWh){		
				thisCustomerBill.BillValid = true		 
			} else {									// Bill Uncompleted
				thisCustomerBill.BillValid = false		 	
				stErr := fmt.Sprintf(">>> buildBill ERROR Invoice valid:%t Consumer:%s billTotalWh=%d  Requested=%d Phase=%d\n", thisCustomerBill.BillValid, customerDeviceID, thisCustomerBill.BillTotalWh, customerRequestedWh, phase, currentbillCycleID)
				comment += stErr					//writelog(stErr) // Log error
			}
			customerbill[customerDeviceID] = thisCustomerBill	// Record the bill
			comment += fmt.Sprintf(">>>> Invoice valid:%t Consumer:%s billTotalWh=%d  Requested=%d Phase=%d\n", thisCustomerBill.BillValid, customerDeviceID, thisCustomerBill.BillTotalWh, customerRequestedWh, phase)
			// Update both consumer and producer WH values
			comment += fmt.Sprintln(">>>> consumerbill:", customerbill[customerDeviceID])
			comment += "\n"
		 }
	}
	comment += "### Output customerbill ###################\n"
	jsonStr, _ := json.MarshalIndent(customerbill, "", " ")
	comment += fmt.Sprintf("%+s\n",jsonStr) 
	comment += "### Output customerBillLines ###################\n"
	jsonStr, _ = json.MarshalIndent(customerBillLines, "", " ")
	comment += fmt.Sprintf("%+s\n",jsonStr) 
	comment += "### Output producerBillLines ###################\n"
	jsonStr, _ = json.MarshalIndent(producerBillLines, "", " ")
	comment += fmt.Sprintf("%+s\n",jsonStr) 
	elapsed := time.Since(start)
	comment += fmt.Sprintf("makePrepareBill Cycle:%d took %s @ %s\n", CycleID, elapsed,time.Now())
	writelog(comment)
	return customerbill, customerBillLines, producerBillLines, comment, err
}

func (k msgServer) recordAllPreparedBills(goCtx context.Context, Customerbill map[string]types.Customerbills, Customerbillinglines []types.Customerbillingline, Producerbillinglines []types.Producerbillingline)( string,  error){
	// Performance Management
	start := time.Now()	
	comment := "### START recordAllPreparedBills ########################\n"
	// TO DO
	elapsed := time.Since(start)
	comment += fmt.Sprintf("End recordAllPreparedBills took %s @ %s ###############\n", elapsed,time.Now())
	writelog(comment)
return comment, nil
}
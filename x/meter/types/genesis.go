package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		MeterreadingsList:         []Meterreadings{},
		MeterdirectoryList:        []Meterdirectory{},
		PowerPurchaseContractList: []PowerPurchaseContract{},
		PpaMapList:                []PpaMap{},
		BillingcyclesList:         []Billingcycles{},
		CustomerbillinglineList:   []Customerbillingline{},
		CustomerbillsList:         []Customerbills{},
		ProducerbillinglineList:   []Producerbillingline{},
		ProducerbillsList:         []Producerbills{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in meterreadings
	meterreadingsIndexMap := make(map[string]struct{})

	for _, elem := range gs.MeterreadingsList {
		index := string(MeterreadingsKey(elem.DeviceID, elem.Timestamp))
		if _, ok := meterreadingsIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for meterreadings")
		}
		meterreadingsIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in meterdirectory
	meterdirectoryIndexMap := make(map[string]struct{})

	for _, elem := range gs.MeterdirectoryList {
		index := string(MeterdirectoryKey(elem.DeviceID, elem.Barcodeserial))
		if _, ok := meterdirectoryIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for meterdirectory")
		}
		meterdirectoryIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in powerPurchaseContract
	powerPurchaseContractIndexMap := make(map[string]struct{})

	for _, elem := range gs.PowerPurchaseContractList {
		index := string(PowerPurchaseContractKey(elem.ContractID, elem.ContractDeviceID))
		if _, ok := powerPurchaseContractIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for powerPurchaseContract")
		}
		powerPurchaseContractIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in ppaMap
	ppaMapIndexMap := make(map[string]struct{})

	for _, elem := range gs.PpaMapList {
		index := string(PpaMapKey(elem.ConsumerDeviceID, elem.AgreementID, elem.AgreementActive, elem.ContractID))
		if _, ok := ppaMapIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for ppaMap")
		}
		ppaMapIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in billingcycles
	billingcyclesIndexMap := make(map[string]struct{})

	for _, elem := range gs.BillingcyclesList {
		index := string(BillingcyclesKey(elem.CycleID))
		if _, ok := billingcyclesIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for billingcycles")
		}
		billingcyclesIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in customerbillingline
	customerbillinglineIndexMap := make(map[string]struct{})

	for _, elem := range gs.CustomerbillinglineList {
		index := string(CustomerbillinglineKey(elem.CustomerDeviceID, elem.CycleID, elem.Lineid, elem.Paid))
		if _, ok := customerbillinglineIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for customerbillingline")
		}
		customerbillinglineIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in customerbills
	customerbillsIndexMap := make(map[string]struct{})

	for _, elem := range gs.CustomerbillsList {
		index := string(CustomerbillsKey(elem.BillCycleID, elem.CustomerDeviceID))
		if _, ok := customerbillsIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for customerbills")
		}
		customerbillsIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in producerbillingline
	producerbillinglineIndexMap := make(map[string]struct{})

	for _, elem := range gs.ProducerbillinglineList {
		index := string(ProducerbillinglineKey(elem.ProducerDeviceID, elem.CycleID, elem.Lineid, elem.Paid))
		if _, ok := producerbillinglineIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for producerbillingline")
		}
		producerbillinglineIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in producerbills
	producerbillsIndexMap := make(map[string]struct{})

	for _, elem := range gs.ProducerbillsList {
		index := string(ProducerbillsKey(elem.BillCycleID, elem.ProducerDeviceID))
		if _, ok := producerbillsIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for producerbills")
		}
		producerbillsIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}

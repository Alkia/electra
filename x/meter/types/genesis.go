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
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}

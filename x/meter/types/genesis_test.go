package types_test

import (
	"testing"

	"electra/x/meter/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				MeterreadingsList: []types.Meterreadings{
					{
						DeviceID:  "0",
						Timestamp: 0,
					},
					{
						DeviceID:  "1",
						Timestamp: 1,
					},
				},
				MeterdirectoryList: []types.Meterdirectory{
					{
						DeviceID:      "0",
						Barcodeserial: "0",
					},
					{
						DeviceID:      "1",
						Barcodeserial: "1",
					},
				},
				PowerPurchaseContractList: []types.PowerPurchaseContract{
					{
						ContractID:       "0",
						ContractDeviceID: "0",
					},
					{
						ContractID:       "1",
						ContractDeviceID: "1",
					},
				},
				PpaMapList: []types.PpaMap{
					{
						ConsumerDeviceID: "0",
						AgreementID:      "0",
						AgreementActive:  true,
						ContractID:       "0",
					},
					{
						ConsumerDeviceID: "1",
						AgreementID:      "1",
						AgreementActive:  false,
						ContractID:       "1",
					},
				},
				BillingcyclesList: []types.Billingcycles{
					{
						CycleID: 0,
					},
					{
						CycleID: 1,
					},
				},
				CustomerbillinglineList: []types.Customerbillingline{
					{
						CustomerDeviceID: "0",
						CycleID:          0,
						Lineid:           0,
						Paid:             true,
					},
					{
						CustomerDeviceID: "1",
						CycleID:          1,
						Lineid:           1,
						Paid:             false,
					},
				},
				CustomerbillsList: []types.Customerbills{
					{
						BillCycleID:      0,
						CustomerDeviceID: "0",
					},
					{
						BillCycleID:      1,
						CustomerDeviceID: "1",
					},
				},
				ProducerbillinglineList: []types.Producerbillingline{
					{
						ProducerDeviceID: "0",
						CycleID:          0,
						Lineid:           0,
						Paid:             true,
					},
					{
						ProducerDeviceID: "1",
						CycleID:          1,
						Lineid:           1,
						Paid:             false,
					},
				},
				ProducerbillsList: []types.Producerbills{
					{
						BillCycleID:      0,
						ProducerDeviceID: "0",
					},
					{
						BillCycleID:      1,
						ProducerDeviceID: "1",
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated meterreadings",
			genState: &types.GenesisState{
				MeterreadingsList: []types.Meterreadings{
					{
						DeviceID:  "0",
						Timestamp: 0,
					},
					{
						DeviceID:  "0",
						Timestamp: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated meterdirectory",
			genState: &types.GenesisState{
				MeterdirectoryList: []types.Meterdirectory{
					{
						DeviceID:      "0",
						Barcodeserial: "0",
					},
					{
						DeviceID:      "0",
						Barcodeserial: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated powerPurchaseContract",
			genState: &types.GenesisState{
				PowerPurchaseContractList: []types.PowerPurchaseContract{
					{
						ContractID:       "0",
						ContractDeviceID: "0",
					},
					{
						ContractID:       "0",
						ContractDeviceID: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated ppaMap",
			genState: &types.GenesisState{
				PpaMapList: []types.PpaMap{
					{
						ConsumerDeviceID: "0",
						AgreementID:      "0",
						AgreementActive:  true,
						ContractID:       "0",
					},
					{
						ConsumerDeviceID: "0",
						AgreementID:      "0",
						AgreementActive:  true,
						ContractID:       "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated billingcycles",
			genState: &types.GenesisState{
				BillingcyclesList: []types.Billingcycles{
					{
						CycleID: 0,
					},
					{
						CycleID: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated customerbillingline",
			genState: &types.GenesisState{
				CustomerbillinglineList: []types.Customerbillingline{
					{
						CustomerDeviceID: "0",
						CycleID:          0,
						Lineid:           0,
						Paid:             true,
					},
					{
						CustomerDeviceID: "0",
						CycleID:          0,
						Lineid:           0,
						Paid:             true,
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated customerbills",
			genState: &types.GenesisState{
				CustomerbillsList: []types.Customerbills{
					{
						BillCycleID:      0,
						CustomerDeviceID: "0",
					},
					{
						BillCycleID:      0,
						CustomerDeviceID: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated producerbillingline",
			genState: &types.GenesisState{
				ProducerbillinglineList: []types.Producerbillingline{
					{
						ProducerDeviceID: "0",
						CycleID:          0,
						Lineid:           0,
						Paid:             true,
					},
					{
						ProducerDeviceID: "0",
						CycleID:          0,
						Lineid:           0,
						Paid:             true,
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated producerbills",
			genState: &types.GenesisState{
				ProducerbillsList: []types.Producerbills{
					{
						BillCycleID:      0,
						ProducerDeviceID: "0",
					},
					{
						BillCycleID:      0,
						ProducerDeviceID: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}

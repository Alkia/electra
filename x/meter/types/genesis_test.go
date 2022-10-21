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

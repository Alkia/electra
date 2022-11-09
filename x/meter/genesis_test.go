package meter_test

import (
	"testing"

	keepertest "electra/testutil/keeper"
	"electra/testutil/nullify"
	"electra/x/meter"
	"electra/x/meter/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

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
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MeterKeeper(t)
	meter.InitGenesis(ctx, *k, genesisState)
	got := meter.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.MeterreadingsList, got.MeterreadingsList)
	require.ElementsMatch(t, genesisState.MeterdirectoryList, got.MeterdirectoryList)
	require.ElementsMatch(t, genesisState.PowerPurchaseContractList, got.PowerPurchaseContractList)
	// this line is used by starport scaffolding # genesis/test/assert
}

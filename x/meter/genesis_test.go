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
	require.ElementsMatch(t, genesisState.PpaMapList, got.PpaMapList)
	require.ElementsMatch(t, genesisState.BillingcyclesList, got.BillingcyclesList)
	require.ElementsMatch(t, genesisState.CustomerbillinglineList, got.CustomerbillinglineList)
	require.ElementsMatch(t, genesisState.CustomerbillsList, got.CustomerbillsList)
	require.ElementsMatch(t, genesisState.ProducerbillinglineList, got.ProducerbillinglineList)
	require.ElementsMatch(t, genesisState.ProducerbillsList, got.ProducerbillsList)
	// this line is used by starport scaffolding # genesis/test/assert
}

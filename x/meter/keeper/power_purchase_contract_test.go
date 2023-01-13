package keeper_test

import (
	"strconv"
	"testing"

	keepertest "electra/testutil/keeper"
	"electra/testutil/nullify"
	"electra/x/meter/keeper"
	"electra/x/meter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNPowerPurchaseContract(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.PowerPurchaseContract {
	items := make([]types.PowerPurchaseContract, n)
	for i := range items {
		items[i].ContractID = strconv.Itoa(i)
		items[i].ContractDeviceID = strconv.Itoa(i)

		keeper.SetPowerPurchaseContract(ctx, items[i])
	}
	return items
}

func TestPowerPurchaseContractGet(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNPowerPurchaseContract(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetPowerPurchaseContract(ctx,
			item.ContractID,
			item.ContractDeviceID,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestPowerPurchaseContractRemove(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNPowerPurchaseContract(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePowerPurchaseContract(ctx,
			item.ContractID,
			item.ContractDeviceID,
		)
		_, found := keeper.GetPowerPurchaseContract(ctx,
			item.ContractID,
			item.ContractDeviceID,
		)
		require.False(t, found)
	}
}

func TestPowerPurchaseContractGetAll(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNPowerPurchaseContract(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllPowerPurchaseContract(ctx)),
	)
}

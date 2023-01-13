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

func createNCustomerbills(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Customerbills {
	items := make([]types.Customerbills, n)
	for i := range items {
		items[i].BillCycleID = uint64(i)
		items[i].CustomerDeviceID = strconv.Itoa(i)

		keeper.SetCustomerbills(ctx, items[i])
	}
	return items
}

func TestCustomerbillsGet(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNCustomerbills(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCustomerbills(ctx,
			item.BillCycleID,
			item.CustomerDeviceID,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestCustomerbillsRemove(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNCustomerbills(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCustomerbills(ctx,
			item.BillCycleID,
			item.CustomerDeviceID,
		)
		_, found := keeper.GetCustomerbills(ctx,
			item.BillCycleID,
			item.CustomerDeviceID,
		)
		require.False(t, found)
	}
}

func TestCustomerbillsGetAll(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNCustomerbills(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCustomerbills(ctx)),
	)
}

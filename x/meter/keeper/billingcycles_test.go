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

func createNBillingcycles(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Billingcycles {
	items := make([]types.Billingcycles, n)
	for i := range items {
		items[i].CycleID = uint64(i)

		keeper.SetBillingcycles(ctx, items[i])
	}
	return items
}

func TestBillingcyclesGet(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNBillingcycles(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetBillingcycles(ctx,
			item.CycleID,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestBillingcyclesRemove(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNBillingcycles(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBillingcycles(ctx,
			item.CycleID,
		)
		_, found := keeper.GetBillingcycles(ctx,
			item.CycleID,
		)
		require.False(t, found)
	}
}

func TestBillingcyclesGetAll(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNBillingcycles(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllBillingcycles(ctx)),
	)
}

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

func createNProducerbills(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Producerbills {
	items := make([]types.Producerbills, n)
	for i := range items {
		items[i].BillCycleID = uint64(i)
		items[i].ProducerDeviceID = strconv.Itoa(i)

		keeper.SetProducerbills(ctx, items[i])
	}
	return items
}

func TestProducerbillsGet(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNProducerbills(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetProducerbills(ctx,
			item.BillCycleID,
			item.ProducerDeviceID,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestProducerbillsRemove(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNProducerbills(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveProducerbills(ctx,
			item.BillCycleID,
			item.ProducerDeviceID,
		)
		_, found := keeper.GetProducerbills(ctx,
			item.BillCycleID,
			item.ProducerDeviceID,
		)
		require.False(t, found)
	}
}

func TestProducerbillsGetAll(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNProducerbills(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllProducerbills(ctx)),
	)
}

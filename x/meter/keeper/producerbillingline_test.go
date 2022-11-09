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

func createNProducerbillingline(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Producerbillingline {
	items := make([]types.Producerbillingline, n)
	for i := range items {
		items[i].ProducerDeviceID = strconv.Itoa(i)
		items[i].CycleID = uint64(i)
		items[i].Lineid = uint64(i)
		items[i].Paid = false

		keeper.SetProducerbillingline(ctx, items[i])
	}
	return items
}

func TestProducerbillinglineGet(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNProducerbillingline(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetProducerbillingline(ctx,
			item.ProducerDeviceID,
			item.CycleID,
			item.Lineid,
			item.Paid,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestProducerbillinglineRemove(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNProducerbillingline(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveProducerbillingline(ctx,
			item.ProducerDeviceID,
			item.CycleID,
			item.Lineid,
			item.Paid,
		)
		_, found := keeper.GetProducerbillingline(ctx,
			item.ProducerDeviceID,
			item.CycleID,
			item.Lineid,
			item.Paid,
		)
		require.False(t, found)
	}
}

func TestProducerbillinglineGetAll(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNProducerbillingline(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllProducerbillingline(ctx)),
	)
}

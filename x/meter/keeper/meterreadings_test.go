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

func createNMeterreadings(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Meterreadings {
	items := make([]types.Meterreadings, n)
	for i := range items {
		items[i].DeviceID = strconv.Itoa(i)
		items[i].Timestamp = uint64(i)

		keeper.SetMeterreadings(ctx, items[i])
	}
	return items
}

func TestMeterreadingsGet(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNMeterreadings(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetMeterreadings(ctx,
			item.DeviceID,
			item.Timestamp,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestMeterreadingsRemove(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNMeterreadings(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveMeterreadings(ctx,
			item.DeviceID,
			item.Timestamp,
		)
		_, found := keeper.GetMeterreadings(ctx,
			item.DeviceID,
			item.Timestamp,
		)
		require.False(t, found)
	}
}

func TestMeterreadingsGetAll(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNMeterreadings(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllMeterreadings(ctx)),
	)
}

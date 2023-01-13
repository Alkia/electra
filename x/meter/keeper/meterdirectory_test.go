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

func createNMeterdirectory(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Meterdirectory {
	items := make([]types.Meterdirectory, n)
	for i := range items {
		items[i].DeviceID = strconv.Itoa(i)
		items[i].Barcodeserial = strconv.Itoa(i)

		keeper.SetMeterdirectory(ctx, items[i])
	}
	return items
}

func TestMeterdirectoryGet(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNMeterdirectory(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetMeterdirectory(ctx,
			item.DeviceID,
			item.Barcodeserial,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestMeterdirectoryRemove(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNMeterdirectory(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveMeterdirectory(ctx,
			item.DeviceID,
			item.Barcodeserial,
		)
		_, found := keeper.GetMeterdirectory(ctx,
			item.DeviceID,
			item.Barcodeserial,
		)
		require.False(t, found)
	}
}

func TestMeterdirectoryGetAll(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNMeterdirectory(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllMeterdirectory(ctx)),
	)
}

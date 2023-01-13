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

func createNPpaMap(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.PpaMap {
	items := make([]types.PpaMap, n)
	for i := range items {
		items[i].ConsumerDeviceID = strconv.Itoa(i)
		items[i].AgreementID = strconv.Itoa(i)
		items[i].AgreementActive = false
		items[i].ContractID = strconv.Itoa(i)

		keeper.SetPpaMap(ctx, items[i])
	}
	return items
}

func TestPpaMapGet(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNPpaMap(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetPpaMap(ctx,
			item.ConsumerDeviceID,
			item.AgreementID,
			item.AgreementActive,
			item.ContractID,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestPpaMapRemove(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNPpaMap(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePpaMap(ctx,
			item.ConsumerDeviceID,
			item.AgreementID,
			item.AgreementActive,
			item.ContractID,
		)
		_, found := keeper.GetPpaMap(ctx,
			item.ConsumerDeviceID,
			item.AgreementID,
			item.AgreementActive,
			item.ContractID,
		)
		require.False(t, found)
	}
}

func TestPpaMapGetAll(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	items := createNPpaMap(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllPpaMap(ctx)),
	)
}

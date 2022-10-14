package keeper_test

import (
	"testing"

	testkeeper "electra/testutil/keeper"
	"electra/x/meter/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.MeterKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
	require.EqualValues(t, params.MaxBillingIteration, k.MaxBillingIteration(ctx))
	require.EqualValues(t, params.ModuleParamBestForCustomer, k.ModuleParamBestForCustomer(ctx))
	require.EqualValues(t, params.PayAutomatically, k.PayAutomatically(ctx))
	require.EqualValues(t, params.BillingAdmin, k.BillingAdmin(ctx))
}

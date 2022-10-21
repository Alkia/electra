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

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MeterKeeper(t)
	meter.InitGenesis(ctx, *k, genesisState)
	got := meter.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}

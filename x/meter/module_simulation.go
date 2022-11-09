package meter

import (
	"math/rand"

	"electra/testutil/sample"
	metersimulation "electra/x/meter/simulation"
	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = metersimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	meterGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&meterGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {
	meterParams := types.DefaultParams()
	return []simtypes.ParamChange{
		simulation.NewSimParamChange(types.ModuleName, string(types.KeyMaxBillingIteration), func(r *rand.Rand) string {
			return string(types.Amino.MustMarshalJSON(meterParams.MaxBillingIteration))
		}),
		simulation.NewSimParamChange(types.ModuleName, string(types.KeyModuleParamBestForCustomer), func(r *rand.Rand) string {
			return string(types.Amino.MustMarshalJSON(meterParams.ModuleParamBestForCustomer))
		}),
		simulation.NewSimParamChange(types.ModuleName, string(types.KeyPayAutomatically), func(r *rand.Rand) string {
			return string(types.Amino.MustMarshalJSON(meterParams.PayAutomatically))
		}),
		simulation.NewSimParamChange(types.ModuleName, string(types.KeyBillingAdmin), func(r *rand.Rand) string {
			return string(types.Amino.MustMarshalJSON(meterParams.BillingAdmin))
		}),
	}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

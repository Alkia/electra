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
	opWeightMsgRecord = "op_weight_msg_record"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRecord int = 100

	opWeightMsgRecord3 = "op_weight_msg_record_3"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRecord3 int = 100

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

	var weightMsgRecord int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRecord, &weightMsgRecord, nil,
		func(_ *rand.Rand) {
			weightMsgRecord = defaultWeightMsgRecord
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRecord,
		metersimulation.SimulateMsgRecord(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgRecord3 int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRecord3, &weightMsgRecord3, nil,
		func(_ *rand.Rand) {
			weightMsgRecord3 = defaultWeightMsgRecord3
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRecord3,
		metersimulation.SimulateMsgRecord3(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

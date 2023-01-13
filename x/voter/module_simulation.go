package voter

import (
	"math/rand"

	"electra/testutil/sample"
	votersimulation "electra/x/voter/simulation"
	"electra/x/voter/types"
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
	_ = votersimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreatePoll = "op_weight_msg_poll"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreatePoll int = 100

	opWeightMsgUpdatePoll = "op_weight_msg_poll"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdatePoll int = 100

	opWeightMsgDeletePoll = "op_weight_msg_poll"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeletePoll int = 100

	opWeightMsgCreateVote = "op_weight_msg_vote"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateVote int = 100

	opWeightMsgUpdateVote = "op_weight_msg_vote"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateVote int = 100

	opWeightMsgDeleteVote = "op_weight_msg_vote"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteVote int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	voterGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		PollList: []types.Poll{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		PollCount: 2,
		VoteList: []types.Vote{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		VoteCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&voterGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreatePoll int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreatePoll, &weightMsgCreatePoll, nil,
		func(_ *rand.Rand) {
			weightMsgCreatePoll = defaultWeightMsgCreatePoll
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreatePoll,
		votersimulation.SimulateMsgCreatePoll(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdatePoll int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdatePoll, &weightMsgUpdatePoll, nil,
		func(_ *rand.Rand) {
			weightMsgUpdatePoll = defaultWeightMsgUpdatePoll
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdatePoll,
		votersimulation.SimulateMsgUpdatePoll(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeletePoll int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeletePoll, &weightMsgDeletePoll, nil,
		func(_ *rand.Rand) {
			weightMsgDeletePoll = defaultWeightMsgDeletePoll
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeletePoll,
		votersimulation.SimulateMsgDeletePoll(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateVote int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateVote, &weightMsgCreateVote, nil,
		func(_ *rand.Rand) {
			weightMsgCreateVote = defaultWeightMsgCreateVote
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateVote,
		votersimulation.SimulateMsgCreateVote(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateVote int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateVote, &weightMsgUpdateVote, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateVote = defaultWeightMsgUpdateVote
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateVote,
		votersimulation.SimulateMsgUpdateVote(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteVote int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteVote, &weightMsgDeleteVote, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteVote = defaultWeightMsgDeleteVote
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteVote,
		votersimulation.SimulateMsgDeleteVote(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

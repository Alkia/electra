package voter

import (
	"electra/x/voter/keeper"
	"electra/x/voter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the poll
	for _, elem := range genState.PollList {
		k.SetPoll(ctx, elem)
	}

	// Set poll count
	k.SetPollCount(ctx, genState.PollCount)
	// Set all the vote
	for _, elem := range genState.VoteList {
		k.SetVote(ctx, elem)
	}

	// Set vote count
	k.SetVoteCount(ctx, genState.VoteCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.PollList = k.GetAllPoll(ctx)
	genesis.PollCount = k.GetPollCount(ctx)
	genesis.VoteList = k.GetAllVote(ctx)
	genesis.VoteCount = k.GetVoteCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}

package keeper_test

import (
	"context"
	"testing"

	keepertest "electra/testutil/keeper"
	"electra/x/voter/keeper"
	"electra/x/voter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.VoterKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}

package keeper_test

import (
	"context"
	"testing"

	keepertest "electra/testutil/keeper"
	"electra/x/meter/keeper"
	"electra/x/meter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.MeterKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}

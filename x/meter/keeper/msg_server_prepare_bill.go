package keeper

import (
	"context"

	"electra/x/meter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) PrepareBill(goCtx context.Context, msg *types.MsgPrepareBill) (*types.MsgPrepareBillResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgPrepareBillResponse{}, nil
}

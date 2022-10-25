package keeper

import (
	"context"

	"electra/x/meter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Record3(goCtx context.Context, msg *types.MsgRecord3) (*types.MsgRecord3Response, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgRecord3Response{}, nil
}

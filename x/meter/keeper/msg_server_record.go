package keeper

import (
	"context"

	"electra/x/meter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Record(goCtx context.Context, msg *types.MsgRecord) (*types.MsgRecordResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgRecordResponse{}, nil
}

package keeper

import (
	"context"
	"fmt"

	"electra/x/voter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreatePoll(goCtx context.Context, msg *types.MsgCreatePoll) (*types.MsgCreatePollResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var poll = types.Poll{
		Creator: msg.Creator,
		Title:   msg.Title,
		Options: msg.Options,
	}

	id := k.AppendPoll(
		ctx,
		poll,
	)

	return &types.MsgCreatePollResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdatePoll(goCtx context.Context, msg *types.MsgUpdatePoll) (*types.MsgUpdatePollResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var poll = types.Poll{
		Creator: msg.Creator,
		Id:      msg.Id,
		Title:   msg.Title,
		Options: msg.Options,
	}

	// Checks that the element exists
	val, found := k.GetPoll(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetPoll(ctx, poll)

	return &types.MsgUpdatePollResponse{}, nil
}

func (k msgServer) DeletePoll(goCtx context.Context, msg *types.MsgDeletePoll) (*types.MsgDeletePollResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetPoll(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePoll(ctx, msg.Id)

	return &types.MsgDeletePollResponse{}, nil
}

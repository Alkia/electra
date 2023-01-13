package keeper

import (
	"context"
	"fmt"

	"electra/x/voter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateVote(goCtx context.Context, msg *types.MsgCreateVote) (*types.MsgCreateVoteResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var vote = types.Vote{
		Creator: msg.Creator,
		PollID:  msg.PollID,
		Option:  msg.Option,
	}

	id := k.AppendVote(
		ctx,
		vote,
	)

	return &types.MsgCreateVoteResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateVote(goCtx context.Context, msg *types.MsgUpdateVote) (*types.MsgUpdateVoteResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var vote = types.Vote{
		Creator: msg.Creator,
		Id:      msg.Id,
		PollID:  msg.PollID,
		Option:  msg.Option,
	}

	// Checks that the element exists
	val, found := k.GetVote(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetVote(ctx, vote)

	return &types.MsgUpdateVoteResponse{}, nil
}

func (k msgServer) DeleteVote(goCtx context.Context, msg *types.MsgDeleteVote) (*types.MsgDeleteVoteResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetVote(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveVote(ctx, msg.Id)

	return &types.MsgDeleteVoteResponse{}, nil
}

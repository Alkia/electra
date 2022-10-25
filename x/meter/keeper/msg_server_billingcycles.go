package keeper

import (
	"context"

	"electra/x/meter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateBillingcycles(goCtx context.Context, msg *types.MsgCreateBillingcycles) (*types.MsgCreateBillingcyclesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetBillingcycles(
		ctx,
		msg.CycleID,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var billingcycles = types.Billingcycles{
		Creator:  msg.Creator,
		CycleID:  msg.CycleID,
		Begin:    msg.Begin,
		End:      msg.End,
		Whin:     msg.Whin,
		Whout:    msg.Whout,
		Moneyin:  msg.Moneyin,
		Moneyout: msg.Moneyout,
		Curency:  msg.Curency,
		Valid:    msg.Valid,
		Paid:     msg.Paid,
	}

	k.SetBillingcycles(
		ctx,
		billingcycles,
	)
	return &types.MsgCreateBillingcyclesResponse{}, nil
}

func (k msgServer) UpdateBillingcycles(goCtx context.Context, msg *types.MsgUpdateBillingcycles) (*types.MsgUpdateBillingcyclesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBillingcycles(
		ctx,
		msg.CycleID,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var billingcycles = types.Billingcycles{
		Creator:  msg.Creator,
		CycleID:  msg.CycleID,
		Begin:    msg.Begin,
		End:      msg.End,
		Whin:     msg.Whin,
		Whout:    msg.Whout,
		Moneyin:  msg.Moneyin,
		Moneyout: msg.Moneyout,
		Curency:  msg.Curency,
		Valid:    msg.Valid,
		Paid:     msg.Paid,
	}

	k.SetBillingcycles(ctx, billingcycles)

	return &types.MsgUpdateBillingcyclesResponse{}, nil
}

func (k msgServer) DeleteBillingcycles(goCtx context.Context, msg *types.MsgDeleteBillingcycles) (*types.MsgDeleteBillingcyclesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBillingcycles(
		ctx,
		msg.CycleID,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveBillingcycles(
		ctx,
		msg.CycleID,
	)

	return &types.MsgDeleteBillingcyclesResponse{}, nil
}

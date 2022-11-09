package keeper

import (
	"context"

	"electra/x/meter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateCustomerbills(goCtx context.Context, msg *types.MsgCreateCustomerbills) (*types.MsgCreateCustomerbillsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetCustomerbills(
		ctx,
		msg.BillCycleID,
		msg.CustomerDeviceID,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var customerbills = types.Customerbills{
		Creator:          msg.Creator,
		BillCycleID:      msg.BillCycleID,
		CustomerDeviceID: msg.CustomerDeviceID,
		BillDate:         msg.BillDate,
		BillTotalWh:      msg.BillTotalWh,
		BillTotalPrice:   msg.BillTotalPrice,
		BillCurrency:     msg.BillCurrency,
		BillValid:        msg.BillValid,
		Paid:             msg.Paid,
	}

	k.SetCustomerbills(
		ctx,
		customerbills,
	)
	return &types.MsgCreateCustomerbillsResponse{}, nil
}

func (k msgServer) UpdateCustomerbills(goCtx context.Context, msg *types.MsgUpdateCustomerbills) (*types.MsgUpdateCustomerbillsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCustomerbills(
		ctx,
		msg.BillCycleID,
		msg.CustomerDeviceID,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var customerbills = types.Customerbills{
		Creator:          msg.Creator,
		BillCycleID:      msg.BillCycleID,
		CustomerDeviceID: msg.CustomerDeviceID,
		BillDate:         msg.BillDate,
		BillTotalWh:      msg.BillTotalWh,
		BillTotalPrice:   msg.BillTotalPrice,
		BillCurrency:     msg.BillCurrency,
		BillValid:        msg.BillValid,
		Paid:             msg.Paid,
	}

	k.SetCustomerbills(ctx, customerbills)

	return &types.MsgUpdateCustomerbillsResponse{}, nil
}

func (k msgServer) DeleteCustomerbills(goCtx context.Context, msg *types.MsgDeleteCustomerbills) (*types.MsgDeleteCustomerbillsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCustomerbills(
		ctx,
		msg.BillCycleID,
		msg.CustomerDeviceID,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCustomerbills(
		ctx,
		msg.BillCycleID,
		msg.CustomerDeviceID,
	)

	return &types.MsgDeleteCustomerbillsResponse{}, nil
}

package keeper

import (
	"context"

	"electra/x/meter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateCustomerbillingline(goCtx context.Context, msg *types.MsgCreateCustomerbillingline) (*types.MsgCreateCustomerbillinglineResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetCustomerbillingline(
		ctx,
		msg.CustomerDeviceID,
		msg.CycleID,
		msg.Lineid,
		msg.Paid,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var customerbillingline = types.Customerbillingline{
		Creator:          msg.Creator,
		CustomerDeviceID: msg.CustomerDeviceID,
		CycleID:          msg.CycleID,
		Lineid:           msg.Lineid,
		Paid:             msg.Paid,
		ProducerDeviceID: msg.ProducerDeviceID,
		BillContractID:   msg.BillContractID,
		LineWh:           msg.LineWh,
		LineWhPrice:      msg.LineWhPrice,
		Curency:          msg.Curency,
		LineWhTotalPrice: msg.LineWhTotalPrice,
		Phase:            msg.Phase,
	}

	k.SetCustomerbillingline(
		ctx,
		customerbillingline,
	)
	return &types.MsgCreateCustomerbillinglineResponse{}, nil
}

func (k msgServer) UpdateCustomerbillingline(goCtx context.Context, msg *types.MsgUpdateCustomerbillingline) (*types.MsgUpdateCustomerbillinglineResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCustomerbillingline(
		ctx,
		msg.CustomerDeviceID,
		msg.CycleID,
		msg.Lineid,
		msg.Paid,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var customerbillingline = types.Customerbillingline{
		Creator:          msg.Creator,
		CustomerDeviceID: msg.CustomerDeviceID,
		CycleID:          msg.CycleID,
		Lineid:           msg.Lineid,
		Paid:             msg.Paid,
		ProducerDeviceID: msg.ProducerDeviceID,
		BillContractID:   msg.BillContractID,
		LineWh:           msg.LineWh,
		LineWhPrice:      msg.LineWhPrice,
		Curency:          msg.Curency,
		LineWhTotalPrice: msg.LineWhTotalPrice,
		Phase:            msg.Phase,
	}

	k.SetCustomerbillingline(ctx, customerbillingline)

	return &types.MsgUpdateCustomerbillinglineResponse{}, nil
}

func (k msgServer) DeleteCustomerbillingline(goCtx context.Context, msg *types.MsgDeleteCustomerbillingline) (*types.MsgDeleteCustomerbillinglineResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetCustomerbillingline(
		ctx,
		msg.CustomerDeviceID,
		msg.CycleID,
		msg.Lineid,
		msg.Paid,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCustomerbillingline(
		ctx,
		msg.CustomerDeviceID,
		msg.CycleID,
		msg.Lineid,
		msg.Paid,
	)

	return &types.MsgDeleteCustomerbillinglineResponse{}, nil
}

package keeper

import (
	"context"

	"electra/x/meter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateProducerbillingline(goCtx context.Context, msg *types.MsgCreateProducerbillingline) (*types.MsgCreateProducerbillinglineResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetProducerbillingline(
		ctx,
		msg.ProducerDeviceID,
		msg.CycleID,
		msg.Lineid,
		msg.Paid,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var producerbillingline = types.Producerbillingline{
		Creator:          msg.Creator,
		ProducerDeviceID: msg.ProducerDeviceID,
		CycleID:          msg.CycleID,
		Lineid:           msg.Lineid,
		Paid:             msg.Paid,
		CustomerDeviceID: msg.CustomerDeviceID,
		BillContractID:   msg.BillContractID,
		LineWh:           msg.LineWh,
		LineWhPrice:      msg.LineWhPrice,
		Curency:          msg.Curency,
		LineWhTotalPrice: msg.LineWhTotalPrice,
		Phase:            msg.Phase,
	}

	k.SetProducerbillingline(
		ctx,
		producerbillingline,
	)
	return &types.MsgCreateProducerbillinglineResponse{}, nil
}

func (k msgServer) UpdateProducerbillingline(goCtx context.Context, msg *types.MsgUpdateProducerbillingline) (*types.MsgUpdateProducerbillinglineResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetProducerbillingline(
		ctx,
		msg.ProducerDeviceID,
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

	var producerbillingline = types.Producerbillingline{
		Creator:          msg.Creator,
		ProducerDeviceID: msg.ProducerDeviceID,
		CycleID:          msg.CycleID,
		Lineid:           msg.Lineid,
		Paid:             msg.Paid,
		CustomerDeviceID: msg.CustomerDeviceID,
		BillContractID:   msg.BillContractID,
		LineWh:           msg.LineWh,
		LineWhPrice:      msg.LineWhPrice,
		Curency:          msg.Curency,
		LineWhTotalPrice: msg.LineWhTotalPrice,
		Phase:            msg.Phase,
	}

	k.SetProducerbillingline(ctx, producerbillingline)

	return &types.MsgUpdateProducerbillinglineResponse{}, nil
}

func (k msgServer) DeleteProducerbillingline(goCtx context.Context, msg *types.MsgDeleteProducerbillingline) (*types.MsgDeleteProducerbillinglineResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetProducerbillingline(
		ctx,
		msg.ProducerDeviceID,
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

	k.RemoveProducerbillingline(
		ctx,
		msg.ProducerDeviceID,
		msg.CycleID,
		msg.Lineid,
		msg.Paid,
	)

	return &types.MsgDeleteProducerbillinglineResponse{}, nil
}

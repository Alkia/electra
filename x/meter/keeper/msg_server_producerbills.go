package keeper

import (
	"context"

	"electra/x/meter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateProducerbills(goCtx context.Context, msg *types.MsgCreateProducerbills) (*types.MsgCreateProducerbillsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetProducerbills(
		ctx,
		msg.BillCycleID,
		msg.ProducerDeviceID,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var producerbills = types.Producerbills{
		Creator:          msg.Creator,
		BillCycleID:      msg.BillCycleID,
		ProducerDeviceID: msg.ProducerDeviceID,
		BillDate:         msg.BillDate,
		BillTotalWh:      msg.BillTotalWh,
		BillTotalPrice:   msg.BillTotalPrice,
		BillCurrency:     msg.BillCurrency,
		BillValid:        msg.BillValid,
		Paid:             msg.Paid,
	}

	k.SetProducerbills(
		ctx,
		producerbills,
	)
	return &types.MsgCreateProducerbillsResponse{}, nil
}

func (k msgServer) UpdateProducerbills(goCtx context.Context, msg *types.MsgUpdateProducerbills) (*types.MsgUpdateProducerbillsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetProducerbills(
		ctx,
		msg.BillCycleID,
		msg.ProducerDeviceID,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var producerbills = types.Producerbills{
		Creator:          msg.Creator,
		BillCycleID:      msg.BillCycleID,
		ProducerDeviceID: msg.ProducerDeviceID,
		BillDate:         msg.BillDate,
		BillTotalWh:      msg.BillTotalWh,
		BillTotalPrice:   msg.BillTotalPrice,
		BillCurrency:     msg.BillCurrency,
		BillValid:        msg.BillValid,
		Paid:             msg.Paid,
	}

	k.SetProducerbills(ctx, producerbills)

	return &types.MsgUpdateProducerbillsResponse{}, nil
}

func (k msgServer) DeleteProducerbills(goCtx context.Context, msg *types.MsgDeleteProducerbills) (*types.MsgDeleteProducerbillsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetProducerbills(
		ctx,
		msg.BillCycleID,
		msg.ProducerDeviceID,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveProducerbills(
		ctx,
		msg.BillCycleID,
		msg.ProducerDeviceID,
	)

	return &types.MsgDeleteProducerbillsResponse{}, nil
}

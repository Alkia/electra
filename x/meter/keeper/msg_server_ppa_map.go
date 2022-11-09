package keeper

import (
	"context"

	"electra/x/meter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreatePpaMap(goCtx context.Context, msg *types.MsgCreatePpaMap) (*types.MsgCreatePpaMapResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetPpaMap(
		ctx,
		msg.ConsumerDeviceID,
		msg.AgreementID,
		msg.AgreementActive,
		msg.ContractID,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var ppaMap = types.PpaMap{
		Creator:                  msg.Creator,
		ConsumerDeviceID:         msg.ConsumerDeviceID,
		AgreementID:              msg.AgreementID,
		AgreementActive:          msg.AgreementActive,
		ContractID:               msg.ContractID,
		ProducerDeviceID:         msg.ProducerDeviceID,
		AgreementStartDate:       msg.AgreementStartDate,
		AgreementEndDate:         msg.AgreementEndDate,
		ContractPreferredPrice:   msg.ContractPreferredPrice,
		ContractPreferredCurency: msg.ContractPreferredCurency,
	}

	k.SetPpaMap(
		ctx,
		ppaMap,
	)
	return &types.MsgCreatePpaMapResponse{}, nil
}

func (k msgServer) UpdatePpaMap(goCtx context.Context, msg *types.MsgUpdatePpaMap) (*types.MsgUpdatePpaMapResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetPpaMap(
		ctx,
		msg.ConsumerDeviceID,
		msg.AgreementID,
		msg.AgreementActive,
		msg.ContractID,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var ppaMap = types.PpaMap{
		Creator:                  msg.Creator,
		ConsumerDeviceID:         msg.ConsumerDeviceID,
		AgreementID:              msg.AgreementID,
		AgreementActive:          msg.AgreementActive,
		ContractID:               msg.ContractID,
		ProducerDeviceID:         msg.ProducerDeviceID,
		AgreementStartDate:       msg.AgreementStartDate,
		AgreementEndDate:         msg.AgreementEndDate,
		ContractPreferredPrice:   msg.ContractPreferredPrice,
		ContractPreferredCurency: msg.ContractPreferredCurency,
	}

	k.SetPpaMap(ctx, ppaMap)

	return &types.MsgUpdatePpaMapResponse{}, nil
}

func (k msgServer) DeletePpaMap(goCtx context.Context, msg *types.MsgDeletePpaMap) (*types.MsgDeletePpaMapResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetPpaMap(
		ctx,
		msg.ConsumerDeviceID,
		msg.AgreementID,
		msg.AgreementActive,
		msg.ContractID,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePpaMap(
		ctx,
		msg.ConsumerDeviceID,
		msg.AgreementID,
		msg.AgreementActive,
		msg.ContractID,
	)

	return &types.MsgDeletePpaMapResponse{}, nil
}

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

	// Checks if the the msg creator is the same as the current owner or Check that the user is an admin
	if notAdmin(msg.Creator,msg.ConsumerDeviceID) {  
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "The contract creation must be the subscriber himsel or administrator | you do not have permission")
	}

	// If the provided msg.ContractID has the size of an ID then use it otherwise generate a unique UUID
	stemp := validateID(msg.ContractID)

	var ppaMap = types.PpaMap{
		Creator:            msg.Creator,
		ConsumerDeviceID:   msg.ConsumerDeviceID,
		AgreementID:        msg.AgreementID,
		AgreementActive:    msg.AgreementActive,
		ContractID:         stemp,	//msg.ContractID,
		ProducerDeviceID:   msg.ProducerDeviceID,
		AgreementStartDate: msg.AgreementStartDate,
		AgreementEndDate:   msg.AgreementEndDate,
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
	if notAdmin(msg.Creator,valFound.Creator) {  
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "The contract creation must be an administrator | you do not have permission")
	}

	var ppaMap = types.PpaMap{
		Creator:            msg.Creator,
		ConsumerDeviceID:   msg.ConsumerDeviceID,
		AgreementID:        msg.AgreementID,
		AgreementActive:    msg.AgreementActive,
		ContractID:         msg.ContractID,
		ProducerDeviceID:   msg.ProducerDeviceID,
		AgreementStartDate: msg.AgreementStartDate,
		AgreementEndDate:   msg.AgreementEndDate,
	}

	k.SetPpaMap(ctx, ppaMap)

	return &types.MsgUpdatePpaMapResponse{}, nil
}

// We never delete records for backward audit purposes, we just put them innactive
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
	/*
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	} */
	if notAdmin(msg.Creator,valFound.Creator) {  
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "The contract creation must be an administrator | you do not have permission")
	}
/*
	k.RemovePpaMap(
		ctx,
		msg.ConsumerDeviceID,
		msg.AgreementID,
		msg.AgreementActive,
		msg.ContractID,
	)
*/
	var ppaMap = types.PpaMap{
		Creator:            valFound.Creator,
		ConsumerDeviceID:   valFound.ConsumerDeviceID,
		AgreementID:        valFound.AgreementID,
		AgreementActive:    false,
		ContractID:         valFound.ContractID,
		ProducerDeviceID:   valFound.ProducerDeviceID,
		AgreementStartDate: valFound.AgreementStartDate,
		AgreementEndDate:   valFound.AgreementEndDate,
	}

	k.SetPpaMap(ctx, ppaMap)

	return &types.MsgDeletePpaMapResponse{}, nil
}

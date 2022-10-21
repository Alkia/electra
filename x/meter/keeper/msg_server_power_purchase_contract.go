package keeper

import (
	"context"

	"electra/x/meter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreatePowerPurchaseContract(goCtx context.Context, msg *types.MsgCreatePowerPurchaseContract) (*types.MsgCreatePowerPurchaseContractResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetPowerPurchaseContract(
		ctx,
		msg.ContractID,
		msg.ContractDeviceID,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var powerPurchaseContract = types.PowerPurchaseContract{
		Creator:                       msg.Creator,
		ContractID:                    msg.ContractID,
		ContractDeviceID:              msg.ContractDeviceID,
		ContractName:                  msg.ContractName,
		ContractActive:                msg.ContractActive,
		ContractPhase:                 msg.ContractPhase,
		ContractForAll:                msg.ContractForAll,
		ContractForAllPrice:           msg.ContractForAllPrice,
		ContractForAllCurency:         msg.ContractForAllCurency,
		ContractForAllActivePeriod:    msg.ContractForAllActivePeriod,
		ContractPreferred:             msg.ContractPreferred,
		ContractPreferredPrice:        msg.ContractPreferredPrice,
		ContractPreferredActivePeriod: msg.ContractPreferredActivePeriod,
		ContractPreferredCurency:      msg.ContractPreferredCurency,
		ContractStartDate:             msg.ContractStartDate,
		ContractEndDate:               msg.ContractEndDate,
		Phase1RemainingWh:             msg.Phase1RemainingWh,
		Phase2RemainingWh:             msg.Phase2RemainingWh,
		Phase3RemainingWh:             msg.Phase3RemainingWh,
	}

	k.SetPowerPurchaseContract(
		ctx,
		powerPurchaseContract,
	)
	return &types.MsgCreatePowerPurchaseContractResponse{}, nil
}

func (k msgServer) UpdatePowerPurchaseContract(goCtx context.Context, msg *types.MsgUpdatePowerPurchaseContract) (*types.MsgUpdatePowerPurchaseContractResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetPowerPurchaseContract(
		ctx,
		msg.ContractID,
		msg.ContractDeviceID,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var powerPurchaseContract = types.PowerPurchaseContract{
		Creator:                       msg.Creator,
		ContractID:                    msg.ContractID,
		ContractDeviceID:              msg.ContractDeviceID,
		ContractName:                  msg.ContractName,
		ContractActive:                msg.ContractActive,
		ContractPhase:                 msg.ContractPhase,
		ContractForAll:                msg.ContractForAll,
		ContractForAllPrice:           msg.ContractForAllPrice,
		ContractForAllCurency:         msg.ContractForAllCurency,
		ContractForAllActivePeriod:    msg.ContractForAllActivePeriod,
		ContractPreferred:             msg.ContractPreferred,
		ContractPreferredPrice:        msg.ContractPreferredPrice,
		ContractPreferredActivePeriod: msg.ContractPreferredActivePeriod,
		ContractPreferredCurency:      msg.ContractPreferredCurency,
		ContractStartDate:             msg.ContractStartDate,
		ContractEndDate:               msg.ContractEndDate,
		Phase1RemainingWh:             msg.Phase1RemainingWh,
		Phase2RemainingWh:             msg.Phase2RemainingWh,
		Phase3RemainingWh:             msg.Phase3RemainingWh,
	}

	k.SetPowerPurchaseContract(ctx, powerPurchaseContract)

	return &types.MsgUpdatePowerPurchaseContractResponse{}, nil
}

func (k msgServer) DeletePowerPurchaseContract(goCtx context.Context, msg *types.MsgDeletePowerPurchaseContract) (*types.MsgDeletePowerPurchaseContractResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetPowerPurchaseContract(
		ctx,
		msg.ContractID,
		msg.ContractDeviceID,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePowerPurchaseContract(
		ctx,
		msg.ContractID,
		msg.ContractDeviceID,
	)

	return &types.MsgDeletePowerPurchaseContractResponse{}, nil
}

package keeper

import (
	"context"
	"fmt"
    "github.com/google/uuid"

	"electra/x/meter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// To put in a tool file 
func notAdmin(Creator string, valFoundCreator string) (bool) { // check if msg.Creator == DefaultBillingAdmin or Admin
	res := !((Creator == valFoundCreator) || (Creator == "electra1krkk5xtp8s7lk9xf2az70txle50zfzga7dah87") || (Creator == "electra16n5tnkck6rcg7gxmalc057daputvac5pzjeal9"))
	return res 
}

	// If the provided msg.ContractID has the size of an ID then use it otherwise generate a unique UUID
func validateID(msgContractID string) string {
	var stemp string
	if (len(msgContractID) > 8){
		stemp = msgContractID
	} else {
		uuidValue := uuid.New()
		stemp = fmt.Sprintf("%s", uuidValue)
	}
	return stemp
}

func (k msgServer) CreatePowerPurchaseContract(goCtx context.Context, msg *types.MsgCreatePowerPurchaseContract) (*types.MsgCreatePowerPurchaseContractResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_,  isFound := k.GetPowerPurchaseContract(
		ctx,
		msg.ContractID,
		msg.ContractDeviceID,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	// Checks if the the msg creator is the same as the current owner or Check that the user is an admin
	if notAdmin(msg.Creator,msg.ContractDeviceID) {  
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "The contract creation must be an administrator | you do not have permission")
	}

	// If the provided msg.ContractID has the size of an ID then use it otherwise generate a unique UUID
	stemp := validateID(msg.ContractID)

	var powerPurchaseContract = types.PowerPurchaseContract{
		Creator:                       msg.Creator,
		ContractID:                    stemp, 				//msg.ContractID,
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

	// Checks if the the msg creator is the same as the current owner or Check that the user is an admin
	if notAdmin(msg.Creator,valFound.Creator) {  
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "The contract creation must be an administrator | you do not have permission")
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

// We never delete records for backward audit purposes, we just put them innactive
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

	// Checks if the the msg creator is the same as the current owner or Check that the user is an admin
	if notAdmin(msg.Creator,valFound.Creator) {  
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "The contract creation must be an administrator | you do not have permission")
	}

/*
	k.RemovePowerPurchaseContract(
		ctx,
		msg.ContractID,
		msg.ContractDeviceID,
	)
	*/
	
		var powerPurchaseContract = types.PowerPurchaseContract{
			Creator:                       valFound.Creator,
			ContractID:                    valFound.ContractID,
			ContractDeviceID:              valFound.ContractDeviceID,
			ContractName:                  valFound.ContractName,
			ContractActive:                false,
			ContractPhase:                 valFound.ContractPhase,
			ContractForAll:                valFound.ContractForAll,
			ContractForAllPrice:           valFound.ContractForAllPrice,
			ContractForAllCurency:         valFound.ContractForAllCurency,
			ContractForAllActivePeriod:    valFound.ContractForAllActivePeriod,
			ContractPreferred:             valFound.ContractPreferred,
			ContractPreferredPrice:        valFound.ContractPreferredPrice,
			ContractPreferredActivePeriod: valFound.ContractPreferredActivePeriod,
			ContractPreferredCurency:      valFound.ContractPreferredCurency,
			ContractStartDate:             valFound.ContractStartDate,
			ContractEndDate:               valFound.ContractEndDate,
			Phase1RemainingWh:             valFound.Phase1RemainingWh,
			Phase2RemainingWh:             valFound.Phase2RemainingWh,
			Phase3RemainingWh:             valFound.Phase3RemainingWh,
		}
	
		k.SetPowerPurchaseContract(ctx, powerPurchaseContract)

	return &types.MsgDeletePowerPurchaseContractResponse{}, nil
}

package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreatePowerPurchaseContract = "create_power_purchase_contract"
	TypeMsgUpdatePowerPurchaseContract = "update_power_purchase_contract"
	TypeMsgDeletePowerPurchaseContract = "delete_power_purchase_contract"
)

var _ sdk.Msg = &MsgCreatePowerPurchaseContract{}

func NewMsgCreatePowerPurchaseContract(
	creator string,
	contractID string,
	contractDeviceID string,
	contractName string,
	contractActive bool,
	contractPhase uint64,
	contractForAll bool,
	contractForAllPrice uint64,
	contractForAllCurency string,
	contractForAllActivePeriod string,
	contractPreferred bool,
	contractPreferredPrice uint64,
	contractPreferredActivePeriod string,
	contractPreferredCurency string,
	contractStartDate uint64,
	contractEndDate uint64,
	phase1RemainingWh uint64,
	phase2RemainingWh uint64,
	phase3RemainingWh uint64,

) *MsgCreatePowerPurchaseContract {
	return &MsgCreatePowerPurchaseContract{
		Creator:                       creator,
		ContractID:                    contractID,
		ContractDeviceID:              contractDeviceID,
		ContractName:                  contractName,
		ContractActive:                contractActive,
		ContractPhase:                 contractPhase,
		ContractForAll:                contractForAll,
		ContractForAllPrice:           contractForAllPrice,
		ContractForAllCurency:         contractForAllCurency,
		ContractForAllActivePeriod:    contractForAllActivePeriod,
		ContractPreferred:             contractPreferred,
		ContractPreferredPrice:        contractPreferredPrice,
		ContractPreferredActivePeriod: contractPreferredActivePeriod,
		ContractPreferredCurency:      contractPreferredCurency,
		ContractStartDate:             contractStartDate,
		ContractEndDate:               contractEndDate,
		Phase1RemainingWh:             phase1RemainingWh,
		Phase2RemainingWh:             phase2RemainingWh,
		Phase3RemainingWh:             phase3RemainingWh,
	}
}

func (msg *MsgCreatePowerPurchaseContract) Route() string {
	return RouterKey
}

func (msg *MsgCreatePowerPurchaseContract) Type() string {
	return TypeMsgCreatePowerPurchaseContract
}

func (msg *MsgCreatePowerPurchaseContract) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePowerPurchaseContract) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePowerPurchaseContract) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdatePowerPurchaseContract{}

func NewMsgUpdatePowerPurchaseContract(
	creator string,
	contractID string,
	contractDeviceID string,
	contractName string,
	contractActive bool,
	contractPhase uint64,
	contractForAll bool,
	contractForAllPrice uint64,
	contractForAllCurency string,
	contractForAllActivePeriod string,
	contractPreferred bool,
	contractPreferredPrice uint64,
	contractPreferredActivePeriod string,
	contractPreferredCurency string,
	contractStartDate uint64,
	contractEndDate uint64,
	phase1RemainingWh uint64,
	phase2RemainingWh uint64,
	phase3RemainingWh uint64,

) *MsgUpdatePowerPurchaseContract {
	return &MsgUpdatePowerPurchaseContract{
		Creator:                       creator,
		ContractID:                    contractID,
		ContractDeviceID:              contractDeviceID,
		ContractName:                  contractName,
		ContractActive:                contractActive,
		ContractPhase:                 contractPhase,
		ContractForAll:                contractForAll,
		ContractForAllPrice:           contractForAllPrice,
		ContractForAllCurency:         contractForAllCurency,
		ContractForAllActivePeriod:    contractForAllActivePeriod,
		ContractPreferred:             contractPreferred,
		ContractPreferredPrice:        contractPreferredPrice,
		ContractPreferredActivePeriod: contractPreferredActivePeriod,
		ContractPreferredCurency:      contractPreferredCurency,
		ContractStartDate:             contractStartDate,
		ContractEndDate:               contractEndDate,
		Phase1RemainingWh:             phase1RemainingWh,
		Phase2RemainingWh:             phase2RemainingWh,
		Phase3RemainingWh:             phase3RemainingWh,
	}
}

func (msg *MsgUpdatePowerPurchaseContract) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePowerPurchaseContract) Type() string {
	return TypeMsgUpdatePowerPurchaseContract
}

func (msg *MsgUpdatePowerPurchaseContract) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePowerPurchaseContract) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePowerPurchaseContract) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeletePowerPurchaseContract{}

func NewMsgDeletePowerPurchaseContract(
	creator string,
	contractID string,
	contractDeviceID string,

) *MsgDeletePowerPurchaseContract {
	return &MsgDeletePowerPurchaseContract{
		Creator:          creator,
		ContractID:       contractID,
		ContractDeviceID: contractDeviceID,
	}
}
func (msg *MsgDeletePowerPurchaseContract) Route() string {
	return RouterKey
}

func (msg *MsgDeletePowerPurchaseContract) Type() string {
	return TypeMsgDeletePowerPurchaseContract
}

func (msg *MsgDeletePowerPurchaseContract) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePowerPurchaseContract) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePowerPurchaseContract) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

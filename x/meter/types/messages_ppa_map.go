package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreatePpaMap = "create_ppa_map"
	TypeMsgUpdatePpaMap = "update_ppa_map"
	TypeMsgDeletePpaMap = "delete_ppa_map"
)

var _ sdk.Msg = &MsgCreatePpaMap{}

func NewMsgCreatePpaMap(
	creator string,
	consumerDeviceID string,
	agreementID string,
	agreementActive bool,
	contractID string,
	producerDeviceID string,
	agreementStartDate uint64,
	agreementEndDate uint64,
	contractPreferredPrice uint64,
	contractPreferredCurency string,

) *MsgCreatePpaMap {
	return &MsgCreatePpaMap{
		Creator:                  creator,
		ConsumerDeviceID:         consumerDeviceID,
		AgreementID:              agreementID,
		AgreementActive:          agreementActive,
		ContractID:               contractID,
		ProducerDeviceID:         producerDeviceID,
		AgreementStartDate:       agreementStartDate,
		AgreementEndDate:         agreementEndDate,
		ContractPreferredPrice:   contractPreferredPrice,
		ContractPreferredCurency: contractPreferredCurency,
	}
}

func (msg *MsgCreatePpaMap) Route() string {
	return RouterKey
}

func (msg *MsgCreatePpaMap) Type() string {
	return TypeMsgCreatePpaMap
}

func (msg *MsgCreatePpaMap) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePpaMap) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePpaMap) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdatePpaMap{}

func NewMsgUpdatePpaMap(
	creator string,
	consumerDeviceID string,
	agreementID string,
	agreementActive bool,
	contractID string,
	producerDeviceID string,
	agreementStartDate uint64,
	agreementEndDate uint64,
	contractPreferredPrice uint64,
	contractPreferredCurency string,

) *MsgUpdatePpaMap {
	return &MsgUpdatePpaMap{
		Creator:                  creator,
		ConsumerDeviceID:         consumerDeviceID,
		AgreementID:              agreementID,
		AgreementActive:          agreementActive,
		ContractID:               contractID,
		ProducerDeviceID:         producerDeviceID,
		AgreementStartDate:       agreementStartDate,
		AgreementEndDate:         agreementEndDate,
		ContractPreferredPrice:   contractPreferredPrice,
		ContractPreferredCurency: contractPreferredCurency,
	}
}

func (msg *MsgUpdatePpaMap) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePpaMap) Type() string {
	return TypeMsgUpdatePpaMap
}

func (msg *MsgUpdatePpaMap) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePpaMap) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePpaMap) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeletePpaMap{}

func NewMsgDeletePpaMap(
	creator string,
	consumerDeviceID string,
	agreementID string,
	agreementActive bool,
	contractID string,

) *MsgDeletePpaMap {
	return &MsgDeletePpaMap{
		Creator:          creator,
		ConsumerDeviceID: consumerDeviceID,
		AgreementID:      agreementID,
		AgreementActive:  agreementActive,
		ContractID:       contractID,
	}
}
func (msg *MsgDeletePpaMap) Route() string {
	return RouterKey
}

func (msg *MsgDeletePpaMap) Type() string {
	return TypeMsgDeletePpaMap
}

func (msg *MsgDeletePpaMap) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePpaMap) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePpaMap) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

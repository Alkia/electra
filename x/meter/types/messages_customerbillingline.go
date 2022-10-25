package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateCustomerbillingline = "create_customerbillingline"
	TypeMsgUpdateCustomerbillingline = "update_customerbillingline"
	TypeMsgDeleteCustomerbillingline = "delete_customerbillingline"
)

var _ sdk.Msg = &MsgCreateCustomerbillingline{}

func NewMsgCreateCustomerbillingline(
	creator string,
	customerDeviceID string,
	cycleID uint64,
	lineid uint64,
	producerDeviceID string,
	billContractID string,
	lineWh uint64,
	lineWhPrice uint64,
	curency string,
	lineWhTotalPrice uint64,
	phase uint64,

) *MsgCreateCustomerbillingline {
	return &MsgCreateCustomerbillingline{
		Creator:          creator,
		CustomerDeviceID: customerDeviceID,
		CycleID:          cycleID,
		Lineid:           lineid,
		ProducerDeviceID: producerDeviceID,
		BillContractID:   billContractID,
		LineWh:           lineWh,
		LineWhPrice:      lineWhPrice,
		Curency:          curency,
		LineWhTotalPrice: lineWhTotalPrice,
		Phase:            phase,
	}
}

func (msg *MsgCreateCustomerbillingline) Route() string {
	return RouterKey
}

func (msg *MsgCreateCustomerbillingline) Type() string {
	return TypeMsgCreateCustomerbillingline
}

func (msg *MsgCreateCustomerbillingline) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCustomerbillingline) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCustomerbillingline) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCustomerbillingline{}

func NewMsgUpdateCustomerbillingline(
	creator string,
	customerDeviceID string,
	cycleID uint64,
	lineid uint64,
	producerDeviceID string,
	billContractID string,
	lineWh uint64,
	lineWhPrice uint64,
	curency string,
	lineWhTotalPrice uint64,
	phase uint64,

) *MsgUpdateCustomerbillingline {
	return &MsgUpdateCustomerbillingline{
		Creator:          creator,
		CustomerDeviceID: customerDeviceID,
		CycleID:          cycleID,
		Lineid:           lineid,
		ProducerDeviceID: producerDeviceID,
		BillContractID:   billContractID,
		LineWh:           lineWh,
		LineWhPrice:      lineWhPrice,
		Curency:          curency,
		LineWhTotalPrice: lineWhTotalPrice,
		Phase:            phase,
	}
}

func (msg *MsgUpdateCustomerbillingline) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCustomerbillingline) Type() string {
	return TypeMsgUpdateCustomerbillingline
}

func (msg *MsgUpdateCustomerbillingline) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCustomerbillingline) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCustomerbillingline) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCustomerbillingline{}

func NewMsgDeleteCustomerbillingline(
	creator string,
	customerDeviceID string,
	cycleID uint64,
	lineid uint64,

) *MsgDeleteCustomerbillingline {
	return &MsgDeleteCustomerbillingline{
		Creator:          creator,
		CustomerDeviceID: customerDeviceID,
		CycleID:          cycleID,
		Lineid:           lineid,
	}
}
func (msg *MsgDeleteCustomerbillingline) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCustomerbillingline) Type() string {
	return TypeMsgDeleteCustomerbillingline
}

func (msg *MsgDeleteCustomerbillingline) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCustomerbillingline) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCustomerbillingline) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

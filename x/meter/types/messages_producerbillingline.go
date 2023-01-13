package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateProducerbillingline = "create_producerbillingline"
	TypeMsgUpdateProducerbillingline = "update_producerbillingline"
	TypeMsgDeleteProducerbillingline = "delete_producerbillingline"
)

var _ sdk.Msg = &MsgCreateProducerbillingline{}

func NewMsgCreateProducerbillingline(
	creator string,
	producerDeviceID string,
	cycleID uint64,
	lineid uint64,
	paid bool,
	customerDeviceID string,
	billContractID string,
	lineWh uint64,
	lineWhPrice uint64,
	curency string,
	lineWhTotalPrice uint64,
	phase uint64,

) *MsgCreateProducerbillingline {
	return &MsgCreateProducerbillingline{
		Creator:          creator,
		ProducerDeviceID: producerDeviceID,
		CycleID:          cycleID,
		Lineid:           lineid,
		Paid:             paid,
		CustomerDeviceID: customerDeviceID,
		BillContractID:   billContractID,
		LineWh:           lineWh,
		LineWhPrice:      lineWhPrice,
		Curency:          curency,
		LineWhTotalPrice: lineWhTotalPrice,
		Phase:            phase,
	}
}

func (msg *MsgCreateProducerbillingline) Route() string {
	return RouterKey
}

func (msg *MsgCreateProducerbillingline) Type() string {
	return TypeMsgCreateProducerbillingline
}

func (msg *MsgCreateProducerbillingline) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateProducerbillingline) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateProducerbillingline) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateProducerbillingline{}

func NewMsgUpdateProducerbillingline(
	creator string,
	producerDeviceID string,
	cycleID uint64,
	lineid uint64,
	paid bool,
	customerDeviceID string,
	billContractID string,
	lineWh uint64,
	lineWhPrice uint64,
	curency string,
	lineWhTotalPrice uint64,
	phase uint64,

) *MsgUpdateProducerbillingline {
	return &MsgUpdateProducerbillingline{
		Creator:          creator,
		ProducerDeviceID: producerDeviceID,
		CycleID:          cycleID,
		Lineid:           lineid,
		Paid:             paid,
		CustomerDeviceID: customerDeviceID,
		BillContractID:   billContractID,
		LineWh:           lineWh,
		LineWhPrice:      lineWhPrice,
		Curency:          curency,
		LineWhTotalPrice: lineWhTotalPrice,
		Phase:            phase,
	}
}

func (msg *MsgUpdateProducerbillingline) Route() string {
	return RouterKey
}

func (msg *MsgUpdateProducerbillingline) Type() string {
	return TypeMsgUpdateProducerbillingline
}

func (msg *MsgUpdateProducerbillingline) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateProducerbillingline) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateProducerbillingline) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteProducerbillingline{}

func NewMsgDeleteProducerbillingline(
	creator string,
	producerDeviceID string,
	cycleID uint64,
	lineid uint64,
	paid bool,

) *MsgDeleteProducerbillingline {
	return &MsgDeleteProducerbillingline{
		Creator:          creator,
		ProducerDeviceID: producerDeviceID,
		CycleID:          cycleID,
		Lineid:           lineid,
		Paid:             paid,
	}
}
func (msg *MsgDeleteProducerbillingline) Route() string {
	return RouterKey
}

func (msg *MsgDeleteProducerbillingline) Type() string {
	return TypeMsgDeleteProducerbillingline
}

func (msg *MsgDeleteProducerbillingline) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteProducerbillingline) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteProducerbillingline) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

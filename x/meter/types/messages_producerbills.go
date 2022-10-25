package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateProducerbills = "create_producerbills"
	TypeMsgUpdateProducerbills = "update_producerbills"
	TypeMsgDeleteProducerbills = "delete_producerbills"
)

var _ sdk.Msg = &MsgCreateProducerbills{}

func NewMsgCreateProducerbills(
	creator string,
	billCycleID uint64,
	producerDeviceID string,
	billDate uint64,
	billTotalWh uint64,
	billTotalPrice uint64,
	billCurrency string,
	billValid bool,
	paid bool,

) *MsgCreateProducerbills {
	return &MsgCreateProducerbills{
		Creator:          creator,
		BillCycleID:      billCycleID,
		ProducerDeviceID: producerDeviceID,
		BillDate:         billDate,
		BillTotalWh:      billTotalWh,
		BillTotalPrice:   billTotalPrice,
		BillCurrency:     billCurrency,
		BillValid:        billValid,
		Paid:             paid,
	}
}

func (msg *MsgCreateProducerbills) Route() string {
	return RouterKey
}

func (msg *MsgCreateProducerbills) Type() string {
	return TypeMsgCreateProducerbills
}

func (msg *MsgCreateProducerbills) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateProducerbills) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateProducerbills) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateProducerbills{}

func NewMsgUpdateProducerbills(
	creator string,
	billCycleID uint64,
	producerDeviceID string,
	billDate uint64,
	billTotalWh uint64,
	billTotalPrice uint64,
	billCurrency string,
	billValid bool,
	paid bool,

) *MsgUpdateProducerbills {
	return &MsgUpdateProducerbills{
		Creator:          creator,
		BillCycleID:      billCycleID,
		ProducerDeviceID: producerDeviceID,
		BillDate:         billDate,
		BillTotalWh:      billTotalWh,
		BillTotalPrice:   billTotalPrice,
		BillCurrency:     billCurrency,
		BillValid:        billValid,
		Paid:             paid,
	}
}

func (msg *MsgUpdateProducerbills) Route() string {
	return RouterKey
}

func (msg *MsgUpdateProducerbills) Type() string {
	return TypeMsgUpdateProducerbills
}

func (msg *MsgUpdateProducerbills) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateProducerbills) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateProducerbills) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteProducerbills{}

func NewMsgDeleteProducerbills(
	creator string,
	billCycleID uint64,
	producerDeviceID string,

) *MsgDeleteProducerbills {
	return &MsgDeleteProducerbills{
		Creator:          creator,
		BillCycleID:      billCycleID,
		ProducerDeviceID: producerDeviceID,
	}
}
func (msg *MsgDeleteProducerbills) Route() string {
	return RouterKey
}

func (msg *MsgDeleteProducerbills) Type() string {
	return TypeMsgDeleteProducerbills
}

func (msg *MsgDeleteProducerbills) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteProducerbills) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteProducerbills) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateCustomerbills = "create_customerbills"
	TypeMsgUpdateCustomerbills = "update_customerbills"
	TypeMsgDeleteCustomerbills = "delete_customerbills"
)

var _ sdk.Msg = &MsgCreateCustomerbills{}

func NewMsgCreateCustomerbills(
	creator string,
	billCycleID uint64,
	customerDeviceID string,
	billDate uint64,
	billTotalWh uint64,
	billTotalPrice uint64,
	billCurrency string,
	billValid bool,
	paid bool,

) *MsgCreateCustomerbills {
	return &MsgCreateCustomerbills{
		Creator:          creator,
		BillCycleID:      billCycleID,
		CustomerDeviceID: customerDeviceID,
		BillDate:         billDate,
		BillTotalWh:      billTotalWh,
		BillTotalPrice:   billTotalPrice,
		BillCurrency:     billCurrency,
		BillValid:        billValid,
		Paid:             paid,
	}
}

func (msg *MsgCreateCustomerbills) Route() string {
	return RouterKey
}

func (msg *MsgCreateCustomerbills) Type() string {
	return TypeMsgCreateCustomerbills
}

func (msg *MsgCreateCustomerbills) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCustomerbills) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCustomerbills) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCustomerbills{}

func NewMsgUpdateCustomerbills(
	creator string,
	billCycleID uint64,
	customerDeviceID string,
	billDate uint64,
	billTotalWh uint64,
	billTotalPrice uint64,
	billCurrency string,
	billValid bool,
	paid bool,

) *MsgUpdateCustomerbills {
	return &MsgUpdateCustomerbills{
		Creator:          creator,
		BillCycleID:      billCycleID,
		CustomerDeviceID: customerDeviceID,
		BillDate:         billDate,
		BillTotalWh:      billTotalWh,
		BillTotalPrice:   billTotalPrice,
		BillCurrency:     billCurrency,
		BillValid:        billValid,
		Paid:             paid,
	}
}

func (msg *MsgUpdateCustomerbills) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCustomerbills) Type() string {
	return TypeMsgUpdateCustomerbills
}

func (msg *MsgUpdateCustomerbills) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCustomerbills) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCustomerbills) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCustomerbills{}

func NewMsgDeleteCustomerbills(
	creator string,
	billCycleID uint64,
	customerDeviceID string,

) *MsgDeleteCustomerbills {
	return &MsgDeleteCustomerbills{
		Creator:          creator,
		BillCycleID:      billCycleID,
		CustomerDeviceID: customerDeviceID,
	}
}
func (msg *MsgDeleteCustomerbills) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCustomerbills) Type() string {
	return TypeMsgDeleteCustomerbills
}

func (msg *MsgDeleteCustomerbills) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCustomerbills) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCustomerbills) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

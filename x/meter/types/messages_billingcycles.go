package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateBillingcycles = "create_billingcycles"
	TypeMsgUpdateBillingcycles = "update_billingcycles"
	TypeMsgDeleteBillingcycles = "delete_billingcycles"
)

var _ sdk.Msg = &MsgCreateBillingcycles{}

func NewMsgCreateBillingcycles(
	creator string,
	cycleID uint64,
	begin uint64,
	end uint64,
	whin uint64,
	whout uint64,
	moneyin uint64,
	moneyout uint64,
	curency string,
	valid bool,
	paid bool,

) *MsgCreateBillingcycles {
	return &MsgCreateBillingcycles{
		Creator:  creator,
		CycleID:  cycleID,
		Begin:    begin,
		End:      end,
		Whin:     whin,
		Whout:    whout,
		Moneyin:  moneyin,
		Moneyout: moneyout,
		Curency:  curency,
		Valid:    valid,
		Paid:     paid,
	}
}

func (msg *MsgCreateBillingcycles) Route() string {
	return RouterKey
}

func (msg *MsgCreateBillingcycles) Type() string {
	return TypeMsgCreateBillingcycles
}

func (msg *MsgCreateBillingcycles) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateBillingcycles) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateBillingcycles) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateBillingcycles{}

func NewMsgUpdateBillingcycles(
	creator string,
	cycleID uint64,
	begin uint64,
	end uint64,
	whin uint64,
	whout uint64,
	moneyin uint64,
	moneyout uint64,
	curency string,
	valid bool,
	paid bool,

) *MsgUpdateBillingcycles {
	return &MsgUpdateBillingcycles{
		Creator:  creator,
		CycleID:  cycleID,
		Begin:    begin,
		End:      end,
		Whin:     whin,
		Whout:    whout,
		Moneyin:  moneyin,
		Moneyout: moneyout,
		Curency:  curency,
		Valid:    valid,
		Paid:     paid,
	}
}

func (msg *MsgUpdateBillingcycles) Route() string {
	return RouterKey
}

func (msg *MsgUpdateBillingcycles) Type() string {
	return TypeMsgUpdateBillingcycles
}

func (msg *MsgUpdateBillingcycles) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateBillingcycles) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateBillingcycles) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteBillingcycles{}

func NewMsgDeleteBillingcycles(
	creator string,
	cycleID uint64,

) *MsgDeleteBillingcycles {
	return &MsgDeleteBillingcycles{
		Creator: creator,
		CycleID: cycleID,
	}
}
func (msg *MsgDeleteBillingcycles) Route() string {
	return RouterKey
}

func (msg *MsgDeleteBillingcycles) Type() string {
	return TypeMsgDeleteBillingcycles
}

func (msg *MsgDeleteBillingcycles) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteBillingcycles) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteBillingcycles) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgPrepareBill = "prepare_bill"

var _ sdk.Msg = &MsgPrepareBill{}

func NewMsgPrepareBill(creator string, cycleID uint64, record bool, executePayment bool) *MsgPrepareBill {
	return &MsgPrepareBill{
		Creator:        creator,
		CycleID:        cycleID,
		Record:         record,
		ExecutePayment: executePayment,
	}
}

func (msg *MsgPrepareBill) Route() string {
	return RouterKey
}

func (msg *MsgPrepareBill) Type() string {
	return TypeMsgPrepareBill
}

func (msg *MsgPrepareBill) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgPrepareBill) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgPrepareBill) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

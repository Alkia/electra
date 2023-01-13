package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRecord = "record"

var _ sdk.Msg = &MsgRecord{}

func NewMsgRecord(creator string, timestamp uint64, phase uint64, whin uint64, whout uint64, mvolt uint64, mhertz uint64, mpf uint64, maxmi uint64) *MsgRecord {
	return &MsgRecord{
		Creator:   creator,
		Timestamp: timestamp,
		Phase:     phase,
		Whin:      whin,
		Whout:     whout,
		Mvolt:     mvolt,
		Mhertz:    mhertz,
		Mpf:       mpf,
		Maxmi:     maxmi,
	}
}

func (msg *MsgRecord) Route() string {
	return RouterKey
}

func (msg *MsgRecord) Type() string {
	return TypeMsgRecord
}

func (msg *MsgRecord) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRecord) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRecord) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

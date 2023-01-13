package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRecord3 = "record_3"

var _ sdk.Msg = &MsgRecord3{}

func NewMsgRecord3(creator string, timestamp uint64, whin1 uint64, whout1 uint64, mvolt1 uint64, mhertz1 uint64, mpf1 uint64, maxmi1 uint64, whin2 uint64, whout2 uint64, mvolt2 uint64, mhertz2 uint64, mpf2 uint64, maxmi2 uint64, whin3 uint64, whout3 uint64, mvolt3 uint64, mhertz3 uint64, mpf3 uint64, maxmi3 uint64) *MsgRecord3 {
	return &MsgRecord3{
		Creator:   creator,
		Timestamp: timestamp,
		Whin1:     whin1,
		Whout1:    whout1,
		Mvolt1:    mvolt1,
		Mhertz1:   mhertz1,
		Mpf1:      mpf1,
		Maxmi1:    maxmi1,
		Whin2:     whin2,
		Whout2:    whout2,
		Mvolt2:    mvolt2,
		Mhertz2:   mhertz2,
		Mpf2:      mpf2,
		Maxmi2:    maxmi2,
		Whin3:     whin3,
		Whout3:    whout3,
		Mvolt3:    mvolt3,
		Mhertz3:   mhertz3,
		Mpf3:      mpf3,
		Maxmi3:    maxmi3,
	}
}

func (msg *MsgRecord3) Route() string {
	return RouterKey
}

func (msg *MsgRecord3) Type() string {
	return TypeMsgRecord3
}

func (msg *MsgRecord3) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRecord3) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRecord3) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

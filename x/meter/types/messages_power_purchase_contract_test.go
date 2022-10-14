package types

import (
	"testing"

	"electra/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreatePowerPurchaseContract_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreatePowerPurchaseContract
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreatePowerPurchaseContract{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreatePowerPurchaseContract{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdatePowerPurchaseContract_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdatePowerPurchaseContract
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdatePowerPurchaseContract{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdatePowerPurchaseContract{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeletePowerPurchaseContract_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeletePowerPurchaseContract
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeletePowerPurchaseContract{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeletePowerPurchaseContract{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

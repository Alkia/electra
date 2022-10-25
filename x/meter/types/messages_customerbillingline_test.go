package types

import (
	"testing"

	"electra/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateCustomerbillingline_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateCustomerbillingline
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateCustomerbillingline{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateCustomerbillingline{
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

func TestMsgUpdateCustomerbillingline_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateCustomerbillingline
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateCustomerbillingline{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateCustomerbillingline{
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

func TestMsgDeleteCustomerbillingline_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteCustomerbillingline
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteCustomerbillingline{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteCustomerbillingline{
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

package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "electra/testutil/keeper"
	"electra/x/meter/keeper"
	"electra/x/meter/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestCustomerbillinglineMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.MeterKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateCustomerbillingline{Creator: creator,
			CustomerDeviceID: strconv.Itoa(i),
			CycleID:          uint64(i),
			Lineid:           uint64(i),
			Paid:             false,
		}
		_, err := srv.CreateCustomerbillingline(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetCustomerbillingline(ctx,
			expected.CustomerDeviceID,
			expected.CycleID,
			expected.Lineid,
			expected.Paid,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestCustomerbillinglineMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateCustomerbillingline
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateCustomerbillingline{Creator: creator,
				CustomerDeviceID: strconv.Itoa(0),
				CycleID:          0,
				Lineid:           0,
				Paid:             false,
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateCustomerbillingline{Creator: "B",
				CustomerDeviceID: strconv.Itoa(0),
				CycleID:          0,
				Lineid:           0,
				Paid:             false,
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateCustomerbillingline{Creator: creator,
				CustomerDeviceID: strconv.Itoa(100000),
				CycleID:          100000,
				Lineid:           100000,
				Paid:             false,
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MeterKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateCustomerbillingline{Creator: creator,
				CustomerDeviceID: strconv.Itoa(0),
				CycleID:          0,
				Lineid:           0,
				Paid:             false,
			}
			_, err := srv.CreateCustomerbillingline(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateCustomerbillingline(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetCustomerbillingline(ctx,
					expected.CustomerDeviceID,
					expected.CycleID,
					expected.Lineid,
					expected.Paid,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestCustomerbillinglineMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteCustomerbillingline
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteCustomerbillingline{Creator: creator,
				CustomerDeviceID: strconv.Itoa(0),
				CycleID:          0,
				Lineid:           0,
				Paid:             false,
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteCustomerbillingline{Creator: "B",
				CustomerDeviceID: strconv.Itoa(0),
				CycleID:          0,
				Lineid:           0,
				Paid:             false,
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteCustomerbillingline{Creator: creator,
				CustomerDeviceID: strconv.Itoa(100000),
				CycleID:          100000,
				Lineid:           100000,
				Paid:             false,
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MeterKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateCustomerbillingline(wctx, &types.MsgCreateCustomerbillingline{Creator: creator,
				CustomerDeviceID: strconv.Itoa(0),
				CycleID:          0,
				Lineid:           0,
				Paid:             false,
			})
			require.NoError(t, err)
			_, err = srv.DeleteCustomerbillingline(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetCustomerbillingline(ctx,
					tc.request.CustomerDeviceID,
					tc.request.CycleID,
					tc.request.Lineid,
					tc.request.Paid,
				)
				require.False(t, found)
			}
		})
	}
}

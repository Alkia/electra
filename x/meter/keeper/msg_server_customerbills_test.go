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

func TestCustomerbillsMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.MeterKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateCustomerbills{Creator: creator,
			BillCycleID:      uint64(i),
			CustomerDeviceID: strconv.Itoa(i),
		}
		_, err := srv.CreateCustomerbills(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetCustomerbills(ctx,
			expected.BillCycleID,
			expected.CustomerDeviceID,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestCustomerbillsMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateCustomerbills
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateCustomerbills{Creator: creator,
				BillCycleID:      0,
				CustomerDeviceID: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateCustomerbills{Creator: "B",
				BillCycleID:      0,
				CustomerDeviceID: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateCustomerbills{Creator: creator,
				BillCycleID:      100000,
				CustomerDeviceID: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MeterKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateCustomerbills{Creator: creator,
				BillCycleID:      0,
				CustomerDeviceID: strconv.Itoa(0),
			}
			_, err := srv.CreateCustomerbills(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateCustomerbills(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetCustomerbills(ctx,
					expected.BillCycleID,
					expected.CustomerDeviceID,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestCustomerbillsMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteCustomerbills
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteCustomerbills{Creator: creator,
				BillCycleID:      0,
				CustomerDeviceID: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteCustomerbills{Creator: "B",
				BillCycleID:      0,
				CustomerDeviceID: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteCustomerbills{Creator: creator,
				BillCycleID:      100000,
				CustomerDeviceID: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MeterKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateCustomerbills(wctx, &types.MsgCreateCustomerbills{Creator: creator,
				BillCycleID:      0,
				CustomerDeviceID: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteCustomerbills(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetCustomerbills(ctx,
					tc.request.BillCycleID,
					tc.request.CustomerDeviceID,
				)
				require.False(t, found)
			}
		})
	}
}

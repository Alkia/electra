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

func TestBillingcyclesMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.MeterKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateBillingcycles{Creator: creator,
			CycleID: uint64(i),
		}
		_, err := srv.CreateBillingcycles(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetBillingcycles(ctx,
			expected.CycleID,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestBillingcyclesMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateBillingcycles
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateBillingcycles{Creator: creator,
				CycleID: 0,
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateBillingcycles{Creator: "B",
				CycleID: 0,
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateBillingcycles{Creator: creator,
				CycleID: 100000,
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MeterKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateBillingcycles{Creator: creator,
				CycleID: 0,
			}
			_, err := srv.CreateBillingcycles(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateBillingcycles(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetBillingcycles(ctx,
					expected.CycleID,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestBillingcyclesMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteBillingcycles
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteBillingcycles{Creator: creator,
				CycleID: 0,
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteBillingcycles{Creator: "B",
				CycleID: 0,
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteBillingcycles{Creator: creator,
				CycleID: 100000,
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MeterKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateBillingcycles(wctx, &types.MsgCreateBillingcycles{Creator: creator,
				CycleID: 0,
			})
			require.NoError(t, err)
			_, err = srv.DeleteBillingcycles(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetBillingcycles(ctx,
					tc.request.CycleID,
				)
				require.False(t, found)
			}
		})
	}
}

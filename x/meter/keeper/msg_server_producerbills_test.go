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

func TestProducerbillsMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.MeterKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateProducerbills{Creator: creator,
			BillCycleID:      uint64(i),
			ProducerDeviceID: strconv.Itoa(i),
		}
		_, err := srv.CreateProducerbills(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetProducerbills(ctx,
			expected.BillCycleID,
			expected.ProducerDeviceID,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestProducerbillsMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateProducerbills
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateProducerbills{Creator: creator,
				BillCycleID:      0,
				ProducerDeviceID: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateProducerbills{Creator: "B",
				BillCycleID:      0,
				ProducerDeviceID: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateProducerbills{Creator: creator,
				BillCycleID:      100000,
				ProducerDeviceID: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MeterKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateProducerbills{Creator: creator,
				BillCycleID:      0,
				ProducerDeviceID: strconv.Itoa(0),
			}
			_, err := srv.CreateProducerbills(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateProducerbills(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetProducerbills(ctx,
					expected.BillCycleID,
					expected.ProducerDeviceID,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestProducerbillsMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteProducerbills
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteProducerbills{Creator: creator,
				BillCycleID:      0,
				ProducerDeviceID: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteProducerbills{Creator: "B",
				BillCycleID:      0,
				ProducerDeviceID: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteProducerbills{Creator: creator,
				BillCycleID:      100000,
				ProducerDeviceID: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MeterKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateProducerbills(wctx, &types.MsgCreateProducerbills{Creator: creator,
				BillCycleID:      0,
				ProducerDeviceID: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteProducerbills(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetProducerbills(ctx,
					tc.request.BillCycleID,
					tc.request.ProducerDeviceID,
				)
				require.False(t, found)
			}
		})
	}
}

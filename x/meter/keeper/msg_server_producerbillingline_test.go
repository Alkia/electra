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

func TestProducerbillinglineMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.MeterKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateProducerbillingline{Creator: creator,
			ProducerDeviceID: strconv.Itoa(i),
			CycleID:          uint64(i),
			Lineid:           uint64(i),
			Paid:             false,
		}
		_, err := srv.CreateProducerbillingline(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetProducerbillingline(ctx,
			expected.ProducerDeviceID,
			expected.CycleID,
			expected.Lineid,
			expected.Paid,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestProducerbillinglineMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateProducerbillingline
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateProducerbillingline{Creator: creator,
				ProducerDeviceID: strconv.Itoa(0),
				CycleID:          0,
				Lineid:           0,
				Paid:             false,
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateProducerbillingline{Creator: "B",
				ProducerDeviceID: strconv.Itoa(0),
				CycleID:          0,
				Lineid:           0,
				Paid:             false,
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateProducerbillingline{Creator: creator,
				ProducerDeviceID: strconv.Itoa(100000),
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
			expected := &types.MsgCreateProducerbillingline{Creator: creator,
				ProducerDeviceID: strconv.Itoa(0),
				CycleID:          0,
				Lineid:           0,
				Paid:             false,
			}
			_, err := srv.CreateProducerbillingline(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateProducerbillingline(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetProducerbillingline(ctx,
					expected.ProducerDeviceID,
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

func TestProducerbillinglineMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteProducerbillingline
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteProducerbillingline{Creator: creator,
				ProducerDeviceID: strconv.Itoa(0),
				CycleID:          0,
				Lineid:           0,
				Paid:             false,
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteProducerbillingline{Creator: "B",
				ProducerDeviceID: strconv.Itoa(0),
				CycleID:          0,
				Lineid:           0,
				Paid:             false,
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteProducerbillingline{Creator: creator,
				ProducerDeviceID: strconv.Itoa(100000),
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

			_, err := srv.CreateProducerbillingline(wctx, &types.MsgCreateProducerbillingline{Creator: creator,
				ProducerDeviceID: strconv.Itoa(0),
				CycleID:          0,
				Lineid:           0,
				Paid:             false,
			})
			require.NoError(t, err)
			_, err = srv.DeleteProducerbillingline(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetProducerbillingline(ctx,
					tc.request.ProducerDeviceID,
					tc.request.CycleID,
					tc.request.Lineid,
					tc.request.Paid,
				)
				require.False(t, found)
			}
		})
	}
}

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

func TestPpaMapMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.MeterKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreatePpaMap{Creator: creator,
			ConsumerDeviceID: strconv.Itoa(i),
			AgreementID:      strconv.Itoa(i),
			AgreementActive:  false,
			ContractID:       strconv.Itoa(i),
		}
		_, err := srv.CreatePpaMap(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetPpaMap(ctx,
			expected.ConsumerDeviceID,
			expected.AgreementID,
			expected.AgreementActive,
			expected.ContractID,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestPpaMapMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdatePpaMap
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdatePpaMap{Creator: creator,
				ConsumerDeviceID: strconv.Itoa(0),
				AgreementID:      strconv.Itoa(0),
				AgreementActive:  false,
				ContractID:       strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdatePpaMap{Creator: "B",
				ConsumerDeviceID: strconv.Itoa(0),
				AgreementID:      strconv.Itoa(0),
				AgreementActive:  false,
				ContractID:       strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdatePpaMap{Creator: creator,
				ConsumerDeviceID: strconv.Itoa(100000),
				AgreementID:      strconv.Itoa(100000),
				AgreementActive:  false,
				ContractID:       strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MeterKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreatePpaMap{Creator: creator,
				ConsumerDeviceID: strconv.Itoa(0),
				AgreementID:      strconv.Itoa(0),
				AgreementActive:  false,
				ContractID:       strconv.Itoa(0),
			}
			_, err := srv.CreatePpaMap(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdatePpaMap(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetPpaMap(ctx,
					expected.ConsumerDeviceID,
					expected.AgreementID,
					expected.AgreementActive,
					expected.ContractID,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestPpaMapMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeletePpaMap
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeletePpaMap{Creator: creator,
				ConsumerDeviceID: strconv.Itoa(0),
				AgreementID:      strconv.Itoa(0),
				AgreementActive:  false,
				ContractID:       strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeletePpaMap{Creator: "B",
				ConsumerDeviceID: strconv.Itoa(0),
				AgreementID:      strconv.Itoa(0),
				AgreementActive:  false,
				ContractID:       strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeletePpaMap{Creator: creator,
				ConsumerDeviceID: strconv.Itoa(100000),
				AgreementID:      strconv.Itoa(100000),
				AgreementActive:  false,
				ContractID:       strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MeterKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreatePpaMap(wctx, &types.MsgCreatePpaMap{Creator: creator,
				ConsumerDeviceID: strconv.Itoa(0),
				AgreementID:      strconv.Itoa(0),
				AgreementActive:  false,
				ContractID:       strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeletePpaMap(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetPpaMap(ctx,
					tc.request.ConsumerDeviceID,
					tc.request.AgreementID,
					tc.request.AgreementActive,
					tc.request.ContractID,
				)
				require.False(t, found)
			}
		})
	}
}

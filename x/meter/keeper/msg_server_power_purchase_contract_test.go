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

func TestPowerPurchaseContractMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.MeterKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreatePowerPurchaseContract{Creator: creator,
			ContractID:       strconv.Itoa(i),
			ContractDeviceID: strconv.Itoa(i),
		}
		_, err := srv.CreatePowerPurchaseContract(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetPowerPurchaseContract(ctx,
			expected.ContractID,
			expected.ContractDeviceID,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestPowerPurchaseContractMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdatePowerPurchaseContract
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdatePowerPurchaseContract{Creator: creator,
				ContractID:       strconv.Itoa(0),
				ContractDeviceID: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdatePowerPurchaseContract{Creator: "B",
				ContractID:       strconv.Itoa(0),
				ContractDeviceID: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdatePowerPurchaseContract{Creator: creator,
				ContractID:       strconv.Itoa(100000),
				ContractDeviceID: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MeterKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreatePowerPurchaseContract{Creator: creator,
				ContractID:       strconv.Itoa(0),
				ContractDeviceID: strconv.Itoa(0),
			}
			_, err := srv.CreatePowerPurchaseContract(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdatePowerPurchaseContract(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetPowerPurchaseContract(ctx,
					expected.ContractID,
					expected.ContractDeviceID,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestPowerPurchaseContractMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeletePowerPurchaseContract
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeletePowerPurchaseContract{Creator: creator,
				ContractID:       strconv.Itoa(0),
				ContractDeviceID: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeletePowerPurchaseContract{Creator: "B",
				ContractID:       strconv.Itoa(0),
				ContractDeviceID: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeletePowerPurchaseContract{Creator: creator,
				ContractID:       strconv.Itoa(100000),
				ContractDeviceID: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MeterKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreatePowerPurchaseContract(wctx, &types.MsgCreatePowerPurchaseContract{Creator: creator,
				ContractID:       strconv.Itoa(0),
				ContractDeviceID: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeletePowerPurchaseContract(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetPowerPurchaseContract(ctx,
					tc.request.ContractID,
					tc.request.ContractDeviceID,
				)
				require.False(t, found)
			}
		})
	}
}

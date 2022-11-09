package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "electra/testutil/keeper"
	"electra/testutil/nullify"
	"electra/x/meter/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestCustomerbillinglineQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNCustomerbillingline(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetCustomerbillinglineRequest
		response *types.QueryGetCustomerbillinglineResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetCustomerbillinglineRequest{
				CustomerDeviceID: msgs[0].CustomerDeviceID,
				CycleID:          msgs[0].CycleID,
				Lineid:           msgs[0].Lineid,
				Paid:             msgs[0].Paid,
			},
			response: &types.QueryGetCustomerbillinglineResponse{Customerbillingline: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetCustomerbillinglineRequest{
				CustomerDeviceID: msgs[1].CustomerDeviceID,
				CycleID:          msgs[1].CycleID,
				Lineid:           msgs[1].Lineid,
				Paid:             msgs[1].Paid,
			},
			response: &types.QueryGetCustomerbillinglineResponse{Customerbillingline: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetCustomerbillinglineRequest{
				CustomerDeviceID: strconv.Itoa(100000),
				CycleID:          100000,
				Lineid:           100000,
				Paid:             false,
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Customerbillingline(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestCustomerbillinglineQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNCustomerbillingline(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllCustomerbillinglineRequest {
		return &types.QueryAllCustomerbillinglineRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.CustomerbillinglineAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Customerbillingline), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Customerbillingline),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.CustomerbillinglineAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Customerbillingline), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Customerbillingline),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.CustomerbillinglineAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Customerbillingline),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.CustomerbillinglineAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}

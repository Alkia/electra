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

func TestBillingcyclesQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNBillingcycles(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetBillingcyclesRequest
		response *types.QueryGetBillingcyclesResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetBillingcyclesRequest{
				CycleID: msgs[0].CycleID,
			},
			response: &types.QueryGetBillingcyclesResponse{Billingcycles: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetBillingcyclesRequest{
				CycleID: msgs[1].CycleID,
			},
			response: &types.QueryGetBillingcyclesResponse{Billingcycles: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetBillingcyclesRequest{
				CycleID: 100000,
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Billingcycles(wctx, tc.request)
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

func TestBillingcyclesQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNBillingcycles(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllBillingcyclesRequest {
		return &types.QueryAllBillingcyclesRequest{
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
			resp, err := keeper.BillingcyclesAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Billingcycles), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Billingcycles),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.BillingcyclesAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Billingcycles), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Billingcycles),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.BillingcyclesAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Billingcycles),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.BillingcyclesAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}

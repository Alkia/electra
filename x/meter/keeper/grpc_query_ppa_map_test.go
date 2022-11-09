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

func TestPpaMapQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNPpaMap(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetPpaMapRequest
		response *types.QueryGetPpaMapResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetPpaMapRequest{
				ConsumerDeviceID: msgs[0].ConsumerDeviceID,
				AgreementID:      msgs[0].AgreementID,
				AgreementActive:  msgs[0].AgreementActive,
				ContractID:       msgs[0].ContractID,
			},
			response: &types.QueryGetPpaMapResponse{PpaMap: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetPpaMapRequest{
				ConsumerDeviceID: msgs[1].ConsumerDeviceID,
				AgreementID:      msgs[1].AgreementID,
				AgreementActive:  msgs[1].AgreementActive,
				ContractID:       msgs[1].ContractID,
			},
			response: &types.QueryGetPpaMapResponse{PpaMap: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetPpaMapRequest{
				ConsumerDeviceID: strconv.Itoa(100000),
				AgreementID:      strconv.Itoa(100000),
				AgreementActive:  false,
				ContractID:       strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.PpaMap(wctx, tc.request)
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

func TestPpaMapQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNPpaMap(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllPpaMapRequest {
		return &types.QueryAllPpaMapRequest{
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
			resp, err := keeper.PpaMapAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.PpaMap), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.PpaMap),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.PpaMapAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.PpaMap), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.PpaMap),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.PpaMapAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.PpaMap),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.PpaMapAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}

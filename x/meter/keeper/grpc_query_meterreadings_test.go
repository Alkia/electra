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

func TestMeterreadingsQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNMeterreadings(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetMeterreadingsRequest
		response *types.QueryGetMeterreadingsResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetMeterreadingsRequest{
				DeviceID:  msgs[0].DeviceID,
				Timestamp: msgs[0].Timestamp,
			},
			response: &types.QueryGetMeterreadingsResponse{Meterreadings: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetMeterreadingsRequest{
				DeviceID:  msgs[1].DeviceID,
				Timestamp: msgs[1].Timestamp,
			},
			response: &types.QueryGetMeterreadingsResponse{Meterreadings: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetMeterreadingsRequest{
				DeviceID:  strconv.Itoa(100000),
				Timestamp: 100000,
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Meterreadings(wctx, tc.request)
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

func TestMeterreadingsQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNMeterreadings(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllMeterreadingsRequest {
		return &types.QueryAllMeterreadingsRequest{
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
			resp, err := keeper.MeterreadingsAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Meterreadings), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Meterreadings),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.MeterreadingsAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Meterreadings), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Meterreadings),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.MeterreadingsAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Meterreadings),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.MeterreadingsAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}

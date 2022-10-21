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

func TestPowerPurchaseContractQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNPowerPurchaseContract(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetPowerPurchaseContractRequest
		response *types.QueryGetPowerPurchaseContractResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetPowerPurchaseContractRequest{
				ContractID:       msgs[0].ContractID,
				ContractDeviceID: msgs[0].ContractDeviceID,
			},
			response: &types.QueryGetPowerPurchaseContractResponse{PowerPurchaseContract: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetPowerPurchaseContractRequest{
				ContractID:       msgs[1].ContractID,
				ContractDeviceID: msgs[1].ContractDeviceID,
			},
			response: &types.QueryGetPowerPurchaseContractResponse{PowerPurchaseContract: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetPowerPurchaseContractRequest{
				ContractID:       strconv.Itoa(100000),
				ContractDeviceID: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.PowerPurchaseContract(wctx, tc.request)
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

func TestPowerPurchaseContractQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.MeterKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNPowerPurchaseContract(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllPowerPurchaseContractRequest {
		return &types.QueryAllPowerPurchaseContractRequest{
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
			resp, err := keeper.PowerPurchaseContractAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.PowerPurchaseContract), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.PowerPurchaseContract),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.PowerPurchaseContractAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.PowerPurchaseContract), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.PowerPurchaseContract),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.PowerPurchaseContractAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.PowerPurchaseContract),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.PowerPurchaseContractAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}

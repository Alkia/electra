package keeper

import (
	"context"

	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ProducerbillsAll(c context.Context, req *types.QueryAllProducerbillsRequest) (*types.QueryAllProducerbillsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var producerbillss []types.Producerbills
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	producerbillsStore := prefix.NewStore(store, types.KeyPrefix(types.ProducerbillsKeyPrefix))

	pageRes, err := query.Paginate(producerbillsStore, req.Pagination, func(key []byte, value []byte) error {
		var producerbills types.Producerbills
		if err := k.cdc.Unmarshal(value, &producerbills); err != nil {
			return err
		}

		producerbillss = append(producerbillss, producerbills)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllProducerbillsResponse{Producerbills: producerbillss, Pagination: pageRes}, nil
}

func (k Keeper) Producerbills(c context.Context, req *types.QueryGetProducerbillsRequest) (*types.QueryGetProducerbillsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetProducerbills(
		ctx,
		req.BillCycleID,
		req.ProducerDeviceID,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetProducerbillsResponse{Producerbills: val}, nil
}

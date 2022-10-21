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

func (k Keeper) ProducerbillinglineAll(c context.Context, req *types.QueryAllProducerbillinglineRequest) (*types.QueryAllProducerbillinglineResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var producerbillinglines []types.Producerbillingline
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	producerbillinglineStore := prefix.NewStore(store, types.KeyPrefix(types.ProducerbillinglineKeyPrefix))

	pageRes, err := query.Paginate(producerbillinglineStore, req.Pagination, func(key []byte, value []byte) error {
		var producerbillingline types.Producerbillingline
		if err := k.cdc.Unmarshal(value, &producerbillingline); err != nil {
			return err
		}

		producerbillinglines = append(producerbillinglines, producerbillingline)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllProducerbillinglineResponse{Producerbillingline: producerbillinglines, Pagination: pageRes}, nil
}

func (k Keeper) Producerbillingline(c context.Context, req *types.QueryGetProducerbillinglineRequest) (*types.QueryGetProducerbillinglineResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetProducerbillingline(
		ctx,
		req.ProducerDeviceID,
		req.CycleID,
		req.Lineid,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetProducerbillinglineResponse{Producerbillingline: val}, nil
}

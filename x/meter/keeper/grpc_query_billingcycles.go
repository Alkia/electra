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

func (k Keeper) BillingcyclesAll(c context.Context, req *types.QueryAllBillingcyclesRequest) (*types.QueryAllBillingcyclesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var billingcycless []types.Billingcycles
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	billingcyclesStore := prefix.NewStore(store, types.KeyPrefix(types.BillingcyclesKeyPrefix))

	pageRes, err := query.Paginate(billingcyclesStore, req.Pagination, func(key []byte, value []byte) error {
		var billingcycles types.Billingcycles
		if err := k.cdc.Unmarshal(value, &billingcycles); err != nil {
			return err
		}

		billingcycless = append(billingcycless, billingcycles)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBillingcyclesResponse{Billingcycles: billingcycless, Pagination: pageRes}, nil
}

func (k Keeper) Billingcycles(c context.Context, req *types.QueryGetBillingcyclesRequest) (*types.QueryGetBillingcyclesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetBillingcycles(
		ctx,
		req.CycleID,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetBillingcyclesResponse{Billingcycles: val}, nil
}

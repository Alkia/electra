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

func (k Keeper) CustomerbillinglineAll(c context.Context, req *types.QueryAllCustomerbillinglineRequest) (*types.QueryAllCustomerbillinglineResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var customerbillinglines []types.Customerbillingline
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	customerbillinglineStore := prefix.NewStore(store, types.KeyPrefix(types.CustomerbillinglineKeyPrefix))

	pageRes, err := query.Paginate(customerbillinglineStore, req.Pagination, func(key []byte, value []byte) error {
		var customerbillingline types.Customerbillingline
		if err := k.cdc.Unmarshal(value, &customerbillingline); err != nil {
			return err
		}

		customerbillinglines = append(customerbillinglines, customerbillingline)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCustomerbillinglineResponse{Customerbillingline: customerbillinglines, Pagination: pageRes}, nil
}

func (k Keeper) Customerbillingline(c context.Context, req *types.QueryGetCustomerbillinglineRequest) (*types.QueryGetCustomerbillinglineResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCustomerbillingline(
		ctx,
		req.CustomerDeviceID,
		req.CycleID,
		req.Lineid,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetCustomerbillinglineResponse{Customerbillingline: val}, nil
}

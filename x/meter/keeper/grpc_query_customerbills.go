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

func (k Keeper) CustomerbillsAll(c context.Context, req *types.QueryAllCustomerbillsRequest) (*types.QueryAllCustomerbillsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var customerbillss []types.Customerbills
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	customerbillsStore := prefix.NewStore(store, types.KeyPrefix(types.CustomerbillsKeyPrefix))

	pageRes, err := query.Paginate(customerbillsStore, req.Pagination, func(key []byte, value []byte) error {
		var customerbills types.Customerbills
		if err := k.cdc.Unmarshal(value, &customerbills); err != nil {
			return err
		}

		customerbillss = append(customerbillss, customerbills)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCustomerbillsResponse{Customerbills: customerbillss, Pagination: pageRes}, nil
}

func (k Keeper) Customerbills(c context.Context, req *types.QueryGetCustomerbillsRequest) (*types.QueryGetCustomerbillsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCustomerbills(
		ctx,
		req.BillCycleID,
		req.CustomerDeviceID,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetCustomerbillsResponse{Customerbills: val}, nil
}

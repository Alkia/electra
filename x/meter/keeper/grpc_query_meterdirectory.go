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

func (k Keeper) MeterdirectoryAll(c context.Context, req *types.QueryAllMeterdirectoryRequest) (*types.QueryAllMeterdirectoryResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var meterdirectorys []types.Meterdirectory
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	meterdirectoryStore := prefix.NewStore(store, types.KeyPrefix(types.MeterdirectoryKeyPrefix))

	pageRes, err := query.Paginate(meterdirectoryStore, req.Pagination, func(key []byte, value []byte) error {
		var meterdirectory types.Meterdirectory
		if err := k.cdc.Unmarshal(value, &meterdirectory); err != nil {
			return err
		}

		meterdirectorys = append(meterdirectorys, meterdirectory)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllMeterdirectoryResponse{Meterdirectory: meterdirectorys, Pagination: pageRes}, nil
}

func (k Keeper) Meterdirectory(c context.Context, req *types.QueryGetMeterdirectoryRequest) (*types.QueryGetMeterdirectoryResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetMeterdirectory(
		ctx,
		req.DeviceID,
		req.Barcodeserial,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetMeterdirectoryResponse{Meterdirectory: val}, nil
}

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

func (k Keeper) PpaMapAll(c context.Context, req *types.QueryAllPpaMapRequest) (*types.QueryAllPpaMapResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var ppaMaps []types.PpaMap
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	ppaMapStore := prefix.NewStore(store, types.KeyPrefix(types.PpaMapKeyPrefix))

	pageRes, err := query.Paginate(ppaMapStore, req.Pagination, func(key []byte, value []byte) error {
		var ppaMap types.PpaMap
		if err := k.cdc.Unmarshal(value, &ppaMap); err != nil {
			return err
		}

		ppaMaps = append(ppaMaps, ppaMap)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPpaMapResponse{PpaMap: ppaMaps, Pagination: pageRes}, nil
}

func (k Keeper) PpaMap(c context.Context, req *types.QueryGetPpaMapRequest) (*types.QueryGetPpaMapResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetPpaMap(
		ctx,
		req.ConsumerDeviceID,
		req.AgreementID,
		req.AgreementActive,
		req.ContractID,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetPpaMapResponse{PpaMap: val}, nil
}

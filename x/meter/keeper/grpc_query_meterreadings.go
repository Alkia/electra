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

func (k Keeper) MeterreadingsAll(c context.Context, req *types.QueryAllMeterreadingsRequest) (*types.QueryAllMeterreadingsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var meterreadingss []types.Meterreadings
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	meterreadingsStore := prefix.NewStore(store, types.KeyPrefix(types.MeterreadingsKeyPrefix))

	pageRes, err := query.Paginate(meterreadingsStore, req.Pagination, func(key []byte, value []byte) error {
		var meterreadings types.Meterreadings
		if err := k.cdc.Unmarshal(value, &meterreadings); err != nil {
			return err
		}

		meterreadingss = append(meterreadingss, meterreadings)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllMeterreadingsResponse{Meterreadings: meterreadingss, Pagination: pageRes}, nil
}

func (k Keeper) Meterreadings(c context.Context, req *types.QueryGetMeterreadingsRequest) (*types.QueryGetMeterreadingsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetMeterreadings(
		ctx,
		req.DeviceID,
		req.Timestamp,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetMeterreadingsResponse{Meterreadings: val}, nil
}

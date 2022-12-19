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

func (k Keeper) PowerPurchaseContractAll(c context.Context, req *types.QueryAllPowerPurchaseContractRequest) (*types.QueryAllPowerPurchaseContractResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var powerPurchaseContracts []types.PowerPurchaseContract
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	powerPurchaseContractStore := prefix.NewStore(store, types.KeyPrefix(types.PowerPurchaseContractKeyPrefix))

	pageRes, err := query.Paginate(powerPurchaseContractStore, req.Pagination, func(key []byte, value []byte) error {
		var powerPurchaseContract types.PowerPurchaseContract
		if err := k.cdc.Unmarshal(value, &powerPurchaseContract); err != nil {
			return err
		}

		powerPurchaseContracts = append(powerPurchaseContracts, powerPurchaseContract)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPowerPurchaseContractResponse{PowerPurchaseContract: powerPurchaseContracts, Pagination: pageRes}, nil
}

func (k Keeper) PowerPurchaseContract(c context.Context, req *types.QueryGetPowerPurchaseContractRequest) (*types.QueryGetPowerPurchaseContractResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetPowerPurchaseContract(
		ctx,
		req.ContractID,
		req.ContractDeviceID,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetPowerPurchaseContractResponse{PowerPurchaseContract: val}, nil
}

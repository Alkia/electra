package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"

	"electra/x/meter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)
// Do the search in GO mode so it can be resused in the billing 
func (k Keeper) getCurrentcycle(goCtx context.Context)(cycle types.Billingcycles, err error){
	ctx := sdk.UnwrapSDKContext(goCtx)
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BillingcyclesKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})
	var tempcycle types.Billingcycles
	tempcycle.CycleID = 0					// Init
	defer iterator.Close()

	// Find the highest Cycle ID
	for ; iterator.Valid(); iterator.Next() {
		var val types.Billingcycles
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if (val.CycleID > tempcycle.CycleID) {
			tempcycle = val		 			//list = append(list, val)
			}   
	}
	return tempcycle, nil
}
// Format for GRPC and CLI
func (k Keeper) CurrentcycleID(goCtx context.Context, req *types.QueryCurrentcycleIDRequest) (*types.QueryCurrentcycleIDResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	// DONE: Process the query
	
	cycle, err := k.getCurrentcycle(goCtx)
	return &types.QueryCurrentcycleIDResponse{CycleID: cycle.CycleID, Begin: cycle.Begin, End: cycle.End, Whin: cycle.Whin, Whout: cycle.Whout, Moneyin: cycle.Moneyin, Moneyout: cycle.Moneyout, Curency: cycle.Curency}, err
}

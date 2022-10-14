package keeper

import (
	"context"
	"time"
	"fmt"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	"github.com/cosmos/cosmos-sdk/types/query"

	"electra/x/meter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Getproducerbill(goCtx context.Context, req *types.QueryGetproducerbillRequest) (*types.QueryGetproducerbillResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	// Performance Management
	start := time.Now()
	// DONE: Process the query
	var producerbillinglines []types.Producerbillingline
	var nblines uint64 = 0
	var billTotalWh, billTotalPrice uint64 = 0 ,0 
	var stDebug,curency string = "","uelectra"

	ctx := sdk.UnwrapSDKContext(goCtx)
	store := ctx.KVStore(k.storeKey)
	producerbillinglineStore := prefix.NewStore(store, types.KeyPrefix(types.ProducerbillinglineKeyPrefix))

	pageRes, err := query.Paginate(producerbillinglineStore, req.Pagination, func(key []byte, value []byte) error {
		var producerbillingline types.Producerbillingline
		if err := k.cdc.Unmarshal(value, &producerbillingline); err != nil {
			return err
		}

		if (req.ProducerdeviceID  == producerbillingline.CustomerdeviceID) && (uint64(producerbillingline.CycleID) == uint64(req.BillCycleID))  {
			producerbillinglines = append(producerbillinglines, producerbillingline)
			billTotalWh 	+= producerbillingline.LineWh          
			billTotalPrice 	+= producerbillingline.LineWhPrice 
			nblines++
		}
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	elapsed := time.Since(start)
	stDebug = fmt.Sprintf("Search took %s", elapsed)
	return &types.QueryGetproducerbillResponse{Producerbillingline: producerbillinglines, BillTotalWh:billTotalWh, BillTotalPrice: billTotalPrice, Curency: curency, Nblines: nblines, Comments: stDebug, Pagination: pageRes}, nil
}

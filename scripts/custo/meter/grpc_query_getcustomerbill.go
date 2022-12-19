package keeper

import (
	"context"
	"time"
	"fmt"
    "encoding/json"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	"github.com/cosmos/cosmos-sdk/types/query"

	"electra/x/meter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Getcustomerbill(goCtx context.Context, req *types.QueryGetcustomerbillRequest) (*types.QueryGetcustomerbillResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	// Performance Management
	start := time.Now()
	// DONE: Process the query
	var customerbillinglines []types.Customerbillingline
	var nblines uint64 = 0
	var billTotalWh, billTotalPrice uint64 = 0 ,0 
	var stDebug,currency string = "","uelectra"
	
	ctx := sdk.UnwrapSDKContext(goCtx)
	store := ctx.KVStore(k.storeKey)
	customerbillinglineStore := prefix.NewStore(store, types.KeyPrefix(types.CustomerbillinglineKeyPrefix))

	pageRes, err := query.Paginate(customerbillinglineStore, req.Pagination, func(key []byte, value []byte) error {
		var customerbillingline types.Customerbillingline
		if err := k.cdc.Unmarshal(value, &customerbillingline); err != nil {
			return err
		}
		
		if (req.CustomerDeviceID  == customerbillingline.CustomerDeviceID) && (uint64(customerbillingline.CycleID) == uint64(req.BillCycleID))  {
			customerbillinglines = append(customerbillinglines, customerbillingline)
			billTotalWh 	+= customerbillingline.LineWh          
			billTotalPrice 	+= customerbillingline.LineWhPrice 
			nblines++
		}
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}
	// Convert to array of json string
	var displaybillinglines []string 
	for _, line := range customerbillinglines {
		json, _ := json.Marshal(line)
		displaybillinglines = append(displaybillinglines, string(json))
	}

	elapsed := time.Since(start)
	stDebug = fmt.Sprintf("Search took %s", elapsed)
	return &types.QueryGetcustomerbillResponse{Customerbillinglines: displaybillinglines, BillTotalWh:billTotalWh, BillTotalPrice: billTotalPrice, Currency: currency, Nblines: nblines, Comments: stDebug, Pagination: pageRes}, nil
}
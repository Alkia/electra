package keeper

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	"github.com/cosmos/cosmos-sdk/types/query"
	"time"

	"electra/x/meter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Listrecordings(goCtx context.Context, req *types.QueryListrecordingsRequest) (*types.QueryListrecordingsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// DONE: Process the query
	// Performance Management
	start := time.Now()

	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var meterreadingss []types.Meterreadings
	var total uint64 = 0
	// Define a variable from request
	var mydeviceID string = req.DeviceID
	var from uint64 = req.Start
	var to uint64 = req.End
	//var byblock bool = req.Byblock
	var stDebug string = ""
	//if(byblock==false) { stDebug .= " by timestamp "} else  { stDebug .= " by block "}

	store := ctx.KVStore(k.storeKey)
	meterreadingsStore := prefix.NewStore(store, types.KeyPrefix(types.MeterreadingsKeyPrefix))

	pageRes, err := query.Paginate(meterreadingsStore, req.Pagination, func(key []byte, value []byte) error {
		var meterreadings types.Meterreadings
		if err := k.cdc.Unmarshal(value, &meterreadings); err != nil {
			return err
		}
		if (mydeviceID == meterreadings.DeviceID) && (uint64(meterreadings.Timestamp) >= uint64(from)) && (uint64(meterreadings.Timestamp) <= uint64(to)) {
			meterreadingss = append(meterreadingss, meterreadings)
			total++
		}
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	// Convert to array of json string
	var displaylines []string
	for _, line := range meterreadingss {
		json, _ := json.Marshal(line)
		displaylines = append(displaylines, string(json))
	}

	elapsed := time.Since(start)
	stDebug = fmt.Sprintf("Search took %s", elapsed)
	return &types.QueryListrecordingsResponse{Meterreadings: displaylines, Comments: stDebug, Total: total, Pagination: pageRes}, nil
}

package keeper
// electrad query meter currentcycle-id
// electrad tx meter prepare-bill [cycle-id] [record]
// electrad tx meter prepare-bill 78 false --from bob -y

import (
	"context"
	"fmt"
	"time"
	"electra/x/meter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

//  INPUT : string creator = 1; uint64 cycleID = 2;  bool record = 3;
//
//  OUTPUT : string jsonBill = 1; string comment = 2;
//
func (k msgServer) PrepareBill(goCtx context.Context, msg *types.MsgPrepareBill) (*types.MsgPrepareBillResponse, error) {			
	// Performance Management
	start 	:= time.Now()	
	// Variables
	ctx 	:= sdk.UnwrapSDKContext(goCtx)
	var comment string = ""
	var ppcList []types.PowerPurchaseContract = k.GetAllPowerPurchaseContract(ctx)  	// from x/meter/keeper/power_purchase_contract.go
	var ppaList []types.PpaMap = k.GetAllPpaMap(ctx)   	// from x/meter/keeper/ppa_map.go GetAllPpaMap returns all ppaMap  func (k Keeper) GetAllPpaMap(ctx sdk.Context) (list []types.PpaMap)
	var ppcMap = ppcList2ppcMap(ppcList) 				// includes make(map[string]types.PowerPurchaseContract)
	var ppaMap = ppaList2ppaMap(ppaList)				// make(map[string]types.PpaMap)
	comment	+= fmt.Sprintf("\n### BEGIN ### PrepareBill ### ppcList: %+v\n======\nppaMap: %+v\n======\n", ppcList, ppaMap)
	// Load values
	previousCycleConsumeInMap, previousCycleProduceOutMap, currentCycleConsumeInMap, currentCycleProduceOutMap, _ := k.loadMeterReadingValues(ctx, msg.CycleID)
	comment	+= fmt.Sprintf("\n### PrepareBill ###\npreviousCycleConsumeInMap:%+v\npreviousCycleProduceOutMap:%+v\ncurrentCycleConsumeInMap:%+v\ncurrentCycleProduceOutMap:%+v\n",previousCycleConsumeInMap, previousCycleProduceOutMap, currentCycleConsumeInMap, currentCycleProduceOutMap)
	writelog(comment)
	// Prepare the bills
	customerbill, customerbillinglines, producerbillinglines, commentPrepare, err := makePrepareBill(ppcMap, ppaMap, msg.CycleID, previousCycleConsumeInMap, previousCycleProduceOutMap, currentCycleConsumeInMap, currentCycleProduceOutMap)

	if (msg.Record == true) {							// Record the bill on the chain
		commentRecord, _ := k.recordAllPreparedBills(goCtx, customerbill, customerbillinglines, producerbillinglines)
		comment += commentRecord
	}
	comment	+= fmt.Sprintf("\n### PrepareBill ###\ncustomerbill:%+v\ncustomerbillinglines:%+v\nproducerbillinglines:%+v\n",customerbill, customerbillinglines, producerbillinglines, commentPrepare)
	elapsed	:= time.Since(start)
	comment	+= fmt.Sprintf("\n### END ### PrepareBill All took %s @ %s ###\n", elapsed,time.Now())
	fmt.Printf(comment)
	writelog(comment)
	return &types.MsgPrepareBillResponse{JsonCustomerbill: "",JsonProducerbill: commentPrepare, Comment: comment}, err
}
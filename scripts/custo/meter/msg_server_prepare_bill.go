package keeper
// electrad query meter currentcycle-id
// electrad tx meter prepare-bill [cycle-id] [record]
// electrad tx meter prepare-bill 78 false --from bob -y

import (
	"context"
	"fmt"
	"encoding/json"
	"electra/x/meter/types"
)

//  INPUT : string creator = 1; uint64 cycleID = 2;  bool record = 3;
//
//  OUTPUT : string jsonBill = 1; string comment = 2;
//
func (k msgServer) PrepareBill(goCtx context.Context, msg *types.MsgPrepareBill) (*types.MsgPrepareBillResponse, error) {			

	customerbills, producerbills, comment, err := k.makePrepareBill(goCtx, msg.CycleID)
	if err != nil {
        fmt.Printf("Error: %s", err.Error())
    }
	jsonBill1, err := json.Marshal(customerbills)
	if err != nil {
        fmt.Printf("Error: %s", err.Error())
    }
	jsonBill2, err := json.Marshal(producerbills)
	if err != nil {
        fmt.Printf("Error: %s", err.Error())
    }

	if (msg.Record == true) {					// Record the bill on the chain

	}
	return &types.MsgPrepareBillResponse{JsonCustomerbill: string(jsonBill1),JsonProducerbill: string(jsonBill2), Comment: comment}, nil
}
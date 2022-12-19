package keeper

import (
	"context"

	"electra/x/meter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Record(goCtx context.Context, msg *types.MsgRecord) (*types.MsgRecordResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// DONE: Handling the message
	//var datetimeM = fmt.Sprintf("%d", ctx.BlockHeight())

	var recording = types.Meterreadings{
		DeviceID:  msg.Creator,
		Timestamp: msg.Timestamp, //Timestamp:   uint64(ctx.BlockHeight()),
		Phase:     msg.Phase,
		Whin:      msg.Whin,
		Whout:     msg.Whout,
		Mvolt:     msg.Mvolt,
		Mhertz:    msg.Mhertz,
		Mpf:       msg.Mpf,
		Maxmi:     msg.Maxmi,
	}

	k.SetMeterreadings(ctx, recording) // from scafolding the MAP object | in file keeper/meterreading.go

	return &types.MsgRecordResponse{}, nil
}

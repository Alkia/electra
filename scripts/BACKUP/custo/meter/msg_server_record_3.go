package keeper

import (
	"context"

	"electra/x/meter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Record3(goCtx context.Context, msg *types.MsgRecord3) (*types.MsgRecord3Response, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// DONE: Handling the message
	var recording1 = types.Meterreadings{
		DeviceID:  msg.Creator,
		Timestamp: msg.Timestamp,  
		Phase:     1,
		Whin:      msg.Whin1,
		Whout:     msg.Whout1,
		Mvolt:     msg.Mvolt1,
		Mhertz:    msg.Mhertz1,
		Mpf:       msg.Mpf1,
		Maxmi:     msg.Maxmi1,
	}

	var recording2 = types.Meterreadings{
		DeviceID:  msg.Creator,
		Timestamp: msg.Timestamp,  
		Phase:     2,
		Whin:      msg.Whin2,
		Whout:     msg.Whout2,
		Mvolt:     msg.Mvolt2,
		Mhertz:    msg.Mhertz2,
		Mpf:       msg.Mpf2,
		Maxmi:     msg.Maxmi2,
	}

	var recording3 = types.Meterreadings{
		DeviceID:  msg.Creator,
		Timestamp: msg.Timestamp, 
		Phase:     3,
		Whin:      msg.Whin3,
		Whout:     msg.Whout3,
		Mvolt:     msg.Mvolt3,
		Mhertz:    msg.Mhertz3,
		Mpf:       msg.Mpf3,
		Maxmi:     msg.Maxmi3,
	}

	k.SetMeterreadings(ctx, recording1) // from scafolding the MAP object | in file keeper/meterreading.go
	k.SetMeterreadings(ctx, recording2) // from scafolding the MAP object | in file keeper/meterreading.go
	k.SetMeterreadings(ctx, recording3) // from scafolding the MAP object | in file keeper/meterreading.go

	return &types.MsgRecord3Response{}, nil
}

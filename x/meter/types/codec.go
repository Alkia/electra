package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgRecord{}, "meter/Record", nil)
	cdc.RegisterConcrete(&MsgRecord3{}, "meter/Record3", nil)
	cdc.RegisterConcrete(&MsgCreatePowerPurchaseContract{}, "meter/CreatePowerPurchaseContract", nil)
	cdc.RegisterConcrete(&MsgUpdatePowerPurchaseContract{}, "meter/UpdatePowerPurchaseContract", nil)
	cdc.RegisterConcrete(&MsgDeletePowerPurchaseContract{}, "meter/DeletePowerPurchaseContract", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRecord{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRecord3{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePowerPurchaseContract{},
		&MsgUpdatePowerPurchaseContract{},
		&MsgDeletePowerPurchaseContract{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)

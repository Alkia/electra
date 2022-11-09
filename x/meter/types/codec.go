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
	cdc.RegisterConcrete(&MsgCreatePpaMap{}, "meter/CreatePpaMap", nil)
	cdc.RegisterConcrete(&MsgUpdatePpaMap{}, "meter/UpdatePpaMap", nil)
	cdc.RegisterConcrete(&MsgDeletePpaMap{}, "meter/DeletePpaMap", nil)
	cdc.RegisterConcrete(&MsgCreateBillingcycles{}, "meter/CreateBillingcycles", nil)
	cdc.RegisterConcrete(&MsgUpdateBillingcycles{}, "meter/UpdateBillingcycles", nil)
	cdc.RegisterConcrete(&MsgDeleteBillingcycles{}, "meter/DeleteBillingcycles", nil)
	cdc.RegisterConcrete(&MsgPrepareBill{}, "meter/PrepareBill", nil)
	cdc.RegisterConcrete(&MsgCreateCustomerbillingline{}, "meter/CreateCustomerbillingline", nil)
	cdc.RegisterConcrete(&MsgUpdateCustomerbillingline{}, "meter/UpdateCustomerbillingline", nil)
	cdc.RegisterConcrete(&MsgDeleteCustomerbillingline{}, "meter/DeleteCustomerbillingline", nil)
	cdc.RegisterConcrete(&MsgCreateCustomerbills{}, "meter/CreateCustomerbills", nil)
	cdc.RegisterConcrete(&MsgUpdateCustomerbills{}, "meter/UpdateCustomerbills", nil)
	cdc.RegisterConcrete(&MsgDeleteCustomerbills{}, "meter/DeleteCustomerbills", nil)
	cdc.RegisterConcrete(&MsgCreateProducerbillingline{}, "meter/CreateProducerbillingline", nil)
	cdc.RegisterConcrete(&MsgUpdateProducerbillingline{}, "meter/UpdateProducerbillingline", nil)
	cdc.RegisterConcrete(&MsgDeleteProducerbillingline{}, "meter/DeleteProducerbillingline", nil)
	cdc.RegisterConcrete(&MsgCreateProducerbills{}, "meter/CreateProducerbills", nil)
	cdc.RegisterConcrete(&MsgUpdateProducerbills{}, "meter/UpdateProducerbills", nil)
	cdc.RegisterConcrete(&MsgDeleteProducerbills{}, "meter/DeleteProducerbills", nil)
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
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePpaMap{},
		&MsgUpdatePpaMap{},
		&MsgDeletePpaMap{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateBillingcycles{},
		&MsgUpdateBillingcycles{},
		&MsgDeleteBillingcycles{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgPrepareBill{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCustomerbillingline{},
		&MsgUpdateCustomerbillingline{},
		&MsgDeleteCustomerbillingline{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCustomerbills{},
		&MsgUpdateCustomerbills{},
		&MsgDeleteCustomerbills{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateProducerbillingline{},
		&MsgUpdateProducerbillingline{},
		&MsgDeleteProducerbillingline{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateProducerbills{},
		&MsgUpdateProducerbills{},
		&MsgDeleteProducerbills{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)

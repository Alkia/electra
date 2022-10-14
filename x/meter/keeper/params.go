package keeper

import (
	"electra/x/meter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetParams get all parameters as types.Params
func (k Keeper) GetParams(ctx sdk.Context) types.Params {
	return types.NewParams(
		k.MaxBillingIteration(ctx),
		k.ModuleParamBestForCustomer(ctx),
		k.PayAutomatically(ctx),
		k.BillingAdmin(ctx),
	)
}

// SetParams set the params
func (k Keeper) SetParams(ctx sdk.Context, params types.Params) {
	k.paramstore.SetParamSet(ctx, &params)
}

// MaxBillingIteration returns the MaxBillingIteration param
func (k Keeper) MaxBillingIteration(ctx sdk.Context) (res uint64) {
	k.paramstore.Get(ctx, types.KeyMaxBillingIteration, &res)
	return
}

// ModuleParamBestForCustomer returns the ModuleParamBestForCustomer param
func (k Keeper) ModuleParamBestForCustomer(ctx sdk.Context) (res bool) {
	k.paramstore.Get(ctx, types.KeyModuleParamBestForCustomer, &res)
	return
}

// PayAutomatically returns the PayAutomatically param
func (k Keeper) PayAutomatically(ctx sdk.Context) (res bool) {
	k.paramstore.Get(ctx, types.KeyPayAutomatically, &res)
	return
}

// BillingAdmin returns the BillingAdmin param
func (k Keeper) BillingAdmin(ctx sdk.Context) (res string) {
	k.paramstore.Get(ctx, types.KeyBillingAdmin, &res)
	return
}

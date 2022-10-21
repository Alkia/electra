package keeper

import (
	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetCustomerbillingline set a specific customerbillingline in the store from its index
func (k Keeper) SetCustomerbillingline(ctx sdk.Context, customerbillingline types.Customerbillingline) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CustomerbillinglineKeyPrefix))
	b := k.cdc.MustMarshal(&customerbillingline)
	store.Set(types.CustomerbillinglineKey(
		customerbillingline.CustomerDeviceID,
		customerbillingline.CycleID,
		customerbillingline.Lineid,
	), b)
}

// GetCustomerbillingline returns a customerbillingline from its index
func (k Keeper) GetCustomerbillingline(
	ctx sdk.Context,
	customerDeviceID string,
	cycleID uint64,
	lineid uint64,

) (val types.Customerbillingline, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CustomerbillinglineKeyPrefix))

	b := store.Get(types.CustomerbillinglineKey(
		customerDeviceID,
		cycleID,
		lineid,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCustomerbillingline removes a customerbillingline from the store
func (k Keeper) RemoveCustomerbillingline(
	ctx sdk.Context,
	customerDeviceID string,
	cycleID uint64,
	lineid uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CustomerbillinglineKeyPrefix))
	store.Delete(types.CustomerbillinglineKey(
		customerDeviceID,
		cycleID,
		lineid,
	))
}

// GetAllCustomerbillingline returns all customerbillingline
func (k Keeper) GetAllCustomerbillingline(ctx sdk.Context) (list []types.Customerbillingline) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CustomerbillinglineKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Customerbillingline
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

package keeper

import (
	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetBillingcycles set a specific billingcycles in the store from its index
func (k Keeper) SetBillingcycles(ctx sdk.Context, billingcycles types.Billingcycles) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BillingcyclesKeyPrefix))
	b := k.cdc.MustMarshal(&billingcycles)
	store.Set(types.BillingcyclesKey(
		billingcycles.CycleID,
	), b)
}

// GetBillingcycles returns a billingcycles from its index
func (k Keeper) GetBillingcycles(
	ctx sdk.Context,
	cycleID uint64,

) (val types.Billingcycles, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BillingcyclesKeyPrefix))

	b := store.Get(types.BillingcyclesKey(
		cycleID,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveBillingcycles removes a billingcycles from the store
func (k Keeper) RemoveBillingcycles(
	ctx sdk.Context,
	cycleID uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BillingcyclesKeyPrefix))
	store.Delete(types.BillingcyclesKey(
		cycleID,
	))
}

// GetAllBillingcycles returns all billingcycles
func (k Keeper) GetAllBillingcycles(ctx sdk.Context) (list []types.Billingcycles) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BillingcyclesKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Billingcycles
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

package keeper

import (
	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetProducerbillingline set a specific producerbillingline in the store from its index
func (k Keeper) SetProducerbillingline(ctx sdk.Context, producerbillingline types.Producerbillingline) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProducerbillinglineKeyPrefix))
	b := k.cdc.MustMarshal(&producerbillingline)
	store.Set(types.ProducerbillinglineKey(
		producerbillingline.ProducerDeviceID,
		producerbillingline.CycleID,
		producerbillingline.Lineid,
		producerbillingline.Paid,
	), b)
}

// GetProducerbillingline returns a producerbillingline from its index
func (k Keeper) GetProducerbillingline(
	ctx sdk.Context,
	producerDeviceID string,
	cycleID uint64,
	lineid uint64,
	paid bool,

) (val types.Producerbillingline, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProducerbillinglineKeyPrefix))

	b := store.Get(types.ProducerbillinglineKey(
		producerDeviceID,
		cycleID,
		lineid,
		paid,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveProducerbillingline removes a producerbillingline from the store
func (k Keeper) RemoveProducerbillingline(
	ctx sdk.Context,
	producerDeviceID string,
	cycleID uint64,
	lineid uint64,
	paid bool,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProducerbillinglineKeyPrefix))
	store.Delete(types.ProducerbillinglineKey(
		producerDeviceID,
		cycleID,
		lineid,
		paid,
	))
}

// GetAllProducerbillingline returns all producerbillingline
func (k Keeper) GetAllProducerbillingline(ctx sdk.Context) (list []types.Producerbillingline) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProducerbillinglineKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Producerbillingline
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

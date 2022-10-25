package keeper

import (
	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetProducerbills set a specific producerbills in the store from its index
func (k Keeper) SetProducerbills(ctx sdk.Context, producerbills types.Producerbills) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProducerbillsKeyPrefix))
	b := k.cdc.MustMarshal(&producerbills)
	store.Set(types.ProducerbillsKey(
		producerbills.BillCycleID,
		producerbills.ProducerDeviceID,
	), b)
}

// GetProducerbills returns a producerbills from its index
func (k Keeper) GetProducerbills(
	ctx sdk.Context,
	billCycleID uint64,
	producerDeviceID string,

) (val types.Producerbills, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProducerbillsKeyPrefix))

	b := store.Get(types.ProducerbillsKey(
		billCycleID,
		producerDeviceID,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveProducerbills removes a producerbills from the store
func (k Keeper) RemoveProducerbills(
	ctx sdk.Context,
	billCycleID uint64,
	producerDeviceID string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProducerbillsKeyPrefix))
	store.Delete(types.ProducerbillsKey(
		billCycleID,
		producerDeviceID,
	))
}

// GetAllProducerbills returns all producerbills
func (k Keeper) GetAllProducerbills(ctx sdk.Context) (list []types.Producerbills) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProducerbillsKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Producerbills
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

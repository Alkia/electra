package keeper

import (
	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetMeterreadings set a specific meterreadings in the store from its index
func (k Keeper) SetMeterreadings(ctx sdk.Context, meterreadings types.Meterreadings) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MeterreadingsKeyPrefix))
	b := k.cdc.MustMarshal(&meterreadings)
	store.Set(types.MeterreadingsKey(
		meterreadings.DeviceID,
		meterreadings.Timestamp,
	), b)
}

// GetMeterreadings returns a meterreadings from its index
func (k Keeper) GetMeterreadings(
	ctx sdk.Context,
	deviceID string,
	timestamp uint64,

) (val types.Meterreadings, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MeterreadingsKeyPrefix))

	b := store.Get(types.MeterreadingsKey(
		deviceID,
		timestamp,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMeterreadings removes a meterreadings from the store
func (k Keeper) RemoveMeterreadings(
	ctx sdk.Context,
	deviceID string,
	timestamp uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MeterreadingsKeyPrefix))
	store.Delete(types.MeterreadingsKey(
		deviceID,
		timestamp,
	))
}

// GetAllMeterreadings returns all meterreadings
func (k Keeper) GetAllMeterreadings(ctx sdk.Context) (list []types.Meterreadings) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MeterreadingsKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Meterreadings
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

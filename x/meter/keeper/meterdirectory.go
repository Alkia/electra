package keeper

import (
	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetMeterdirectory set a specific meterdirectory in the store from its index
func (k Keeper) SetMeterdirectory(ctx sdk.Context, meterdirectory types.Meterdirectory) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MeterdirectoryKeyPrefix))
	b := k.cdc.MustMarshal(&meterdirectory)
	store.Set(types.MeterdirectoryKey(
		meterdirectory.DeviceID,
		meterdirectory.Barcodeserial,
	), b)
}

// GetMeterdirectory returns a meterdirectory from its index
func (k Keeper) GetMeterdirectory(
	ctx sdk.Context,
	deviceID string,
	barcodeserial string,

) (val types.Meterdirectory, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MeterdirectoryKeyPrefix))

	b := store.Get(types.MeterdirectoryKey(
		deviceID,
		barcodeserial,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMeterdirectory removes a meterdirectory from the store
func (k Keeper) RemoveMeterdirectory(
	ctx sdk.Context,
	deviceID string,
	barcodeserial string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MeterdirectoryKeyPrefix))
	store.Delete(types.MeterdirectoryKey(
		deviceID,
		barcodeserial,
	))
}

// GetAllMeterdirectory returns all meterdirectory
func (k Keeper) GetAllMeterdirectory(ctx sdk.Context) (list []types.Meterdirectory) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MeterdirectoryKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Meterdirectory
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

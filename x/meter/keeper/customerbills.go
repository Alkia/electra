package keeper

import (
	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetCustomerbills set a specific customerbills in the store from its index
func (k Keeper) SetCustomerbills(ctx sdk.Context, customerbills types.Customerbills) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CustomerbillsKeyPrefix))
	b := k.cdc.MustMarshal(&customerbills)
	store.Set(types.CustomerbillsKey(
		customerbills.BillCycleID,
		customerbills.CustomerDeviceID,
	), b)
}

// GetCustomerbills returns a customerbills from its index
func (k Keeper) GetCustomerbills(
	ctx sdk.Context,
	billCycleID uint64,
	customerDeviceID string,

) (val types.Customerbills, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CustomerbillsKeyPrefix))

	b := store.Get(types.CustomerbillsKey(
		billCycleID,
		customerDeviceID,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCustomerbills removes a customerbills from the store
func (k Keeper) RemoveCustomerbills(
	ctx sdk.Context,
	billCycleID uint64,
	customerDeviceID string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CustomerbillsKeyPrefix))
	store.Delete(types.CustomerbillsKey(
		billCycleID,
		customerDeviceID,
	))
}

// GetAllCustomerbills returns all customerbills
func (k Keeper) GetAllCustomerbills(ctx sdk.Context) (list []types.Customerbills) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CustomerbillsKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Customerbills
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

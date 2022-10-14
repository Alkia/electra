package keeper

import (
	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetPowerPurchaseContract set a specific powerPurchaseContract in the store from its index
func (k Keeper) SetPowerPurchaseContract(ctx sdk.Context, powerPurchaseContract types.PowerPurchaseContract) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PowerPurchaseContractKeyPrefix))
	b := k.cdc.MustMarshal(&powerPurchaseContract)
	store.Set(types.PowerPurchaseContractKey(
		powerPurchaseContract.ContractID,
		powerPurchaseContract.ContractDeviceID,
	), b)
}

// GetPowerPurchaseContract returns a powerPurchaseContract from its index
func (k Keeper) GetPowerPurchaseContract(
	ctx sdk.Context,
	contractID string,
	contractDeviceID string,

) (val types.PowerPurchaseContract, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PowerPurchaseContractKeyPrefix))

	b := store.Get(types.PowerPurchaseContractKey(
		contractID,
		contractDeviceID,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePowerPurchaseContract removes a powerPurchaseContract from the store
func (k Keeper) RemovePowerPurchaseContract(
	ctx sdk.Context,
	contractID string,
	contractDeviceID string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PowerPurchaseContractKeyPrefix))
	store.Delete(types.PowerPurchaseContractKey(
		contractID,
		contractDeviceID,
	))
}

// GetAllPowerPurchaseContract returns all powerPurchaseContract
func (k Keeper) GetAllPowerPurchaseContract(ctx sdk.Context) (list []types.PowerPurchaseContract) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PowerPurchaseContractKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.PowerPurchaseContract
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

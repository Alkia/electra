package keeper

import (
	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetPpaMap set a specific ppaMap in the store from its index
func (k Keeper) SetPpaMap(ctx sdk.Context, ppaMap types.PpaMap) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PpaMapKeyPrefix))
	b := k.cdc.MustMarshal(&ppaMap)
	store.Set(types.PpaMapKey(
		ppaMap.ConsumerDeviceID,
		ppaMap.AgreementID,
		ppaMap.AgreementActive,
		ppaMap.ContractID,
	), b)
}

// GetPpaMap returns a ppaMap from its index
func (k Keeper) GetPpaMap(
	ctx sdk.Context,
	consumerDeviceID string,
	agreementID string,
	agreementActive bool,
	contractID string,

) (val types.PpaMap, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PpaMapKeyPrefix))

	b := store.Get(types.PpaMapKey(
		consumerDeviceID,
		agreementID,
		agreementActive,
		contractID,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePpaMap removes a ppaMap from the store
func (k Keeper) RemovePpaMap(
	ctx sdk.Context,
	consumerDeviceID string,
	agreementID string,
	agreementActive bool,
	contractID string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PpaMapKeyPrefix))
	store.Delete(types.PpaMapKey(
		consumerDeviceID,
		agreementID,
		agreementActive,
		contractID,
	))
}

// GetAllPpaMap returns all ppaMap
func (k Keeper) GetAllPpaMap(ctx sdk.Context) (list []types.PpaMap) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PpaMapKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.PpaMap
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

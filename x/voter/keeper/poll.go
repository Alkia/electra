package keeper

import (
	"encoding/binary"

	"electra/x/voter/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetPollCount get the total number of poll
func (k Keeper) GetPollCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.PollCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetPollCount set the total number of poll
func (k Keeper) SetPollCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.PollCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendPoll appends a poll in the store with a new id and update the count
func (k Keeper) AppendPoll(
	ctx sdk.Context,
	poll types.Poll,
) uint64 {
	// Create the poll
	count := k.GetPollCount(ctx)

	// Set the ID of the appended value
	poll.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PollKey))
	appendedValue := k.cdc.MustMarshal(&poll)
	store.Set(GetPollIDBytes(poll.Id), appendedValue)

	// Update poll count
	k.SetPollCount(ctx, count+1)

	return count
}

// SetPoll set a specific poll in the store
func (k Keeper) SetPoll(ctx sdk.Context, poll types.Poll) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PollKey))
	b := k.cdc.MustMarshal(&poll)
	store.Set(GetPollIDBytes(poll.Id), b)
}

// GetPoll returns a poll from its id
func (k Keeper) GetPoll(ctx sdk.Context, id uint64) (val types.Poll, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PollKey))
	b := store.Get(GetPollIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePoll removes a poll from the store
func (k Keeper) RemovePoll(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PollKey))
	store.Delete(GetPollIDBytes(id))
}

// GetAllPoll returns all poll
func (k Keeper) GetAllPoll(ctx sdk.Context) (list []types.Poll) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PollKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Poll
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetPollIDBytes returns the byte representation of the ID
func GetPollIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetPollIDFromBytes returns ID in uint64 format from a byte array
func GetPollIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

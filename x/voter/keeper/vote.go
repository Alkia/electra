package keeper

import (
	"encoding/binary"

	"electra/x/voter/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetVoteCount get the total number of vote
func (k Keeper) GetVoteCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.VoteCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetVoteCount set the total number of vote
func (k Keeper) SetVoteCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.VoteCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendVote appends a vote in the store with a new id and update the count
func (k Keeper) AppendVote(
	ctx sdk.Context,
	vote types.Vote,
) uint64 {
	// Create the vote
	count := k.GetVoteCount(ctx)

	// Set the ID of the appended value
	vote.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VoteKey))
	appendedValue := k.cdc.MustMarshal(&vote)
	store.Set(GetVoteIDBytes(vote.Id), appendedValue)

	// Update vote count
	k.SetVoteCount(ctx, count+1)

	return count
}

// SetVote set a specific vote in the store
func (k Keeper) SetVote(ctx sdk.Context, vote types.Vote) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VoteKey))
	b := k.cdc.MustMarshal(&vote)
	store.Set(GetVoteIDBytes(vote.Id), b)
}

// GetVote returns a vote from its id
func (k Keeper) GetVote(ctx sdk.Context, id uint64) (val types.Vote, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VoteKey))
	b := store.Get(GetVoteIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveVote removes a vote from the store
func (k Keeper) RemoveVote(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VoteKey))
	store.Delete(GetVoteIDBytes(id))
}

// GetAllVote returns all vote
func (k Keeper) GetAllVote(ctx sdk.Context) (list []types.Vote) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VoteKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Vote
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetVoteIDBytes returns the byte representation of the ID
func GetVoteIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetVoteIDFromBytes returns ID in uint64 format from a byte array
func GetVoteIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

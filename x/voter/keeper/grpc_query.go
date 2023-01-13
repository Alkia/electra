package keeper

import (
	"electra/x/voter/types"
)

var _ types.QueryServer = Keeper{}

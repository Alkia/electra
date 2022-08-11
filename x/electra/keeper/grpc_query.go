package keeper

import (
	"electra/x/electra/types"
)

var _ types.QueryServer = Keeper{}

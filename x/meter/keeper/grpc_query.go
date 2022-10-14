package keeper

import (
	"electra/x/meter/types"
)

var _ types.QueryServer = Keeper{}

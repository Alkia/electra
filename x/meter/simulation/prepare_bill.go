package simulation

import (
	"math/rand"

	"electra/x/meter/keeper"
	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgPrepareBill(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgPrepareBill{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the PrepareBill simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "PrepareBill simulation not implemented"), nil, nil
	}
}

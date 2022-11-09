package simulation

import (
	"math/rand"
	"strconv"

	"electra/x/meter/keeper"
	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func SimulateMsgCreatePowerPurchaseContract(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)

		i := r.Int()
		msg := &types.MsgCreatePowerPurchaseContract{
			Creator:          simAccount.Address.String(),
			ContractID:       strconv.Itoa(i),
			ContractDeviceID: strconv.Itoa(i),
		}

		_, found := k.GetPowerPurchaseContract(ctx, msg.ContractID, msg.ContractDeviceID)
		if found {
			return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "PowerPurchaseContract already exist"), nil, nil
		}

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           simappparams.MakeTestEncodingConfig().TxConfig,
			Cdc:             nil,
			Msg:             msg,
			MsgType:         msg.Type(),
			Context:         ctx,
			SimAccount:      simAccount,
			ModuleName:      types.ModuleName,
			CoinsSpentInMsg: sdk.NewCoins(),
			AccountKeeper:   ak,
			Bankkeeper:      bk,
		}
		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}

func SimulateMsgUpdatePowerPurchaseContract(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		var (
			simAccount               = simtypes.Account{}
			powerPurchaseContract    = types.PowerPurchaseContract{}
			msg                      = &types.MsgUpdatePowerPurchaseContract{}
			allPowerPurchaseContract = k.GetAllPowerPurchaseContract(ctx)
			found                    = false
		)
		for _, obj := range allPowerPurchaseContract {
			simAccount, found = FindAccount(accs, obj.Creator)
			if found {
				powerPurchaseContract = obj
				break
			}
		}
		if !found {
			return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "powerPurchaseContract creator not found"), nil, nil
		}
		msg.Creator = simAccount.Address.String()

		msg.ContractID = powerPurchaseContract.ContractID
		msg.ContractDeviceID = powerPurchaseContract.ContractDeviceID

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           simappparams.MakeTestEncodingConfig().TxConfig,
			Cdc:             nil,
			Msg:             msg,
			MsgType:         msg.Type(),
			Context:         ctx,
			SimAccount:      simAccount,
			ModuleName:      types.ModuleName,
			CoinsSpentInMsg: sdk.NewCoins(),
			AccountKeeper:   ak,
			Bankkeeper:      bk,
		}
		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}

func SimulateMsgDeletePowerPurchaseContract(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		var (
			simAccount               = simtypes.Account{}
			powerPurchaseContract    = types.PowerPurchaseContract{}
			msg                      = &types.MsgUpdatePowerPurchaseContract{}
			allPowerPurchaseContract = k.GetAllPowerPurchaseContract(ctx)
			found                    = false
		)
		for _, obj := range allPowerPurchaseContract {
			simAccount, found = FindAccount(accs, obj.Creator)
			if found {
				powerPurchaseContract = obj
				break
			}
		}
		if !found {
			return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "powerPurchaseContract creator not found"), nil, nil
		}
		msg.Creator = simAccount.Address.String()

		msg.ContractID = powerPurchaseContract.ContractID
		msg.ContractDeviceID = powerPurchaseContract.ContractDeviceID

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           simappparams.MakeTestEncodingConfig().TxConfig,
			Cdc:             nil,
			Msg:             msg,
			MsgType:         msg.Type(),
			Context:         ctx,
			SimAccount:      simAccount,
			ModuleName:      types.ModuleName,
			CoinsSpentInMsg: sdk.NewCoins(),
			AccountKeeper:   ak,
			Bankkeeper:      bk,
		}
		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}

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

func SimulateMsgCreateCustomerbillingline(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)

		i := r.Int()
		msg := &types.MsgCreateCustomerbillingline{
			Creator:          simAccount.Address.String(),
			CustomerDeviceID: strconv.Itoa(i),
			CycleID:          uint64(i),
			Lineid:           uint64(i),
			Paid:             false,
		}

		_, found := k.GetCustomerbillingline(ctx, msg.CustomerDeviceID, msg.CycleID, msg.Lineid, msg.Paid)
		if found {
			return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "Customerbillingline already exist"), nil, nil
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

func SimulateMsgUpdateCustomerbillingline(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		var (
			simAccount             = simtypes.Account{}
			customerbillingline    = types.Customerbillingline{}
			msg                    = &types.MsgUpdateCustomerbillingline{}
			allCustomerbillingline = k.GetAllCustomerbillingline(ctx)
			found                  = false
		)
		for _, obj := range allCustomerbillingline {
			simAccount, found = FindAccount(accs, obj.Creator)
			if found {
				customerbillingline = obj
				break
			}
		}
		if !found {
			return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "customerbillingline creator not found"), nil, nil
		}
		msg.Creator = simAccount.Address.String()

		msg.CustomerDeviceID = customerbillingline.CustomerDeviceID
		msg.CycleID = customerbillingline.CycleID
		msg.Lineid = customerbillingline.Lineid
		msg.Paid = customerbillingline.Paid

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

func SimulateMsgDeleteCustomerbillingline(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		var (
			simAccount             = simtypes.Account{}
			customerbillingline    = types.Customerbillingline{}
			msg                    = &types.MsgUpdateCustomerbillingline{}
			allCustomerbillingline = k.GetAllCustomerbillingline(ctx)
			found                  = false
		)
		for _, obj := range allCustomerbillingline {
			simAccount, found = FindAccount(accs, obj.Creator)
			if found {
				customerbillingline = obj
				break
			}
		}
		if !found {
			return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "customerbillingline creator not found"), nil, nil
		}
		msg.Creator = simAccount.Address.String()

		msg.CustomerDeviceID = customerbillingline.CustomerDeviceID
		msg.CycleID = customerbillingline.CycleID
		msg.Lineid = customerbillingline.Lineid
		msg.Paid = customerbillingline.Paid

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

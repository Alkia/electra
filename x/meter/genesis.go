package meter

import (
	"electra/x/meter/keeper"
	"electra/x/meter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the meterreadings
	for _, elem := range genState.MeterreadingsList {
		k.SetMeterreadings(ctx, elem)
	}
	// Set all the meterdirectory
	for _, elem := range genState.MeterdirectoryList {
		k.SetMeterdirectory(ctx, elem)
	}
	// Set all the powerPurchaseContract
	for _, elem := range genState.PowerPurchaseContractList {
		k.SetPowerPurchaseContract(ctx, elem)
	}
	// Set all the ppaMap
	for _, elem := range genState.PpaMapList {
		k.SetPpaMap(ctx, elem)
	}
	// Set all the billingcycles
	for _, elem := range genState.BillingcyclesList {
		k.SetBillingcycles(ctx, elem)
	}
	// Set all the customerbillingline
	for _, elem := range genState.CustomerbillinglineList {
		k.SetCustomerbillingline(ctx, elem)
	}
	// Set all the customerbills
	for _, elem := range genState.CustomerbillsList {
		k.SetCustomerbills(ctx, elem)
	}
	// Set all the producerbillingline
	for _, elem := range genState.ProducerbillinglineList {
		k.SetProducerbillingline(ctx, elem)
	}
	// Set all the producerbills
	for _, elem := range genState.ProducerbillsList {
		k.SetProducerbills(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.MeterreadingsList = k.GetAllMeterreadings(ctx)
	genesis.MeterdirectoryList = k.GetAllMeterdirectory(ctx)
	genesis.PowerPurchaseContractList = k.GetAllPowerPurchaseContract(ctx)
	genesis.PpaMapList = k.GetAllPpaMap(ctx)
	genesis.BillingcyclesList = k.GetAllBillingcycles(ctx)
	genesis.CustomerbillinglineList = k.GetAllCustomerbillingline(ctx)
	genesis.CustomerbillsList = k.GetAllCustomerbills(ctx)
	genesis.ProducerbillinglineList = k.GetAllProducerbillingline(ctx)
	genesis.ProducerbillsList = k.GetAllProducerbills(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}

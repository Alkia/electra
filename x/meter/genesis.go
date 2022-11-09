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
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}

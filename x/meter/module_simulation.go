package meter

import (
	"math/rand"

	"electra/testutil/sample"
	metersimulation "electra/x/meter/simulation"
	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = metersimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgRecord = "op_weight_msg_record"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRecord int = 100

	opWeightMsgRecord3 = "op_weight_msg_record_3"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRecord3 int = 100

	opWeightMsgCreatePowerPurchaseContract = "op_weight_msg_power_purchase_contract"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreatePowerPurchaseContract int = 100

	opWeightMsgUpdatePowerPurchaseContract = "op_weight_msg_power_purchase_contract"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdatePowerPurchaseContract int = 100

	opWeightMsgDeletePowerPurchaseContract = "op_weight_msg_power_purchase_contract"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeletePowerPurchaseContract int = 100

	opWeightMsgCreatePpaMap = "op_weight_msg_ppa_map"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreatePpaMap int = 100

	opWeightMsgUpdatePpaMap = "op_weight_msg_ppa_map"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdatePpaMap int = 100

	opWeightMsgDeletePpaMap = "op_weight_msg_ppa_map"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeletePpaMap int = 100

	opWeightMsgCreateBillingcycles = "op_weight_msg_billingcycles"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateBillingcycles int = 100

	opWeightMsgUpdateBillingcycles = "op_weight_msg_billingcycles"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateBillingcycles int = 100

	opWeightMsgDeleteBillingcycles = "op_weight_msg_billingcycles"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteBillingcycles int = 100

	opWeightMsgPrepareBill = "op_weight_msg_prepare_bill"
	// TODO: Determine the simulation weight value
	defaultWeightMsgPrepareBill int = 100

	opWeightMsgCreateCustomerbillingline = "op_weight_msg_customerbillingline"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateCustomerbillingline int = 100

	opWeightMsgUpdateCustomerbillingline = "op_weight_msg_customerbillingline"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateCustomerbillingline int = 100

	opWeightMsgDeleteCustomerbillingline = "op_weight_msg_customerbillingline"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteCustomerbillingline int = 100

	opWeightMsgCreateCustomerbills = "op_weight_msg_customerbills"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateCustomerbills int = 100

	opWeightMsgUpdateCustomerbills = "op_weight_msg_customerbills"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateCustomerbills int = 100

	opWeightMsgDeleteCustomerbills = "op_weight_msg_customerbills"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteCustomerbills int = 100

	opWeightMsgCreateProducerbillingline = "op_weight_msg_producerbillingline"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateProducerbillingline int = 100

	opWeightMsgUpdateProducerbillingline = "op_weight_msg_producerbillingline"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateProducerbillingline int = 100

	opWeightMsgDeleteProducerbillingline = "op_weight_msg_producerbillingline"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteProducerbillingline int = 100

	opWeightMsgCreateProducerbills = "op_weight_msg_producerbills"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateProducerbills int = 100

	opWeightMsgUpdateProducerbills = "op_weight_msg_producerbills"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateProducerbills int = 100

	opWeightMsgDeleteProducerbills = "op_weight_msg_producerbills"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteProducerbills int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	meterGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		PowerPurchaseContractList: []types.PowerPurchaseContract{
			{
				Creator:          sample.AccAddress(),
				ContractID:       "0",
				ContractDeviceID: "0",
			},
			{
				Creator:          sample.AccAddress(),
				ContractID:       "1",
				ContractDeviceID: "1",
			},
		},
		PpaMapList: []types.PpaMap{
			{
				Creator:          sample.AccAddress(),
				ConsumerDeviceID: "0",
				AgreementID:      "0",
				AgreementActive:  true,
				ContractID:       "0",
			},
			{
				Creator:          sample.AccAddress(),
				ConsumerDeviceID: "1",
				AgreementID:      "1",
				AgreementActive:  false,
				ContractID:       "1",
			},
		},
		BillingcyclesList: []types.Billingcycles{
			{
				Creator: sample.AccAddress(),
				CycleID: 0,
			},
			{
				Creator: sample.AccAddress(),
				CycleID: 1,
			},
		},
		CustomerbillinglineList: []types.Customerbillingline{
			{
				Creator:          sample.AccAddress(),
				CustomerDeviceID: "0",
				CycleID:          0,
				Lineid:           0,
				Paid:             true,
			},
			{
				Creator:          sample.AccAddress(),
				CustomerDeviceID: "1",
				CycleID:          1,
				Lineid:           1,
				Paid:             false,
			},
		},
		CustomerbillsList: []types.Customerbills{
			{
				Creator:          sample.AccAddress(),
				BillCycleID:      0,
				CustomerDeviceID: "0",
			},
			{
				Creator:          sample.AccAddress(),
				BillCycleID:      1,
				CustomerDeviceID: "1",
			},
		},
		ProducerbillinglineList: []types.Producerbillingline{
			{
				Creator:          sample.AccAddress(),
				ProducerDeviceID: "0",
				CycleID:          0,
				Lineid:           0,
				Paid:             true,
			},
			{
				Creator:          sample.AccAddress(),
				ProducerDeviceID: "1",
				CycleID:          1,
				Lineid:           1,
				Paid:             false,
			},
		},
		ProducerbillsList: []types.Producerbills{
			{
				Creator:          sample.AccAddress(),
				BillCycleID:      0,
				ProducerDeviceID: "0",
			},
			{
				Creator:          sample.AccAddress(),
				BillCycleID:      1,
				ProducerDeviceID: "1",
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&meterGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {
	meterParams := types.DefaultParams()
	return []simtypes.ParamChange{
		simulation.NewSimParamChange(types.ModuleName, string(types.KeyMaxBillingIteration), func(r *rand.Rand) string {
			return string(types.Amino.MustMarshalJSON(meterParams.MaxBillingIteration))
		}),
		simulation.NewSimParamChange(types.ModuleName, string(types.KeyModuleParamBestForCustomer), func(r *rand.Rand) string {
			return string(types.Amino.MustMarshalJSON(meterParams.ModuleParamBestForCustomer))
		}),
		simulation.NewSimParamChange(types.ModuleName, string(types.KeyPayAutomatically), func(r *rand.Rand) string {
			return string(types.Amino.MustMarshalJSON(meterParams.PayAutomatically))
		}),
		simulation.NewSimParamChange(types.ModuleName, string(types.KeyBillingAdmin), func(r *rand.Rand) string {
			return string(types.Amino.MustMarshalJSON(meterParams.BillingAdmin))
		}),
	}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgRecord int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRecord, &weightMsgRecord, nil,
		func(_ *rand.Rand) {
			weightMsgRecord = defaultWeightMsgRecord
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRecord,
		metersimulation.SimulateMsgRecord(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgRecord3 int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRecord3, &weightMsgRecord3, nil,
		func(_ *rand.Rand) {
			weightMsgRecord3 = defaultWeightMsgRecord3
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRecord3,
		metersimulation.SimulateMsgRecord3(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreatePowerPurchaseContract int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreatePowerPurchaseContract, &weightMsgCreatePowerPurchaseContract, nil,
		func(_ *rand.Rand) {
			weightMsgCreatePowerPurchaseContract = defaultWeightMsgCreatePowerPurchaseContract
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreatePowerPurchaseContract,
		metersimulation.SimulateMsgCreatePowerPurchaseContract(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdatePowerPurchaseContract int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdatePowerPurchaseContract, &weightMsgUpdatePowerPurchaseContract, nil,
		func(_ *rand.Rand) {
			weightMsgUpdatePowerPurchaseContract = defaultWeightMsgUpdatePowerPurchaseContract
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdatePowerPurchaseContract,
		metersimulation.SimulateMsgUpdatePowerPurchaseContract(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeletePowerPurchaseContract int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeletePowerPurchaseContract, &weightMsgDeletePowerPurchaseContract, nil,
		func(_ *rand.Rand) {
			weightMsgDeletePowerPurchaseContract = defaultWeightMsgDeletePowerPurchaseContract
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeletePowerPurchaseContract,
		metersimulation.SimulateMsgDeletePowerPurchaseContract(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreatePpaMap int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreatePpaMap, &weightMsgCreatePpaMap, nil,
		func(_ *rand.Rand) {
			weightMsgCreatePpaMap = defaultWeightMsgCreatePpaMap
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreatePpaMap,
		metersimulation.SimulateMsgCreatePpaMap(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdatePpaMap int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdatePpaMap, &weightMsgUpdatePpaMap, nil,
		func(_ *rand.Rand) {
			weightMsgUpdatePpaMap = defaultWeightMsgUpdatePpaMap
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdatePpaMap,
		metersimulation.SimulateMsgUpdatePpaMap(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeletePpaMap int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeletePpaMap, &weightMsgDeletePpaMap, nil,
		func(_ *rand.Rand) {
			weightMsgDeletePpaMap = defaultWeightMsgDeletePpaMap
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeletePpaMap,
		metersimulation.SimulateMsgDeletePpaMap(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateBillingcycles int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateBillingcycles, &weightMsgCreateBillingcycles, nil,
		func(_ *rand.Rand) {
			weightMsgCreateBillingcycles = defaultWeightMsgCreateBillingcycles
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateBillingcycles,
		metersimulation.SimulateMsgCreateBillingcycles(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateBillingcycles int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateBillingcycles, &weightMsgUpdateBillingcycles, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateBillingcycles = defaultWeightMsgUpdateBillingcycles
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateBillingcycles,
		metersimulation.SimulateMsgUpdateBillingcycles(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteBillingcycles int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteBillingcycles, &weightMsgDeleteBillingcycles, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteBillingcycles = defaultWeightMsgDeleteBillingcycles
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteBillingcycles,
		metersimulation.SimulateMsgDeleteBillingcycles(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgPrepareBill int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgPrepareBill, &weightMsgPrepareBill, nil,
		func(_ *rand.Rand) {
			weightMsgPrepareBill = defaultWeightMsgPrepareBill
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgPrepareBill,
		metersimulation.SimulateMsgPrepareBill(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateCustomerbillingline int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateCustomerbillingline, &weightMsgCreateCustomerbillingline, nil,
		func(_ *rand.Rand) {
			weightMsgCreateCustomerbillingline = defaultWeightMsgCreateCustomerbillingline
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateCustomerbillingline,
		metersimulation.SimulateMsgCreateCustomerbillingline(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateCustomerbillingline int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateCustomerbillingline, &weightMsgUpdateCustomerbillingline, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateCustomerbillingline = defaultWeightMsgUpdateCustomerbillingline
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateCustomerbillingline,
		metersimulation.SimulateMsgUpdateCustomerbillingline(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteCustomerbillingline int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteCustomerbillingline, &weightMsgDeleteCustomerbillingline, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteCustomerbillingline = defaultWeightMsgDeleteCustomerbillingline
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteCustomerbillingline,
		metersimulation.SimulateMsgDeleteCustomerbillingline(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateCustomerbills int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateCustomerbills, &weightMsgCreateCustomerbills, nil,
		func(_ *rand.Rand) {
			weightMsgCreateCustomerbills = defaultWeightMsgCreateCustomerbills
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateCustomerbills,
		metersimulation.SimulateMsgCreateCustomerbills(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateCustomerbills int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateCustomerbills, &weightMsgUpdateCustomerbills, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateCustomerbills = defaultWeightMsgUpdateCustomerbills
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateCustomerbills,
		metersimulation.SimulateMsgUpdateCustomerbills(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteCustomerbills int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteCustomerbills, &weightMsgDeleteCustomerbills, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteCustomerbills = defaultWeightMsgDeleteCustomerbills
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteCustomerbills,
		metersimulation.SimulateMsgDeleteCustomerbills(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateProducerbillingline int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateProducerbillingline, &weightMsgCreateProducerbillingline, nil,
		func(_ *rand.Rand) {
			weightMsgCreateProducerbillingline = defaultWeightMsgCreateProducerbillingline
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateProducerbillingline,
		metersimulation.SimulateMsgCreateProducerbillingline(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateProducerbillingline int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateProducerbillingline, &weightMsgUpdateProducerbillingline, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateProducerbillingline = defaultWeightMsgUpdateProducerbillingline
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateProducerbillingline,
		metersimulation.SimulateMsgUpdateProducerbillingline(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteProducerbillingline int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteProducerbillingline, &weightMsgDeleteProducerbillingline, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteProducerbillingline = defaultWeightMsgDeleteProducerbillingline
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteProducerbillingline,
		metersimulation.SimulateMsgDeleteProducerbillingline(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateProducerbills int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateProducerbills, &weightMsgCreateProducerbills, nil,
		func(_ *rand.Rand) {
			weightMsgCreateProducerbills = defaultWeightMsgCreateProducerbills
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateProducerbills,
		metersimulation.SimulateMsgCreateProducerbills(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateProducerbills int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateProducerbills, &weightMsgUpdateProducerbills, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateProducerbills = defaultWeightMsgUpdateProducerbills
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateProducerbills,
		metersimulation.SimulateMsgUpdateProducerbills(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteProducerbills int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteProducerbills, &weightMsgDeleteProducerbills, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteProducerbills = defaultWeightMsgDeleteProducerbills
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteProducerbills,
		metersimulation.SimulateMsgDeleteProducerbills(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

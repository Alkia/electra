package cli

import (
	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdCreatePowerPurchaseContract() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-power-purchase-contract [contract-id] [contract-device-id] [contract-name] [contract-active] [contract-phase] [contract-for-all] [contract-for-all-price] [contract-for-all-curency] [contract-for-all-active-period] [contract-preferred] [contract-preferred-price] [contract-preferred-active-period] [contract-preferred-curency] [contract-start-date] [contract-end-date] [phase-1-remaining-wh] [phase-2-remaining-wh] [phase-3-remaining-wh]",
		Short: "Create a new powerPurchaseContract",
		Args:  cobra.ExactArgs(18),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexContractID := args[0]
			indexContractDeviceID := args[1]

			// Get value arguments
			argContractName := args[2]
			argContractActive, err := cast.ToBoolE(args[3])
			if err != nil {
				return err
			}
			argContractPhase, err := cast.ToUint64E(args[4])
			if err != nil {
				return err
			}
			argContractForAll, err := cast.ToBoolE(args[5])
			if err != nil {
				return err
			}
			argContractForAllPrice, err := cast.ToUint64E(args[6])
			if err != nil {
				return err
			}
			argContractForAllCurency := args[7]
			argContractForAllActivePeriod := args[8]
			argContractPreferred, err := cast.ToBoolE(args[9])
			if err != nil {
				return err
			}
			argContractPreferredPrice, err := cast.ToUint64E(args[10])
			if err != nil {
				return err
			}
			argContractPreferredActivePeriod := args[11]
			argContractPreferredCurency := args[12]
			argContractStartDate, err := cast.ToUint64E(args[13])
			if err != nil {
				return err
			}
			argContractEndDate, err := cast.ToUint64E(args[14])
			if err != nil {
				return err
			}
			argPhase1RemainingWh, err := cast.ToUint64E(args[15])
			if err != nil {
				return err
			}
			argPhase2RemainingWh, err := cast.ToUint64E(args[16])
			if err != nil {
				return err
			}
			argPhase3RemainingWh, err := cast.ToUint64E(args[17])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreatePowerPurchaseContract(
				clientCtx.GetFromAddress().String(),
				indexContractID,
				indexContractDeviceID,
				argContractName,
				argContractActive,
				argContractPhase,
				argContractForAll,
				argContractForAllPrice,
				argContractForAllCurency,
				argContractForAllActivePeriod,
				argContractPreferred,
				argContractPreferredPrice,
				argContractPreferredActivePeriod,
				argContractPreferredCurency,
				argContractStartDate,
				argContractEndDate,
				argPhase1RemainingWh,
				argPhase2RemainingWh,
				argPhase3RemainingWh,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdatePowerPurchaseContract() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-power-purchase-contract [contract-id] [contract-device-id] [contract-name] [contract-active] [contract-phase] [contract-for-all] [contract-for-all-price] [contract-for-all-curency] [contract-for-all-active-period] [contract-preferred] [contract-preferred-price] [contract-preferred-active-period] [contract-preferred-curency] [contract-start-date] [contract-end-date] [phase-1-remaining-wh] [phase-2-remaining-wh] [phase-3-remaining-wh]",
		Short: "Update a powerPurchaseContract",
		Args:  cobra.ExactArgs(18),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexContractID := args[0]
			indexContractDeviceID := args[1]

			// Get value arguments
			argContractName := args[2]
			argContractActive, err := cast.ToBoolE(args[3])
			if err != nil {
				return err
			}
			argContractPhase, err := cast.ToUint64E(args[4])
			if err != nil {
				return err
			}
			argContractForAll, err := cast.ToBoolE(args[5])
			if err != nil {
				return err
			}
			argContractForAllPrice, err := cast.ToUint64E(args[6])
			if err != nil {
				return err
			}
			argContractForAllCurency := args[7]
			argContractForAllActivePeriod := args[8]
			argContractPreferred, err := cast.ToBoolE(args[9])
			if err != nil {
				return err
			}
			argContractPreferredPrice, err := cast.ToUint64E(args[10])
			if err != nil {
				return err
			}
			argContractPreferredActivePeriod := args[11]
			argContractPreferredCurency := args[12]
			argContractStartDate, err := cast.ToUint64E(args[13])
			if err != nil {
				return err
			}
			argContractEndDate, err := cast.ToUint64E(args[14])
			if err != nil {
				return err
			}
			argPhase1RemainingWh, err := cast.ToUint64E(args[15])
			if err != nil {
				return err
			}
			argPhase2RemainingWh, err := cast.ToUint64E(args[16])
			if err != nil {
				return err
			}
			argPhase3RemainingWh, err := cast.ToUint64E(args[17])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdatePowerPurchaseContract(
				clientCtx.GetFromAddress().String(),
				indexContractID,
				indexContractDeviceID,
				argContractName,
				argContractActive,
				argContractPhase,
				argContractForAll,
				argContractForAllPrice,
				argContractForAllCurency,
				argContractForAllActivePeriod,
				argContractPreferred,
				argContractPreferredPrice,
				argContractPreferredActivePeriod,
				argContractPreferredCurency,
				argContractStartDate,
				argContractEndDate,
				argPhase1RemainingWh,
				argPhase2RemainingWh,
				argPhase3RemainingWh,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeletePowerPurchaseContract() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-power-purchase-contract [contract-id] [contract-device-id]",
		Short: "Delete a powerPurchaseContract",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexContractID := args[0]
			indexContractDeviceID := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeletePowerPurchaseContract(
				clientCtx.GetFromAddress().String(),
				indexContractID,
				indexContractDeviceID,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

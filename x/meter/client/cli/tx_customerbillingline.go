package cli

import (
	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdCreateCustomerbillingline() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-customerbillingline [customer-device-id] [cycle-id] [lineid] [paid] [producer-device-id] [bill-contract-id] [line-wh] [line-wh-price] [curency] [line-wh-total-price] [phase]",
		Short: "Create a new customerbillingline",
		Args:  cobra.ExactArgs(11),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCustomerDeviceID := args[0]
			indexCycleID, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			indexLineid, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			indexPaid, err := cast.ToBoolE(args[3])
			if err != nil {
				return err
			}

			// Get value arguments
			argProducerDeviceID := args[4]
			argBillContractID := args[5]
			argLineWh, err := cast.ToUint64E(args[6])
			if err != nil {
				return err
			}
			argLineWhPrice, err := cast.ToUint64E(args[7])
			if err != nil {
				return err
			}
			argCurency := args[8]
			argLineWhTotalPrice, err := cast.ToUint64E(args[9])
			if err != nil {
				return err
			}
			argPhase, err := cast.ToUint64E(args[10])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCustomerbillingline(
				clientCtx.GetFromAddress().String(),
				indexCustomerDeviceID,
				indexCycleID,
				indexLineid,
				indexPaid,
				argProducerDeviceID,
				argBillContractID,
				argLineWh,
				argLineWhPrice,
				argCurency,
				argLineWhTotalPrice,
				argPhase,
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

func CmdUpdateCustomerbillingline() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-customerbillingline [customer-device-id] [cycle-id] [lineid] [paid] [producer-device-id] [bill-contract-id] [line-wh] [line-wh-price] [curency] [line-wh-total-price] [phase]",
		Short: "Update a customerbillingline",
		Args:  cobra.ExactArgs(11),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCustomerDeviceID := args[0]
			indexCycleID, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			indexLineid, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			indexPaid, err := cast.ToBoolE(args[3])
			if err != nil {
				return err
			}

			// Get value arguments
			argProducerDeviceID := args[4]
			argBillContractID := args[5]
			argLineWh, err := cast.ToUint64E(args[6])
			if err != nil {
				return err
			}
			argLineWhPrice, err := cast.ToUint64E(args[7])
			if err != nil {
				return err
			}
			argCurency := args[8]
			argLineWhTotalPrice, err := cast.ToUint64E(args[9])
			if err != nil {
				return err
			}
			argPhase, err := cast.ToUint64E(args[10])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateCustomerbillingline(
				clientCtx.GetFromAddress().String(),
				indexCustomerDeviceID,
				indexCycleID,
				indexLineid,
				indexPaid,
				argProducerDeviceID,
				argBillContractID,
				argLineWh,
				argLineWhPrice,
				argCurency,
				argLineWhTotalPrice,
				argPhase,
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

func CmdDeleteCustomerbillingline() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-customerbillingline [customer-device-id] [cycle-id] [lineid] [paid]",
		Short: "Delete a customerbillingline",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexCustomerDeviceID := args[0]
			indexCycleID, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			indexLineid, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			indexPaid, err := cast.ToBoolE(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteCustomerbillingline(
				clientCtx.GetFromAddress().String(),
				indexCustomerDeviceID,
				indexCycleID,
				indexLineid,
				indexPaid,
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

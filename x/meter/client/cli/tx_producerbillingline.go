package cli

import (
	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdCreateProducerbillingline() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-producerbillingline [producer-device-id] [cycle-id] [lineid] [paid] [customer-device-id] [bill-contract-id] [line-wh] [line-wh-price] [curency] [line-wh-total-price] [phase]",
		Short: "Create a new producerbillingline",
		Args:  cobra.ExactArgs(11),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexProducerDeviceID := args[0]
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
			argCustomerDeviceID := args[4]
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

			msg := types.NewMsgCreateProducerbillingline(
				clientCtx.GetFromAddress().String(),
				indexProducerDeviceID,
				indexCycleID,
				indexLineid,
				indexPaid,
				argCustomerDeviceID,
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

func CmdUpdateProducerbillingline() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-producerbillingline [producer-device-id] [cycle-id] [lineid] [paid] [customer-device-id] [bill-contract-id] [line-wh] [line-wh-price] [curency] [line-wh-total-price] [phase]",
		Short: "Update a producerbillingline",
		Args:  cobra.ExactArgs(11),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexProducerDeviceID := args[0]
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
			argCustomerDeviceID := args[4]
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

			msg := types.NewMsgUpdateProducerbillingline(
				clientCtx.GetFromAddress().String(),
				indexProducerDeviceID,
				indexCycleID,
				indexLineid,
				indexPaid,
				argCustomerDeviceID,
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

func CmdDeleteProducerbillingline() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-producerbillingline [producer-device-id] [cycle-id] [lineid] [paid]",
		Short: "Delete a producerbillingline",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexProducerDeviceID := args[0]
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

			msg := types.NewMsgDeleteProducerbillingline(
				clientCtx.GetFromAddress().String(),
				indexProducerDeviceID,
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

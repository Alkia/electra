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
		Use:   "create-customerbillingline [customerdevice-id] [cycle-id] [lineid] [producer-device-id] [bill-contract-id] [line-wh] [line-wh-price] [curency] [decremented] [phase]",
		Short: "Create a new customerbillingline",
		Args:  cobra.ExactArgs(10),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCustomerdeviceID := args[0]
			indexCycleID, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			indexLineid, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}

			// Get value arguments
			argProducerDeviceID := args[3]
			argBillContractID := args[4]
			argLineWh, err := cast.ToUint64E(args[5])
			if err != nil {
				return err
			}
			argLineWhPrice, err := cast.ToUint64E(args[6])
			if err != nil {
				return err
			}
			argCurency := args[7]
			argDecremented, err := cast.ToUint64E(args[8])
			if err != nil {
				return err
			}
			argPhase, err := cast.ToUint64E(args[9])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCustomerbillingline(
				clientCtx.GetFromAddress().String(),
				indexCustomerdeviceID,
				indexCycleID,
				indexLineid,
				argProducerDeviceID,
				argBillContractID,
				argLineWh,
				argLineWhPrice,
				argCurency,
				argDecremented,
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
		Use:   "update-customerbillingline [customerdevice-id] [cycle-id] [lineid] [producer-device-id] [bill-contract-id] [line-wh] [line-wh-price] [curency] [decremented] [phase]",
		Short: "Update a customerbillingline",
		Args:  cobra.ExactArgs(10),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCustomerdeviceID := args[0]
			indexCycleID, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			indexLineid, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}

			// Get value arguments
			argProducerDeviceID := args[3]
			argBillContractID := args[4]
			argLineWh, err := cast.ToUint64E(args[5])
			if err != nil {
				return err
			}
			argLineWhPrice, err := cast.ToUint64E(args[6])
			if err != nil {
				return err
			}
			argCurency := args[7]
			argDecremented, err := cast.ToUint64E(args[8])
			if err != nil {
				return err
			}
			argPhase, err := cast.ToUint64E(args[9])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateCustomerbillingline(
				clientCtx.GetFromAddress().String(),
				indexCustomerdeviceID,
				indexCycleID,
				indexLineid,
				argProducerDeviceID,
				argBillContractID,
				argLineWh,
				argLineWhPrice,
				argCurency,
				argDecremented,
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
		Use:   "delete-customerbillingline [customerdevice-id] [cycle-id] [lineid]",
		Short: "Delete a customerbillingline",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexCustomerdeviceID := args[0]
			indexCycleID, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			indexLineid, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteCustomerbillingline(
				clientCtx.GetFromAddress().String(),
				indexCustomerdeviceID,
				indexCycleID,
				indexLineid,
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

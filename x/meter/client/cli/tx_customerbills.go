package cli

import (
	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdCreateCustomerbills() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-customerbills [bill-cycle-id] [customer-device-id] [bill-date] [bill-total-wh] [bill-total-price] [bill-currency] [bill-valid] [paid]",
		Short: "Create a new customerbills",
		Args:  cobra.ExactArgs(8),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexBillCycleID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			indexCustomerDeviceID := args[1]

			// Get value arguments
			argBillDate, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argBillTotalWh, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}
			argBillTotalPrice, err := cast.ToUint64E(args[4])
			if err != nil {
				return err
			}
			argBillCurrency := args[5]
			argBillValid, err := cast.ToBoolE(args[6])
			if err != nil {
				return err
			}
			argPaid, err := cast.ToBoolE(args[7])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCustomerbills(
				clientCtx.GetFromAddress().String(),
				indexBillCycleID,
				indexCustomerDeviceID,
				argBillDate,
				argBillTotalWh,
				argBillTotalPrice,
				argBillCurrency,
				argBillValid,
				argPaid,
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

func CmdUpdateCustomerbills() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-customerbills [bill-cycle-id] [customer-device-id] [bill-date] [bill-total-wh] [bill-total-price] [bill-currency] [bill-valid] [paid]",
		Short: "Update a customerbills",
		Args:  cobra.ExactArgs(8),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexBillCycleID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			indexCustomerDeviceID := args[1]

			// Get value arguments
			argBillDate, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argBillTotalWh, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}
			argBillTotalPrice, err := cast.ToUint64E(args[4])
			if err != nil {
				return err
			}
			argBillCurrency := args[5]
			argBillValid, err := cast.ToBoolE(args[6])
			if err != nil {
				return err
			}
			argPaid, err := cast.ToBoolE(args[7])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateCustomerbills(
				clientCtx.GetFromAddress().String(),
				indexBillCycleID,
				indexCustomerDeviceID,
				argBillDate,
				argBillTotalWh,
				argBillTotalPrice,
				argBillCurrency,
				argBillValid,
				argPaid,
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

func CmdDeleteCustomerbills() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-customerbills [bill-cycle-id] [customer-device-id]",
		Short: "Delete a customerbills",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexBillCycleID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			indexCustomerDeviceID := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteCustomerbills(
				clientCtx.GetFromAddress().String(),
				indexBillCycleID,
				indexCustomerDeviceID,
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

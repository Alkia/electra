package cli

import (
	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdCreateProducerbills() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-producerbills [bill-cycle-id] [producer-device-id] [bill-date] [bill-total-wh] [bill-total-price] [bill-currency] [bill-valid] [paid]",
		Short: "Create a new producerbills",
		Args:  cobra.ExactArgs(8),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexBillCycleID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			indexProducerDeviceID := args[1]

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

			msg := types.NewMsgCreateProducerbills(
				clientCtx.GetFromAddress().String(),
				indexBillCycleID,
				indexProducerDeviceID,
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

func CmdUpdateProducerbills() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-producerbills [bill-cycle-id] [producer-device-id] [bill-date] [bill-total-wh] [bill-total-price] [bill-currency] [bill-valid] [paid]",
		Short: "Update a producerbills",
		Args:  cobra.ExactArgs(8),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexBillCycleID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			indexProducerDeviceID := args[1]

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

			msg := types.NewMsgUpdateProducerbills(
				clientCtx.GetFromAddress().String(),
				indexBillCycleID,
				indexProducerDeviceID,
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

func CmdDeleteProducerbills() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-producerbills [bill-cycle-id] [producer-device-id]",
		Short: "Delete a producerbills",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexBillCycleID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			indexProducerDeviceID := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteProducerbills(
				clientCtx.GetFromAddress().String(),
				indexBillCycleID,
				indexProducerDeviceID,
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

package cli

import (
	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdCreateBillingcycles() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-billingcycles [cycle-id] [begin] [end] [whin] [whout] [moneyin] [moneyout] [curency] [valid] [paid]",
		Short: "Create a new billingcycles",
		Args:  cobra.ExactArgs(10),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCycleID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}

			// Get value arguments
			argBegin, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argEnd, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argWhin, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}
			argWhout, err := cast.ToUint64E(args[4])
			if err != nil {
				return err
			}
			argMoneyin, err := cast.ToUint64E(args[5])
			if err != nil {
				return err
			}
			argMoneyout, err := cast.ToUint64E(args[6])
			if err != nil {
				return err
			}
			argCurency := args[7]
			argValid, err := cast.ToBoolE(args[8])
			if err != nil {
				return err
			}
			argPaid, err := cast.ToBoolE(args[9])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateBillingcycles(
				clientCtx.GetFromAddress().String(),
				indexCycleID,
				argBegin,
				argEnd,
				argWhin,
				argWhout,
				argMoneyin,
				argMoneyout,
				argCurency,
				argValid,
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

func CmdUpdateBillingcycles() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-billingcycles [cycle-id] [begin] [end] [whin] [whout] [moneyin] [moneyout] [curency] [valid] [paid]",
		Short: "Update a billingcycles",
		Args:  cobra.ExactArgs(10),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCycleID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}

			// Get value arguments
			argBegin, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argEnd, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argWhin, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}
			argWhout, err := cast.ToUint64E(args[4])
			if err != nil {
				return err
			}
			argMoneyin, err := cast.ToUint64E(args[5])
			if err != nil {
				return err
			}
			argMoneyout, err := cast.ToUint64E(args[6])
			if err != nil {
				return err
			}
			argCurency := args[7]
			argValid, err := cast.ToBoolE(args[8])
			if err != nil {
				return err
			}
			argPaid, err := cast.ToBoolE(args[9])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateBillingcycles(
				clientCtx.GetFromAddress().String(),
				indexCycleID,
				argBegin,
				argEnd,
				argWhin,
				argWhout,
				argMoneyin,
				argMoneyout,
				argCurency,
				argValid,
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

func CmdDeleteBillingcycles() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-billingcycles [cycle-id]",
		Short: "Delete a billingcycles",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexCycleID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteBillingcycles(
				clientCtx.GetFromAddress().String(),
				indexCycleID,
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

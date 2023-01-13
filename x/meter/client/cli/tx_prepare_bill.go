package cli

import (
	"strconv"

	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdPrepareBill() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "prepare-bill [cycle-id] [record] [execute-payment]",
		Short: "Increment the current cycleID:uint",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argCycleID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argRecord, err := cast.ToBoolE(args[1])
			if err != nil {
				return err
			}
			argExecutePayment, err := cast.ToBoolE(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgPrepareBill(
				clientCtx.GetFromAddress().String(),
				argCycleID,
				argRecord,
				argExecutePayment,
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

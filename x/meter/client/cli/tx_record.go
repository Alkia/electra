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

func CmdRecord() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "record [timestamp] [phase] [whin] [whout] [mvolt] [mhertz] [mpf] [maxmi]",
		Short: "Post a monophase meter reading on the chain",
		Args:  cobra.ExactArgs(8),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argTimestamp, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argPhase, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argWhin, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argWhout, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}
			argMvolt, err := cast.ToUint64E(args[4])
			if err != nil {
				return err
			}
			argMhertz, err := cast.ToUint64E(args[5])
			if err != nil {
				return err
			}
			argMpf, err := cast.ToUint64E(args[6])
			if err != nil {
				return err
			}
			argMaxmi, err := cast.ToUint64E(args[7])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgRecord(
				clientCtx.GetFromAddress().String(),
				argTimestamp,
				argPhase,
				argWhin,
				argWhout,
				argMvolt,
				argMhertz,
				argMpf,
				argMaxmi,
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

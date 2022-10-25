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

func CmdRecord3() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "record-3 [timestamp] [whin-1] [whout-1] [mvolt-1] [mhertz-1] [mpf-1] [maxmi-1] [whin-2] [whout-2] [mvolt-2] [mhertz-2] [mpf-2] [maxmi-2] [whin-3] [whout-3] [mvolt-3] [mhertz-3] [mpf-3] [maxmi-3]",
		Short: "Post a tri-phase meter reading on the chain",
		Args:  cobra.ExactArgs(19),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argTimestamp, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argWhin1, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argWhout1, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argMvolt1, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}
			argMhertz1, err := cast.ToUint64E(args[4])
			if err != nil {
				return err
			}
			argMpf1, err := cast.ToUint64E(args[5])
			if err != nil {
				return err
			}
			argMaxmi1, err := cast.ToUint64E(args[6])
			if err != nil {
				return err
			}
			argWhin2, err := cast.ToUint64E(args[7])
			if err != nil {
				return err
			}
			argWhout2, err := cast.ToUint64E(args[8])
			if err != nil {
				return err
			}
			argMvolt2, err := cast.ToUint64E(args[9])
			if err != nil {
				return err
			}
			argMhertz2, err := cast.ToUint64E(args[10])
			if err != nil {
				return err
			}
			argMpf2, err := cast.ToUint64E(args[11])
			if err != nil {
				return err
			}
			argMaxmi2, err := cast.ToUint64E(args[12])
			if err != nil {
				return err
			}
			argWhin3, err := cast.ToUint64E(args[13])
			if err != nil {
				return err
			}
			argWhout3, err := cast.ToUint64E(args[14])
			if err != nil {
				return err
			}
			argMvolt3, err := cast.ToUint64E(args[15])
			if err != nil {
				return err
			}
			argMhertz3, err := cast.ToUint64E(args[16])
			if err != nil {
				return err
			}
			argMpf3, err := cast.ToUint64E(args[17])
			if err != nil {
				return err
			}
			argMaxmi3, err := cast.ToUint64E(args[18])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgRecord3(
				clientCtx.GetFromAddress().String(),
				argTimestamp,
				argWhin1,
				argWhout1,
				argMvolt1,
				argMhertz1,
				argMpf1,
				argMaxmi1,
				argWhin2,
				argWhout2,
				argMvolt2,
				argMhertz2,
				argMpf2,
				argMaxmi2,
				argWhin3,
				argWhout3,
				argMvolt3,
				argMhertz3,
				argMpf3,
				argMaxmi3,
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

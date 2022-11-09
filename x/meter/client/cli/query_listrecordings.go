package cli

import (
	"strconv"

	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdListrecordings() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "listrecordings [device-id] [start] [end] [by-unix-time]",
		Short: "List the recordings from START to END [when byUnixTime=true parameters are interpreted as unix DateTime timestams]",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqDeviceID := args[0]
			reqStart, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			reqEnd, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			reqByUnixTime, err := cast.ToBoolE(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryListrecordingsRequest{

				DeviceID:   reqDeviceID,
				Start:      reqStart,
				End:        reqEnd,
				ByUnixTime: reqByUnixTime,
			}

			res, err := queryClient.Listrecordings(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

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

func CmdGetproducerbill() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "getproducerbill [producer-device-id] [bill-cycle-id]",
		Short: "dispaly the producer bill from Cycle ID or START to END [parameters are interpreted as unix DateTime timestams]",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqProducerDeviceID := args[0]
			reqBillCycleID, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetproducerbillRequest{

				ProducerDeviceID: reqProducerDeviceID,
				BillCycleID:      reqBillCycleID,
			}

			res, err := queryClient.Getproducerbill(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

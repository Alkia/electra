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

func CmdGetcustomerbill() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "getcustomerbill [customer-device-id] [bill-cycle-id]",
		Short: "dispaly the customer bill from Cycle ID or START to END [parameters are interpreted as unix DateTime timestams]",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqCustomerDeviceID := args[0]
			reqBillCycleID, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetcustomerbillRequest{

				CustomerDeviceID: reqCustomerDeviceID,
				BillCycleID:      reqBillCycleID,
			}

			res, err := queryClient.Getcustomerbill(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

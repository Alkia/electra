package cli

import (
	"context"

	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdListCustomerbills() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-customerbills",
		Short: "list all customerbills",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllCustomerbillsRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.CustomerbillsAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowCustomerbills() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-customerbills [bill-cycle-id] [customer-device-id]",
		Short: "shows a customerbills",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argBillCycleID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argCustomerDeviceID := args[1]

			params := &types.QueryGetCustomerbillsRequest{
				BillCycleID:      argBillCycleID,
				CustomerDeviceID: argCustomerDeviceID,
			}

			res, err := queryClient.Customerbills(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

package cli

import (
	"context"

	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdListCustomerbillingline() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-customerbillingline",
		Short: "list all customerbillingline",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllCustomerbillinglineRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.CustomerbillinglineAll(context.Background(), params)
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

func CmdShowCustomerbillingline() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-customerbillingline [customerdevice-id] [cycle-id] [lineid]",
		Short: "shows a customerbillingline",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argCustomerdeviceID := args[0]
			argCycleID, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argLineid, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}

			params := &types.QueryGetCustomerbillinglineRequest{
				CustomerdeviceID: argCustomerdeviceID,
				CycleID:          argCycleID,
				Lineid:           argLineid,
			}

			res, err := queryClient.Customerbillingline(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

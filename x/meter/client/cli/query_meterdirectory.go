package cli

import (
	"context"

	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListMeterdirectory() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-meterdirectory",
		Short: "list all meterdirectory",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllMeterdirectoryRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.MeterdirectoryAll(context.Background(), params)
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

func CmdShowMeterdirectory() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-meterdirectory [device-id] [barcodeserial]",
		Short: "shows a meterdirectory",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argDeviceID := args[0]
			argBarcodeserial := args[1]

			params := &types.QueryGetMeterdirectoryRequest{
				DeviceID:      argDeviceID,
				Barcodeserial: argBarcodeserial,
			}

			res, err := queryClient.Meterdirectory(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

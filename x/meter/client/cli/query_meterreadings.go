package cli

import (
	"context"

	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdListMeterreadings() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-meterreadings",
		Short: "list all meterreadings",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllMeterreadingsRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.MeterreadingsAll(context.Background(), params)
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

func CmdShowMeterreadings() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-meterreadings [device-id] [timestamp]",
		Short: "shows a meterreadings",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argDeviceID := args[0]
			argTimestamp, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}

			params := &types.QueryGetMeterreadingsRequest{
				DeviceID:  argDeviceID,
				Timestamp: argTimestamp,
			}

			res, err := queryClient.Meterreadings(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

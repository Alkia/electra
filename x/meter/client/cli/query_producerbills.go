package cli

import (
	"context"

	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdListProducerbills() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-producerbills",
		Short: "list all producerbills",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllProducerbillsRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.ProducerbillsAll(context.Background(), params)
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

func CmdShowProducerbills() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-producerbills [bill-cycle-id] [producer-device-id]",
		Short: "shows a producerbills",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argBillCycleID, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argProducerDeviceID := args[1]

			params := &types.QueryGetProducerbillsRequest{
				BillCycleID:      argBillCycleID,
				ProducerDeviceID: argProducerDeviceID,
			}

			res, err := queryClient.Producerbills(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

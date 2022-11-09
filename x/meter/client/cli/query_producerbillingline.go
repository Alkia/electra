package cli

import (
	"context"

	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdListProducerbillingline() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-producerbillingline",
		Short: "list all producerbillingline",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllProducerbillinglineRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.ProducerbillinglineAll(context.Background(), params)
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

func CmdShowProducerbillingline() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-producerbillingline [producer-device-id] [cycle-id] [lineid] [paid]",
		Short: "shows a producerbillingline",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argProducerDeviceID := args[0]
			argCycleID, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argLineid, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argPaid, err := cast.ToBoolE(args[3])
			if err != nil {
				return err
			}

			params := &types.QueryGetProducerbillinglineRequest{
				ProducerDeviceID: argProducerDeviceID,
				CycleID:          argCycleID,
				Lineid:           argLineid,
				Paid:             argPaid,
			}

			res, err := queryClient.Producerbillingline(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

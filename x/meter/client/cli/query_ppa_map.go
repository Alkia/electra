package cli

import (
	"context"

	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdListPpaMap() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-ppa-map",
		Short: "list all ppaMap",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllPpaMapRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.PpaMapAll(context.Background(), params)
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

func CmdShowPpaMap() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-ppa-map [consumer-device-id] [agreement-id] [agreement-active] [contract-id]",
		Short: "shows a ppaMap",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argConsumerDeviceID := args[0]
			argAgreementID := args[1]
			argAgreementActive, err := cast.ToBoolE(args[2])
			if err != nil {
				return err
			}
			argContractID := args[3]

			params := &types.QueryGetPpaMapRequest{
				ConsumerDeviceID: argConsumerDeviceID,
				AgreementID:      argAgreementID,
				AgreementActive:  argAgreementActive,
				ContractID:       argContractID,
			}

			res, err := queryClient.PpaMap(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

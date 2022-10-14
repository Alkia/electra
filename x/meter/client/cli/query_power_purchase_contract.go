package cli

import (
	"context"

	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListPowerPurchaseContract() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-power-purchase-contract",
		Short: "list all powerPurchaseContract",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllPowerPurchaseContractRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.PowerPurchaseContractAll(context.Background(), params)
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

func CmdShowPowerPurchaseContract() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-power-purchase-contract [contract-id] [contract-device-id]",
		Short: "shows a powerPurchaseContract",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argContractID := args[0]
			argContractDeviceID := args[1]

			params := &types.QueryGetPowerPurchaseContractRequest{
				ContractID:       argContractID,
				ContractDeviceID: argContractDeviceID,
			}

			res, err := queryClient.PowerPurchaseContract(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

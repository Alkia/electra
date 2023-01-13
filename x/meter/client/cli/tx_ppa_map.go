package cli

import (
	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdCreatePpaMap() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-ppa-map [consumer-device-id] [agreement-id] [agreement-active] [contract-id] [producer-device-id] [agreement-start-date] [agreement-end-date] [contract-preferred-price] [contract-preferred-curency]",
		Short: "Create a new ppaMap",
		Args:  cobra.ExactArgs(9),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexConsumerDeviceID := args[0]
			indexAgreementID := args[1]
			indexAgreementActive, err := cast.ToBoolE(args[2])
			if err != nil {
				return err
			}
			indexContractID := args[3]

			// Get value arguments
			argProducerDeviceID := args[4]
			argAgreementStartDate, err := cast.ToUint64E(args[5])
			if err != nil {
				return err
			}
			argAgreementEndDate, err := cast.ToUint64E(args[6])
			if err != nil {
				return err
			}
			argContractPreferredPrice, err := cast.ToUint64E(args[7])
			if err != nil {
				return err
			}
			argContractPreferredCurency := args[8]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreatePpaMap(
				clientCtx.GetFromAddress().String(),
				indexConsumerDeviceID,
				indexAgreementID,
				indexAgreementActive,
				indexContractID,
				argProducerDeviceID,
				argAgreementStartDate,
				argAgreementEndDate,
				argContractPreferredPrice,
				argContractPreferredCurency,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdatePpaMap() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-ppa-map [consumer-device-id] [agreement-id] [agreement-active] [contract-id] [producer-device-id] [agreement-start-date] [agreement-end-date] [contract-preferred-price] [contract-preferred-curency]",
		Short: "Update a ppaMap",
		Args:  cobra.ExactArgs(9),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexConsumerDeviceID := args[0]
			indexAgreementID := args[1]
			indexAgreementActive, err := cast.ToBoolE(args[2])
			if err != nil {
				return err
			}
			indexContractID := args[3]

			// Get value arguments
			argProducerDeviceID := args[4]
			argAgreementStartDate, err := cast.ToUint64E(args[5])
			if err != nil {
				return err
			}
			argAgreementEndDate, err := cast.ToUint64E(args[6])
			if err != nil {
				return err
			}
			argContractPreferredPrice, err := cast.ToUint64E(args[7])
			if err != nil {
				return err
			}
			argContractPreferredCurency := args[8]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdatePpaMap(
				clientCtx.GetFromAddress().String(),
				indexConsumerDeviceID,
				indexAgreementID,
				indexAgreementActive,
				indexContractID,
				argProducerDeviceID,
				argAgreementStartDate,
				argAgreementEndDate,
				argContractPreferredPrice,
				argContractPreferredCurency,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeletePpaMap() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-ppa-map [consumer-device-id] [agreement-id] [agreement-active] [contract-id]",
		Short: "Delete a ppaMap",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexConsumerDeviceID := args[0]
			indexAgreementID := args[1]
			indexAgreementActive, err := cast.ToBoolE(args[2])
			if err != nil {
				return err
			}
			indexContractID := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeletePpaMap(
				clientCtx.GetFromAddress().String(),
				indexConsumerDeviceID,
				indexAgreementID,
				indexAgreementActive,
				indexContractID,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

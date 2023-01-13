package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"electra/x/meter/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
	listSeparator              = ","
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdRecord())
	cmd.AddCommand(CmdRecord3())
	cmd.AddCommand(CmdCreatePowerPurchaseContract())
	cmd.AddCommand(CmdUpdatePowerPurchaseContract())
	cmd.AddCommand(CmdDeletePowerPurchaseContract())
	cmd.AddCommand(CmdCreatePpaMap())
	cmd.AddCommand(CmdUpdatePpaMap())
	cmd.AddCommand(CmdDeletePpaMap())
	cmd.AddCommand(CmdCreateBillingcycles())
	cmd.AddCommand(CmdUpdateBillingcycles())
	cmd.AddCommand(CmdDeleteBillingcycles())
	cmd.AddCommand(CmdPrepareBill())
	cmd.AddCommand(CmdCreateCustomerbillingline())
	cmd.AddCommand(CmdUpdateCustomerbillingline())
	cmd.AddCommand(CmdDeleteCustomerbillingline())
	cmd.AddCommand(CmdCreateCustomerbills())
	cmd.AddCommand(CmdUpdateCustomerbills())
	cmd.AddCommand(CmdDeleteCustomerbills())
	cmd.AddCommand(CmdCreateProducerbillingline())
	cmd.AddCommand(CmdUpdateProducerbillingline())
	cmd.AddCommand(CmdDeleteProducerbillingline())
	cmd.AddCommand(CmdCreateProducerbills())
	cmd.AddCommand(CmdUpdateProducerbills())
	cmd.AddCommand(CmdDeleteProducerbills())
	// this line is used by starport scaffolding # 1

	return cmd
}

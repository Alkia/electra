package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"electra/x/meter/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group meter queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdListMeterreadings())
	cmd.AddCommand(CmdShowMeterreadings())
	cmd.AddCommand(CmdListMeterdirectory())
	cmd.AddCommand(CmdShowMeterdirectory())
	cmd.AddCommand(CmdListrecordings())

	cmd.AddCommand(CmdListPowerPurchaseContract())
	cmd.AddCommand(CmdShowPowerPurchaseContract())
	cmd.AddCommand(CmdListPpaMap())
	cmd.AddCommand(CmdShowPpaMap())
	cmd.AddCommand(CmdListBillingcycles())
	cmd.AddCommand(CmdShowBillingcycles())
	cmd.AddCommand(CmdCurrentcycleID())

	cmd.AddCommand(CmdListCustomerbillingline())
	cmd.AddCommand(CmdShowCustomerbillingline())
	cmd.AddCommand(CmdGetcustomerbill())

	cmd.AddCommand(CmdListCustomerbills())
	cmd.AddCommand(CmdShowCustomerbills())
	cmd.AddCommand(CmdListProducerbillingline())
	cmd.AddCommand(CmdShowProducerbillingline())
	cmd.AddCommand(CmdGetproducerbill())

	cmd.AddCommand(CmdListProducerbills())
	cmd.AddCommand(CmdShowProducerbills())
	// this line is used by starport scaffolding # 1

	return cmd
}

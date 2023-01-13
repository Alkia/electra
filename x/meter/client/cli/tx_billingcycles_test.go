package cli_test

import (
	"fmt"
	"strconv"
	"testing"

	sdkmath "cosmossdk.io/math"
	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"electra/testutil/network"
	"electra/x/meter/client/cli"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestCreateBillingcycles(t *testing.T) {
	net := network.New(t)
	val := net.Validators[0]
	ctx := val.ClientCtx

	fields := []string{"111", "111", "111", "111", "111", "111", "xyz", "false", "false"}
	for _, tc := range []struct {
		desc      string
		idCycleID uint64

		args []string
		err  error
		code uint32
	}{
		{
			idCycleID: 0,

			desc: "valid",
			args: []string{
				fmt.Sprintf("--%s=%s", flags.FlagFrom, val.Address.String()),
				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastBlock),
				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin(net.Config.BondDenom, sdkmath.NewInt(10))).String()),
			},
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			args := []string{
				strconv.Itoa(int(tc.idCycleID)),
			}
			args = append(args, fields...)
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdCreateBillingcycles(), args)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				var resp sdk.TxResponse
				require.NoError(t, ctx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				require.Equal(t, tc.code, resp.Code)
			}
		})
	}
}

func TestUpdateBillingcycles(t *testing.T) {
	net := network.New(t)
	val := net.Validators[0]
	ctx := val.ClientCtx

	fields := []string{"111", "111", "111", "111", "111", "111", "xyz", "false", "false"}
	common := []string{
		fmt.Sprintf("--%s=%s", flags.FlagFrom, val.Address.String()),
		fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
		fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastBlock),
		fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin(net.Config.BondDenom, sdkmath.NewInt(10))).String()),
	}
	args := []string{
		"0",
	}
	args = append(args, fields...)
	args = append(args, common...)
	_, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdCreateBillingcycles(), args)
	require.NoError(t, err)

	for _, tc := range []struct {
		desc      string
		idCycleID uint64

		args []string
		code uint32
		err  error
	}{
		{
			desc:      "valid",
			idCycleID: 0,

			args: common,
		},
		{
			desc:      "key not found",
			idCycleID: 100000,

			args: common,
			code: sdkerrors.ErrKeyNotFound.ABCICode(),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			args := []string{
				strconv.Itoa(int(tc.idCycleID)),
			}
			args = append(args, fields...)
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdUpdateBillingcycles(), args)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				var resp sdk.TxResponse
				require.NoError(t, ctx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				require.Equal(t, tc.code, resp.Code)
			}
		})
	}
}

func TestDeleteBillingcycles(t *testing.T) {
	net := network.New(t)

	val := net.Validators[0]
	ctx := val.ClientCtx

	fields := []string{"111", "111", "111", "111", "111", "111", "xyz", "false", "false"}
	common := []string{
		fmt.Sprintf("--%s=%s", flags.FlagFrom, val.Address.String()),
		fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
		fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastBlock),
		fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin(net.Config.BondDenom, sdkmath.NewInt(10))).String()),
	}
	args := []string{
		"0",
	}
	args = append(args, fields...)
	args = append(args, common...)
	_, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdCreateBillingcycles(), args)
	require.NoError(t, err)

	for _, tc := range []struct {
		desc      string
		idCycleID uint64

		args []string
		code uint32
		err  error
	}{
		{
			desc:      "valid",
			idCycleID: 0,

			args: common,
		},
		{
			desc:      "key not found",
			idCycleID: 100000,

			args: common,
			code: sdkerrors.ErrKeyNotFound.ABCICode(),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			args := []string{
				strconv.Itoa(int(tc.idCycleID)),
			}
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdDeleteBillingcycles(), args)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				var resp sdk.TxResponse
				require.NoError(t, ctx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				require.Equal(t, tc.code, resp.Code)
			}
		})
	}
}

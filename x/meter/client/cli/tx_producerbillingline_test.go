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

func TestCreateProducerbillingline(t *testing.T) {
	net := network.New(t)
	val := net.Validators[0]
	ctx := val.ClientCtx

	fields := []string{"xyz", "xyz", "111", "111", "xyz", "111", "111"}
	for _, tc := range []struct {
		desc               string
		idProducerDeviceID string
		idCycleID          uint64
		idLineid           uint64
		idPaid             bool

		args []string
		err  error
		code uint32
	}{
		{
			idProducerDeviceID: strconv.Itoa(0),
			idCycleID:          0,
			idLineid:           0,
			idPaid:             false,

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
				tc.idProducerDeviceID,
				strconv.Itoa(int(tc.idCycleID)),
				strconv.Itoa(int(tc.idLineid)),
				strconv.FormatBool(tc.idPaid),
			}
			args = append(args, fields...)
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdCreateProducerbillingline(), args)
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

func TestUpdateProducerbillingline(t *testing.T) {
	net := network.New(t)
	val := net.Validators[0]
	ctx := val.ClientCtx

	fields := []string{"xyz", "xyz", "111", "111", "xyz", "111", "111"}
	common := []string{
		fmt.Sprintf("--%s=%s", flags.FlagFrom, val.Address.String()),
		fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
		fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastBlock),
		fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin(net.Config.BondDenom, sdkmath.NewInt(10))).String()),
	}
	args := []string{
		"0",
		"0",
		"0",
		"0",
	}
	args = append(args, fields...)
	args = append(args, common...)
	_, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdCreateProducerbillingline(), args)
	require.NoError(t, err)

	for _, tc := range []struct {
		desc               string
		idProducerDeviceID string
		idCycleID          uint64
		idLineid           uint64
		idPaid             bool

		args []string
		code uint32
		err  error
	}{
		{
			desc:               "valid",
			idProducerDeviceID: strconv.Itoa(0),
			idCycleID:          0,
			idLineid:           0,
			idPaid:             false,

			args: common,
		},
		{
			desc:               "key not found",
			idProducerDeviceID: strconv.Itoa(100000),
			idCycleID:          100000,
			idLineid:           100000,
			idPaid:             false,

			args: common,
			code: sdkerrors.ErrKeyNotFound.ABCICode(),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			args := []string{
				tc.idProducerDeviceID,
				strconv.Itoa(int(tc.idCycleID)),
				strconv.Itoa(int(tc.idLineid)),
				strconv.FormatBool(tc.idPaid),
			}
			args = append(args, fields...)
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdUpdateProducerbillingline(), args)
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

func TestDeleteProducerbillingline(t *testing.T) {
	net := network.New(t)

	val := net.Validators[0]
	ctx := val.ClientCtx

	fields := []string{"xyz", "xyz", "111", "111", "xyz", "111", "111"}
	common := []string{
		fmt.Sprintf("--%s=%s", flags.FlagFrom, val.Address.String()),
		fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
		fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastBlock),
		fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin(net.Config.BondDenom, sdkmath.NewInt(10))).String()),
	}
	args := []string{
		"0",
		"0",
		"0",
		"0",
	}
	args = append(args, fields...)
	args = append(args, common...)
	_, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdCreateProducerbillingline(), args)
	require.NoError(t, err)

	for _, tc := range []struct {
		desc               string
		idProducerDeviceID string
		idCycleID          uint64
		idLineid           uint64
		idPaid             bool

		args []string
		code uint32
		err  error
	}{
		{
			desc:               "valid",
			idProducerDeviceID: strconv.Itoa(0),
			idCycleID:          0,
			idLineid:           0,
			idPaid:             false,

			args: common,
		},
		{
			desc:               "key not found",
			idProducerDeviceID: strconv.Itoa(100000),
			idCycleID:          100000,
			idLineid:           100000,
			idPaid:             false,

			args: common,
			code: sdkerrors.ErrKeyNotFound.ABCICode(),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			args := []string{
				tc.idProducerDeviceID,
				strconv.Itoa(int(tc.idCycleID)),
				strconv.Itoa(int(tc.idLineid)),
				strconv.FormatBool(tc.idPaid),
			}
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdDeleteProducerbillingline(), args)
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

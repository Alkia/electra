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

func TestCreatePpaMap(t *testing.T) {
	net := network.New(t)
	val := net.Validators[0]
	ctx := val.ClientCtx

	fields := []string{"xyz", "111", "111", "111", "xyz"}
	for _, tc := range []struct {
		desc               string
		idConsumerDeviceID string
		idAgreementID      string
		idAgreementActive  bool
		idContractID       string

		args []string
		err  error
		code uint32
	}{
		{
			idConsumerDeviceID: strconv.Itoa(0),
			idAgreementID:      strconv.Itoa(0),
			idAgreementActive:  false,
			idContractID:       strconv.Itoa(0),

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
				tc.idConsumerDeviceID,
				tc.idAgreementID,
				strconv.FormatBool(tc.idAgreementActive),
				tc.idContractID,
			}
			args = append(args, fields...)
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdCreatePpaMap(), args)
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

func TestUpdatePpaMap(t *testing.T) {
	net := network.New(t)
	val := net.Validators[0]
	ctx := val.ClientCtx

	fields := []string{"xyz", "111", "111", "111", "xyz"}
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
	_, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdCreatePpaMap(), args)
	require.NoError(t, err)

	for _, tc := range []struct {
		desc               string
		idConsumerDeviceID string
		idAgreementID      string
		idAgreementActive  bool
		idContractID       string

		args []string
		code uint32
		err  error
	}{
		{
			desc:               "valid",
			idConsumerDeviceID: strconv.Itoa(0),
			idAgreementID:      strconv.Itoa(0),
			idAgreementActive:  false,
			idContractID:       strconv.Itoa(0),

			args: common,
		},
		{
			desc:               "key not found",
			idConsumerDeviceID: strconv.Itoa(100000),
			idAgreementID:      strconv.Itoa(100000),
			idAgreementActive:  false,
			idContractID:       strconv.Itoa(100000),

			args: common,
			code: sdkerrors.ErrKeyNotFound.ABCICode(),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			args := []string{
				tc.idConsumerDeviceID,
				tc.idAgreementID,
				strconv.FormatBool(tc.idAgreementActive),
				tc.idContractID,
			}
			args = append(args, fields...)
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdUpdatePpaMap(), args)
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

func TestDeletePpaMap(t *testing.T) {
	net := network.New(t)

	val := net.Validators[0]
	ctx := val.ClientCtx

	fields := []string{"xyz", "111", "111", "111", "xyz"}
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
	_, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdCreatePpaMap(), args)
	require.NoError(t, err)

	for _, tc := range []struct {
		desc               string
		idConsumerDeviceID string
		idAgreementID      string
		idAgreementActive  bool
		idContractID       string

		args []string
		code uint32
		err  error
	}{
		{
			desc:               "valid",
			idConsumerDeviceID: strconv.Itoa(0),
			idAgreementID:      strconv.Itoa(0),
			idAgreementActive:  false,
			idContractID:       strconv.Itoa(0),

			args: common,
		},
		{
			desc:               "key not found",
			idConsumerDeviceID: strconv.Itoa(100000),
			idAgreementID:      strconv.Itoa(100000),
			idAgreementActive:  false,
			idContractID:       strconv.Itoa(100000),

			args: common,
			code: sdkerrors.ErrKeyNotFound.ABCICode(),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			args := []string{
				tc.idConsumerDeviceID,
				tc.idAgreementID,
				strconv.FormatBool(tc.idAgreementActive),
				tc.idContractID,
			}
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdDeletePpaMap(), args)
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

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/naming-convention */
const amino_1 = require("@cosmjs/amino");
const encoding_1 = require("@cosmjs/encoding");
const proto_signing_1 = require("@cosmjs/proto-signing");
const gov_1 = require("cosmjs-types/cosmos/gov/v1beta1/gov");
const long_1 = __importDefault(require("long"));
const aminotypes_1 = require("./aminotypes");
describe("AminoTypes", () => {
    describe("toAmino", () => {
        // bank
        it("works for MsgSend", () => {
            const msg = {
                fromAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                toAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                amount: (0, proto_signing_1.coins)(1234, "ucosm"),
            };
            const aminoMsg = new aminotypes_1.AminoTypes().toAmino({
                typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                value: msg,
            });
            const expected = {
                type: "cosmos-sdk/MsgSend",
                value: {
                    from_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                    to_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                    amount: (0, proto_signing_1.coins)(1234, "ucosm"),
                },
            };
            expect(aminoMsg).toEqual(expected);
        });
        it("works for MsgMultiSend", () => {
            const msg = {
                inputs: [
                    { address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6", coins: (0, proto_signing_1.coins)(1234, "ucosm") },
                    { address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5", coins: (0, proto_signing_1.coins)(5678, "ucosm") },
                ],
                outputs: [
                    { address: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k", coins: (0, proto_signing_1.coins)(6000, "ucosm") },
                    { address: "cosmos142u9fgcjdlycfcez3lw8x6x5h7rfjlnfhpw2lx", coins: (0, proto_signing_1.coins)(912, "ucosm") },
                ],
            };
            const aminoMsg = new aminotypes_1.AminoTypes().toAmino({
                typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
                value: msg,
            });
            const expected = {
                type: "cosmos-sdk/MsgMultiSend",
                value: {
                    inputs: [
                        { address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6", coins: (0, proto_signing_1.coins)(1234, "ucosm") },
                        { address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5", coins: (0, proto_signing_1.coins)(5678, "ucosm") },
                    ],
                    outputs: [
                        { address: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k", coins: (0, proto_signing_1.coins)(6000, "ucosm") },
                        { address: "cosmos142u9fgcjdlycfcez3lw8x6x5h7rfjlnfhpw2lx", coins: (0, proto_signing_1.coins)(912, "ucosm") },
                    ],
                },
            };
            expect(aminoMsg).toEqual(expected);
        });
        // gov
        it("works for MsgDeposit", () => {
            const msg = {
                amount: [{ amount: "12300000", denom: "ustake" }],
                depositor: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                proposalId: long_1.default.fromNumber(5),
            };
            const aminoMsg = new aminotypes_1.AminoTypes().toAmino({
                typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
                value: msg,
            });
            const expected = {
                type: "cosmos-sdk/MsgDeposit",
                value: {
                    amount: [{ amount: "12300000", denom: "ustake" }],
                    depositor: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                    proposal_id: "5",
                },
            };
            expect(aminoMsg).toEqual(expected);
        });
        it("works for MsgSubmitProposal", () => {
            const msg = {
                initialDeposit: [{ amount: "12300000", denom: "ustake" }],
                proposer: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                content: {
                    typeUrl: "/cosmos.gov.v1beta1.TextProposal",
                    value: gov_1.TextProposal.encode({
                        description: "This proposal proposes to test whether this proposal passes",
                        title: "Test Proposal",
                    }).finish(),
                },
            };
            const aminoMsg = new aminotypes_1.AminoTypes().toAmino({
                typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
                value: msg,
            });
            const expected = {
                type: "cosmos-sdk/MsgSubmitProposal",
                value: {
                    initial_deposit: [{ amount: "12300000", denom: "ustake" }],
                    proposer: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                    content: {
                        type: "cosmos-sdk/TextProposal",
                        value: {
                            description: "This proposal proposes to test whether this proposal passes",
                            title: "Test Proposal",
                        },
                    },
                },
            };
            expect(aminoMsg).toEqual(expected);
        });
        it("works for MsgVote", () => {
            const msg = {
                option: gov_1.VoteOption.VOTE_OPTION_NO_WITH_VETO,
                proposalId: long_1.default.fromNumber(5),
                voter: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k",
            };
            const aminoMsg = new aminotypes_1.AminoTypes().toAmino({
                typeUrl: "/cosmos.gov.v1beta1.MsgVote",
                value: msg,
            });
            const expected = {
                type: "cosmos-sdk/MsgVote",
                value: {
                    option: 4,
                    proposal_id: "5",
                    voter: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k",
                },
            };
            expect(aminoMsg).toEqual(expected);
        });
        // distribution
        it("works for MsgFundCommunityPool", async () => {
            const msg = {
                amount: (0, proto_signing_1.coins)(1234, "ucosm"),
                depositor: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
            };
            const aminoMsg = new aminotypes_1.AminoTypes().toAmino({
                typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
                value: msg,
            });
            const expected = {
                type: "cosmos-sdk/MsgFundCommunityPool",
                value: {
                    amount: (0, proto_signing_1.coins)(1234, "ucosm"),
                    depositor: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                },
            };
            expect(aminoMsg).toEqual(expected);
        });
        it("works for MsgSetWithdrawAddress", async () => {
            const msg = {
                delegatorAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                withdrawAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
            };
            const aminoMsg = new aminotypes_1.AminoTypes().toAmino({
                typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
                value: msg,
            });
            const expected = {
                type: "cosmos-sdk/MsgModifyWithdrawAddress",
                value: {
                    delegator_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                    withdraw_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                },
            };
            expect(aminoMsg).toEqual(expected);
        });
        it("works for MsgWithdrawDelegatorReward", async () => {
            const msg = {
                delegatorAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
            };
            const aminoMsg = new aminotypes_1.AminoTypes().toAmino({
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                value: msg,
            });
            const expected = {
                type: "cosmos-sdk/MsgWithdrawDelegationReward",
                value: {
                    delegator_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                    validator_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                },
            };
            expect(aminoMsg).toEqual(expected);
        });
        it("works for MsgWithdrawValidatorCommission", async () => {
            const msg = {
                validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
            };
            const aminoMsg = new aminotypes_1.AminoTypes().toAmino({
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
                value: msg,
            });
            const expected = {
                type: "cosmos-sdk/MsgWithdrawValidatorCommission",
                value: {
                    validator_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                },
            };
            expect(aminoMsg).toEqual(expected);
        });
        // staking
        it("works for MsgBeginRedelegate", () => {
            const msg = {
                delegatorAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                validatorSrcAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                validatorDstAddress: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k",
                amount: (0, proto_signing_1.coin)(1234, "ucosm"),
            };
            const aminoMsg = new aminotypes_1.AminoTypes().toAmino({
                typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                value: msg,
            });
            const expected = {
                type: "cosmos-sdk/MsgBeginRedelegate",
                value: {
                    delegator_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                    validator_src_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                    validator_dst_address: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k",
                    amount: (0, proto_signing_1.coin)(1234, "ucosm"),
                },
            };
            expect(aminoMsg).toEqual(expected);
        });
        it("works for MsgCreateValidator", () => {
            const msg = {
                description: {
                    moniker: "validator",
                    identity: "me",
                    website: "valid.com",
                    securityContact: "Hamburglar",
                    details: "...",
                },
                commission: {
                    rate: "0.2",
                    maxRate: "0.3",
                    maxChangeRate: "0.1",
                },
                minSelfDelegation: "123",
                delegatorAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                pubkey: {
                    typeUrl: "/cosmos.crypto.secp256k1.PubKey",
                    value: (0, encoding_1.fromBase64)("A08EGB7ro1ORuFhjOnZcSgwYlpe0DSFjVNUIkNNQxwKQ"),
                },
                value: (0, proto_signing_1.coin)(1234, "ucosm"),
            };
            const aminoMsg = new aminotypes_1.AminoTypes().toAmino({
                typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
                value: msg,
            });
            const expected = {
                type: "cosmos-sdk/MsgCreateValidator",
                value: {
                    description: {
                        moniker: "validator",
                        identity: "me",
                        website: "valid.com",
                        security_contact: "Hamburglar",
                        details: "...",
                    },
                    commission: {
                        rate: "0.2",
                        max_rate: "0.3",
                        max_change_rate: "0.1",
                    },
                    min_self_delegation: "123",
                    delegator_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                    validator_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                    pubkey: (0, amino_1.encodeBech32Pubkey)({ type: "tendermint/PubKeySecp256k1", value: "A08EGB7ro1ORuFhjOnZcSgwYlpe0DSFjVNUIkNNQxwKQ" }, "cosmos"),
                    value: (0, proto_signing_1.coin)(1234, "ucosm"),
                },
            };
            expect(aminoMsg).toEqual(expected);
        });
        it("works for MsgDelegate", () => {
            const msg = {
                delegatorAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                amount: (0, proto_signing_1.coin)(1234, "ucosm"),
            };
            const aminoMsg = new aminotypes_1.AminoTypes().toAmino({
                typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                value: msg,
            });
            const expected = {
                type: "cosmos-sdk/MsgDelegate",
                value: {
                    delegator_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                    validator_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                    amount: (0, proto_signing_1.coin)(1234, "ucosm"),
                },
            };
            expect(aminoMsg).toEqual(expected);
        });
        it("works for MsgEditValidator", () => {
            const msg = {
                description: {
                    moniker: "validator",
                    identity: "me",
                    website: "valid.com",
                    securityContact: "Hamburglar",
                    details: "...",
                },
                commissionRate: "0.2",
                minSelfDelegation: "123",
                validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
            };
            const aminoMsg = new aminotypes_1.AminoTypes().toAmino({
                typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
                value: msg,
            });
            const expected = {
                type: "cosmos-sdk/MsgEditValidator",
                value: {
                    description: {
                        moniker: "validator",
                        identity: "me",
                        website: "valid.com",
                        security_contact: "Hamburglar",
                        details: "...",
                    },
                    commission_rate: "0.2",
                    min_self_delegation: "123",
                    validator_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                },
            };
            expect(aminoMsg).toEqual(expected);
        });
        it("works for MsgUndelegate", () => {
            const msg = {
                delegatorAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                amount: (0, proto_signing_1.coin)(1234, "ucosm"),
            };
            const aminoMsg = new aminotypes_1.AminoTypes().toAmino({
                typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                value: msg,
            });
            const expected = {
                type: "cosmos-sdk/MsgUndelegate",
                value: {
                    delegator_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                    validator_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                    amount: (0, proto_signing_1.coin)(1234, "ucosm"),
                },
            };
            expect(aminoMsg).toEqual(expected);
        });
        // ibc
        it("works for MsgTransfer", () => {
            const msg = {
                sourcePort: "testport",
                sourceChannel: "testchannel",
                token: (0, proto_signing_1.coin)(1234, "utest"),
                sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                receiver: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                timeoutHeight: {
                    revisionHeight: long_1.default.fromString("123", true),
                    revisionNumber: long_1.default.fromString("456", true),
                },
                timeoutTimestamp: long_1.default.fromString("789", true),
            };
            const aminoMsg = new aminotypes_1.AminoTypes().toAmino({
                typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                value: msg,
            });
            const expected = {
                type: "cosmos-sdk/MsgTransfer",
                value: {
                    source_port: "testport",
                    source_channel: "testchannel",
                    token: (0, proto_signing_1.coin)(1234, "utest"),
                    sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                    receiver: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                    timeout_height: {
                        revision_height: "123",
                        revision_number: "456",
                    },
                    timeout_timestamp: "789",
                },
            };
            expect(aminoMsg).toEqual(expected);
        });
        it("works for MsgTransfer with empty values", () => {
            const msg = {
                sourcePort: "testport",
                sourceChannel: "testchannel",
                token: (0, proto_signing_1.coin)(1234, "utest"),
                sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                receiver: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                timeoutHeight: {
                    revisionHeight: long_1.default.UZERO,
                    revisionNumber: long_1.default.UZERO,
                },
                timeoutTimestamp: long_1.default.UZERO,
            };
            const aminoMsg = new aminotypes_1.AminoTypes().toAmino({
                typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                value: msg,
            });
            const expected = {
                type: "cosmos-sdk/MsgTransfer",
                value: {
                    source_port: "testport",
                    source_channel: "testchannel",
                    token: (0, proto_signing_1.coin)(1234, "utest"),
                    sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                    receiver: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                    timeout_height: {
                        revision_height: undefined,
                        revision_number: undefined,
                    },
                    timeout_timestamp: undefined,
                },
            };
            expect(aminoMsg).toEqual(expected);
        });
        it("works for MsgTransfer with no height timeout", () => {
            const msg = {
                sourcePort: "testport",
                sourceChannel: "testchannel",
                token: (0, proto_signing_1.coin)(1234, "utest"),
                sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                receiver: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                timeoutHeight: undefined,
                timeoutTimestamp: long_1.default.UZERO,
            };
            const aminoMsg = new aminotypes_1.AminoTypes().toAmino({
                typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                value: msg,
            });
            const expected = {
                type: "cosmos-sdk/MsgTransfer",
                value: {
                    source_port: "testport",
                    source_channel: "testchannel",
                    token: (0, proto_signing_1.coin)(1234, "utest"),
                    sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                    receiver: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                    timeout_height: {},
                    timeout_timestamp: undefined,
                },
            };
            expect(aminoMsg).toEqual(expected);
        });
        // other
        it("works with custom type url", () => {
            const msg = {
                foo: "bar",
            };
            const aminoMsg = new aminotypes_1.AminoTypes({
                additions: {
                    "/my.CustomType": {
                        aminoType: "my-sdk/CustomType",
                        toAmino: ({ foo, }) => ({
                            foo: `amino-prefix-${foo}`,
                            constant: "something-for-amino",
                        }),
                        fromAmino: () => { },
                    },
                },
            }).toAmino({ typeUrl: "/my.CustomType", value: msg });
            expect(aminoMsg).toEqual({
                type: "my-sdk/CustomType",
                value: {
                    foo: "amino-prefix-bar",
                    constant: "something-for-amino",
                },
            });
        });
        it("works with overridden type url", () => {
            const msg = {
                delegatorAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                amount: (0, proto_signing_1.coin)(1234, "ucosm"),
            };
            const aminoMsg = new aminotypes_1.AminoTypes({
                additions: {
                    "/cosmos.staking.v1beta1.MsgDelegate": {
                        aminoType: "my-override/MsgDelegate",
                        toAmino: (m) => {
                            var _a;
                            return ({
                                foo: (_a = m.delegatorAddress) !== null && _a !== void 0 ? _a : "",
                            });
                        },
                        fromAmino: () => { },
                    },
                },
            }).toAmino({
                typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                value: msg,
            });
            const expected = {
                type: "my-override/MsgDelegate",
                value: {
                    foo: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                },
            };
            expect(aminoMsg).toEqual(expected);
        });
        it("throws for unknown type url", () => {
            expect(() => new aminotypes_1.AminoTypes().toAmino({ typeUrl: "/xxx.Unknown", value: { foo: "bar" } })).toThrowError(/Type URL does not exist in the Amino message type register./i);
        });
    });
    describe("fromAmino", () => {
        // bank
        it("works for MsgSend", () => {
            const aminoMsg = {
                type: "cosmos-sdk/MsgSend",
                value: {
                    from_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                    to_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                    amount: (0, proto_signing_1.coins)(1234, "ucosm"),
                },
            };
            const msg = new aminotypes_1.AminoTypes().fromAmino(aminoMsg);
            const expectedValue = {
                fromAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                toAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                amount: (0, proto_signing_1.coins)(1234, "ucosm"),
            };
            expect(msg).toEqual({
                typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                value: expectedValue,
            });
        });
        it("works for MsgMultiSend", () => {
            const aminoMsg = {
                type: "cosmos-sdk/MsgMultiSend",
                value: {
                    inputs: [
                        { address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6", coins: (0, proto_signing_1.coins)(1234, "ucosm") },
                        { address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5", coins: (0, proto_signing_1.coins)(5678, "ucosm") },
                    ],
                    outputs: [
                        { address: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k", coins: (0, proto_signing_1.coins)(6000, "ucosm") },
                        { address: "cosmos142u9fgcjdlycfcez3lw8x6x5h7rfjlnfhpw2lx", coins: (0, proto_signing_1.coins)(912, "ucosm") },
                    ],
                },
            };
            const msg = new aminotypes_1.AminoTypes().fromAmino(aminoMsg);
            const expectedValue = {
                inputs: [
                    { address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6", coins: (0, proto_signing_1.coins)(1234, "ucosm") },
                    { address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5", coins: (0, proto_signing_1.coins)(5678, "ucosm") },
                ],
                outputs: [
                    { address: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k", coins: (0, proto_signing_1.coins)(6000, "ucosm") },
                    { address: "cosmos142u9fgcjdlycfcez3lw8x6x5h7rfjlnfhpw2lx", coins: (0, proto_signing_1.coins)(912, "ucosm") },
                ],
            };
            expect(msg).toEqual({
                typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
                value: expectedValue,
            });
        });
        // gov
        it("works for MsgDeposit", () => {
            const aminoMsg = {
                type: "cosmos-sdk/MsgDeposit",
                value: {
                    amount: [{ amount: "12300000", denom: "ustake" }],
                    depositor: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                    proposal_id: "5",
                },
            };
            const msg = new aminotypes_1.AminoTypes().fromAmino(aminoMsg);
            const expectedValue = {
                amount: [{ amount: "12300000", denom: "ustake" }],
                depositor: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                proposalId: long_1.default.fromNumber(5),
            };
            expect(msg).toEqual({
                typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
                value: expectedValue,
            });
        });
        it("works for MsgSubmitProposal", () => {
            const aminoMsg = {
                type: "cosmos-sdk/MsgSubmitProposal",
                value: {
                    initial_deposit: [{ amount: "12300000", denom: "ustake" }],
                    proposer: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                    content: {
                        type: "cosmos-sdk/TextProposal",
                        value: {
                            description: "This proposal proposes to test whether this proposal passes",
                            title: "Test Proposal",
                        },
                    },
                },
            };
            const msg = new aminotypes_1.AminoTypes().fromAmino(aminoMsg);
            const expectedValue = {
                initialDeposit: [{ amount: "12300000", denom: "ustake" }],
                proposer: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                content: {
                    typeUrl: "/cosmos.gov.v1beta1.TextProposal",
                    value: gov_1.TextProposal.encode({
                        description: "This proposal proposes to test whether this proposal passes",
                        title: "Test Proposal",
                    }).finish(),
                },
            };
            expect(msg).toEqual({
                typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
                value: expectedValue,
            });
        });
        it("works for MsgVote", () => {
            const aminoMsg = {
                type: "cosmos-sdk/MsgVote",
                value: {
                    option: 4,
                    proposal_id: "5",
                    voter: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k",
                },
            };
            const msg = new aminotypes_1.AminoTypes().fromAmino(aminoMsg);
            const expectedValue = {
                option: gov_1.VoteOption.VOTE_OPTION_NO_WITH_VETO,
                proposalId: long_1.default.fromNumber(5),
                voter: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k",
            };
            expect(msg).toEqual({
                typeUrl: "/cosmos.gov.v1beta1.MsgVote",
                value: expectedValue,
            });
        });
        // distribution
        // TODO: MsgFundCommunityPool
        // TODO: MsgSetWithdrawAddress
        // TODO: MsgWithdrawDelegatorReward
        // TODO: MsgWithdrawValidatorCommission
        // staking
        it("works for MsgBeginRedelegate", () => {
            const aminoMsg = {
                type: "cosmos-sdk/MsgBeginRedelegate",
                value: {
                    delegator_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                    validator_src_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                    validator_dst_address: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k",
                    amount: (0, proto_signing_1.coin)(1234, "ucosm"),
                },
            };
            const msg = new aminotypes_1.AminoTypes().fromAmino(aminoMsg);
            const expectedValue = {
                delegatorAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                validatorSrcAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                validatorDstAddress: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k",
                amount: (0, proto_signing_1.coin)(1234, "ucosm"),
            };
            expect(msg).toEqual({
                typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                value: expectedValue,
            });
        });
        it("works for MsgCreateValidator", () => {
            const aminoMsg = {
                type: "cosmos-sdk/MsgCreateValidator",
                value: {
                    description: {
                        moniker: "validator",
                        identity: "me",
                        website: "valid.com",
                        security_contact: "Hamburglar",
                        details: "...",
                    },
                    commission: {
                        rate: "0.2",
                        max_rate: "0.3",
                        max_change_rate: "0.1",
                    },
                    min_self_delegation: "123",
                    delegator_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                    validator_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                    pubkey: (0, amino_1.encodeBech32Pubkey)({ type: "tendermint/PubKeySecp256k1", value: "A08EGB7ro1ORuFhjOnZcSgwYlpe0DSFjVNUIkNNQxwKQ" }, "cosmos"),
                    value: (0, proto_signing_1.coin)(1234, "ucosm"),
                },
            };
            const msg = new aminotypes_1.AminoTypes().fromAmino(aminoMsg);
            const expectedValue = {
                description: {
                    moniker: "validator",
                    identity: "me",
                    website: "valid.com",
                    securityContact: "Hamburglar",
                    details: "...",
                },
                commission: {
                    rate: "0.2",
                    maxRate: "0.3",
                    maxChangeRate: "0.1",
                },
                minSelfDelegation: "123",
                delegatorAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                pubkey: {
                    typeUrl: "/cosmos.crypto.secp256k1.PubKey",
                    value: (0, encoding_1.fromBase64)("A08EGB7ro1ORuFhjOnZcSgwYlpe0DSFjVNUIkNNQxwKQ"),
                },
                value: (0, proto_signing_1.coin)(1234, "ucosm"),
            };
            expect(msg).toEqual({
                typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
                value: expectedValue,
            });
        });
        it("works for MsgDelegate", () => {
            const aminoMsg = {
                type: "cosmos-sdk/MsgDelegate",
                value: {
                    delegator_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                    validator_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                    amount: (0, proto_signing_1.coin)(1234, "ucosm"),
                },
            };
            const msg = new aminotypes_1.AminoTypes().fromAmino(aminoMsg);
            const expectedValue = {
                delegatorAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                amount: (0, proto_signing_1.coin)(1234, "ucosm"),
            };
            expect(msg).toEqual({
                typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                value: expectedValue,
            });
        });
        it("works for MsgEditValidator", () => {
            const aminoMsg = {
                type: "cosmos-sdk/MsgEditValidator",
                value: {
                    description: {
                        moniker: "validator",
                        identity: "me",
                        website: "valid.com",
                        security_contact: "Hamburglar",
                        details: "...",
                    },
                    commission_rate: "0.2",
                    min_self_delegation: "123",
                    validator_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                },
            };
            const msg = new aminotypes_1.AminoTypes().fromAmino(aminoMsg);
            const expectedValue = {
                description: {
                    moniker: "validator",
                    identity: "me",
                    website: "valid.com",
                    securityContact: "Hamburglar",
                    details: "...",
                },
                commissionRate: "0.2",
                minSelfDelegation: "123",
                validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
            };
            expect(msg).toEqual({
                typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
                value: expectedValue,
            });
        });
        it("works for MsgUndelegate", () => {
            const aminoMsg = {
                type: "cosmos-sdk/MsgUndelegate",
                value: {
                    delegator_address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                    validator_address: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                    amount: (0, proto_signing_1.coin)(1234, "ucosm"),
                },
            };
            const msg = new aminotypes_1.AminoTypes().fromAmino(aminoMsg);
            const expectedValue = {
                delegatorAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                amount: (0, proto_signing_1.coin)(1234, "ucosm"),
            };
            expect(msg).toEqual({
                typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                value: expectedValue,
            });
        });
        // ibc
        it("works for MsgTransfer", () => {
            const aminoMsg = {
                type: "cosmos-sdk/MsgTransfer",
                value: {
                    source_port: "testport",
                    source_channel: "testchannel",
                    token: (0, proto_signing_1.coin)(1234, "utest"),
                    sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                    receiver: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                    timeout_height: {
                        revision_height: "123",
                        revision_number: "456",
                    },
                    timeout_timestamp: "789",
                },
            };
            const msg = new aminotypes_1.AminoTypes().fromAmino(aminoMsg);
            const expectedValue = {
                sourcePort: "testport",
                sourceChannel: "testchannel",
                token: (0, proto_signing_1.coin)(1234, "utest"),
                sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                receiver: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                timeoutHeight: {
                    revisionHeight: long_1.default.fromString("123", true),
                    revisionNumber: long_1.default.fromString("456", true),
                },
                timeoutTimestamp: long_1.default.fromString("789", true),
            };
            expect(msg).toEqual({
                typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                value: expectedValue,
            });
        });
        it("works for MsgTransfer with default values", () => {
            const aminoMsg = {
                type: "cosmos-sdk/MsgTransfer",
                value: {
                    source_port: "testport",
                    source_channel: "testchannel",
                    token: (0, proto_signing_1.coin)(1234, "utest"),
                    sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                    receiver: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                    timeout_height: {
                    // revision_height omitted
                    // revision_number omitted
                    },
                    // timeout_timestamp omitted
                },
            };
            const msg = new aminotypes_1.AminoTypes().fromAmino(aminoMsg);
            const expectedValue = {
                sourcePort: "testport",
                sourceChannel: "testchannel",
                token: (0, proto_signing_1.coin)(1234, "utest"),
                sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                receiver: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                timeoutHeight: {
                    revisionHeight: long_1.default.UZERO,
                    revisionNumber: long_1.default.UZERO,
                },
                timeoutTimestamp: long_1.default.UZERO,
            };
            expect(msg).toEqual({
                typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                value: expectedValue,
            });
        });
        // other
        it("works for custom type url", () => {
            const aminoMsg = {
                type: "my-sdk/CustomType",
                value: {
                    foo: "amino-prefix-bar",
                    constant: "something-for-amino",
                },
            };
            const msg = new aminotypes_1.AminoTypes({
                additions: {
                    "/my.CustomType": {
                        aminoType: "my-sdk/CustomType",
                        toAmino: () => { },
                        fromAmino: ({ foo }) => ({
                            foo: foo.slice(13),
                        }),
                    },
                },
            }).fromAmino(aminoMsg);
            const expectedValue = {
                foo: "bar",
            };
            expect(msg).toEqual({
                typeUrl: "/my.CustomType",
                value: expectedValue,
            });
        });
        it("works with overridden type url", () => {
            const msg = new aminotypes_1.AminoTypes({
                additions: {
                    "/my.OverrideType": {
                        aminoType: "cosmos-sdk/MsgDelegate",
                        toAmino: () => { },
                        fromAmino: ({ foo }) => ({
                            delegatorAddress: foo,
                            validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                            amount: (0, proto_signing_1.coin)(1234, "ucosm"),
                        }),
                    },
                },
            }).fromAmino({
                type: "cosmos-sdk/MsgDelegate",
                value: {
                    foo: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                },
            });
            const expected = {
                typeUrl: "/my.OverrideType",
                value: {
                    delegatorAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
                    validatorAddress: "cosmos10dyr9899g6t0pelew4nvf4j5c3jcgv0r73qga5",
                    amount: (0, proto_signing_1.coin)(1234, "ucosm"),
                },
            };
            expect(msg).toEqual(expected);
        });
        it("throws for unknown type url", () => {
            expect(() => new aminotypes_1.AminoTypes().fromAmino({ type: "cosmos-sdk/MsgUnknown", value: { foo: "bar" } })).toThrowError(/Type does not exist in the Amino message type register./i);
        });
    });
});
//# sourceMappingURL=aminotypes.spec.js.map
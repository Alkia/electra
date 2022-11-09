"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("@iov/crypto");
const encoding_1 = require("@iov/encoding");
const contract_json_1 = __importDefault(require("./testdata/contract.json"));
function getHackatom() {
    return encoding_1.Encoding.fromBase64(contract_json_1.default.data);
}
exports.getHackatom = getHackatom;
function makeRandomAddress() {
    return encoding_1.Bech32.encode("cosmos", crypto_1.Random.getBytes(20));
}
exports.makeRandomAddress = makeRandomAddress;
exports.nonNegativeIntegerMatcher = /^[0-9]+$/;
exports.tendermintIdMatcher = /^[0-9A-F]{64}$/;
exports.tendermintOptionalIdMatcher = /^([0-9A-F]{64}|)$/;
exports.tendermintAddressMatcher = /^[0-9A-F]{40}$/;
exports.tendermintShortHashMatcher = /^[0-9a-f]{40}$/;
exports.semverMatcher = /^[0-9]+\.[0-9]+\.[0-9]+(-[0-9A-Za-z-]+(\.[0-9A-Za-z-]+)*)?$/;
// https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki#bech32
exports.bech32AddressMatcher = /^[\x21-\x7e]{1,83}1[02-9ac-hj-np-z]{38}$/;
/** Deployed as part of scripts/wasmd/init.sh */
exports.deployedErc20 = {
    codeId: 1,
    source: "https://not-yet-published.cw-erc20",
    builder: "confio/cosmwasm-opt:0.7.3",
    checksum: "1f6285492e7ea00596ef472ba166cb96ac3f91d694cb8c8e15f7c023ac451947",
    instances: [
        "cosmos18vd8fpwxzck93qlwghaj6arh4p7c5n89uzcee5",
        "cosmos1hqrdl6wstt8qzshwc6mrumpjk9338k0lr4dqxd",
        "cosmos18r5szma8hm93pvx6lwpjwyxruw27e0k5uw835c",
    ],
};
exports.wasmd = {
    endpoint: "http://localhost:1317",
    chainId: "testing",
};
exports.faucet = {
    mnemonic: "economy stock theory fatal elder harbor betray wasp final emotion task crumble siren bottom lizard educate guess current outdoor pair theory focus wife stone",
    pubkey: {
        type: "tendermint/PubKeySecp256k1",
        value: "A08EGB7ro1ORuFhjOnZcSgwYlpe0DSFjVNUIkNNQxwKQ",
    },
    address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
};
/** Unused account */
exports.unused = {
    pubkey: {
        type: "tendermint/PubKeySecp256k1",
        value: "ArkCaFUJ/IH+vKBmNRCdUVl3mCAhbopk9jjW4Ko4OfRQ",
    },
    address: "cosmos1cjsxept9rkggzxztslae9ndgpdyt2408lk850u",
    accountNumber: 9,
    sequence: 0,
};
function wasmdEnabled() {
    return !!process.env.WASMD_ENABLED;
}
exports.wasmdEnabled = wasmdEnabled;
function pendingWithoutWasmd() {
    if (!wasmdEnabled()) {
        return pending("Set WASMD_ENABLED to enable Wasmd based tests");
    }
}
exports.pendingWithoutWasmd = pendingWithoutWasmd;
/** Returns first element. Throws if array has a different length than 1. */
function fromOneElementArray(elements) {
    if (elements.length !== 1)
        throw new Error(`Expected exactly one element but got ${elements.length}`);
    return elements[0];
}
exports.fromOneElementArray = fromOneElementArray;
//# sourceMappingURL=testutils.spec.js.map
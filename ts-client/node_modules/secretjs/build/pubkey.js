"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const encoding_1 = require("@iov/encoding");
const fast_deep_equal_1 = __importDefault(require("fast-deep-equal"));
const types_1 = require("./types");
function encodeSecp256k1Pubkey(pubkey) {
    if (pubkey.length !== 33 || (pubkey[0] !== 0x02 && pubkey[0] !== 0x03)) {
        throw new Error("Public key must be compressed secp256k1, i.e. 33 bytes starting with 0x02 or 0x03");
    }
    return {
        type: types_1.pubkeyType.secp256k1,
        value: encoding_1.Encoding.toBase64(pubkey),
    };
}
exports.encodeSecp256k1Pubkey = encodeSecp256k1Pubkey;
// As discussed in https://github.com/binance-chain/javascript-sdk/issues/163
// Prefixes listed here: https://github.com/tendermint/tendermint/blob/d419fffe18531317c28c29a292ad7d253f6cafdf/docs/spec/blockchain/encoding.md#public-key-cryptography
// Last bytes is varint-encoded length prefix
const pubkeyAminoPrefixSecp256k1 = encoding_1.Encoding.fromHex("eb5ae98721");
const pubkeyAminoPrefixEd25519 = encoding_1.Encoding.fromHex("1624de6420");
const pubkeyAminoPrefixSr25519 = encoding_1.Encoding.fromHex("0dfb1005");
const pubkeyAminoPrefixLength = pubkeyAminoPrefixSecp256k1.length;
function decodeBech32Pubkey(bechEncoded) {
    const { data } = encoding_1.Bech32.decode(bechEncoded);
    const aminoPrefix = data.slice(0, pubkeyAminoPrefixLength);
    const rest = data.slice(pubkeyAminoPrefixLength);
    if (fast_deep_equal_1.default(aminoPrefix, pubkeyAminoPrefixSecp256k1)) {
        if (rest.length !== 33) {
            throw new Error("Invalid rest data length. Expected 33 bytes (compressed secp256k1 pubkey).");
        }
        return {
            type: types_1.pubkeyType.secp256k1,
            value: encoding_1.Encoding.toBase64(rest),
        };
    }
    else if (fast_deep_equal_1.default(aminoPrefix, pubkeyAminoPrefixEd25519)) {
        if (rest.length !== 32) {
            throw new Error("Invalid rest data length. Expected 32 bytes (Ed25519 pubkey).");
        }
        return {
            type: types_1.pubkeyType.ed25519,
            value: encoding_1.Encoding.toBase64(rest),
        };
    }
    else if (fast_deep_equal_1.default(aminoPrefix, pubkeyAminoPrefixSr25519)) {
        if (rest.length !== 32) {
            throw new Error("Invalid rest data length. Expected 32 bytes (Sr25519 pubkey).");
        }
        return {
            type: types_1.pubkeyType.sr25519,
            value: encoding_1.Encoding.toBase64(rest),
        };
    }
    else {
        throw new Error("Unsupported Pubkey type. Amino prefix: " + encoding_1.Encoding.toHex(aminoPrefix));
    }
}
exports.decodeBech32Pubkey = decodeBech32Pubkey;
function encodeBech32Pubkey(pubkey, prefix) {
    let aminoPrefix;
    switch (pubkey.type) {
        // Note: please don't add cases here without writing additional unit tests
        case types_1.pubkeyType.secp256k1:
            aminoPrefix = pubkeyAminoPrefixSecp256k1;
            break;
        default:
            throw new Error("Unsupported pubkey type");
    }
    const data = new Uint8Array([...aminoPrefix, ...encoding_1.Encoding.fromBase64(pubkey.value)]);
    return encoding_1.Bech32.encode(prefix, data);
}
exports.encodeBech32Pubkey = encodeBech32Pubkey;
//# sourceMappingURL=pubkey.js.map
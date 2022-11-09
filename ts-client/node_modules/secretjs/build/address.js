"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("@iov/crypto");
const encoding_1 = require("@iov/encoding");
const types_1 = require("./types");
const { fromBase64 } = encoding_1.Encoding;
function rawSecp256k1PubkeyToAddress(pubkeyRaw, prefix) {
    if (pubkeyRaw.length !== 33) {
        throw new Error(`Invalid Secp256k1 pubkey length (compressed): ${pubkeyRaw.length}`);
    }
    const hash1 = new crypto_1.Sha256(pubkeyRaw).digest();
    const hash2 = new crypto_1.Ripemd160(hash1).digest();
    return encoding_1.Bech32.encode(prefix, hash2);
}
exports.rawSecp256k1PubkeyToAddress = rawSecp256k1PubkeyToAddress;
// See https://github.com/tendermint/tendermint/blob/f2ada0a604b4c0763bda2f64fac53d506d3beca7/docs/spec/blockchain/encoding.md#public-key-cryptography
// This assumes we already have a cosmos-compressed pubkey
function pubkeyToAddress(pubkey, prefix) {
    const pubkeyBytes = fromBase64(pubkey.value);
    switch (pubkey.type) {
        case types_1.pubkeyType.secp256k1: {
            return rawSecp256k1PubkeyToAddress(pubkeyBytes, prefix);
        }
        case types_1.pubkeyType.ed25519: {
            if (pubkeyBytes.length !== 32) {
                throw new Error(`Invalid Ed25519 pubkey length: ${pubkeyBytes.length}`);
            }
            const hash = new crypto_1.Sha256(pubkeyBytes).digest();
            return encoding_1.Bech32.encode(prefix, hash.slice(0, 20));
        }
        case types_1.pubkeyType.sr25519: {
            if (pubkeyBytes.length !== 32) {
                throw new Error(`Invalid Sr25519 pubkey length: ${pubkeyBytes.length}`);
            }
            const hash = new crypto_1.Sha256(pubkeyBytes).digest();
            return encoding_1.Bech32.encode(prefix, hash.slice(0, 20));
        }
        default:
            throw new Error("Unrecognized public key algorithm");
    }
}
exports.pubkeyToAddress = pubkeyToAddress;
//# sourceMappingURL=address.js.map
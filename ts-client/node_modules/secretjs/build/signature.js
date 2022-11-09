"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encoding_1 = require("@iov/encoding");
const pubkey_1 = require("./pubkey");
const types_1 = require("./types");
/**
 * Takes a binary pubkey and signature to create a signature object
 *
 * @param pubkey a compressed secp256k1 public key
 * @param signature a 64 byte fixed length representation of secp256k1 signature components r and s
 */
function encodeSecp256k1Signature(pubkey, signature) {
    if (signature.length !== 64) {
        throw new Error("Signature must be 64 bytes long. Cosmos SDK uses a 2x32 byte fixed length encoding for the secp256k1 signature integers r and s.");
    }
    return {
        // eslint-disable-next-line @typescript-eslint/camelcase
        pub_key: pubkey_1.encodeSecp256k1Pubkey(pubkey),
        signature: encoding_1.Encoding.toBase64(signature),
    };
}
exports.encodeSecp256k1Signature = encodeSecp256k1Signature;
function decodeSignature(signature) {
    switch (signature.pub_key.type) {
        // Note: please don't add cases here without writing additional unit tests
        case types_1.pubkeyType.secp256k1:
            return {
                pubkey: encoding_1.Encoding.fromBase64(signature.pub_key.value),
                signature: encoding_1.Encoding.fromBase64(signature.signature),
            };
        default:
            throw new Error("Unsupported pubkey type");
    }
}
exports.decodeSignature = decodeSignature;
//# sourceMappingURL=signature.js.map
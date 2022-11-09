"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("@iov/crypto");
const signature_1 = require("./signature");
function prehash(bytes, type) {
    switch (type) {
        case null:
            return new Uint8Array([...bytes]);
        case "sha256":
            return new crypto_1.Sha256(bytes).digest();
        case "sha512":
            return new crypto_1.Sha512(bytes).digest();
        default:
            throw new Error("Unknown prehash type");
    }
}
/**
 * The Cosmoshub derivation path in the form `m/44'/118'/0'/0/a`
 * with 0-based account index `a`.
 * The Secret Network derivation path in the form `m/44'/529'/0'/0/a`
 * with 0-based account index `a`.
 */
function makeSecretNetworkPath(a) {
    return [
        crypto_1.Slip10RawIndex.hardened(44),
        crypto_1.Slip10RawIndex.hardened(529),
        crypto_1.Slip10RawIndex.hardened(0),
        crypto_1.Slip10RawIndex.normal(0),
        crypto_1.Slip10RawIndex.normal(a),
    ];
}
exports.makeSecretNetworkPath = makeSecretNetworkPath;
class Secp256k1Pen {
    constructor(privkey, pubkey) {
        this.privkey = privkey;
        this.pubkey = pubkey;
    }
    static async fromMnemonic(mnemonic, hdPath = makeSecretNetworkPath(0)) {
        const seed = await crypto_1.Bip39.mnemonicToSeed(new crypto_1.EnglishMnemonic(mnemonic));
        const { privkey } = crypto_1.Slip10.derivePath(crypto_1.Slip10Curve.Secp256k1, seed, hdPath);
        const uncompressed = (await crypto_1.Secp256k1.makeKeypair(privkey)).pubkey;
        return new Secp256k1Pen(privkey, crypto_1.Secp256k1.compressPubkey(uncompressed));
    }
    /**
     * Creates and returns a signature
     */
    async sign(signBytes, prehashType = "sha256") {
        const message = prehash(signBytes, prehashType);
        const signature = await crypto_1.Secp256k1.createSignature(message, this.privkey);
        const fixedLengthSignature = new Uint8Array([...signature.r(32), ...signature.s(32)]);
        return signature_1.encodeSecp256k1Signature(this.pubkey, fixedLengthSignature);
    }
}
exports.Secp256k1Pen = Secp256k1Pen;
//# sourceMappingURL=pen.js.map
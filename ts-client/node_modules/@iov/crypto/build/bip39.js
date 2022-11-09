"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const encoding_1 = require("@iov/encoding");
const bip39 = __importStar(require("bip39"));
const pbkdf2_1 = require("pbkdf2");
const unorm = __importStar(require("unorm"));
const englishmnemonic_1 = require("./englishmnemonic");
class Bip39 {
    static encode(entropy) {
        const allowedEntropyLengths = [16, 20, 24, 28, 32];
        if (allowedEntropyLengths.indexOf(entropy.length) === -1) {
            throw new Error("invalid input length");
        }
        return new englishmnemonic_1.EnglishMnemonic(bip39.entropyToMnemonic(encoding_1.Encoding.toHex(entropy)));
    }
    static decode(mnemonic) {
        return encoding_1.Encoding.fromHex(bip39.mnemonicToEntropy(mnemonic.toString()));
    }
    static async mnemonicToSeed(mnemonic, password) {
        // reimplementation of bip39.mnemonicToSeed using the asynchronous
        // interface of https://www.npmjs.com/package/pbkdf2
        const mnemonicBytes = Buffer.from(unorm.nfkd(mnemonic.toString()), "utf8");
        const salt = "mnemonic" + (password ? unorm.nfkd(password) : "");
        const saltBytes = Buffer.from(salt, "utf8");
        return this.pbkdf2(mnemonicBytes, saltBytes, 2048, 64, "sha512");
    }
    // convert pbkdf2's calllback interface to Promise interface
    static async pbkdf2(secret, salt, iterations, keylen, digest) {
        return new Promise((resolve, reject) => {
            pbkdf2_1.pbkdf2(secret, salt, iterations, keylen, digest, (err, derivedKey) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(new Uint8Array(derivedKey));
                }
            });
        });
    }
}
exports.Bip39 = Bip39;
//# sourceMappingURL=bip39.js.map
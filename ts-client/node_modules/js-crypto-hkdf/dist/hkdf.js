"use strict";
/**
 * hkdf.js
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var params_1 = __importDefault(require("./params"));
var util = __importStar(require("js-crypto-env"));
var js_crypto_random_1 = __importDefault(require("js-crypto-random"));
var js_crypto_hmac_1 = __importDefault(require("js-crypto-hmac"));
var js_encoding_utils_1 = __importDefault(require("js-encoding-utils"));
/**
 * Hash-based Key Derivation Function computing from given master secret and salt.
 * If salt is not given, salt would be automatically generated inside.
 * Specification is given in RFC5869 {@link https://tools.ietf.org/html/rfc5869}.
 * @param {Uint8Array} master - Master secret to derive the key.
 * @param {String} [hash='SHA-256] - Name of hash algorithm used to derive the key.
 * @param {Number} [length = 32] - Intended length of derived key.
 * @param {String} [info=''] - String for information field of HKDF.
 * @param {Uint8Array} [salt=null] - Byte array of salt.
 * @return {Promise<{key: Uint8Array, salt: Uint8Array}>} - Derived key and salt used to derive the key.
 */
exports.compute = function (master, hash, length, info, salt) {
    if (hash === void 0) { hash = 'SHA-256'; }
    if (length === void 0) { length = 32; }
    if (info === void 0) { info = ''; }
    if (salt === void 0) { salt = null; }
    return __awaiter(void 0, void 0, void 0, function () {
        var env, key, masterObj, hkdfCtrParams, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    env = util.getCrypto();
                    if (!salt)
                        salt = js_crypto_random_1.default.getRandomBytes(length);
                    if (!(env.name === 'webCrypto' && typeof env.crypto.importKey === 'function' && typeof env.crypto.deriveBits === 'function')) return [3 /*break*/, 7];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 6]);
                    return [4 /*yield*/, env.crypto.importKey('raw', master, { name: 'HKDF' }, false, ['deriveKey', 'deriveBits'])];
                case 2:
                    masterObj = _a.sent();
                    hkdfCtrParams = { name: 'HKDF', salt: salt, info: js_encoding_utils_1.default.encoder.stringToArrayBuffer(info), hash: hash };
                    return [4 /*yield*/, env.crypto.deriveBits(hkdfCtrParams, masterObj, length * 8)];
                case 3:
                    key = _a.sent();
                    key = new Uint8Array(key);
                    return [3 /*break*/, 6];
                case 4:
                    e_1 = _a.sent();
                    return [4 /*yield*/, rfc5869(master, hash, length, info, salt)];
                case 5:
                    key = _a.sent();
                    return [3 /*break*/, 6];
                case 6: return [3 /*break*/, 9];
                case 7: return [4 /*yield*/, rfc5869(master, hash, length, info, salt)];
                case 8:
                    key = _a.sent();
                    _a.label = 9;
                case 9: return [2 /*return*/, { key: key, salt: salt }];
            }
        });
    });
};
/**
 * Naive implementation of RFC5869 in PureJavaScript
 * @param {Uint8Array} master - Master secret to derive the key.
 * @param {String} hash - Name of hash algorithm used to derive the key.
 * @param {Number} length - Intended length of derived key.
 * @param {String} info - String for information field of HKDF.
 * @param {Uint8Array} salt - Byte array of salt.
 * @return {Promise<Uint8Array>} - Derived key.
 */
var rfc5869 = function (master, hash, length, info, salt) { return __awaiter(void 0, void 0, void 0, function () {
    var len, prk, t, okm, uintInfo, i, concat;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                len = params_1.default.hashes[hash].hashSize;
                return [4 /*yield*/, js_crypto_hmac_1.default.compute(salt, master, hash)];
            case 1:
                prk = _a.sent();
                t = new Uint8Array([]);
                okm = new Uint8Array(Math.ceil(length / len) * len);
                uintInfo = js_encoding_utils_1.default.encoder.stringToArrayBuffer(info);
                i = 0;
                _a.label = 2;
            case 2:
                if (!(i < Math.ceil(length / len))) return [3 /*break*/, 5];
                concat = new Uint8Array(t.length + uintInfo.length + 1);
                concat.set(t);
                concat.set(uintInfo, t.length);
                concat.set(new Uint8Array([i + 1]), t.length + uintInfo.length);
                return [4 /*yield*/, js_crypto_hmac_1.default.compute(prk, concat, hash)];
            case 3:
                t = _a.sent();
                okm.set(t, len * i);
                _a.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 2];
            case 5: return [2 /*return*/, okm.slice(0, length)];
        }
    });
}); };
//# sourceMappingURL=hkdf.js.map
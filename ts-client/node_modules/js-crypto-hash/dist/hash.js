"use strict";
/**
 * hash.js
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var util = __importStar(require("js-crypto-env"));
var params_1 = __importDefault(require("./params"));
var md5_1 = __importDefault(require("md5"));
var sha3_1 = require("sha3");
var hash_js_1 = __importDefault(require("hash.js"));
/**
 * Compute Hash value.
 * @param {Uint8Array} msg - Byte array of message to be hashed.
 * @param {HashTypes} [hash = 'SHA-256'] - Name of hash algorithm like 'SHA-256'.
 * @return {Promise<Uint8Array>} - Hash value
 * @throws {Error} - Throws if UnsupportedHashAlgorithm, UnsupportedMessageType,
 *  or UnsupportedEnvironment, i.e., a case where even pure js implementation won't work.
 */
exports.compute = function (msg, hash) {
    if (hash === void 0) { hash = 'SHA-256'; }
    return __awaiter(void 0, void 0, void 0, function () {
        var env, msgHash, errMsg, native, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    env = util.getCrypto();
                    native = true;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 8, , 9]);
                    if (!(env.name === 'webCrypto' && typeof env.crypto.digest === 'function')) return [3 /*break*/, 3];
                    return [4 /*yield*/, env.crypto.digest(hash, msg)];
                case 2:
                    msgHash = _a.sent();
                    return [3 /*break*/, 7];
                case 3:
                    if (!(env.name === 'nodeCrypto')) return [3 /*break*/, 4];
                    msgHash = nodedigest(hash, msg, env.crypto);
                    return [3 /*break*/, 7];
                case 4:
                    if (!(env.name === 'msCrypto' && typeof env.crypto.digest === 'function')) return [3 /*break*/, 6];
                    return [4 /*yield*/, msdigest(hash, msg, env.crypto)];
                case 5:
                    msgHash = _a.sent();
                    return [3 /*break*/, 7];
                case 6:
                    native = false;
                    _a.label = 7;
                case 7: return [3 /*break*/, 9];
                case 8:
                    e_1 = _a.sent();
                    errMsg = e_1.message;
                    native = false;
                    return [3 /*break*/, 9];
                case 9:
                    if (!native) {
                        try {
                            msgHash = purejs(hash, msg);
                        }
                        catch (e) {
                            errMsg = ((typeof errMsg === 'undefined') ? '' : errMsg) + " => " + e.message;
                            throw new Error("UnsupportedEnvironment: " + errMsg);
                        }
                    }
                    return [2 /*return*/, new Uint8Array(msgHash)];
            }
        });
    });
};
/**
 * Compute hash using MsCrypto implementation
 * @param {HashTypes} hash - Name of hash algorithm like SHA-256
 * @param {Uint8Array} msg - Byte array of message to be hashed.
 * @param {Object} msCrypto - msCrypto object.
 * @return {Promise<Uint8Array>} - Hash value.
 * @throws {Error} - Throws if hashing failed.
 */
var msdigest = function (hash, msg, msCrypto) { return new Promise(function (resolve, reject) {
    var op = msCrypto.digest(hash, msg);
    op.oncomplete = function (evt) {
        resolve(evt.target.result);
    };
    op.onerror = function (e) {
        reject(e);
    };
}); };
/**
 * Compute hash using Node.js implementation
 * @param {String} hash - Name of hash algorithm like SHA-256
 * @param {Uint8Array} msg - Byte array of message to be hashed.
 * @param {Object} nodeCrypto - Node.js crypto object.
 * @return {Uint8Array} - Hash value.
 */
var nodedigest = function (hash, msg, nodeCrypto) {
    var alg = params_1.default.hashes[hash].nodeName;
    var hashFunc = nodeCrypto.createHash(alg);
    hashFunc.update(msg);
    return hashFunc.digest();
};
/**
 * Compute hash using pure js implementations
 * @param {String} hash - Name of hash algorithm like SHA-256
 * @param {Uint8Array} msg - Byte array of message to be hashed.
 * @return {Uint8Array} - Hash value.
 */
var purejs = function (hash, msg) {
    var h;
    if (hash === 'MD5') {
        h = md5_1.default(Array.from(msg), { asBytes: true });
    }
    else if (['SHA3-512', 'SHA3-384', 'SHA3-256', 'SHA3-224'].indexOf(hash) >= 0) {
        // sha3
        var sha3Len = params_1.default.hashes[hash].hashSize * 8;
        var sha3obj = new sha3_1.SHA3(sha3Len);
        var Buffer_1 = require('buffer/').Buffer;
        sha3obj.update(Buffer_1.from(msg));
        h = sha3obj.digest('binary');
    }
    else {
        // @ts-ignore
        h = hash_js_1.default[params_1.default.hashes[hash].nodeName]().update(msg).digest();
    }
    return new Uint8Array(h);
};
//# sourceMappingURL=hash.js.map
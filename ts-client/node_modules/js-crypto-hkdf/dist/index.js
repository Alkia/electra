"use strict";
/**
 * index.js
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var hkdf = __importStar(require("./hkdf"));
var nist = __importStar(require("./nist-concat-kdf"));
exports.compute = hkdf.compute;
exports.nistConcatKdf = nist.nistConcatKdf;
exports.default = { compute: exports.compute, nistConcatKdf: exports.nistConcatKdf };
//# sourceMappingURL=index.js.map
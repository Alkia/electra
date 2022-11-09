"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encoding_1 = require("@iov/encoding");
const types_1 = require("./types");
function unmarshalTx(data) {
    const decoded = JSON.parse(encoding_1.Encoding.fromUtf8(data));
    if (!types_1.isStdTx(decoded)) {
        throw new Error("Must be json encoded StdTx");
    }
    return decoded;
}
exports.unmarshalTx = unmarshalTx;
//# sourceMappingURL=decoding.js.map
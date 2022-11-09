"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encoding_1 = require("@iov/encoding");
const { toUtf8 } = encoding_1.Encoding;
function sortJson(json) {
    if (typeof json !== "object" || json === null) {
        return json;
    }
    if (Array.isArray(json)) {
        return json.map(sortJson);
    }
    const sortedKeys = Object.keys(json).sort();
    const result = sortedKeys.reduce((accumulator, key) => (Object.assign(Object.assign({}, accumulator), { [key]: sortJson(json[key]) })), {});
    return result;
}
function marshalTx(tx) {
    const json = JSON.stringify(tx);
    return encoding_1.Encoding.toUtf8(json);
}
exports.marshalTx = marshalTx;
function makeSignBytes(msgs, fee, chainId, memo, accountNumber, sequence) {
    const signJson = {
        // eslint-disable-next-line @typescript-eslint/camelcase
        account_number: accountNumber.toString(),
        // eslint-disable-next-line @typescript-eslint/camelcase
        chain_id: chainId,
        fee: fee,
        memo: memo,
        msgs: msgs,
        sequence: sequence.toString(),
    };
    const signMsg = sortJson(signJson);
    return toUtf8(JSON.stringify(signMsg));
}
exports.makeSignBytes = makeSignBytes;
//# sourceMappingURL=encoding.js.map
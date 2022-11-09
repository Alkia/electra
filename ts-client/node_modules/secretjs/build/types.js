"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encoding_1 = require("@iov/encoding");
const { fromBase64, fromHex } = encoding_1.Encoding;
function isStdTx(txValue) {
    const { memo, msg, fee, signatures } = txValue;
    return (typeof memo === "string" && Array.isArray(msg) && typeof fee === "object" && Array.isArray(signatures));
}
exports.isStdTx = isStdTx;
function isMsgSend(msg) {
    return msg.type === "cosmos-sdk/MsgSend";
}
exports.isMsgSend = isMsgSend;
function isMsgStoreCode(msg) {
    return msg.type === "wasm/MsgStoreCode";
}
exports.isMsgStoreCode = isMsgStoreCode;
function isMsgInstantiateContract(msg) {
    return msg.type === "wasm/MsgInstantiateContract";
}
exports.isMsgInstantiateContract = isMsgInstantiateContract;
function isMsgExecuteContract(msg) {
    return msg.type === "wasm/MsgExecuteContract";
}
exports.isMsgExecuteContract = isMsgExecuteContract;
function extractContractMsg(msg) {
    if (msg.type === "wasm/MsgExecuteContract") {
        return encoding_1.Encoding.fromBase64(msg.value.msg);
    } /*  if (msg.type === "wasm/MsgInstantiateContract")  */
    else {
        return encoding_1.Encoding.fromBase64(msg.value.init_msg);
    }
}
exports.extractContractMsg = extractContractMsg;
exports.pubkeyType = {
    /** @see https://github.com/tendermint/tendermint/blob/v0.33.0/crypto/ed25519/ed25519.go#L22 */
    secp256k1: "tendermint/PubKeySecp256k1",
    /** @see https://github.com/tendermint/tendermint/blob/v0.33.0/crypto/secp256k1/secp256k1.go#L23 */
    ed25519: "tendermint/PubKeyEd25519",
    /** @see https://github.com/tendermint/tendermint/blob/v0.33.0/crypto/sr25519/codec.go#L12 */
    sr25519: "tendermint/PubKeySr25519",
};
exports.pubkeyTypes = [exports.pubkeyType.secp256k1, exports.pubkeyType.ed25519, exports.pubkeyType.sr25519];
function parseWasmData({ key, val }) {
    return {
        key: fromHex(key),
        val: fromBase64(val),
    };
}
exports.parseWasmData = parseWasmData;
//# sourceMappingURL=types.js.map
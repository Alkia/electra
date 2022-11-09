"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BroadcastMode = void 0;
/**
 * The mode used to send transaction
 *
 * @see https://cosmos.network/rpc/#/Transactions/post_txs
 */
var BroadcastMode;
(function (BroadcastMode) {
    /** Return after tx commit */
    BroadcastMode["Block"] = "block";
    /** Return after CheckTx */
    BroadcastMode["Sync"] = "sync";
    /** Return right away */
    BroadcastMode["Async"] = "async";
})(BroadcastMode = exports.BroadcastMode || (exports.BroadcastMode = {}));
//# sourceMappingURL=base.js.map
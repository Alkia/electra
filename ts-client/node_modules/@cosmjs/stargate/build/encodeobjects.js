"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMsgVoteEncodeObject = exports.isMsgSubmitProposalEncodeObject = exports.isMsgDepositEncodeObject = exports.isMsgTransferEncodeObject = exports.isMsgWithdrawDelegatorRewardEncodeObject = exports.isMsgUndelegateEncodeObject = exports.isMsgDelegateEncodeObject = exports.isMsgSendEncodeObject = void 0;
function isMsgSendEncodeObject(encodeObject) {
    return encodeObject.typeUrl === "/cosmos.bank.v1beta1.MsgSend";
}
exports.isMsgSendEncodeObject = isMsgSendEncodeObject;
function isMsgDelegateEncodeObject(encodeObject) {
    return encodeObject.typeUrl === "/cosmos.staking.v1beta1.MsgDelegate";
}
exports.isMsgDelegateEncodeObject = isMsgDelegateEncodeObject;
function isMsgUndelegateEncodeObject(encodeObject) {
    return encodeObject.typeUrl === "/cosmos.staking.v1beta1.MsgUndelegate";
}
exports.isMsgUndelegateEncodeObject = isMsgUndelegateEncodeObject;
function isMsgWithdrawDelegatorRewardEncodeObject(encodeObject) {
    return (encodeObject.typeUrl ===
        "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward");
}
exports.isMsgWithdrawDelegatorRewardEncodeObject = isMsgWithdrawDelegatorRewardEncodeObject;
function isMsgTransferEncodeObject(encodeObject) {
    return encodeObject.typeUrl === "/ibc.applications.transfer.v1.MsgTransfer";
}
exports.isMsgTransferEncodeObject = isMsgTransferEncodeObject;
function isMsgDepositEncodeObject(encodeObject) {
    return encodeObject.typeUrl === "/cosmos.gov.v1beta1.MsgDeposit";
}
exports.isMsgDepositEncodeObject = isMsgDepositEncodeObject;
function isMsgSubmitProposalEncodeObject(encodeObject) {
    return encodeObject.typeUrl === "/cosmos.gov.v1beta1.MsgSubmitProposal";
}
exports.isMsgSubmitProposalEncodeObject = isMsgSubmitProposalEncodeObject;
function isMsgVoteEncodeObject(encodeObject) {
    return encodeObject.typeUrl === "/cosmos.gov.v1beta1.MsgVote";
}
exports.isMsgVoteEncodeObject = isMsgVoteEncodeObject;
//# sourceMappingURL=encodeobjects.js.map
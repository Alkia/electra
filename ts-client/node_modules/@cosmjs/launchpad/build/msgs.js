"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMsgUndelegate = exports.isMsgBeginRedelegate = exports.isMsgDelegate = exports.isMsgEditValidator = exports.isMsgCreateValidator = exports.isMsgUnjail = exports.isMsgDeposit = exports.isMsgVote = exports.isMsgSubmitProposal = exports.isMsgSubmitEvidence = exports.isMsgFundCommunityPool = exports.isMsgWithdrawValidatorCommission = exports.isMsgWithdrawDelegatorReward = exports.isMsgSetWithdrawAddress = exports.isMsgVerifyInvariant = exports.isMsgMultiSend = exports.isMsgSend = void 0;
function isMsgSend(msg) {
    return msg.type === "cosmos-sdk/MsgSend";
}
exports.isMsgSend = isMsgSend;
function isMsgMultiSend(msg) {
    return msg.type === "cosmos-sdk/MsgMultiSend";
}
exports.isMsgMultiSend = isMsgMultiSend;
function isMsgVerifyInvariant(msg) {
    return msg.type === "cosmos-sdk/MsgVerifyInvariant";
}
exports.isMsgVerifyInvariant = isMsgVerifyInvariant;
function isMsgSetWithdrawAddress(msg) {
    // NOTE: Type string and names diverge here!
    return msg.type === "cosmos-sdk/MsgModifyWithdrawAddress";
}
exports.isMsgSetWithdrawAddress = isMsgSetWithdrawAddress;
function isMsgWithdrawDelegatorReward(msg) {
    // NOTE: Type string and names diverge here!
    return msg.type === "cosmos-sdk/MsgWithdrawDelegationReward";
}
exports.isMsgWithdrawDelegatorReward = isMsgWithdrawDelegatorReward;
function isMsgWithdrawValidatorCommission(msg) {
    return msg.type === "cosmos-sdk/MsgWithdrawValidatorCommission";
}
exports.isMsgWithdrawValidatorCommission = isMsgWithdrawValidatorCommission;
function isMsgFundCommunityPool(msg) {
    return msg.type === "cosmos-sdk/MsgFundCommunityPool";
}
exports.isMsgFundCommunityPool = isMsgFundCommunityPool;
function isMsgSubmitEvidence(msg) {
    return msg.type === "cosmos-sdk/MsgSubmitEvidence";
}
exports.isMsgSubmitEvidence = isMsgSubmitEvidence;
function isMsgSubmitProposal(msg) {
    return msg.type === "cosmos-sdk/MsgSubmitProposal";
}
exports.isMsgSubmitProposal = isMsgSubmitProposal;
var VoteOption;
(function (VoteOption) {
    VoteOption[VoteOption["VoteOptionUnspecified"] = 0] = "VoteOptionUnspecified";
    VoteOption[VoteOption["VoteOptionYes"] = 1] = "VoteOptionYes";
    VoteOption[VoteOption["VoteOptionAbstain"] = 2] = "VoteOptionAbstain";
    VoteOption[VoteOption["VoteOptionNo"] = 3] = "VoteOptionNo";
    VoteOption[VoteOption["VoteOptionNoWithVeto"] = 4] = "VoteOptionNoWithVeto";
})(VoteOption || (VoteOption = {}));
function isMsgVote(msg) {
    return msg.type === "cosmos-sdk/MsgVote";
}
exports.isMsgVote = isMsgVote;
function isMsgDeposit(msg) {
    return msg.type === "cosmos-sdk/MsgDeposit";
}
exports.isMsgDeposit = isMsgDeposit;
function isMsgUnjail(msg) {
    return msg.type === "cosmos-sdk/MsgUnjail";
}
exports.isMsgUnjail = isMsgUnjail;
function isMsgCreateValidator(msg) {
    return msg.type === "cosmos-sdk/MsgCreateValidator";
}
exports.isMsgCreateValidator = isMsgCreateValidator;
function isMsgEditValidator(msg) {
    return msg.type === "cosmos-sdk/MsgEditValidator";
}
exports.isMsgEditValidator = isMsgEditValidator;
function isMsgDelegate(msg) {
    return msg.type === "cosmos-sdk/MsgDelegate";
}
exports.isMsgDelegate = isMsgDelegate;
function isMsgBeginRedelegate(msg) {
    return msg.type === "cosmos-sdk/MsgBeginRedelegate";
}
exports.isMsgBeginRedelegate = isMsgBeginRedelegate;
function isMsgUndelegate(msg) {
    return msg.type === "cosmos-sdk/MsgUndelegate";
}
exports.isMsgUndelegate = isMsgUndelegate;
// upgrade (no messages) - see https://github.com/cosmos/cosmos-sdk/blob/efa73c7/proto/cosmos/upgrade/upgrade.proto
//# sourceMappingURL=msgs.js.map
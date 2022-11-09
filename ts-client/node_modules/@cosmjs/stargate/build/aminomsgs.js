"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAminoMsgTransfer = exports.isAminoMsgUndelegate = exports.isAminoMsgBeginRedelegate = exports.isAminoMsgDelegate = exports.isAminoMsgEditValidator = exports.isAminoMsgCreateValidator = exports.isAminoMsgUnjail = exports.isAminoMsgDeposit = exports.isAminoMsgVote = exports.isAminoMsgSubmitProposal = exports.isAminoMsgSubmitEvidence = exports.isAminoMsgFundCommunityPool = exports.isAminoMsgWithdrawValidatorCommission = exports.isAminoMsgWithdrawDelegatorReward = exports.isAminoMsgSetWithdrawAddress = exports.isAminoMsgVerifyInvariant = exports.isAminoMsgMultiSend = exports.isAminoMsgSend = void 0;
function isAminoMsgSend(msg) {
    return msg.type === "cosmos-sdk/MsgSend";
}
exports.isAminoMsgSend = isAminoMsgSend;
function isAminoMsgMultiSend(msg) {
    return msg.type === "cosmos-sdk/MsgMultiSend";
}
exports.isAminoMsgMultiSend = isAminoMsgMultiSend;
function isAminoMsgVerifyInvariant(msg) {
    return msg.type === "cosmos-sdk/MsgVerifyInvariant";
}
exports.isAminoMsgVerifyInvariant = isAminoMsgVerifyInvariant;
function isAminoMsgSetWithdrawAddress(msg) {
    // NOTE: Type string and names diverge here!
    return msg.type === "cosmos-sdk/MsgModifyWithdrawAddress";
}
exports.isAminoMsgSetWithdrawAddress = isAminoMsgSetWithdrawAddress;
function isAminoMsgWithdrawDelegatorReward(msg) {
    // NOTE: Type string and names diverge here!
    return msg.type === "cosmos-sdk/MsgWithdrawDelegationReward";
}
exports.isAminoMsgWithdrawDelegatorReward = isAminoMsgWithdrawDelegatorReward;
function isAminoMsgWithdrawValidatorCommission(msg) {
    return msg.type === "cosmos-sdk/MsgWithdrawValidatorCommission";
}
exports.isAminoMsgWithdrawValidatorCommission = isAminoMsgWithdrawValidatorCommission;
function isAminoMsgFundCommunityPool(msg) {
    return msg.type === "cosmos-sdk/MsgFundCommunityPool";
}
exports.isAminoMsgFundCommunityPool = isAminoMsgFundCommunityPool;
function isAminoMsgSubmitEvidence(msg) {
    return msg.type === "cosmos-sdk/MsgSubmitEvidence";
}
exports.isAminoMsgSubmitEvidence = isAminoMsgSubmitEvidence;
function isAminoMsgSubmitProposal(msg) {
    return msg.type === "cosmos-sdk/MsgSubmitProposal";
}
exports.isAminoMsgSubmitProposal = isAminoMsgSubmitProposal;
function isAminoMsgVote(msg) {
    return msg.type === "cosmos-sdk/MsgVote";
}
exports.isAminoMsgVote = isAminoMsgVote;
function isAminoMsgDeposit(msg) {
    return msg.type === "cosmos-sdk/MsgDeposit";
}
exports.isAminoMsgDeposit = isAminoMsgDeposit;
function isAminoMsgUnjail(msg) {
    return msg.type === "cosmos-sdk/MsgUnjail";
}
exports.isAminoMsgUnjail = isAminoMsgUnjail;
function isAminoMsgCreateValidator(msg) {
    return msg.type === "cosmos-sdk/MsgCreateValidator";
}
exports.isAminoMsgCreateValidator = isAminoMsgCreateValidator;
function isAminoMsgEditValidator(msg) {
    return msg.type === "cosmos-sdk/MsgEditValidator";
}
exports.isAminoMsgEditValidator = isAminoMsgEditValidator;
function isAminoMsgDelegate(msg) {
    return msg.type === "cosmos-sdk/MsgDelegate";
}
exports.isAminoMsgDelegate = isAminoMsgDelegate;
function isAminoMsgBeginRedelegate(msg) {
    return msg.type === "cosmos-sdk/MsgBeginRedelegate";
}
exports.isAminoMsgBeginRedelegate = isAminoMsgBeginRedelegate;
function isAminoMsgUndelegate(msg) {
    return msg.type === "cosmos-sdk/MsgUndelegate";
}
exports.isAminoMsgUndelegate = isAminoMsgUndelegate;
function isAminoMsgTransfer(msg) {
    return msg.type === "cosmos-sdk/MsgTransfer";
}
exports.isAminoMsgTransfer = isAminoMsgTransfer;
//# sourceMappingURL=aminomsgs.js.map
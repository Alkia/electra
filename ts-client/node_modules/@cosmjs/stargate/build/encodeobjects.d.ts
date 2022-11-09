import { EncodeObject } from "@cosmjs/proto-signing";
import { MsgSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { MsgWithdrawDelegatorReward } from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import { MsgDeposit, MsgSubmitProposal, MsgVote } from "cosmjs-types/cosmos/gov/v1beta1/tx";
import { MsgDelegate, MsgUndelegate } from "cosmjs-types/cosmos/staking/v1beta1/tx";
import { MsgTransfer } from "cosmjs-types/ibc/applications/transfer/v1/tx";
export interface MsgSendEncodeObject extends EncodeObject {
    readonly typeUrl: "/cosmos.bank.v1beta1.MsgSend";
    readonly value: Partial<MsgSend>;
}
export declare function isMsgSendEncodeObject(encodeObject: EncodeObject): encodeObject is MsgSendEncodeObject;
export interface MsgDelegateEncodeObject extends EncodeObject {
    readonly typeUrl: "/cosmos.staking.v1beta1.MsgDelegate";
    readonly value: Partial<MsgDelegate>;
}
export declare function isMsgDelegateEncodeObject(encodeObject: EncodeObject): encodeObject is MsgDelegateEncodeObject;
export interface MsgUndelegateEncodeObject extends EncodeObject {
    readonly typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate";
    readonly value: Partial<MsgUndelegate>;
}
export declare function isMsgUndelegateEncodeObject(encodeObject: EncodeObject): encodeObject is MsgUndelegateEncodeObject;
export interface MsgWithdrawDelegatorRewardEncodeObject extends EncodeObject {
    readonly typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
    readonly value: Partial<MsgWithdrawDelegatorReward>;
}
export declare function isMsgWithdrawDelegatorRewardEncodeObject(encodeObject: EncodeObject): encodeObject is MsgWithdrawDelegatorRewardEncodeObject;
export interface MsgTransferEncodeObject extends EncodeObject {
    readonly typeUrl: "/ibc.applications.transfer.v1.MsgTransfer";
    readonly value: Partial<MsgTransfer>;
}
export declare function isMsgTransferEncodeObject(encodeObject: EncodeObject): encodeObject is MsgTransferEncodeObject;
export interface MsgDepositEncodeObject extends EncodeObject {
    readonly typeUrl: "/cosmos.gov.v1beta1.MsgDeposit";
    readonly value: Partial<MsgDeposit>;
}
export declare function isMsgDepositEncodeObject(encodeObject: EncodeObject): encodeObject is MsgSubmitProposalEncodeObject;
export interface MsgSubmitProposalEncodeObject extends EncodeObject {
    readonly typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal";
    readonly value: Partial<MsgSubmitProposal>;
}
export declare function isMsgSubmitProposalEncodeObject(encodeObject: EncodeObject): encodeObject is MsgSubmitProposalEncodeObject;
export interface MsgVoteEncodeObject extends EncodeObject {
    readonly typeUrl: "/cosmos.gov.v1beta1.MsgVote";
    readonly value: Partial<MsgVote>;
}
export declare function isMsgVoteEncodeObject(encodeObject: EncodeObject): encodeObject is MsgVoteEncodeObject;

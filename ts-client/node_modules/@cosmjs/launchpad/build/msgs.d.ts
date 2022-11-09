import { AminoMsg, Coin } from "@cosmjs/amino";
/** A high level transaction of the coin module */
export interface MsgSend extends AminoMsg {
    readonly type: "cosmos-sdk/MsgSend";
    readonly value: {
        /** Bech32 account address */
        readonly from_address: string;
        /** Bech32 account address */
        readonly to_address: string;
        readonly amount: readonly Coin[];
    };
}
export declare function isMsgSend(msg: AminoMsg): msg is MsgSend;
interface Input {
    /** Bech32 account address */
    readonly address: string;
    readonly coins: readonly Coin[];
}
interface Output {
    /** Bech32 account address */
    readonly address: string;
    readonly coins: readonly Coin[];
}
/** A high level transaction of the coin module */
export interface MsgMultiSend extends AminoMsg {
    readonly type: "cosmos-sdk/MsgMultiSend";
    readonly value: {
        readonly inputs: readonly Input[];
        readonly outputs: readonly Output[];
    };
}
export declare function isMsgMultiSend(msg: AminoMsg): msg is MsgMultiSend;
/** Verifies a particular invariance */
export interface MsgVerifyInvariant extends AminoMsg {
    readonly type: "cosmos-sdk/MsgVerifyInvariant";
    readonly value: {
        /** Bech32 account address */
        readonly sender: string;
        readonly invariant_module_name: string;
        readonly invariant_route: string;
    };
}
export declare function isMsgVerifyInvariant(msg: AminoMsg): msg is MsgVerifyInvariant;
/** Changes the withdraw address for a delegator (or validator self-delegation) */
export interface MsgSetWithdrawAddress extends AminoMsg {
    readonly type: "cosmos-sdk/MsgModifyWithdrawAddress";
    readonly value: {
        /** Bech32 account address */
        readonly delegator_address: string;
        /** Bech32 account address */
        readonly withdraw_address: string;
    };
}
export declare function isMsgSetWithdrawAddress(msg: AminoMsg): msg is MsgSetWithdrawAddress;
/** Message for delegation withdraw from a single validator */
export interface MsgWithdrawDelegatorReward extends AminoMsg {
    readonly type: "cosmos-sdk/MsgWithdrawDelegationReward";
    readonly value: {
        /** Bech32 account address */
        readonly delegator_address: string;
        /** Bech32 account address */
        readonly validator_address: string;
    };
}
export declare function isMsgWithdrawDelegatorReward(msg: AminoMsg): msg is MsgWithdrawDelegatorReward;
/** Message for validator withdraw */
export interface MsgWithdrawValidatorCommission extends AminoMsg {
    readonly type: "cosmos-sdk/MsgWithdrawValidatorCommission";
    readonly value: {
        /** Bech32 account address */
        readonly validator_address: string;
    };
}
export declare function isMsgWithdrawValidatorCommission(msg: AminoMsg): msg is MsgWithdrawValidatorCommission;
/** Allows an account to directly fund the community pool. */
export interface MsgFundCommunityPool extends AminoMsg {
    readonly type: "cosmos-sdk/MsgFundCommunityPool";
    readonly value: {
        readonly amount: readonly Coin[];
        /** Bech32 account address */
        readonly depositor: string;
    };
}
export declare function isMsgFundCommunityPool(msg: AminoMsg): msg is MsgFundCommunityPool;
interface Any {
    readonly type_url: string;
    readonly value: Uint8Array;
}
/** Supports submitting arbitrary evidence */
export interface MsgSubmitEvidence extends AminoMsg {
    readonly type: "cosmos-sdk/MsgSubmitEvidence";
    readonly value: {
        /** Bech32 account address */
        readonly submitter: string;
        readonly evidence: Any;
    };
}
export declare function isMsgSubmitEvidence(msg: AminoMsg): msg is MsgSubmitEvidence;
/** Supports submitting arbitrary proposal content. */
export interface MsgSubmitProposal extends AminoMsg {
    readonly type: "cosmos-sdk/MsgSubmitProposal";
    readonly value: {
        readonly content: Any;
        readonly initial_deposit: readonly Coin[];
        /** Bech32 account address */
        readonly proposer: string;
    };
}
export declare function isMsgSubmitProposal(msg: AminoMsg): msg is MsgSubmitProposal;
declare enum VoteOption {
    VoteOptionUnspecified = 0,
    VoteOptionYes = 1,
    VoteOptionAbstain = 2,
    VoteOptionNo = 3,
    VoteOptionNoWithVeto = 4
}
/** Casts a vote */
export interface MsgVote extends AminoMsg {
    readonly type: "cosmos-sdk/MsgVote";
    readonly value: {
        readonly proposal_id: number;
        /** Bech32 account address */
        readonly voter: string;
        readonly option: VoteOption;
    };
}
export declare function isMsgVote(msg: AminoMsg): msg is MsgVote;
/** Submits a deposit to an existing proposal */
export interface MsgDeposit extends AminoMsg {
    readonly type: "cosmos-sdk/MsgDeposit";
    readonly value: {
        readonly proposal_id: number;
        /** Bech32 account address */
        readonly depositor: string;
        readonly amount: readonly Coin[];
    };
}
export declare function isMsgDeposit(msg: AminoMsg): msg is MsgDeposit;
/** Unjails a jailed validator */
export interface MsgUnjail extends AminoMsg {
    readonly type: "cosmos-sdk/MsgUnjail";
    readonly value: {
        /** Bech32 account address */
        readonly validator_addr: string;
    };
}
export declare function isMsgUnjail(msg: AminoMsg): msg is MsgUnjail;
/** The initial commission rates to be used for creating a validator */
interface CommissionRates {
    readonly rate: string;
    readonly max_rate: string;
    readonly max_change_rate: string;
}
/** A validator description. */
interface Description {
    readonly moniker: string;
    readonly identity: string;
    readonly website: string;
    readonly security_contact: string;
    readonly details: string;
}
/** Creates a new validator. */
export interface MsgCreateValidator extends AminoMsg {
    readonly type: "cosmos-sdk/MsgCreateValidator";
    readonly value: {
        readonly description: Description;
        readonly commission: CommissionRates;
        readonly min_self_delegation: string;
        /** Bech32 encoded delegator address */
        readonly delegator_address: string;
        /** Bech32 encoded validator address */
        readonly validator_address: string;
        /** Bech32 encoded public key */
        readonly pubkey: string;
        readonly value: Coin;
    };
}
export declare function isMsgCreateValidator(msg: AminoMsg): msg is MsgCreateValidator;
/** Edits an existing validator. */
export interface MsgEditValidator extends AminoMsg {
    readonly type: "cosmos-sdk/MsgEditValidator";
    readonly value: {
        readonly description: Description;
        /** Bech32 encoded validator address */
        readonly validator_address: string;
        readonly commission_rate: string;
        readonly min_self_delegation: string;
    };
}
export declare function isMsgEditValidator(msg: AminoMsg): msg is MsgEditValidator;
/**
 * Performs a delegation from a delegate to a validator.
 *
 * @see https://docs.cosmos.network/master/modules/staking/03_messages.html#msgdelegate
 */
export interface MsgDelegate extends AminoMsg {
    readonly type: "cosmos-sdk/MsgDelegate";
    readonly value: {
        /** Bech32 encoded delegator address */
        readonly delegator_address: string;
        /** Bech32 encoded validator address */
        readonly validator_address: string;
        readonly amount: Coin;
    };
}
export declare function isMsgDelegate(msg: AminoMsg): msg is MsgDelegate;
/** Performs a redelegation from a delegate and source validator to a destination validator */
export interface MsgBeginRedelegate extends AminoMsg {
    readonly type: "cosmos-sdk/MsgBeginRedelegate";
    readonly value: {
        /** Bech32 encoded delegator address */
        readonly delegator_address: string;
        /** Bech32 encoded source validator address */
        readonly validator_src_address: string;
        /** Bech32 encoded destination validator address */
        readonly validator_dst_address: string;
        readonly amount: Coin;
    };
}
export declare function isMsgBeginRedelegate(msg: AminoMsg): msg is MsgBeginRedelegate;
/** Performs an undelegation from a delegate and a validator */
export interface MsgUndelegate extends AminoMsg {
    readonly type: "cosmos-sdk/MsgUndelegate";
    readonly value: {
        /** Bech32 encoded delegator address */
        readonly delegator_address: string;
        /** Bech32 encoded validator address */
        readonly validator_address: string;
        readonly amount: Coin;
    };
}
export declare function isMsgUndelegate(msg: AminoMsg): msg is MsgUndelegate;
export {};

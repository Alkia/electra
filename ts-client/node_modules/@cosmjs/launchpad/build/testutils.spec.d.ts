export declare function makeRandomAddress(): string;
export declare const nonNegativeIntegerMatcher: RegExp;
/** Matches decimals < 1.0 */
export declare const smallDecimalMatcher: RegExp;
/** Matches decimals >= 1.0 */
export declare const bigDecimalMatcher: RegExp;
export declare const tendermintIdMatcher: RegExp;
export declare const tendermintOptionalIdMatcher: RegExp;
export declare const tendermintAddressMatcher: RegExp;
export declare const tendermintShortHashMatcher: RegExp;
export declare const dateTimeStampMatcher: RegExp;
export declare const semverMatcher: RegExp;
/** @see https://rgxdb.com/r/1NUN74O6 */
export declare const base64Matcher: RegExp;
export declare const hexMatcher: RegExp;
export declare const bech32AddressMatcher: RegExp;
export declare const launchpad: {
    endpoint: string;
    chainId: string;
    moniker: string;
    commissionUpdateTime: string;
    validator: {
        pubkey: string;
        address: string;
        delegatorAddress: string;
    };
};
export declare const faucet: {
    mnemonic: string;
    pubkey0: {
        type: string;
        value: string;
    };
    pubkey1: {
        type: string;
        value: string;
    };
    pubkey2: {
        type: string;
        value: string;
    };
    pubkey3: {
        type: string;
        value: string;
    };
    pubkey4: {
        type: string;
        value: string;
    };
    address0: string;
    address1: string;
    address2: string;
    address3: string;
    address4: string;
};
/** Unused account */
export declare const unused: {
    pubkey: {
        type: string;
        value: string;
    };
    address: string;
    accountNumber: number;
    sequence: number;
};
export declare function launchpadEnabled(): boolean;
export declare function pendingWithoutLaunchpad(): void;
/** Returns first element. Throws if array has a different length than 1. */
export declare function fromOneElementArray<T>(elements: ArrayLike<T>): T;

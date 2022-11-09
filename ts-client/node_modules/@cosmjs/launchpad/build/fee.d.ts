import { StdFee } from "@cosmjs/amino";
import { Decimal } from "@cosmjs/math";
export declare type FeeTable = Record<string, StdFee>;
/**
 * A gas price, i.e. the price of a single unit of gas. This is typically a fraction of
 * the smallest fee token unit, such as 0.012utoken.
 */
export declare class GasPrice {
    readonly amount: Decimal;
    readonly denom: string;
    constructor(amount: Decimal, denom: string);
    /**
     * Parses a gas price formatted as `<amount><denom>`, e.g. `GasPrice.fromString("0.012utoken")`.
     *
     * The denom must match the Cosmos SDK 0.39 pattern (https://github.com/cosmos/cosmos-sdk/blob/v0.39.3/types/coin.go#L597-L598).
     * See `GasPrice` in @cosmjs/stargate for a more generic matcher.
     */
    static fromString(gasPrice: string): GasPrice;
}
export declare type GasLimits<T extends Record<string, StdFee>> = {
    readonly [key in keyof T]: number;
};
export declare function buildFeeTable<T extends Record<string, StdFee>>(gasPrice: GasPrice, defaultGasLimits: GasLimits<T>, gasLimits: Partial<GasLimits<T>>): T;

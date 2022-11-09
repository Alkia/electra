import { Coin } from "@cosmjs/amino";
import { LcdClient } from "./lcdclient";
export interface BankBalancesResponse {
    readonly height: string;
    readonly result: readonly Coin[];
}
export interface BankExtension {
    readonly bank: {
        readonly balances: (address: string) => Promise<BankBalancesResponse>;
    };
}
export declare function setupBankExtension(base: LcdClient): BankExtension;

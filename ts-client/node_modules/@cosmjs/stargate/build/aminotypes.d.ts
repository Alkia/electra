import { AminoMsg } from "@cosmjs/amino";
import { EncodeObject } from "@cosmjs/proto-signing";
export interface AminoConverter {
    readonly aminoType: string;
    readonly toAmino: (value: any) => any;
    readonly fromAmino: (value: any) => any;
}
interface AminoTypesOptions {
    readonly additions?: Record<string, AminoConverter>;
    readonly prefix?: string;
}
/**
 * A map from Stargate message types as used in the messages's `Any` type
 * to Amino types.
 */
export declare class AminoTypes {
    private readonly register;
    constructor({ additions, prefix }?: AminoTypesOptions);
    toAmino({ typeUrl, value }: EncodeObject): AminoMsg;
    fromAmino({ type, value }: AminoMsg): EncodeObject;
}
export {};

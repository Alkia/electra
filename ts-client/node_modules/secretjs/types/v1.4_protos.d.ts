import * as _m0 from "protobufjs/minimal";
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponse {
  /** Address is the bech32 address of the new contract instance. */
  address: string;
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}
export declare const MsgInstantiateContractResponse: {
  encode(message: MsgInstantiateContractResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: Uint8Array | _m0.Reader, length?: number | undefined): MsgInstantiateContractResponse;
  fromJSON(object: any): MsgInstantiateContractResponse;
  toJSON(message: MsgInstantiateContractResponse): unknown;
  fromPartial<
    I extends {
      address?: string | undefined;
      data?: Uint8Array | undefined;
    } & {
      address?: string | undefined;
      data?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "data" | "address">, never>,
  >(
    object: I,
  ): MsgInstantiateContractResponse;
};
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponse {
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}
export declare const MsgExecuteContractResponse: {
  encode(message: MsgExecuteContractResponse, writer?: _m0.Writer): _m0.Writer;
  decode(input: Uint8Array | _m0.Reader, length?: number | undefined): MsgExecuteContractResponse;
  fromJSON(object: any): MsgExecuteContractResponse;
  toJSON(message: MsgExecuteContractResponse): unknown;
  fromPartial<
    I extends {
      data?: Uint8Array | undefined;
    } & {
      data?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "data">, never>,
  >(
    object: I,
  ): MsgExecuteContractResponse;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? {
      [K in keyof T]?: DeepPartial<T[K]>;
    }
  : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & {
      [K in keyof P]: Exact<P[K], I[K]>;
    } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */
export interface TxMsgData {
  data: MsgData[];
}
export declare const TxMsgData: {
  encode(message: TxMsgData, writer?: _m0.Writer): _m0.Writer;
  decode(input: Uint8Array | _m0.Reader, length?: number | undefined): TxMsgData;
  fromJSON(object: any): TxMsgData;
  toJSON(message: TxMsgData): unknown;
  fromPartial<
    I extends {
      data?:
        | {
            msgType?: string | undefined;
            data?: Uint8Array | undefined;
          }[]
        | undefined;
    } & {
      data?:
        | ({
            msgType?: string | undefined;
            data?: Uint8Array | undefined;
          }[] &
            ({
              msgType?: string | undefined;
              data?: Uint8Array | undefined;
            } & {
              msgType?: string | undefined;
              data?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["data"][number], "data" | "msgType">, never>)[] &
            Record<
              Exclude<
                keyof I["data"],
                | number
                | "toString"
                | "concat"
                | "indexOf"
                | "lastIndexOf"
                | "slice"
                | "length"
                | "includes"
                | "at"
                | "toLocaleString"
                | "pop"
                | "push"
                | "join"
                | "reverse"
                | "shift"
                | "sort"
                | "splice"
                | "unshift"
                | "every"
                | "some"
                | "forEach"
                | "map"
                | "filter"
                | "reduce"
                | "reduceRight"
                | "find"
                | "findIndex"
                | "fill"
                | "copyWithin"
                | "entries"
                | "keys"
                | "values"
                | "flatMap"
                | "flat"
              >,
              never
            >)
        | undefined;
    } & Record<Exclude<keyof I, "data">, never>,
  >(
    object: I,
  ): TxMsgData;
};
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 */
export interface MsgData {
  msgType: string;
  data: Uint8Array;
}
export declare const MsgData: {
  encode(message: MsgData, writer?: _m0.Writer): _m0.Writer;
  decode(input: Uint8Array | _m0.Reader, length?: number | undefined): MsgData;
  fromJSON(object: any): MsgData;
  toJSON(message: MsgData): unknown;
  fromPartial<
    I extends {
      msgType?: string | undefined;
      data?: Uint8Array | undefined;
    } & {
      msgType?: string | undefined;
      data?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "data" | "msgType">, never>,
  >(
    object: I,
  ): MsgData;
};
export {};

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "electra.meter";

/** Params defines the parameters for the module. */
export interface Params {
  maxBillingIteration: number;
  moduleParamBestForCustomer: boolean;
  payAutomatically: boolean;
  billingAdmin: string;
}

function createBaseParams(): Params {
  return { maxBillingIteration: 0, moduleParamBestForCustomer: false, payAutomatically: false, billingAdmin: "" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxBillingIteration !== 0) {
      writer.uint32(8).uint64(message.maxBillingIteration);
    }
    if (message.moduleParamBestForCustomer === true) {
      writer.uint32(16).bool(message.moduleParamBestForCustomer);
    }
    if (message.payAutomatically === true) {
      writer.uint32(24).bool(message.payAutomatically);
    }
    if (message.billingAdmin !== "") {
      writer.uint32(34).string(message.billingAdmin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxBillingIteration = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.moduleParamBestForCustomer = reader.bool();
          break;
        case 3:
          message.payAutomatically = reader.bool();
          break;
        case 4:
          message.billingAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      maxBillingIteration: isSet(object.maxBillingIteration) ? Number(object.maxBillingIteration) : 0,
      moduleParamBestForCustomer: isSet(object.moduleParamBestForCustomer)
        ? Boolean(object.moduleParamBestForCustomer)
        : false,
      payAutomatically: isSet(object.payAutomatically) ? Boolean(object.payAutomatically) : false,
      billingAdmin: isSet(object.billingAdmin) ? String(object.billingAdmin) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxBillingIteration !== undefined && (obj.maxBillingIteration = Math.round(message.maxBillingIteration));
    message.moduleParamBestForCustomer !== undefined
      && (obj.moduleParamBestForCustomer = message.moduleParamBestForCustomer);
    message.payAutomatically !== undefined && (obj.payAutomatically = message.payAutomatically);
    message.billingAdmin !== undefined && (obj.billingAdmin = message.billingAdmin);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.maxBillingIteration = object.maxBillingIteration ?? 0;
    message.moduleParamBestForCustomer = object.moduleParamBestForCustomer ?? false;
    message.payAutomatically = object.payAutomatically ?? false;
    message.billingAdmin = object.billingAdmin ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

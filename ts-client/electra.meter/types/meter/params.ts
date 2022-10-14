/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "electra.meter";

/** Params defines the parameters for the module. */
export interface Params {
  maxBillingIteration: number;
  moduleParamBestForCustomer: boolean;
  payAutomatically: boolean;
  billingAdmin: string;
}

const baseParams: object = {
  maxBillingIteration: 0,
  moduleParamBestForCustomer: false,
  payAutomatically: false,
  billingAdmin: "",
};

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
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
    const message = { ...baseParams } as Params;
    if (
      object.maxBillingIteration !== undefined &&
      object.maxBillingIteration !== null
    ) {
      message.maxBillingIteration = Number(object.maxBillingIteration);
    } else {
      message.maxBillingIteration = 0;
    }
    if (
      object.moduleParamBestForCustomer !== undefined &&
      object.moduleParamBestForCustomer !== null
    ) {
      message.moduleParamBestForCustomer = Boolean(
        object.moduleParamBestForCustomer
      );
    } else {
      message.moduleParamBestForCustomer = false;
    }
    if (
      object.payAutomatically !== undefined &&
      object.payAutomatically !== null
    ) {
      message.payAutomatically = Boolean(object.payAutomatically);
    } else {
      message.payAutomatically = false;
    }
    if (object.billingAdmin !== undefined && object.billingAdmin !== null) {
      message.billingAdmin = String(object.billingAdmin);
    } else {
      message.billingAdmin = "";
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxBillingIteration !== undefined &&
      (obj.maxBillingIteration = message.maxBillingIteration);
    message.moduleParamBestForCustomer !== undefined &&
      (obj.moduleParamBestForCustomer = message.moduleParamBestForCustomer);
    message.payAutomatically !== undefined &&
      (obj.payAutomatically = message.payAutomatically);
    message.billingAdmin !== undefined &&
      (obj.billingAdmin = message.billingAdmin);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (
      object.maxBillingIteration !== undefined &&
      object.maxBillingIteration !== null
    ) {
      message.maxBillingIteration = object.maxBillingIteration;
    } else {
      message.maxBillingIteration = 0;
    }
    if (
      object.moduleParamBestForCustomer !== undefined &&
      object.moduleParamBestForCustomer !== null
    ) {
      message.moduleParamBestForCustomer = object.moduleParamBestForCustomer;
    } else {
      message.moduleParamBestForCustomer = false;
    }
    if (
      object.payAutomatically !== undefined &&
      object.payAutomatically !== null
    ) {
      message.payAutomatically = object.payAutomatically;
    } else {
      message.payAutomatically = false;
    }
    if (object.billingAdmin !== undefined && object.billingAdmin !== null) {
      message.billingAdmin = object.billingAdmin;
    } else {
      message.billingAdmin = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}

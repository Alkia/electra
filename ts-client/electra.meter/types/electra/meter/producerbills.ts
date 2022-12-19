/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "electra.meter";

export interface Producerbills {
  billCycleID: number;
  producerDeviceID: string;
  billDate: number;
  billTotalWh: number;
  billTotalPrice: number;
  billCurrency: string;
  billValid: boolean;
  paid: boolean;
  creator: string;
}

function createBaseProducerbills(): Producerbills {
  return {
    billCycleID: 0,
    producerDeviceID: "",
    billDate: 0,
    billTotalWh: 0,
    billTotalPrice: 0,
    billCurrency: "",
    billValid: false,
    paid: false,
    creator: "",
  };
}

export const Producerbills = {
  encode(message: Producerbills, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.billCycleID !== 0) {
      writer.uint32(8).uint64(message.billCycleID);
    }
    if (message.producerDeviceID !== "") {
      writer.uint32(18).string(message.producerDeviceID);
    }
    if (message.billDate !== 0) {
      writer.uint32(24).uint64(message.billDate);
    }
    if (message.billTotalWh !== 0) {
      writer.uint32(32).uint64(message.billTotalWh);
    }
    if (message.billTotalPrice !== 0) {
      writer.uint32(40).uint64(message.billTotalPrice);
    }
    if (message.billCurrency !== "") {
      writer.uint32(50).string(message.billCurrency);
    }
    if (message.billValid === true) {
      writer.uint32(56).bool(message.billValid);
    }
    if (message.paid === true) {
      writer.uint32(64).bool(message.paid);
    }
    if (message.creator !== "") {
      writer.uint32(74).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Producerbills {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProducerbills();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.billCycleID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.producerDeviceID = reader.string();
          break;
        case 3:
          message.billDate = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.billTotalWh = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.billTotalPrice = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.billCurrency = reader.string();
          break;
        case 7:
          message.billValid = reader.bool();
          break;
        case 8:
          message.paid = reader.bool();
          break;
        case 9:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Producerbills {
    return {
      billCycleID: isSet(object.billCycleID) ? Number(object.billCycleID) : 0,
      producerDeviceID: isSet(object.producerDeviceID) ? String(object.producerDeviceID) : "",
      billDate: isSet(object.billDate) ? Number(object.billDate) : 0,
      billTotalWh: isSet(object.billTotalWh) ? Number(object.billTotalWh) : 0,
      billTotalPrice: isSet(object.billTotalPrice) ? Number(object.billTotalPrice) : 0,
      billCurrency: isSet(object.billCurrency) ? String(object.billCurrency) : "",
      billValid: isSet(object.billValid) ? Boolean(object.billValid) : false,
      paid: isSet(object.paid) ? Boolean(object.paid) : false,
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: Producerbills): unknown {
    const obj: any = {};
    message.billCycleID !== undefined && (obj.billCycleID = Math.round(message.billCycleID));
    message.producerDeviceID !== undefined && (obj.producerDeviceID = message.producerDeviceID);
    message.billDate !== undefined && (obj.billDate = Math.round(message.billDate));
    message.billTotalWh !== undefined && (obj.billTotalWh = Math.round(message.billTotalWh));
    message.billTotalPrice !== undefined && (obj.billTotalPrice = Math.round(message.billTotalPrice));
    message.billCurrency !== undefined && (obj.billCurrency = message.billCurrency);
    message.billValid !== undefined && (obj.billValid = message.billValid);
    message.paid !== undefined && (obj.paid = message.paid);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Producerbills>, I>>(object: I): Producerbills {
    const message = createBaseProducerbills();
    message.billCycleID = object.billCycleID ?? 0;
    message.producerDeviceID = object.producerDeviceID ?? "";
    message.billDate = object.billDate ?? 0;
    message.billTotalWh = object.billTotalWh ?? 0;
    message.billTotalPrice = object.billTotalPrice ?? 0;
    message.billCurrency = object.billCurrency ?? "";
    message.billValid = object.billValid ?? false;
    message.paid = object.paid ?? false;
    message.creator = object.creator ?? "";
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

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "electra.meter";

export interface Customerbillingline {
  customerDeviceID: string;
  cycleID: number;
  lineid: number;
  producerDeviceID: string;
  billContractID: string;
  lineWh: number;
  lineWhPrice: number;
  curency: string;
  lineWhTotalPrice: number;
  phase: number;
  creator: string;
}

function createBaseCustomerbillingline(): Customerbillingline {
  return {
    customerDeviceID: "",
    cycleID: 0,
    lineid: 0,
    producerDeviceID: "",
    billContractID: "",
    lineWh: 0,
    lineWhPrice: 0,
    curency: "",
    lineWhTotalPrice: 0,
    phase: 0,
    creator: "",
  };
}

export const Customerbillingline = {
  encode(message: Customerbillingline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customerDeviceID !== "") {
      writer.uint32(10).string(message.customerDeviceID);
    }
    if (message.cycleID !== 0) {
      writer.uint32(16).uint64(message.cycleID);
    }
    if (message.lineid !== 0) {
      writer.uint32(24).uint64(message.lineid);
    }
    if (message.producerDeviceID !== "") {
      writer.uint32(34).string(message.producerDeviceID);
    }
    if (message.billContractID !== "") {
      writer.uint32(42).string(message.billContractID);
    }
    if (message.lineWh !== 0) {
      writer.uint32(48).uint64(message.lineWh);
    }
    if (message.lineWhPrice !== 0) {
      writer.uint32(56).uint64(message.lineWhPrice);
    }
    if (message.curency !== "") {
      writer.uint32(66).string(message.curency);
    }
    if (message.lineWhTotalPrice !== 0) {
      writer.uint32(72).uint64(message.lineWhTotalPrice);
    }
    if (message.phase !== 0) {
      writer.uint32(80).uint64(message.phase);
    }
    if (message.creator !== "") {
      writer.uint32(90).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Customerbillingline {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomerbillingline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerDeviceID = reader.string();
          break;
        case 2:
          message.cycleID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.lineid = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.producerDeviceID = reader.string();
          break;
        case 5:
          message.billContractID = reader.string();
          break;
        case 6:
          message.lineWh = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.lineWhPrice = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.curency = reader.string();
          break;
        case 9:
          message.lineWhTotalPrice = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.phase = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Customerbillingline {
    return {
      customerDeviceID: isSet(object.customerDeviceID) ? String(object.customerDeviceID) : "",
      cycleID: isSet(object.cycleID) ? Number(object.cycleID) : 0,
      lineid: isSet(object.lineid) ? Number(object.lineid) : 0,
      producerDeviceID: isSet(object.producerDeviceID) ? String(object.producerDeviceID) : "",
      billContractID: isSet(object.billContractID) ? String(object.billContractID) : "",
      lineWh: isSet(object.lineWh) ? Number(object.lineWh) : 0,
      lineWhPrice: isSet(object.lineWhPrice) ? Number(object.lineWhPrice) : 0,
      curency: isSet(object.curency) ? String(object.curency) : "",
      lineWhTotalPrice: isSet(object.lineWhTotalPrice) ? Number(object.lineWhTotalPrice) : 0,
      phase: isSet(object.phase) ? Number(object.phase) : 0,
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: Customerbillingline): unknown {
    const obj: any = {};
    message.customerDeviceID !== undefined && (obj.customerDeviceID = message.customerDeviceID);
    message.cycleID !== undefined && (obj.cycleID = Math.round(message.cycleID));
    message.lineid !== undefined && (obj.lineid = Math.round(message.lineid));
    message.producerDeviceID !== undefined && (obj.producerDeviceID = message.producerDeviceID);
    message.billContractID !== undefined && (obj.billContractID = message.billContractID);
    message.lineWh !== undefined && (obj.lineWh = Math.round(message.lineWh));
    message.lineWhPrice !== undefined && (obj.lineWhPrice = Math.round(message.lineWhPrice));
    message.curency !== undefined && (obj.curency = message.curency);
    message.lineWhTotalPrice !== undefined && (obj.lineWhTotalPrice = Math.round(message.lineWhTotalPrice));
    message.phase !== undefined && (obj.phase = Math.round(message.phase));
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Customerbillingline>, I>>(object: I): Customerbillingline {
    const message = createBaseCustomerbillingline();
    message.customerDeviceID = object.customerDeviceID ?? "";
    message.cycleID = object.cycleID ?? 0;
    message.lineid = object.lineid ?? 0;
    message.producerDeviceID = object.producerDeviceID ?? "";
    message.billContractID = object.billContractID ?? "";
    message.lineWh = object.lineWh ?? 0;
    message.lineWhPrice = object.lineWhPrice ?? 0;
    message.curency = object.curency ?? "";
    message.lineWhTotalPrice = object.lineWhTotalPrice ?? 0;
    message.phase = object.phase ?? 0;
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

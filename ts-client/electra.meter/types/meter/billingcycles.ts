/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "electra.meter";

export interface Billingcycles {
  cycleID: number;
  start: number;
  end: number;
  whin: number;
  whout: number;
  moneyin: number;
  moneyout: number;
  curency: string;
  creator: string;
}

const baseBillingcycles: object = {
  cycleID: 0,
  start: 0,
  end: 0,
  whin: 0,
  whout: 0,
  moneyin: 0,
  moneyout: 0,
  curency: "",
  creator: "",
};

export const Billingcycles = {
  encode(message: Billingcycles, writer: Writer = Writer.create()): Writer {
    if (message.cycleID !== 0) {
      writer.uint32(8).uint64(message.cycleID);
    }
    if (message.start !== 0) {
      writer.uint32(16).uint64(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(24).uint64(message.end);
    }
    if (message.whin !== 0) {
      writer.uint32(32).uint64(message.whin);
    }
    if (message.whout !== 0) {
      writer.uint32(40).uint64(message.whout);
    }
    if (message.moneyin !== 0) {
      writer.uint32(48).uint64(message.moneyin);
    }
    if (message.moneyout !== 0) {
      writer.uint32(56).uint64(message.moneyout);
    }
    if (message.curency !== "") {
      writer.uint32(66).string(message.curency);
    }
    if (message.creator !== "") {
      writer.uint32(74).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Billingcycles {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBillingcycles } as Billingcycles;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cycleID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.start = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.end = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.whin = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.whout = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.moneyin = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.moneyout = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.curency = reader.string();
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

  fromJSON(object: any): Billingcycles {
    const message = { ...baseBillingcycles } as Billingcycles;
    if (object.cycleID !== undefined && object.cycleID !== null) {
      message.cycleID = Number(object.cycleID);
    } else {
      message.cycleID = 0;
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = Number(object.start);
    } else {
      message.start = 0;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = Number(object.end);
    } else {
      message.end = 0;
    }
    if (object.whin !== undefined && object.whin !== null) {
      message.whin = Number(object.whin);
    } else {
      message.whin = 0;
    }
    if (object.whout !== undefined && object.whout !== null) {
      message.whout = Number(object.whout);
    } else {
      message.whout = 0;
    }
    if (object.moneyin !== undefined && object.moneyin !== null) {
      message.moneyin = Number(object.moneyin);
    } else {
      message.moneyin = 0;
    }
    if (object.moneyout !== undefined && object.moneyout !== null) {
      message.moneyout = Number(object.moneyout);
    } else {
      message.moneyout = 0;
    }
    if (object.curency !== undefined && object.curency !== null) {
      message.curency = String(object.curency);
    } else {
      message.curency = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Billingcycles): unknown {
    const obj: any = {};
    message.cycleID !== undefined && (obj.cycleID = message.cycleID);
    message.start !== undefined && (obj.start = message.start);
    message.end !== undefined && (obj.end = message.end);
    message.whin !== undefined && (obj.whin = message.whin);
    message.whout !== undefined && (obj.whout = message.whout);
    message.moneyin !== undefined && (obj.moneyin = message.moneyin);
    message.moneyout !== undefined && (obj.moneyout = message.moneyout);
    message.curency !== undefined && (obj.curency = message.curency);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Billingcycles>): Billingcycles {
    const message = { ...baseBillingcycles } as Billingcycles;
    if (object.cycleID !== undefined && object.cycleID !== null) {
      message.cycleID = object.cycleID;
    } else {
      message.cycleID = 0;
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = object.start;
    } else {
      message.start = 0;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = object.end;
    } else {
      message.end = 0;
    }
    if (object.whin !== undefined && object.whin !== null) {
      message.whin = object.whin;
    } else {
      message.whin = 0;
    }
    if (object.whout !== undefined && object.whout !== null) {
      message.whout = object.whout;
    } else {
      message.whout = 0;
    }
    if (object.moneyin !== undefined && object.moneyin !== null) {
      message.moneyin = object.moneyin;
    } else {
      message.moneyin = 0;
    }
    if (object.moneyout !== undefined && object.moneyout !== null) {
      message.moneyout = object.moneyout;
    } else {
      message.moneyout = 0;
    }
    if (object.curency !== undefined && object.curency !== null) {
      message.curency = object.curency;
    } else {
      message.curency = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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

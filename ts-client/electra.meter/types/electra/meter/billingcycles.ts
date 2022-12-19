/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "electra.meter";

export interface Billingcycles {
  cycleID: number;
  begin: number;
  end: number;
  whin: number;
  whout: number;
  moneyin: number;
  moneyout: number;
  curency: string;
  valid: boolean;
  paid: boolean;
  creator: string;
}

function createBaseBillingcycles(): Billingcycles {
  return {
    cycleID: 0,
    begin: 0,
    end: 0,
    whin: 0,
    whout: 0,
    moneyin: 0,
    moneyout: 0,
    curency: "",
    valid: false,
    paid: false,
    creator: "",
  };
}

export const Billingcycles = {
  encode(message: Billingcycles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cycleID !== 0) {
      writer.uint32(8).uint64(message.cycleID);
    }
    if (message.begin !== 0) {
      writer.uint32(16).uint64(message.begin);
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
    if (message.valid === true) {
      writer.uint32(72).bool(message.valid);
    }
    if (message.paid === true) {
      writer.uint32(80).bool(message.paid);
    }
    if (message.creator !== "") {
      writer.uint32(90).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Billingcycles {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBillingcycles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cycleID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.begin = longToNumber(reader.uint64() as Long);
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
          message.valid = reader.bool();
          break;
        case 10:
          message.paid = reader.bool();
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

  fromJSON(object: any): Billingcycles {
    return {
      cycleID: isSet(object.cycleID) ? Number(object.cycleID) : 0,
      begin: isSet(object.begin) ? Number(object.begin) : 0,
      end: isSet(object.end) ? Number(object.end) : 0,
      whin: isSet(object.whin) ? Number(object.whin) : 0,
      whout: isSet(object.whout) ? Number(object.whout) : 0,
      moneyin: isSet(object.moneyin) ? Number(object.moneyin) : 0,
      moneyout: isSet(object.moneyout) ? Number(object.moneyout) : 0,
      curency: isSet(object.curency) ? String(object.curency) : "",
      valid: isSet(object.valid) ? Boolean(object.valid) : false,
      paid: isSet(object.paid) ? Boolean(object.paid) : false,
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: Billingcycles): unknown {
    const obj: any = {};
    message.cycleID !== undefined && (obj.cycleID = Math.round(message.cycleID));
    message.begin !== undefined && (obj.begin = Math.round(message.begin));
    message.end !== undefined && (obj.end = Math.round(message.end));
    message.whin !== undefined && (obj.whin = Math.round(message.whin));
    message.whout !== undefined && (obj.whout = Math.round(message.whout));
    message.moneyin !== undefined && (obj.moneyin = Math.round(message.moneyin));
    message.moneyout !== undefined && (obj.moneyout = Math.round(message.moneyout));
    message.curency !== undefined && (obj.curency = message.curency);
    message.valid !== undefined && (obj.valid = message.valid);
    message.paid !== undefined && (obj.paid = message.paid);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Billingcycles>, I>>(object: I): Billingcycles {
    const message = createBaseBillingcycles();
    message.cycleID = object.cycleID ?? 0;
    message.begin = object.begin ?? 0;
    message.end = object.end ?? 0;
    message.whin = object.whin ?? 0;
    message.whout = object.whout ?? 0;
    message.moneyin = object.moneyin ?? 0;
    message.moneyout = object.moneyout ?? 0;
    message.curency = object.curency ?? "";
    message.valid = object.valid ?? false;
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

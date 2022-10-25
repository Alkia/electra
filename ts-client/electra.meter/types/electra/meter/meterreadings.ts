/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "electra.meter";

export interface Meterreadings {
  deviceID: string;
  timestamp: number;
  phase: number;
  whin: number;
  whout: number;
  mvolt: number;
  mhertz: number;
  mpf: number;
  maxmi: number;
}

function createBaseMeterreadings(): Meterreadings {
  return { deviceID: "", timestamp: 0, phase: 0, whin: 0, whout: 0, mvolt: 0, mhertz: 0, mpf: 0, maxmi: 0 };
}

export const Meterreadings = {
  encode(message: Meterreadings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceID !== "") {
      writer.uint32(10).string(message.deviceID);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.phase !== 0) {
      writer.uint32(24).uint64(message.phase);
    }
    if (message.whin !== 0) {
      writer.uint32(32).uint64(message.whin);
    }
    if (message.whout !== 0) {
      writer.uint32(40).uint64(message.whout);
    }
    if (message.mvolt !== 0) {
      writer.uint32(48).uint64(message.mvolt);
    }
    if (message.mhertz !== 0) {
      writer.uint32(56).uint64(message.mhertz);
    }
    if (message.mpf !== 0) {
      writer.uint32(64).uint64(message.mpf);
    }
    if (message.maxmi !== 0) {
      writer.uint32(72).uint64(message.maxmi);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Meterreadings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMeterreadings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceID = reader.string();
          break;
        case 2:
          message.timestamp = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.phase = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.whin = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.whout = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.mvolt = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.mhertz = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.mpf = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.maxmi = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Meterreadings {
    return {
      deviceID: isSet(object.deviceID) ? String(object.deviceID) : "",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      phase: isSet(object.phase) ? Number(object.phase) : 0,
      whin: isSet(object.whin) ? Number(object.whin) : 0,
      whout: isSet(object.whout) ? Number(object.whout) : 0,
      mvolt: isSet(object.mvolt) ? Number(object.mvolt) : 0,
      mhertz: isSet(object.mhertz) ? Number(object.mhertz) : 0,
      mpf: isSet(object.mpf) ? Number(object.mpf) : 0,
      maxmi: isSet(object.maxmi) ? Number(object.maxmi) : 0,
    };
  },

  toJSON(message: Meterreadings): unknown {
    const obj: any = {};
    message.deviceID !== undefined && (obj.deviceID = message.deviceID);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.phase !== undefined && (obj.phase = Math.round(message.phase));
    message.whin !== undefined && (obj.whin = Math.round(message.whin));
    message.whout !== undefined && (obj.whout = Math.round(message.whout));
    message.mvolt !== undefined && (obj.mvolt = Math.round(message.mvolt));
    message.mhertz !== undefined && (obj.mhertz = Math.round(message.mhertz));
    message.mpf !== undefined && (obj.mpf = Math.round(message.mpf));
    message.maxmi !== undefined && (obj.maxmi = Math.round(message.maxmi));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Meterreadings>, I>>(object: I): Meterreadings {
    const message = createBaseMeterreadings();
    message.deviceID = object.deviceID ?? "";
    message.timestamp = object.timestamp ?? 0;
    message.phase = object.phase ?? 0;
    message.whin = object.whin ?? 0;
    message.whout = object.whout ?? 0;
    message.mvolt = object.mvolt ?? 0;
    message.mhertz = object.mhertz ?? 0;
    message.mpf = object.mpf ?? 0;
    message.maxmi = object.maxmi ?? 0;
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

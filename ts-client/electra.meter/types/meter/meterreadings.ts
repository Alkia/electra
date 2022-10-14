/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

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

const baseMeterreadings: object = {
  deviceID: "",
  timestamp: 0,
  phase: 0,
  whin: 0,
  whout: 0,
  mvolt: 0,
  mhertz: 0,
  mpf: 0,
  maxmi: 0,
};

export const Meterreadings = {
  encode(message: Meterreadings, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): Meterreadings {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMeterreadings } as Meterreadings;
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
    const message = { ...baseMeterreadings } as Meterreadings;
    if (object.deviceID !== undefined && object.deviceID !== null) {
      message.deviceID = String(object.deviceID);
    } else {
      message.deviceID = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    } else {
      message.timestamp = 0;
    }
    if (object.phase !== undefined && object.phase !== null) {
      message.phase = Number(object.phase);
    } else {
      message.phase = 0;
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
    if (object.mvolt !== undefined && object.mvolt !== null) {
      message.mvolt = Number(object.mvolt);
    } else {
      message.mvolt = 0;
    }
    if (object.mhertz !== undefined && object.mhertz !== null) {
      message.mhertz = Number(object.mhertz);
    } else {
      message.mhertz = 0;
    }
    if (object.mpf !== undefined && object.mpf !== null) {
      message.mpf = Number(object.mpf);
    } else {
      message.mpf = 0;
    }
    if (object.maxmi !== undefined && object.maxmi !== null) {
      message.maxmi = Number(object.maxmi);
    } else {
      message.maxmi = 0;
    }
    return message;
  },

  toJSON(message: Meterreadings): unknown {
    const obj: any = {};
    message.deviceID !== undefined && (obj.deviceID = message.deviceID);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.phase !== undefined && (obj.phase = message.phase);
    message.whin !== undefined && (obj.whin = message.whin);
    message.whout !== undefined && (obj.whout = message.whout);
    message.mvolt !== undefined && (obj.mvolt = message.mvolt);
    message.mhertz !== undefined && (obj.mhertz = message.mhertz);
    message.mpf !== undefined && (obj.mpf = message.mpf);
    message.maxmi !== undefined && (obj.maxmi = message.maxmi);
    return obj;
  },

  fromPartial(object: DeepPartial<Meterreadings>): Meterreadings {
    const message = { ...baseMeterreadings } as Meterreadings;
    if (object.deviceID !== undefined && object.deviceID !== null) {
      message.deviceID = object.deviceID;
    } else {
      message.deviceID = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = 0;
    }
    if (object.phase !== undefined && object.phase !== null) {
      message.phase = object.phase;
    } else {
      message.phase = 0;
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
    if (object.mvolt !== undefined && object.mvolt !== null) {
      message.mvolt = object.mvolt;
    } else {
      message.mvolt = 0;
    }
    if (object.mhertz !== undefined && object.mhertz !== null) {
      message.mhertz = object.mhertz;
    } else {
      message.mhertz = 0;
    }
    if (object.mpf !== undefined && object.mpf !== null) {
      message.mpf = object.mpf;
    } else {
      message.mpf = 0;
    }
    if (object.maxmi !== undefined && object.maxmi !== null) {
      message.maxmi = object.maxmi;
    } else {
      message.maxmi = 0;
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

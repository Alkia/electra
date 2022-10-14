/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "electra.meter";

export interface MsgRecord {
  creator: string;
  timestamp: number;
  phase: number;
  whin: number;
  whout: number;
  mvolt: number;
  mhertz: number;
  mpf: number;
  maxmi: number;
}

export interface MsgRecordResponse {}

export interface MsgRecord3 {
  creator: string;
  timestamp: number;
  whin1: number;
  whout1: number;
  mvolt1: number;
  mhertz1: number;
  mpf1: number;
  maxmi1: number;
  whin2: number;
  whout2: number;
  mvolt2: number;
  mhertz2: number;
  mpf2: number;
  maxmi2: number;
  whin3: number;
  whout3: number;
  mvolt3: number;
  mhertz3: number;
  mpf3: number;
  maxmi3: number;
}

export interface MsgRecord3Response {}

const baseMsgRecord: object = {
  creator: "",
  timestamp: 0,
  phase: 0,
  whin: 0,
  whout: 0,
  mvolt: 0,
  mhertz: 0,
  mpf: 0,
  maxmi: 0,
};

export const MsgRecord = {
  encode(message: MsgRecord, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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

  decode(input: Reader | Uint8Array, length?: number): MsgRecord {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRecord } as MsgRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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

  fromJSON(object: any): MsgRecord {
    const message = { ...baseMsgRecord } as MsgRecord;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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

  toJSON(message: MsgRecord): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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

  fromPartial(object: DeepPartial<MsgRecord>): MsgRecord {
    const message = { ...baseMsgRecord } as MsgRecord;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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

const baseMsgRecordResponse: object = {};

export const MsgRecordResponse = {
  encode(_: MsgRecordResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRecordResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRecordResponse } as MsgRecordResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRecordResponse {
    const message = { ...baseMsgRecordResponse } as MsgRecordResponse;
    return message;
  },

  toJSON(_: MsgRecordResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRecordResponse>): MsgRecordResponse {
    const message = { ...baseMsgRecordResponse } as MsgRecordResponse;
    return message;
  },
};

const baseMsgRecord3: object = {
  creator: "",
  timestamp: 0,
  whin1: 0,
  whout1: 0,
  mvolt1: 0,
  mhertz1: 0,
  mpf1: 0,
  maxmi1: 0,
  whin2: 0,
  whout2: 0,
  mvolt2: 0,
  mhertz2: 0,
  mpf2: 0,
  maxmi2: 0,
  whin3: 0,
  whout3: 0,
  mvolt3: 0,
  mhertz3: 0,
  mpf3: 0,
  maxmi3: 0,
};

export const MsgRecord3 = {
  encode(message: MsgRecord3, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.whin1 !== 0) {
      writer.uint32(24).uint64(message.whin1);
    }
    if (message.whout1 !== 0) {
      writer.uint32(32).uint64(message.whout1);
    }
    if (message.mvolt1 !== 0) {
      writer.uint32(40).uint64(message.mvolt1);
    }
    if (message.mhertz1 !== 0) {
      writer.uint32(48).uint64(message.mhertz1);
    }
    if (message.mpf1 !== 0) {
      writer.uint32(56).uint64(message.mpf1);
    }
    if (message.maxmi1 !== 0) {
      writer.uint32(64).uint64(message.maxmi1);
    }
    if (message.whin2 !== 0) {
      writer.uint32(72).uint64(message.whin2);
    }
    if (message.whout2 !== 0) {
      writer.uint32(80).uint64(message.whout2);
    }
    if (message.mvolt2 !== 0) {
      writer.uint32(88).uint64(message.mvolt2);
    }
    if (message.mhertz2 !== 0) {
      writer.uint32(96).uint64(message.mhertz2);
    }
    if (message.mpf2 !== 0) {
      writer.uint32(104).uint64(message.mpf2);
    }
    if (message.maxmi2 !== 0) {
      writer.uint32(112).uint64(message.maxmi2);
    }
    if (message.whin3 !== 0) {
      writer.uint32(120).uint64(message.whin3);
    }
    if (message.whout3 !== 0) {
      writer.uint32(128).uint64(message.whout3);
    }
    if (message.mvolt3 !== 0) {
      writer.uint32(136).uint64(message.mvolt3);
    }
    if (message.mhertz3 !== 0) {
      writer.uint32(144).uint64(message.mhertz3);
    }
    if (message.mpf3 !== 0) {
      writer.uint32(152).uint64(message.mpf3);
    }
    if (message.maxmi3 !== 0) {
      writer.uint32(160).uint64(message.maxmi3);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRecord3 {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRecord3 } as MsgRecord3;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.timestamp = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.whin1 = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.whout1 = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.mvolt1 = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.mhertz1 = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.mpf1 = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.maxmi1 = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.whin2 = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.whout2 = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.mvolt2 = longToNumber(reader.uint64() as Long);
          break;
        case 12:
          message.mhertz2 = longToNumber(reader.uint64() as Long);
          break;
        case 13:
          message.mpf2 = longToNumber(reader.uint64() as Long);
          break;
        case 14:
          message.maxmi2 = longToNumber(reader.uint64() as Long);
          break;
        case 15:
          message.whin3 = longToNumber(reader.uint64() as Long);
          break;
        case 16:
          message.whout3 = longToNumber(reader.uint64() as Long);
          break;
        case 17:
          message.mvolt3 = longToNumber(reader.uint64() as Long);
          break;
        case 18:
          message.mhertz3 = longToNumber(reader.uint64() as Long);
          break;
        case 19:
          message.mpf3 = longToNumber(reader.uint64() as Long);
          break;
        case 20:
          message.maxmi3 = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRecord3 {
    const message = { ...baseMsgRecord3 } as MsgRecord3;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    } else {
      message.timestamp = 0;
    }
    if (object.whin1 !== undefined && object.whin1 !== null) {
      message.whin1 = Number(object.whin1);
    } else {
      message.whin1 = 0;
    }
    if (object.whout1 !== undefined && object.whout1 !== null) {
      message.whout1 = Number(object.whout1);
    } else {
      message.whout1 = 0;
    }
    if (object.mvolt1 !== undefined && object.mvolt1 !== null) {
      message.mvolt1 = Number(object.mvolt1);
    } else {
      message.mvolt1 = 0;
    }
    if (object.mhertz1 !== undefined && object.mhertz1 !== null) {
      message.mhertz1 = Number(object.mhertz1);
    } else {
      message.mhertz1 = 0;
    }
    if (object.mpf1 !== undefined && object.mpf1 !== null) {
      message.mpf1 = Number(object.mpf1);
    } else {
      message.mpf1 = 0;
    }
    if (object.maxmi1 !== undefined && object.maxmi1 !== null) {
      message.maxmi1 = Number(object.maxmi1);
    } else {
      message.maxmi1 = 0;
    }
    if (object.whin2 !== undefined && object.whin2 !== null) {
      message.whin2 = Number(object.whin2);
    } else {
      message.whin2 = 0;
    }
    if (object.whout2 !== undefined && object.whout2 !== null) {
      message.whout2 = Number(object.whout2);
    } else {
      message.whout2 = 0;
    }
    if (object.mvolt2 !== undefined && object.mvolt2 !== null) {
      message.mvolt2 = Number(object.mvolt2);
    } else {
      message.mvolt2 = 0;
    }
    if (object.mhertz2 !== undefined && object.mhertz2 !== null) {
      message.mhertz2 = Number(object.mhertz2);
    } else {
      message.mhertz2 = 0;
    }
    if (object.mpf2 !== undefined && object.mpf2 !== null) {
      message.mpf2 = Number(object.mpf2);
    } else {
      message.mpf2 = 0;
    }
    if (object.maxmi2 !== undefined && object.maxmi2 !== null) {
      message.maxmi2 = Number(object.maxmi2);
    } else {
      message.maxmi2 = 0;
    }
    if (object.whin3 !== undefined && object.whin3 !== null) {
      message.whin3 = Number(object.whin3);
    } else {
      message.whin3 = 0;
    }
    if (object.whout3 !== undefined && object.whout3 !== null) {
      message.whout3 = Number(object.whout3);
    } else {
      message.whout3 = 0;
    }
    if (object.mvolt3 !== undefined && object.mvolt3 !== null) {
      message.mvolt3 = Number(object.mvolt3);
    } else {
      message.mvolt3 = 0;
    }
    if (object.mhertz3 !== undefined && object.mhertz3 !== null) {
      message.mhertz3 = Number(object.mhertz3);
    } else {
      message.mhertz3 = 0;
    }
    if (object.mpf3 !== undefined && object.mpf3 !== null) {
      message.mpf3 = Number(object.mpf3);
    } else {
      message.mpf3 = 0;
    }
    if (object.maxmi3 !== undefined && object.maxmi3 !== null) {
      message.maxmi3 = Number(object.maxmi3);
    } else {
      message.maxmi3 = 0;
    }
    return message;
  },

  toJSON(message: MsgRecord3): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.whin1 !== undefined && (obj.whin1 = message.whin1);
    message.whout1 !== undefined && (obj.whout1 = message.whout1);
    message.mvolt1 !== undefined && (obj.mvolt1 = message.mvolt1);
    message.mhertz1 !== undefined && (obj.mhertz1 = message.mhertz1);
    message.mpf1 !== undefined && (obj.mpf1 = message.mpf1);
    message.maxmi1 !== undefined && (obj.maxmi1 = message.maxmi1);
    message.whin2 !== undefined && (obj.whin2 = message.whin2);
    message.whout2 !== undefined && (obj.whout2 = message.whout2);
    message.mvolt2 !== undefined && (obj.mvolt2 = message.mvolt2);
    message.mhertz2 !== undefined && (obj.mhertz2 = message.mhertz2);
    message.mpf2 !== undefined && (obj.mpf2 = message.mpf2);
    message.maxmi2 !== undefined && (obj.maxmi2 = message.maxmi2);
    message.whin3 !== undefined && (obj.whin3 = message.whin3);
    message.whout3 !== undefined && (obj.whout3 = message.whout3);
    message.mvolt3 !== undefined && (obj.mvolt3 = message.mvolt3);
    message.mhertz3 !== undefined && (obj.mhertz3 = message.mhertz3);
    message.mpf3 !== undefined && (obj.mpf3 = message.mpf3);
    message.maxmi3 !== undefined && (obj.maxmi3 = message.maxmi3);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRecord3>): MsgRecord3 {
    const message = { ...baseMsgRecord3 } as MsgRecord3;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = 0;
    }
    if (object.whin1 !== undefined && object.whin1 !== null) {
      message.whin1 = object.whin1;
    } else {
      message.whin1 = 0;
    }
    if (object.whout1 !== undefined && object.whout1 !== null) {
      message.whout1 = object.whout1;
    } else {
      message.whout1 = 0;
    }
    if (object.mvolt1 !== undefined && object.mvolt1 !== null) {
      message.mvolt1 = object.mvolt1;
    } else {
      message.mvolt1 = 0;
    }
    if (object.mhertz1 !== undefined && object.mhertz1 !== null) {
      message.mhertz1 = object.mhertz1;
    } else {
      message.mhertz1 = 0;
    }
    if (object.mpf1 !== undefined && object.mpf1 !== null) {
      message.mpf1 = object.mpf1;
    } else {
      message.mpf1 = 0;
    }
    if (object.maxmi1 !== undefined && object.maxmi1 !== null) {
      message.maxmi1 = object.maxmi1;
    } else {
      message.maxmi1 = 0;
    }
    if (object.whin2 !== undefined && object.whin2 !== null) {
      message.whin2 = object.whin2;
    } else {
      message.whin2 = 0;
    }
    if (object.whout2 !== undefined && object.whout2 !== null) {
      message.whout2 = object.whout2;
    } else {
      message.whout2 = 0;
    }
    if (object.mvolt2 !== undefined && object.mvolt2 !== null) {
      message.mvolt2 = object.mvolt2;
    } else {
      message.mvolt2 = 0;
    }
    if (object.mhertz2 !== undefined && object.mhertz2 !== null) {
      message.mhertz2 = object.mhertz2;
    } else {
      message.mhertz2 = 0;
    }
    if (object.mpf2 !== undefined && object.mpf2 !== null) {
      message.mpf2 = object.mpf2;
    } else {
      message.mpf2 = 0;
    }
    if (object.maxmi2 !== undefined && object.maxmi2 !== null) {
      message.maxmi2 = object.maxmi2;
    } else {
      message.maxmi2 = 0;
    }
    if (object.whin3 !== undefined && object.whin3 !== null) {
      message.whin3 = object.whin3;
    } else {
      message.whin3 = 0;
    }
    if (object.whout3 !== undefined && object.whout3 !== null) {
      message.whout3 = object.whout3;
    } else {
      message.whout3 = 0;
    }
    if (object.mvolt3 !== undefined && object.mvolt3 !== null) {
      message.mvolt3 = object.mvolt3;
    } else {
      message.mvolt3 = 0;
    }
    if (object.mhertz3 !== undefined && object.mhertz3 !== null) {
      message.mhertz3 = object.mhertz3;
    } else {
      message.mhertz3 = 0;
    }
    if (object.mpf3 !== undefined && object.mpf3 !== null) {
      message.mpf3 = object.mpf3;
    } else {
      message.mpf3 = 0;
    }
    if (object.maxmi3 !== undefined && object.maxmi3 !== null) {
      message.maxmi3 = object.maxmi3;
    } else {
      message.maxmi3 = 0;
    }
    return message;
  },
};

const baseMsgRecord3Response: object = {};

export const MsgRecord3Response = {
  encode(_: MsgRecord3Response, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRecord3Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRecord3Response } as MsgRecord3Response;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRecord3Response {
    const message = { ...baseMsgRecord3Response } as MsgRecord3Response;
    return message;
  },

  toJSON(_: MsgRecord3Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRecord3Response>): MsgRecord3Response {
    const message = { ...baseMsgRecord3Response } as MsgRecord3Response;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Record(request: MsgRecord): Promise<MsgRecordResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Record3(request: MsgRecord3): Promise<MsgRecord3Response>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Record(request: MsgRecord): Promise<MsgRecordResponse> {
    const data = MsgRecord.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "Record", data);
    return promise.then((data) => MsgRecordResponse.decode(new Reader(data)));
  }

  Record3(request: MsgRecord3): Promise<MsgRecord3Response> {
    const data = MsgRecord3.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "Record3", data);
    return promise.then((data) => MsgRecord3Response.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

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

export interface MsgRecordResponse {
}

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

export interface MsgRecord3Response {
}

function createBaseMsgRecord(): MsgRecord {
  return { creator: "", timestamp: 0, phase: 0, whin: 0, whout: 0, mvolt: 0, mhertz: 0, mpf: 0, maxmi: 0 };
}

export const MsgRecord = {
  encode(message: MsgRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecord();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
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

  toJSON(message: MsgRecord): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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

  fromPartial<I extends Exact<DeepPartial<MsgRecord>, I>>(object: I): MsgRecord {
    const message = createBaseMsgRecord();
    message.creator = object.creator ?? "";
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

function createBaseMsgRecordResponse(): MsgRecordResponse {
  return {};
}

export const MsgRecordResponse = {
  encode(_: MsgRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecordResponse();
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
    return {};
  },

  toJSON(_: MsgRecordResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRecordResponse>, I>>(_: I): MsgRecordResponse {
    const message = createBaseMsgRecordResponse();
    return message;
  },
};

function createBaseMsgRecord3(): MsgRecord3 {
  return {
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
}

export const MsgRecord3 = {
  encode(message: MsgRecord3, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecord3 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecord3();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      whin1: isSet(object.whin1) ? Number(object.whin1) : 0,
      whout1: isSet(object.whout1) ? Number(object.whout1) : 0,
      mvolt1: isSet(object.mvolt1) ? Number(object.mvolt1) : 0,
      mhertz1: isSet(object.mhertz1) ? Number(object.mhertz1) : 0,
      mpf1: isSet(object.mpf1) ? Number(object.mpf1) : 0,
      maxmi1: isSet(object.maxmi1) ? Number(object.maxmi1) : 0,
      whin2: isSet(object.whin2) ? Number(object.whin2) : 0,
      whout2: isSet(object.whout2) ? Number(object.whout2) : 0,
      mvolt2: isSet(object.mvolt2) ? Number(object.mvolt2) : 0,
      mhertz2: isSet(object.mhertz2) ? Number(object.mhertz2) : 0,
      mpf2: isSet(object.mpf2) ? Number(object.mpf2) : 0,
      maxmi2: isSet(object.maxmi2) ? Number(object.maxmi2) : 0,
      whin3: isSet(object.whin3) ? Number(object.whin3) : 0,
      whout3: isSet(object.whout3) ? Number(object.whout3) : 0,
      mvolt3: isSet(object.mvolt3) ? Number(object.mvolt3) : 0,
      mhertz3: isSet(object.mhertz3) ? Number(object.mhertz3) : 0,
      mpf3: isSet(object.mpf3) ? Number(object.mpf3) : 0,
      maxmi3: isSet(object.maxmi3) ? Number(object.maxmi3) : 0,
    };
  },

  toJSON(message: MsgRecord3): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.whin1 !== undefined && (obj.whin1 = Math.round(message.whin1));
    message.whout1 !== undefined && (obj.whout1 = Math.round(message.whout1));
    message.mvolt1 !== undefined && (obj.mvolt1 = Math.round(message.mvolt1));
    message.mhertz1 !== undefined && (obj.mhertz1 = Math.round(message.mhertz1));
    message.mpf1 !== undefined && (obj.mpf1 = Math.round(message.mpf1));
    message.maxmi1 !== undefined && (obj.maxmi1 = Math.round(message.maxmi1));
    message.whin2 !== undefined && (obj.whin2 = Math.round(message.whin2));
    message.whout2 !== undefined && (obj.whout2 = Math.round(message.whout2));
    message.mvolt2 !== undefined && (obj.mvolt2 = Math.round(message.mvolt2));
    message.mhertz2 !== undefined && (obj.mhertz2 = Math.round(message.mhertz2));
    message.mpf2 !== undefined && (obj.mpf2 = Math.round(message.mpf2));
    message.maxmi2 !== undefined && (obj.maxmi2 = Math.round(message.maxmi2));
    message.whin3 !== undefined && (obj.whin3 = Math.round(message.whin3));
    message.whout3 !== undefined && (obj.whout3 = Math.round(message.whout3));
    message.mvolt3 !== undefined && (obj.mvolt3 = Math.round(message.mvolt3));
    message.mhertz3 !== undefined && (obj.mhertz3 = Math.round(message.mhertz3));
    message.mpf3 !== undefined && (obj.mpf3 = Math.round(message.mpf3));
    message.maxmi3 !== undefined && (obj.maxmi3 = Math.round(message.maxmi3));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRecord3>, I>>(object: I): MsgRecord3 {
    const message = createBaseMsgRecord3();
    message.creator = object.creator ?? "";
    message.timestamp = object.timestamp ?? 0;
    message.whin1 = object.whin1 ?? 0;
    message.whout1 = object.whout1 ?? 0;
    message.mvolt1 = object.mvolt1 ?? 0;
    message.mhertz1 = object.mhertz1 ?? 0;
    message.mpf1 = object.mpf1 ?? 0;
    message.maxmi1 = object.maxmi1 ?? 0;
    message.whin2 = object.whin2 ?? 0;
    message.whout2 = object.whout2 ?? 0;
    message.mvolt2 = object.mvolt2 ?? 0;
    message.mhertz2 = object.mhertz2 ?? 0;
    message.mpf2 = object.mpf2 ?? 0;
    message.maxmi2 = object.maxmi2 ?? 0;
    message.whin3 = object.whin3 ?? 0;
    message.whout3 = object.whout3 ?? 0;
    message.mvolt3 = object.mvolt3 ?? 0;
    message.mhertz3 = object.mhertz3 ?? 0;
    message.mpf3 = object.mpf3 ?? 0;
    message.maxmi3 = object.maxmi3 ?? 0;
    return message;
  },
};

function createBaseMsgRecord3Response(): MsgRecord3Response {
  return {};
}

export const MsgRecord3Response = {
  encode(_: MsgRecord3Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecord3Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecord3Response();
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
    return {};
  },

  toJSON(_: MsgRecord3Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRecord3Response>, I>>(_: I): MsgRecord3Response {
    const message = createBaseMsgRecord3Response();
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
    this.Record = this.Record.bind(this);
    this.Record3 = this.Record3.bind(this);
  }
  Record(request: MsgRecord): Promise<MsgRecordResponse> {
    const data = MsgRecord.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "Record", data);
    return promise.then((data) => MsgRecordResponse.decode(new _m0.Reader(data)));
  }

  Record3(request: MsgRecord3): Promise<MsgRecord3Response> {
    const data = MsgRecord3.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "Record3", data);
    return promise.then((data) => MsgRecord3Response.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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

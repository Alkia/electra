/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "electra.voter";

export interface MsgCreatePoll {
  creator: string;
  title: string;
  options: string[];
}

export interface MsgCreatePollResponse {
  id: number;
}

export interface MsgUpdatePoll {
  creator: string;
  id: number;
  title: string;
  options: string[];
}

export interface MsgUpdatePollResponse {
}

export interface MsgDeletePoll {
  creator: string;
  id: number;
}

export interface MsgDeletePollResponse {
}

function createBaseMsgCreatePoll(): MsgCreatePoll {
  return { creator: "", title: "", options: [] };
}

export const MsgCreatePoll = {
  encode(message: MsgCreatePoll, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    for (const v of message.options) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoll {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.options.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePoll {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      title: isSet(object.title) ? String(object.title) : "",
      options: Array.isArray(object?.options) ? object.options.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: MsgCreatePoll): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    if (message.options) {
      obj.options = message.options.map((e) => e);
    } else {
      obj.options = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePoll>, I>>(object: I): MsgCreatePoll {
    const message = createBaseMsgCreatePoll();
    message.creator = object.creator ?? "";
    message.title = object.title ?? "";
    message.options = object.options?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgCreatePollResponse(): MsgCreatePollResponse {
  return { id: 0 };
}

export const MsgCreatePollResponse = {
  encode(message: MsgCreatePollResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePollResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePollResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePollResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreatePollResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePollResponse>, I>>(object: I): MsgCreatePollResponse {
    const message = createBaseMsgCreatePollResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdatePoll(): MsgUpdatePoll {
  return { creator: "", id: 0, title: "", options: [] };
}

export const MsgUpdatePoll = {
  encode(message: MsgUpdatePoll, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    for (const v of message.options) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePoll {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePoll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.options.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePoll {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      title: isSet(object.title) ? String(object.title) : "",
      options: Array.isArray(object?.options) ? object.options.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: MsgUpdatePoll): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.title !== undefined && (obj.title = message.title);
    if (message.options) {
      obj.options = message.options.map((e) => e);
    } else {
      obj.options = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdatePoll>, I>>(object: I): MsgUpdatePoll {
    const message = createBaseMsgUpdatePoll();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.title = object.title ?? "";
    message.options = object.options?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgUpdatePollResponse(): MsgUpdatePollResponse {
  return {};
}

export const MsgUpdatePollResponse = {
  encode(_: MsgUpdatePollResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePollResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePollResponse();
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

  fromJSON(_: any): MsgUpdatePollResponse {
    return {};
  },

  toJSON(_: MsgUpdatePollResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdatePollResponse>, I>>(_: I): MsgUpdatePollResponse {
    const message = createBaseMsgUpdatePollResponse();
    return message;
  },
};

function createBaseMsgDeletePoll(): MsgDeletePoll {
  return { creator: "", id: 0 };
}

export const MsgDeletePoll = {
  encode(message: MsgDeletePoll, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePoll {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePoll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeletePoll {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeletePoll): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeletePoll>, I>>(object: I): MsgDeletePoll {
    const message = createBaseMsgDeletePoll();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeletePollResponse(): MsgDeletePollResponse {
  return {};
}

export const MsgDeletePollResponse = {
  encode(_: MsgDeletePollResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePollResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePollResponse();
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

  fromJSON(_: any): MsgDeletePollResponse {
    return {};
  },

  toJSON(_: MsgDeletePollResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeletePollResponse>, I>>(_: I): MsgDeletePollResponse {
    const message = createBaseMsgDeletePollResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreatePoll(request: MsgCreatePoll): Promise<MsgCreatePollResponse>;
  UpdatePoll(request: MsgUpdatePoll): Promise<MsgUpdatePollResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeletePoll(request: MsgDeletePoll): Promise<MsgDeletePollResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreatePoll = this.CreatePoll.bind(this);
    this.UpdatePoll = this.UpdatePoll.bind(this);
    this.DeletePoll = this.DeletePoll.bind(this);
  }
  CreatePoll(request: MsgCreatePoll): Promise<MsgCreatePollResponse> {
    const data = MsgCreatePoll.encode(request).finish();
    const promise = this.rpc.request("electra.voter.Msg", "CreatePoll", data);
    return promise.then((data) => MsgCreatePollResponse.decode(new _m0.Reader(data)));
  }

  UpdatePoll(request: MsgUpdatePoll): Promise<MsgUpdatePollResponse> {
    const data = MsgUpdatePoll.encode(request).finish();
    const promise = this.rpc.request("electra.voter.Msg", "UpdatePoll", data);
    return promise.then((data) => MsgUpdatePollResponse.decode(new _m0.Reader(data)));
  }

  DeletePoll(request: MsgDeletePoll): Promise<MsgDeletePollResponse> {
    const data = MsgDeletePoll.encode(request).finish();
    const promise = this.rpc.request("electra.voter.Msg", "DeletePoll", data);
    return promise.then((data) => MsgDeletePollResponse.decode(new _m0.Reader(data)));
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

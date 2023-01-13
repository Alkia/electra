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

export interface MsgCreateVote {
  creator: string;
  pollID: string;
  option: string;
}

export interface MsgCreateVoteResponse {
  id: number;
}

export interface MsgUpdateVote {
  creator: string;
  id: number;
  pollID: string;
  option: string;
}

export interface MsgUpdateVoteResponse {
}

export interface MsgDeleteVote {
  creator: string;
  id: number;
}

export interface MsgDeleteVoteResponse {
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

function createBaseMsgCreateVote(): MsgCreateVote {
  return { creator: "", pollID: "", option: "" };
}

export const MsgCreateVote = {
  encode(message: MsgCreateVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pollID !== "") {
      writer.uint32(18).string(message.pollID);
    }
    if (message.option !== "") {
      writer.uint32(26).string(message.option);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pollID = reader.string();
          break;
        case 3:
          message.option = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVote {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      pollID: isSet(object.pollID) ? String(object.pollID) : "",
      option: isSet(object.option) ? String(object.option) : "",
    };
  },

  toJSON(message: MsgCreateVote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pollID !== undefined && (obj.pollID = message.pollID);
    message.option !== undefined && (obj.option = message.option);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateVote>, I>>(object: I): MsgCreateVote {
    const message = createBaseMsgCreateVote();
    message.creator = object.creator ?? "";
    message.pollID = object.pollID ?? "";
    message.option = object.option ?? "";
    return message;
  },
};

function createBaseMsgCreateVoteResponse(): MsgCreateVoteResponse {
  return { id: 0 };
}

export const MsgCreateVoteResponse = {
  encode(message: MsgCreateVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVoteResponse();
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

  fromJSON(object: any): MsgCreateVoteResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateVoteResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateVoteResponse>, I>>(object: I): MsgCreateVoteResponse {
    const message = createBaseMsgCreateVoteResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateVote(): MsgUpdateVote {
  return { creator: "", id: 0, pollID: "", option: "" };
}

export const MsgUpdateVote = {
  encode(message: MsgUpdateVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.pollID !== "") {
      writer.uint32(26).string(message.pollID);
    }
    if (message.option !== "") {
      writer.uint32(34).string(message.option);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateVote();
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
          message.pollID = reader.string();
          break;
        case 4:
          message.option = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateVote {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      pollID: isSet(object.pollID) ? String(object.pollID) : "",
      option: isSet(object.option) ? String(object.option) : "",
    };
  },

  toJSON(message: MsgUpdateVote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.pollID !== undefined && (obj.pollID = message.pollID);
    message.option !== undefined && (obj.option = message.option);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateVote>, I>>(object: I): MsgUpdateVote {
    const message = createBaseMsgUpdateVote();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.pollID = object.pollID ?? "";
    message.option = object.option ?? "";
    return message;
  },
};

function createBaseMsgUpdateVoteResponse(): MsgUpdateVoteResponse {
  return {};
}

export const MsgUpdateVoteResponse = {
  encode(_: MsgUpdateVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateVoteResponse();
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

  fromJSON(_: any): MsgUpdateVoteResponse {
    return {};
  },

  toJSON(_: MsgUpdateVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateVoteResponse>, I>>(_: I): MsgUpdateVoteResponse {
    const message = createBaseMsgUpdateVoteResponse();
    return message;
  },
};

function createBaseMsgDeleteVote(): MsgDeleteVote {
  return { creator: "", id: 0 };
}

export const MsgDeleteVote = {
  encode(message: MsgDeleteVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteVote();
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

  fromJSON(object: any): MsgDeleteVote {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteVote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteVote>, I>>(object: I): MsgDeleteVote {
    const message = createBaseMsgDeleteVote();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteVoteResponse(): MsgDeleteVoteResponse {
  return {};
}

export const MsgDeleteVoteResponse = {
  encode(_: MsgDeleteVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteVoteResponse();
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

  fromJSON(_: any): MsgDeleteVoteResponse {
    return {};
  },

  toJSON(_: MsgDeleteVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteVoteResponse>, I>>(_: I): MsgDeleteVoteResponse {
    const message = createBaseMsgDeleteVoteResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreatePoll(request: MsgCreatePoll): Promise<MsgCreatePollResponse>;
  UpdatePoll(request: MsgUpdatePoll): Promise<MsgUpdatePollResponse>;
  DeletePoll(request: MsgDeletePoll): Promise<MsgDeletePollResponse>;
  CreateVote(request: MsgCreateVote): Promise<MsgCreateVoteResponse>;
  UpdateVote(request: MsgUpdateVote): Promise<MsgUpdateVoteResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteVote(request: MsgDeleteVote): Promise<MsgDeleteVoteResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreatePoll = this.CreatePoll.bind(this);
    this.UpdatePoll = this.UpdatePoll.bind(this);
    this.DeletePoll = this.DeletePoll.bind(this);
    this.CreateVote = this.CreateVote.bind(this);
    this.UpdateVote = this.UpdateVote.bind(this);
    this.DeleteVote = this.DeleteVote.bind(this);
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

  CreateVote(request: MsgCreateVote): Promise<MsgCreateVoteResponse> {
    const data = MsgCreateVote.encode(request).finish();
    const promise = this.rpc.request("electra.voter.Msg", "CreateVote", data);
    return promise.then((data) => MsgCreateVoteResponse.decode(new _m0.Reader(data)));
  }

  UpdateVote(request: MsgUpdateVote): Promise<MsgUpdateVoteResponse> {
    const data = MsgUpdateVote.encode(request).finish();
    const promise = this.rpc.request("electra.voter.Msg", "UpdateVote", data);
    return promise.then((data) => MsgUpdateVoteResponse.decode(new _m0.Reader(data)));
  }

  DeleteVote(request: MsgDeleteVote): Promise<MsgDeleteVoteResponse> {
    const data = MsgDeleteVote.encode(request).finish();
    const promise = this.rpc.request("electra.voter.Msg", "DeleteVote", data);
    return promise.then((data) => MsgDeleteVoteResponse.decode(new _m0.Reader(data)));
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

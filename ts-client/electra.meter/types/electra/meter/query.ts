/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Meterdirectory } from "./meterdirectory";
import { Meterreadings } from "./meterreadings";
import { Params } from "./params";
import { PowerPurchaseContract } from "./power_purchase_contract";

export const protobufPackage = "electra.meter";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetMeterreadingsRequest {
  deviceID: string;
  timestamp: number;
}

export interface QueryGetMeterreadingsResponse {
  meterreadings: Meterreadings | undefined;
}

export interface QueryAllMeterreadingsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllMeterreadingsResponse {
  meterreadings: Meterreadings[];
  pagination: PageResponse | undefined;
}

export interface QueryGetMeterdirectoryRequest {
  deviceID: string;
  barcodeserial: string;
}

export interface QueryGetMeterdirectoryResponse {
  meterdirectory: Meterdirectory | undefined;
}

export interface QueryAllMeterdirectoryRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllMeterdirectoryResponse {
  meterdirectory: Meterdirectory[];
  pagination: PageResponse | undefined;
}

export interface QueryListrecordingsRequest {
  deviceID: string;
  start: number;
  end: number;
  byUnixTime: boolean;
}

export interface QueryListrecordingsResponse {
  meterreadings: string;
  comments: string;
  total: number;
}

export interface QueryGetPowerPurchaseContractRequest {
  contractID: string;
  contractDeviceID: string;
}

export interface QueryGetPowerPurchaseContractResponse {
  powerPurchaseContract: PowerPurchaseContract | undefined;
}

export interface QueryAllPowerPurchaseContractRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPowerPurchaseContractResponse {
  powerPurchaseContract: PowerPurchaseContract[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetMeterreadingsRequest(): QueryGetMeterreadingsRequest {
  return { deviceID: "", timestamp: 0 };
}

export const QueryGetMeterreadingsRequest = {
  encode(message: QueryGetMeterreadingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceID !== "") {
      writer.uint32(10).string(message.deviceID);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMeterreadingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMeterreadingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceID = reader.string();
          break;
        case 2:
          message.timestamp = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMeterreadingsRequest {
    return {
      deviceID: isSet(object.deviceID) ? String(object.deviceID) : "",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: QueryGetMeterreadingsRequest): unknown {
    const obj: any = {};
    message.deviceID !== undefined && (obj.deviceID = message.deviceID);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMeterreadingsRequest>, I>>(object: I): QueryGetMeterreadingsRequest {
    const message = createBaseQueryGetMeterreadingsRequest();
    message.deviceID = object.deviceID ?? "";
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBaseQueryGetMeterreadingsResponse(): QueryGetMeterreadingsResponse {
  return { meterreadings: undefined };
}

export const QueryGetMeterreadingsResponse = {
  encode(message: QueryGetMeterreadingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meterreadings !== undefined) {
      Meterreadings.encode(message.meterreadings, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMeterreadingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMeterreadingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.meterreadings = Meterreadings.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMeterreadingsResponse {
    return { meterreadings: isSet(object.meterreadings) ? Meterreadings.fromJSON(object.meterreadings) : undefined };
  },

  toJSON(message: QueryGetMeterreadingsResponse): unknown {
    const obj: any = {};
    message.meterreadings !== undefined
      && (obj.meterreadings = message.meterreadings ? Meterreadings.toJSON(message.meterreadings) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMeterreadingsResponse>, I>>(
    object: I,
  ): QueryGetMeterreadingsResponse {
    const message = createBaseQueryGetMeterreadingsResponse();
    message.meterreadings = (object.meterreadings !== undefined && object.meterreadings !== null)
      ? Meterreadings.fromPartial(object.meterreadings)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMeterreadingsRequest(): QueryAllMeterreadingsRequest {
  return { pagination: undefined };
}

export const QueryAllMeterreadingsRequest = {
  encode(message: QueryAllMeterreadingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMeterreadingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMeterreadingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMeterreadingsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllMeterreadingsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMeterreadingsRequest>, I>>(object: I): QueryAllMeterreadingsRequest {
    const message = createBaseQueryAllMeterreadingsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMeterreadingsResponse(): QueryAllMeterreadingsResponse {
  return { meterreadings: [], pagination: undefined };
}

export const QueryAllMeterreadingsResponse = {
  encode(message: QueryAllMeterreadingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.meterreadings) {
      Meterreadings.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMeterreadingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMeterreadingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.meterreadings.push(Meterreadings.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMeterreadingsResponse {
    return {
      meterreadings: Array.isArray(object?.meterreadings)
        ? object.meterreadings.map((e: any) => Meterreadings.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllMeterreadingsResponse): unknown {
    const obj: any = {};
    if (message.meterreadings) {
      obj.meterreadings = message.meterreadings.map((e) => e ? Meterreadings.toJSON(e) : undefined);
    } else {
      obj.meterreadings = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMeterreadingsResponse>, I>>(
    object: I,
  ): QueryAllMeterreadingsResponse {
    const message = createBaseQueryAllMeterreadingsResponse();
    message.meterreadings = object.meterreadings?.map((e) => Meterreadings.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetMeterdirectoryRequest(): QueryGetMeterdirectoryRequest {
  return { deviceID: "", barcodeserial: "" };
}

export const QueryGetMeterdirectoryRequest = {
  encode(message: QueryGetMeterdirectoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceID !== "") {
      writer.uint32(10).string(message.deviceID);
    }
    if (message.barcodeserial !== "") {
      writer.uint32(18).string(message.barcodeserial);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMeterdirectoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMeterdirectoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceID = reader.string();
          break;
        case 2:
          message.barcodeserial = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMeterdirectoryRequest {
    return {
      deviceID: isSet(object.deviceID) ? String(object.deviceID) : "",
      barcodeserial: isSet(object.barcodeserial) ? String(object.barcodeserial) : "",
    };
  },

  toJSON(message: QueryGetMeterdirectoryRequest): unknown {
    const obj: any = {};
    message.deviceID !== undefined && (obj.deviceID = message.deviceID);
    message.barcodeserial !== undefined && (obj.barcodeserial = message.barcodeserial);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMeterdirectoryRequest>, I>>(
    object: I,
  ): QueryGetMeterdirectoryRequest {
    const message = createBaseQueryGetMeterdirectoryRequest();
    message.deviceID = object.deviceID ?? "";
    message.barcodeserial = object.barcodeserial ?? "";
    return message;
  },
};

function createBaseQueryGetMeterdirectoryResponse(): QueryGetMeterdirectoryResponse {
  return { meterdirectory: undefined };
}

export const QueryGetMeterdirectoryResponse = {
  encode(message: QueryGetMeterdirectoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meterdirectory !== undefined) {
      Meterdirectory.encode(message.meterdirectory, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMeterdirectoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMeterdirectoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.meterdirectory = Meterdirectory.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMeterdirectoryResponse {
    return {
      meterdirectory: isSet(object.meterdirectory) ? Meterdirectory.fromJSON(object.meterdirectory) : undefined,
    };
  },

  toJSON(message: QueryGetMeterdirectoryResponse): unknown {
    const obj: any = {};
    message.meterdirectory !== undefined
      && (obj.meterdirectory = message.meterdirectory ? Meterdirectory.toJSON(message.meterdirectory) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMeterdirectoryResponse>, I>>(
    object: I,
  ): QueryGetMeterdirectoryResponse {
    const message = createBaseQueryGetMeterdirectoryResponse();
    message.meterdirectory = (object.meterdirectory !== undefined && object.meterdirectory !== null)
      ? Meterdirectory.fromPartial(object.meterdirectory)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMeterdirectoryRequest(): QueryAllMeterdirectoryRequest {
  return { pagination: undefined };
}

export const QueryAllMeterdirectoryRequest = {
  encode(message: QueryAllMeterdirectoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMeterdirectoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMeterdirectoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMeterdirectoryRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllMeterdirectoryRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMeterdirectoryRequest>, I>>(
    object: I,
  ): QueryAllMeterdirectoryRequest {
    const message = createBaseQueryAllMeterdirectoryRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMeterdirectoryResponse(): QueryAllMeterdirectoryResponse {
  return { meterdirectory: [], pagination: undefined };
}

export const QueryAllMeterdirectoryResponse = {
  encode(message: QueryAllMeterdirectoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.meterdirectory) {
      Meterdirectory.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMeterdirectoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMeterdirectoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.meterdirectory.push(Meterdirectory.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMeterdirectoryResponse {
    return {
      meterdirectory: Array.isArray(object?.meterdirectory)
        ? object.meterdirectory.map((e: any) => Meterdirectory.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllMeterdirectoryResponse): unknown {
    const obj: any = {};
    if (message.meterdirectory) {
      obj.meterdirectory = message.meterdirectory.map((e) => e ? Meterdirectory.toJSON(e) : undefined);
    } else {
      obj.meterdirectory = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMeterdirectoryResponse>, I>>(
    object: I,
  ): QueryAllMeterdirectoryResponse {
    const message = createBaseQueryAllMeterdirectoryResponse();
    message.meterdirectory = object.meterdirectory?.map((e) => Meterdirectory.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryListrecordingsRequest(): QueryListrecordingsRequest {
  return { deviceID: "", start: 0, end: 0, byUnixTime: false };
}

export const QueryListrecordingsRequest = {
  encode(message: QueryListrecordingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceID !== "") {
      writer.uint32(10).string(message.deviceID);
    }
    if (message.start !== 0) {
      writer.uint32(16).uint64(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(24).uint64(message.end);
    }
    if (message.byUnixTime === true) {
      writer.uint32(32).bool(message.byUnixTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListrecordingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListrecordingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceID = reader.string();
          break;
        case 2:
          message.start = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.end = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.byUnixTime = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryListrecordingsRequest {
    return {
      deviceID: isSet(object.deviceID) ? String(object.deviceID) : "",
      start: isSet(object.start) ? Number(object.start) : 0,
      end: isSet(object.end) ? Number(object.end) : 0,
      byUnixTime: isSet(object.byUnixTime) ? Boolean(object.byUnixTime) : false,
    };
  },

  toJSON(message: QueryListrecordingsRequest): unknown {
    const obj: any = {};
    message.deviceID !== undefined && (obj.deviceID = message.deviceID);
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.end !== undefined && (obj.end = Math.round(message.end));
    message.byUnixTime !== undefined && (obj.byUnixTime = message.byUnixTime);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListrecordingsRequest>, I>>(object: I): QueryListrecordingsRequest {
    const message = createBaseQueryListrecordingsRequest();
    message.deviceID = object.deviceID ?? "";
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    message.byUnixTime = object.byUnixTime ?? false;
    return message;
  },
};

function createBaseQueryListrecordingsResponse(): QueryListrecordingsResponse {
  return { meterreadings: "", comments: "", total: 0 };
}

export const QueryListrecordingsResponse = {
  encode(message: QueryListrecordingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meterreadings !== "") {
      writer.uint32(10).string(message.meterreadings);
    }
    if (message.comments !== "") {
      writer.uint32(18).string(message.comments);
    }
    if (message.total !== 0) {
      writer.uint32(24).uint64(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListrecordingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListrecordingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.meterreadings = reader.string();
          break;
        case 2:
          message.comments = reader.string();
          break;
        case 3:
          message.total = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryListrecordingsResponse {
    return {
      meterreadings: isSet(object.meterreadings) ? String(object.meterreadings) : "",
      comments: isSet(object.comments) ? String(object.comments) : "",
      total: isSet(object.total) ? Number(object.total) : 0,
    };
  },

  toJSON(message: QueryListrecordingsResponse): unknown {
    const obj: any = {};
    message.meterreadings !== undefined && (obj.meterreadings = message.meterreadings);
    message.comments !== undefined && (obj.comments = message.comments);
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListrecordingsResponse>, I>>(object: I): QueryListrecordingsResponse {
    const message = createBaseQueryListrecordingsResponse();
    message.meterreadings = object.meterreadings ?? "";
    message.comments = object.comments ?? "";
    message.total = object.total ?? 0;
    return message;
  },
};

function createBaseQueryGetPowerPurchaseContractRequest(): QueryGetPowerPurchaseContractRequest {
  return { contractID: "", contractDeviceID: "" };
}

export const QueryGetPowerPurchaseContractRequest = {
  encode(message: QueryGetPowerPurchaseContractRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractID !== "") {
      writer.uint32(10).string(message.contractID);
    }
    if (message.contractDeviceID !== "") {
      writer.uint32(18).string(message.contractDeviceID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPowerPurchaseContractRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPowerPurchaseContractRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractID = reader.string();
          break;
        case 2:
          message.contractDeviceID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPowerPurchaseContractRequest {
    return {
      contractID: isSet(object.contractID) ? String(object.contractID) : "",
      contractDeviceID: isSet(object.contractDeviceID) ? String(object.contractDeviceID) : "",
    };
  },

  toJSON(message: QueryGetPowerPurchaseContractRequest): unknown {
    const obj: any = {};
    message.contractID !== undefined && (obj.contractID = message.contractID);
    message.contractDeviceID !== undefined && (obj.contractDeviceID = message.contractDeviceID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPowerPurchaseContractRequest>, I>>(
    object: I,
  ): QueryGetPowerPurchaseContractRequest {
    const message = createBaseQueryGetPowerPurchaseContractRequest();
    message.contractID = object.contractID ?? "";
    message.contractDeviceID = object.contractDeviceID ?? "";
    return message;
  },
};

function createBaseQueryGetPowerPurchaseContractResponse(): QueryGetPowerPurchaseContractResponse {
  return { powerPurchaseContract: undefined };
}

export const QueryGetPowerPurchaseContractResponse = {
  encode(message: QueryGetPowerPurchaseContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.powerPurchaseContract !== undefined) {
      PowerPurchaseContract.encode(message.powerPurchaseContract, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPowerPurchaseContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPowerPurchaseContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.powerPurchaseContract = PowerPurchaseContract.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPowerPurchaseContractResponse {
    return {
      powerPurchaseContract: isSet(object.powerPurchaseContract)
        ? PowerPurchaseContract.fromJSON(object.powerPurchaseContract)
        : undefined,
    };
  },

  toJSON(message: QueryGetPowerPurchaseContractResponse): unknown {
    const obj: any = {};
    message.powerPurchaseContract !== undefined && (obj.powerPurchaseContract = message.powerPurchaseContract
      ? PowerPurchaseContract.toJSON(message.powerPurchaseContract)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPowerPurchaseContractResponse>, I>>(
    object: I,
  ): QueryGetPowerPurchaseContractResponse {
    const message = createBaseQueryGetPowerPurchaseContractResponse();
    message.powerPurchaseContract =
      (object.powerPurchaseContract !== undefined && object.powerPurchaseContract !== null)
        ? PowerPurchaseContract.fromPartial(object.powerPurchaseContract)
        : undefined;
    return message;
  },
};

function createBaseQueryAllPowerPurchaseContractRequest(): QueryAllPowerPurchaseContractRequest {
  return { pagination: undefined };
}

export const QueryAllPowerPurchaseContractRequest = {
  encode(message: QueryAllPowerPurchaseContractRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPowerPurchaseContractRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPowerPurchaseContractRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPowerPurchaseContractRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPowerPurchaseContractRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPowerPurchaseContractRequest>, I>>(
    object: I,
  ): QueryAllPowerPurchaseContractRequest {
    const message = createBaseQueryAllPowerPurchaseContractRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPowerPurchaseContractResponse(): QueryAllPowerPurchaseContractResponse {
  return { powerPurchaseContract: [], pagination: undefined };
}

export const QueryAllPowerPurchaseContractResponse = {
  encode(message: QueryAllPowerPurchaseContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.powerPurchaseContract) {
      PowerPurchaseContract.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPowerPurchaseContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPowerPurchaseContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.powerPurchaseContract.push(PowerPurchaseContract.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPowerPurchaseContractResponse {
    return {
      powerPurchaseContract: Array.isArray(object?.powerPurchaseContract)
        ? object.powerPurchaseContract.map((e: any) => PowerPurchaseContract.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPowerPurchaseContractResponse): unknown {
    const obj: any = {};
    if (message.powerPurchaseContract) {
      obj.powerPurchaseContract = message.powerPurchaseContract.map((e) =>
        e ? PowerPurchaseContract.toJSON(e) : undefined
      );
    } else {
      obj.powerPurchaseContract = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPowerPurchaseContractResponse>, I>>(
    object: I,
  ): QueryAllPowerPurchaseContractResponse {
    const message = createBaseQueryAllPowerPurchaseContractResponse();
    message.powerPurchaseContract = object.powerPurchaseContract?.map((e) => PowerPurchaseContract.fromPartial(e))
      || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Meterreadings by index. */
  Meterreadings(request: QueryGetMeterreadingsRequest): Promise<QueryGetMeterreadingsResponse>;
  /** Queries a list of Meterreadings items. */
  MeterreadingsAll(request: QueryAllMeterreadingsRequest): Promise<QueryAllMeterreadingsResponse>;
  /** Queries a Meterdirectory by index. */
  Meterdirectory(request: QueryGetMeterdirectoryRequest): Promise<QueryGetMeterdirectoryResponse>;
  /** Queries a list of Meterdirectory items. */
  MeterdirectoryAll(request: QueryAllMeterdirectoryRequest): Promise<QueryAllMeterdirectoryResponse>;
  /** Queries a list of Listrecordings items. */
  Listrecordings(request: QueryListrecordingsRequest): Promise<QueryListrecordingsResponse>;
  /** Queries a PowerPurchaseContract by index. */
  PowerPurchaseContract(request: QueryGetPowerPurchaseContractRequest): Promise<QueryGetPowerPurchaseContractResponse>;
  /** Queries a list of PowerPurchaseContract items. */
  PowerPurchaseContractAll(
    request: QueryAllPowerPurchaseContractRequest,
  ): Promise<QueryAllPowerPurchaseContractResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Meterreadings = this.Meterreadings.bind(this);
    this.MeterreadingsAll = this.MeterreadingsAll.bind(this);
    this.Meterdirectory = this.Meterdirectory.bind(this);
    this.MeterdirectoryAll = this.MeterdirectoryAll.bind(this);
    this.Listrecordings = this.Listrecordings.bind(this);
    this.PowerPurchaseContract = this.PowerPurchaseContract.bind(this);
    this.PowerPurchaseContractAll = this.PowerPurchaseContractAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Meterreadings(request: QueryGetMeterreadingsRequest): Promise<QueryGetMeterreadingsResponse> {
    const data = QueryGetMeterreadingsRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "Meterreadings", data);
    return promise.then((data) => QueryGetMeterreadingsResponse.decode(new _m0.Reader(data)));
  }

  MeterreadingsAll(request: QueryAllMeterreadingsRequest): Promise<QueryAllMeterreadingsResponse> {
    const data = QueryAllMeterreadingsRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "MeterreadingsAll", data);
    return promise.then((data) => QueryAllMeterreadingsResponse.decode(new _m0.Reader(data)));
  }

  Meterdirectory(request: QueryGetMeterdirectoryRequest): Promise<QueryGetMeterdirectoryResponse> {
    const data = QueryGetMeterdirectoryRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "Meterdirectory", data);
    return promise.then((data) => QueryGetMeterdirectoryResponse.decode(new _m0.Reader(data)));
  }

  MeterdirectoryAll(request: QueryAllMeterdirectoryRequest): Promise<QueryAllMeterdirectoryResponse> {
    const data = QueryAllMeterdirectoryRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "MeterdirectoryAll", data);
    return promise.then((data) => QueryAllMeterdirectoryResponse.decode(new _m0.Reader(data)));
  }

  Listrecordings(request: QueryListrecordingsRequest): Promise<QueryListrecordingsResponse> {
    const data = QueryListrecordingsRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "Listrecordings", data);
    return promise.then((data) => QueryListrecordingsResponse.decode(new _m0.Reader(data)));
  }

  PowerPurchaseContract(request: QueryGetPowerPurchaseContractRequest): Promise<QueryGetPowerPurchaseContractResponse> {
    const data = QueryGetPowerPurchaseContractRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "PowerPurchaseContract", data);
    return promise.then((data) => QueryGetPowerPurchaseContractResponse.decode(new _m0.Reader(data)));
  }

  PowerPurchaseContractAll(
    request: QueryAllPowerPurchaseContractRequest,
  ): Promise<QueryAllPowerPurchaseContractResponse> {
    const data = QueryAllPowerPurchaseContractRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "PowerPurchaseContractAll", data);
    return promise.then((data) => QueryAllPowerPurchaseContractResponse.decode(new _m0.Reader(data)));
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

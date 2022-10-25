/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Billingcycles } from "./billingcycles";
import { Customerbillingline } from "./customerbillingline";
import { Customerbills } from "./customerbills";
import { Meterdirectory } from "./meterdirectory";
import { Meterreadings } from "./meterreadings";
import { Params } from "./params";
import { PowerPurchaseContract } from "./power_purchase_contract";
import { PpaMap } from "./ppa_map";
import { Producerbillingline } from "./producerbillingline";
import { Producerbills } from "./producerbills";

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

export interface QueryGetPpaMapRequest {
  consumerDeviceID: string;
  agreementID: string;
  agreementActive: boolean;
  contractID: string;
}

export interface QueryGetPpaMapResponse {
  ppaMap: PpaMap | undefined;
}

export interface QueryAllPpaMapRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPpaMapResponse {
  ppaMap: PpaMap[];
  pagination: PageResponse | undefined;
}

export interface QueryGetBillingcyclesRequest {
  cycleID: number;
}

export interface QueryGetBillingcyclesResponse {
  billingcycles: Billingcycles | undefined;
}

export interface QueryAllBillingcyclesRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBillingcyclesResponse {
  billingcycles: Billingcycles[];
  pagination: PageResponse | undefined;
}

export interface QueryCurrentcycleIDRequest {
}

export interface QueryCurrentcycleIDResponse {
  cycleID: number;
  begin: number;
  end: number;
  whin: number;
  whout: number;
  moneyin: number;
  moneyout: number;
  curency: string;
}

export interface QueryGetCustomerbillinglineRequest {
  customerDeviceID: string;
  cycleID: number;
  lineid: number;
}

export interface QueryGetCustomerbillinglineResponse {
  customerbillingline: Customerbillingline | undefined;
}

export interface QueryAllCustomerbillinglineRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCustomerbillinglineResponse {
  customerbillingline: Customerbillingline[];
  pagination: PageResponse | undefined;
}

export interface QueryGetcustomerbillRequest {
  customerDeviceID: string;
  billCycleID: number;
}

export interface QueryGetcustomerbillResponse {
  customerbillinglines: string;
  billTotalWh: number;
  billTotalPrice: number;
  currency: string;
  nblines: number;
  comments: string;
}

export interface QueryGetCustomerbillsRequest {
  billCycleID: number;
  customerDeviceID: string;
}

export interface QueryGetCustomerbillsResponse {
  customerbills: Customerbills | undefined;
}

export interface QueryAllCustomerbillsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCustomerbillsResponse {
  customerbills: Customerbills[];
  pagination: PageResponse | undefined;
}

export interface QueryGetProducerbillinglineRequest {
  producerDeviceID: string;
  cycleID: number;
  lineid: number;
}

export interface QueryGetProducerbillinglineResponse {
  producerbillingline: Producerbillingline | undefined;
}

export interface QueryAllProducerbillinglineRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllProducerbillinglineResponse {
  producerbillingline: Producerbillingline[];
  pagination: PageResponse | undefined;
}

export interface QueryGetproducerbillRequest {
  producerDeviceID: string;
  billCycleID: number;
}

export interface QueryGetproducerbillResponse {
  producerbillinglines: string;
  billTotalWh: number;
  billTotalPrice: number;
  curency: string;
  nblines: number;
  comments: string;
}

export interface QueryGetProducerbillsRequest {
  billCycleID: number;
  producerDeviceID: string;
}

export interface QueryGetProducerbillsResponse {
  producerbills: Producerbills | undefined;
}

export interface QueryAllProducerbillsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllProducerbillsResponse {
  producerbills: Producerbills[];
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

function createBaseQueryGetPpaMapRequest(): QueryGetPpaMapRequest {
  return { consumerDeviceID: "", agreementID: "", agreementActive: false, contractID: "" };
}

export const QueryGetPpaMapRequest = {
  encode(message: QueryGetPpaMapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consumerDeviceID !== "") {
      writer.uint32(10).string(message.consumerDeviceID);
    }
    if (message.agreementID !== "") {
      writer.uint32(18).string(message.agreementID);
    }
    if (message.agreementActive === true) {
      writer.uint32(24).bool(message.agreementActive);
    }
    if (message.contractID !== "") {
      writer.uint32(34).string(message.contractID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPpaMapRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPpaMapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consumerDeviceID = reader.string();
          break;
        case 2:
          message.agreementID = reader.string();
          break;
        case 3:
          message.agreementActive = reader.bool();
          break;
        case 4:
          message.contractID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPpaMapRequest {
    return {
      consumerDeviceID: isSet(object.consumerDeviceID) ? String(object.consumerDeviceID) : "",
      agreementID: isSet(object.agreementID) ? String(object.agreementID) : "",
      agreementActive: isSet(object.agreementActive) ? Boolean(object.agreementActive) : false,
      contractID: isSet(object.contractID) ? String(object.contractID) : "",
    };
  },

  toJSON(message: QueryGetPpaMapRequest): unknown {
    const obj: any = {};
    message.consumerDeviceID !== undefined && (obj.consumerDeviceID = message.consumerDeviceID);
    message.agreementID !== undefined && (obj.agreementID = message.agreementID);
    message.agreementActive !== undefined && (obj.agreementActive = message.agreementActive);
    message.contractID !== undefined && (obj.contractID = message.contractID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPpaMapRequest>, I>>(object: I): QueryGetPpaMapRequest {
    const message = createBaseQueryGetPpaMapRequest();
    message.consumerDeviceID = object.consumerDeviceID ?? "";
    message.agreementID = object.agreementID ?? "";
    message.agreementActive = object.agreementActive ?? false;
    message.contractID = object.contractID ?? "";
    return message;
  },
};

function createBaseQueryGetPpaMapResponse(): QueryGetPpaMapResponse {
  return { ppaMap: undefined };
}

export const QueryGetPpaMapResponse = {
  encode(message: QueryGetPpaMapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ppaMap !== undefined) {
      PpaMap.encode(message.ppaMap, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPpaMapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPpaMapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ppaMap = PpaMap.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPpaMapResponse {
    return { ppaMap: isSet(object.ppaMap) ? PpaMap.fromJSON(object.ppaMap) : undefined };
  },

  toJSON(message: QueryGetPpaMapResponse): unknown {
    const obj: any = {};
    message.ppaMap !== undefined && (obj.ppaMap = message.ppaMap ? PpaMap.toJSON(message.ppaMap) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPpaMapResponse>, I>>(object: I): QueryGetPpaMapResponse {
    const message = createBaseQueryGetPpaMapResponse();
    message.ppaMap = (object.ppaMap !== undefined && object.ppaMap !== null)
      ? PpaMap.fromPartial(object.ppaMap)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPpaMapRequest(): QueryAllPpaMapRequest {
  return { pagination: undefined };
}

export const QueryAllPpaMapRequest = {
  encode(message: QueryAllPpaMapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPpaMapRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPpaMapRequest();
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

  fromJSON(object: any): QueryAllPpaMapRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPpaMapRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPpaMapRequest>, I>>(object: I): QueryAllPpaMapRequest {
    const message = createBaseQueryAllPpaMapRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPpaMapResponse(): QueryAllPpaMapResponse {
  return { ppaMap: [], pagination: undefined };
}

export const QueryAllPpaMapResponse = {
  encode(message: QueryAllPpaMapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ppaMap) {
      PpaMap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPpaMapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPpaMapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ppaMap.push(PpaMap.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPpaMapResponse {
    return {
      ppaMap: Array.isArray(object?.ppaMap) ? object.ppaMap.map((e: any) => PpaMap.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPpaMapResponse): unknown {
    const obj: any = {};
    if (message.ppaMap) {
      obj.ppaMap = message.ppaMap.map((e) => e ? PpaMap.toJSON(e) : undefined);
    } else {
      obj.ppaMap = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPpaMapResponse>, I>>(object: I): QueryAllPpaMapResponse {
    const message = createBaseQueryAllPpaMapResponse();
    message.ppaMap = object.ppaMap?.map((e) => PpaMap.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetBillingcyclesRequest(): QueryGetBillingcyclesRequest {
  return { cycleID: 0 };
}

export const QueryGetBillingcyclesRequest = {
  encode(message: QueryGetBillingcyclesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cycleID !== 0) {
      writer.uint32(8).uint64(message.cycleID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBillingcyclesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBillingcyclesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cycleID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBillingcyclesRequest {
    return { cycleID: isSet(object.cycleID) ? Number(object.cycleID) : 0 };
  },

  toJSON(message: QueryGetBillingcyclesRequest): unknown {
    const obj: any = {};
    message.cycleID !== undefined && (obj.cycleID = Math.round(message.cycleID));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetBillingcyclesRequest>, I>>(object: I): QueryGetBillingcyclesRequest {
    const message = createBaseQueryGetBillingcyclesRequest();
    message.cycleID = object.cycleID ?? 0;
    return message;
  },
};

function createBaseQueryGetBillingcyclesResponse(): QueryGetBillingcyclesResponse {
  return { billingcycles: undefined };
}

export const QueryGetBillingcyclesResponse = {
  encode(message: QueryGetBillingcyclesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.billingcycles !== undefined) {
      Billingcycles.encode(message.billingcycles, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBillingcyclesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBillingcyclesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.billingcycles = Billingcycles.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBillingcyclesResponse {
    return { billingcycles: isSet(object.billingcycles) ? Billingcycles.fromJSON(object.billingcycles) : undefined };
  },

  toJSON(message: QueryGetBillingcyclesResponse): unknown {
    const obj: any = {};
    message.billingcycles !== undefined
      && (obj.billingcycles = message.billingcycles ? Billingcycles.toJSON(message.billingcycles) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetBillingcyclesResponse>, I>>(
    object: I,
  ): QueryGetBillingcyclesResponse {
    const message = createBaseQueryGetBillingcyclesResponse();
    message.billingcycles = (object.billingcycles !== undefined && object.billingcycles !== null)
      ? Billingcycles.fromPartial(object.billingcycles)
      : undefined;
    return message;
  },
};

function createBaseQueryAllBillingcyclesRequest(): QueryAllBillingcyclesRequest {
  return { pagination: undefined };
}

export const QueryAllBillingcyclesRequest = {
  encode(message: QueryAllBillingcyclesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBillingcyclesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBillingcyclesRequest();
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

  fromJSON(object: any): QueryAllBillingcyclesRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllBillingcyclesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBillingcyclesRequest>, I>>(object: I): QueryAllBillingcyclesRequest {
    const message = createBaseQueryAllBillingcyclesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllBillingcyclesResponse(): QueryAllBillingcyclesResponse {
  return { billingcycles: [], pagination: undefined };
}

export const QueryAllBillingcyclesResponse = {
  encode(message: QueryAllBillingcyclesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.billingcycles) {
      Billingcycles.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBillingcyclesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBillingcyclesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.billingcycles.push(Billingcycles.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllBillingcyclesResponse {
    return {
      billingcycles: Array.isArray(object?.billingcycles)
        ? object.billingcycles.map((e: any) => Billingcycles.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllBillingcyclesResponse): unknown {
    const obj: any = {};
    if (message.billingcycles) {
      obj.billingcycles = message.billingcycles.map((e) => e ? Billingcycles.toJSON(e) : undefined);
    } else {
      obj.billingcycles = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllBillingcyclesResponse>, I>>(
    object: I,
  ): QueryAllBillingcyclesResponse {
    const message = createBaseQueryAllBillingcyclesResponse();
    message.billingcycles = object.billingcycles?.map((e) => Billingcycles.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryCurrentcycleIDRequest(): QueryCurrentcycleIDRequest {
  return {};
}

export const QueryCurrentcycleIDRequest = {
  encode(_: QueryCurrentcycleIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentcycleIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentcycleIDRequest();
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

  fromJSON(_: any): QueryCurrentcycleIDRequest {
    return {};
  },

  toJSON(_: QueryCurrentcycleIDRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCurrentcycleIDRequest>, I>>(_: I): QueryCurrentcycleIDRequest {
    const message = createBaseQueryCurrentcycleIDRequest();
    return message;
  },
};

function createBaseQueryCurrentcycleIDResponse(): QueryCurrentcycleIDResponse {
  return { cycleID: 0, begin: 0, end: 0, whin: 0, whout: 0, moneyin: 0, moneyout: 0, curency: "" };
}

export const QueryCurrentcycleIDResponse = {
  encode(message: QueryCurrentcycleIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentcycleIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentcycleIDResponse();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCurrentcycleIDResponse {
    return {
      cycleID: isSet(object.cycleID) ? Number(object.cycleID) : 0,
      begin: isSet(object.begin) ? Number(object.begin) : 0,
      end: isSet(object.end) ? Number(object.end) : 0,
      whin: isSet(object.whin) ? Number(object.whin) : 0,
      whout: isSet(object.whout) ? Number(object.whout) : 0,
      moneyin: isSet(object.moneyin) ? Number(object.moneyin) : 0,
      moneyout: isSet(object.moneyout) ? Number(object.moneyout) : 0,
      curency: isSet(object.curency) ? String(object.curency) : "",
    };
  },

  toJSON(message: QueryCurrentcycleIDResponse): unknown {
    const obj: any = {};
    message.cycleID !== undefined && (obj.cycleID = Math.round(message.cycleID));
    message.begin !== undefined && (obj.begin = Math.round(message.begin));
    message.end !== undefined && (obj.end = Math.round(message.end));
    message.whin !== undefined && (obj.whin = Math.round(message.whin));
    message.whout !== undefined && (obj.whout = Math.round(message.whout));
    message.moneyin !== undefined && (obj.moneyin = Math.round(message.moneyin));
    message.moneyout !== undefined && (obj.moneyout = Math.round(message.moneyout));
    message.curency !== undefined && (obj.curency = message.curency);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCurrentcycleIDResponse>, I>>(object: I): QueryCurrentcycleIDResponse {
    const message = createBaseQueryCurrentcycleIDResponse();
    message.cycleID = object.cycleID ?? 0;
    message.begin = object.begin ?? 0;
    message.end = object.end ?? 0;
    message.whin = object.whin ?? 0;
    message.whout = object.whout ?? 0;
    message.moneyin = object.moneyin ?? 0;
    message.moneyout = object.moneyout ?? 0;
    message.curency = object.curency ?? "";
    return message;
  },
};

function createBaseQueryGetCustomerbillinglineRequest(): QueryGetCustomerbillinglineRequest {
  return { customerDeviceID: "", cycleID: 0, lineid: 0 };
}

export const QueryGetCustomerbillinglineRequest = {
  encode(message: QueryGetCustomerbillinglineRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customerDeviceID !== "") {
      writer.uint32(10).string(message.customerDeviceID);
    }
    if (message.cycleID !== 0) {
      writer.uint32(16).uint64(message.cycleID);
    }
    if (message.lineid !== 0) {
      writer.uint32(24).uint64(message.lineid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCustomerbillinglineRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCustomerbillinglineRequest();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCustomerbillinglineRequest {
    return {
      customerDeviceID: isSet(object.customerDeviceID) ? String(object.customerDeviceID) : "",
      cycleID: isSet(object.cycleID) ? Number(object.cycleID) : 0,
      lineid: isSet(object.lineid) ? Number(object.lineid) : 0,
    };
  },

  toJSON(message: QueryGetCustomerbillinglineRequest): unknown {
    const obj: any = {};
    message.customerDeviceID !== undefined && (obj.customerDeviceID = message.customerDeviceID);
    message.cycleID !== undefined && (obj.cycleID = Math.round(message.cycleID));
    message.lineid !== undefined && (obj.lineid = Math.round(message.lineid));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCustomerbillinglineRequest>, I>>(
    object: I,
  ): QueryGetCustomerbillinglineRequest {
    const message = createBaseQueryGetCustomerbillinglineRequest();
    message.customerDeviceID = object.customerDeviceID ?? "";
    message.cycleID = object.cycleID ?? 0;
    message.lineid = object.lineid ?? 0;
    return message;
  },
};

function createBaseQueryGetCustomerbillinglineResponse(): QueryGetCustomerbillinglineResponse {
  return { customerbillingline: undefined };
}

export const QueryGetCustomerbillinglineResponse = {
  encode(message: QueryGetCustomerbillinglineResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customerbillingline !== undefined) {
      Customerbillingline.encode(message.customerbillingline, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCustomerbillinglineResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCustomerbillinglineResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerbillingline = Customerbillingline.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCustomerbillinglineResponse {
    return {
      customerbillingline: isSet(object.customerbillingline)
        ? Customerbillingline.fromJSON(object.customerbillingline)
        : undefined,
    };
  },

  toJSON(message: QueryGetCustomerbillinglineResponse): unknown {
    const obj: any = {};
    message.customerbillingline !== undefined && (obj.customerbillingline = message.customerbillingline
      ? Customerbillingline.toJSON(message.customerbillingline)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCustomerbillinglineResponse>, I>>(
    object: I,
  ): QueryGetCustomerbillinglineResponse {
    const message = createBaseQueryGetCustomerbillinglineResponse();
    message.customerbillingline = (object.customerbillingline !== undefined && object.customerbillingline !== null)
      ? Customerbillingline.fromPartial(object.customerbillingline)
      : undefined;
    return message;
  },
};

function createBaseQueryAllCustomerbillinglineRequest(): QueryAllCustomerbillinglineRequest {
  return { pagination: undefined };
}

export const QueryAllCustomerbillinglineRequest = {
  encode(message: QueryAllCustomerbillinglineRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCustomerbillinglineRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCustomerbillinglineRequest();
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

  fromJSON(object: any): QueryAllCustomerbillinglineRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllCustomerbillinglineRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllCustomerbillinglineRequest>, I>>(
    object: I,
  ): QueryAllCustomerbillinglineRequest {
    const message = createBaseQueryAllCustomerbillinglineRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllCustomerbillinglineResponse(): QueryAllCustomerbillinglineResponse {
  return { customerbillingline: [], pagination: undefined };
}

export const QueryAllCustomerbillinglineResponse = {
  encode(message: QueryAllCustomerbillinglineResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.customerbillingline) {
      Customerbillingline.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCustomerbillinglineResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCustomerbillinglineResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerbillingline.push(Customerbillingline.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllCustomerbillinglineResponse {
    return {
      customerbillingline: Array.isArray(object?.customerbillingline)
        ? object.customerbillingline.map((e: any) => Customerbillingline.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllCustomerbillinglineResponse): unknown {
    const obj: any = {};
    if (message.customerbillingline) {
      obj.customerbillingline = message.customerbillingline.map((e) => e ? Customerbillingline.toJSON(e) : undefined);
    } else {
      obj.customerbillingline = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllCustomerbillinglineResponse>, I>>(
    object: I,
  ): QueryAllCustomerbillinglineResponse {
    const message = createBaseQueryAllCustomerbillinglineResponse();
    message.customerbillingline = object.customerbillingline?.map((e) => Customerbillingline.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetcustomerbillRequest(): QueryGetcustomerbillRequest {
  return { customerDeviceID: "", billCycleID: 0 };
}

export const QueryGetcustomerbillRequest = {
  encode(message: QueryGetcustomerbillRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customerDeviceID !== "") {
      writer.uint32(10).string(message.customerDeviceID);
    }
    if (message.billCycleID !== 0) {
      writer.uint32(16).uint64(message.billCycleID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetcustomerbillRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetcustomerbillRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerDeviceID = reader.string();
          break;
        case 2:
          message.billCycleID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetcustomerbillRequest {
    return {
      customerDeviceID: isSet(object.customerDeviceID) ? String(object.customerDeviceID) : "",
      billCycleID: isSet(object.billCycleID) ? Number(object.billCycleID) : 0,
    };
  },

  toJSON(message: QueryGetcustomerbillRequest): unknown {
    const obj: any = {};
    message.customerDeviceID !== undefined && (obj.customerDeviceID = message.customerDeviceID);
    message.billCycleID !== undefined && (obj.billCycleID = Math.round(message.billCycleID));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetcustomerbillRequest>, I>>(object: I): QueryGetcustomerbillRequest {
    const message = createBaseQueryGetcustomerbillRequest();
    message.customerDeviceID = object.customerDeviceID ?? "";
    message.billCycleID = object.billCycleID ?? 0;
    return message;
  },
};

function createBaseQueryGetcustomerbillResponse(): QueryGetcustomerbillResponse {
  return { customerbillinglines: "", billTotalWh: 0, billTotalPrice: 0, currency: "", nblines: 0, comments: "" };
}

export const QueryGetcustomerbillResponse = {
  encode(message: QueryGetcustomerbillResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customerbillinglines !== "") {
      writer.uint32(10).string(message.customerbillinglines);
    }
    if (message.billTotalWh !== 0) {
      writer.uint32(16).uint64(message.billTotalWh);
    }
    if (message.billTotalPrice !== 0) {
      writer.uint32(24).uint64(message.billTotalPrice);
    }
    if (message.currency !== "") {
      writer.uint32(34).string(message.currency);
    }
    if (message.nblines !== 0) {
      writer.uint32(40).uint64(message.nblines);
    }
    if (message.comments !== "") {
      writer.uint32(50).string(message.comments);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetcustomerbillResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetcustomerbillResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerbillinglines = reader.string();
          break;
        case 2:
          message.billTotalWh = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.billTotalPrice = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.currency = reader.string();
          break;
        case 5:
          message.nblines = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.comments = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetcustomerbillResponse {
    return {
      customerbillinglines: isSet(object.customerbillinglines) ? String(object.customerbillinglines) : "",
      billTotalWh: isSet(object.billTotalWh) ? Number(object.billTotalWh) : 0,
      billTotalPrice: isSet(object.billTotalPrice) ? Number(object.billTotalPrice) : 0,
      currency: isSet(object.currency) ? String(object.currency) : "",
      nblines: isSet(object.nblines) ? Number(object.nblines) : 0,
      comments: isSet(object.comments) ? String(object.comments) : "",
    };
  },

  toJSON(message: QueryGetcustomerbillResponse): unknown {
    const obj: any = {};
    message.customerbillinglines !== undefined && (obj.customerbillinglines = message.customerbillinglines);
    message.billTotalWh !== undefined && (obj.billTotalWh = Math.round(message.billTotalWh));
    message.billTotalPrice !== undefined && (obj.billTotalPrice = Math.round(message.billTotalPrice));
    message.currency !== undefined && (obj.currency = message.currency);
    message.nblines !== undefined && (obj.nblines = Math.round(message.nblines));
    message.comments !== undefined && (obj.comments = message.comments);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetcustomerbillResponse>, I>>(object: I): QueryGetcustomerbillResponse {
    const message = createBaseQueryGetcustomerbillResponse();
    message.customerbillinglines = object.customerbillinglines ?? "";
    message.billTotalWh = object.billTotalWh ?? 0;
    message.billTotalPrice = object.billTotalPrice ?? 0;
    message.currency = object.currency ?? "";
    message.nblines = object.nblines ?? 0;
    message.comments = object.comments ?? "";
    return message;
  },
};

function createBaseQueryGetCustomerbillsRequest(): QueryGetCustomerbillsRequest {
  return { billCycleID: 0, customerDeviceID: "" };
}

export const QueryGetCustomerbillsRequest = {
  encode(message: QueryGetCustomerbillsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.billCycleID !== 0) {
      writer.uint32(8).uint64(message.billCycleID);
    }
    if (message.customerDeviceID !== "") {
      writer.uint32(18).string(message.customerDeviceID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCustomerbillsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCustomerbillsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.billCycleID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.customerDeviceID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCustomerbillsRequest {
    return {
      billCycleID: isSet(object.billCycleID) ? Number(object.billCycleID) : 0,
      customerDeviceID: isSet(object.customerDeviceID) ? String(object.customerDeviceID) : "",
    };
  },

  toJSON(message: QueryGetCustomerbillsRequest): unknown {
    const obj: any = {};
    message.billCycleID !== undefined && (obj.billCycleID = Math.round(message.billCycleID));
    message.customerDeviceID !== undefined && (obj.customerDeviceID = message.customerDeviceID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCustomerbillsRequest>, I>>(object: I): QueryGetCustomerbillsRequest {
    const message = createBaseQueryGetCustomerbillsRequest();
    message.billCycleID = object.billCycleID ?? 0;
    message.customerDeviceID = object.customerDeviceID ?? "";
    return message;
  },
};

function createBaseQueryGetCustomerbillsResponse(): QueryGetCustomerbillsResponse {
  return { customerbills: undefined };
}

export const QueryGetCustomerbillsResponse = {
  encode(message: QueryGetCustomerbillsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customerbills !== undefined) {
      Customerbills.encode(message.customerbills, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCustomerbillsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCustomerbillsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerbills = Customerbills.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCustomerbillsResponse {
    return { customerbills: isSet(object.customerbills) ? Customerbills.fromJSON(object.customerbills) : undefined };
  },

  toJSON(message: QueryGetCustomerbillsResponse): unknown {
    const obj: any = {};
    message.customerbills !== undefined
      && (obj.customerbills = message.customerbills ? Customerbills.toJSON(message.customerbills) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCustomerbillsResponse>, I>>(
    object: I,
  ): QueryGetCustomerbillsResponse {
    const message = createBaseQueryGetCustomerbillsResponse();
    message.customerbills = (object.customerbills !== undefined && object.customerbills !== null)
      ? Customerbills.fromPartial(object.customerbills)
      : undefined;
    return message;
  },
};

function createBaseQueryAllCustomerbillsRequest(): QueryAllCustomerbillsRequest {
  return { pagination: undefined };
}

export const QueryAllCustomerbillsRequest = {
  encode(message: QueryAllCustomerbillsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCustomerbillsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCustomerbillsRequest();
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

  fromJSON(object: any): QueryAllCustomerbillsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllCustomerbillsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllCustomerbillsRequest>, I>>(object: I): QueryAllCustomerbillsRequest {
    const message = createBaseQueryAllCustomerbillsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllCustomerbillsResponse(): QueryAllCustomerbillsResponse {
  return { customerbills: [], pagination: undefined };
}

export const QueryAllCustomerbillsResponse = {
  encode(message: QueryAllCustomerbillsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.customerbills) {
      Customerbills.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCustomerbillsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllCustomerbillsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerbills.push(Customerbills.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllCustomerbillsResponse {
    return {
      customerbills: Array.isArray(object?.customerbills)
        ? object.customerbills.map((e: any) => Customerbills.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllCustomerbillsResponse): unknown {
    const obj: any = {};
    if (message.customerbills) {
      obj.customerbills = message.customerbills.map((e) => e ? Customerbills.toJSON(e) : undefined);
    } else {
      obj.customerbills = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllCustomerbillsResponse>, I>>(
    object: I,
  ): QueryAllCustomerbillsResponse {
    const message = createBaseQueryAllCustomerbillsResponse();
    message.customerbills = object.customerbills?.map((e) => Customerbills.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetProducerbillinglineRequest(): QueryGetProducerbillinglineRequest {
  return { producerDeviceID: "", cycleID: 0, lineid: 0 };
}

export const QueryGetProducerbillinglineRequest = {
  encode(message: QueryGetProducerbillinglineRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.producerDeviceID !== "") {
      writer.uint32(10).string(message.producerDeviceID);
    }
    if (message.cycleID !== 0) {
      writer.uint32(16).uint64(message.cycleID);
    }
    if (message.lineid !== 0) {
      writer.uint32(24).uint64(message.lineid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProducerbillinglineRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProducerbillinglineRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.producerDeviceID = reader.string();
          break;
        case 2:
          message.cycleID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.lineid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProducerbillinglineRequest {
    return {
      producerDeviceID: isSet(object.producerDeviceID) ? String(object.producerDeviceID) : "",
      cycleID: isSet(object.cycleID) ? Number(object.cycleID) : 0,
      lineid: isSet(object.lineid) ? Number(object.lineid) : 0,
    };
  },

  toJSON(message: QueryGetProducerbillinglineRequest): unknown {
    const obj: any = {};
    message.producerDeviceID !== undefined && (obj.producerDeviceID = message.producerDeviceID);
    message.cycleID !== undefined && (obj.cycleID = Math.round(message.cycleID));
    message.lineid !== undefined && (obj.lineid = Math.round(message.lineid));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetProducerbillinglineRequest>, I>>(
    object: I,
  ): QueryGetProducerbillinglineRequest {
    const message = createBaseQueryGetProducerbillinglineRequest();
    message.producerDeviceID = object.producerDeviceID ?? "";
    message.cycleID = object.cycleID ?? 0;
    message.lineid = object.lineid ?? 0;
    return message;
  },
};

function createBaseQueryGetProducerbillinglineResponse(): QueryGetProducerbillinglineResponse {
  return { producerbillingline: undefined };
}

export const QueryGetProducerbillinglineResponse = {
  encode(message: QueryGetProducerbillinglineResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.producerbillingline !== undefined) {
      Producerbillingline.encode(message.producerbillingline, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProducerbillinglineResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProducerbillinglineResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.producerbillingline = Producerbillingline.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProducerbillinglineResponse {
    return {
      producerbillingline: isSet(object.producerbillingline)
        ? Producerbillingline.fromJSON(object.producerbillingline)
        : undefined,
    };
  },

  toJSON(message: QueryGetProducerbillinglineResponse): unknown {
    const obj: any = {};
    message.producerbillingline !== undefined && (obj.producerbillingline = message.producerbillingline
      ? Producerbillingline.toJSON(message.producerbillingline)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetProducerbillinglineResponse>, I>>(
    object: I,
  ): QueryGetProducerbillinglineResponse {
    const message = createBaseQueryGetProducerbillinglineResponse();
    message.producerbillingline = (object.producerbillingline !== undefined && object.producerbillingline !== null)
      ? Producerbillingline.fromPartial(object.producerbillingline)
      : undefined;
    return message;
  },
};

function createBaseQueryAllProducerbillinglineRequest(): QueryAllProducerbillinglineRequest {
  return { pagination: undefined };
}

export const QueryAllProducerbillinglineRequest = {
  encode(message: QueryAllProducerbillinglineRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProducerbillinglineRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProducerbillinglineRequest();
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

  fromJSON(object: any): QueryAllProducerbillinglineRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllProducerbillinglineRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllProducerbillinglineRequest>, I>>(
    object: I,
  ): QueryAllProducerbillinglineRequest {
    const message = createBaseQueryAllProducerbillinglineRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllProducerbillinglineResponse(): QueryAllProducerbillinglineResponse {
  return { producerbillingline: [], pagination: undefined };
}

export const QueryAllProducerbillinglineResponse = {
  encode(message: QueryAllProducerbillinglineResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.producerbillingline) {
      Producerbillingline.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProducerbillinglineResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProducerbillinglineResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.producerbillingline.push(Producerbillingline.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllProducerbillinglineResponse {
    return {
      producerbillingline: Array.isArray(object?.producerbillingline)
        ? object.producerbillingline.map((e: any) => Producerbillingline.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllProducerbillinglineResponse): unknown {
    const obj: any = {};
    if (message.producerbillingline) {
      obj.producerbillingline = message.producerbillingline.map((e) => e ? Producerbillingline.toJSON(e) : undefined);
    } else {
      obj.producerbillingline = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllProducerbillinglineResponse>, I>>(
    object: I,
  ): QueryAllProducerbillinglineResponse {
    const message = createBaseQueryAllProducerbillinglineResponse();
    message.producerbillingline = object.producerbillingline?.map((e) => Producerbillingline.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetproducerbillRequest(): QueryGetproducerbillRequest {
  return { producerDeviceID: "", billCycleID: 0 };
}

export const QueryGetproducerbillRequest = {
  encode(message: QueryGetproducerbillRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.producerDeviceID !== "") {
      writer.uint32(10).string(message.producerDeviceID);
    }
    if (message.billCycleID !== 0) {
      writer.uint32(16).uint64(message.billCycleID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetproducerbillRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetproducerbillRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.producerDeviceID = reader.string();
          break;
        case 2:
          message.billCycleID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetproducerbillRequest {
    return {
      producerDeviceID: isSet(object.producerDeviceID) ? String(object.producerDeviceID) : "",
      billCycleID: isSet(object.billCycleID) ? Number(object.billCycleID) : 0,
    };
  },

  toJSON(message: QueryGetproducerbillRequest): unknown {
    const obj: any = {};
    message.producerDeviceID !== undefined && (obj.producerDeviceID = message.producerDeviceID);
    message.billCycleID !== undefined && (obj.billCycleID = Math.round(message.billCycleID));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetproducerbillRequest>, I>>(object: I): QueryGetproducerbillRequest {
    const message = createBaseQueryGetproducerbillRequest();
    message.producerDeviceID = object.producerDeviceID ?? "";
    message.billCycleID = object.billCycleID ?? 0;
    return message;
  },
};

function createBaseQueryGetproducerbillResponse(): QueryGetproducerbillResponse {
  return { producerbillinglines: "", billTotalWh: 0, billTotalPrice: 0, curency: "", nblines: 0, comments: "" };
}

export const QueryGetproducerbillResponse = {
  encode(message: QueryGetproducerbillResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.producerbillinglines !== "") {
      writer.uint32(10).string(message.producerbillinglines);
    }
    if (message.billTotalWh !== 0) {
      writer.uint32(16).uint64(message.billTotalWh);
    }
    if (message.billTotalPrice !== 0) {
      writer.uint32(24).uint64(message.billTotalPrice);
    }
    if (message.curency !== "") {
      writer.uint32(34).string(message.curency);
    }
    if (message.nblines !== 0) {
      writer.uint32(40).uint64(message.nblines);
    }
    if (message.comments !== "") {
      writer.uint32(50).string(message.comments);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetproducerbillResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetproducerbillResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.producerbillinglines = reader.string();
          break;
        case 2:
          message.billTotalWh = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.billTotalPrice = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.curency = reader.string();
          break;
        case 5:
          message.nblines = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.comments = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetproducerbillResponse {
    return {
      producerbillinglines: isSet(object.producerbillinglines) ? String(object.producerbillinglines) : "",
      billTotalWh: isSet(object.billTotalWh) ? Number(object.billTotalWh) : 0,
      billTotalPrice: isSet(object.billTotalPrice) ? Number(object.billTotalPrice) : 0,
      curency: isSet(object.curency) ? String(object.curency) : "",
      nblines: isSet(object.nblines) ? Number(object.nblines) : 0,
      comments: isSet(object.comments) ? String(object.comments) : "",
    };
  },

  toJSON(message: QueryGetproducerbillResponse): unknown {
    const obj: any = {};
    message.producerbillinglines !== undefined && (obj.producerbillinglines = message.producerbillinglines);
    message.billTotalWh !== undefined && (obj.billTotalWh = Math.round(message.billTotalWh));
    message.billTotalPrice !== undefined && (obj.billTotalPrice = Math.round(message.billTotalPrice));
    message.curency !== undefined && (obj.curency = message.curency);
    message.nblines !== undefined && (obj.nblines = Math.round(message.nblines));
    message.comments !== undefined && (obj.comments = message.comments);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetproducerbillResponse>, I>>(object: I): QueryGetproducerbillResponse {
    const message = createBaseQueryGetproducerbillResponse();
    message.producerbillinglines = object.producerbillinglines ?? "";
    message.billTotalWh = object.billTotalWh ?? 0;
    message.billTotalPrice = object.billTotalPrice ?? 0;
    message.curency = object.curency ?? "";
    message.nblines = object.nblines ?? 0;
    message.comments = object.comments ?? "";
    return message;
  },
};

function createBaseQueryGetProducerbillsRequest(): QueryGetProducerbillsRequest {
  return { billCycleID: 0, producerDeviceID: "" };
}

export const QueryGetProducerbillsRequest = {
  encode(message: QueryGetProducerbillsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.billCycleID !== 0) {
      writer.uint32(8).uint64(message.billCycleID);
    }
    if (message.producerDeviceID !== "") {
      writer.uint32(18).string(message.producerDeviceID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProducerbillsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProducerbillsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.billCycleID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.producerDeviceID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProducerbillsRequest {
    return {
      billCycleID: isSet(object.billCycleID) ? Number(object.billCycleID) : 0,
      producerDeviceID: isSet(object.producerDeviceID) ? String(object.producerDeviceID) : "",
    };
  },

  toJSON(message: QueryGetProducerbillsRequest): unknown {
    const obj: any = {};
    message.billCycleID !== undefined && (obj.billCycleID = Math.round(message.billCycleID));
    message.producerDeviceID !== undefined && (obj.producerDeviceID = message.producerDeviceID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetProducerbillsRequest>, I>>(object: I): QueryGetProducerbillsRequest {
    const message = createBaseQueryGetProducerbillsRequest();
    message.billCycleID = object.billCycleID ?? 0;
    message.producerDeviceID = object.producerDeviceID ?? "";
    return message;
  },
};

function createBaseQueryGetProducerbillsResponse(): QueryGetProducerbillsResponse {
  return { producerbills: undefined };
}

export const QueryGetProducerbillsResponse = {
  encode(message: QueryGetProducerbillsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.producerbills !== undefined) {
      Producerbills.encode(message.producerbills, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetProducerbillsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetProducerbillsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.producerbills = Producerbills.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProducerbillsResponse {
    return { producerbills: isSet(object.producerbills) ? Producerbills.fromJSON(object.producerbills) : undefined };
  },

  toJSON(message: QueryGetProducerbillsResponse): unknown {
    const obj: any = {};
    message.producerbills !== undefined
      && (obj.producerbills = message.producerbills ? Producerbills.toJSON(message.producerbills) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetProducerbillsResponse>, I>>(
    object: I,
  ): QueryGetProducerbillsResponse {
    const message = createBaseQueryGetProducerbillsResponse();
    message.producerbills = (object.producerbills !== undefined && object.producerbills !== null)
      ? Producerbills.fromPartial(object.producerbills)
      : undefined;
    return message;
  },
};

function createBaseQueryAllProducerbillsRequest(): QueryAllProducerbillsRequest {
  return { pagination: undefined };
}

export const QueryAllProducerbillsRequest = {
  encode(message: QueryAllProducerbillsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProducerbillsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProducerbillsRequest();
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

  fromJSON(object: any): QueryAllProducerbillsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllProducerbillsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllProducerbillsRequest>, I>>(object: I): QueryAllProducerbillsRequest {
    const message = createBaseQueryAllProducerbillsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllProducerbillsResponse(): QueryAllProducerbillsResponse {
  return { producerbills: [], pagination: undefined };
}

export const QueryAllProducerbillsResponse = {
  encode(message: QueryAllProducerbillsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.producerbills) {
      Producerbills.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProducerbillsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProducerbillsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.producerbills.push(Producerbills.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllProducerbillsResponse {
    return {
      producerbills: Array.isArray(object?.producerbills)
        ? object.producerbills.map((e: any) => Producerbills.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllProducerbillsResponse): unknown {
    const obj: any = {};
    if (message.producerbills) {
      obj.producerbills = message.producerbills.map((e) => e ? Producerbills.toJSON(e) : undefined);
    } else {
      obj.producerbills = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllProducerbillsResponse>, I>>(
    object: I,
  ): QueryAllProducerbillsResponse {
    const message = createBaseQueryAllProducerbillsResponse();
    message.producerbills = object.producerbills?.map((e) => Producerbills.fromPartial(e)) || [];
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
  /** Queries a PpaMap by index. */
  PpaMap(request: QueryGetPpaMapRequest): Promise<QueryGetPpaMapResponse>;
  /** Queries a list of PpaMap items. */
  PpaMapAll(request: QueryAllPpaMapRequest): Promise<QueryAllPpaMapResponse>;
  /** Queries a Billingcycles by index. */
  Billingcycles(request: QueryGetBillingcyclesRequest): Promise<QueryGetBillingcyclesResponse>;
  /** Queries a list of Billingcycles items. */
  BillingcyclesAll(request: QueryAllBillingcyclesRequest): Promise<QueryAllBillingcyclesResponse>;
  /** Queries a list of CurrentcycleID items. */
  CurrentcycleID(request: QueryCurrentcycleIDRequest): Promise<QueryCurrentcycleIDResponse>;
  /** Queries a Customerbillingline by index. */
  Customerbillingline(request: QueryGetCustomerbillinglineRequest): Promise<QueryGetCustomerbillinglineResponse>;
  /** Queries a list of Customerbillingline items. */
  CustomerbillinglineAll(request: QueryAllCustomerbillinglineRequest): Promise<QueryAllCustomerbillinglineResponse>;
  /** Queries a list of Getcustomerbill items. */
  Getcustomerbill(request: QueryGetcustomerbillRequest): Promise<QueryGetcustomerbillResponse>;
  /** Queries a Customerbills by index. */
  Customerbills(request: QueryGetCustomerbillsRequest): Promise<QueryGetCustomerbillsResponse>;
  /** Queries a list of Customerbills items. */
  CustomerbillsAll(request: QueryAllCustomerbillsRequest): Promise<QueryAllCustomerbillsResponse>;
  /** Queries a Producerbillingline by index. */
  Producerbillingline(request: QueryGetProducerbillinglineRequest): Promise<QueryGetProducerbillinglineResponse>;
  /** Queries a list of Producerbillingline items. */
  ProducerbillinglineAll(request: QueryAllProducerbillinglineRequest): Promise<QueryAllProducerbillinglineResponse>;
  /** Queries a list of Getproducerbill items. */
  Getproducerbill(request: QueryGetproducerbillRequest): Promise<QueryGetproducerbillResponse>;
  /** Queries a Producerbills by index. */
  Producerbills(request: QueryGetProducerbillsRequest): Promise<QueryGetProducerbillsResponse>;
  /** Queries a list of Producerbills items. */
  ProducerbillsAll(request: QueryAllProducerbillsRequest): Promise<QueryAllProducerbillsResponse>;
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
    this.PpaMap = this.PpaMap.bind(this);
    this.PpaMapAll = this.PpaMapAll.bind(this);
    this.Billingcycles = this.Billingcycles.bind(this);
    this.BillingcyclesAll = this.BillingcyclesAll.bind(this);
    this.CurrentcycleID = this.CurrentcycleID.bind(this);
    this.Customerbillingline = this.Customerbillingline.bind(this);
    this.CustomerbillinglineAll = this.CustomerbillinglineAll.bind(this);
    this.Getcustomerbill = this.Getcustomerbill.bind(this);
    this.Customerbills = this.Customerbills.bind(this);
    this.CustomerbillsAll = this.CustomerbillsAll.bind(this);
    this.Producerbillingline = this.Producerbillingline.bind(this);
    this.ProducerbillinglineAll = this.ProducerbillinglineAll.bind(this);
    this.Getproducerbill = this.Getproducerbill.bind(this);
    this.Producerbills = this.Producerbills.bind(this);
    this.ProducerbillsAll = this.ProducerbillsAll.bind(this);
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

  PpaMap(request: QueryGetPpaMapRequest): Promise<QueryGetPpaMapResponse> {
    const data = QueryGetPpaMapRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "PpaMap", data);
    return promise.then((data) => QueryGetPpaMapResponse.decode(new _m0.Reader(data)));
  }

  PpaMapAll(request: QueryAllPpaMapRequest): Promise<QueryAllPpaMapResponse> {
    const data = QueryAllPpaMapRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "PpaMapAll", data);
    return promise.then((data) => QueryAllPpaMapResponse.decode(new _m0.Reader(data)));
  }

  Billingcycles(request: QueryGetBillingcyclesRequest): Promise<QueryGetBillingcyclesResponse> {
    const data = QueryGetBillingcyclesRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "Billingcycles", data);
    return promise.then((data) => QueryGetBillingcyclesResponse.decode(new _m0.Reader(data)));
  }

  BillingcyclesAll(request: QueryAllBillingcyclesRequest): Promise<QueryAllBillingcyclesResponse> {
    const data = QueryAllBillingcyclesRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "BillingcyclesAll", data);
    return promise.then((data) => QueryAllBillingcyclesResponse.decode(new _m0.Reader(data)));
  }

  CurrentcycleID(request: QueryCurrentcycleIDRequest): Promise<QueryCurrentcycleIDResponse> {
    const data = QueryCurrentcycleIDRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "CurrentcycleID", data);
    return promise.then((data) => QueryCurrentcycleIDResponse.decode(new _m0.Reader(data)));
  }

  Customerbillingline(request: QueryGetCustomerbillinglineRequest): Promise<QueryGetCustomerbillinglineResponse> {
    const data = QueryGetCustomerbillinglineRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "Customerbillingline", data);
    return promise.then((data) => QueryGetCustomerbillinglineResponse.decode(new _m0.Reader(data)));
  }

  CustomerbillinglineAll(request: QueryAllCustomerbillinglineRequest): Promise<QueryAllCustomerbillinglineResponse> {
    const data = QueryAllCustomerbillinglineRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "CustomerbillinglineAll", data);
    return promise.then((data) => QueryAllCustomerbillinglineResponse.decode(new _m0.Reader(data)));
  }

  Getcustomerbill(request: QueryGetcustomerbillRequest): Promise<QueryGetcustomerbillResponse> {
    const data = QueryGetcustomerbillRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "Getcustomerbill", data);
    return promise.then((data) => QueryGetcustomerbillResponse.decode(new _m0.Reader(data)));
  }

  Customerbills(request: QueryGetCustomerbillsRequest): Promise<QueryGetCustomerbillsResponse> {
    const data = QueryGetCustomerbillsRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "Customerbills", data);
    return promise.then((data) => QueryGetCustomerbillsResponse.decode(new _m0.Reader(data)));
  }

  CustomerbillsAll(request: QueryAllCustomerbillsRequest): Promise<QueryAllCustomerbillsResponse> {
    const data = QueryAllCustomerbillsRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "CustomerbillsAll", data);
    return promise.then((data) => QueryAllCustomerbillsResponse.decode(new _m0.Reader(data)));
  }

  Producerbillingline(request: QueryGetProducerbillinglineRequest): Promise<QueryGetProducerbillinglineResponse> {
    const data = QueryGetProducerbillinglineRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "Producerbillingline", data);
    return promise.then((data) => QueryGetProducerbillinglineResponse.decode(new _m0.Reader(data)));
  }

  ProducerbillinglineAll(request: QueryAllProducerbillinglineRequest): Promise<QueryAllProducerbillinglineResponse> {
    const data = QueryAllProducerbillinglineRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "ProducerbillinglineAll", data);
    return promise.then((data) => QueryAllProducerbillinglineResponse.decode(new _m0.Reader(data)));
  }

  Getproducerbill(request: QueryGetproducerbillRequest): Promise<QueryGetproducerbillResponse> {
    const data = QueryGetproducerbillRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "Getproducerbill", data);
    return promise.then((data) => QueryGetproducerbillResponse.decode(new _m0.Reader(data)));
  }

  Producerbills(request: QueryGetProducerbillsRequest): Promise<QueryGetProducerbillsResponse> {
    const data = QueryGetProducerbillsRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "Producerbills", data);
    return promise.then((data) => QueryGetProducerbillsResponse.decode(new _m0.Reader(data)));
  }

  ProducerbillsAll(request: QueryAllProducerbillsRequest): Promise<QueryAllProducerbillsResponse> {
    const data = QueryAllProducerbillsRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "ProducerbillsAll", data);
    return promise.then((data) => QueryAllProducerbillsResponse.decode(new _m0.Reader(data)));
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

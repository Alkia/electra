/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../meter/params";
import { Meterreadings } from "../meter/meterreadings";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Meterdirectory } from "../meter/meterdirectory";
import { PowerPurchaseContract } from "../meter/power_purchase_contract";

export const protobufPackage = "electra.meter";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

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
  listrecording: string;
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

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
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
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetMeterreadingsRequest: object = { deviceID: "", timestamp: 0 };

export const QueryGetMeterreadingsRequest = {
  encode(
    message: QueryGetMeterreadingsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.deviceID !== "") {
      writer.uint32(10).string(message.deviceID);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint64(message.timestamp);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMeterreadingsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMeterreadingsRequest,
    } as QueryGetMeterreadingsRequest;
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
    const message = {
      ...baseQueryGetMeterreadingsRequest,
    } as QueryGetMeterreadingsRequest;
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
    return message;
  },

  toJSON(message: QueryGetMeterreadingsRequest): unknown {
    const obj: any = {};
    message.deviceID !== undefined && (obj.deviceID = message.deviceID);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMeterreadingsRequest>
  ): QueryGetMeterreadingsRequest {
    const message = {
      ...baseQueryGetMeterreadingsRequest,
    } as QueryGetMeterreadingsRequest;
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
    return message;
  },
};

const baseQueryGetMeterreadingsResponse: object = {};

export const QueryGetMeterreadingsResponse = {
  encode(
    message: QueryGetMeterreadingsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.meterreadings !== undefined) {
      Meterreadings.encode(
        message.meterreadings,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMeterreadingsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMeterreadingsResponse,
    } as QueryGetMeterreadingsResponse;
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
    const message = {
      ...baseQueryGetMeterreadingsResponse,
    } as QueryGetMeterreadingsResponse;
    if (object.meterreadings !== undefined && object.meterreadings !== null) {
      message.meterreadings = Meterreadings.fromJSON(object.meterreadings);
    } else {
      message.meterreadings = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetMeterreadingsResponse): unknown {
    const obj: any = {};
    message.meterreadings !== undefined &&
      (obj.meterreadings = message.meterreadings
        ? Meterreadings.toJSON(message.meterreadings)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMeterreadingsResponse>
  ): QueryGetMeterreadingsResponse {
    const message = {
      ...baseQueryGetMeterreadingsResponse,
    } as QueryGetMeterreadingsResponse;
    if (object.meterreadings !== undefined && object.meterreadings !== null) {
      message.meterreadings = Meterreadings.fromPartial(object.meterreadings);
    } else {
      message.meterreadings = undefined;
    }
    return message;
  },
};

const baseQueryAllMeterreadingsRequest: object = {};

export const QueryAllMeterreadingsRequest = {
  encode(
    message: QueryAllMeterreadingsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllMeterreadingsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMeterreadingsRequest,
    } as QueryAllMeterreadingsRequest;
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
    const message = {
      ...baseQueryAllMeterreadingsRequest,
    } as QueryAllMeterreadingsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMeterreadingsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMeterreadingsRequest>
  ): QueryAllMeterreadingsRequest {
    const message = {
      ...baseQueryAllMeterreadingsRequest,
    } as QueryAllMeterreadingsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllMeterreadingsResponse: object = {};

export const QueryAllMeterreadingsResponse = {
  encode(
    message: QueryAllMeterreadingsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.meterreadings) {
      Meterreadings.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllMeterreadingsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMeterreadingsResponse,
    } as QueryAllMeterreadingsResponse;
    message.meterreadings = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.meterreadings.push(
            Meterreadings.decode(reader, reader.uint32())
          );
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
    const message = {
      ...baseQueryAllMeterreadingsResponse,
    } as QueryAllMeterreadingsResponse;
    message.meterreadings = [];
    if (object.meterreadings !== undefined && object.meterreadings !== null) {
      for (const e of object.meterreadings) {
        message.meterreadings.push(Meterreadings.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMeterreadingsResponse): unknown {
    const obj: any = {};
    if (message.meterreadings) {
      obj.meterreadings = message.meterreadings.map((e) =>
        e ? Meterreadings.toJSON(e) : undefined
      );
    } else {
      obj.meterreadings = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMeterreadingsResponse>
  ): QueryAllMeterreadingsResponse {
    const message = {
      ...baseQueryAllMeterreadingsResponse,
    } as QueryAllMeterreadingsResponse;
    message.meterreadings = [];
    if (object.meterreadings !== undefined && object.meterreadings !== null) {
      for (const e of object.meterreadings) {
        message.meterreadings.push(Meterreadings.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetMeterdirectoryRequest: object = {
  deviceID: "",
  barcodeserial: "",
};

export const QueryGetMeterdirectoryRequest = {
  encode(
    message: QueryGetMeterdirectoryRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.deviceID !== "") {
      writer.uint32(10).string(message.deviceID);
    }
    if (message.barcodeserial !== "") {
      writer.uint32(18).string(message.barcodeserial);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMeterdirectoryRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMeterdirectoryRequest,
    } as QueryGetMeterdirectoryRequest;
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
    const message = {
      ...baseQueryGetMeterdirectoryRequest,
    } as QueryGetMeterdirectoryRequest;
    if (object.deviceID !== undefined && object.deviceID !== null) {
      message.deviceID = String(object.deviceID);
    } else {
      message.deviceID = "";
    }
    if (object.barcodeserial !== undefined && object.barcodeserial !== null) {
      message.barcodeserial = String(object.barcodeserial);
    } else {
      message.barcodeserial = "";
    }
    return message;
  },

  toJSON(message: QueryGetMeterdirectoryRequest): unknown {
    const obj: any = {};
    message.deviceID !== undefined && (obj.deviceID = message.deviceID);
    message.barcodeserial !== undefined &&
      (obj.barcodeserial = message.barcodeserial);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMeterdirectoryRequest>
  ): QueryGetMeterdirectoryRequest {
    const message = {
      ...baseQueryGetMeterdirectoryRequest,
    } as QueryGetMeterdirectoryRequest;
    if (object.deviceID !== undefined && object.deviceID !== null) {
      message.deviceID = object.deviceID;
    } else {
      message.deviceID = "";
    }
    if (object.barcodeserial !== undefined && object.barcodeserial !== null) {
      message.barcodeserial = object.barcodeserial;
    } else {
      message.barcodeserial = "";
    }
    return message;
  },
};

const baseQueryGetMeterdirectoryResponse: object = {};

export const QueryGetMeterdirectoryResponse = {
  encode(
    message: QueryGetMeterdirectoryResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.meterdirectory !== undefined) {
      Meterdirectory.encode(
        message.meterdirectory,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMeterdirectoryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMeterdirectoryResponse,
    } as QueryGetMeterdirectoryResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.meterdirectory = Meterdirectory.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMeterdirectoryResponse {
    const message = {
      ...baseQueryGetMeterdirectoryResponse,
    } as QueryGetMeterdirectoryResponse;
    if (object.meterdirectory !== undefined && object.meterdirectory !== null) {
      message.meterdirectory = Meterdirectory.fromJSON(object.meterdirectory);
    } else {
      message.meterdirectory = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetMeterdirectoryResponse): unknown {
    const obj: any = {};
    message.meterdirectory !== undefined &&
      (obj.meterdirectory = message.meterdirectory
        ? Meterdirectory.toJSON(message.meterdirectory)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMeterdirectoryResponse>
  ): QueryGetMeterdirectoryResponse {
    const message = {
      ...baseQueryGetMeterdirectoryResponse,
    } as QueryGetMeterdirectoryResponse;
    if (object.meterdirectory !== undefined && object.meterdirectory !== null) {
      message.meterdirectory = Meterdirectory.fromPartial(
        object.meterdirectory
      );
    } else {
      message.meterdirectory = undefined;
    }
    return message;
  },
};

const baseQueryAllMeterdirectoryRequest: object = {};

export const QueryAllMeterdirectoryRequest = {
  encode(
    message: QueryAllMeterdirectoryRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllMeterdirectoryRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMeterdirectoryRequest,
    } as QueryAllMeterdirectoryRequest;
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
    const message = {
      ...baseQueryAllMeterdirectoryRequest,
    } as QueryAllMeterdirectoryRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMeterdirectoryRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMeterdirectoryRequest>
  ): QueryAllMeterdirectoryRequest {
    const message = {
      ...baseQueryAllMeterdirectoryRequest,
    } as QueryAllMeterdirectoryRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllMeterdirectoryResponse: object = {};

export const QueryAllMeterdirectoryResponse = {
  encode(
    message: QueryAllMeterdirectoryResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.meterdirectory) {
      Meterdirectory.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllMeterdirectoryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMeterdirectoryResponse,
    } as QueryAllMeterdirectoryResponse;
    message.meterdirectory = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.meterdirectory.push(
            Meterdirectory.decode(reader, reader.uint32())
          );
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
    const message = {
      ...baseQueryAllMeterdirectoryResponse,
    } as QueryAllMeterdirectoryResponse;
    message.meterdirectory = [];
    if (object.meterdirectory !== undefined && object.meterdirectory !== null) {
      for (const e of object.meterdirectory) {
        message.meterdirectory.push(Meterdirectory.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMeterdirectoryResponse): unknown {
    const obj: any = {};
    if (message.meterdirectory) {
      obj.meterdirectory = message.meterdirectory.map((e) =>
        e ? Meterdirectory.toJSON(e) : undefined
      );
    } else {
      obj.meterdirectory = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMeterdirectoryResponse>
  ): QueryAllMeterdirectoryResponse {
    const message = {
      ...baseQueryAllMeterdirectoryResponse,
    } as QueryAllMeterdirectoryResponse;
    message.meterdirectory = [];
    if (object.meterdirectory !== undefined && object.meterdirectory !== null) {
      for (const e of object.meterdirectory) {
        message.meterdirectory.push(Meterdirectory.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryListrecordingsRequest: object = {
  deviceID: "",
  start: 0,
  end: 0,
  byUnixTime: false,
};

export const QueryListrecordingsRequest = {
  encode(
    message: QueryListrecordingsRequest,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryListrecordingsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryListrecordingsRequest,
    } as QueryListrecordingsRequest;
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
    const message = {
      ...baseQueryListrecordingsRequest,
    } as QueryListrecordingsRequest;
    if (object.deviceID !== undefined && object.deviceID !== null) {
      message.deviceID = String(object.deviceID);
    } else {
      message.deviceID = "";
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
    if (object.byUnixTime !== undefined && object.byUnixTime !== null) {
      message.byUnixTime = Boolean(object.byUnixTime);
    } else {
      message.byUnixTime = false;
    }
    return message;
  },

  toJSON(message: QueryListrecordingsRequest): unknown {
    const obj: any = {};
    message.deviceID !== undefined && (obj.deviceID = message.deviceID);
    message.start !== undefined && (obj.start = message.start);
    message.end !== undefined && (obj.end = message.end);
    message.byUnixTime !== undefined && (obj.byUnixTime = message.byUnixTime);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryListrecordingsRequest>
  ): QueryListrecordingsRequest {
    const message = {
      ...baseQueryListrecordingsRequest,
    } as QueryListrecordingsRequest;
    if (object.deviceID !== undefined && object.deviceID !== null) {
      message.deviceID = object.deviceID;
    } else {
      message.deviceID = "";
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
    if (object.byUnixTime !== undefined && object.byUnixTime !== null) {
      message.byUnixTime = object.byUnixTime;
    } else {
      message.byUnixTime = false;
    }
    return message;
  },
};

const baseQueryListrecordingsResponse: object = {
  listrecording: "",
  comments: "",
  total: 0,
};

export const QueryListrecordingsResponse = {
  encode(
    message: QueryListrecordingsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.listrecording !== "") {
      writer.uint32(10).string(message.listrecording);
    }
    if (message.comments !== "") {
      writer.uint32(18).string(message.comments);
    }
    if (message.total !== 0) {
      writer.uint32(24).uint64(message.total);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryListrecordingsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryListrecordingsResponse,
    } as QueryListrecordingsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listrecording = reader.string();
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
    const message = {
      ...baseQueryListrecordingsResponse,
    } as QueryListrecordingsResponse;
    if (object.listrecording !== undefined && object.listrecording !== null) {
      message.listrecording = String(object.listrecording);
    } else {
      message.listrecording = "";
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = "";
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = Number(object.total);
    } else {
      message.total = 0;
    }
    return message;
  },

  toJSON(message: QueryListrecordingsResponse): unknown {
    const obj: any = {};
    message.listrecording !== undefined &&
      (obj.listrecording = message.listrecording);
    message.comments !== undefined && (obj.comments = message.comments);
    message.total !== undefined && (obj.total = message.total);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryListrecordingsResponse>
  ): QueryListrecordingsResponse {
    const message = {
      ...baseQueryListrecordingsResponse,
    } as QueryListrecordingsResponse;
    if (object.listrecording !== undefined && object.listrecording !== null) {
      message.listrecording = object.listrecording;
    } else {
      message.listrecording = "";
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = "";
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    } else {
      message.total = 0;
    }
    return message;
  },
};

const baseQueryGetPowerPurchaseContractRequest: object = {
  contractID: "",
  contractDeviceID: "",
};

export const QueryGetPowerPurchaseContractRequest = {
  encode(
    message: QueryGetPowerPurchaseContractRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.contractID !== "") {
      writer.uint32(10).string(message.contractID);
    }
    if (message.contractDeviceID !== "") {
      writer.uint32(18).string(message.contractDeviceID);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetPowerPurchaseContractRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPowerPurchaseContractRequest,
    } as QueryGetPowerPurchaseContractRequest;
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
    const message = {
      ...baseQueryGetPowerPurchaseContractRequest,
    } as QueryGetPowerPurchaseContractRequest;
    if (object.contractID !== undefined && object.contractID !== null) {
      message.contractID = String(object.contractID);
    } else {
      message.contractID = "";
    }
    if (
      object.contractDeviceID !== undefined &&
      object.contractDeviceID !== null
    ) {
      message.contractDeviceID = String(object.contractDeviceID);
    } else {
      message.contractDeviceID = "";
    }
    return message;
  },

  toJSON(message: QueryGetPowerPurchaseContractRequest): unknown {
    const obj: any = {};
    message.contractID !== undefined && (obj.contractID = message.contractID);
    message.contractDeviceID !== undefined &&
      (obj.contractDeviceID = message.contractDeviceID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPowerPurchaseContractRequest>
  ): QueryGetPowerPurchaseContractRequest {
    const message = {
      ...baseQueryGetPowerPurchaseContractRequest,
    } as QueryGetPowerPurchaseContractRequest;
    if (object.contractID !== undefined && object.contractID !== null) {
      message.contractID = object.contractID;
    } else {
      message.contractID = "";
    }
    if (
      object.contractDeviceID !== undefined &&
      object.contractDeviceID !== null
    ) {
      message.contractDeviceID = object.contractDeviceID;
    } else {
      message.contractDeviceID = "";
    }
    return message;
  },
};

const baseQueryGetPowerPurchaseContractResponse: object = {};

export const QueryGetPowerPurchaseContractResponse = {
  encode(
    message: QueryGetPowerPurchaseContractResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.powerPurchaseContract !== undefined) {
      PowerPurchaseContract.encode(
        message.powerPurchaseContract,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetPowerPurchaseContractResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPowerPurchaseContractResponse,
    } as QueryGetPowerPurchaseContractResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.powerPurchaseContract = PowerPurchaseContract.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPowerPurchaseContractResponse {
    const message = {
      ...baseQueryGetPowerPurchaseContractResponse,
    } as QueryGetPowerPurchaseContractResponse;
    if (
      object.powerPurchaseContract !== undefined &&
      object.powerPurchaseContract !== null
    ) {
      message.powerPurchaseContract = PowerPurchaseContract.fromJSON(
        object.powerPurchaseContract
      );
    } else {
      message.powerPurchaseContract = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPowerPurchaseContractResponse): unknown {
    const obj: any = {};
    message.powerPurchaseContract !== undefined &&
      (obj.powerPurchaseContract = message.powerPurchaseContract
        ? PowerPurchaseContract.toJSON(message.powerPurchaseContract)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPowerPurchaseContractResponse>
  ): QueryGetPowerPurchaseContractResponse {
    const message = {
      ...baseQueryGetPowerPurchaseContractResponse,
    } as QueryGetPowerPurchaseContractResponse;
    if (
      object.powerPurchaseContract !== undefined &&
      object.powerPurchaseContract !== null
    ) {
      message.powerPurchaseContract = PowerPurchaseContract.fromPartial(
        object.powerPurchaseContract
      );
    } else {
      message.powerPurchaseContract = undefined;
    }
    return message;
  },
};

const baseQueryAllPowerPurchaseContractRequest: object = {};

export const QueryAllPowerPurchaseContractRequest = {
  encode(
    message: QueryAllPowerPurchaseContractRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllPowerPurchaseContractRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPowerPurchaseContractRequest,
    } as QueryAllPowerPurchaseContractRequest;
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
    const message = {
      ...baseQueryAllPowerPurchaseContractRequest,
    } as QueryAllPowerPurchaseContractRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPowerPurchaseContractRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPowerPurchaseContractRequest>
  ): QueryAllPowerPurchaseContractRequest {
    const message = {
      ...baseQueryAllPowerPurchaseContractRequest,
    } as QueryAllPowerPurchaseContractRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPowerPurchaseContractResponse: object = {};

export const QueryAllPowerPurchaseContractResponse = {
  encode(
    message: QueryAllPowerPurchaseContractResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.powerPurchaseContract) {
      PowerPurchaseContract.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllPowerPurchaseContractResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPowerPurchaseContractResponse,
    } as QueryAllPowerPurchaseContractResponse;
    message.powerPurchaseContract = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.powerPurchaseContract.push(
            PowerPurchaseContract.decode(reader, reader.uint32())
          );
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
    const message = {
      ...baseQueryAllPowerPurchaseContractResponse,
    } as QueryAllPowerPurchaseContractResponse;
    message.powerPurchaseContract = [];
    if (
      object.powerPurchaseContract !== undefined &&
      object.powerPurchaseContract !== null
    ) {
      for (const e of object.powerPurchaseContract) {
        message.powerPurchaseContract.push(PowerPurchaseContract.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
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
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPowerPurchaseContractResponse>
  ): QueryAllPowerPurchaseContractResponse {
    const message = {
      ...baseQueryAllPowerPurchaseContractResponse,
    } as QueryAllPowerPurchaseContractResponse;
    message.powerPurchaseContract = [];
    if (
      object.powerPurchaseContract !== undefined &&
      object.powerPurchaseContract !== null
    ) {
      for (const e of object.powerPurchaseContract) {
        message.powerPurchaseContract.push(
          PowerPurchaseContract.fromPartial(e)
        );
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Meterreadings by index. */
  Meterreadings(
    request: QueryGetMeterreadingsRequest
  ): Promise<QueryGetMeterreadingsResponse>;
  /** Queries a list of Meterreadings items. */
  MeterreadingsAll(
    request: QueryAllMeterreadingsRequest
  ): Promise<QueryAllMeterreadingsResponse>;
  /** Queries a Meterdirectory by index. */
  Meterdirectory(
    request: QueryGetMeterdirectoryRequest
  ): Promise<QueryGetMeterdirectoryResponse>;
  /** Queries a list of Meterdirectory items. */
  MeterdirectoryAll(
    request: QueryAllMeterdirectoryRequest
  ): Promise<QueryAllMeterdirectoryResponse>;
  /** Queries a list of Listrecordings items. */
  Listrecordings(
    request: QueryListrecordingsRequest
  ): Promise<QueryListrecordingsResponse>;
  /** Queries a PowerPurchaseContract by index. */
  PowerPurchaseContract(
    request: QueryGetPowerPurchaseContractRequest
  ): Promise<QueryGetPowerPurchaseContractResponse>;
  /** Queries a list of PowerPurchaseContract items. */
  PowerPurchaseContractAll(
    request: QueryAllPowerPurchaseContractRequest
  ): Promise<QueryAllPowerPurchaseContractResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Meterreadings(
    request: QueryGetMeterreadingsRequest
  ): Promise<QueryGetMeterreadingsResponse> {
    const data = QueryGetMeterreadingsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Query",
      "Meterreadings",
      data
    );
    return promise.then((data) =>
      QueryGetMeterreadingsResponse.decode(new Reader(data))
    );
  }

  MeterreadingsAll(
    request: QueryAllMeterreadingsRequest
  ): Promise<QueryAllMeterreadingsResponse> {
    const data = QueryAllMeterreadingsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Query",
      "MeterreadingsAll",
      data
    );
    return promise.then((data) =>
      QueryAllMeterreadingsResponse.decode(new Reader(data))
    );
  }

  Meterdirectory(
    request: QueryGetMeterdirectoryRequest
  ): Promise<QueryGetMeterdirectoryResponse> {
    const data = QueryGetMeterdirectoryRequest.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Query",
      "Meterdirectory",
      data
    );
    return promise.then((data) =>
      QueryGetMeterdirectoryResponse.decode(new Reader(data))
    );
  }

  MeterdirectoryAll(
    request: QueryAllMeterdirectoryRequest
  ): Promise<QueryAllMeterdirectoryResponse> {
    const data = QueryAllMeterdirectoryRequest.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Query",
      "MeterdirectoryAll",
      data
    );
    return promise.then((data) =>
      QueryAllMeterdirectoryResponse.decode(new Reader(data))
    );
  }

  Listrecordings(
    request: QueryListrecordingsRequest
  ): Promise<QueryListrecordingsResponse> {
    const data = QueryListrecordingsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Query",
      "Listrecordings",
      data
    );
    return promise.then((data) =>
      QueryListrecordingsResponse.decode(new Reader(data))
    );
  }

  PowerPurchaseContract(
    request: QueryGetPowerPurchaseContractRequest
  ): Promise<QueryGetPowerPurchaseContractResponse> {
    const data = QueryGetPowerPurchaseContractRequest.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Query",
      "PowerPurchaseContract",
      data
    );
    return promise.then((data) =>
      QueryGetPowerPurchaseContractResponse.decode(new Reader(data))
    );
  }

  PowerPurchaseContractAll(
    request: QueryAllPowerPurchaseContractRequest
  ): Promise<QueryAllPowerPurchaseContractResponse> {
    const data = QueryAllPowerPurchaseContractRequest.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Query",
      "PowerPurchaseContractAll",
      data
    );
    return promise.then((data) =>
      QueryAllPowerPurchaseContractResponse.decode(new Reader(data))
    );
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

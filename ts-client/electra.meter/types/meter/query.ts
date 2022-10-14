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
import { PpaMap } from "../meter/ppa_map";
import { Billingcycles } from "../meter/billingcycles";
import { Customerbillingline } from "../meter/customerbillingline";
import { Customerbills } from "../meter/customerbills";
import { Producerbillingline } from "../meter/producerbillingline";
import { Producerbills } from "../meter/producerbills";

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

export interface QueryGetCustomerbillinglineRequest {
  customerdeviceID: string;
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
  customerdeviceID: string;
  billCycleID: number;
}

export interface QueryGetcustomerbillResponse {
  listofbillinglines: string;
  billTotalWh: number;
  billTotalPrice: number;
  curency: string;
  nblines: number;
  comments: string;
}

export interface QueryGetCustomerbillsRequest {
  billCycleID: number;
  customerdeviceID: string;
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
  producerdeviceID: string;
  billCycleID: number;
}

export interface QueryGetproducerbillResponse {
  listofbillinglines: string;
  billTotalWh: number;
  billTotalPrice: number;
  curency: string;
  nblines: number;
  comments: string;
}

export interface QueryGetProducerbillsRequest {
  billCycleID: number;
  producerdeviceID: string;
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

const baseQueryGetPpaMapRequest: object = {
  consumerDeviceID: "",
  agreementID: "",
  agreementActive: false,
  contractID: "",
};

export const QueryGetPpaMapRequest = {
  encode(
    message: QueryGetPpaMapRequest,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): QueryGetPpaMapRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPpaMapRequest } as QueryGetPpaMapRequest;
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
    const message = { ...baseQueryGetPpaMapRequest } as QueryGetPpaMapRequest;
    if (
      object.consumerDeviceID !== undefined &&
      object.consumerDeviceID !== null
    ) {
      message.consumerDeviceID = String(object.consumerDeviceID);
    } else {
      message.consumerDeviceID = "";
    }
    if (object.agreementID !== undefined && object.agreementID !== null) {
      message.agreementID = String(object.agreementID);
    } else {
      message.agreementID = "";
    }
    if (
      object.agreementActive !== undefined &&
      object.agreementActive !== null
    ) {
      message.agreementActive = Boolean(object.agreementActive);
    } else {
      message.agreementActive = false;
    }
    if (object.contractID !== undefined && object.contractID !== null) {
      message.contractID = String(object.contractID);
    } else {
      message.contractID = "";
    }
    return message;
  },

  toJSON(message: QueryGetPpaMapRequest): unknown {
    const obj: any = {};
    message.consumerDeviceID !== undefined &&
      (obj.consumerDeviceID = message.consumerDeviceID);
    message.agreementID !== undefined &&
      (obj.agreementID = message.agreementID);
    message.agreementActive !== undefined &&
      (obj.agreementActive = message.agreementActive);
    message.contractID !== undefined && (obj.contractID = message.contractID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPpaMapRequest>
  ): QueryGetPpaMapRequest {
    const message = { ...baseQueryGetPpaMapRequest } as QueryGetPpaMapRequest;
    if (
      object.consumerDeviceID !== undefined &&
      object.consumerDeviceID !== null
    ) {
      message.consumerDeviceID = object.consumerDeviceID;
    } else {
      message.consumerDeviceID = "";
    }
    if (object.agreementID !== undefined && object.agreementID !== null) {
      message.agreementID = object.agreementID;
    } else {
      message.agreementID = "";
    }
    if (
      object.agreementActive !== undefined &&
      object.agreementActive !== null
    ) {
      message.agreementActive = object.agreementActive;
    } else {
      message.agreementActive = false;
    }
    if (object.contractID !== undefined && object.contractID !== null) {
      message.contractID = object.contractID;
    } else {
      message.contractID = "";
    }
    return message;
  },
};

const baseQueryGetPpaMapResponse: object = {};

export const QueryGetPpaMapResponse = {
  encode(
    message: QueryGetPpaMapResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ppaMap !== undefined) {
      PpaMap.encode(message.ppaMap, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPpaMapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPpaMapResponse } as QueryGetPpaMapResponse;
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
    const message = { ...baseQueryGetPpaMapResponse } as QueryGetPpaMapResponse;
    if (object.ppaMap !== undefined && object.ppaMap !== null) {
      message.ppaMap = PpaMap.fromJSON(object.ppaMap);
    } else {
      message.ppaMap = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPpaMapResponse): unknown {
    const obj: any = {};
    message.ppaMap !== undefined &&
      (obj.ppaMap = message.ppaMap ? PpaMap.toJSON(message.ppaMap) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPpaMapResponse>
  ): QueryGetPpaMapResponse {
    const message = { ...baseQueryGetPpaMapResponse } as QueryGetPpaMapResponse;
    if (object.ppaMap !== undefined && object.ppaMap !== null) {
      message.ppaMap = PpaMap.fromPartial(object.ppaMap);
    } else {
      message.ppaMap = undefined;
    }
    return message;
  },
};

const baseQueryAllPpaMapRequest: object = {};

export const QueryAllPpaMapRequest = {
  encode(
    message: QueryAllPpaMapRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPpaMapRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPpaMapRequest } as QueryAllPpaMapRequest;
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
    const message = { ...baseQueryAllPpaMapRequest } as QueryAllPpaMapRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPpaMapRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPpaMapRequest>
  ): QueryAllPpaMapRequest {
    const message = { ...baseQueryAllPpaMapRequest } as QueryAllPpaMapRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPpaMapResponse: object = {};

export const QueryAllPpaMapResponse = {
  encode(
    message: QueryAllPpaMapResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.ppaMap) {
      PpaMap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPpaMapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPpaMapResponse } as QueryAllPpaMapResponse;
    message.ppaMap = [];
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
    const message = { ...baseQueryAllPpaMapResponse } as QueryAllPpaMapResponse;
    message.ppaMap = [];
    if (object.ppaMap !== undefined && object.ppaMap !== null) {
      for (const e of object.ppaMap) {
        message.ppaMap.push(PpaMap.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPpaMapResponse): unknown {
    const obj: any = {};
    if (message.ppaMap) {
      obj.ppaMap = message.ppaMap.map((e) =>
        e ? PpaMap.toJSON(e) : undefined
      );
    } else {
      obj.ppaMap = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPpaMapResponse>
  ): QueryAllPpaMapResponse {
    const message = { ...baseQueryAllPpaMapResponse } as QueryAllPpaMapResponse;
    message.ppaMap = [];
    if (object.ppaMap !== undefined && object.ppaMap !== null) {
      for (const e of object.ppaMap) {
        message.ppaMap.push(PpaMap.fromPartial(e));
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

const baseQueryGetBillingcyclesRequest: object = { cycleID: 0 };

export const QueryGetBillingcyclesRequest = {
  encode(
    message: QueryGetBillingcyclesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.cycleID !== 0) {
      writer.uint32(8).uint64(message.cycleID);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBillingcyclesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBillingcyclesRequest,
    } as QueryGetBillingcyclesRequest;
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
    const message = {
      ...baseQueryGetBillingcyclesRequest,
    } as QueryGetBillingcyclesRequest;
    if (object.cycleID !== undefined && object.cycleID !== null) {
      message.cycleID = Number(object.cycleID);
    } else {
      message.cycleID = 0;
    }
    return message;
  },

  toJSON(message: QueryGetBillingcyclesRequest): unknown {
    const obj: any = {};
    message.cycleID !== undefined && (obj.cycleID = message.cycleID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBillingcyclesRequest>
  ): QueryGetBillingcyclesRequest {
    const message = {
      ...baseQueryGetBillingcyclesRequest,
    } as QueryGetBillingcyclesRequest;
    if (object.cycleID !== undefined && object.cycleID !== null) {
      message.cycleID = object.cycleID;
    } else {
      message.cycleID = 0;
    }
    return message;
  },
};

const baseQueryGetBillingcyclesResponse: object = {};

export const QueryGetBillingcyclesResponse = {
  encode(
    message: QueryGetBillingcyclesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.billingcycles !== undefined) {
      Billingcycles.encode(
        message.billingcycles,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBillingcyclesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBillingcyclesResponse,
    } as QueryGetBillingcyclesResponse;
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
    const message = {
      ...baseQueryGetBillingcyclesResponse,
    } as QueryGetBillingcyclesResponse;
    if (object.billingcycles !== undefined && object.billingcycles !== null) {
      message.billingcycles = Billingcycles.fromJSON(object.billingcycles);
    } else {
      message.billingcycles = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBillingcyclesResponse): unknown {
    const obj: any = {};
    message.billingcycles !== undefined &&
      (obj.billingcycles = message.billingcycles
        ? Billingcycles.toJSON(message.billingcycles)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBillingcyclesResponse>
  ): QueryGetBillingcyclesResponse {
    const message = {
      ...baseQueryGetBillingcyclesResponse,
    } as QueryGetBillingcyclesResponse;
    if (object.billingcycles !== undefined && object.billingcycles !== null) {
      message.billingcycles = Billingcycles.fromPartial(object.billingcycles);
    } else {
      message.billingcycles = undefined;
    }
    return message;
  },
};

const baseQueryAllBillingcyclesRequest: object = {};

export const QueryAllBillingcyclesRequest = {
  encode(
    message: QueryAllBillingcyclesRequest,
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
  ): QueryAllBillingcyclesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBillingcyclesRequest,
    } as QueryAllBillingcyclesRequest;
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
    const message = {
      ...baseQueryAllBillingcyclesRequest,
    } as QueryAllBillingcyclesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBillingcyclesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBillingcyclesRequest>
  ): QueryAllBillingcyclesRequest {
    const message = {
      ...baseQueryAllBillingcyclesRequest,
    } as QueryAllBillingcyclesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBillingcyclesResponse: object = {};

export const QueryAllBillingcyclesResponse = {
  encode(
    message: QueryAllBillingcyclesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.billingcycles) {
      Billingcycles.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllBillingcyclesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBillingcyclesResponse,
    } as QueryAllBillingcyclesResponse;
    message.billingcycles = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.billingcycles.push(
            Billingcycles.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllBillingcyclesResponse {
    const message = {
      ...baseQueryAllBillingcyclesResponse,
    } as QueryAllBillingcyclesResponse;
    message.billingcycles = [];
    if (object.billingcycles !== undefined && object.billingcycles !== null) {
      for (const e of object.billingcycles) {
        message.billingcycles.push(Billingcycles.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBillingcyclesResponse): unknown {
    const obj: any = {};
    if (message.billingcycles) {
      obj.billingcycles = message.billingcycles.map((e) =>
        e ? Billingcycles.toJSON(e) : undefined
      );
    } else {
      obj.billingcycles = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBillingcyclesResponse>
  ): QueryAllBillingcyclesResponse {
    const message = {
      ...baseQueryAllBillingcyclesResponse,
    } as QueryAllBillingcyclesResponse;
    message.billingcycles = [];
    if (object.billingcycles !== undefined && object.billingcycles !== null) {
      for (const e of object.billingcycles) {
        message.billingcycles.push(Billingcycles.fromPartial(e));
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

const baseQueryGetCustomerbillinglineRequest: object = {
  customerdeviceID: "",
  cycleID: 0,
  lineid: 0,
};

export const QueryGetCustomerbillinglineRequest = {
  encode(
    message: QueryGetCustomerbillinglineRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.customerdeviceID !== "") {
      writer.uint32(10).string(message.customerdeviceID);
    }
    if (message.cycleID !== 0) {
      writer.uint32(16).uint64(message.cycleID);
    }
    if (message.lineid !== 0) {
      writer.uint32(24).uint64(message.lineid);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCustomerbillinglineRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCustomerbillinglineRequest,
    } as QueryGetCustomerbillinglineRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerdeviceID = reader.string();
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
    const message = {
      ...baseQueryGetCustomerbillinglineRequest,
    } as QueryGetCustomerbillinglineRequest;
    if (
      object.customerdeviceID !== undefined &&
      object.customerdeviceID !== null
    ) {
      message.customerdeviceID = String(object.customerdeviceID);
    } else {
      message.customerdeviceID = "";
    }
    if (object.cycleID !== undefined && object.cycleID !== null) {
      message.cycleID = Number(object.cycleID);
    } else {
      message.cycleID = 0;
    }
    if (object.lineid !== undefined && object.lineid !== null) {
      message.lineid = Number(object.lineid);
    } else {
      message.lineid = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCustomerbillinglineRequest): unknown {
    const obj: any = {};
    message.customerdeviceID !== undefined &&
      (obj.customerdeviceID = message.customerdeviceID);
    message.cycleID !== undefined && (obj.cycleID = message.cycleID);
    message.lineid !== undefined && (obj.lineid = message.lineid);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCustomerbillinglineRequest>
  ): QueryGetCustomerbillinglineRequest {
    const message = {
      ...baseQueryGetCustomerbillinglineRequest,
    } as QueryGetCustomerbillinglineRequest;
    if (
      object.customerdeviceID !== undefined &&
      object.customerdeviceID !== null
    ) {
      message.customerdeviceID = object.customerdeviceID;
    } else {
      message.customerdeviceID = "";
    }
    if (object.cycleID !== undefined && object.cycleID !== null) {
      message.cycleID = object.cycleID;
    } else {
      message.cycleID = 0;
    }
    if (object.lineid !== undefined && object.lineid !== null) {
      message.lineid = object.lineid;
    } else {
      message.lineid = 0;
    }
    return message;
  },
};

const baseQueryGetCustomerbillinglineResponse: object = {};

export const QueryGetCustomerbillinglineResponse = {
  encode(
    message: QueryGetCustomerbillinglineResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.customerbillingline !== undefined) {
      Customerbillingline.encode(
        message.customerbillingline,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCustomerbillinglineResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCustomerbillinglineResponse,
    } as QueryGetCustomerbillinglineResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerbillingline = Customerbillingline.decode(
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

  fromJSON(object: any): QueryGetCustomerbillinglineResponse {
    const message = {
      ...baseQueryGetCustomerbillinglineResponse,
    } as QueryGetCustomerbillinglineResponse;
    if (
      object.customerbillingline !== undefined &&
      object.customerbillingline !== null
    ) {
      message.customerbillingline = Customerbillingline.fromJSON(
        object.customerbillingline
      );
    } else {
      message.customerbillingline = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCustomerbillinglineResponse): unknown {
    const obj: any = {};
    message.customerbillingline !== undefined &&
      (obj.customerbillingline = message.customerbillingline
        ? Customerbillingline.toJSON(message.customerbillingline)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCustomerbillinglineResponse>
  ): QueryGetCustomerbillinglineResponse {
    const message = {
      ...baseQueryGetCustomerbillinglineResponse,
    } as QueryGetCustomerbillinglineResponse;
    if (
      object.customerbillingline !== undefined &&
      object.customerbillingline !== null
    ) {
      message.customerbillingline = Customerbillingline.fromPartial(
        object.customerbillingline
      );
    } else {
      message.customerbillingline = undefined;
    }
    return message;
  },
};

const baseQueryAllCustomerbillinglineRequest: object = {};

export const QueryAllCustomerbillinglineRequest = {
  encode(
    message: QueryAllCustomerbillinglineRequest,
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
  ): QueryAllCustomerbillinglineRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCustomerbillinglineRequest,
    } as QueryAllCustomerbillinglineRequest;
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
    const message = {
      ...baseQueryAllCustomerbillinglineRequest,
    } as QueryAllCustomerbillinglineRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCustomerbillinglineRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCustomerbillinglineRequest>
  ): QueryAllCustomerbillinglineRequest {
    const message = {
      ...baseQueryAllCustomerbillinglineRequest,
    } as QueryAllCustomerbillinglineRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCustomerbillinglineResponse: object = {};

export const QueryAllCustomerbillinglineResponse = {
  encode(
    message: QueryAllCustomerbillinglineResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.customerbillingline) {
      Customerbillingline.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllCustomerbillinglineResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCustomerbillinglineResponse,
    } as QueryAllCustomerbillinglineResponse;
    message.customerbillingline = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerbillingline.push(
            Customerbillingline.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllCustomerbillinglineResponse {
    const message = {
      ...baseQueryAllCustomerbillinglineResponse,
    } as QueryAllCustomerbillinglineResponse;
    message.customerbillingline = [];
    if (
      object.customerbillingline !== undefined &&
      object.customerbillingline !== null
    ) {
      for (const e of object.customerbillingline) {
        message.customerbillingline.push(Customerbillingline.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCustomerbillinglineResponse): unknown {
    const obj: any = {};
    if (message.customerbillingline) {
      obj.customerbillingline = message.customerbillingline.map((e) =>
        e ? Customerbillingline.toJSON(e) : undefined
      );
    } else {
      obj.customerbillingline = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCustomerbillinglineResponse>
  ): QueryAllCustomerbillinglineResponse {
    const message = {
      ...baseQueryAllCustomerbillinglineResponse,
    } as QueryAllCustomerbillinglineResponse;
    message.customerbillingline = [];
    if (
      object.customerbillingline !== undefined &&
      object.customerbillingline !== null
    ) {
      for (const e of object.customerbillingline) {
        message.customerbillingline.push(Customerbillingline.fromPartial(e));
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

const baseQueryGetcustomerbillRequest: object = {
  customerdeviceID: "",
  billCycleID: 0,
};

export const QueryGetcustomerbillRequest = {
  encode(
    message: QueryGetcustomerbillRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.customerdeviceID !== "") {
      writer.uint32(10).string(message.customerdeviceID);
    }
    if (message.billCycleID !== 0) {
      writer.uint32(16).uint64(message.billCycleID);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetcustomerbillRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetcustomerbillRequest,
    } as QueryGetcustomerbillRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerdeviceID = reader.string();
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
    const message = {
      ...baseQueryGetcustomerbillRequest,
    } as QueryGetcustomerbillRequest;
    if (
      object.customerdeviceID !== undefined &&
      object.customerdeviceID !== null
    ) {
      message.customerdeviceID = String(object.customerdeviceID);
    } else {
      message.customerdeviceID = "";
    }
    if (object.billCycleID !== undefined && object.billCycleID !== null) {
      message.billCycleID = Number(object.billCycleID);
    } else {
      message.billCycleID = 0;
    }
    return message;
  },

  toJSON(message: QueryGetcustomerbillRequest): unknown {
    const obj: any = {};
    message.customerdeviceID !== undefined &&
      (obj.customerdeviceID = message.customerdeviceID);
    message.billCycleID !== undefined &&
      (obj.billCycleID = message.billCycleID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetcustomerbillRequest>
  ): QueryGetcustomerbillRequest {
    const message = {
      ...baseQueryGetcustomerbillRequest,
    } as QueryGetcustomerbillRequest;
    if (
      object.customerdeviceID !== undefined &&
      object.customerdeviceID !== null
    ) {
      message.customerdeviceID = object.customerdeviceID;
    } else {
      message.customerdeviceID = "";
    }
    if (object.billCycleID !== undefined && object.billCycleID !== null) {
      message.billCycleID = object.billCycleID;
    } else {
      message.billCycleID = 0;
    }
    return message;
  },
};

const baseQueryGetcustomerbillResponse: object = {
  listofbillinglines: "",
  billTotalWh: 0,
  billTotalPrice: 0,
  curency: "",
  nblines: 0,
  comments: "",
};

export const QueryGetcustomerbillResponse = {
  encode(
    message: QueryGetcustomerbillResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.listofbillinglines !== "") {
      writer.uint32(10).string(message.listofbillinglines);
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetcustomerbillResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetcustomerbillResponse,
    } as QueryGetcustomerbillResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listofbillinglines = reader.string();
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

  fromJSON(object: any): QueryGetcustomerbillResponse {
    const message = {
      ...baseQueryGetcustomerbillResponse,
    } as QueryGetcustomerbillResponse;
    if (
      object.listofbillinglines !== undefined &&
      object.listofbillinglines !== null
    ) {
      message.listofbillinglines = String(object.listofbillinglines);
    } else {
      message.listofbillinglines = "";
    }
    if (object.billTotalWh !== undefined && object.billTotalWh !== null) {
      message.billTotalWh = Number(object.billTotalWh);
    } else {
      message.billTotalWh = 0;
    }
    if (object.billTotalPrice !== undefined && object.billTotalPrice !== null) {
      message.billTotalPrice = Number(object.billTotalPrice);
    } else {
      message.billTotalPrice = 0;
    }
    if (object.curency !== undefined && object.curency !== null) {
      message.curency = String(object.curency);
    } else {
      message.curency = "";
    }
    if (object.nblines !== undefined && object.nblines !== null) {
      message.nblines = Number(object.nblines);
    } else {
      message.nblines = 0;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = "";
    }
    return message;
  },

  toJSON(message: QueryGetcustomerbillResponse): unknown {
    const obj: any = {};
    message.listofbillinglines !== undefined &&
      (obj.listofbillinglines = message.listofbillinglines);
    message.billTotalWh !== undefined &&
      (obj.billTotalWh = message.billTotalWh);
    message.billTotalPrice !== undefined &&
      (obj.billTotalPrice = message.billTotalPrice);
    message.curency !== undefined && (obj.curency = message.curency);
    message.nblines !== undefined && (obj.nblines = message.nblines);
    message.comments !== undefined && (obj.comments = message.comments);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetcustomerbillResponse>
  ): QueryGetcustomerbillResponse {
    const message = {
      ...baseQueryGetcustomerbillResponse,
    } as QueryGetcustomerbillResponse;
    if (
      object.listofbillinglines !== undefined &&
      object.listofbillinglines !== null
    ) {
      message.listofbillinglines = object.listofbillinglines;
    } else {
      message.listofbillinglines = "";
    }
    if (object.billTotalWh !== undefined && object.billTotalWh !== null) {
      message.billTotalWh = object.billTotalWh;
    } else {
      message.billTotalWh = 0;
    }
    if (object.billTotalPrice !== undefined && object.billTotalPrice !== null) {
      message.billTotalPrice = object.billTotalPrice;
    } else {
      message.billTotalPrice = 0;
    }
    if (object.curency !== undefined && object.curency !== null) {
      message.curency = object.curency;
    } else {
      message.curency = "";
    }
    if (object.nblines !== undefined && object.nblines !== null) {
      message.nblines = object.nblines;
    } else {
      message.nblines = 0;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = "";
    }
    return message;
  },
};

const baseQueryGetCustomerbillsRequest: object = {
  billCycleID: 0,
  customerdeviceID: "",
};

export const QueryGetCustomerbillsRequest = {
  encode(
    message: QueryGetCustomerbillsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.billCycleID !== 0) {
      writer.uint32(8).uint64(message.billCycleID);
    }
    if (message.customerdeviceID !== "") {
      writer.uint32(18).string(message.customerdeviceID);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCustomerbillsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCustomerbillsRequest,
    } as QueryGetCustomerbillsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.billCycleID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.customerdeviceID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCustomerbillsRequest {
    const message = {
      ...baseQueryGetCustomerbillsRequest,
    } as QueryGetCustomerbillsRequest;
    if (object.billCycleID !== undefined && object.billCycleID !== null) {
      message.billCycleID = Number(object.billCycleID);
    } else {
      message.billCycleID = 0;
    }
    if (
      object.customerdeviceID !== undefined &&
      object.customerdeviceID !== null
    ) {
      message.customerdeviceID = String(object.customerdeviceID);
    } else {
      message.customerdeviceID = "";
    }
    return message;
  },

  toJSON(message: QueryGetCustomerbillsRequest): unknown {
    const obj: any = {};
    message.billCycleID !== undefined &&
      (obj.billCycleID = message.billCycleID);
    message.customerdeviceID !== undefined &&
      (obj.customerdeviceID = message.customerdeviceID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCustomerbillsRequest>
  ): QueryGetCustomerbillsRequest {
    const message = {
      ...baseQueryGetCustomerbillsRequest,
    } as QueryGetCustomerbillsRequest;
    if (object.billCycleID !== undefined && object.billCycleID !== null) {
      message.billCycleID = object.billCycleID;
    } else {
      message.billCycleID = 0;
    }
    if (
      object.customerdeviceID !== undefined &&
      object.customerdeviceID !== null
    ) {
      message.customerdeviceID = object.customerdeviceID;
    } else {
      message.customerdeviceID = "";
    }
    return message;
  },
};

const baseQueryGetCustomerbillsResponse: object = {};

export const QueryGetCustomerbillsResponse = {
  encode(
    message: QueryGetCustomerbillsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.customerbills !== undefined) {
      Customerbills.encode(
        message.customerbills,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCustomerbillsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCustomerbillsResponse,
    } as QueryGetCustomerbillsResponse;
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
    const message = {
      ...baseQueryGetCustomerbillsResponse,
    } as QueryGetCustomerbillsResponse;
    if (object.customerbills !== undefined && object.customerbills !== null) {
      message.customerbills = Customerbills.fromJSON(object.customerbills);
    } else {
      message.customerbills = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCustomerbillsResponse): unknown {
    const obj: any = {};
    message.customerbills !== undefined &&
      (obj.customerbills = message.customerbills
        ? Customerbills.toJSON(message.customerbills)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCustomerbillsResponse>
  ): QueryGetCustomerbillsResponse {
    const message = {
      ...baseQueryGetCustomerbillsResponse,
    } as QueryGetCustomerbillsResponse;
    if (object.customerbills !== undefined && object.customerbills !== null) {
      message.customerbills = Customerbills.fromPartial(object.customerbills);
    } else {
      message.customerbills = undefined;
    }
    return message;
  },
};

const baseQueryAllCustomerbillsRequest: object = {};

export const QueryAllCustomerbillsRequest = {
  encode(
    message: QueryAllCustomerbillsRequest,
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
  ): QueryAllCustomerbillsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCustomerbillsRequest,
    } as QueryAllCustomerbillsRequest;
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
    const message = {
      ...baseQueryAllCustomerbillsRequest,
    } as QueryAllCustomerbillsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCustomerbillsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCustomerbillsRequest>
  ): QueryAllCustomerbillsRequest {
    const message = {
      ...baseQueryAllCustomerbillsRequest,
    } as QueryAllCustomerbillsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCustomerbillsResponse: object = {};

export const QueryAllCustomerbillsResponse = {
  encode(
    message: QueryAllCustomerbillsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.customerbills) {
      Customerbills.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllCustomerbillsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCustomerbillsResponse,
    } as QueryAllCustomerbillsResponse;
    message.customerbills = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customerbills.push(
            Customerbills.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllCustomerbillsResponse {
    const message = {
      ...baseQueryAllCustomerbillsResponse,
    } as QueryAllCustomerbillsResponse;
    message.customerbills = [];
    if (object.customerbills !== undefined && object.customerbills !== null) {
      for (const e of object.customerbills) {
        message.customerbills.push(Customerbills.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCustomerbillsResponse): unknown {
    const obj: any = {};
    if (message.customerbills) {
      obj.customerbills = message.customerbills.map((e) =>
        e ? Customerbills.toJSON(e) : undefined
      );
    } else {
      obj.customerbills = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCustomerbillsResponse>
  ): QueryAllCustomerbillsResponse {
    const message = {
      ...baseQueryAllCustomerbillsResponse,
    } as QueryAllCustomerbillsResponse;
    message.customerbills = [];
    if (object.customerbills !== undefined && object.customerbills !== null) {
      for (const e of object.customerbills) {
        message.customerbills.push(Customerbills.fromPartial(e));
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

const baseQueryGetProducerbillinglineRequest: object = {
  producerDeviceID: "",
  cycleID: 0,
  lineid: 0,
};

export const QueryGetProducerbillinglineRequest = {
  encode(
    message: QueryGetProducerbillinglineRequest,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetProducerbillinglineRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProducerbillinglineRequest,
    } as QueryGetProducerbillinglineRequest;
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
    const message = {
      ...baseQueryGetProducerbillinglineRequest,
    } as QueryGetProducerbillinglineRequest;
    if (
      object.producerDeviceID !== undefined &&
      object.producerDeviceID !== null
    ) {
      message.producerDeviceID = String(object.producerDeviceID);
    } else {
      message.producerDeviceID = "";
    }
    if (object.cycleID !== undefined && object.cycleID !== null) {
      message.cycleID = Number(object.cycleID);
    } else {
      message.cycleID = 0;
    }
    if (object.lineid !== undefined && object.lineid !== null) {
      message.lineid = Number(object.lineid);
    } else {
      message.lineid = 0;
    }
    return message;
  },

  toJSON(message: QueryGetProducerbillinglineRequest): unknown {
    const obj: any = {};
    message.producerDeviceID !== undefined &&
      (obj.producerDeviceID = message.producerDeviceID);
    message.cycleID !== undefined && (obj.cycleID = message.cycleID);
    message.lineid !== undefined && (obj.lineid = message.lineid);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProducerbillinglineRequest>
  ): QueryGetProducerbillinglineRequest {
    const message = {
      ...baseQueryGetProducerbillinglineRequest,
    } as QueryGetProducerbillinglineRequest;
    if (
      object.producerDeviceID !== undefined &&
      object.producerDeviceID !== null
    ) {
      message.producerDeviceID = object.producerDeviceID;
    } else {
      message.producerDeviceID = "";
    }
    if (object.cycleID !== undefined && object.cycleID !== null) {
      message.cycleID = object.cycleID;
    } else {
      message.cycleID = 0;
    }
    if (object.lineid !== undefined && object.lineid !== null) {
      message.lineid = object.lineid;
    } else {
      message.lineid = 0;
    }
    return message;
  },
};

const baseQueryGetProducerbillinglineResponse: object = {};

export const QueryGetProducerbillinglineResponse = {
  encode(
    message: QueryGetProducerbillinglineResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.producerbillingline !== undefined) {
      Producerbillingline.encode(
        message.producerbillingline,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetProducerbillinglineResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProducerbillinglineResponse,
    } as QueryGetProducerbillinglineResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.producerbillingline = Producerbillingline.decode(
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

  fromJSON(object: any): QueryGetProducerbillinglineResponse {
    const message = {
      ...baseQueryGetProducerbillinglineResponse,
    } as QueryGetProducerbillinglineResponse;
    if (
      object.producerbillingline !== undefined &&
      object.producerbillingline !== null
    ) {
      message.producerbillingline = Producerbillingline.fromJSON(
        object.producerbillingline
      );
    } else {
      message.producerbillingline = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetProducerbillinglineResponse): unknown {
    const obj: any = {};
    message.producerbillingline !== undefined &&
      (obj.producerbillingline = message.producerbillingline
        ? Producerbillingline.toJSON(message.producerbillingline)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProducerbillinglineResponse>
  ): QueryGetProducerbillinglineResponse {
    const message = {
      ...baseQueryGetProducerbillinglineResponse,
    } as QueryGetProducerbillinglineResponse;
    if (
      object.producerbillingline !== undefined &&
      object.producerbillingline !== null
    ) {
      message.producerbillingline = Producerbillingline.fromPartial(
        object.producerbillingline
      );
    } else {
      message.producerbillingline = undefined;
    }
    return message;
  },
};

const baseQueryAllProducerbillinglineRequest: object = {};

export const QueryAllProducerbillinglineRequest = {
  encode(
    message: QueryAllProducerbillinglineRequest,
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
  ): QueryAllProducerbillinglineRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllProducerbillinglineRequest,
    } as QueryAllProducerbillinglineRequest;
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
    const message = {
      ...baseQueryAllProducerbillinglineRequest,
    } as QueryAllProducerbillinglineRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllProducerbillinglineRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProducerbillinglineRequest>
  ): QueryAllProducerbillinglineRequest {
    const message = {
      ...baseQueryAllProducerbillinglineRequest,
    } as QueryAllProducerbillinglineRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllProducerbillinglineResponse: object = {};

export const QueryAllProducerbillinglineResponse = {
  encode(
    message: QueryAllProducerbillinglineResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.producerbillingline) {
      Producerbillingline.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllProducerbillinglineResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllProducerbillinglineResponse,
    } as QueryAllProducerbillinglineResponse;
    message.producerbillingline = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.producerbillingline.push(
            Producerbillingline.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllProducerbillinglineResponse {
    const message = {
      ...baseQueryAllProducerbillinglineResponse,
    } as QueryAllProducerbillinglineResponse;
    message.producerbillingline = [];
    if (
      object.producerbillingline !== undefined &&
      object.producerbillingline !== null
    ) {
      for (const e of object.producerbillingline) {
        message.producerbillingline.push(Producerbillingline.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllProducerbillinglineResponse): unknown {
    const obj: any = {};
    if (message.producerbillingline) {
      obj.producerbillingline = message.producerbillingline.map((e) =>
        e ? Producerbillingline.toJSON(e) : undefined
      );
    } else {
      obj.producerbillingline = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProducerbillinglineResponse>
  ): QueryAllProducerbillinglineResponse {
    const message = {
      ...baseQueryAllProducerbillinglineResponse,
    } as QueryAllProducerbillinglineResponse;
    message.producerbillingline = [];
    if (
      object.producerbillingline !== undefined &&
      object.producerbillingline !== null
    ) {
      for (const e of object.producerbillingline) {
        message.producerbillingline.push(Producerbillingline.fromPartial(e));
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

const baseQueryGetproducerbillRequest: object = {
  producerdeviceID: "",
  billCycleID: 0,
};

export const QueryGetproducerbillRequest = {
  encode(
    message: QueryGetproducerbillRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.producerdeviceID !== "") {
      writer.uint32(10).string(message.producerdeviceID);
    }
    if (message.billCycleID !== 0) {
      writer.uint32(16).uint64(message.billCycleID);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetproducerbillRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetproducerbillRequest,
    } as QueryGetproducerbillRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.producerdeviceID = reader.string();
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
    const message = {
      ...baseQueryGetproducerbillRequest,
    } as QueryGetproducerbillRequest;
    if (
      object.producerdeviceID !== undefined &&
      object.producerdeviceID !== null
    ) {
      message.producerdeviceID = String(object.producerdeviceID);
    } else {
      message.producerdeviceID = "";
    }
    if (object.billCycleID !== undefined && object.billCycleID !== null) {
      message.billCycleID = Number(object.billCycleID);
    } else {
      message.billCycleID = 0;
    }
    return message;
  },

  toJSON(message: QueryGetproducerbillRequest): unknown {
    const obj: any = {};
    message.producerdeviceID !== undefined &&
      (obj.producerdeviceID = message.producerdeviceID);
    message.billCycleID !== undefined &&
      (obj.billCycleID = message.billCycleID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetproducerbillRequest>
  ): QueryGetproducerbillRequest {
    const message = {
      ...baseQueryGetproducerbillRequest,
    } as QueryGetproducerbillRequest;
    if (
      object.producerdeviceID !== undefined &&
      object.producerdeviceID !== null
    ) {
      message.producerdeviceID = object.producerdeviceID;
    } else {
      message.producerdeviceID = "";
    }
    if (object.billCycleID !== undefined && object.billCycleID !== null) {
      message.billCycleID = object.billCycleID;
    } else {
      message.billCycleID = 0;
    }
    return message;
  },
};

const baseQueryGetproducerbillResponse: object = {
  listofbillinglines: "",
  billTotalWh: 0,
  billTotalPrice: 0,
  curency: "",
  nblines: 0,
  comments: "",
};

export const QueryGetproducerbillResponse = {
  encode(
    message: QueryGetproducerbillResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.listofbillinglines !== "") {
      writer.uint32(10).string(message.listofbillinglines);
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetproducerbillResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetproducerbillResponse,
    } as QueryGetproducerbillResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listofbillinglines = reader.string();
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
    const message = {
      ...baseQueryGetproducerbillResponse,
    } as QueryGetproducerbillResponse;
    if (
      object.listofbillinglines !== undefined &&
      object.listofbillinglines !== null
    ) {
      message.listofbillinglines = String(object.listofbillinglines);
    } else {
      message.listofbillinglines = "";
    }
    if (object.billTotalWh !== undefined && object.billTotalWh !== null) {
      message.billTotalWh = Number(object.billTotalWh);
    } else {
      message.billTotalWh = 0;
    }
    if (object.billTotalPrice !== undefined && object.billTotalPrice !== null) {
      message.billTotalPrice = Number(object.billTotalPrice);
    } else {
      message.billTotalPrice = 0;
    }
    if (object.curency !== undefined && object.curency !== null) {
      message.curency = String(object.curency);
    } else {
      message.curency = "";
    }
    if (object.nblines !== undefined && object.nblines !== null) {
      message.nblines = Number(object.nblines);
    } else {
      message.nblines = 0;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = "";
    }
    return message;
  },

  toJSON(message: QueryGetproducerbillResponse): unknown {
    const obj: any = {};
    message.listofbillinglines !== undefined &&
      (obj.listofbillinglines = message.listofbillinglines);
    message.billTotalWh !== undefined &&
      (obj.billTotalWh = message.billTotalWh);
    message.billTotalPrice !== undefined &&
      (obj.billTotalPrice = message.billTotalPrice);
    message.curency !== undefined && (obj.curency = message.curency);
    message.nblines !== undefined && (obj.nblines = message.nblines);
    message.comments !== undefined && (obj.comments = message.comments);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetproducerbillResponse>
  ): QueryGetproducerbillResponse {
    const message = {
      ...baseQueryGetproducerbillResponse,
    } as QueryGetproducerbillResponse;
    if (
      object.listofbillinglines !== undefined &&
      object.listofbillinglines !== null
    ) {
      message.listofbillinglines = object.listofbillinglines;
    } else {
      message.listofbillinglines = "";
    }
    if (object.billTotalWh !== undefined && object.billTotalWh !== null) {
      message.billTotalWh = object.billTotalWh;
    } else {
      message.billTotalWh = 0;
    }
    if (object.billTotalPrice !== undefined && object.billTotalPrice !== null) {
      message.billTotalPrice = object.billTotalPrice;
    } else {
      message.billTotalPrice = 0;
    }
    if (object.curency !== undefined && object.curency !== null) {
      message.curency = object.curency;
    } else {
      message.curency = "";
    }
    if (object.nblines !== undefined && object.nblines !== null) {
      message.nblines = object.nblines;
    } else {
      message.nblines = 0;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = "";
    }
    return message;
  },
};

const baseQueryGetProducerbillsRequest: object = {
  billCycleID: 0,
  producerdeviceID: "",
};

export const QueryGetProducerbillsRequest = {
  encode(
    message: QueryGetProducerbillsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.billCycleID !== 0) {
      writer.uint32(8).uint64(message.billCycleID);
    }
    if (message.producerdeviceID !== "") {
      writer.uint32(18).string(message.producerdeviceID);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetProducerbillsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProducerbillsRequest,
    } as QueryGetProducerbillsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.billCycleID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.producerdeviceID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProducerbillsRequest {
    const message = {
      ...baseQueryGetProducerbillsRequest,
    } as QueryGetProducerbillsRequest;
    if (object.billCycleID !== undefined && object.billCycleID !== null) {
      message.billCycleID = Number(object.billCycleID);
    } else {
      message.billCycleID = 0;
    }
    if (
      object.producerdeviceID !== undefined &&
      object.producerdeviceID !== null
    ) {
      message.producerdeviceID = String(object.producerdeviceID);
    } else {
      message.producerdeviceID = "";
    }
    return message;
  },

  toJSON(message: QueryGetProducerbillsRequest): unknown {
    const obj: any = {};
    message.billCycleID !== undefined &&
      (obj.billCycleID = message.billCycleID);
    message.producerdeviceID !== undefined &&
      (obj.producerdeviceID = message.producerdeviceID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProducerbillsRequest>
  ): QueryGetProducerbillsRequest {
    const message = {
      ...baseQueryGetProducerbillsRequest,
    } as QueryGetProducerbillsRequest;
    if (object.billCycleID !== undefined && object.billCycleID !== null) {
      message.billCycleID = object.billCycleID;
    } else {
      message.billCycleID = 0;
    }
    if (
      object.producerdeviceID !== undefined &&
      object.producerdeviceID !== null
    ) {
      message.producerdeviceID = object.producerdeviceID;
    } else {
      message.producerdeviceID = "";
    }
    return message;
  },
};

const baseQueryGetProducerbillsResponse: object = {};

export const QueryGetProducerbillsResponse = {
  encode(
    message: QueryGetProducerbillsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.producerbills !== undefined) {
      Producerbills.encode(
        message.producerbills,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetProducerbillsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProducerbillsResponse,
    } as QueryGetProducerbillsResponse;
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
    const message = {
      ...baseQueryGetProducerbillsResponse,
    } as QueryGetProducerbillsResponse;
    if (object.producerbills !== undefined && object.producerbills !== null) {
      message.producerbills = Producerbills.fromJSON(object.producerbills);
    } else {
      message.producerbills = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetProducerbillsResponse): unknown {
    const obj: any = {};
    message.producerbills !== undefined &&
      (obj.producerbills = message.producerbills
        ? Producerbills.toJSON(message.producerbills)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProducerbillsResponse>
  ): QueryGetProducerbillsResponse {
    const message = {
      ...baseQueryGetProducerbillsResponse,
    } as QueryGetProducerbillsResponse;
    if (object.producerbills !== undefined && object.producerbills !== null) {
      message.producerbills = Producerbills.fromPartial(object.producerbills);
    } else {
      message.producerbills = undefined;
    }
    return message;
  },
};

const baseQueryAllProducerbillsRequest: object = {};

export const QueryAllProducerbillsRequest = {
  encode(
    message: QueryAllProducerbillsRequest,
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
  ): QueryAllProducerbillsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllProducerbillsRequest,
    } as QueryAllProducerbillsRequest;
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
    const message = {
      ...baseQueryAllProducerbillsRequest,
    } as QueryAllProducerbillsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllProducerbillsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProducerbillsRequest>
  ): QueryAllProducerbillsRequest {
    const message = {
      ...baseQueryAllProducerbillsRequest,
    } as QueryAllProducerbillsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllProducerbillsResponse: object = {};

export const QueryAllProducerbillsResponse = {
  encode(
    message: QueryAllProducerbillsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.producerbills) {
      Producerbills.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllProducerbillsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllProducerbillsResponse,
    } as QueryAllProducerbillsResponse;
    message.producerbills = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.producerbills.push(
            Producerbills.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllProducerbillsResponse {
    const message = {
      ...baseQueryAllProducerbillsResponse,
    } as QueryAllProducerbillsResponse;
    message.producerbills = [];
    if (object.producerbills !== undefined && object.producerbills !== null) {
      for (const e of object.producerbills) {
        message.producerbills.push(Producerbills.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllProducerbillsResponse): unknown {
    const obj: any = {};
    if (message.producerbills) {
      obj.producerbills = message.producerbills.map((e) =>
        e ? Producerbills.toJSON(e) : undefined
      );
    } else {
      obj.producerbills = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProducerbillsResponse>
  ): QueryAllProducerbillsResponse {
    const message = {
      ...baseQueryAllProducerbillsResponse,
    } as QueryAllProducerbillsResponse;
    message.producerbills = [];
    if (object.producerbills !== undefined && object.producerbills !== null) {
      for (const e of object.producerbills) {
        message.producerbills.push(Producerbills.fromPartial(e));
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
  /** Queries a PpaMap by index. */
  PpaMap(request: QueryGetPpaMapRequest): Promise<QueryGetPpaMapResponse>;
  /** Queries a list of PpaMap items. */
  PpaMapAll(request: QueryAllPpaMapRequest): Promise<QueryAllPpaMapResponse>;
  /** Queries a Billingcycles by index. */
  Billingcycles(
    request: QueryGetBillingcyclesRequest
  ): Promise<QueryGetBillingcyclesResponse>;
  /** Queries a list of Billingcycles items. */
  BillingcyclesAll(
    request: QueryAllBillingcyclesRequest
  ): Promise<QueryAllBillingcyclesResponse>;
  /** Queries a Customerbillingline by index. */
  Customerbillingline(
    request: QueryGetCustomerbillinglineRequest
  ): Promise<QueryGetCustomerbillinglineResponse>;
  /** Queries a list of Customerbillingline items. */
  CustomerbillinglineAll(
    request: QueryAllCustomerbillinglineRequest
  ): Promise<QueryAllCustomerbillinglineResponse>;
  /** Queries a list of Getcustomerbill items. */
  Getcustomerbill(
    request: QueryGetcustomerbillRequest
  ): Promise<QueryGetcustomerbillResponse>;
  /** Queries a Customerbills by index. */
  Customerbills(
    request: QueryGetCustomerbillsRequest
  ): Promise<QueryGetCustomerbillsResponse>;
  /** Queries a list of Customerbills items. */
  CustomerbillsAll(
    request: QueryAllCustomerbillsRequest
  ): Promise<QueryAllCustomerbillsResponse>;
  /** Queries a Producerbillingline by index. */
  Producerbillingline(
    request: QueryGetProducerbillinglineRequest
  ): Promise<QueryGetProducerbillinglineResponse>;
  /** Queries a list of Producerbillingline items. */
  ProducerbillinglineAll(
    request: QueryAllProducerbillinglineRequest
  ): Promise<QueryAllProducerbillinglineResponse>;
  /** Queries a list of Getproducerbill items. */
  Getproducerbill(
    request: QueryGetproducerbillRequest
  ): Promise<QueryGetproducerbillResponse>;
  /** Queries a Producerbills by index. */
  Producerbills(
    request: QueryGetProducerbillsRequest
  ): Promise<QueryGetProducerbillsResponse>;
  /** Queries a list of Producerbills items. */
  ProducerbillsAll(
    request: QueryAllProducerbillsRequest
  ): Promise<QueryAllProducerbillsResponse>;
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

  PpaMap(request: QueryGetPpaMapRequest): Promise<QueryGetPpaMapResponse> {
    const data = QueryGetPpaMapRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "PpaMap", data);
    return promise.then((data) =>
      QueryGetPpaMapResponse.decode(new Reader(data))
    );
  }

  PpaMapAll(request: QueryAllPpaMapRequest): Promise<QueryAllPpaMapResponse> {
    const data = QueryAllPpaMapRequest.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Query", "PpaMapAll", data);
    return promise.then((data) =>
      QueryAllPpaMapResponse.decode(new Reader(data))
    );
  }

  Billingcycles(
    request: QueryGetBillingcyclesRequest
  ): Promise<QueryGetBillingcyclesResponse> {
    const data = QueryGetBillingcyclesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Query",
      "Billingcycles",
      data
    );
    return promise.then((data) =>
      QueryGetBillingcyclesResponse.decode(new Reader(data))
    );
  }

  BillingcyclesAll(
    request: QueryAllBillingcyclesRequest
  ): Promise<QueryAllBillingcyclesResponse> {
    const data = QueryAllBillingcyclesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Query",
      "BillingcyclesAll",
      data
    );
    return promise.then((data) =>
      QueryAllBillingcyclesResponse.decode(new Reader(data))
    );
  }

  Customerbillingline(
    request: QueryGetCustomerbillinglineRequest
  ): Promise<QueryGetCustomerbillinglineResponse> {
    const data = QueryGetCustomerbillinglineRequest.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Query",
      "Customerbillingline",
      data
    );
    return promise.then((data) =>
      QueryGetCustomerbillinglineResponse.decode(new Reader(data))
    );
  }

  CustomerbillinglineAll(
    request: QueryAllCustomerbillinglineRequest
  ): Promise<QueryAllCustomerbillinglineResponse> {
    const data = QueryAllCustomerbillinglineRequest.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Query",
      "CustomerbillinglineAll",
      data
    );
    return promise.then((data) =>
      QueryAllCustomerbillinglineResponse.decode(new Reader(data))
    );
  }

  Getcustomerbill(
    request: QueryGetcustomerbillRequest
  ): Promise<QueryGetcustomerbillResponse> {
    const data = QueryGetcustomerbillRequest.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Query",
      "Getcustomerbill",
      data
    );
    return promise.then((data) =>
      QueryGetcustomerbillResponse.decode(new Reader(data))
    );
  }

  Customerbills(
    request: QueryGetCustomerbillsRequest
  ): Promise<QueryGetCustomerbillsResponse> {
    const data = QueryGetCustomerbillsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Query",
      "Customerbills",
      data
    );
    return promise.then((data) =>
      QueryGetCustomerbillsResponse.decode(new Reader(data))
    );
  }

  CustomerbillsAll(
    request: QueryAllCustomerbillsRequest
  ): Promise<QueryAllCustomerbillsResponse> {
    const data = QueryAllCustomerbillsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Query",
      "CustomerbillsAll",
      data
    );
    return promise.then((data) =>
      QueryAllCustomerbillsResponse.decode(new Reader(data))
    );
  }

  Producerbillingline(
    request: QueryGetProducerbillinglineRequest
  ): Promise<QueryGetProducerbillinglineResponse> {
    const data = QueryGetProducerbillinglineRequest.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Query",
      "Producerbillingline",
      data
    );
    return promise.then((data) =>
      QueryGetProducerbillinglineResponse.decode(new Reader(data))
    );
  }

  ProducerbillinglineAll(
    request: QueryAllProducerbillinglineRequest
  ): Promise<QueryAllProducerbillinglineResponse> {
    const data = QueryAllProducerbillinglineRequest.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Query",
      "ProducerbillinglineAll",
      data
    );
    return promise.then((data) =>
      QueryAllProducerbillinglineResponse.decode(new Reader(data))
    );
  }

  Getproducerbill(
    request: QueryGetproducerbillRequest
  ): Promise<QueryGetproducerbillResponse> {
    const data = QueryGetproducerbillRequest.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Query",
      "Getproducerbill",
      data
    );
    return promise.then((data) =>
      QueryGetproducerbillResponse.decode(new Reader(data))
    );
  }

  Producerbills(
    request: QueryGetProducerbillsRequest
  ): Promise<QueryGetProducerbillsResponse> {
    const data = QueryGetProducerbillsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Query",
      "Producerbills",
      data
    );
    return promise.then((data) =>
      QueryGetProducerbillsResponse.decode(new Reader(data))
    );
  }

  ProducerbillsAll(
    request: QueryAllProducerbillsRequest
  ): Promise<QueryAllProducerbillsResponse> {
    const data = QueryAllProducerbillsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Query",
      "ProducerbillsAll",
      data
    );
    return promise.then((data) =>
      QueryAllProducerbillsResponse.decode(new Reader(data))
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

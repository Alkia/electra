/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface MeterBillingcycles {
  /** @format uint64 */
  cycleID?: string;

  /** @format uint64 */
  begin?: string;

  /** @format uint64 */
  end?: string;

  /** @format uint64 */
  whin?: string;

  /** @format uint64 */
  whout?: string;

  /** @format uint64 */
  moneyin?: string;

  /** @format uint64 */
  moneyout?: string;
  curency?: string;
  creator?: string;
}

export interface MeterCustomerbillingline {
  customerDeviceID?: string;

  /** @format uint64 */
  cycleID?: string;

  /** @format uint64 */
  lineid?: string;
  producerDeviceID?: string;
  billContractID?: string;

  /** @format uint64 */
  lineWh?: string;

  /** @format uint64 */
  lineWhPrice?: string;
  curency?: string;

  /** @format uint64 */
  lineWhTotalPrice?: string;

  /** @format uint64 */
  phase?: string;
  creator?: string;
}

export interface MeterCustomerbills {
  /** @format uint64 */
  billCycleID?: string;
  customerdeviceID?: string;

  /** @format uint64 */
  billDate?: string;

  /** @format uint64 */
  billTotalWh?: string;

  /** @format uint64 */
  billTotalPrice?: string;
  billCurrency?: string;
  billValid?: boolean;
  paid?: boolean;
  creator?: string;
}

export interface MeterMeterdirectory {
  deviceID?: string;
  barcodeserial?: string;
  model?: string;

  /** @format uint64 */
  installationdate?: string;
  address?: string;
  ownerlastname?: string;
  ownerfirstname?: string;
  ownerphone?: string;
  gpsjson?: string;
  active?: boolean;
  triphased?: boolean;

  /** @format uint64 */
  phasenbmono?: string;
}

export interface MeterMeterreadings {
  deviceID?: string;

  /** @format uint64 */
  timestamp?: string;

  /** @format uint64 */
  phase?: string;

  /** @format uint64 */
  whin?: string;

  /** @format uint64 */
  whout?: string;

  /** @format uint64 */
  mvolt?: string;

  /** @format uint64 */
  mhertz?: string;

  /** @format uint64 */
  mpf?: string;

  /** @format uint64 */
  maxmi?: string;
}

export type MeterMsgCreateBillingcyclesResponse = object;

export type MeterMsgCreateCustomerbillinglineResponse = object;

export type MeterMsgCreateCustomerbillsResponse = object;

export type MeterMsgCreatePowerPurchaseContractResponse = object;

export type MeterMsgCreatePpaMapResponse = object;

export type MeterMsgCreateProducerbillinglineResponse = object;

export type MeterMsgCreateProducerbillsResponse = object;

export type MeterMsgDeleteBillingcyclesResponse = object;

export type MeterMsgDeleteCustomerbillinglineResponse = object;

export type MeterMsgDeleteCustomerbillsResponse = object;

export type MeterMsgDeletePowerPurchaseContractResponse = object;

export type MeterMsgDeletePpaMapResponse = object;

export type MeterMsgDeleteProducerbillinglineResponse = object;

export type MeterMsgDeleteProducerbillsResponse = object;

export interface MeterMsgPrepareBillResponse {
  jsonCustomerbill?: string;
  jsonProducerbill?: string;
  comment?: string;
}

export type MeterMsgRecord3Response = object;

export type MeterMsgRecordResponse = object;

export type MeterMsgUpdateBillingcyclesResponse = object;

export type MeterMsgUpdateCustomerbillinglineResponse = object;

export type MeterMsgUpdateCustomerbillsResponse = object;

export type MeterMsgUpdatePowerPurchaseContractResponse = object;

export type MeterMsgUpdatePpaMapResponse = object;

export type MeterMsgUpdateProducerbillinglineResponse = object;

export type MeterMsgUpdateProducerbillsResponse = object;

/**
 * Params defines the parameters for the module.
 */
export interface MeterParams {
  /** @format uint64 */
  maxBillingIteration?: string;
  moduleParamBestForCustomer?: boolean;
  payAutomatically?: boolean;
  billingAdmin?: string;
}

export interface MeterPowerPurchaseContract {
  contractID?: string;
  contractDeviceID?: string;
  contractName?: string;
  contractActive?: boolean;

  /** @format uint64 */
  contractPhase?: string;
  contractForAll?: boolean;

  /** @format uint64 */
  contractForAllPrice?: string;
  contractForAllCurency?: string;
  contractForAllActivePeriod?: string;
  contractPreferred?: boolean;

  /** @format uint64 */
  contractPreferredPrice?: string;
  contractPreferredActivePeriod?: string;
  contractPreferredCurency?: string;

  /** @format uint64 */
  contractStartDate?: string;

  /** @format uint64 */
  contractEndDate?: string;

  /** @format uint64 */
  phase1RemainingWh?: string;

  /** @format uint64 */
  phase2RemainingWh?: string;

  /** @format uint64 */
  phase3RemainingWh?: string;
  creator?: string;
}

export interface MeterPpaMap {
  consumerDeviceID?: string;
  agreementID?: string;
  agreementActive?: boolean;
  contractID?: string;
  producerDeviceID?: string;

  /** @format uint64 */
  agreementStartDate?: string;

  /** @format uint64 */
  agreementEndDate?: string;

  /** @format uint64 */
  contractPreferredPrice?: string;
  contractPreferredCurency?: string;
  creator?: string;
}

export interface MeterProducerbillingline {
  producerDeviceID?: string;

  /** @format uint64 */
  cycleID?: string;

  /** @format uint64 */
  lineid?: string;
  customerDeviceID?: string;
  billContractID?: string;

  /** @format uint64 */
  lineWh?: string;

  /** @format uint64 */
  lineWhPrice?: string;
  curency?: string;

  /** @format uint64 */
  lineWhTotalPrice?: string;

  /** @format uint64 */
  phase?: string;
  creator?: string;
}

export interface MeterProducerbills {
  /** @format uint64 */
  billCycleID?: string;
  producerdeviceID?: string;

  /** @format uint64 */
  billDate?: string;

  /** @format uint64 */
  billTotalWh?: string;

  /** @format uint64 */
  billTotalPrice?: string;
  billCurrency?: string;
  billValid?: boolean;
  paid?: boolean;
  creator?: string;
}

export interface MeterQueryAllBillingcyclesResponse {
  billingcycles?: MeterBillingcycles[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface MeterQueryAllCustomerbillinglineResponse {
  customerbillingline?: MeterCustomerbillingline[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface MeterQueryAllCustomerbillsResponse {
  customerbills?: MeterCustomerbills[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface MeterQueryAllMeterdirectoryResponse {
  meterdirectory?: MeterMeterdirectory[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface MeterQueryAllMeterreadingsResponse {
  meterreadings?: MeterMeterreadings[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface MeterQueryAllPowerPurchaseContractResponse {
  powerPurchaseContract?: MeterPowerPurchaseContract[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface MeterQueryAllPpaMapResponse {
  ppaMap?: MeterPpaMap[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface MeterQueryAllProducerbillinglineResponse {
  producerbillingline?: MeterProducerbillingline[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface MeterQueryAllProducerbillsResponse {
  producerbills?: MeterProducerbills[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface MeterQueryCurrentcycleIDResponse {
  /** @format uint64 */
  cycleID?: string;

  /** @format uint64 */
  begin?: string;

  /** @format uint64 */
  end?: string;

  /** @format uint64 */
  whin?: string;

  /** @format uint64 */
  whout?: string;

  /** @format uint64 */
  moneyin?: string;

  /** @format uint64 */
  moneyout?: string;
  curency?: string;
}

export interface MeterQueryGetBillingcyclesResponse {
  billingcycles?: MeterBillingcycles;
}

export interface MeterQueryGetCustomerbillinglineResponse {
  customerbillingline?: MeterCustomerbillingline;
}

export interface MeterQueryGetCustomerbillsResponse {
  customerbills?: MeterCustomerbills;
}

export interface MeterQueryGetMeterdirectoryResponse {
  meterdirectory?: MeterMeterdirectory;
}

export interface MeterQueryGetMeterreadingsResponse {
  meterreadings?: MeterMeterreadings;
}

export interface MeterQueryGetPowerPurchaseContractResponse {
  powerPurchaseContract?: MeterPowerPurchaseContract;
}

export interface MeterQueryGetPpaMapResponse {
  ppaMap?: MeterPpaMap;
}

export interface MeterQueryGetProducerbillinglineResponse {
  producerbillingline?: MeterProducerbillingline;
}

export interface MeterQueryGetProducerbillsResponse {
  producerbills?: MeterProducerbills;
}

export interface MeterQueryGetcustomerbillResponse {
  customerbillinglines?: string;

  /** @format uint64 */
  billTotalWh?: string;

  /** @format uint64 */
  billTotalPrice?: string;
  currency?: string;

  /** @format uint64 */
  nblines?: string;
  comments?: string;
}

export interface MeterQueryGetproducerbillResponse {
  producerbillinglines?: string;

  /** @format uint64 */
  billTotalWh?: string;

  /** @format uint64 */
  billTotalPrice?: string;
  curency?: string;

  /** @format uint64 */
  nblines?: string;
  comments?: string;
}

export interface MeterQueryListrecordingsResponse {
  meterreadings?: string;
  comments?: string;

  /** @format uint64 */
  total?: string;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface MeterQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: MeterParams;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently. It will be empty if
   * there are no more results.
   * @format byte
   */
  next_key?: string;

  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   * @format uint64
   */
  total?: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title electra/meter/billingcycles.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryBillingcyclesAll
   * @summary Queries a list of Billingcycles items.
   * @request GET:/electra/meter/billingcycles
   */
  queryBillingcyclesAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MeterQueryAllBillingcyclesResponse, RpcStatus>({
      path: `/electra/meter/billingcycles`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBillingcycles
   * @summary Queries a Billingcycles by index.
   * @request GET:/electra/meter/billingcycles/{cycleID}
   */
  queryBillingcycles = (cycleId: string, params: RequestParams = {}) =>
    this.request<MeterQueryGetBillingcyclesResponse, RpcStatus>({
      path: `/electra/meter/billingcycles/${cycleId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCurrentcycleId
   * @summary Queries a list of CurrentcycleID items.
   * @request GET:/electra/meter/currentcycle_id
   */
  queryCurrentcycleId = (params: RequestParams = {}) =>
    this.request<MeterQueryCurrentcycleIDResponse, RpcStatus>({
      path: `/electra/meter/currentcycle_id`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCustomerbillinglineAll
   * @summary Queries a list of Customerbillingline items.
   * @request GET:/electra/meter/customerbillingline
   */
  queryCustomerbillinglineAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MeterQueryAllCustomerbillinglineResponse, RpcStatus>({
      path: `/electra/meter/customerbillingline`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCustomerbillingline
   * @summary Queries a Customerbillingline by index.
   * @request GET:/electra/meter/customerbillingline/{customerDeviceID}/{cycleID}/{lineid}
   */
  queryCustomerbillingline = (customerDeviceId: string, cycleId: string, lineid: string, params: RequestParams = {}) =>
    this.request<MeterQueryGetCustomerbillinglineResponse, RpcStatus>({
      path: `/electra/meter/customerbillingline/${customerDeviceId}/${cycleId}/${lineid}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCustomerbillsAll
   * @summary Queries a list of Customerbills items.
   * @request GET:/electra/meter/customerbills
   */
  queryCustomerbillsAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MeterQueryAllCustomerbillsResponse, RpcStatus>({
      path: `/electra/meter/customerbills`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCustomerbills
   * @summary Queries a Customerbills by index.
   * @request GET:/electra/meter/customerbills/{billCycleID}/{customerdeviceID}
   */
  queryCustomerbills = (billCycleId: string, customerdeviceId: string, params: RequestParams = {}) =>
    this.request<MeterQueryGetCustomerbillsResponse, RpcStatus>({
      path: `/electra/meter/customerbills/${billCycleId}/${customerdeviceId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetcustomerbill
   * @summary Queries a list of Getcustomerbill items.
   * @request GET:/electra/meter/getcustomerbill/{customerdeviceID}/{billCycleID}
   */
  queryGetcustomerbill = (customerdeviceId: string, billCycleId: string, params: RequestParams = {}) =>
    this.request<MeterQueryGetcustomerbillResponse, RpcStatus>({
      path: `/electra/meter/getcustomerbill/${customerdeviceId}/${billCycleId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetproducerbill
   * @summary Queries a list of Getproducerbill items.
   * @request GET:/electra/meter/getproducerbill/{producerdeviceID}/{billCycleID}
   */
  queryGetproducerbill = (producerdeviceId: string, billCycleId: string, params: RequestParams = {}) =>
    this.request<MeterQueryGetproducerbillResponse, RpcStatus>({
      path: `/electra/meter/getproducerbill/${producerdeviceId}/${billCycleId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryListrecordings
   * @summary Queries a list of Listrecordings items.
   * @request GET:/electra/meter/listrecordings/{deviceID}/{start}/{end}/{byUnixTime}
   */
  queryListrecordings = (
    deviceId: string,
    start: string,
    end: string,
    byUnixTime: boolean,
    params: RequestParams = {},
  ) =>
    this.request<MeterQueryListrecordingsResponse, RpcStatus>({
      path: `/electra/meter/listrecordings/${deviceId}/${start}/${end}/${byUnixTime}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMeterdirectoryAll
   * @summary Queries a list of Meterdirectory items.
   * @request GET:/electra/meter/meterdirectory
   */
  queryMeterdirectoryAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MeterQueryAllMeterdirectoryResponse, RpcStatus>({
      path: `/electra/meter/meterdirectory`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMeterdirectory
   * @summary Queries a Meterdirectory by index.
   * @request GET:/electra/meter/meterdirectory/{deviceID}/{barcodeserial}
   */
  queryMeterdirectory = (deviceId: string, barcodeserial: string, params: RequestParams = {}) =>
    this.request<MeterQueryGetMeterdirectoryResponse, RpcStatus>({
      path: `/electra/meter/meterdirectory/${deviceId}/${barcodeserial}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMeterreadingsAll
   * @summary Queries a list of Meterreadings items.
   * @request GET:/electra/meter/meterreadings
   */
  queryMeterreadingsAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MeterQueryAllMeterreadingsResponse, RpcStatus>({
      path: `/electra/meter/meterreadings`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryMeterreadings
   * @summary Queries a Meterreadings by index.
   * @request GET:/electra/meter/meterreadings/{deviceID}/{timestamp}
   */
  queryMeterreadings = (deviceId: string, timestamp: string, params: RequestParams = {}) =>
    this.request<MeterQueryGetMeterreadingsResponse, RpcStatus>({
      path: `/electra/meter/meterreadings/${deviceId}/${timestamp}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/electra/meter/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<MeterQueryParamsResponse, RpcStatus>({
      path: `/electra/meter/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPowerPurchaseContractAll
   * @summary Queries a list of PowerPurchaseContract items.
   * @request GET:/electra/meter/power_purchase_contract
   */
  queryPowerPurchaseContractAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MeterQueryAllPowerPurchaseContractResponse, RpcStatus>({
      path: `/electra/meter/power_purchase_contract`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPowerPurchaseContract
   * @summary Queries a PowerPurchaseContract by index.
   * @request GET:/electra/meter/power_purchase_contract/{contractID}/{contractDeviceID}
   */
  queryPowerPurchaseContract = (contractId: string, contractDeviceId: string, params: RequestParams = {}) =>
    this.request<MeterQueryGetPowerPurchaseContractResponse, RpcStatus>({
      path: `/electra/meter/power_purchase_contract/${contractId}/${contractDeviceId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPpaMapAll
   * @summary Queries a list of PpaMap items.
   * @request GET:/electra/meter/ppa_map
   */
  queryPpaMapAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MeterQueryAllPpaMapResponse, RpcStatus>({
      path: `/electra/meter/ppa_map`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPpaMap
   * @summary Queries a PpaMap by index.
   * @request GET:/electra/meter/ppa_map/{consumerDeviceID}/{agreementID}/{agreementActive}/{contractID}
   */
  queryPpaMap = (
    consumerDeviceId: string,
    agreementId: string,
    agreementActive: boolean,
    contractId: string,
    params: RequestParams = {},
  ) =>
    this.request<MeterQueryGetPpaMapResponse, RpcStatus>({
      path: `/electra/meter/ppa_map/${consumerDeviceId}/${agreementId}/${agreementActive}/${contractId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryProducerbillinglineAll
   * @summary Queries a list of Producerbillingline items.
   * @request GET:/electra/meter/producerbillingline
   */
  queryProducerbillinglineAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MeterQueryAllProducerbillinglineResponse, RpcStatus>({
      path: `/electra/meter/producerbillingline`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryProducerbillingline
   * @summary Queries a Producerbillingline by index.
   * @request GET:/electra/meter/producerbillingline/{producerDeviceID}/{cycleID}/{lineid}
   */
  queryProducerbillingline = (producerDeviceId: string, cycleId: string, lineid: string, params: RequestParams = {}) =>
    this.request<MeterQueryGetProducerbillinglineResponse, RpcStatus>({
      path: `/electra/meter/producerbillingline/${producerDeviceId}/${cycleId}/${lineid}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryProducerbillsAll
   * @summary Queries a list of Producerbills items.
   * @request GET:/electra/meter/producerbills
   */
  queryProducerbillsAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MeterQueryAllProducerbillsResponse, RpcStatus>({
      path: `/electra/meter/producerbills`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryProducerbills
   * @summary Queries a Producerbills by index.
   * @request GET:/electra/meter/producerbills/{billCycleID}/{producerdeviceID}
   */
  queryProducerbills = (billCycleId: string, producerdeviceId: string, params: RequestParams = {}) =>
    this.request<MeterQueryGetProducerbillsResponse, RpcStatus>({
      path: `/electra/meter/producerbills/${billCycleId}/${producerdeviceId}`,
      method: "GET",
      format: "json",
      ...params,
    });
}

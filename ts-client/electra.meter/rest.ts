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

export type MeterMsgRecord3Response = object;

export type MeterMsgRecordResponse = object;

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

export interface MeterQueryGetMeterdirectoryResponse {
  meterdirectory?: MeterMeterdirectory;
}

export interface MeterQueryGetMeterreadingsResponse {
  meterreadings?: MeterMeterreadings;
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
 * @title electra/meter/genesis.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
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
}

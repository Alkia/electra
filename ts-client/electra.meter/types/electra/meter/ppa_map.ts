/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "electra.meter";

export interface PpaMap {
  consumerDeviceID: string;
  agreementID: string;
  agreementActive: boolean;
  contractID: string;
  producerDeviceID: string;
  agreementStartDate: number;
  agreementEndDate: number;
  contractPreferredPrice: number;
  contractPreferredCurency: string;
  creator: string;
}

function createBasePpaMap(): PpaMap {
  return {
    consumerDeviceID: "",
    agreementID: "",
    agreementActive: false,
    contractID: "",
    producerDeviceID: "",
    agreementStartDate: 0,
    agreementEndDate: 0,
    contractPreferredPrice: 0,
    contractPreferredCurency: "",
    creator: "",
  };
}

export const PpaMap = {
  encode(message: PpaMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.producerDeviceID !== "") {
      writer.uint32(42).string(message.producerDeviceID);
    }
    if (message.agreementStartDate !== 0) {
      writer.uint32(48).uint64(message.agreementStartDate);
    }
    if (message.agreementEndDate !== 0) {
      writer.uint32(56).uint64(message.agreementEndDate);
    }
    if (message.contractPreferredPrice !== 0) {
      writer.uint32(64).uint64(message.contractPreferredPrice);
    }
    if (message.contractPreferredCurency !== "") {
      writer.uint32(74).string(message.contractPreferredCurency);
    }
    if (message.creator !== "") {
      writer.uint32(82).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PpaMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePpaMap();
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
        case 5:
          message.producerDeviceID = reader.string();
          break;
        case 6:
          message.agreementStartDate = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.agreementEndDate = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.contractPreferredPrice = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.contractPreferredCurency = reader.string();
          break;
        case 10:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PpaMap {
    return {
      consumerDeviceID: isSet(object.consumerDeviceID) ? String(object.consumerDeviceID) : "",
      agreementID: isSet(object.agreementID) ? String(object.agreementID) : "",
      agreementActive: isSet(object.agreementActive) ? Boolean(object.agreementActive) : false,
      contractID: isSet(object.contractID) ? String(object.contractID) : "",
      producerDeviceID: isSet(object.producerDeviceID) ? String(object.producerDeviceID) : "",
      agreementStartDate: isSet(object.agreementStartDate) ? Number(object.agreementStartDate) : 0,
      agreementEndDate: isSet(object.agreementEndDate) ? Number(object.agreementEndDate) : 0,
      contractPreferredPrice: isSet(object.contractPreferredPrice) ? Number(object.contractPreferredPrice) : 0,
      contractPreferredCurency: isSet(object.contractPreferredCurency) ? String(object.contractPreferredCurency) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: PpaMap): unknown {
    const obj: any = {};
    message.consumerDeviceID !== undefined && (obj.consumerDeviceID = message.consumerDeviceID);
    message.agreementID !== undefined && (obj.agreementID = message.agreementID);
    message.agreementActive !== undefined && (obj.agreementActive = message.agreementActive);
    message.contractID !== undefined && (obj.contractID = message.contractID);
    message.producerDeviceID !== undefined && (obj.producerDeviceID = message.producerDeviceID);
    message.agreementStartDate !== undefined && (obj.agreementStartDate = Math.round(message.agreementStartDate));
    message.agreementEndDate !== undefined && (obj.agreementEndDate = Math.round(message.agreementEndDate));
    message.contractPreferredPrice !== undefined
      && (obj.contractPreferredPrice = Math.round(message.contractPreferredPrice));
    message.contractPreferredCurency !== undefined && (obj.contractPreferredCurency = message.contractPreferredCurency);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PpaMap>, I>>(object: I): PpaMap {
    const message = createBasePpaMap();
    message.consumerDeviceID = object.consumerDeviceID ?? "";
    message.agreementID = object.agreementID ?? "";
    message.agreementActive = object.agreementActive ?? false;
    message.contractID = object.contractID ?? "";
    message.producerDeviceID = object.producerDeviceID ?? "";
    message.agreementStartDate = object.agreementStartDate ?? 0;
    message.agreementEndDate = object.agreementEndDate ?? 0;
    message.contractPreferredPrice = object.contractPreferredPrice ?? 0;
    message.contractPreferredCurency = object.contractPreferredCurency ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

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

/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "electra.meter";

export interface PpaMap {
  consumerDeviceID: string;
  agreementID: string;
  agreementActive: boolean;
  contractID: string;
  producerDeviceID: string;
  agreementStartDate: number;
  agreementEndDate: number;
  creator: string;
}

const basePpaMap: object = {
  consumerDeviceID: "",
  agreementID: "",
  agreementActive: false,
  contractID: "",
  producerDeviceID: "",
  agreementStartDate: 0,
  agreementEndDate: 0,
  creator: "",
};

export const PpaMap = {
  encode(message: PpaMap, writer: Writer = Writer.create()): Writer {
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
    if (message.creator !== "") {
      writer.uint32(66).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PpaMap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePpaMap } as PpaMap;
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
    const message = { ...basePpaMap } as PpaMap;
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
    if (
      object.producerDeviceID !== undefined &&
      object.producerDeviceID !== null
    ) {
      message.producerDeviceID = String(object.producerDeviceID);
    } else {
      message.producerDeviceID = "";
    }
    if (
      object.agreementStartDate !== undefined &&
      object.agreementStartDate !== null
    ) {
      message.agreementStartDate = Number(object.agreementStartDate);
    } else {
      message.agreementStartDate = 0;
    }
    if (
      object.agreementEndDate !== undefined &&
      object.agreementEndDate !== null
    ) {
      message.agreementEndDate = Number(object.agreementEndDate);
    } else {
      message.agreementEndDate = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: PpaMap): unknown {
    const obj: any = {};
    message.consumerDeviceID !== undefined &&
      (obj.consumerDeviceID = message.consumerDeviceID);
    message.agreementID !== undefined &&
      (obj.agreementID = message.agreementID);
    message.agreementActive !== undefined &&
      (obj.agreementActive = message.agreementActive);
    message.contractID !== undefined && (obj.contractID = message.contractID);
    message.producerDeviceID !== undefined &&
      (obj.producerDeviceID = message.producerDeviceID);
    message.agreementStartDate !== undefined &&
      (obj.agreementStartDate = message.agreementStartDate);
    message.agreementEndDate !== undefined &&
      (obj.agreementEndDate = message.agreementEndDate);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<PpaMap>): PpaMap {
    const message = { ...basePpaMap } as PpaMap;
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
    if (
      object.producerDeviceID !== undefined &&
      object.producerDeviceID !== null
    ) {
      message.producerDeviceID = object.producerDeviceID;
    } else {
      message.producerDeviceID = "";
    }
    if (
      object.agreementStartDate !== undefined &&
      object.agreementStartDate !== null
    ) {
      message.agreementStartDate = object.agreementStartDate;
    } else {
      message.agreementStartDate = 0;
    }
    if (
      object.agreementEndDate !== undefined &&
      object.agreementEndDate !== null
    ) {
      message.agreementEndDate = object.agreementEndDate;
    } else {
      message.agreementEndDate = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

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

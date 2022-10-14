/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "electra.meter";

export interface Producerbillingline {
  producerDeviceID: string;
  cycleID: number;
  lineid: number;
  customerdeviceID: string;
  billContractID: string;
  lineWh: number;
  lineWhPrice: number;
  curency: string;
  decremented: number;
  phase: number;
  creator: string;
}

const baseProducerbillingline: object = {
  producerDeviceID: "",
  cycleID: 0,
  lineid: 0,
  customerdeviceID: "",
  billContractID: "",
  lineWh: 0,
  lineWhPrice: 0,
  curency: "",
  decremented: 0,
  phase: 0,
  creator: "",
};

export const Producerbillingline = {
  encode(
    message: Producerbillingline,
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
    if (message.customerdeviceID !== "") {
      writer.uint32(34).string(message.customerdeviceID);
    }
    if (message.billContractID !== "") {
      writer.uint32(42).string(message.billContractID);
    }
    if (message.lineWh !== 0) {
      writer.uint32(48).uint64(message.lineWh);
    }
    if (message.lineWhPrice !== 0) {
      writer.uint32(56).uint64(message.lineWhPrice);
    }
    if (message.curency !== "") {
      writer.uint32(66).string(message.curency);
    }
    if (message.decremented !== 0) {
      writer.uint32(72).uint64(message.decremented);
    }
    if (message.phase !== 0) {
      writer.uint32(80).uint64(message.phase);
    }
    if (message.creator !== "") {
      writer.uint32(90).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Producerbillingline {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProducerbillingline } as Producerbillingline;
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
        case 4:
          message.customerdeviceID = reader.string();
          break;
        case 5:
          message.billContractID = reader.string();
          break;
        case 6:
          message.lineWh = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.lineWhPrice = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.curency = reader.string();
          break;
        case 9:
          message.decremented = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.phase = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Producerbillingline {
    const message = { ...baseProducerbillingline } as Producerbillingline;
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
    if (
      object.customerdeviceID !== undefined &&
      object.customerdeviceID !== null
    ) {
      message.customerdeviceID = String(object.customerdeviceID);
    } else {
      message.customerdeviceID = "";
    }
    if (object.billContractID !== undefined && object.billContractID !== null) {
      message.billContractID = String(object.billContractID);
    } else {
      message.billContractID = "";
    }
    if (object.lineWh !== undefined && object.lineWh !== null) {
      message.lineWh = Number(object.lineWh);
    } else {
      message.lineWh = 0;
    }
    if (object.lineWhPrice !== undefined && object.lineWhPrice !== null) {
      message.lineWhPrice = Number(object.lineWhPrice);
    } else {
      message.lineWhPrice = 0;
    }
    if (object.curency !== undefined && object.curency !== null) {
      message.curency = String(object.curency);
    } else {
      message.curency = "";
    }
    if (object.decremented !== undefined && object.decremented !== null) {
      message.decremented = Number(object.decremented);
    } else {
      message.decremented = 0;
    }
    if (object.phase !== undefined && object.phase !== null) {
      message.phase = Number(object.phase);
    } else {
      message.phase = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Producerbillingline): unknown {
    const obj: any = {};
    message.producerDeviceID !== undefined &&
      (obj.producerDeviceID = message.producerDeviceID);
    message.cycleID !== undefined && (obj.cycleID = message.cycleID);
    message.lineid !== undefined && (obj.lineid = message.lineid);
    message.customerdeviceID !== undefined &&
      (obj.customerdeviceID = message.customerdeviceID);
    message.billContractID !== undefined &&
      (obj.billContractID = message.billContractID);
    message.lineWh !== undefined && (obj.lineWh = message.lineWh);
    message.lineWhPrice !== undefined &&
      (obj.lineWhPrice = message.lineWhPrice);
    message.curency !== undefined && (obj.curency = message.curency);
    message.decremented !== undefined &&
      (obj.decremented = message.decremented);
    message.phase !== undefined && (obj.phase = message.phase);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Producerbillingline>): Producerbillingline {
    const message = { ...baseProducerbillingline } as Producerbillingline;
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
    if (
      object.customerdeviceID !== undefined &&
      object.customerdeviceID !== null
    ) {
      message.customerdeviceID = object.customerdeviceID;
    } else {
      message.customerdeviceID = "";
    }
    if (object.billContractID !== undefined && object.billContractID !== null) {
      message.billContractID = object.billContractID;
    } else {
      message.billContractID = "";
    }
    if (object.lineWh !== undefined && object.lineWh !== null) {
      message.lineWh = object.lineWh;
    } else {
      message.lineWh = 0;
    }
    if (object.lineWhPrice !== undefined && object.lineWhPrice !== null) {
      message.lineWhPrice = object.lineWhPrice;
    } else {
      message.lineWhPrice = 0;
    }
    if (object.curency !== undefined && object.curency !== null) {
      message.curency = object.curency;
    } else {
      message.curency = "";
    }
    if (object.decremented !== undefined && object.decremented !== null) {
      message.decremented = object.decremented;
    } else {
      message.decremented = 0;
    }
    if (object.phase !== undefined && object.phase !== null) {
      message.phase = object.phase;
    } else {
      message.phase = 0;
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

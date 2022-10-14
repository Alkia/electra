/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "electra.meter";

export interface Producerbills {
  billCycleID: number;
  producerdeviceID: string;
  billDate: number;
  billTotalWh: number;
  billTotalPrice: number;
  billCurrency: string;
  billValid: boolean;
  paid: boolean;
  creator: string;
}

const baseProducerbills: object = {
  billCycleID: 0,
  producerdeviceID: "",
  billDate: 0,
  billTotalWh: 0,
  billTotalPrice: 0,
  billCurrency: "",
  billValid: false,
  paid: false,
  creator: "",
};

export const Producerbills = {
  encode(message: Producerbills, writer: Writer = Writer.create()): Writer {
    if (message.billCycleID !== 0) {
      writer.uint32(8).uint64(message.billCycleID);
    }
    if (message.producerdeviceID !== "") {
      writer.uint32(18).string(message.producerdeviceID);
    }
    if (message.billDate !== 0) {
      writer.uint32(24).uint64(message.billDate);
    }
    if (message.billTotalWh !== 0) {
      writer.uint32(32).uint64(message.billTotalWh);
    }
    if (message.billTotalPrice !== 0) {
      writer.uint32(40).uint64(message.billTotalPrice);
    }
    if (message.billCurrency !== "") {
      writer.uint32(50).string(message.billCurrency);
    }
    if (message.billValid === true) {
      writer.uint32(56).bool(message.billValid);
    }
    if (message.paid === true) {
      writer.uint32(64).bool(message.paid);
    }
    if (message.creator !== "") {
      writer.uint32(74).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Producerbills {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProducerbills } as Producerbills;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.billCycleID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.producerdeviceID = reader.string();
          break;
        case 3:
          message.billDate = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.billTotalWh = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.billTotalPrice = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.billCurrency = reader.string();
          break;
        case 7:
          message.billValid = reader.bool();
          break;
        case 8:
          message.paid = reader.bool();
          break;
        case 9:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Producerbills {
    const message = { ...baseProducerbills } as Producerbills;
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
    if (object.billDate !== undefined && object.billDate !== null) {
      message.billDate = Number(object.billDate);
    } else {
      message.billDate = 0;
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
    if (object.billCurrency !== undefined && object.billCurrency !== null) {
      message.billCurrency = String(object.billCurrency);
    } else {
      message.billCurrency = "";
    }
    if (object.billValid !== undefined && object.billValid !== null) {
      message.billValid = Boolean(object.billValid);
    } else {
      message.billValid = false;
    }
    if (object.paid !== undefined && object.paid !== null) {
      message.paid = Boolean(object.paid);
    } else {
      message.paid = false;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Producerbills): unknown {
    const obj: any = {};
    message.billCycleID !== undefined &&
      (obj.billCycleID = message.billCycleID);
    message.producerdeviceID !== undefined &&
      (obj.producerdeviceID = message.producerdeviceID);
    message.billDate !== undefined && (obj.billDate = message.billDate);
    message.billTotalWh !== undefined &&
      (obj.billTotalWh = message.billTotalWh);
    message.billTotalPrice !== undefined &&
      (obj.billTotalPrice = message.billTotalPrice);
    message.billCurrency !== undefined &&
      (obj.billCurrency = message.billCurrency);
    message.billValid !== undefined && (obj.billValid = message.billValid);
    message.paid !== undefined && (obj.paid = message.paid);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Producerbills>): Producerbills {
    const message = { ...baseProducerbills } as Producerbills;
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
    if (object.billDate !== undefined && object.billDate !== null) {
      message.billDate = object.billDate;
    } else {
      message.billDate = 0;
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
    if (object.billCurrency !== undefined && object.billCurrency !== null) {
      message.billCurrency = object.billCurrency;
    } else {
      message.billCurrency = "";
    }
    if (object.billValid !== undefined && object.billValid !== null) {
      message.billValid = object.billValid;
    } else {
      message.billValid = false;
    }
    if (object.paid !== undefined && object.paid !== null) {
      message.paid = object.paid;
    } else {
      message.paid = false;
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

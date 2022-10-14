/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "electra.meter";

export interface PowerPurchaseContract {
  contractID: string;
  contractDeviceID: string;
  contractName: string;
  contractActive: boolean;
  contractPhase: number;
  contractForAll: boolean;
  contractForAllPrice: number;
  contractForAllCurency: string;
  contractForAllActivePeriod: string;
  contractPreferred: boolean;
  contractPreferredPrice: number;
  contractPreferredActivePeriod: string;
  contractPreferredCurency: string;
  contractStartDate: number;
  contractEndDate: number;
  phase1RemainingWh: number;
  phase2RemainingWh: number;
  phase3RemainingWh: number;
  creator: string;
}

const basePowerPurchaseContract: object = {
  contractID: "",
  contractDeviceID: "",
  contractName: "",
  contractActive: false,
  contractPhase: 0,
  contractForAll: false,
  contractForAllPrice: 0,
  contractForAllCurency: "",
  contractForAllActivePeriod: "",
  contractPreferred: false,
  contractPreferredPrice: 0,
  contractPreferredActivePeriod: "",
  contractPreferredCurency: "",
  contractStartDate: 0,
  contractEndDate: 0,
  phase1RemainingWh: 0,
  phase2RemainingWh: 0,
  phase3RemainingWh: 0,
  creator: "",
};

export const PowerPurchaseContract = {
  encode(
    message: PowerPurchaseContract,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.contractID !== "") {
      writer.uint32(10).string(message.contractID);
    }
    if (message.contractDeviceID !== "") {
      writer.uint32(18).string(message.contractDeviceID);
    }
    if (message.contractName !== "") {
      writer.uint32(26).string(message.contractName);
    }
    if (message.contractActive === true) {
      writer.uint32(32).bool(message.contractActive);
    }
    if (message.contractPhase !== 0) {
      writer.uint32(40).uint64(message.contractPhase);
    }
    if (message.contractForAll === true) {
      writer.uint32(48).bool(message.contractForAll);
    }
    if (message.contractForAllPrice !== 0) {
      writer.uint32(56).uint64(message.contractForAllPrice);
    }
    if (message.contractForAllCurency !== "") {
      writer.uint32(66).string(message.contractForAllCurency);
    }
    if (message.contractForAllActivePeriod !== "") {
      writer.uint32(74).string(message.contractForAllActivePeriod);
    }
    if (message.contractPreferred === true) {
      writer.uint32(80).bool(message.contractPreferred);
    }
    if (message.contractPreferredPrice !== 0) {
      writer.uint32(88).uint64(message.contractPreferredPrice);
    }
    if (message.contractPreferredActivePeriod !== "") {
      writer.uint32(98).string(message.contractPreferredActivePeriod);
    }
    if (message.contractPreferredCurency !== "") {
      writer.uint32(106).string(message.contractPreferredCurency);
    }
    if (message.contractStartDate !== 0) {
      writer.uint32(112).uint64(message.contractStartDate);
    }
    if (message.contractEndDate !== 0) {
      writer.uint32(120).uint64(message.contractEndDate);
    }
    if (message.phase1RemainingWh !== 0) {
      writer.uint32(128).uint64(message.phase1RemainingWh);
    }
    if (message.phase2RemainingWh !== 0) {
      writer.uint32(136).uint64(message.phase2RemainingWh);
    }
    if (message.phase3RemainingWh !== 0) {
      writer.uint32(144).uint64(message.phase3RemainingWh);
    }
    if (message.creator !== "") {
      writer.uint32(154).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PowerPurchaseContract {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePowerPurchaseContract } as PowerPurchaseContract;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractID = reader.string();
          break;
        case 2:
          message.contractDeviceID = reader.string();
          break;
        case 3:
          message.contractName = reader.string();
          break;
        case 4:
          message.contractActive = reader.bool();
          break;
        case 5:
          message.contractPhase = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.contractForAll = reader.bool();
          break;
        case 7:
          message.contractForAllPrice = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.contractForAllCurency = reader.string();
          break;
        case 9:
          message.contractForAllActivePeriod = reader.string();
          break;
        case 10:
          message.contractPreferred = reader.bool();
          break;
        case 11:
          message.contractPreferredPrice = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 12:
          message.contractPreferredActivePeriod = reader.string();
          break;
        case 13:
          message.contractPreferredCurency = reader.string();
          break;
        case 14:
          message.contractStartDate = longToNumber(reader.uint64() as Long);
          break;
        case 15:
          message.contractEndDate = longToNumber(reader.uint64() as Long);
          break;
        case 16:
          message.phase1RemainingWh = longToNumber(reader.uint64() as Long);
          break;
        case 17:
          message.phase2RemainingWh = longToNumber(reader.uint64() as Long);
          break;
        case 18:
          message.phase3RemainingWh = longToNumber(reader.uint64() as Long);
          break;
        case 19:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PowerPurchaseContract {
    const message = { ...basePowerPurchaseContract } as PowerPurchaseContract;
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
    if (object.contractName !== undefined && object.contractName !== null) {
      message.contractName = String(object.contractName);
    } else {
      message.contractName = "";
    }
    if (object.contractActive !== undefined && object.contractActive !== null) {
      message.contractActive = Boolean(object.contractActive);
    } else {
      message.contractActive = false;
    }
    if (object.contractPhase !== undefined && object.contractPhase !== null) {
      message.contractPhase = Number(object.contractPhase);
    } else {
      message.contractPhase = 0;
    }
    if (object.contractForAll !== undefined && object.contractForAll !== null) {
      message.contractForAll = Boolean(object.contractForAll);
    } else {
      message.contractForAll = false;
    }
    if (
      object.contractForAllPrice !== undefined &&
      object.contractForAllPrice !== null
    ) {
      message.contractForAllPrice = Number(object.contractForAllPrice);
    } else {
      message.contractForAllPrice = 0;
    }
    if (
      object.contractForAllCurency !== undefined &&
      object.contractForAllCurency !== null
    ) {
      message.contractForAllCurency = String(object.contractForAllCurency);
    } else {
      message.contractForAllCurency = "";
    }
    if (
      object.contractForAllActivePeriod !== undefined &&
      object.contractForAllActivePeriod !== null
    ) {
      message.contractForAllActivePeriod = String(
        object.contractForAllActivePeriod
      );
    } else {
      message.contractForAllActivePeriod = "";
    }
    if (
      object.contractPreferred !== undefined &&
      object.contractPreferred !== null
    ) {
      message.contractPreferred = Boolean(object.contractPreferred);
    } else {
      message.contractPreferred = false;
    }
    if (
      object.contractPreferredPrice !== undefined &&
      object.contractPreferredPrice !== null
    ) {
      message.contractPreferredPrice = Number(object.contractPreferredPrice);
    } else {
      message.contractPreferredPrice = 0;
    }
    if (
      object.contractPreferredActivePeriod !== undefined &&
      object.contractPreferredActivePeriod !== null
    ) {
      message.contractPreferredActivePeriod = String(
        object.contractPreferredActivePeriod
      );
    } else {
      message.contractPreferredActivePeriod = "";
    }
    if (
      object.contractPreferredCurency !== undefined &&
      object.contractPreferredCurency !== null
    ) {
      message.contractPreferredCurency = String(
        object.contractPreferredCurency
      );
    } else {
      message.contractPreferredCurency = "";
    }
    if (
      object.contractStartDate !== undefined &&
      object.contractStartDate !== null
    ) {
      message.contractStartDate = Number(object.contractStartDate);
    } else {
      message.contractStartDate = 0;
    }
    if (
      object.contractEndDate !== undefined &&
      object.contractEndDate !== null
    ) {
      message.contractEndDate = Number(object.contractEndDate);
    } else {
      message.contractEndDate = 0;
    }
    if (
      object.phase1RemainingWh !== undefined &&
      object.phase1RemainingWh !== null
    ) {
      message.phase1RemainingWh = Number(object.phase1RemainingWh);
    } else {
      message.phase1RemainingWh = 0;
    }
    if (
      object.phase2RemainingWh !== undefined &&
      object.phase2RemainingWh !== null
    ) {
      message.phase2RemainingWh = Number(object.phase2RemainingWh);
    } else {
      message.phase2RemainingWh = 0;
    }
    if (
      object.phase3RemainingWh !== undefined &&
      object.phase3RemainingWh !== null
    ) {
      message.phase3RemainingWh = Number(object.phase3RemainingWh);
    } else {
      message.phase3RemainingWh = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: PowerPurchaseContract): unknown {
    const obj: any = {};
    message.contractID !== undefined && (obj.contractID = message.contractID);
    message.contractDeviceID !== undefined &&
      (obj.contractDeviceID = message.contractDeviceID);
    message.contractName !== undefined &&
      (obj.contractName = message.contractName);
    message.contractActive !== undefined &&
      (obj.contractActive = message.contractActive);
    message.contractPhase !== undefined &&
      (obj.contractPhase = message.contractPhase);
    message.contractForAll !== undefined &&
      (obj.contractForAll = message.contractForAll);
    message.contractForAllPrice !== undefined &&
      (obj.contractForAllPrice = message.contractForAllPrice);
    message.contractForAllCurency !== undefined &&
      (obj.contractForAllCurency = message.contractForAllCurency);
    message.contractForAllActivePeriod !== undefined &&
      (obj.contractForAllActivePeriod = message.contractForAllActivePeriod);
    message.contractPreferred !== undefined &&
      (obj.contractPreferred = message.contractPreferred);
    message.contractPreferredPrice !== undefined &&
      (obj.contractPreferredPrice = message.contractPreferredPrice);
    message.contractPreferredActivePeriod !== undefined &&
      (obj.contractPreferredActivePeriod =
        message.contractPreferredActivePeriod);
    message.contractPreferredCurency !== undefined &&
      (obj.contractPreferredCurency = message.contractPreferredCurency);
    message.contractStartDate !== undefined &&
      (obj.contractStartDate = message.contractStartDate);
    message.contractEndDate !== undefined &&
      (obj.contractEndDate = message.contractEndDate);
    message.phase1RemainingWh !== undefined &&
      (obj.phase1RemainingWh = message.phase1RemainingWh);
    message.phase2RemainingWh !== undefined &&
      (obj.phase2RemainingWh = message.phase2RemainingWh);
    message.phase3RemainingWh !== undefined &&
      (obj.phase3RemainingWh = message.phase3RemainingWh);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<PowerPurchaseContract>
  ): PowerPurchaseContract {
    const message = { ...basePowerPurchaseContract } as PowerPurchaseContract;
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
    if (object.contractName !== undefined && object.contractName !== null) {
      message.contractName = object.contractName;
    } else {
      message.contractName = "";
    }
    if (object.contractActive !== undefined && object.contractActive !== null) {
      message.contractActive = object.contractActive;
    } else {
      message.contractActive = false;
    }
    if (object.contractPhase !== undefined && object.contractPhase !== null) {
      message.contractPhase = object.contractPhase;
    } else {
      message.contractPhase = 0;
    }
    if (object.contractForAll !== undefined && object.contractForAll !== null) {
      message.contractForAll = object.contractForAll;
    } else {
      message.contractForAll = false;
    }
    if (
      object.contractForAllPrice !== undefined &&
      object.contractForAllPrice !== null
    ) {
      message.contractForAllPrice = object.contractForAllPrice;
    } else {
      message.contractForAllPrice = 0;
    }
    if (
      object.contractForAllCurency !== undefined &&
      object.contractForAllCurency !== null
    ) {
      message.contractForAllCurency = object.contractForAllCurency;
    } else {
      message.contractForAllCurency = "";
    }
    if (
      object.contractForAllActivePeriod !== undefined &&
      object.contractForAllActivePeriod !== null
    ) {
      message.contractForAllActivePeriod = object.contractForAllActivePeriod;
    } else {
      message.contractForAllActivePeriod = "";
    }
    if (
      object.contractPreferred !== undefined &&
      object.contractPreferred !== null
    ) {
      message.contractPreferred = object.contractPreferred;
    } else {
      message.contractPreferred = false;
    }
    if (
      object.contractPreferredPrice !== undefined &&
      object.contractPreferredPrice !== null
    ) {
      message.contractPreferredPrice = object.contractPreferredPrice;
    } else {
      message.contractPreferredPrice = 0;
    }
    if (
      object.contractPreferredActivePeriod !== undefined &&
      object.contractPreferredActivePeriod !== null
    ) {
      message.contractPreferredActivePeriod =
        object.contractPreferredActivePeriod;
    } else {
      message.contractPreferredActivePeriod = "";
    }
    if (
      object.contractPreferredCurency !== undefined &&
      object.contractPreferredCurency !== null
    ) {
      message.contractPreferredCurency = object.contractPreferredCurency;
    } else {
      message.contractPreferredCurency = "";
    }
    if (
      object.contractStartDate !== undefined &&
      object.contractStartDate !== null
    ) {
      message.contractStartDate = object.contractStartDate;
    } else {
      message.contractStartDate = 0;
    }
    if (
      object.contractEndDate !== undefined &&
      object.contractEndDate !== null
    ) {
      message.contractEndDate = object.contractEndDate;
    } else {
      message.contractEndDate = 0;
    }
    if (
      object.phase1RemainingWh !== undefined &&
      object.phase1RemainingWh !== null
    ) {
      message.phase1RemainingWh = object.phase1RemainingWh;
    } else {
      message.phase1RemainingWh = 0;
    }
    if (
      object.phase2RemainingWh !== undefined &&
      object.phase2RemainingWh !== null
    ) {
      message.phase2RemainingWh = object.phase2RemainingWh;
    } else {
      message.phase2RemainingWh = 0;
    }
    if (
      object.phase3RemainingWh !== undefined &&
      object.phase3RemainingWh !== null
    ) {
      message.phase3RemainingWh = object.phase3RemainingWh;
    } else {
      message.phase3RemainingWh = 0;
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

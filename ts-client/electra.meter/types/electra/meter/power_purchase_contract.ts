/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

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

function createBasePowerPurchaseContract(): PowerPurchaseContract {
  return {
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
}

export const PowerPurchaseContract = {
  encode(message: PowerPurchaseContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PowerPurchaseContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePowerPurchaseContract();
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
          message.contractPreferredPrice = longToNumber(reader.uint64() as Long);
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
    return {
      contractID: isSet(object.contractID) ? String(object.contractID) : "",
      contractDeviceID: isSet(object.contractDeviceID) ? String(object.contractDeviceID) : "",
      contractName: isSet(object.contractName) ? String(object.contractName) : "",
      contractActive: isSet(object.contractActive) ? Boolean(object.contractActive) : false,
      contractPhase: isSet(object.contractPhase) ? Number(object.contractPhase) : 0,
      contractForAll: isSet(object.contractForAll) ? Boolean(object.contractForAll) : false,
      contractForAllPrice: isSet(object.contractForAllPrice) ? Number(object.contractForAllPrice) : 0,
      contractForAllCurency: isSet(object.contractForAllCurency) ? String(object.contractForAllCurency) : "",
      contractForAllActivePeriod: isSet(object.contractForAllActivePeriod)
        ? String(object.contractForAllActivePeriod)
        : "",
      contractPreferred: isSet(object.contractPreferred) ? Boolean(object.contractPreferred) : false,
      contractPreferredPrice: isSet(object.contractPreferredPrice) ? Number(object.contractPreferredPrice) : 0,
      contractPreferredActivePeriod: isSet(object.contractPreferredActivePeriod)
        ? String(object.contractPreferredActivePeriod)
        : "",
      contractPreferredCurency: isSet(object.contractPreferredCurency) ? String(object.contractPreferredCurency) : "",
      contractStartDate: isSet(object.contractStartDate) ? Number(object.contractStartDate) : 0,
      contractEndDate: isSet(object.contractEndDate) ? Number(object.contractEndDate) : 0,
      phase1RemainingWh: isSet(object.phase1RemainingWh) ? Number(object.phase1RemainingWh) : 0,
      phase2RemainingWh: isSet(object.phase2RemainingWh) ? Number(object.phase2RemainingWh) : 0,
      phase3RemainingWh: isSet(object.phase3RemainingWh) ? Number(object.phase3RemainingWh) : 0,
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: PowerPurchaseContract): unknown {
    const obj: any = {};
    message.contractID !== undefined && (obj.contractID = message.contractID);
    message.contractDeviceID !== undefined && (obj.contractDeviceID = message.contractDeviceID);
    message.contractName !== undefined && (obj.contractName = message.contractName);
    message.contractActive !== undefined && (obj.contractActive = message.contractActive);
    message.contractPhase !== undefined && (obj.contractPhase = Math.round(message.contractPhase));
    message.contractForAll !== undefined && (obj.contractForAll = message.contractForAll);
    message.contractForAllPrice !== undefined && (obj.contractForAllPrice = Math.round(message.contractForAllPrice));
    message.contractForAllCurency !== undefined && (obj.contractForAllCurency = message.contractForAllCurency);
    message.contractForAllActivePeriod !== undefined
      && (obj.contractForAllActivePeriod = message.contractForAllActivePeriod);
    message.contractPreferred !== undefined && (obj.contractPreferred = message.contractPreferred);
    message.contractPreferredPrice !== undefined
      && (obj.contractPreferredPrice = Math.round(message.contractPreferredPrice));
    message.contractPreferredActivePeriod !== undefined
      && (obj.contractPreferredActivePeriod = message.contractPreferredActivePeriod);
    message.contractPreferredCurency !== undefined && (obj.contractPreferredCurency = message.contractPreferredCurency);
    message.contractStartDate !== undefined && (obj.contractStartDate = Math.round(message.contractStartDate));
    message.contractEndDate !== undefined && (obj.contractEndDate = Math.round(message.contractEndDate));
    message.phase1RemainingWh !== undefined && (obj.phase1RemainingWh = Math.round(message.phase1RemainingWh));
    message.phase2RemainingWh !== undefined && (obj.phase2RemainingWh = Math.round(message.phase2RemainingWh));
    message.phase3RemainingWh !== undefined && (obj.phase3RemainingWh = Math.round(message.phase3RemainingWh));
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PowerPurchaseContract>, I>>(object: I): PowerPurchaseContract {
    const message = createBasePowerPurchaseContract();
    message.contractID = object.contractID ?? "";
    message.contractDeviceID = object.contractDeviceID ?? "";
    message.contractName = object.contractName ?? "";
    message.contractActive = object.contractActive ?? false;
    message.contractPhase = object.contractPhase ?? 0;
    message.contractForAll = object.contractForAll ?? false;
    message.contractForAllPrice = object.contractForAllPrice ?? 0;
    message.contractForAllCurency = object.contractForAllCurency ?? "";
    message.contractForAllActivePeriod = object.contractForAllActivePeriod ?? "";
    message.contractPreferred = object.contractPreferred ?? false;
    message.contractPreferredPrice = object.contractPreferredPrice ?? 0;
    message.contractPreferredActivePeriod = object.contractPreferredActivePeriod ?? "";
    message.contractPreferredCurency = object.contractPreferredCurency ?? "";
    message.contractStartDate = object.contractStartDate ?? 0;
    message.contractEndDate = object.contractEndDate ?? 0;
    message.phase1RemainingWh = object.phase1RemainingWh ?? 0;
    message.phase2RemainingWh = object.phase2RemainingWh ?? 0;
    message.phase3RemainingWh = object.phase3RemainingWh ?? 0;
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

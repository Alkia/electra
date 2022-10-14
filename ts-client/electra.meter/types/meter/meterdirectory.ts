/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "electra.meter";

export interface Meterdirectory {
  deviceID: string;
  barcodeserial: string;
  model: string;
  installationdate: number;
  address: string;
  ownerlastname: string;
  ownerfirstname: string;
  ownerphone: string;
  gpsjson: string;
  active: boolean;
  triphased: boolean;
  phasenbmono: number;
}

const baseMeterdirectory: object = {
  deviceID: "",
  barcodeserial: "",
  model: "",
  installationdate: 0,
  address: "",
  ownerlastname: "",
  ownerfirstname: "",
  ownerphone: "",
  gpsjson: "",
  active: false,
  triphased: false,
  phasenbmono: 0,
};

export const Meterdirectory = {
  encode(message: Meterdirectory, writer: Writer = Writer.create()): Writer {
    if (message.deviceID !== "") {
      writer.uint32(10).string(message.deviceID);
    }
    if (message.barcodeserial !== "") {
      writer.uint32(18).string(message.barcodeserial);
    }
    if (message.model !== "") {
      writer.uint32(26).string(message.model);
    }
    if (message.installationdate !== 0) {
      writer.uint32(32).uint64(message.installationdate);
    }
    if (message.address !== "") {
      writer.uint32(42).string(message.address);
    }
    if (message.ownerlastname !== "") {
      writer.uint32(50).string(message.ownerlastname);
    }
    if (message.ownerfirstname !== "") {
      writer.uint32(58).string(message.ownerfirstname);
    }
    if (message.ownerphone !== "") {
      writer.uint32(66).string(message.ownerphone);
    }
    if (message.gpsjson !== "") {
      writer.uint32(74).string(message.gpsjson);
    }
    if (message.active === true) {
      writer.uint32(80).bool(message.active);
    }
    if (message.triphased === true) {
      writer.uint32(88).bool(message.triphased);
    }
    if (message.phasenbmono !== 0) {
      writer.uint32(96).uint64(message.phasenbmono);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Meterdirectory {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMeterdirectory } as Meterdirectory;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceID = reader.string();
          break;
        case 2:
          message.barcodeserial = reader.string();
          break;
        case 3:
          message.model = reader.string();
          break;
        case 4:
          message.installationdate = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.address = reader.string();
          break;
        case 6:
          message.ownerlastname = reader.string();
          break;
        case 7:
          message.ownerfirstname = reader.string();
          break;
        case 8:
          message.ownerphone = reader.string();
          break;
        case 9:
          message.gpsjson = reader.string();
          break;
        case 10:
          message.active = reader.bool();
          break;
        case 11:
          message.triphased = reader.bool();
          break;
        case 12:
          message.phasenbmono = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Meterdirectory {
    const message = { ...baseMeterdirectory } as Meterdirectory;
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
    if (object.model !== undefined && object.model !== null) {
      message.model = String(object.model);
    } else {
      message.model = "";
    }
    if (
      object.installationdate !== undefined &&
      object.installationdate !== null
    ) {
      message.installationdate = Number(object.installationdate);
    } else {
      message.installationdate = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.ownerlastname !== undefined && object.ownerlastname !== null) {
      message.ownerlastname = String(object.ownerlastname);
    } else {
      message.ownerlastname = "";
    }
    if (object.ownerfirstname !== undefined && object.ownerfirstname !== null) {
      message.ownerfirstname = String(object.ownerfirstname);
    } else {
      message.ownerfirstname = "";
    }
    if (object.ownerphone !== undefined && object.ownerphone !== null) {
      message.ownerphone = String(object.ownerphone);
    } else {
      message.ownerphone = "";
    }
    if (object.gpsjson !== undefined && object.gpsjson !== null) {
      message.gpsjson = String(object.gpsjson);
    } else {
      message.gpsjson = "";
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = Boolean(object.active);
    } else {
      message.active = false;
    }
    if (object.triphased !== undefined && object.triphased !== null) {
      message.triphased = Boolean(object.triphased);
    } else {
      message.triphased = false;
    }
    if (object.phasenbmono !== undefined && object.phasenbmono !== null) {
      message.phasenbmono = Number(object.phasenbmono);
    } else {
      message.phasenbmono = 0;
    }
    return message;
  },

  toJSON(message: Meterdirectory): unknown {
    const obj: any = {};
    message.deviceID !== undefined && (obj.deviceID = message.deviceID);
    message.barcodeserial !== undefined &&
      (obj.barcodeserial = message.barcodeserial);
    message.model !== undefined && (obj.model = message.model);
    message.installationdate !== undefined &&
      (obj.installationdate = message.installationdate);
    message.address !== undefined && (obj.address = message.address);
    message.ownerlastname !== undefined &&
      (obj.ownerlastname = message.ownerlastname);
    message.ownerfirstname !== undefined &&
      (obj.ownerfirstname = message.ownerfirstname);
    message.ownerphone !== undefined && (obj.ownerphone = message.ownerphone);
    message.gpsjson !== undefined && (obj.gpsjson = message.gpsjson);
    message.active !== undefined && (obj.active = message.active);
    message.triphased !== undefined && (obj.triphased = message.triphased);
    message.phasenbmono !== undefined &&
      (obj.phasenbmono = message.phasenbmono);
    return obj;
  },

  fromPartial(object: DeepPartial<Meterdirectory>): Meterdirectory {
    const message = { ...baseMeterdirectory } as Meterdirectory;
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
    if (object.model !== undefined && object.model !== null) {
      message.model = object.model;
    } else {
      message.model = "";
    }
    if (
      object.installationdate !== undefined &&
      object.installationdate !== null
    ) {
      message.installationdate = object.installationdate;
    } else {
      message.installationdate = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.ownerlastname !== undefined && object.ownerlastname !== null) {
      message.ownerlastname = object.ownerlastname;
    } else {
      message.ownerlastname = "";
    }
    if (object.ownerfirstname !== undefined && object.ownerfirstname !== null) {
      message.ownerfirstname = object.ownerfirstname;
    } else {
      message.ownerfirstname = "";
    }
    if (object.ownerphone !== undefined && object.ownerphone !== null) {
      message.ownerphone = object.ownerphone;
    } else {
      message.ownerphone = "";
    }
    if (object.gpsjson !== undefined && object.gpsjson !== null) {
      message.gpsjson = object.gpsjson;
    } else {
      message.gpsjson = "";
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    } else {
      message.active = false;
    }
    if (object.triphased !== undefined && object.triphased !== null) {
      message.triphased = object.triphased;
    } else {
      message.triphased = false;
    }
    if (object.phasenbmono !== undefined && object.phasenbmono !== null) {
      message.phasenbmono = object.phasenbmono;
    } else {
      message.phasenbmono = 0;
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

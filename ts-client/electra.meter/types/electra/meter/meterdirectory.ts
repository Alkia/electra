/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

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

function createBaseMeterdirectory(): Meterdirectory {
  return {
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
}

export const Meterdirectory = {
  encode(message: Meterdirectory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Meterdirectory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMeterdirectory();
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
    return {
      deviceID: isSet(object.deviceID) ? String(object.deviceID) : "",
      barcodeserial: isSet(object.barcodeserial) ? String(object.barcodeserial) : "",
      model: isSet(object.model) ? String(object.model) : "",
      installationdate: isSet(object.installationdate) ? Number(object.installationdate) : 0,
      address: isSet(object.address) ? String(object.address) : "",
      ownerlastname: isSet(object.ownerlastname) ? String(object.ownerlastname) : "",
      ownerfirstname: isSet(object.ownerfirstname) ? String(object.ownerfirstname) : "",
      ownerphone: isSet(object.ownerphone) ? String(object.ownerphone) : "",
      gpsjson: isSet(object.gpsjson) ? String(object.gpsjson) : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
      triphased: isSet(object.triphased) ? Boolean(object.triphased) : false,
      phasenbmono: isSet(object.phasenbmono) ? Number(object.phasenbmono) : 0,
    };
  },

  toJSON(message: Meterdirectory): unknown {
    const obj: any = {};
    message.deviceID !== undefined && (obj.deviceID = message.deviceID);
    message.barcodeserial !== undefined && (obj.barcodeserial = message.barcodeserial);
    message.model !== undefined && (obj.model = message.model);
    message.installationdate !== undefined && (obj.installationdate = Math.round(message.installationdate));
    message.address !== undefined && (obj.address = message.address);
    message.ownerlastname !== undefined && (obj.ownerlastname = message.ownerlastname);
    message.ownerfirstname !== undefined && (obj.ownerfirstname = message.ownerfirstname);
    message.ownerphone !== undefined && (obj.ownerphone = message.ownerphone);
    message.gpsjson !== undefined && (obj.gpsjson = message.gpsjson);
    message.active !== undefined && (obj.active = message.active);
    message.triphased !== undefined && (obj.triphased = message.triphased);
    message.phasenbmono !== undefined && (obj.phasenbmono = Math.round(message.phasenbmono));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Meterdirectory>, I>>(object: I): Meterdirectory {
    const message = createBaseMeterdirectory();
    message.deviceID = object.deviceID ?? "";
    message.barcodeserial = object.barcodeserial ?? "";
    message.model = object.model ?? "";
    message.installationdate = object.installationdate ?? 0;
    message.address = object.address ?? "";
    message.ownerlastname = object.ownerlastname ?? "";
    message.ownerfirstname = object.ownerfirstname ?? "";
    message.ownerphone = object.ownerphone ?? "";
    message.gpsjson = object.gpsjson ?? "";
    message.active = object.active ?? false;
    message.triphased = object.triphased ?? false;
    message.phasenbmono = object.phasenbmono ?? 0;
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

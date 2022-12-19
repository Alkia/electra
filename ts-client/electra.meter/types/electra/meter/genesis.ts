/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Billingcycles } from "./billingcycles";
import { Customerbillingline } from "./customerbillingline";
import { Customerbills } from "./customerbills";
import { Meterdirectory } from "./meterdirectory";
import { Meterreadings } from "./meterreadings";
import { Params } from "./params";
import { PowerPurchaseContract } from "./power_purchase_contract";
import { PpaMap } from "./ppa_map";
import { Producerbillingline } from "./producerbillingline";
import { Producerbills } from "./producerbills";

export const protobufPackage = "electra.meter";

/** GenesisState defines the meter module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  meterreadingsList: Meterreadings[];
  meterdirectoryList: Meterdirectory[];
  powerPurchaseContractList: PowerPurchaseContract[];
  ppaMapList: PpaMap[];
  billingcyclesList: Billingcycles[];
  customerbillinglineList: Customerbillingline[];
  customerbillsList: Customerbills[];
  producerbillinglineList: Producerbillingline[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  producerbillsList: Producerbills[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    meterreadingsList: [],
    meterdirectoryList: [],
    powerPurchaseContractList: [],
    ppaMapList: [],
    billingcyclesList: [],
    customerbillinglineList: [],
    customerbillsList: [],
    producerbillinglineList: [],
    producerbillsList: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.meterreadingsList) {
      Meterreadings.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.meterdirectoryList) {
      Meterdirectory.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.powerPurchaseContractList) {
      PowerPurchaseContract.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.ppaMapList) {
      PpaMap.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.billingcyclesList) {
      Billingcycles.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.customerbillinglineList) {
      Customerbillingline.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.customerbillsList) {
      Customerbills.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.producerbillinglineList) {
      Producerbillingline.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.producerbillsList) {
      Producerbills.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.meterreadingsList.push(Meterreadings.decode(reader, reader.uint32()));
          break;
        case 3:
          message.meterdirectoryList.push(Meterdirectory.decode(reader, reader.uint32()));
          break;
        case 4:
          message.powerPurchaseContractList.push(PowerPurchaseContract.decode(reader, reader.uint32()));
          break;
        case 5:
          message.ppaMapList.push(PpaMap.decode(reader, reader.uint32()));
          break;
        case 6:
          message.billingcyclesList.push(Billingcycles.decode(reader, reader.uint32()));
          break;
        case 7:
          message.customerbillinglineList.push(Customerbillingline.decode(reader, reader.uint32()));
          break;
        case 8:
          message.customerbillsList.push(Customerbills.decode(reader, reader.uint32()));
          break;
        case 9:
          message.producerbillinglineList.push(Producerbillingline.decode(reader, reader.uint32()));
          break;
        case 10:
          message.producerbillsList.push(Producerbills.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      meterreadingsList: Array.isArray(object?.meterreadingsList)
        ? object.meterreadingsList.map((e: any) => Meterreadings.fromJSON(e))
        : [],
      meterdirectoryList: Array.isArray(object?.meterdirectoryList)
        ? object.meterdirectoryList.map((e: any) => Meterdirectory.fromJSON(e))
        : [],
      powerPurchaseContractList: Array.isArray(object?.powerPurchaseContractList)
        ? object.powerPurchaseContractList.map((e: any) => PowerPurchaseContract.fromJSON(e))
        : [],
      ppaMapList: Array.isArray(object?.ppaMapList) ? object.ppaMapList.map((e: any) => PpaMap.fromJSON(e)) : [],
      billingcyclesList: Array.isArray(object?.billingcyclesList)
        ? object.billingcyclesList.map((e: any) => Billingcycles.fromJSON(e))
        : [],
      customerbillinglineList: Array.isArray(object?.customerbillinglineList)
        ? object.customerbillinglineList.map((e: any) => Customerbillingline.fromJSON(e))
        : [],
      customerbillsList: Array.isArray(object?.customerbillsList)
        ? object.customerbillsList.map((e: any) => Customerbills.fromJSON(e))
        : [],
      producerbillinglineList: Array.isArray(object?.producerbillinglineList)
        ? object.producerbillinglineList.map((e: any) => Producerbillingline.fromJSON(e))
        : [],
      producerbillsList: Array.isArray(object?.producerbillsList)
        ? object.producerbillsList.map((e: any) => Producerbills.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.meterreadingsList) {
      obj.meterreadingsList = message.meterreadingsList.map((e) => e ? Meterreadings.toJSON(e) : undefined);
    } else {
      obj.meterreadingsList = [];
    }
    if (message.meterdirectoryList) {
      obj.meterdirectoryList = message.meterdirectoryList.map((e) => e ? Meterdirectory.toJSON(e) : undefined);
    } else {
      obj.meterdirectoryList = [];
    }
    if (message.powerPurchaseContractList) {
      obj.powerPurchaseContractList = message.powerPurchaseContractList.map((e) =>
        e ? PowerPurchaseContract.toJSON(e) : undefined
      );
    } else {
      obj.powerPurchaseContractList = [];
    }
    if (message.ppaMapList) {
      obj.ppaMapList = message.ppaMapList.map((e) => e ? PpaMap.toJSON(e) : undefined);
    } else {
      obj.ppaMapList = [];
    }
    if (message.billingcyclesList) {
      obj.billingcyclesList = message.billingcyclesList.map((e) => e ? Billingcycles.toJSON(e) : undefined);
    } else {
      obj.billingcyclesList = [];
    }
    if (message.customerbillinglineList) {
      obj.customerbillinglineList = message.customerbillinglineList.map((e) =>
        e ? Customerbillingline.toJSON(e) : undefined
      );
    } else {
      obj.customerbillinglineList = [];
    }
    if (message.customerbillsList) {
      obj.customerbillsList = message.customerbillsList.map((e) => e ? Customerbills.toJSON(e) : undefined);
    } else {
      obj.customerbillsList = [];
    }
    if (message.producerbillinglineList) {
      obj.producerbillinglineList = message.producerbillinglineList.map((e) =>
        e ? Producerbillingline.toJSON(e) : undefined
      );
    } else {
      obj.producerbillinglineList = [];
    }
    if (message.producerbillsList) {
      obj.producerbillsList = message.producerbillsList.map((e) => e ? Producerbills.toJSON(e) : undefined);
    } else {
      obj.producerbillsList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.meterreadingsList = object.meterreadingsList?.map((e) => Meterreadings.fromPartial(e)) || [];
    message.meterdirectoryList = object.meterdirectoryList?.map((e) => Meterdirectory.fromPartial(e)) || [];
    message.powerPurchaseContractList =
      object.powerPurchaseContractList?.map((e) => PowerPurchaseContract.fromPartial(e)) || [];
    message.ppaMapList = object.ppaMapList?.map((e) => PpaMap.fromPartial(e)) || [];
    message.billingcyclesList = object.billingcyclesList?.map((e) => Billingcycles.fromPartial(e)) || [];
    message.customerbillinglineList = object.customerbillinglineList?.map((e) => Customerbillingline.fromPartial(e))
      || [];
    message.customerbillsList = object.customerbillsList?.map((e) => Customerbills.fromPartial(e)) || [];
    message.producerbillinglineList = object.producerbillinglineList?.map((e) => Producerbillingline.fromPartial(e))
      || [];
    message.producerbillsList = object.producerbillsList?.map((e) => Producerbills.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

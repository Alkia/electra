/* eslint-disable */
import { Params } from "../meter/params";
import { Meterreadings } from "../meter/meterreadings";
import { Meterdirectory } from "../meter/meterdirectory";
import { PowerPurchaseContract } from "../meter/power_purchase_contract";
import { PpaMap } from "../meter/ppa_map";
import { Billingcycles } from "../meter/billingcycles";
import { Customerbillingline } from "../meter/customerbillingline";
import { Customerbills } from "../meter/customerbills";
import { Producerbillingline } from "../meter/producerbillingline";
import { Producerbills } from "../meter/producerbills";
import { Writer, Reader } from "protobufjs/minimal";

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

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.meterreadingsList = [];
    message.meterdirectoryList = [];
    message.powerPurchaseContractList = [];
    message.ppaMapList = [];
    message.billingcyclesList = [];
    message.customerbillinglineList = [];
    message.customerbillsList = [];
    message.producerbillinglineList = [];
    message.producerbillsList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.meterreadingsList.push(
            Meterreadings.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.meterdirectoryList.push(
            Meterdirectory.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.powerPurchaseContractList.push(
            PowerPurchaseContract.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.ppaMapList.push(PpaMap.decode(reader, reader.uint32()));
          break;
        case 6:
          message.billingcyclesList.push(
            Billingcycles.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.customerbillinglineList.push(
            Customerbillingline.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.customerbillsList.push(
            Customerbills.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.producerbillinglineList.push(
            Producerbillingline.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.producerbillsList.push(
            Producerbills.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.meterreadingsList = [];
    message.meterdirectoryList = [];
    message.powerPurchaseContractList = [];
    message.ppaMapList = [];
    message.billingcyclesList = [];
    message.customerbillinglineList = [];
    message.customerbillsList = [];
    message.producerbillinglineList = [];
    message.producerbillsList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.meterreadingsList !== undefined &&
      object.meterreadingsList !== null
    ) {
      for (const e of object.meterreadingsList) {
        message.meterreadingsList.push(Meterreadings.fromJSON(e));
      }
    }
    if (
      object.meterdirectoryList !== undefined &&
      object.meterdirectoryList !== null
    ) {
      for (const e of object.meterdirectoryList) {
        message.meterdirectoryList.push(Meterdirectory.fromJSON(e));
      }
    }
    if (
      object.powerPurchaseContractList !== undefined &&
      object.powerPurchaseContractList !== null
    ) {
      for (const e of object.powerPurchaseContractList) {
        message.powerPurchaseContractList.push(
          PowerPurchaseContract.fromJSON(e)
        );
      }
    }
    if (object.ppaMapList !== undefined && object.ppaMapList !== null) {
      for (const e of object.ppaMapList) {
        message.ppaMapList.push(PpaMap.fromJSON(e));
      }
    }
    if (
      object.billingcyclesList !== undefined &&
      object.billingcyclesList !== null
    ) {
      for (const e of object.billingcyclesList) {
        message.billingcyclesList.push(Billingcycles.fromJSON(e));
      }
    }
    if (
      object.customerbillinglineList !== undefined &&
      object.customerbillinglineList !== null
    ) {
      for (const e of object.customerbillinglineList) {
        message.customerbillinglineList.push(Customerbillingline.fromJSON(e));
      }
    }
    if (
      object.customerbillsList !== undefined &&
      object.customerbillsList !== null
    ) {
      for (const e of object.customerbillsList) {
        message.customerbillsList.push(Customerbills.fromJSON(e));
      }
    }
    if (
      object.producerbillinglineList !== undefined &&
      object.producerbillinglineList !== null
    ) {
      for (const e of object.producerbillinglineList) {
        message.producerbillinglineList.push(Producerbillingline.fromJSON(e));
      }
    }
    if (
      object.producerbillsList !== undefined &&
      object.producerbillsList !== null
    ) {
      for (const e of object.producerbillsList) {
        message.producerbillsList.push(Producerbills.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.meterreadingsList) {
      obj.meterreadingsList = message.meterreadingsList.map((e) =>
        e ? Meterreadings.toJSON(e) : undefined
      );
    } else {
      obj.meterreadingsList = [];
    }
    if (message.meterdirectoryList) {
      obj.meterdirectoryList = message.meterdirectoryList.map((e) =>
        e ? Meterdirectory.toJSON(e) : undefined
      );
    } else {
      obj.meterdirectoryList = [];
    }
    if (message.powerPurchaseContractList) {
      obj.powerPurchaseContractList = message.powerPurchaseContractList.map(
        (e) => (e ? PowerPurchaseContract.toJSON(e) : undefined)
      );
    } else {
      obj.powerPurchaseContractList = [];
    }
    if (message.ppaMapList) {
      obj.ppaMapList = message.ppaMapList.map((e) =>
        e ? PpaMap.toJSON(e) : undefined
      );
    } else {
      obj.ppaMapList = [];
    }
    if (message.billingcyclesList) {
      obj.billingcyclesList = message.billingcyclesList.map((e) =>
        e ? Billingcycles.toJSON(e) : undefined
      );
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
      obj.customerbillsList = message.customerbillsList.map((e) =>
        e ? Customerbills.toJSON(e) : undefined
      );
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
      obj.producerbillsList = message.producerbillsList.map((e) =>
        e ? Producerbills.toJSON(e) : undefined
      );
    } else {
      obj.producerbillsList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.meterreadingsList = [];
    message.meterdirectoryList = [];
    message.powerPurchaseContractList = [];
    message.ppaMapList = [];
    message.billingcyclesList = [];
    message.customerbillinglineList = [];
    message.customerbillsList = [];
    message.producerbillinglineList = [];
    message.producerbillsList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.meterreadingsList !== undefined &&
      object.meterreadingsList !== null
    ) {
      for (const e of object.meterreadingsList) {
        message.meterreadingsList.push(Meterreadings.fromPartial(e));
      }
    }
    if (
      object.meterdirectoryList !== undefined &&
      object.meterdirectoryList !== null
    ) {
      for (const e of object.meterdirectoryList) {
        message.meterdirectoryList.push(Meterdirectory.fromPartial(e));
      }
    }
    if (
      object.powerPurchaseContractList !== undefined &&
      object.powerPurchaseContractList !== null
    ) {
      for (const e of object.powerPurchaseContractList) {
        message.powerPurchaseContractList.push(
          PowerPurchaseContract.fromPartial(e)
        );
      }
    }
    if (object.ppaMapList !== undefined && object.ppaMapList !== null) {
      for (const e of object.ppaMapList) {
        message.ppaMapList.push(PpaMap.fromPartial(e));
      }
    }
    if (
      object.billingcyclesList !== undefined &&
      object.billingcyclesList !== null
    ) {
      for (const e of object.billingcyclesList) {
        message.billingcyclesList.push(Billingcycles.fromPartial(e));
      }
    }
    if (
      object.customerbillinglineList !== undefined &&
      object.customerbillinglineList !== null
    ) {
      for (const e of object.customerbillinglineList) {
        message.customerbillinglineList.push(
          Customerbillingline.fromPartial(e)
        );
      }
    }
    if (
      object.customerbillsList !== undefined &&
      object.customerbillsList !== null
    ) {
      for (const e of object.customerbillsList) {
        message.customerbillsList.push(Customerbills.fromPartial(e));
      }
    }
    if (
      object.producerbillinglineList !== undefined &&
      object.producerbillinglineList !== null
    ) {
      for (const e of object.producerbillinglineList) {
        message.producerbillinglineList.push(
          Producerbillingline.fromPartial(e)
        );
      }
    }
    if (
      object.producerbillsList !== undefined &&
      object.producerbillsList !== null
    ) {
      for (const e of object.producerbillsList) {
        message.producerbillsList.push(Producerbills.fromPartial(e));
      }
    }
    return message;
  },
};

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

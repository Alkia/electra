/* eslint-disable */
import { Params } from "../meter/params";
import { Meterreadings } from "../meter/meterreadings";
import { Meterdirectory } from "../meter/meterdirectory";
import { PowerPurchaseContract } from "../meter/power_purchase_contract";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "electra.meter";

/** GenesisState defines the meter module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  meterreadingsList: Meterreadings[];
  meterdirectoryList: Meterdirectory[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  powerPurchaseContractList: PowerPurchaseContract[];
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
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.meterreadingsList = [];
    message.meterdirectoryList = [];
    message.powerPurchaseContractList = [];
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
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.meterreadingsList = [];
    message.meterdirectoryList = [];
    message.powerPurchaseContractList = [];
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

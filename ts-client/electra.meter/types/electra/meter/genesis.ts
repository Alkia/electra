/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Meterdirectory } from "./meterdirectory";
import { Meterreadings } from "./meterreadings";
import { Params } from "./params";
import { PowerPurchaseContract } from "./power_purchase_contract";

export const protobufPackage = "electra.meter";

/** GenesisState defines the meter module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  meterreadingsList: Meterreadings[];
  meterdirectoryList: Meterdirectory[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  powerPurchaseContractList: PowerPurchaseContract[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, meterreadingsList: [], meterdirectoryList: [], powerPurchaseContractList: [] };
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

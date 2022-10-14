/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "electra.meter";

export interface MsgRecord {
  creator: string;
  timestamp: number;
  phase: number;
  whin: number;
  whout: number;
  mvolt: number;
  mhertz: number;
  mpf: number;
  maxmi: number;
}

export interface MsgRecordResponse {}

export interface MsgRecord3 {
  creator: string;
  timestamp: number;
  whin1: number;
  whout1: number;
  mvolt1: number;
  mhertz1: number;
  mpf1: number;
  maxmi1: number;
  whin2: number;
  whout2: number;
  mvolt2: number;
  mhertz2: number;
  mpf2: number;
  maxmi2: number;
  whin3: number;
  whout3: number;
  mvolt3: number;
  mhertz3: number;
  mpf3: number;
  maxmi3: number;
}

export interface MsgRecord3Response {}

export interface MsgCreatePowerPurchaseContract {
  creator: string;
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
}

export interface MsgCreatePowerPurchaseContractResponse {}

export interface MsgUpdatePowerPurchaseContract {
  creator: string;
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
}

export interface MsgUpdatePowerPurchaseContractResponse {}

export interface MsgDeletePowerPurchaseContract {
  creator: string;
  contractID: string;
  contractDeviceID: string;
}

export interface MsgDeletePowerPurchaseContractResponse {}

export interface MsgCreatePpaMap {
  creator: string;
  consumerDeviceID: string;
  agreementID: string;
  agreementActive: boolean;
  contractID: string;
  producerDeviceID: string;
  agreementStartDate: number;
  agreementEndDate: number;
}

export interface MsgCreatePpaMapResponse {}

export interface MsgUpdatePpaMap {
  creator: string;
  consumerDeviceID: string;
  agreementID: string;
  agreementActive: boolean;
  contractID: string;
  producerDeviceID: string;
  agreementStartDate: number;
  agreementEndDate: number;
}

export interface MsgUpdatePpaMapResponse {}

export interface MsgDeletePpaMap {
  creator: string;
  consumerDeviceID: string;
  agreementID: string;
  agreementActive: boolean;
  contractID: string;
}

export interface MsgDeletePpaMapResponse {}

export interface MsgCreateBillingcycles {
  creator: string;
  cycleID: number;
  start: number;
  end: number;
  whin: number;
  whout: number;
  moneyin: number;
  moneyout: number;
  curency: string;
}

export interface MsgCreateBillingcyclesResponse {}

export interface MsgUpdateBillingcycles {
  creator: string;
  cycleID: number;
  start: number;
  end: number;
  whin: number;
  whout: number;
  moneyin: number;
  moneyout: number;
  curency: string;
}

export interface MsgUpdateBillingcyclesResponse {}

export interface MsgDeleteBillingcycles {
  creator: string;
  cycleID: number;
}

export interface MsgDeleteBillingcyclesResponse {}

export interface MsgCreateCustomerbillingline {
  creator: string;
  customerdeviceID: string;
  cycleID: number;
  lineid: number;
  producerDeviceID: string;
  billContractID: string;
  lineWh: number;
  lineWhPrice: number;
  curency: string;
  decremented: number;
  phase: number;
}

export interface MsgCreateCustomerbillinglineResponse {}

export interface MsgUpdateCustomerbillingline {
  creator: string;
  customerdeviceID: string;
  cycleID: number;
  lineid: number;
  producerDeviceID: string;
  billContractID: string;
  lineWh: number;
  lineWhPrice: number;
  curency: string;
  decremented: number;
  phase: number;
}

export interface MsgUpdateCustomerbillinglineResponse {}

export interface MsgDeleteCustomerbillingline {
  creator: string;
  customerdeviceID: string;
  cycleID: number;
  lineid: number;
}

export interface MsgDeleteCustomerbillinglineResponse {}

export interface MsgCreateCustomerbills {
  creator: string;
  billCycleID: number;
  customerdeviceID: string;
  billDate: number;
  billTotalWh: number;
  billTotalPrice: number;
  billCurrency: string;
  billValid: boolean;
  paid: boolean;
}

export interface MsgCreateCustomerbillsResponse {}

export interface MsgUpdateCustomerbills {
  creator: string;
  billCycleID: number;
  customerdeviceID: string;
  billDate: number;
  billTotalWh: number;
  billTotalPrice: number;
  billCurrency: string;
  billValid: boolean;
  paid: boolean;
}

export interface MsgUpdateCustomerbillsResponse {}

export interface MsgDeleteCustomerbills {
  creator: string;
  billCycleID: number;
  customerdeviceID: string;
}

export interface MsgDeleteCustomerbillsResponse {}

export interface MsgCreateProducerbillingline {
  creator: string;
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
}

export interface MsgCreateProducerbillinglineResponse {}

export interface MsgUpdateProducerbillingline {
  creator: string;
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
}

export interface MsgUpdateProducerbillinglineResponse {}

export interface MsgDeleteProducerbillingline {
  creator: string;
  producerDeviceID: string;
  cycleID: number;
  lineid: number;
}

export interface MsgDeleteProducerbillinglineResponse {}

export interface MsgCreateProducerbills {
  creator: string;
  billCycleID: number;
  producerdeviceID: string;
  billDate: number;
  billTotalWh: number;
  billTotalPrice: number;
  billCurrency: string;
  billValid: boolean;
  paid: boolean;
}

export interface MsgCreateProducerbillsResponse {}

export interface MsgUpdateProducerbills {
  creator: string;
  billCycleID: number;
  producerdeviceID: string;
  billDate: number;
  billTotalWh: number;
  billTotalPrice: number;
  billCurrency: string;
  billValid: boolean;
  paid: boolean;
}

export interface MsgUpdateProducerbillsResponse {}

export interface MsgDeleteProducerbills {
  creator: string;
  billCycleID: number;
  producerdeviceID: string;
}

export interface MsgDeleteProducerbillsResponse {}

const baseMsgRecord: object = {
  creator: "",
  timestamp: 0,
  phase: 0,
  whin: 0,
  whout: 0,
  mvolt: 0,
  mhertz: 0,
  mpf: 0,
  maxmi: 0,
};

export const MsgRecord = {
  encode(message: MsgRecord, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.phase !== 0) {
      writer.uint32(24).uint64(message.phase);
    }
    if (message.whin !== 0) {
      writer.uint32(32).uint64(message.whin);
    }
    if (message.whout !== 0) {
      writer.uint32(40).uint64(message.whout);
    }
    if (message.mvolt !== 0) {
      writer.uint32(48).uint64(message.mvolt);
    }
    if (message.mhertz !== 0) {
      writer.uint32(56).uint64(message.mhertz);
    }
    if (message.mpf !== 0) {
      writer.uint32(64).uint64(message.mpf);
    }
    if (message.maxmi !== 0) {
      writer.uint32(72).uint64(message.maxmi);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRecord {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRecord } as MsgRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.timestamp = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.phase = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.whin = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.whout = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.mvolt = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.mhertz = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.mpf = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.maxmi = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRecord {
    const message = { ...baseMsgRecord } as MsgRecord;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    } else {
      message.timestamp = 0;
    }
    if (object.phase !== undefined && object.phase !== null) {
      message.phase = Number(object.phase);
    } else {
      message.phase = 0;
    }
    if (object.whin !== undefined && object.whin !== null) {
      message.whin = Number(object.whin);
    } else {
      message.whin = 0;
    }
    if (object.whout !== undefined && object.whout !== null) {
      message.whout = Number(object.whout);
    } else {
      message.whout = 0;
    }
    if (object.mvolt !== undefined && object.mvolt !== null) {
      message.mvolt = Number(object.mvolt);
    } else {
      message.mvolt = 0;
    }
    if (object.mhertz !== undefined && object.mhertz !== null) {
      message.mhertz = Number(object.mhertz);
    } else {
      message.mhertz = 0;
    }
    if (object.mpf !== undefined && object.mpf !== null) {
      message.mpf = Number(object.mpf);
    } else {
      message.mpf = 0;
    }
    if (object.maxmi !== undefined && object.maxmi !== null) {
      message.maxmi = Number(object.maxmi);
    } else {
      message.maxmi = 0;
    }
    return message;
  },

  toJSON(message: MsgRecord): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.phase !== undefined && (obj.phase = message.phase);
    message.whin !== undefined && (obj.whin = message.whin);
    message.whout !== undefined && (obj.whout = message.whout);
    message.mvolt !== undefined && (obj.mvolt = message.mvolt);
    message.mhertz !== undefined && (obj.mhertz = message.mhertz);
    message.mpf !== undefined && (obj.mpf = message.mpf);
    message.maxmi !== undefined && (obj.maxmi = message.maxmi);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRecord>): MsgRecord {
    const message = { ...baseMsgRecord } as MsgRecord;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = 0;
    }
    if (object.phase !== undefined && object.phase !== null) {
      message.phase = object.phase;
    } else {
      message.phase = 0;
    }
    if (object.whin !== undefined && object.whin !== null) {
      message.whin = object.whin;
    } else {
      message.whin = 0;
    }
    if (object.whout !== undefined && object.whout !== null) {
      message.whout = object.whout;
    } else {
      message.whout = 0;
    }
    if (object.mvolt !== undefined && object.mvolt !== null) {
      message.mvolt = object.mvolt;
    } else {
      message.mvolt = 0;
    }
    if (object.mhertz !== undefined && object.mhertz !== null) {
      message.mhertz = object.mhertz;
    } else {
      message.mhertz = 0;
    }
    if (object.mpf !== undefined && object.mpf !== null) {
      message.mpf = object.mpf;
    } else {
      message.mpf = 0;
    }
    if (object.maxmi !== undefined && object.maxmi !== null) {
      message.maxmi = object.maxmi;
    } else {
      message.maxmi = 0;
    }
    return message;
  },
};

const baseMsgRecordResponse: object = {};

export const MsgRecordResponse = {
  encode(_: MsgRecordResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRecordResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRecordResponse } as MsgRecordResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRecordResponse {
    const message = { ...baseMsgRecordResponse } as MsgRecordResponse;
    return message;
  },

  toJSON(_: MsgRecordResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRecordResponse>): MsgRecordResponse {
    const message = { ...baseMsgRecordResponse } as MsgRecordResponse;
    return message;
  },
};

const baseMsgRecord3: object = {
  creator: "",
  timestamp: 0,
  whin1: 0,
  whout1: 0,
  mvolt1: 0,
  mhertz1: 0,
  mpf1: 0,
  maxmi1: 0,
  whin2: 0,
  whout2: 0,
  mvolt2: 0,
  mhertz2: 0,
  mpf2: 0,
  maxmi2: 0,
  whin3: 0,
  whout3: 0,
  mvolt3: 0,
  mhertz3: 0,
  mpf3: 0,
  maxmi3: 0,
};

export const MsgRecord3 = {
  encode(message: MsgRecord3, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.whin1 !== 0) {
      writer.uint32(24).uint64(message.whin1);
    }
    if (message.whout1 !== 0) {
      writer.uint32(32).uint64(message.whout1);
    }
    if (message.mvolt1 !== 0) {
      writer.uint32(40).uint64(message.mvolt1);
    }
    if (message.mhertz1 !== 0) {
      writer.uint32(48).uint64(message.mhertz1);
    }
    if (message.mpf1 !== 0) {
      writer.uint32(56).uint64(message.mpf1);
    }
    if (message.maxmi1 !== 0) {
      writer.uint32(64).uint64(message.maxmi1);
    }
    if (message.whin2 !== 0) {
      writer.uint32(72).uint64(message.whin2);
    }
    if (message.whout2 !== 0) {
      writer.uint32(80).uint64(message.whout2);
    }
    if (message.mvolt2 !== 0) {
      writer.uint32(88).uint64(message.mvolt2);
    }
    if (message.mhertz2 !== 0) {
      writer.uint32(96).uint64(message.mhertz2);
    }
    if (message.mpf2 !== 0) {
      writer.uint32(104).uint64(message.mpf2);
    }
    if (message.maxmi2 !== 0) {
      writer.uint32(112).uint64(message.maxmi2);
    }
    if (message.whin3 !== 0) {
      writer.uint32(120).uint64(message.whin3);
    }
    if (message.whout3 !== 0) {
      writer.uint32(128).uint64(message.whout3);
    }
    if (message.mvolt3 !== 0) {
      writer.uint32(136).uint64(message.mvolt3);
    }
    if (message.mhertz3 !== 0) {
      writer.uint32(144).uint64(message.mhertz3);
    }
    if (message.mpf3 !== 0) {
      writer.uint32(152).uint64(message.mpf3);
    }
    if (message.maxmi3 !== 0) {
      writer.uint32(160).uint64(message.maxmi3);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRecord3 {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRecord3 } as MsgRecord3;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.timestamp = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.whin1 = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.whout1 = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.mvolt1 = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.mhertz1 = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.mpf1 = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.maxmi1 = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.whin2 = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.whout2 = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.mvolt2 = longToNumber(reader.uint64() as Long);
          break;
        case 12:
          message.mhertz2 = longToNumber(reader.uint64() as Long);
          break;
        case 13:
          message.mpf2 = longToNumber(reader.uint64() as Long);
          break;
        case 14:
          message.maxmi2 = longToNumber(reader.uint64() as Long);
          break;
        case 15:
          message.whin3 = longToNumber(reader.uint64() as Long);
          break;
        case 16:
          message.whout3 = longToNumber(reader.uint64() as Long);
          break;
        case 17:
          message.mvolt3 = longToNumber(reader.uint64() as Long);
          break;
        case 18:
          message.mhertz3 = longToNumber(reader.uint64() as Long);
          break;
        case 19:
          message.mpf3 = longToNumber(reader.uint64() as Long);
          break;
        case 20:
          message.maxmi3 = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRecord3 {
    const message = { ...baseMsgRecord3 } as MsgRecord3;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    } else {
      message.timestamp = 0;
    }
    if (object.whin1 !== undefined && object.whin1 !== null) {
      message.whin1 = Number(object.whin1);
    } else {
      message.whin1 = 0;
    }
    if (object.whout1 !== undefined && object.whout1 !== null) {
      message.whout1 = Number(object.whout1);
    } else {
      message.whout1 = 0;
    }
    if (object.mvolt1 !== undefined && object.mvolt1 !== null) {
      message.mvolt1 = Number(object.mvolt1);
    } else {
      message.mvolt1 = 0;
    }
    if (object.mhertz1 !== undefined && object.mhertz1 !== null) {
      message.mhertz1 = Number(object.mhertz1);
    } else {
      message.mhertz1 = 0;
    }
    if (object.mpf1 !== undefined && object.mpf1 !== null) {
      message.mpf1 = Number(object.mpf1);
    } else {
      message.mpf1 = 0;
    }
    if (object.maxmi1 !== undefined && object.maxmi1 !== null) {
      message.maxmi1 = Number(object.maxmi1);
    } else {
      message.maxmi1 = 0;
    }
    if (object.whin2 !== undefined && object.whin2 !== null) {
      message.whin2 = Number(object.whin2);
    } else {
      message.whin2 = 0;
    }
    if (object.whout2 !== undefined && object.whout2 !== null) {
      message.whout2 = Number(object.whout2);
    } else {
      message.whout2 = 0;
    }
    if (object.mvolt2 !== undefined && object.mvolt2 !== null) {
      message.mvolt2 = Number(object.mvolt2);
    } else {
      message.mvolt2 = 0;
    }
    if (object.mhertz2 !== undefined && object.mhertz2 !== null) {
      message.mhertz2 = Number(object.mhertz2);
    } else {
      message.mhertz2 = 0;
    }
    if (object.mpf2 !== undefined && object.mpf2 !== null) {
      message.mpf2 = Number(object.mpf2);
    } else {
      message.mpf2 = 0;
    }
    if (object.maxmi2 !== undefined && object.maxmi2 !== null) {
      message.maxmi2 = Number(object.maxmi2);
    } else {
      message.maxmi2 = 0;
    }
    if (object.whin3 !== undefined && object.whin3 !== null) {
      message.whin3 = Number(object.whin3);
    } else {
      message.whin3 = 0;
    }
    if (object.whout3 !== undefined && object.whout3 !== null) {
      message.whout3 = Number(object.whout3);
    } else {
      message.whout3 = 0;
    }
    if (object.mvolt3 !== undefined && object.mvolt3 !== null) {
      message.mvolt3 = Number(object.mvolt3);
    } else {
      message.mvolt3 = 0;
    }
    if (object.mhertz3 !== undefined && object.mhertz3 !== null) {
      message.mhertz3 = Number(object.mhertz3);
    } else {
      message.mhertz3 = 0;
    }
    if (object.mpf3 !== undefined && object.mpf3 !== null) {
      message.mpf3 = Number(object.mpf3);
    } else {
      message.mpf3 = 0;
    }
    if (object.maxmi3 !== undefined && object.maxmi3 !== null) {
      message.maxmi3 = Number(object.maxmi3);
    } else {
      message.maxmi3 = 0;
    }
    return message;
  },

  toJSON(message: MsgRecord3): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.whin1 !== undefined && (obj.whin1 = message.whin1);
    message.whout1 !== undefined && (obj.whout1 = message.whout1);
    message.mvolt1 !== undefined && (obj.mvolt1 = message.mvolt1);
    message.mhertz1 !== undefined && (obj.mhertz1 = message.mhertz1);
    message.mpf1 !== undefined && (obj.mpf1 = message.mpf1);
    message.maxmi1 !== undefined && (obj.maxmi1 = message.maxmi1);
    message.whin2 !== undefined && (obj.whin2 = message.whin2);
    message.whout2 !== undefined && (obj.whout2 = message.whout2);
    message.mvolt2 !== undefined && (obj.mvolt2 = message.mvolt2);
    message.mhertz2 !== undefined && (obj.mhertz2 = message.mhertz2);
    message.mpf2 !== undefined && (obj.mpf2 = message.mpf2);
    message.maxmi2 !== undefined && (obj.maxmi2 = message.maxmi2);
    message.whin3 !== undefined && (obj.whin3 = message.whin3);
    message.whout3 !== undefined && (obj.whout3 = message.whout3);
    message.mvolt3 !== undefined && (obj.mvolt3 = message.mvolt3);
    message.mhertz3 !== undefined && (obj.mhertz3 = message.mhertz3);
    message.mpf3 !== undefined && (obj.mpf3 = message.mpf3);
    message.maxmi3 !== undefined && (obj.maxmi3 = message.maxmi3);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRecord3>): MsgRecord3 {
    const message = { ...baseMsgRecord3 } as MsgRecord3;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = 0;
    }
    if (object.whin1 !== undefined && object.whin1 !== null) {
      message.whin1 = object.whin1;
    } else {
      message.whin1 = 0;
    }
    if (object.whout1 !== undefined && object.whout1 !== null) {
      message.whout1 = object.whout1;
    } else {
      message.whout1 = 0;
    }
    if (object.mvolt1 !== undefined && object.mvolt1 !== null) {
      message.mvolt1 = object.mvolt1;
    } else {
      message.mvolt1 = 0;
    }
    if (object.mhertz1 !== undefined && object.mhertz1 !== null) {
      message.mhertz1 = object.mhertz1;
    } else {
      message.mhertz1 = 0;
    }
    if (object.mpf1 !== undefined && object.mpf1 !== null) {
      message.mpf1 = object.mpf1;
    } else {
      message.mpf1 = 0;
    }
    if (object.maxmi1 !== undefined && object.maxmi1 !== null) {
      message.maxmi1 = object.maxmi1;
    } else {
      message.maxmi1 = 0;
    }
    if (object.whin2 !== undefined && object.whin2 !== null) {
      message.whin2 = object.whin2;
    } else {
      message.whin2 = 0;
    }
    if (object.whout2 !== undefined && object.whout2 !== null) {
      message.whout2 = object.whout2;
    } else {
      message.whout2 = 0;
    }
    if (object.mvolt2 !== undefined && object.mvolt2 !== null) {
      message.mvolt2 = object.mvolt2;
    } else {
      message.mvolt2 = 0;
    }
    if (object.mhertz2 !== undefined && object.mhertz2 !== null) {
      message.mhertz2 = object.mhertz2;
    } else {
      message.mhertz2 = 0;
    }
    if (object.mpf2 !== undefined && object.mpf2 !== null) {
      message.mpf2 = object.mpf2;
    } else {
      message.mpf2 = 0;
    }
    if (object.maxmi2 !== undefined && object.maxmi2 !== null) {
      message.maxmi2 = object.maxmi2;
    } else {
      message.maxmi2 = 0;
    }
    if (object.whin3 !== undefined && object.whin3 !== null) {
      message.whin3 = object.whin3;
    } else {
      message.whin3 = 0;
    }
    if (object.whout3 !== undefined && object.whout3 !== null) {
      message.whout3 = object.whout3;
    } else {
      message.whout3 = 0;
    }
    if (object.mvolt3 !== undefined && object.mvolt3 !== null) {
      message.mvolt3 = object.mvolt3;
    } else {
      message.mvolt3 = 0;
    }
    if (object.mhertz3 !== undefined && object.mhertz3 !== null) {
      message.mhertz3 = object.mhertz3;
    } else {
      message.mhertz3 = 0;
    }
    if (object.mpf3 !== undefined && object.mpf3 !== null) {
      message.mpf3 = object.mpf3;
    } else {
      message.mpf3 = 0;
    }
    if (object.maxmi3 !== undefined && object.maxmi3 !== null) {
      message.maxmi3 = object.maxmi3;
    } else {
      message.maxmi3 = 0;
    }
    return message;
  },
};

const baseMsgRecord3Response: object = {};

export const MsgRecord3Response = {
  encode(_: MsgRecord3Response, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRecord3Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRecord3Response } as MsgRecord3Response;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRecord3Response {
    const message = { ...baseMsgRecord3Response } as MsgRecord3Response;
    return message;
  },

  toJSON(_: MsgRecord3Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRecord3Response>): MsgRecord3Response {
    const message = { ...baseMsgRecord3Response } as MsgRecord3Response;
    return message;
  },
};

const baseMsgCreatePowerPurchaseContract: object = {
  creator: "",
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
};

export const MsgCreatePowerPurchaseContract = {
  encode(
    message: MsgCreatePowerPurchaseContract,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.contractID !== "") {
      writer.uint32(18).string(message.contractID);
    }
    if (message.contractDeviceID !== "") {
      writer.uint32(26).string(message.contractDeviceID);
    }
    if (message.contractName !== "") {
      writer.uint32(34).string(message.contractName);
    }
    if (message.contractActive === true) {
      writer.uint32(40).bool(message.contractActive);
    }
    if (message.contractPhase !== 0) {
      writer.uint32(48).uint64(message.contractPhase);
    }
    if (message.contractForAll === true) {
      writer.uint32(56).bool(message.contractForAll);
    }
    if (message.contractForAllPrice !== 0) {
      writer.uint32(64).uint64(message.contractForAllPrice);
    }
    if (message.contractForAllCurency !== "") {
      writer.uint32(74).string(message.contractForAllCurency);
    }
    if (message.contractForAllActivePeriod !== "") {
      writer.uint32(82).string(message.contractForAllActivePeriod);
    }
    if (message.contractPreferred === true) {
      writer.uint32(88).bool(message.contractPreferred);
    }
    if (message.contractPreferredPrice !== 0) {
      writer.uint32(96).uint64(message.contractPreferredPrice);
    }
    if (message.contractPreferredActivePeriod !== "") {
      writer.uint32(106).string(message.contractPreferredActivePeriod);
    }
    if (message.contractPreferredCurency !== "") {
      writer.uint32(114).string(message.contractPreferredCurency);
    }
    if (message.contractStartDate !== 0) {
      writer.uint32(120).uint64(message.contractStartDate);
    }
    if (message.contractEndDate !== 0) {
      writer.uint32(128).uint64(message.contractEndDate);
    }
    if (message.phase1RemainingWh !== 0) {
      writer.uint32(136).uint64(message.phase1RemainingWh);
    }
    if (message.phase2RemainingWh !== 0) {
      writer.uint32(144).uint64(message.phase2RemainingWh);
    }
    if (message.phase3RemainingWh !== 0) {
      writer.uint32(152).uint64(message.phase3RemainingWh);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreatePowerPurchaseContract {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePowerPurchaseContract,
    } as MsgCreatePowerPurchaseContract;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.contractID = reader.string();
          break;
        case 3:
          message.contractDeviceID = reader.string();
          break;
        case 4:
          message.contractName = reader.string();
          break;
        case 5:
          message.contractActive = reader.bool();
          break;
        case 6:
          message.contractPhase = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.contractForAll = reader.bool();
          break;
        case 8:
          message.contractForAllPrice = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.contractForAllCurency = reader.string();
          break;
        case 10:
          message.contractForAllActivePeriod = reader.string();
          break;
        case 11:
          message.contractPreferred = reader.bool();
          break;
        case 12:
          message.contractPreferredPrice = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 13:
          message.contractPreferredActivePeriod = reader.string();
          break;
        case 14:
          message.contractPreferredCurency = reader.string();
          break;
        case 15:
          message.contractStartDate = longToNumber(reader.uint64() as Long);
          break;
        case 16:
          message.contractEndDate = longToNumber(reader.uint64() as Long);
          break;
        case 17:
          message.phase1RemainingWh = longToNumber(reader.uint64() as Long);
          break;
        case 18:
          message.phase2RemainingWh = longToNumber(reader.uint64() as Long);
          break;
        case 19:
          message.phase3RemainingWh = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePowerPurchaseContract {
    const message = {
      ...baseMsgCreatePowerPurchaseContract,
    } as MsgCreatePowerPurchaseContract;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgCreatePowerPurchaseContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePowerPurchaseContract>
  ): MsgCreatePowerPurchaseContract {
    const message = {
      ...baseMsgCreatePowerPurchaseContract,
    } as MsgCreatePowerPurchaseContract;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgCreatePowerPurchaseContractResponse: object = {};

export const MsgCreatePowerPurchaseContractResponse = {
  encode(
    _: MsgCreatePowerPurchaseContractResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreatePowerPurchaseContractResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePowerPurchaseContractResponse,
    } as MsgCreatePowerPurchaseContractResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreatePowerPurchaseContractResponse {
    const message = {
      ...baseMsgCreatePowerPurchaseContractResponse,
    } as MsgCreatePowerPurchaseContractResponse;
    return message;
  },

  toJSON(_: MsgCreatePowerPurchaseContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreatePowerPurchaseContractResponse>
  ): MsgCreatePowerPurchaseContractResponse {
    const message = {
      ...baseMsgCreatePowerPurchaseContractResponse,
    } as MsgCreatePowerPurchaseContractResponse;
    return message;
  },
};

const baseMsgUpdatePowerPurchaseContract: object = {
  creator: "",
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
};

export const MsgUpdatePowerPurchaseContract = {
  encode(
    message: MsgUpdatePowerPurchaseContract,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.contractID !== "") {
      writer.uint32(18).string(message.contractID);
    }
    if (message.contractDeviceID !== "") {
      writer.uint32(26).string(message.contractDeviceID);
    }
    if (message.contractName !== "") {
      writer.uint32(34).string(message.contractName);
    }
    if (message.contractActive === true) {
      writer.uint32(40).bool(message.contractActive);
    }
    if (message.contractPhase !== 0) {
      writer.uint32(48).uint64(message.contractPhase);
    }
    if (message.contractForAll === true) {
      writer.uint32(56).bool(message.contractForAll);
    }
    if (message.contractForAllPrice !== 0) {
      writer.uint32(64).uint64(message.contractForAllPrice);
    }
    if (message.contractForAllCurency !== "") {
      writer.uint32(74).string(message.contractForAllCurency);
    }
    if (message.contractForAllActivePeriod !== "") {
      writer.uint32(82).string(message.contractForAllActivePeriod);
    }
    if (message.contractPreferred === true) {
      writer.uint32(88).bool(message.contractPreferred);
    }
    if (message.contractPreferredPrice !== 0) {
      writer.uint32(96).uint64(message.contractPreferredPrice);
    }
    if (message.contractPreferredActivePeriod !== "") {
      writer.uint32(106).string(message.contractPreferredActivePeriod);
    }
    if (message.contractPreferredCurency !== "") {
      writer.uint32(114).string(message.contractPreferredCurency);
    }
    if (message.contractStartDate !== 0) {
      writer.uint32(120).uint64(message.contractStartDate);
    }
    if (message.contractEndDate !== 0) {
      writer.uint32(128).uint64(message.contractEndDate);
    }
    if (message.phase1RemainingWh !== 0) {
      writer.uint32(136).uint64(message.phase1RemainingWh);
    }
    if (message.phase2RemainingWh !== 0) {
      writer.uint32(144).uint64(message.phase2RemainingWh);
    }
    if (message.phase3RemainingWh !== 0) {
      writer.uint32(152).uint64(message.phase3RemainingWh);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdatePowerPurchaseContract {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePowerPurchaseContract,
    } as MsgUpdatePowerPurchaseContract;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.contractID = reader.string();
          break;
        case 3:
          message.contractDeviceID = reader.string();
          break;
        case 4:
          message.contractName = reader.string();
          break;
        case 5:
          message.contractActive = reader.bool();
          break;
        case 6:
          message.contractPhase = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.contractForAll = reader.bool();
          break;
        case 8:
          message.contractForAllPrice = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.contractForAllCurency = reader.string();
          break;
        case 10:
          message.contractForAllActivePeriod = reader.string();
          break;
        case 11:
          message.contractPreferred = reader.bool();
          break;
        case 12:
          message.contractPreferredPrice = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 13:
          message.contractPreferredActivePeriod = reader.string();
          break;
        case 14:
          message.contractPreferredCurency = reader.string();
          break;
        case 15:
          message.contractStartDate = longToNumber(reader.uint64() as Long);
          break;
        case 16:
          message.contractEndDate = longToNumber(reader.uint64() as Long);
          break;
        case 17:
          message.phase1RemainingWh = longToNumber(reader.uint64() as Long);
          break;
        case 18:
          message.phase2RemainingWh = longToNumber(reader.uint64() as Long);
          break;
        case 19:
          message.phase3RemainingWh = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePowerPurchaseContract {
    const message = {
      ...baseMsgUpdatePowerPurchaseContract,
    } as MsgUpdatePowerPurchaseContract;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgUpdatePowerPurchaseContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdatePowerPurchaseContract>
  ): MsgUpdatePowerPurchaseContract {
    const message = {
      ...baseMsgUpdatePowerPurchaseContract,
    } as MsgUpdatePowerPurchaseContract;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgUpdatePowerPurchaseContractResponse: object = {};

export const MsgUpdatePowerPurchaseContractResponse = {
  encode(
    _: MsgUpdatePowerPurchaseContractResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdatePowerPurchaseContractResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePowerPurchaseContractResponse,
    } as MsgUpdatePowerPurchaseContractResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdatePowerPurchaseContractResponse {
    const message = {
      ...baseMsgUpdatePowerPurchaseContractResponse,
    } as MsgUpdatePowerPurchaseContractResponse;
    return message;
  },

  toJSON(_: MsgUpdatePowerPurchaseContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdatePowerPurchaseContractResponse>
  ): MsgUpdatePowerPurchaseContractResponse {
    const message = {
      ...baseMsgUpdatePowerPurchaseContractResponse,
    } as MsgUpdatePowerPurchaseContractResponse;
    return message;
  },
};

const baseMsgDeletePowerPurchaseContract: object = {
  creator: "",
  contractID: "",
  contractDeviceID: "",
};

export const MsgDeletePowerPurchaseContract = {
  encode(
    message: MsgDeletePowerPurchaseContract,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.contractID !== "") {
      writer.uint32(18).string(message.contractID);
    }
    if (message.contractDeviceID !== "") {
      writer.uint32(26).string(message.contractDeviceID);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeletePowerPurchaseContract {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeletePowerPurchaseContract,
    } as MsgDeletePowerPurchaseContract;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.contractID = reader.string();
          break;
        case 3:
          message.contractDeviceID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeletePowerPurchaseContract {
    const message = {
      ...baseMsgDeletePowerPurchaseContract,
    } as MsgDeletePowerPurchaseContract;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgDeletePowerPurchaseContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.contractID !== undefined && (obj.contractID = message.contractID);
    message.contractDeviceID !== undefined &&
      (obj.contractDeviceID = message.contractDeviceID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeletePowerPurchaseContract>
  ): MsgDeletePowerPurchaseContract {
    const message = {
      ...baseMsgDeletePowerPurchaseContract,
    } as MsgDeletePowerPurchaseContract;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgDeletePowerPurchaseContractResponse: object = {};

export const MsgDeletePowerPurchaseContractResponse = {
  encode(
    _: MsgDeletePowerPurchaseContractResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeletePowerPurchaseContractResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeletePowerPurchaseContractResponse,
    } as MsgDeletePowerPurchaseContractResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeletePowerPurchaseContractResponse {
    const message = {
      ...baseMsgDeletePowerPurchaseContractResponse,
    } as MsgDeletePowerPurchaseContractResponse;
    return message;
  },

  toJSON(_: MsgDeletePowerPurchaseContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeletePowerPurchaseContractResponse>
  ): MsgDeletePowerPurchaseContractResponse {
    const message = {
      ...baseMsgDeletePowerPurchaseContractResponse,
    } as MsgDeletePowerPurchaseContractResponse;
    return message;
  },
};

const baseMsgCreatePpaMap: object = {
  creator: "",
  consumerDeviceID: "",
  agreementID: "",
  agreementActive: false,
  contractID: "",
  producerDeviceID: "",
  agreementStartDate: 0,
  agreementEndDate: 0,
};

export const MsgCreatePpaMap = {
  encode(message: MsgCreatePpaMap, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.consumerDeviceID !== "") {
      writer.uint32(18).string(message.consumerDeviceID);
    }
    if (message.agreementID !== "") {
      writer.uint32(26).string(message.agreementID);
    }
    if (message.agreementActive === true) {
      writer.uint32(32).bool(message.agreementActive);
    }
    if (message.contractID !== "") {
      writer.uint32(42).string(message.contractID);
    }
    if (message.producerDeviceID !== "") {
      writer.uint32(50).string(message.producerDeviceID);
    }
    if (message.agreementStartDate !== 0) {
      writer.uint32(56).uint64(message.agreementStartDate);
    }
    if (message.agreementEndDate !== 0) {
      writer.uint32(64).uint64(message.agreementEndDate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePpaMap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePpaMap } as MsgCreatePpaMap;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.consumerDeviceID = reader.string();
          break;
        case 3:
          message.agreementID = reader.string();
          break;
        case 4:
          message.agreementActive = reader.bool();
          break;
        case 5:
          message.contractID = reader.string();
          break;
        case 6:
          message.producerDeviceID = reader.string();
          break;
        case 7:
          message.agreementStartDate = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.agreementEndDate = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePpaMap {
    const message = { ...baseMsgCreatePpaMap } as MsgCreatePpaMap;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.consumerDeviceID !== undefined &&
      object.consumerDeviceID !== null
    ) {
      message.consumerDeviceID = String(object.consumerDeviceID);
    } else {
      message.consumerDeviceID = "";
    }
    if (object.agreementID !== undefined && object.agreementID !== null) {
      message.agreementID = String(object.agreementID);
    } else {
      message.agreementID = "";
    }
    if (
      object.agreementActive !== undefined &&
      object.agreementActive !== null
    ) {
      message.agreementActive = Boolean(object.agreementActive);
    } else {
      message.agreementActive = false;
    }
    if (object.contractID !== undefined && object.contractID !== null) {
      message.contractID = String(object.contractID);
    } else {
      message.contractID = "";
    }
    if (
      object.producerDeviceID !== undefined &&
      object.producerDeviceID !== null
    ) {
      message.producerDeviceID = String(object.producerDeviceID);
    } else {
      message.producerDeviceID = "";
    }
    if (
      object.agreementStartDate !== undefined &&
      object.agreementStartDate !== null
    ) {
      message.agreementStartDate = Number(object.agreementStartDate);
    } else {
      message.agreementStartDate = 0;
    }
    if (
      object.agreementEndDate !== undefined &&
      object.agreementEndDate !== null
    ) {
      message.agreementEndDate = Number(object.agreementEndDate);
    } else {
      message.agreementEndDate = 0;
    }
    return message;
  },

  toJSON(message: MsgCreatePpaMap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.consumerDeviceID !== undefined &&
      (obj.consumerDeviceID = message.consumerDeviceID);
    message.agreementID !== undefined &&
      (obj.agreementID = message.agreementID);
    message.agreementActive !== undefined &&
      (obj.agreementActive = message.agreementActive);
    message.contractID !== undefined && (obj.contractID = message.contractID);
    message.producerDeviceID !== undefined &&
      (obj.producerDeviceID = message.producerDeviceID);
    message.agreementStartDate !== undefined &&
      (obj.agreementStartDate = message.agreementStartDate);
    message.agreementEndDate !== undefined &&
      (obj.agreementEndDate = message.agreementEndDate);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePpaMap>): MsgCreatePpaMap {
    const message = { ...baseMsgCreatePpaMap } as MsgCreatePpaMap;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.consumerDeviceID !== undefined &&
      object.consumerDeviceID !== null
    ) {
      message.consumerDeviceID = object.consumerDeviceID;
    } else {
      message.consumerDeviceID = "";
    }
    if (object.agreementID !== undefined && object.agreementID !== null) {
      message.agreementID = object.agreementID;
    } else {
      message.agreementID = "";
    }
    if (
      object.agreementActive !== undefined &&
      object.agreementActive !== null
    ) {
      message.agreementActive = object.agreementActive;
    } else {
      message.agreementActive = false;
    }
    if (object.contractID !== undefined && object.contractID !== null) {
      message.contractID = object.contractID;
    } else {
      message.contractID = "";
    }
    if (
      object.producerDeviceID !== undefined &&
      object.producerDeviceID !== null
    ) {
      message.producerDeviceID = object.producerDeviceID;
    } else {
      message.producerDeviceID = "";
    }
    if (
      object.agreementStartDate !== undefined &&
      object.agreementStartDate !== null
    ) {
      message.agreementStartDate = object.agreementStartDate;
    } else {
      message.agreementStartDate = 0;
    }
    if (
      object.agreementEndDate !== undefined &&
      object.agreementEndDate !== null
    ) {
      message.agreementEndDate = object.agreementEndDate;
    } else {
      message.agreementEndDate = 0;
    }
    return message;
  },
};

const baseMsgCreatePpaMapResponse: object = {};

export const MsgCreatePpaMapResponse = {
  encode(_: MsgCreatePpaMapResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePpaMapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePpaMapResponse,
    } as MsgCreatePpaMapResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreatePpaMapResponse {
    const message = {
      ...baseMsgCreatePpaMapResponse,
    } as MsgCreatePpaMapResponse;
    return message;
  },

  toJSON(_: MsgCreatePpaMapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreatePpaMapResponse>
  ): MsgCreatePpaMapResponse {
    const message = {
      ...baseMsgCreatePpaMapResponse,
    } as MsgCreatePpaMapResponse;
    return message;
  },
};

const baseMsgUpdatePpaMap: object = {
  creator: "",
  consumerDeviceID: "",
  agreementID: "",
  agreementActive: false,
  contractID: "",
  producerDeviceID: "",
  agreementStartDate: 0,
  agreementEndDate: 0,
};

export const MsgUpdatePpaMap = {
  encode(message: MsgUpdatePpaMap, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.consumerDeviceID !== "") {
      writer.uint32(18).string(message.consumerDeviceID);
    }
    if (message.agreementID !== "") {
      writer.uint32(26).string(message.agreementID);
    }
    if (message.agreementActive === true) {
      writer.uint32(32).bool(message.agreementActive);
    }
    if (message.contractID !== "") {
      writer.uint32(42).string(message.contractID);
    }
    if (message.producerDeviceID !== "") {
      writer.uint32(50).string(message.producerDeviceID);
    }
    if (message.agreementStartDate !== 0) {
      writer.uint32(56).uint64(message.agreementStartDate);
    }
    if (message.agreementEndDate !== 0) {
      writer.uint32(64).uint64(message.agreementEndDate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePpaMap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePpaMap } as MsgUpdatePpaMap;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.consumerDeviceID = reader.string();
          break;
        case 3:
          message.agreementID = reader.string();
          break;
        case 4:
          message.agreementActive = reader.bool();
          break;
        case 5:
          message.contractID = reader.string();
          break;
        case 6:
          message.producerDeviceID = reader.string();
          break;
        case 7:
          message.agreementStartDate = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.agreementEndDate = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePpaMap {
    const message = { ...baseMsgUpdatePpaMap } as MsgUpdatePpaMap;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.consumerDeviceID !== undefined &&
      object.consumerDeviceID !== null
    ) {
      message.consumerDeviceID = String(object.consumerDeviceID);
    } else {
      message.consumerDeviceID = "";
    }
    if (object.agreementID !== undefined && object.agreementID !== null) {
      message.agreementID = String(object.agreementID);
    } else {
      message.agreementID = "";
    }
    if (
      object.agreementActive !== undefined &&
      object.agreementActive !== null
    ) {
      message.agreementActive = Boolean(object.agreementActive);
    } else {
      message.agreementActive = false;
    }
    if (object.contractID !== undefined && object.contractID !== null) {
      message.contractID = String(object.contractID);
    } else {
      message.contractID = "";
    }
    if (
      object.producerDeviceID !== undefined &&
      object.producerDeviceID !== null
    ) {
      message.producerDeviceID = String(object.producerDeviceID);
    } else {
      message.producerDeviceID = "";
    }
    if (
      object.agreementStartDate !== undefined &&
      object.agreementStartDate !== null
    ) {
      message.agreementStartDate = Number(object.agreementStartDate);
    } else {
      message.agreementStartDate = 0;
    }
    if (
      object.agreementEndDate !== undefined &&
      object.agreementEndDate !== null
    ) {
      message.agreementEndDate = Number(object.agreementEndDate);
    } else {
      message.agreementEndDate = 0;
    }
    return message;
  },

  toJSON(message: MsgUpdatePpaMap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.consumerDeviceID !== undefined &&
      (obj.consumerDeviceID = message.consumerDeviceID);
    message.agreementID !== undefined &&
      (obj.agreementID = message.agreementID);
    message.agreementActive !== undefined &&
      (obj.agreementActive = message.agreementActive);
    message.contractID !== undefined && (obj.contractID = message.contractID);
    message.producerDeviceID !== undefined &&
      (obj.producerDeviceID = message.producerDeviceID);
    message.agreementStartDate !== undefined &&
      (obj.agreementStartDate = message.agreementStartDate);
    message.agreementEndDate !== undefined &&
      (obj.agreementEndDate = message.agreementEndDate);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePpaMap>): MsgUpdatePpaMap {
    const message = { ...baseMsgUpdatePpaMap } as MsgUpdatePpaMap;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.consumerDeviceID !== undefined &&
      object.consumerDeviceID !== null
    ) {
      message.consumerDeviceID = object.consumerDeviceID;
    } else {
      message.consumerDeviceID = "";
    }
    if (object.agreementID !== undefined && object.agreementID !== null) {
      message.agreementID = object.agreementID;
    } else {
      message.agreementID = "";
    }
    if (
      object.agreementActive !== undefined &&
      object.agreementActive !== null
    ) {
      message.agreementActive = object.agreementActive;
    } else {
      message.agreementActive = false;
    }
    if (object.contractID !== undefined && object.contractID !== null) {
      message.contractID = object.contractID;
    } else {
      message.contractID = "";
    }
    if (
      object.producerDeviceID !== undefined &&
      object.producerDeviceID !== null
    ) {
      message.producerDeviceID = object.producerDeviceID;
    } else {
      message.producerDeviceID = "";
    }
    if (
      object.agreementStartDate !== undefined &&
      object.agreementStartDate !== null
    ) {
      message.agreementStartDate = object.agreementStartDate;
    } else {
      message.agreementStartDate = 0;
    }
    if (
      object.agreementEndDate !== undefined &&
      object.agreementEndDate !== null
    ) {
      message.agreementEndDate = object.agreementEndDate;
    } else {
      message.agreementEndDate = 0;
    }
    return message;
  },
};

const baseMsgUpdatePpaMapResponse: object = {};

export const MsgUpdatePpaMapResponse = {
  encode(_: MsgUpdatePpaMapResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePpaMapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePpaMapResponse,
    } as MsgUpdatePpaMapResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdatePpaMapResponse {
    const message = {
      ...baseMsgUpdatePpaMapResponse,
    } as MsgUpdatePpaMapResponse;
    return message;
  },

  toJSON(_: MsgUpdatePpaMapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdatePpaMapResponse>
  ): MsgUpdatePpaMapResponse {
    const message = {
      ...baseMsgUpdatePpaMapResponse,
    } as MsgUpdatePpaMapResponse;
    return message;
  },
};

const baseMsgDeletePpaMap: object = {
  creator: "",
  consumerDeviceID: "",
  agreementID: "",
  agreementActive: false,
  contractID: "",
};

export const MsgDeletePpaMap = {
  encode(message: MsgDeletePpaMap, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.consumerDeviceID !== "") {
      writer.uint32(18).string(message.consumerDeviceID);
    }
    if (message.agreementID !== "") {
      writer.uint32(26).string(message.agreementID);
    }
    if (message.agreementActive === true) {
      writer.uint32(32).bool(message.agreementActive);
    }
    if (message.contractID !== "") {
      writer.uint32(42).string(message.contractID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePpaMap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeletePpaMap } as MsgDeletePpaMap;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.consumerDeviceID = reader.string();
          break;
        case 3:
          message.agreementID = reader.string();
          break;
        case 4:
          message.agreementActive = reader.bool();
          break;
        case 5:
          message.contractID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeletePpaMap {
    const message = { ...baseMsgDeletePpaMap } as MsgDeletePpaMap;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.consumerDeviceID !== undefined &&
      object.consumerDeviceID !== null
    ) {
      message.consumerDeviceID = String(object.consumerDeviceID);
    } else {
      message.consumerDeviceID = "";
    }
    if (object.agreementID !== undefined && object.agreementID !== null) {
      message.agreementID = String(object.agreementID);
    } else {
      message.agreementID = "";
    }
    if (
      object.agreementActive !== undefined &&
      object.agreementActive !== null
    ) {
      message.agreementActive = Boolean(object.agreementActive);
    } else {
      message.agreementActive = false;
    }
    if (object.contractID !== undefined && object.contractID !== null) {
      message.contractID = String(object.contractID);
    } else {
      message.contractID = "";
    }
    return message;
  },

  toJSON(message: MsgDeletePpaMap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.consumerDeviceID !== undefined &&
      (obj.consumerDeviceID = message.consumerDeviceID);
    message.agreementID !== undefined &&
      (obj.agreementID = message.agreementID);
    message.agreementActive !== undefined &&
      (obj.agreementActive = message.agreementActive);
    message.contractID !== undefined && (obj.contractID = message.contractID);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeletePpaMap>): MsgDeletePpaMap {
    const message = { ...baseMsgDeletePpaMap } as MsgDeletePpaMap;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.consumerDeviceID !== undefined &&
      object.consumerDeviceID !== null
    ) {
      message.consumerDeviceID = object.consumerDeviceID;
    } else {
      message.consumerDeviceID = "";
    }
    if (object.agreementID !== undefined && object.agreementID !== null) {
      message.agreementID = object.agreementID;
    } else {
      message.agreementID = "";
    }
    if (
      object.agreementActive !== undefined &&
      object.agreementActive !== null
    ) {
      message.agreementActive = object.agreementActive;
    } else {
      message.agreementActive = false;
    }
    if (object.contractID !== undefined && object.contractID !== null) {
      message.contractID = object.contractID;
    } else {
      message.contractID = "";
    }
    return message;
  },
};

const baseMsgDeletePpaMapResponse: object = {};

export const MsgDeletePpaMapResponse = {
  encode(_: MsgDeletePpaMapResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePpaMapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeletePpaMapResponse,
    } as MsgDeletePpaMapResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeletePpaMapResponse {
    const message = {
      ...baseMsgDeletePpaMapResponse,
    } as MsgDeletePpaMapResponse;
    return message;
  },

  toJSON(_: MsgDeletePpaMapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeletePpaMapResponse>
  ): MsgDeletePpaMapResponse {
    const message = {
      ...baseMsgDeletePpaMapResponse,
    } as MsgDeletePpaMapResponse;
    return message;
  },
};

const baseMsgCreateBillingcycles: object = {
  creator: "",
  cycleID: 0,
  start: 0,
  end: 0,
  whin: 0,
  whout: 0,
  moneyin: 0,
  moneyout: 0,
  curency: "",
};

export const MsgCreateBillingcycles = {
  encode(
    message: MsgCreateBillingcycles,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cycleID !== 0) {
      writer.uint32(16).uint64(message.cycleID);
    }
    if (message.start !== 0) {
      writer.uint32(24).uint64(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(32).uint64(message.end);
    }
    if (message.whin !== 0) {
      writer.uint32(40).uint64(message.whin);
    }
    if (message.whout !== 0) {
      writer.uint32(48).uint64(message.whout);
    }
    if (message.moneyin !== 0) {
      writer.uint32(56).uint64(message.moneyin);
    }
    if (message.moneyout !== 0) {
      writer.uint32(64).uint64(message.moneyout);
    }
    if (message.curency !== "") {
      writer.uint32(74).string(message.curency);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBillingcycles {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateBillingcycles } as MsgCreateBillingcycles;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cycleID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.start = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.end = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.whin = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.whout = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.moneyin = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.moneyout = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.curency = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBillingcycles {
    const message = { ...baseMsgCreateBillingcycles } as MsgCreateBillingcycles;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.cycleID !== undefined && object.cycleID !== null) {
      message.cycleID = Number(object.cycleID);
    } else {
      message.cycleID = 0;
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = Number(object.start);
    } else {
      message.start = 0;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = Number(object.end);
    } else {
      message.end = 0;
    }
    if (object.whin !== undefined && object.whin !== null) {
      message.whin = Number(object.whin);
    } else {
      message.whin = 0;
    }
    if (object.whout !== undefined && object.whout !== null) {
      message.whout = Number(object.whout);
    } else {
      message.whout = 0;
    }
    if (object.moneyin !== undefined && object.moneyin !== null) {
      message.moneyin = Number(object.moneyin);
    } else {
      message.moneyin = 0;
    }
    if (object.moneyout !== undefined && object.moneyout !== null) {
      message.moneyout = Number(object.moneyout);
    } else {
      message.moneyout = 0;
    }
    if (object.curency !== undefined && object.curency !== null) {
      message.curency = String(object.curency);
    } else {
      message.curency = "";
    }
    return message;
  },

  toJSON(message: MsgCreateBillingcycles): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cycleID !== undefined && (obj.cycleID = message.cycleID);
    message.start !== undefined && (obj.start = message.start);
    message.end !== undefined && (obj.end = message.end);
    message.whin !== undefined && (obj.whin = message.whin);
    message.whout !== undefined && (obj.whout = message.whout);
    message.moneyin !== undefined && (obj.moneyin = message.moneyin);
    message.moneyout !== undefined && (obj.moneyout = message.moneyout);
    message.curency !== undefined && (obj.curency = message.curency);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateBillingcycles>
  ): MsgCreateBillingcycles {
    const message = { ...baseMsgCreateBillingcycles } as MsgCreateBillingcycles;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.cycleID !== undefined && object.cycleID !== null) {
      message.cycleID = object.cycleID;
    } else {
      message.cycleID = 0;
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = object.start;
    } else {
      message.start = 0;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = object.end;
    } else {
      message.end = 0;
    }
    if (object.whin !== undefined && object.whin !== null) {
      message.whin = object.whin;
    } else {
      message.whin = 0;
    }
    if (object.whout !== undefined && object.whout !== null) {
      message.whout = object.whout;
    } else {
      message.whout = 0;
    }
    if (object.moneyin !== undefined && object.moneyin !== null) {
      message.moneyin = object.moneyin;
    } else {
      message.moneyin = 0;
    }
    if (object.moneyout !== undefined && object.moneyout !== null) {
      message.moneyout = object.moneyout;
    } else {
      message.moneyout = 0;
    }
    if (object.curency !== undefined && object.curency !== null) {
      message.curency = object.curency;
    } else {
      message.curency = "";
    }
    return message;
  },
};

const baseMsgCreateBillingcyclesResponse: object = {};

export const MsgCreateBillingcyclesResponse = {
  encode(
    _: MsgCreateBillingcyclesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateBillingcyclesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateBillingcyclesResponse,
    } as MsgCreateBillingcyclesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateBillingcyclesResponse {
    const message = {
      ...baseMsgCreateBillingcyclesResponse,
    } as MsgCreateBillingcyclesResponse;
    return message;
  },

  toJSON(_: MsgCreateBillingcyclesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateBillingcyclesResponse>
  ): MsgCreateBillingcyclesResponse {
    const message = {
      ...baseMsgCreateBillingcyclesResponse,
    } as MsgCreateBillingcyclesResponse;
    return message;
  },
};

const baseMsgUpdateBillingcycles: object = {
  creator: "",
  cycleID: 0,
  start: 0,
  end: 0,
  whin: 0,
  whout: 0,
  moneyin: 0,
  moneyout: 0,
  curency: "",
};

export const MsgUpdateBillingcycles = {
  encode(
    message: MsgUpdateBillingcycles,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cycleID !== 0) {
      writer.uint32(16).uint64(message.cycleID);
    }
    if (message.start !== 0) {
      writer.uint32(24).uint64(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(32).uint64(message.end);
    }
    if (message.whin !== 0) {
      writer.uint32(40).uint64(message.whin);
    }
    if (message.whout !== 0) {
      writer.uint32(48).uint64(message.whout);
    }
    if (message.moneyin !== 0) {
      writer.uint32(56).uint64(message.moneyin);
    }
    if (message.moneyout !== 0) {
      writer.uint32(64).uint64(message.moneyout);
    }
    if (message.curency !== "") {
      writer.uint32(74).string(message.curency);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBillingcycles {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateBillingcycles } as MsgUpdateBillingcycles;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cycleID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.start = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.end = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.whin = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.whout = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.moneyin = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.moneyout = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.curency = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateBillingcycles {
    const message = { ...baseMsgUpdateBillingcycles } as MsgUpdateBillingcycles;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.cycleID !== undefined && object.cycleID !== null) {
      message.cycleID = Number(object.cycleID);
    } else {
      message.cycleID = 0;
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = Number(object.start);
    } else {
      message.start = 0;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = Number(object.end);
    } else {
      message.end = 0;
    }
    if (object.whin !== undefined && object.whin !== null) {
      message.whin = Number(object.whin);
    } else {
      message.whin = 0;
    }
    if (object.whout !== undefined && object.whout !== null) {
      message.whout = Number(object.whout);
    } else {
      message.whout = 0;
    }
    if (object.moneyin !== undefined && object.moneyin !== null) {
      message.moneyin = Number(object.moneyin);
    } else {
      message.moneyin = 0;
    }
    if (object.moneyout !== undefined && object.moneyout !== null) {
      message.moneyout = Number(object.moneyout);
    } else {
      message.moneyout = 0;
    }
    if (object.curency !== undefined && object.curency !== null) {
      message.curency = String(object.curency);
    } else {
      message.curency = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateBillingcycles): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cycleID !== undefined && (obj.cycleID = message.cycleID);
    message.start !== undefined && (obj.start = message.start);
    message.end !== undefined && (obj.end = message.end);
    message.whin !== undefined && (obj.whin = message.whin);
    message.whout !== undefined && (obj.whout = message.whout);
    message.moneyin !== undefined && (obj.moneyin = message.moneyin);
    message.moneyout !== undefined && (obj.moneyout = message.moneyout);
    message.curency !== undefined && (obj.curency = message.curency);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateBillingcycles>
  ): MsgUpdateBillingcycles {
    const message = { ...baseMsgUpdateBillingcycles } as MsgUpdateBillingcycles;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.cycleID !== undefined && object.cycleID !== null) {
      message.cycleID = object.cycleID;
    } else {
      message.cycleID = 0;
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = object.start;
    } else {
      message.start = 0;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = object.end;
    } else {
      message.end = 0;
    }
    if (object.whin !== undefined && object.whin !== null) {
      message.whin = object.whin;
    } else {
      message.whin = 0;
    }
    if (object.whout !== undefined && object.whout !== null) {
      message.whout = object.whout;
    } else {
      message.whout = 0;
    }
    if (object.moneyin !== undefined && object.moneyin !== null) {
      message.moneyin = object.moneyin;
    } else {
      message.moneyin = 0;
    }
    if (object.moneyout !== undefined && object.moneyout !== null) {
      message.moneyout = object.moneyout;
    } else {
      message.moneyout = 0;
    }
    if (object.curency !== undefined && object.curency !== null) {
      message.curency = object.curency;
    } else {
      message.curency = "";
    }
    return message;
  },
};

const baseMsgUpdateBillingcyclesResponse: object = {};

export const MsgUpdateBillingcyclesResponse = {
  encode(
    _: MsgUpdateBillingcyclesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateBillingcyclesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateBillingcyclesResponse,
    } as MsgUpdateBillingcyclesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateBillingcyclesResponse {
    const message = {
      ...baseMsgUpdateBillingcyclesResponse,
    } as MsgUpdateBillingcyclesResponse;
    return message;
  },

  toJSON(_: MsgUpdateBillingcyclesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateBillingcyclesResponse>
  ): MsgUpdateBillingcyclesResponse {
    const message = {
      ...baseMsgUpdateBillingcyclesResponse,
    } as MsgUpdateBillingcyclesResponse;
    return message;
  },
};

const baseMsgDeleteBillingcycles: object = { creator: "", cycleID: 0 };

export const MsgDeleteBillingcycles = {
  encode(
    message: MsgDeleteBillingcycles,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cycleID !== 0) {
      writer.uint32(16).uint64(message.cycleID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBillingcycles {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteBillingcycles } as MsgDeleteBillingcycles;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cycleID = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteBillingcycles {
    const message = { ...baseMsgDeleteBillingcycles } as MsgDeleteBillingcycles;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.cycleID !== undefined && object.cycleID !== null) {
      message.cycleID = Number(object.cycleID);
    } else {
      message.cycleID = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteBillingcycles): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cycleID !== undefined && (obj.cycleID = message.cycleID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteBillingcycles>
  ): MsgDeleteBillingcycles {
    const message = { ...baseMsgDeleteBillingcycles } as MsgDeleteBillingcycles;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.cycleID !== undefined && object.cycleID !== null) {
      message.cycleID = object.cycleID;
    } else {
      message.cycleID = 0;
    }
    return message;
  },
};

const baseMsgDeleteBillingcyclesResponse: object = {};

export const MsgDeleteBillingcyclesResponse = {
  encode(
    _: MsgDeleteBillingcyclesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteBillingcyclesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteBillingcyclesResponse,
    } as MsgDeleteBillingcyclesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteBillingcyclesResponse {
    const message = {
      ...baseMsgDeleteBillingcyclesResponse,
    } as MsgDeleteBillingcyclesResponse;
    return message;
  },

  toJSON(_: MsgDeleteBillingcyclesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteBillingcyclesResponse>
  ): MsgDeleteBillingcyclesResponse {
    const message = {
      ...baseMsgDeleteBillingcyclesResponse,
    } as MsgDeleteBillingcyclesResponse;
    return message;
  },
};

const baseMsgCreateCustomerbillingline: object = {
  creator: "",
  customerdeviceID: "",
  cycleID: 0,
  lineid: 0,
  producerDeviceID: "",
  billContractID: "",
  lineWh: 0,
  lineWhPrice: 0,
  curency: "",
  decremented: 0,
  phase: 0,
};

export const MsgCreateCustomerbillingline = {
  encode(
    message: MsgCreateCustomerbillingline,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.customerdeviceID !== "") {
      writer.uint32(18).string(message.customerdeviceID);
    }
    if (message.cycleID !== 0) {
      writer.uint32(24).uint64(message.cycleID);
    }
    if (message.lineid !== 0) {
      writer.uint32(32).uint64(message.lineid);
    }
    if (message.producerDeviceID !== "") {
      writer.uint32(42).string(message.producerDeviceID);
    }
    if (message.billContractID !== "") {
      writer.uint32(50).string(message.billContractID);
    }
    if (message.lineWh !== 0) {
      writer.uint32(56).uint64(message.lineWh);
    }
    if (message.lineWhPrice !== 0) {
      writer.uint32(64).uint64(message.lineWhPrice);
    }
    if (message.curency !== "") {
      writer.uint32(74).string(message.curency);
    }
    if (message.decremented !== 0) {
      writer.uint32(80).uint64(message.decremented);
    }
    if (message.phase !== 0) {
      writer.uint32(88).uint64(message.phase);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCustomerbillingline {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCustomerbillingline,
    } as MsgCreateCustomerbillingline;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.customerdeviceID = reader.string();
          break;
        case 3:
          message.cycleID = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.lineid = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.producerDeviceID = reader.string();
          break;
        case 6:
          message.billContractID = reader.string();
          break;
        case 7:
          message.lineWh = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.lineWhPrice = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.curency = reader.string();
          break;
        case 10:
          message.decremented = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.phase = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCustomerbillingline {
    const message = {
      ...baseMsgCreateCustomerbillingline,
    } as MsgCreateCustomerbillingline;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.customerdeviceID !== undefined &&
      object.customerdeviceID !== null
    ) {
      message.customerdeviceID = String(object.customerdeviceID);
    } else {
      message.customerdeviceID = "";
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
      object.producerDeviceID !== undefined &&
      object.producerDeviceID !== null
    ) {
      message.producerDeviceID = String(object.producerDeviceID);
    } else {
      message.producerDeviceID = "";
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
    return message;
  },

  toJSON(message: MsgCreateCustomerbillingline): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.customerdeviceID !== undefined &&
      (obj.customerdeviceID = message.customerdeviceID);
    message.cycleID !== undefined && (obj.cycleID = message.cycleID);
    message.lineid !== undefined && (obj.lineid = message.lineid);
    message.producerDeviceID !== undefined &&
      (obj.producerDeviceID = message.producerDeviceID);
    message.billContractID !== undefined &&
      (obj.billContractID = message.billContractID);
    message.lineWh !== undefined && (obj.lineWh = message.lineWh);
    message.lineWhPrice !== undefined &&
      (obj.lineWhPrice = message.lineWhPrice);
    message.curency !== undefined && (obj.curency = message.curency);
    message.decremented !== undefined &&
      (obj.decremented = message.decremented);
    message.phase !== undefined && (obj.phase = message.phase);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCustomerbillingline>
  ): MsgCreateCustomerbillingline {
    const message = {
      ...baseMsgCreateCustomerbillingline,
    } as MsgCreateCustomerbillingline;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.customerdeviceID !== undefined &&
      object.customerdeviceID !== null
    ) {
      message.customerdeviceID = object.customerdeviceID;
    } else {
      message.customerdeviceID = "";
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
      object.producerDeviceID !== undefined &&
      object.producerDeviceID !== null
    ) {
      message.producerDeviceID = object.producerDeviceID;
    } else {
      message.producerDeviceID = "";
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
    return message;
  },
};

const baseMsgCreateCustomerbillinglineResponse: object = {};

export const MsgCreateCustomerbillinglineResponse = {
  encode(
    _: MsgCreateCustomerbillinglineResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCustomerbillinglineResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCustomerbillinglineResponse,
    } as MsgCreateCustomerbillinglineResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateCustomerbillinglineResponse {
    const message = {
      ...baseMsgCreateCustomerbillinglineResponse,
    } as MsgCreateCustomerbillinglineResponse;
    return message;
  },

  toJSON(_: MsgCreateCustomerbillinglineResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateCustomerbillinglineResponse>
  ): MsgCreateCustomerbillinglineResponse {
    const message = {
      ...baseMsgCreateCustomerbillinglineResponse,
    } as MsgCreateCustomerbillinglineResponse;
    return message;
  },
};

const baseMsgUpdateCustomerbillingline: object = {
  creator: "",
  customerdeviceID: "",
  cycleID: 0,
  lineid: 0,
  producerDeviceID: "",
  billContractID: "",
  lineWh: 0,
  lineWhPrice: 0,
  curency: "",
  decremented: 0,
  phase: 0,
};

export const MsgUpdateCustomerbillingline = {
  encode(
    message: MsgUpdateCustomerbillingline,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.customerdeviceID !== "") {
      writer.uint32(18).string(message.customerdeviceID);
    }
    if (message.cycleID !== 0) {
      writer.uint32(24).uint64(message.cycleID);
    }
    if (message.lineid !== 0) {
      writer.uint32(32).uint64(message.lineid);
    }
    if (message.producerDeviceID !== "") {
      writer.uint32(42).string(message.producerDeviceID);
    }
    if (message.billContractID !== "") {
      writer.uint32(50).string(message.billContractID);
    }
    if (message.lineWh !== 0) {
      writer.uint32(56).uint64(message.lineWh);
    }
    if (message.lineWhPrice !== 0) {
      writer.uint32(64).uint64(message.lineWhPrice);
    }
    if (message.curency !== "") {
      writer.uint32(74).string(message.curency);
    }
    if (message.decremented !== 0) {
      writer.uint32(80).uint64(message.decremented);
    }
    if (message.phase !== 0) {
      writer.uint32(88).uint64(message.phase);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCustomerbillingline {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCustomerbillingline,
    } as MsgUpdateCustomerbillingline;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.customerdeviceID = reader.string();
          break;
        case 3:
          message.cycleID = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.lineid = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.producerDeviceID = reader.string();
          break;
        case 6:
          message.billContractID = reader.string();
          break;
        case 7:
          message.lineWh = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.lineWhPrice = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.curency = reader.string();
          break;
        case 10:
          message.decremented = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.phase = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCustomerbillingline {
    const message = {
      ...baseMsgUpdateCustomerbillingline,
    } as MsgUpdateCustomerbillingline;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.customerdeviceID !== undefined &&
      object.customerdeviceID !== null
    ) {
      message.customerdeviceID = String(object.customerdeviceID);
    } else {
      message.customerdeviceID = "";
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
      object.producerDeviceID !== undefined &&
      object.producerDeviceID !== null
    ) {
      message.producerDeviceID = String(object.producerDeviceID);
    } else {
      message.producerDeviceID = "";
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
    return message;
  },

  toJSON(message: MsgUpdateCustomerbillingline): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.customerdeviceID !== undefined &&
      (obj.customerdeviceID = message.customerdeviceID);
    message.cycleID !== undefined && (obj.cycleID = message.cycleID);
    message.lineid !== undefined && (obj.lineid = message.lineid);
    message.producerDeviceID !== undefined &&
      (obj.producerDeviceID = message.producerDeviceID);
    message.billContractID !== undefined &&
      (obj.billContractID = message.billContractID);
    message.lineWh !== undefined && (obj.lineWh = message.lineWh);
    message.lineWhPrice !== undefined &&
      (obj.lineWhPrice = message.lineWhPrice);
    message.curency !== undefined && (obj.curency = message.curency);
    message.decremented !== undefined &&
      (obj.decremented = message.decremented);
    message.phase !== undefined && (obj.phase = message.phase);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateCustomerbillingline>
  ): MsgUpdateCustomerbillingline {
    const message = {
      ...baseMsgUpdateCustomerbillingline,
    } as MsgUpdateCustomerbillingline;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.customerdeviceID !== undefined &&
      object.customerdeviceID !== null
    ) {
      message.customerdeviceID = object.customerdeviceID;
    } else {
      message.customerdeviceID = "";
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
      object.producerDeviceID !== undefined &&
      object.producerDeviceID !== null
    ) {
      message.producerDeviceID = object.producerDeviceID;
    } else {
      message.producerDeviceID = "";
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
    return message;
  },
};

const baseMsgUpdateCustomerbillinglineResponse: object = {};

export const MsgUpdateCustomerbillinglineResponse = {
  encode(
    _: MsgUpdateCustomerbillinglineResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCustomerbillinglineResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCustomerbillinglineResponse,
    } as MsgUpdateCustomerbillinglineResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateCustomerbillinglineResponse {
    const message = {
      ...baseMsgUpdateCustomerbillinglineResponse,
    } as MsgUpdateCustomerbillinglineResponse;
    return message;
  },

  toJSON(_: MsgUpdateCustomerbillinglineResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateCustomerbillinglineResponse>
  ): MsgUpdateCustomerbillinglineResponse {
    const message = {
      ...baseMsgUpdateCustomerbillinglineResponse,
    } as MsgUpdateCustomerbillinglineResponse;
    return message;
  },
};

const baseMsgDeleteCustomerbillingline: object = {
  creator: "",
  customerdeviceID: "",
  cycleID: 0,
  lineid: 0,
};

export const MsgDeleteCustomerbillingline = {
  encode(
    message: MsgDeleteCustomerbillingline,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.customerdeviceID !== "") {
      writer.uint32(18).string(message.customerdeviceID);
    }
    if (message.cycleID !== 0) {
      writer.uint32(24).uint64(message.cycleID);
    }
    if (message.lineid !== 0) {
      writer.uint32(32).uint64(message.lineid);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCustomerbillingline {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCustomerbillingline,
    } as MsgDeleteCustomerbillingline;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.customerdeviceID = reader.string();
          break;
        case 3:
          message.cycleID = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.lineid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCustomerbillingline {
    const message = {
      ...baseMsgDeleteCustomerbillingline,
    } as MsgDeleteCustomerbillingline;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.customerdeviceID !== undefined &&
      object.customerdeviceID !== null
    ) {
      message.customerdeviceID = String(object.customerdeviceID);
    } else {
      message.customerdeviceID = "";
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
    return message;
  },

  toJSON(message: MsgDeleteCustomerbillingline): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.customerdeviceID !== undefined &&
      (obj.customerdeviceID = message.customerdeviceID);
    message.cycleID !== undefined && (obj.cycleID = message.cycleID);
    message.lineid !== undefined && (obj.lineid = message.lineid);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteCustomerbillingline>
  ): MsgDeleteCustomerbillingline {
    const message = {
      ...baseMsgDeleteCustomerbillingline,
    } as MsgDeleteCustomerbillingline;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.customerdeviceID !== undefined &&
      object.customerdeviceID !== null
    ) {
      message.customerdeviceID = object.customerdeviceID;
    } else {
      message.customerdeviceID = "";
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
    return message;
  },
};

const baseMsgDeleteCustomerbillinglineResponse: object = {};

export const MsgDeleteCustomerbillinglineResponse = {
  encode(
    _: MsgDeleteCustomerbillinglineResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCustomerbillinglineResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCustomerbillinglineResponse,
    } as MsgDeleteCustomerbillinglineResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteCustomerbillinglineResponse {
    const message = {
      ...baseMsgDeleteCustomerbillinglineResponse,
    } as MsgDeleteCustomerbillinglineResponse;
    return message;
  },

  toJSON(_: MsgDeleteCustomerbillinglineResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteCustomerbillinglineResponse>
  ): MsgDeleteCustomerbillinglineResponse {
    const message = {
      ...baseMsgDeleteCustomerbillinglineResponse,
    } as MsgDeleteCustomerbillinglineResponse;
    return message;
  },
};

const baseMsgCreateCustomerbills: object = {
  creator: "",
  billCycleID: 0,
  customerdeviceID: "",
  billDate: 0,
  billTotalWh: 0,
  billTotalPrice: 0,
  billCurrency: "",
  billValid: false,
  paid: false,
};

export const MsgCreateCustomerbills = {
  encode(
    message: MsgCreateCustomerbills,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.billCycleID !== 0) {
      writer.uint32(16).uint64(message.billCycleID);
    }
    if (message.customerdeviceID !== "") {
      writer.uint32(26).string(message.customerdeviceID);
    }
    if (message.billDate !== 0) {
      writer.uint32(32).uint64(message.billDate);
    }
    if (message.billTotalWh !== 0) {
      writer.uint32(40).uint64(message.billTotalWh);
    }
    if (message.billTotalPrice !== 0) {
      writer.uint32(48).uint64(message.billTotalPrice);
    }
    if (message.billCurrency !== "") {
      writer.uint32(58).string(message.billCurrency);
    }
    if (message.billValid === true) {
      writer.uint32(64).bool(message.billValid);
    }
    if (message.paid === true) {
      writer.uint32(72).bool(message.paid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCustomerbills {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateCustomerbills } as MsgCreateCustomerbills;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.billCycleID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.customerdeviceID = reader.string();
          break;
        case 4:
          message.billDate = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.billTotalWh = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.billTotalPrice = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.billCurrency = reader.string();
          break;
        case 8:
          message.billValid = reader.bool();
          break;
        case 9:
          message.paid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCustomerbills {
    const message = { ...baseMsgCreateCustomerbills } as MsgCreateCustomerbills;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.billCycleID !== undefined && object.billCycleID !== null) {
      message.billCycleID = Number(object.billCycleID);
    } else {
      message.billCycleID = 0;
    }
    if (
      object.customerdeviceID !== undefined &&
      object.customerdeviceID !== null
    ) {
      message.customerdeviceID = String(object.customerdeviceID);
    } else {
      message.customerdeviceID = "";
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
    return message;
  },

  toJSON(message: MsgCreateCustomerbills): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.billCycleID !== undefined &&
      (obj.billCycleID = message.billCycleID);
    message.customerdeviceID !== undefined &&
      (obj.customerdeviceID = message.customerdeviceID);
    message.billDate !== undefined && (obj.billDate = message.billDate);
    message.billTotalWh !== undefined &&
      (obj.billTotalWh = message.billTotalWh);
    message.billTotalPrice !== undefined &&
      (obj.billTotalPrice = message.billTotalPrice);
    message.billCurrency !== undefined &&
      (obj.billCurrency = message.billCurrency);
    message.billValid !== undefined && (obj.billValid = message.billValid);
    message.paid !== undefined && (obj.paid = message.paid);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCustomerbills>
  ): MsgCreateCustomerbills {
    const message = { ...baseMsgCreateCustomerbills } as MsgCreateCustomerbills;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.billCycleID !== undefined && object.billCycleID !== null) {
      message.billCycleID = object.billCycleID;
    } else {
      message.billCycleID = 0;
    }
    if (
      object.customerdeviceID !== undefined &&
      object.customerdeviceID !== null
    ) {
      message.customerdeviceID = object.customerdeviceID;
    } else {
      message.customerdeviceID = "";
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
    return message;
  },
};

const baseMsgCreateCustomerbillsResponse: object = {};

export const MsgCreateCustomerbillsResponse = {
  encode(
    _: MsgCreateCustomerbillsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCustomerbillsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCustomerbillsResponse,
    } as MsgCreateCustomerbillsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateCustomerbillsResponse {
    const message = {
      ...baseMsgCreateCustomerbillsResponse,
    } as MsgCreateCustomerbillsResponse;
    return message;
  },

  toJSON(_: MsgCreateCustomerbillsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateCustomerbillsResponse>
  ): MsgCreateCustomerbillsResponse {
    const message = {
      ...baseMsgCreateCustomerbillsResponse,
    } as MsgCreateCustomerbillsResponse;
    return message;
  },
};

const baseMsgUpdateCustomerbills: object = {
  creator: "",
  billCycleID: 0,
  customerdeviceID: "",
  billDate: 0,
  billTotalWh: 0,
  billTotalPrice: 0,
  billCurrency: "",
  billValid: false,
  paid: false,
};

export const MsgUpdateCustomerbills = {
  encode(
    message: MsgUpdateCustomerbills,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.billCycleID !== 0) {
      writer.uint32(16).uint64(message.billCycleID);
    }
    if (message.customerdeviceID !== "") {
      writer.uint32(26).string(message.customerdeviceID);
    }
    if (message.billDate !== 0) {
      writer.uint32(32).uint64(message.billDate);
    }
    if (message.billTotalWh !== 0) {
      writer.uint32(40).uint64(message.billTotalWh);
    }
    if (message.billTotalPrice !== 0) {
      writer.uint32(48).uint64(message.billTotalPrice);
    }
    if (message.billCurrency !== "") {
      writer.uint32(58).string(message.billCurrency);
    }
    if (message.billValid === true) {
      writer.uint32(64).bool(message.billValid);
    }
    if (message.paid === true) {
      writer.uint32(72).bool(message.paid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCustomerbills {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateCustomerbills } as MsgUpdateCustomerbills;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.billCycleID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.customerdeviceID = reader.string();
          break;
        case 4:
          message.billDate = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.billTotalWh = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.billTotalPrice = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.billCurrency = reader.string();
          break;
        case 8:
          message.billValid = reader.bool();
          break;
        case 9:
          message.paid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCustomerbills {
    const message = { ...baseMsgUpdateCustomerbills } as MsgUpdateCustomerbills;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.billCycleID !== undefined && object.billCycleID !== null) {
      message.billCycleID = Number(object.billCycleID);
    } else {
      message.billCycleID = 0;
    }
    if (
      object.customerdeviceID !== undefined &&
      object.customerdeviceID !== null
    ) {
      message.customerdeviceID = String(object.customerdeviceID);
    } else {
      message.customerdeviceID = "";
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
    return message;
  },

  toJSON(message: MsgUpdateCustomerbills): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.billCycleID !== undefined &&
      (obj.billCycleID = message.billCycleID);
    message.customerdeviceID !== undefined &&
      (obj.customerdeviceID = message.customerdeviceID);
    message.billDate !== undefined && (obj.billDate = message.billDate);
    message.billTotalWh !== undefined &&
      (obj.billTotalWh = message.billTotalWh);
    message.billTotalPrice !== undefined &&
      (obj.billTotalPrice = message.billTotalPrice);
    message.billCurrency !== undefined &&
      (obj.billCurrency = message.billCurrency);
    message.billValid !== undefined && (obj.billValid = message.billValid);
    message.paid !== undefined && (obj.paid = message.paid);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateCustomerbills>
  ): MsgUpdateCustomerbills {
    const message = { ...baseMsgUpdateCustomerbills } as MsgUpdateCustomerbills;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.billCycleID !== undefined && object.billCycleID !== null) {
      message.billCycleID = object.billCycleID;
    } else {
      message.billCycleID = 0;
    }
    if (
      object.customerdeviceID !== undefined &&
      object.customerdeviceID !== null
    ) {
      message.customerdeviceID = object.customerdeviceID;
    } else {
      message.customerdeviceID = "";
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
    return message;
  },
};

const baseMsgUpdateCustomerbillsResponse: object = {};

export const MsgUpdateCustomerbillsResponse = {
  encode(
    _: MsgUpdateCustomerbillsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateCustomerbillsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCustomerbillsResponse,
    } as MsgUpdateCustomerbillsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateCustomerbillsResponse {
    const message = {
      ...baseMsgUpdateCustomerbillsResponse,
    } as MsgUpdateCustomerbillsResponse;
    return message;
  },

  toJSON(_: MsgUpdateCustomerbillsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateCustomerbillsResponse>
  ): MsgUpdateCustomerbillsResponse {
    const message = {
      ...baseMsgUpdateCustomerbillsResponse,
    } as MsgUpdateCustomerbillsResponse;
    return message;
  },
};

const baseMsgDeleteCustomerbills: object = {
  creator: "",
  billCycleID: 0,
  customerdeviceID: "",
};

export const MsgDeleteCustomerbills = {
  encode(
    message: MsgDeleteCustomerbills,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.billCycleID !== 0) {
      writer.uint32(16).uint64(message.billCycleID);
    }
    if (message.customerdeviceID !== "") {
      writer.uint32(26).string(message.customerdeviceID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCustomerbills {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteCustomerbills } as MsgDeleteCustomerbills;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.billCycleID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.customerdeviceID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCustomerbills {
    const message = { ...baseMsgDeleteCustomerbills } as MsgDeleteCustomerbills;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.billCycleID !== undefined && object.billCycleID !== null) {
      message.billCycleID = Number(object.billCycleID);
    } else {
      message.billCycleID = 0;
    }
    if (
      object.customerdeviceID !== undefined &&
      object.customerdeviceID !== null
    ) {
      message.customerdeviceID = String(object.customerdeviceID);
    } else {
      message.customerdeviceID = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteCustomerbills): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.billCycleID !== undefined &&
      (obj.billCycleID = message.billCycleID);
    message.customerdeviceID !== undefined &&
      (obj.customerdeviceID = message.customerdeviceID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteCustomerbills>
  ): MsgDeleteCustomerbills {
    const message = { ...baseMsgDeleteCustomerbills } as MsgDeleteCustomerbills;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.billCycleID !== undefined && object.billCycleID !== null) {
      message.billCycleID = object.billCycleID;
    } else {
      message.billCycleID = 0;
    }
    if (
      object.customerdeviceID !== undefined &&
      object.customerdeviceID !== null
    ) {
      message.customerdeviceID = object.customerdeviceID;
    } else {
      message.customerdeviceID = "";
    }
    return message;
  },
};

const baseMsgDeleteCustomerbillsResponse: object = {};

export const MsgDeleteCustomerbillsResponse = {
  encode(
    _: MsgDeleteCustomerbillsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCustomerbillsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCustomerbillsResponse,
    } as MsgDeleteCustomerbillsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteCustomerbillsResponse {
    const message = {
      ...baseMsgDeleteCustomerbillsResponse,
    } as MsgDeleteCustomerbillsResponse;
    return message;
  },

  toJSON(_: MsgDeleteCustomerbillsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteCustomerbillsResponse>
  ): MsgDeleteCustomerbillsResponse {
    const message = {
      ...baseMsgDeleteCustomerbillsResponse,
    } as MsgDeleteCustomerbillsResponse;
    return message;
  },
};

const baseMsgCreateProducerbillingline: object = {
  creator: "",
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
};

export const MsgCreateProducerbillingline = {
  encode(
    message: MsgCreateProducerbillingline,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.producerDeviceID !== "") {
      writer.uint32(18).string(message.producerDeviceID);
    }
    if (message.cycleID !== 0) {
      writer.uint32(24).uint64(message.cycleID);
    }
    if (message.lineid !== 0) {
      writer.uint32(32).uint64(message.lineid);
    }
    if (message.customerdeviceID !== "") {
      writer.uint32(42).string(message.customerdeviceID);
    }
    if (message.billContractID !== "") {
      writer.uint32(50).string(message.billContractID);
    }
    if (message.lineWh !== 0) {
      writer.uint32(56).uint64(message.lineWh);
    }
    if (message.lineWhPrice !== 0) {
      writer.uint32(64).uint64(message.lineWhPrice);
    }
    if (message.curency !== "") {
      writer.uint32(74).string(message.curency);
    }
    if (message.decremented !== 0) {
      writer.uint32(80).uint64(message.decremented);
    }
    if (message.phase !== 0) {
      writer.uint32(88).uint64(message.phase);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateProducerbillingline {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateProducerbillingline,
    } as MsgCreateProducerbillingline;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.producerDeviceID = reader.string();
          break;
        case 3:
          message.cycleID = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.lineid = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.customerdeviceID = reader.string();
          break;
        case 6:
          message.billContractID = reader.string();
          break;
        case 7:
          message.lineWh = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.lineWhPrice = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.curency = reader.string();
          break;
        case 10:
          message.decremented = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.phase = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateProducerbillingline {
    const message = {
      ...baseMsgCreateProducerbillingline,
    } as MsgCreateProducerbillingline;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgCreateProducerbillingline): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateProducerbillingline>
  ): MsgCreateProducerbillingline {
    const message = {
      ...baseMsgCreateProducerbillingline,
    } as MsgCreateProducerbillingline;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgCreateProducerbillinglineResponse: object = {};

export const MsgCreateProducerbillinglineResponse = {
  encode(
    _: MsgCreateProducerbillinglineResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateProducerbillinglineResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateProducerbillinglineResponse,
    } as MsgCreateProducerbillinglineResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateProducerbillinglineResponse {
    const message = {
      ...baseMsgCreateProducerbillinglineResponse,
    } as MsgCreateProducerbillinglineResponse;
    return message;
  },

  toJSON(_: MsgCreateProducerbillinglineResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateProducerbillinglineResponse>
  ): MsgCreateProducerbillinglineResponse {
    const message = {
      ...baseMsgCreateProducerbillinglineResponse,
    } as MsgCreateProducerbillinglineResponse;
    return message;
  },
};

const baseMsgUpdateProducerbillingline: object = {
  creator: "",
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
};

export const MsgUpdateProducerbillingline = {
  encode(
    message: MsgUpdateProducerbillingline,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.producerDeviceID !== "") {
      writer.uint32(18).string(message.producerDeviceID);
    }
    if (message.cycleID !== 0) {
      writer.uint32(24).uint64(message.cycleID);
    }
    if (message.lineid !== 0) {
      writer.uint32(32).uint64(message.lineid);
    }
    if (message.customerdeviceID !== "") {
      writer.uint32(42).string(message.customerdeviceID);
    }
    if (message.billContractID !== "") {
      writer.uint32(50).string(message.billContractID);
    }
    if (message.lineWh !== 0) {
      writer.uint32(56).uint64(message.lineWh);
    }
    if (message.lineWhPrice !== 0) {
      writer.uint32(64).uint64(message.lineWhPrice);
    }
    if (message.curency !== "") {
      writer.uint32(74).string(message.curency);
    }
    if (message.decremented !== 0) {
      writer.uint32(80).uint64(message.decremented);
    }
    if (message.phase !== 0) {
      writer.uint32(88).uint64(message.phase);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateProducerbillingline {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateProducerbillingline,
    } as MsgUpdateProducerbillingline;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.producerDeviceID = reader.string();
          break;
        case 3:
          message.cycleID = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.lineid = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.customerdeviceID = reader.string();
          break;
        case 6:
          message.billContractID = reader.string();
          break;
        case 7:
          message.lineWh = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.lineWhPrice = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.curency = reader.string();
          break;
        case 10:
          message.decremented = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.phase = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateProducerbillingline {
    const message = {
      ...baseMsgUpdateProducerbillingline,
    } as MsgUpdateProducerbillingline;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgUpdateProducerbillingline): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateProducerbillingline>
  ): MsgUpdateProducerbillingline {
    const message = {
      ...baseMsgUpdateProducerbillingline,
    } as MsgUpdateProducerbillingline;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgUpdateProducerbillinglineResponse: object = {};

export const MsgUpdateProducerbillinglineResponse = {
  encode(
    _: MsgUpdateProducerbillinglineResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateProducerbillinglineResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateProducerbillinglineResponse,
    } as MsgUpdateProducerbillinglineResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateProducerbillinglineResponse {
    const message = {
      ...baseMsgUpdateProducerbillinglineResponse,
    } as MsgUpdateProducerbillinglineResponse;
    return message;
  },

  toJSON(_: MsgUpdateProducerbillinglineResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateProducerbillinglineResponse>
  ): MsgUpdateProducerbillinglineResponse {
    const message = {
      ...baseMsgUpdateProducerbillinglineResponse,
    } as MsgUpdateProducerbillinglineResponse;
    return message;
  },
};

const baseMsgDeleteProducerbillingline: object = {
  creator: "",
  producerDeviceID: "",
  cycleID: 0,
  lineid: 0,
};

export const MsgDeleteProducerbillingline = {
  encode(
    message: MsgDeleteProducerbillingline,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.producerDeviceID !== "") {
      writer.uint32(18).string(message.producerDeviceID);
    }
    if (message.cycleID !== 0) {
      writer.uint32(24).uint64(message.cycleID);
    }
    if (message.lineid !== 0) {
      writer.uint32(32).uint64(message.lineid);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteProducerbillingline {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteProducerbillingline,
    } as MsgDeleteProducerbillingline;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.producerDeviceID = reader.string();
          break;
        case 3:
          message.cycleID = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.lineid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteProducerbillingline {
    const message = {
      ...baseMsgDeleteProducerbillingline,
    } as MsgDeleteProducerbillingline;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgDeleteProducerbillingline): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.producerDeviceID !== undefined &&
      (obj.producerDeviceID = message.producerDeviceID);
    message.cycleID !== undefined && (obj.cycleID = message.cycleID);
    message.lineid !== undefined && (obj.lineid = message.lineid);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteProducerbillingline>
  ): MsgDeleteProducerbillingline {
    const message = {
      ...baseMsgDeleteProducerbillingline,
    } as MsgDeleteProducerbillingline;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgDeleteProducerbillinglineResponse: object = {};

export const MsgDeleteProducerbillinglineResponse = {
  encode(
    _: MsgDeleteProducerbillinglineResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteProducerbillinglineResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteProducerbillinglineResponse,
    } as MsgDeleteProducerbillinglineResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteProducerbillinglineResponse {
    const message = {
      ...baseMsgDeleteProducerbillinglineResponse,
    } as MsgDeleteProducerbillinglineResponse;
    return message;
  },

  toJSON(_: MsgDeleteProducerbillinglineResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteProducerbillinglineResponse>
  ): MsgDeleteProducerbillinglineResponse {
    const message = {
      ...baseMsgDeleteProducerbillinglineResponse,
    } as MsgDeleteProducerbillinglineResponse;
    return message;
  },
};

const baseMsgCreateProducerbills: object = {
  creator: "",
  billCycleID: 0,
  producerdeviceID: "",
  billDate: 0,
  billTotalWh: 0,
  billTotalPrice: 0,
  billCurrency: "",
  billValid: false,
  paid: false,
};

export const MsgCreateProducerbills = {
  encode(
    message: MsgCreateProducerbills,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.billCycleID !== 0) {
      writer.uint32(16).uint64(message.billCycleID);
    }
    if (message.producerdeviceID !== "") {
      writer.uint32(26).string(message.producerdeviceID);
    }
    if (message.billDate !== 0) {
      writer.uint32(32).uint64(message.billDate);
    }
    if (message.billTotalWh !== 0) {
      writer.uint32(40).uint64(message.billTotalWh);
    }
    if (message.billTotalPrice !== 0) {
      writer.uint32(48).uint64(message.billTotalPrice);
    }
    if (message.billCurrency !== "") {
      writer.uint32(58).string(message.billCurrency);
    }
    if (message.billValid === true) {
      writer.uint32(64).bool(message.billValid);
    }
    if (message.paid === true) {
      writer.uint32(72).bool(message.paid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateProducerbills {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateProducerbills } as MsgCreateProducerbills;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.billCycleID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.producerdeviceID = reader.string();
          break;
        case 4:
          message.billDate = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.billTotalWh = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.billTotalPrice = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.billCurrency = reader.string();
          break;
        case 8:
          message.billValid = reader.bool();
          break;
        case 9:
          message.paid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateProducerbills {
    const message = { ...baseMsgCreateProducerbills } as MsgCreateProducerbills;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgCreateProducerbills): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateProducerbills>
  ): MsgCreateProducerbills {
    const message = { ...baseMsgCreateProducerbills } as MsgCreateProducerbills;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgCreateProducerbillsResponse: object = {};

export const MsgCreateProducerbillsResponse = {
  encode(
    _: MsgCreateProducerbillsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateProducerbillsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateProducerbillsResponse,
    } as MsgCreateProducerbillsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateProducerbillsResponse {
    const message = {
      ...baseMsgCreateProducerbillsResponse,
    } as MsgCreateProducerbillsResponse;
    return message;
  },

  toJSON(_: MsgCreateProducerbillsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateProducerbillsResponse>
  ): MsgCreateProducerbillsResponse {
    const message = {
      ...baseMsgCreateProducerbillsResponse,
    } as MsgCreateProducerbillsResponse;
    return message;
  },
};

const baseMsgUpdateProducerbills: object = {
  creator: "",
  billCycleID: 0,
  producerdeviceID: "",
  billDate: 0,
  billTotalWh: 0,
  billTotalPrice: 0,
  billCurrency: "",
  billValid: false,
  paid: false,
};

export const MsgUpdateProducerbills = {
  encode(
    message: MsgUpdateProducerbills,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.billCycleID !== 0) {
      writer.uint32(16).uint64(message.billCycleID);
    }
    if (message.producerdeviceID !== "") {
      writer.uint32(26).string(message.producerdeviceID);
    }
    if (message.billDate !== 0) {
      writer.uint32(32).uint64(message.billDate);
    }
    if (message.billTotalWh !== 0) {
      writer.uint32(40).uint64(message.billTotalWh);
    }
    if (message.billTotalPrice !== 0) {
      writer.uint32(48).uint64(message.billTotalPrice);
    }
    if (message.billCurrency !== "") {
      writer.uint32(58).string(message.billCurrency);
    }
    if (message.billValid === true) {
      writer.uint32(64).bool(message.billValid);
    }
    if (message.paid === true) {
      writer.uint32(72).bool(message.paid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateProducerbills {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateProducerbills } as MsgUpdateProducerbills;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.billCycleID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.producerdeviceID = reader.string();
          break;
        case 4:
          message.billDate = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.billTotalWh = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.billTotalPrice = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.billCurrency = reader.string();
          break;
        case 8:
          message.billValid = reader.bool();
          break;
        case 9:
          message.paid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateProducerbills {
    const message = { ...baseMsgUpdateProducerbills } as MsgUpdateProducerbills;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgUpdateProducerbills): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateProducerbills>
  ): MsgUpdateProducerbills {
    const message = { ...baseMsgUpdateProducerbills } as MsgUpdateProducerbills;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgUpdateProducerbillsResponse: object = {};

export const MsgUpdateProducerbillsResponse = {
  encode(
    _: MsgUpdateProducerbillsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateProducerbillsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateProducerbillsResponse,
    } as MsgUpdateProducerbillsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateProducerbillsResponse {
    const message = {
      ...baseMsgUpdateProducerbillsResponse,
    } as MsgUpdateProducerbillsResponse;
    return message;
  },

  toJSON(_: MsgUpdateProducerbillsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateProducerbillsResponse>
  ): MsgUpdateProducerbillsResponse {
    const message = {
      ...baseMsgUpdateProducerbillsResponse,
    } as MsgUpdateProducerbillsResponse;
    return message;
  },
};

const baseMsgDeleteProducerbills: object = {
  creator: "",
  billCycleID: 0,
  producerdeviceID: "",
};

export const MsgDeleteProducerbills = {
  encode(
    message: MsgDeleteProducerbills,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.billCycleID !== 0) {
      writer.uint32(16).uint64(message.billCycleID);
    }
    if (message.producerdeviceID !== "") {
      writer.uint32(26).string(message.producerdeviceID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteProducerbills {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteProducerbills } as MsgDeleteProducerbills;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.billCycleID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.producerdeviceID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteProducerbills {
    const message = { ...baseMsgDeleteProducerbills } as MsgDeleteProducerbills;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgDeleteProducerbills): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.billCycleID !== undefined &&
      (obj.billCycleID = message.billCycleID);
    message.producerdeviceID !== undefined &&
      (obj.producerdeviceID = message.producerdeviceID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteProducerbills>
  ): MsgDeleteProducerbills {
    const message = { ...baseMsgDeleteProducerbills } as MsgDeleteProducerbills;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgDeleteProducerbillsResponse: object = {};

export const MsgDeleteProducerbillsResponse = {
  encode(
    _: MsgDeleteProducerbillsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteProducerbillsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteProducerbillsResponse,
    } as MsgDeleteProducerbillsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteProducerbillsResponse {
    const message = {
      ...baseMsgDeleteProducerbillsResponse,
    } as MsgDeleteProducerbillsResponse;
    return message;
  },

  toJSON(_: MsgDeleteProducerbillsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteProducerbillsResponse>
  ): MsgDeleteProducerbillsResponse {
    const message = {
      ...baseMsgDeleteProducerbillsResponse,
    } as MsgDeleteProducerbillsResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Record(request: MsgRecord): Promise<MsgRecordResponse>;
  Record3(request: MsgRecord3): Promise<MsgRecord3Response>;
  CreatePowerPurchaseContract(
    request: MsgCreatePowerPurchaseContract
  ): Promise<MsgCreatePowerPurchaseContractResponse>;
  UpdatePowerPurchaseContract(
    request: MsgUpdatePowerPurchaseContract
  ): Promise<MsgUpdatePowerPurchaseContractResponse>;
  DeletePowerPurchaseContract(
    request: MsgDeletePowerPurchaseContract
  ): Promise<MsgDeletePowerPurchaseContractResponse>;
  CreatePpaMap(request: MsgCreatePpaMap): Promise<MsgCreatePpaMapResponse>;
  UpdatePpaMap(request: MsgUpdatePpaMap): Promise<MsgUpdatePpaMapResponse>;
  DeletePpaMap(request: MsgDeletePpaMap): Promise<MsgDeletePpaMapResponse>;
  CreateBillingcycles(
    request: MsgCreateBillingcycles
  ): Promise<MsgCreateBillingcyclesResponse>;
  UpdateBillingcycles(
    request: MsgUpdateBillingcycles
  ): Promise<MsgUpdateBillingcyclesResponse>;
  DeleteBillingcycles(
    request: MsgDeleteBillingcycles
  ): Promise<MsgDeleteBillingcyclesResponse>;
  CreateCustomerbillingline(
    request: MsgCreateCustomerbillingline
  ): Promise<MsgCreateCustomerbillinglineResponse>;
  UpdateCustomerbillingline(
    request: MsgUpdateCustomerbillingline
  ): Promise<MsgUpdateCustomerbillinglineResponse>;
  DeleteCustomerbillingline(
    request: MsgDeleteCustomerbillingline
  ): Promise<MsgDeleteCustomerbillinglineResponse>;
  CreateCustomerbills(
    request: MsgCreateCustomerbills
  ): Promise<MsgCreateCustomerbillsResponse>;
  UpdateCustomerbills(
    request: MsgUpdateCustomerbills
  ): Promise<MsgUpdateCustomerbillsResponse>;
  DeleteCustomerbills(
    request: MsgDeleteCustomerbills
  ): Promise<MsgDeleteCustomerbillsResponse>;
  CreateProducerbillingline(
    request: MsgCreateProducerbillingline
  ): Promise<MsgCreateProducerbillinglineResponse>;
  UpdateProducerbillingline(
    request: MsgUpdateProducerbillingline
  ): Promise<MsgUpdateProducerbillinglineResponse>;
  DeleteProducerbillingline(
    request: MsgDeleteProducerbillingline
  ): Promise<MsgDeleteProducerbillinglineResponse>;
  CreateProducerbills(
    request: MsgCreateProducerbills
  ): Promise<MsgCreateProducerbillsResponse>;
  UpdateProducerbills(
    request: MsgUpdateProducerbills
  ): Promise<MsgUpdateProducerbillsResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteProducerbills(
    request: MsgDeleteProducerbills
  ): Promise<MsgDeleteProducerbillsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Record(request: MsgRecord): Promise<MsgRecordResponse> {
    const data = MsgRecord.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "Record", data);
    return promise.then((data) => MsgRecordResponse.decode(new Reader(data)));
  }

  Record3(request: MsgRecord3): Promise<MsgRecord3Response> {
    const data = MsgRecord3.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "Record3", data);
    return promise.then((data) => MsgRecord3Response.decode(new Reader(data)));
  }

  CreatePowerPurchaseContract(
    request: MsgCreatePowerPurchaseContract
  ): Promise<MsgCreatePowerPurchaseContractResponse> {
    const data = MsgCreatePowerPurchaseContract.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Msg",
      "CreatePowerPurchaseContract",
      data
    );
    return promise.then((data) =>
      MsgCreatePowerPurchaseContractResponse.decode(new Reader(data))
    );
  }

  UpdatePowerPurchaseContract(
    request: MsgUpdatePowerPurchaseContract
  ): Promise<MsgUpdatePowerPurchaseContractResponse> {
    const data = MsgUpdatePowerPurchaseContract.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Msg",
      "UpdatePowerPurchaseContract",
      data
    );
    return promise.then((data) =>
      MsgUpdatePowerPurchaseContractResponse.decode(new Reader(data))
    );
  }

  DeletePowerPurchaseContract(
    request: MsgDeletePowerPurchaseContract
  ): Promise<MsgDeletePowerPurchaseContractResponse> {
    const data = MsgDeletePowerPurchaseContract.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Msg",
      "DeletePowerPurchaseContract",
      data
    );
    return promise.then((data) =>
      MsgDeletePowerPurchaseContractResponse.decode(new Reader(data))
    );
  }

  CreatePpaMap(request: MsgCreatePpaMap): Promise<MsgCreatePpaMapResponse> {
    const data = MsgCreatePpaMap.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "CreatePpaMap", data);
    return promise.then((data) =>
      MsgCreatePpaMapResponse.decode(new Reader(data))
    );
  }

  UpdatePpaMap(request: MsgUpdatePpaMap): Promise<MsgUpdatePpaMapResponse> {
    const data = MsgUpdatePpaMap.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "UpdatePpaMap", data);
    return promise.then((data) =>
      MsgUpdatePpaMapResponse.decode(new Reader(data))
    );
  }

  DeletePpaMap(request: MsgDeletePpaMap): Promise<MsgDeletePpaMapResponse> {
    const data = MsgDeletePpaMap.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "DeletePpaMap", data);
    return promise.then((data) =>
      MsgDeletePpaMapResponse.decode(new Reader(data))
    );
  }

  CreateBillingcycles(
    request: MsgCreateBillingcycles
  ): Promise<MsgCreateBillingcyclesResponse> {
    const data = MsgCreateBillingcycles.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Msg",
      "CreateBillingcycles",
      data
    );
    return promise.then((data) =>
      MsgCreateBillingcyclesResponse.decode(new Reader(data))
    );
  }

  UpdateBillingcycles(
    request: MsgUpdateBillingcycles
  ): Promise<MsgUpdateBillingcyclesResponse> {
    const data = MsgUpdateBillingcycles.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Msg",
      "UpdateBillingcycles",
      data
    );
    return promise.then((data) =>
      MsgUpdateBillingcyclesResponse.decode(new Reader(data))
    );
  }

  DeleteBillingcycles(
    request: MsgDeleteBillingcycles
  ): Promise<MsgDeleteBillingcyclesResponse> {
    const data = MsgDeleteBillingcycles.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Msg",
      "DeleteBillingcycles",
      data
    );
    return promise.then((data) =>
      MsgDeleteBillingcyclesResponse.decode(new Reader(data))
    );
  }

  CreateCustomerbillingline(
    request: MsgCreateCustomerbillingline
  ): Promise<MsgCreateCustomerbillinglineResponse> {
    const data = MsgCreateCustomerbillingline.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Msg",
      "CreateCustomerbillingline",
      data
    );
    return promise.then((data) =>
      MsgCreateCustomerbillinglineResponse.decode(new Reader(data))
    );
  }

  UpdateCustomerbillingline(
    request: MsgUpdateCustomerbillingline
  ): Promise<MsgUpdateCustomerbillinglineResponse> {
    const data = MsgUpdateCustomerbillingline.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Msg",
      "UpdateCustomerbillingline",
      data
    );
    return promise.then((data) =>
      MsgUpdateCustomerbillinglineResponse.decode(new Reader(data))
    );
  }

  DeleteCustomerbillingline(
    request: MsgDeleteCustomerbillingline
  ): Promise<MsgDeleteCustomerbillinglineResponse> {
    const data = MsgDeleteCustomerbillingline.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Msg",
      "DeleteCustomerbillingline",
      data
    );
    return promise.then((data) =>
      MsgDeleteCustomerbillinglineResponse.decode(new Reader(data))
    );
  }

  CreateCustomerbills(
    request: MsgCreateCustomerbills
  ): Promise<MsgCreateCustomerbillsResponse> {
    const data = MsgCreateCustomerbills.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Msg",
      "CreateCustomerbills",
      data
    );
    return promise.then((data) =>
      MsgCreateCustomerbillsResponse.decode(new Reader(data))
    );
  }

  UpdateCustomerbills(
    request: MsgUpdateCustomerbills
  ): Promise<MsgUpdateCustomerbillsResponse> {
    const data = MsgUpdateCustomerbills.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Msg",
      "UpdateCustomerbills",
      data
    );
    return promise.then((data) =>
      MsgUpdateCustomerbillsResponse.decode(new Reader(data))
    );
  }

  DeleteCustomerbills(
    request: MsgDeleteCustomerbills
  ): Promise<MsgDeleteCustomerbillsResponse> {
    const data = MsgDeleteCustomerbills.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Msg",
      "DeleteCustomerbills",
      data
    );
    return promise.then((data) =>
      MsgDeleteCustomerbillsResponse.decode(new Reader(data))
    );
  }

  CreateProducerbillingline(
    request: MsgCreateProducerbillingline
  ): Promise<MsgCreateProducerbillinglineResponse> {
    const data = MsgCreateProducerbillingline.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Msg",
      "CreateProducerbillingline",
      data
    );
    return promise.then((data) =>
      MsgCreateProducerbillinglineResponse.decode(new Reader(data))
    );
  }

  UpdateProducerbillingline(
    request: MsgUpdateProducerbillingline
  ): Promise<MsgUpdateProducerbillinglineResponse> {
    const data = MsgUpdateProducerbillingline.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Msg",
      "UpdateProducerbillingline",
      data
    );
    return promise.then((data) =>
      MsgUpdateProducerbillinglineResponse.decode(new Reader(data))
    );
  }

  DeleteProducerbillingline(
    request: MsgDeleteProducerbillingline
  ): Promise<MsgDeleteProducerbillinglineResponse> {
    const data = MsgDeleteProducerbillingline.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Msg",
      "DeleteProducerbillingline",
      data
    );
    return promise.then((data) =>
      MsgDeleteProducerbillinglineResponse.decode(new Reader(data))
    );
  }

  CreateProducerbills(
    request: MsgCreateProducerbills
  ): Promise<MsgCreateProducerbillsResponse> {
    const data = MsgCreateProducerbills.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Msg",
      "CreateProducerbills",
      data
    );
    return promise.then((data) =>
      MsgCreateProducerbillsResponse.decode(new Reader(data))
    );
  }

  UpdateProducerbills(
    request: MsgUpdateProducerbills
  ): Promise<MsgUpdateProducerbillsResponse> {
    const data = MsgUpdateProducerbills.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Msg",
      "UpdateProducerbills",
      data
    );
    return promise.then((data) =>
      MsgUpdateProducerbillsResponse.decode(new Reader(data))
    );
  }

  DeleteProducerbills(
    request: MsgDeleteProducerbills
  ): Promise<MsgDeleteProducerbillsResponse> {
    const data = MsgDeleteProducerbills.encode(request).finish();
    const promise = this.rpc.request(
      "electra.meter.Msg",
      "DeleteProducerbills",
      data
    );
    return promise.then((data) =>
      MsgDeleteProducerbillsResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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

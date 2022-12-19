/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

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

export interface MsgRecordResponse {
}

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

export interface MsgRecord3Response {
}

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

export interface MsgCreatePowerPurchaseContractResponse {
}

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

export interface MsgUpdatePowerPurchaseContractResponse {
}

export interface MsgDeletePowerPurchaseContract {
  creator: string;
  contractID: string;
  contractDeviceID: string;
}

export interface MsgDeletePowerPurchaseContractResponse {
}

export interface MsgCreatePpaMap {
  creator: string;
  consumerDeviceID: string;
  agreementID: string;
  agreementActive: boolean;
  contractID: string;
  producerDeviceID: string;
  agreementStartDate: number;
  agreementEndDate: number;
  contractPreferredPrice: number;
  contractPreferredCurency: string;
}

export interface MsgCreatePpaMapResponse {
}

export interface MsgUpdatePpaMap {
  creator: string;
  consumerDeviceID: string;
  agreementID: string;
  agreementActive: boolean;
  contractID: string;
  producerDeviceID: string;
  agreementStartDate: number;
  agreementEndDate: number;
  contractPreferredPrice: number;
  contractPreferredCurency: string;
}

export interface MsgUpdatePpaMapResponse {
}

export interface MsgDeletePpaMap {
  creator: string;
  consumerDeviceID: string;
  agreementID: string;
  agreementActive: boolean;
  contractID: string;
}

export interface MsgDeletePpaMapResponse {
}

export interface MsgCreateBillingcycles {
  creator: string;
  cycleID: number;
  begin: number;
  end: number;
  whin: number;
  whout: number;
  moneyin: number;
  moneyout: number;
  curency: string;
  valid: boolean;
  paid: boolean;
}

export interface MsgCreateBillingcyclesResponse {
}

export interface MsgUpdateBillingcycles {
  creator: string;
  cycleID: number;
  begin: number;
  end: number;
  whin: number;
  whout: number;
  moneyin: number;
  moneyout: number;
  curency: string;
  valid: boolean;
  paid: boolean;
}

export interface MsgUpdateBillingcyclesResponse {
}

export interface MsgDeleteBillingcycles {
  creator: string;
  cycleID: number;
}

export interface MsgDeleteBillingcyclesResponse {
}

export interface MsgPrepareBill {
  creator: string;
  cycleID: number;
  record: boolean;
  executePayment: boolean;
}

export interface MsgPrepareBillResponse {
  jsonCustomerbill: string;
  jsonProducerbill: string;
  comment: string;
}

export interface MsgCreateCustomerbillingline {
  creator: string;
  customerDeviceID: string;
  cycleID: number;
  lineid: number;
  paid: boolean;
  producerDeviceID: string;
  billContractID: string;
  lineWh: number;
  lineWhPrice: number;
  curency: string;
  lineWhTotalPrice: number;
  phase: number;
}

export interface MsgCreateCustomerbillinglineResponse {
}

export interface MsgUpdateCustomerbillingline {
  creator: string;
  customerDeviceID: string;
  cycleID: number;
  lineid: number;
  paid: boolean;
  producerDeviceID: string;
  billContractID: string;
  lineWh: number;
  lineWhPrice: number;
  curency: string;
  lineWhTotalPrice: number;
  phase: number;
}

export interface MsgUpdateCustomerbillinglineResponse {
}

export interface MsgDeleteCustomerbillingline {
  creator: string;
  customerDeviceID: string;
  cycleID: number;
  lineid: number;
  paid: boolean;
}

export interface MsgDeleteCustomerbillinglineResponse {
}

export interface MsgCreateCustomerbills {
  creator: string;
  billCycleID: number;
  customerDeviceID: string;
  billDate: number;
  billTotalWh: number;
  billTotalPrice: number;
  billCurrency: string;
  billValid: boolean;
  paid: boolean;
}

export interface MsgCreateCustomerbillsResponse {
}

export interface MsgUpdateCustomerbills {
  creator: string;
  billCycleID: number;
  customerDeviceID: string;
  billDate: number;
  billTotalWh: number;
  billTotalPrice: number;
  billCurrency: string;
  billValid: boolean;
  paid: boolean;
}

export interface MsgUpdateCustomerbillsResponse {
}

export interface MsgDeleteCustomerbills {
  creator: string;
  billCycleID: number;
  customerDeviceID: string;
}

export interface MsgDeleteCustomerbillsResponse {
}

export interface MsgCreateProducerbillingline {
  creator: string;
  producerDeviceID: string;
  cycleID: number;
  lineid: number;
  paid: boolean;
  customerDeviceID: string;
  billContractID: string;
  lineWh: number;
  lineWhPrice: number;
  curency: string;
  lineWhTotalPrice: number;
  phase: number;
}

export interface MsgCreateProducerbillinglineResponse {
}

export interface MsgUpdateProducerbillingline {
  creator: string;
  producerDeviceID: string;
  cycleID: number;
  lineid: number;
  paid: boolean;
  customerDeviceID: string;
  billContractID: string;
  lineWh: number;
  lineWhPrice: number;
  curency: string;
  lineWhTotalPrice: number;
  phase: number;
}

export interface MsgUpdateProducerbillinglineResponse {
}

export interface MsgDeleteProducerbillingline {
  creator: string;
  producerDeviceID: string;
  cycleID: number;
  lineid: number;
  paid: boolean;
}

export interface MsgDeleteProducerbillinglineResponse {
}

export interface MsgCreateProducerbills {
  creator: string;
  billCycleID: number;
  producerDeviceID: string;
  billDate: number;
  billTotalWh: number;
  billTotalPrice: number;
  billCurrency: string;
  billValid: boolean;
  paid: boolean;
}

export interface MsgCreateProducerbillsResponse {
}

export interface MsgUpdateProducerbills {
  creator: string;
  billCycleID: number;
  producerDeviceID: string;
  billDate: number;
  billTotalWh: number;
  billTotalPrice: number;
  billCurrency: string;
  billValid: boolean;
  paid: boolean;
}

export interface MsgUpdateProducerbillsResponse {
}

export interface MsgDeleteProducerbills {
  creator: string;
  billCycleID: number;
  producerDeviceID: string;
}

export interface MsgDeleteProducerbillsResponse {
}

function createBaseMsgRecord(): MsgRecord {
  return { creator: "", timestamp: 0, phase: 0, whin: 0, whout: 0, mvolt: 0, mhertz: 0, mpf: 0, maxmi: 0 };
}

export const MsgRecord = {
  encode(message: MsgRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecord();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      phase: isSet(object.phase) ? Number(object.phase) : 0,
      whin: isSet(object.whin) ? Number(object.whin) : 0,
      whout: isSet(object.whout) ? Number(object.whout) : 0,
      mvolt: isSet(object.mvolt) ? Number(object.mvolt) : 0,
      mhertz: isSet(object.mhertz) ? Number(object.mhertz) : 0,
      mpf: isSet(object.mpf) ? Number(object.mpf) : 0,
      maxmi: isSet(object.maxmi) ? Number(object.maxmi) : 0,
    };
  },

  toJSON(message: MsgRecord): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.phase !== undefined && (obj.phase = Math.round(message.phase));
    message.whin !== undefined && (obj.whin = Math.round(message.whin));
    message.whout !== undefined && (obj.whout = Math.round(message.whout));
    message.mvolt !== undefined && (obj.mvolt = Math.round(message.mvolt));
    message.mhertz !== undefined && (obj.mhertz = Math.round(message.mhertz));
    message.mpf !== undefined && (obj.mpf = Math.round(message.mpf));
    message.maxmi !== undefined && (obj.maxmi = Math.round(message.maxmi));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRecord>, I>>(object: I): MsgRecord {
    const message = createBaseMsgRecord();
    message.creator = object.creator ?? "";
    message.timestamp = object.timestamp ?? 0;
    message.phase = object.phase ?? 0;
    message.whin = object.whin ?? 0;
    message.whout = object.whout ?? 0;
    message.mvolt = object.mvolt ?? 0;
    message.mhertz = object.mhertz ?? 0;
    message.mpf = object.mpf ?? 0;
    message.maxmi = object.maxmi ?? 0;
    return message;
  },
};

function createBaseMsgRecordResponse(): MsgRecordResponse {
  return {};
}

export const MsgRecordResponse = {
  encode(_: MsgRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecordResponse();
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
    return {};
  },

  toJSON(_: MsgRecordResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRecordResponse>, I>>(_: I): MsgRecordResponse {
    const message = createBaseMsgRecordResponse();
    return message;
  },
};

function createBaseMsgRecord3(): MsgRecord3 {
  return {
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
}

export const MsgRecord3 = {
  encode(message: MsgRecord3, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecord3 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecord3();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      whin1: isSet(object.whin1) ? Number(object.whin1) : 0,
      whout1: isSet(object.whout1) ? Number(object.whout1) : 0,
      mvolt1: isSet(object.mvolt1) ? Number(object.mvolt1) : 0,
      mhertz1: isSet(object.mhertz1) ? Number(object.mhertz1) : 0,
      mpf1: isSet(object.mpf1) ? Number(object.mpf1) : 0,
      maxmi1: isSet(object.maxmi1) ? Number(object.maxmi1) : 0,
      whin2: isSet(object.whin2) ? Number(object.whin2) : 0,
      whout2: isSet(object.whout2) ? Number(object.whout2) : 0,
      mvolt2: isSet(object.mvolt2) ? Number(object.mvolt2) : 0,
      mhertz2: isSet(object.mhertz2) ? Number(object.mhertz2) : 0,
      mpf2: isSet(object.mpf2) ? Number(object.mpf2) : 0,
      maxmi2: isSet(object.maxmi2) ? Number(object.maxmi2) : 0,
      whin3: isSet(object.whin3) ? Number(object.whin3) : 0,
      whout3: isSet(object.whout3) ? Number(object.whout3) : 0,
      mvolt3: isSet(object.mvolt3) ? Number(object.mvolt3) : 0,
      mhertz3: isSet(object.mhertz3) ? Number(object.mhertz3) : 0,
      mpf3: isSet(object.mpf3) ? Number(object.mpf3) : 0,
      maxmi3: isSet(object.maxmi3) ? Number(object.maxmi3) : 0,
    };
  },

  toJSON(message: MsgRecord3): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.whin1 !== undefined && (obj.whin1 = Math.round(message.whin1));
    message.whout1 !== undefined && (obj.whout1 = Math.round(message.whout1));
    message.mvolt1 !== undefined && (obj.mvolt1 = Math.round(message.mvolt1));
    message.mhertz1 !== undefined && (obj.mhertz1 = Math.round(message.mhertz1));
    message.mpf1 !== undefined && (obj.mpf1 = Math.round(message.mpf1));
    message.maxmi1 !== undefined && (obj.maxmi1 = Math.round(message.maxmi1));
    message.whin2 !== undefined && (obj.whin2 = Math.round(message.whin2));
    message.whout2 !== undefined && (obj.whout2 = Math.round(message.whout2));
    message.mvolt2 !== undefined && (obj.mvolt2 = Math.round(message.mvolt2));
    message.mhertz2 !== undefined && (obj.mhertz2 = Math.round(message.mhertz2));
    message.mpf2 !== undefined && (obj.mpf2 = Math.round(message.mpf2));
    message.maxmi2 !== undefined && (obj.maxmi2 = Math.round(message.maxmi2));
    message.whin3 !== undefined && (obj.whin3 = Math.round(message.whin3));
    message.whout3 !== undefined && (obj.whout3 = Math.round(message.whout3));
    message.mvolt3 !== undefined && (obj.mvolt3 = Math.round(message.mvolt3));
    message.mhertz3 !== undefined && (obj.mhertz3 = Math.round(message.mhertz3));
    message.mpf3 !== undefined && (obj.mpf3 = Math.round(message.mpf3));
    message.maxmi3 !== undefined && (obj.maxmi3 = Math.round(message.maxmi3));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRecord3>, I>>(object: I): MsgRecord3 {
    const message = createBaseMsgRecord3();
    message.creator = object.creator ?? "";
    message.timestamp = object.timestamp ?? 0;
    message.whin1 = object.whin1 ?? 0;
    message.whout1 = object.whout1 ?? 0;
    message.mvolt1 = object.mvolt1 ?? 0;
    message.mhertz1 = object.mhertz1 ?? 0;
    message.mpf1 = object.mpf1 ?? 0;
    message.maxmi1 = object.maxmi1 ?? 0;
    message.whin2 = object.whin2 ?? 0;
    message.whout2 = object.whout2 ?? 0;
    message.mvolt2 = object.mvolt2 ?? 0;
    message.mhertz2 = object.mhertz2 ?? 0;
    message.mpf2 = object.mpf2 ?? 0;
    message.maxmi2 = object.maxmi2 ?? 0;
    message.whin3 = object.whin3 ?? 0;
    message.whout3 = object.whout3 ?? 0;
    message.mvolt3 = object.mvolt3 ?? 0;
    message.mhertz3 = object.mhertz3 ?? 0;
    message.mpf3 = object.mpf3 ?? 0;
    message.maxmi3 = object.maxmi3 ?? 0;
    return message;
  },
};

function createBaseMsgRecord3Response(): MsgRecord3Response {
  return {};
}

export const MsgRecord3Response = {
  encode(_: MsgRecord3Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecord3Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecord3Response();
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
    return {};
  },

  toJSON(_: MsgRecord3Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRecord3Response>, I>>(_: I): MsgRecord3Response {
    const message = createBaseMsgRecord3Response();
    return message;
  },
};

function createBaseMsgCreatePowerPurchaseContract(): MsgCreatePowerPurchaseContract {
  return {
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
}

export const MsgCreatePowerPurchaseContract = {
  encode(message: MsgCreatePowerPurchaseContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePowerPurchaseContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePowerPurchaseContract();
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
          message.contractPreferredPrice = longToNumber(reader.uint64() as Long);
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
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
    };
  },

  toJSON(message: MsgCreatePowerPurchaseContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePowerPurchaseContract>, I>>(
    object: I,
  ): MsgCreatePowerPurchaseContract {
    const message = createBaseMsgCreatePowerPurchaseContract();
    message.creator = object.creator ?? "";
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
    return message;
  },
};

function createBaseMsgCreatePowerPurchaseContractResponse(): MsgCreatePowerPurchaseContractResponse {
  return {};
}

export const MsgCreatePowerPurchaseContractResponse = {
  encode(_: MsgCreatePowerPurchaseContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePowerPurchaseContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePowerPurchaseContractResponse();
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
    return {};
  },

  toJSON(_: MsgCreatePowerPurchaseContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePowerPurchaseContractResponse>, I>>(
    _: I,
  ): MsgCreatePowerPurchaseContractResponse {
    const message = createBaseMsgCreatePowerPurchaseContractResponse();
    return message;
  },
};

function createBaseMsgUpdatePowerPurchaseContract(): MsgUpdatePowerPurchaseContract {
  return {
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
}

export const MsgUpdatePowerPurchaseContract = {
  encode(message: MsgUpdatePowerPurchaseContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePowerPurchaseContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePowerPurchaseContract();
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
          message.contractPreferredPrice = longToNumber(reader.uint64() as Long);
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
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
    };
  },

  toJSON(message: MsgUpdatePowerPurchaseContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdatePowerPurchaseContract>, I>>(
    object: I,
  ): MsgUpdatePowerPurchaseContract {
    const message = createBaseMsgUpdatePowerPurchaseContract();
    message.creator = object.creator ?? "";
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
    return message;
  },
};

function createBaseMsgUpdatePowerPurchaseContractResponse(): MsgUpdatePowerPurchaseContractResponse {
  return {};
}

export const MsgUpdatePowerPurchaseContractResponse = {
  encode(_: MsgUpdatePowerPurchaseContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePowerPurchaseContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePowerPurchaseContractResponse();
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
    return {};
  },

  toJSON(_: MsgUpdatePowerPurchaseContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdatePowerPurchaseContractResponse>, I>>(
    _: I,
  ): MsgUpdatePowerPurchaseContractResponse {
    const message = createBaseMsgUpdatePowerPurchaseContractResponse();
    return message;
  },
};

function createBaseMsgDeletePowerPurchaseContract(): MsgDeletePowerPurchaseContract {
  return { creator: "", contractID: "", contractDeviceID: "" };
}

export const MsgDeletePowerPurchaseContract = {
  encode(message: MsgDeletePowerPurchaseContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePowerPurchaseContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePowerPurchaseContract();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      contractID: isSet(object.contractID) ? String(object.contractID) : "",
      contractDeviceID: isSet(object.contractDeviceID) ? String(object.contractDeviceID) : "",
    };
  },

  toJSON(message: MsgDeletePowerPurchaseContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.contractID !== undefined && (obj.contractID = message.contractID);
    message.contractDeviceID !== undefined && (obj.contractDeviceID = message.contractDeviceID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeletePowerPurchaseContract>, I>>(
    object: I,
  ): MsgDeletePowerPurchaseContract {
    const message = createBaseMsgDeletePowerPurchaseContract();
    message.creator = object.creator ?? "";
    message.contractID = object.contractID ?? "";
    message.contractDeviceID = object.contractDeviceID ?? "";
    return message;
  },
};

function createBaseMsgDeletePowerPurchaseContractResponse(): MsgDeletePowerPurchaseContractResponse {
  return {};
}

export const MsgDeletePowerPurchaseContractResponse = {
  encode(_: MsgDeletePowerPurchaseContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePowerPurchaseContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePowerPurchaseContractResponse();
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
    return {};
  },

  toJSON(_: MsgDeletePowerPurchaseContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeletePowerPurchaseContractResponse>, I>>(
    _: I,
  ): MsgDeletePowerPurchaseContractResponse {
    const message = createBaseMsgDeletePowerPurchaseContractResponse();
    return message;
  },
};

function createBaseMsgCreatePpaMap(): MsgCreatePpaMap {
  return {
    creator: "",
    consumerDeviceID: "",
    agreementID: "",
    agreementActive: false,
    contractID: "",
    producerDeviceID: "",
    agreementStartDate: 0,
    agreementEndDate: 0,
    contractPreferredPrice: 0,
    contractPreferredCurency: "",
  };
}

export const MsgCreatePpaMap = {
  encode(message: MsgCreatePpaMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.contractPreferredPrice !== 0) {
      writer.uint32(72).uint64(message.contractPreferredPrice);
    }
    if (message.contractPreferredCurency !== "") {
      writer.uint32(82).string(message.contractPreferredCurency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePpaMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePpaMap();
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
        case 9:
          message.contractPreferredPrice = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.contractPreferredCurency = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePpaMap {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      consumerDeviceID: isSet(object.consumerDeviceID) ? String(object.consumerDeviceID) : "",
      agreementID: isSet(object.agreementID) ? String(object.agreementID) : "",
      agreementActive: isSet(object.agreementActive) ? Boolean(object.agreementActive) : false,
      contractID: isSet(object.contractID) ? String(object.contractID) : "",
      producerDeviceID: isSet(object.producerDeviceID) ? String(object.producerDeviceID) : "",
      agreementStartDate: isSet(object.agreementStartDate) ? Number(object.agreementStartDate) : 0,
      agreementEndDate: isSet(object.agreementEndDate) ? Number(object.agreementEndDate) : 0,
      contractPreferredPrice: isSet(object.contractPreferredPrice) ? Number(object.contractPreferredPrice) : 0,
      contractPreferredCurency: isSet(object.contractPreferredCurency) ? String(object.contractPreferredCurency) : "",
    };
  },

  toJSON(message: MsgCreatePpaMap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.consumerDeviceID !== undefined && (obj.consumerDeviceID = message.consumerDeviceID);
    message.agreementID !== undefined && (obj.agreementID = message.agreementID);
    message.agreementActive !== undefined && (obj.agreementActive = message.agreementActive);
    message.contractID !== undefined && (obj.contractID = message.contractID);
    message.producerDeviceID !== undefined && (obj.producerDeviceID = message.producerDeviceID);
    message.agreementStartDate !== undefined && (obj.agreementStartDate = Math.round(message.agreementStartDate));
    message.agreementEndDate !== undefined && (obj.agreementEndDate = Math.round(message.agreementEndDate));
    message.contractPreferredPrice !== undefined
      && (obj.contractPreferredPrice = Math.round(message.contractPreferredPrice));
    message.contractPreferredCurency !== undefined && (obj.contractPreferredCurency = message.contractPreferredCurency);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePpaMap>, I>>(object: I): MsgCreatePpaMap {
    const message = createBaseMsgCreatePpaMap();
    message.creator = object.creator ?? "";
    message.consumerDeviceID = object.consumerDeviceID ?? "";
    message.agreementID = object.agreementID ?? "";
    message.agreementActive = object.agreementActive ?? false;
    message.contractID = object.contractID ?? "";
    message.producerDeviceID = object.producerDeviceID ?? "";
    message.agreementStartDate = object.agreementStartDate ?? 0;
    message.agreementEndDate = object.agreementEndDate ?? 0;
    message.contractPreferredPrice = object.contractPreferredPrice ?? 0;
    message.contractPreferredCurency = object.contractPreferredCurency ?? "";
    return message;
  },
};

function createBaseMsgCreatePpaMapResponse(): MsgCreatePpaMapResponse {
  return {};
}

export const MsgCreatePpaMapResponse = {
  encode(_: MsgCreatePpaMapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePpaMapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePpaMapResponse();
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
    return {};
  },

  toJSON(_: MsgCreatePpaMapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePpaMapResponse>, I>>(_: I): MsgCreatePpaMapResponse {
    const message = createBaseMsgCreatePpaMapResponse();
    return message;
  },
};

function createBaseMsgUpdatePpaMap(): MsgUpdatePpaMap {
  return {
    creator: "",
    consumerDeviceID: "",
    agreementID: "",
    agreementActive: false,
    contractID: "",
    producerDeviceID: "",
    agreementStartDate: 0,
    agreementEndDate: 0,
    contractPreferredPrice: 0,
    contractPreferredCurency: "",
  };
}

export const MsgUpdatePpaMap = {
  encode(message: MsgUpdatePpaMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.contractPreferredPrice !== 0) {
      writer.uint32(72).uint64(message.contractPreferredPrice);
    }
    if (message.contractPreferredCurency !== "") {
      writer.uint32(82).string(message.contractPreferredCurency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePpaMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePpaMap();
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
        case 9:
          message.contractPreferredPrice = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.contractPreferredCurency = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePpaMap {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      consumerDeviceID: isSet(object.consumerDeviceID) ? String(object.consumerDeviceID) : "",
      agreementID: isSet(object.agreementID) ? String(object.agreementID) : "",
      agreementActive: isSet(object.agreementActive) ? Boolean(object.agreementActive) : false,
      contractID: isSet(object.contractID) ? String(object.contractID) : "",
      producerDeviceID: isSet(object.producerDeviceID) ? String(object.producerDeviceID) : "",
      agreementStartDate: isSet(object.agreementStartDate) ? Number(object.agreementStartDate) : 0,
      agreementEndDate: isSet(object.agreementEndDate) ? Number(object.agreementEndDate) : 0,
      contractPreferredPrice: isSet(object.contractPreferredPrice) ? Number(object.contractPreferredPrice) : 0,
      contractPreferredCurency: isSet(object.contractPreferredCurency) ? String(object.contractPreferredCurency) : "",
    };
  },

  toJSON(message: MsgUpdatePpaMap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.consumerDeviceID !== undefined && (obj.consumerDeviceID = message.consumerDeviceID);
    message.agreementID !== undefined && (obj.agreementID = message.agreementID);
    message.agreementActive !== undefined && (obj.agreementActive = message.agreementActive);
    message.contractID !== undefined && (obj.contractID = message.contractID);
    message.producerDeviceID !== undefined && (obj.producerDeviceID = message.producerDeviceID);
    message.agreementStartDate !== undefined && (obj.agreementStartDate = Math.round(message.agreementStartDate));
    message.agreementEndDate !== undefined && (obj.agreementEndDate = Math.round(message.agreementEndDate));
    message.contractPreferredPrice !== undefined
      && (obj.contractPreferredPrice = Math.round(message.contractPreferredPrice));
    message.contractPreferredCurency !== undefined && (obj.contractPreferredCurency = message.contractPreferredCurency);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdatePpaMap>, I>>(object: I): MsgUpdatePpaMap {
    const message = createBaseMsgUpdatePpaMap();
    message.creator = object.creator ?? "";
    message.consumerDeviceID = object.consumerDeviceID ?? "";
    message.agreementID = object.agreementID ?? "";
    message.agreementActive = object.agreementActive ?? false;
    message.contractID = object.contractID ?? "";
    message.producerDeviceID = object.producerDeviceID ?? "";
    message.agreementStartDate = object.agreementStartDate ?? 0;
    message.agreementEndDate = object.agreementEndDate ?? 0;
    message.contractPreferredPrice = object.contractPreferredPrice ?? 0;
    message.contractPreferredCurency = object.contractPreferredCurency ?? "";
    return message;
  },
};

function createBaseMsgUpdatePpaMapResponse(): MsgUpdatePpaMapResponse {
  return {};
}

export const MsgUpdatePpaMapResponse = {
  encode(_: MsgUpdatePpaMapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePpaMapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePpaMapResponse();
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
    return {};
  },

  toJSON(_: MsgUpdatePpaMapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdatePpaMapResponse>, I>>(_: I): MsgUpdatePpaMapResponse {
    const message = createBaseMsgUpdatePpaMapResponse();
    return message;
  },
};

function createBaseMsgDeletePpaMap(): MsgDeletePpaMap {
  return { creator: "", consumerDeviceID: "", agreementID: "", agreementActive: false, contractID: "" };
}

export const MsgDeletePpaMap = {
  encode(message: MsgDeletePpaMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePpaMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePpaMap();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      consumerDeviceID: isSet(object.consumerDeviceID) ? String(object.consumerDeviceID) : "",
      agreementID: isSet(object.agreementID) ? String(object.agreementID) : "",
      agreementActive: isSet(object.agreementActive) ? Boolean(object.agreementActive) : false,
      contractID: isSet(object.contractID) ? String(object.contractID) : "",
    };
  },

  toJSON(message: MsgDeletePpaMap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.consumerDeviceID !== undefined && (obj.consumerDeviceID = message.consumerDeviceID);
    message.agreementID !== undefined && (obj.agreementID = message.agreementID);
    message.agreementActive !== undefined && (obj.agreementActive = message.agreementActive);
    message.contractID !== undefined && (obj.contractID = message.contractID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeletePpaMap>, I>>(object: I): MsgDeletePpaMap {
    const message = createBaseMsgDeletePpaMap();
    message.creator = object.creator ?? "";
    message.consumerDeviceID = object.consumerDeviceID ?? "";
    message.agreementID = object.agreementID ?? "";
    message.agreementActive = object.agreementActive ?? false;
    message.contractID = object.contractID ?? "";
    return message;
  },
};

function createBaseMsgDeletePpaMapResponse(): MsgDeletePpaMapResponse {
  return {};
}

export const MsgDeletePpaMapResponse = {
  encode(_: MsgDeletePpaMapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeletePpaMapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeletePpaMapResponse();
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
    return {};
  },

  toJSON(_: MsgDeletePpaMapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeletePpaMapResponse>, I>>(_: I): MsgDeletePpaMapResponse {
    const message = createBaseMsgDeletePpaMapResponse();
    return message;
  },
};

function createBaseMsgCreateBillingcycles(): MsgCreateBillingcycles {
  return {
    creator: "",
    cycleID: 0,
    begin: 0,
    end: 0,
    whin: 0,
    whout: 0,
    moneyin: 0,
    moneyout: 0,
    curency: "",
    valid: false,
    paid: false,
  };
}

export const MsgCreateBillingcycles = {
  encode(message: MsgCreateBillingcycles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cycleID !== 0) {
      writer.uint32(16).uint64(message.cycleID);
    }
    if (message.begin !== 0) {
      writer.uint32(24).uint64(message.begin);
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
    if (message.valid === true) {
      writer.uint32(80).bool(message.valid);
    }
    if (message.paid === true) {
      writer.uint32(88).bool(message.paid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBillingcycles {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBillingcycles();
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
          message.begin = longToNumber(reader.uint64() as Long);
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
        case 10:
          message.valid = reader.bool();
          break;
        case 11:
          message.paid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBillingcycles {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cycleID: isSet(object.cycleID) ? Number(object.cycleID) : 0,
      begin: isSet(object.begin) ? Number(object.begin) : 0,
      end: isSet(object.end) ? Number(object.end) : 0,
      whin: isSet(object.whin) ? Number(object.whin) : 0,
      whout: isSet(object.whout) ? Number(object.whout) : 0,
      moneyin: isSet(object.moneyin) ? Number(object.moneyin) : 0,
      moneyout: isSet(object.moneyout) ? Number(object.moneyout) : 0,
      curency: isSet(object.curency) ? String(object.curency) : "",
      valid: isSet(object.valid) ? Boolean(object.valid) : false,
      paid: isSet(object.paid) ? Boolean(object.paid) : false,
    };
  },

  toJSON(message: MsgCreateBillingcycles): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cycleID !== undefined && (obj.cycleID = Math.round(message.cycleID));
    message.begin !== undefined && (obj.begin = Math.round(message.begin));
    message.end !== undefined && (obj.end = Math.round(message.end));
    message.whin !== undefined && (obj.whin = Math.round(message.whin));
    message.whout !== undefined && (obj.whout = Math.round(message.whout));
    message.moneyin !== undefined && (obj.moneyin = Math.round(message.moneyin));
    message.moneyout !== undefined && (obj.moneyout = Math.round(message.moneyout));
    message.curency !== undefined && (obj.curency = message.curency);
    message.valid !== undefined && (obj.valid = message.valid);
    message.paid !== undefined && (obj.paid = message.paid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBillingcycles>, I>>(object: I): MsgCreateBillingcycles {
    const message = createBaseMsgCreateBillingcycles();
    message.creator = object.creator ?? "";
    message.cycleID = object.cycleID ?? 0;
    message.begin = object.begin ?? 0;
    message.end = object.end ?? 0;
    message.whin = object.whin ?? 0;
    message.whout = object.whout ?? 0;
    message.moneyin = object.moneyin ?? 0;
    message.moneyout = object.moneyout ?? 0;
    message.curency = object.curency ?? "";
    message.valid = object.valid ?? false;
    message.paid = object.paid ?? false;
    return message;
  },
};

function createBaseMsgCreateBillingcyclesResponse(): MsgCreateBillingcyclesResponse {
  return {};
}

export const MsgCreateBillingcyclesResponse = {
  encode(_: MsgCreateBillingcyclesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBillingcyclesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBillingcyclesResponse();
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
    return {};
  },

  toJSON(_: MsgCreateBillingcyclesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBillingcyclesResponse>, I>>(_: I): MsgCreateBillingcyclesResponse {
    const message = createBaseMsgCreateBillingcyclesResponse();
    return message;
  },
};

function createBaseMsgUpdateBillingcycles(): MsgUpdateBillingcycles {
  return {
    creator: "",
    cycleID: 0,
    begin: 0,
    end: 0,
    whin: 0,
    whout: 0,
    moneyin: 0,
    moneyout: 0,
    curency: "",
    valid: false,
    paid: false,
  };
}

export const MsgUpdateBillingcycles = {
  encode(message: MsgUpdateBillingcycles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cycleID !== 0) {
      writer.uint32(16).uint64(message.cycleID);
    }
    if (message.begin !== 0) {
      writer.uint32(24).uint64(message.begin);
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
    if (message.valid === true) {
      writer.uint32(80).bool(message.valid);
    }
    if (message.paid === true) {
      writer.uint32(88).bool(message.paid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBillingcycles {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBillingcycles();
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
          message.begin = longToNumber(reader.uint64() as Long);
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
        case 10:
          message.valid = reader.bool();
          break;
        case 11:
          message.paid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateBillingcycles {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cycleID: isSet(object.cycleID) ? Number(object.cycleID) : 0,
      begin: isSet(object.begin) ? Number(object.begin) : 0,
      end: isSet(object.end) ? Number(object.end) : 0,
      whin: isSet(object.whin) ? Number(object.whin) : 0,
      whout: isSet(object.whout) ? Number(object.whout) : 0,
      moneyin: isSet(object.moneyin) ? Number(object.moneyin) : 0,
      moneyout: isSet(object.moneyout) ? Number(object.moneyout) : 0,
      curency: isSet(object.curency) ? String(object.curency) : "",
      valid: isSet(object.valid) ? Boolean(object.valid) : false,
      paid: isSet(object.paid) ? Boolean(object.paid) : false,
    };
  },

  toJSON(message: MsgUpdateBillingcycles): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cycleID !== undefined && (obj.cycleID = Math.round(message.cycleID));
    message.begin !== undefined && (obj.begin = Math.round(message.begin));
    message.end !== undefined && (obj.end = Math.round(message.end));
    message.whin !== undefined && (obj.whin = Math.round(message.whin));
    message.whout !== undefined && (obj.whout = Math.round(message.whout));
    message.moneyin !== undefined && (obj.moneyin = Math.round(message.moneyin));
    message.moneyout !== undefined && (obj.moneyout = Math.round(message.moneyout));
    message.curency !== undefined && (obj.curency = message.curency);
    message.valid !== undefined && (obj.valid = message.valid);
    message.paid !== undefined && (obj.paid = message.paid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateBillingcycles>, I>>(object: I): MsgUpdateBillingcycles {
    const message = createBaseMsgUpdateBillingcycles();
    message.creator = object.creator ?? "";
    message.cycleID = object.cycleID ?? 0;
    message.begin = object.begin ?? 0;
    message.end = object.end ?? 0;
    message.whin = object.whin ?? 0;
    message.whout = object.whout ?? 0;
    message.moneyin = object.moneyin ?? 0;
    message.moneyout = object.moneyout ?? 0;
    message.curency = object.curency ?? "";
    message.valid = object.valid ?? false;
    message.paid = object.paid ?? false;
    return message;
  },
};

function createBaseMsgUpdateBillingcyclesResponse(): MsgUpdateBillingcyclesResponse {
  return {};
}

export const MsgUpdateBillingcyclesResponse = {
  encode(_: MsgUpdateBillingcyclesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBillingcyclesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBillingcyclesResponse();
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
    return {};
  },

  toJSON(_: MsgUpdateBillingcyclesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateBillingcyclesResponse>, I>>(_: I): MsgUpdateBillingcyclesResponse {
    const message = createBaseMsgUpdateBillingcyclesResponse();
    return message;
  },
};

function createBaseMsgDeleteBillingcycles(): MsgDeleteBillingcycles {
  return { creator: "", cycleID: 0 };
}

export const MsgDeleteBillingcycles = {
  encode(message: MsgDeleteBillingcycles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cycleID !== 0) {
      writer.uint32(16).uint64(message.cycleID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBillingcycles {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteBillingcycles();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cycleID: isSet(object.cycleID) ? Number(object.cycleID) : 0,
    };
  },

  toJSON(message: MsgDeleteBillingcycles): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cycleID !== undefined && (obj.cycleID = Math.round(message.cycleID));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteBillingcycles>, I>>(object: I): MsgDeleteBillingcycles {
    const message = createBaseMsgDeleteBillingcycles();
    message.creator = object.creator ?? "";
    message.cycleID = object.cycleID ?? 0;
    return message;
  },
};

function createBaseMsgDeleteBillingcyclesResponse(): MsgDeleteBillingcyclesResponse {
  return {};
}

export const MsgDeleteBillingcyclesResponse = {
  encode(_: MsgDeleteBillingcyclesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBillingcyclesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteBillingcyclesResponse();
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
    return {};
  },

  toJSON(_: MsgDeleteBillingcyclesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteBillingcyclesResponse>, I>>(_: I): MsgDeleteBillingcyclesResponse {
    const message = createBaseMsgDeleteBillingcyclesResponse();
    return message;
  },
};

function createBaseMsgPrepareBill(): MsgPrepareBill {
  return { creator: "", cycleID: 0, record: false, executePayment: false };
}

export const MsgPrepareBill = {
  encode(message: MsgPrepareBill, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cycleID !== 0) {
      writer.uint32(16).uint64(message.cycleID);
    }
    if (message.record === true) {
      writer.uint32(24).bool(message.record);
    }
    if (message.executePayment === true) {
      writer.uint32(32).bool(message.executePayment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPrepareBill {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPrepareBill();
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
          message.record = reader.bool();
          break;
        case 4:
          message.executePayment = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPrepareBill {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cycleID: isSet(object.cycleID) ? Number(object.cycleID) : 0,
      record: isSet(object.record) ? Boolean(object.record) : false,
      executePayment: isSet(object.executePayment) ? Boolean(object.executePayment) : false,
    };
  },

  toJSON(message: MsgPrepareBill): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cycleID !== undefined && (obj.cycleID = Math.round(message.cycleID));
    message.record !== undefined && (obj.record = message.record);
    message.executePayment !== undefined && (obj.executePayment = message.executePayment);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPrepareBill>, I>>(object: I): MsgPrepareBill {
    const message = createBaseMsgPrepareBill();
    message.creator = object.creator ?? "";
    message.cycleID = object.cycleID ?? 0;
    message.record = object.record ?? false;
    message.executePayment = object.executePayment ?? false;
    return message;
  },
};

function createBaseMsgPrepareBillResponse(): MsgPrepareBillResponse {
  return { jsonCustomerbill: "", jsonProducerbill: "", comment: "" };
}

export const MsgPrepareBillResponse = {
  encode(message: MsgPrepareBillResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jsonCustomerbill !== "") {
      writer.uint32(10).string(message.jsonCustomerbill);
    }
    if (message.jsonProducerbill !== "") {
      writer.uint32(18).string(message.jsonProducerbill);
    }
    if (message.comment !== "") {
      writer.uint32(26).string(message.comment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPrepareBillResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPrepareBillResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jsonCustomerbill = reader.string();
          break;
        case 2:
          message.jsonProducerbill = reader.string();
          break;
        case 3:
          message.comment = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPrepareBillResponse {
    return {
      jsonCustomerbill: isSet(object.jsonCustomerbill) ? String(object.jsonCustomerbill) : "",
      jsonProducerbill: isSet(object.jsonProducerbill) ? String(object.jsonProducerbill) : "",
      comment: isSet(object.comment) ? String(object.comment) : "",
    };
  },

  toJSON(message: MsgPrepareBillResponse): unknown {
    const obj: any = {};
    message.jsonCustomerbill !== undefined && (obj.jsonCustomerbill = message.jsonCustomerbill);
    message.jsonProducerbill !== undefined && (obj.jsonProducerbill = message.jsonProducerbill);
    message.comment !== undefined && (obj.comment = message.comment);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPrepareBillResponse>, I>>(object: I): MsgPrepareBillResponse {
    const message = createBaseMsgPrepareBillResponse();
    message.jsonCustomerbill = object.jsonCustomerbill ?? "";
    message.jsonProducerbill = object.jsonProducerbill ?? "";
    message.comment = object.comment ?? "";
    return message;
  },
};

function createBaseMsgCreateCustomerbillingline(): MsgCreateCustomerbillingline {
  return {
    creator: "",
    customerDeviceID: "",
    cycleID: 0,
    lineid: 0,
    paid: false,
    producerDeviceID: "",
    billContractID: "",
    lineWh: 0,
    lineWhPrice: 0,
    curency: "",
    lineWhTotalPrice: 0,
    phase: 0,
  };
}

export const MsgCreateCustomerbillingline = {
  encode(message: MsgCreateCustomerbillingline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.customerDeviceID !== "") {
      writer.uint32(18).string(message.customerDeviceID);
    }
    if (message.cycleID !== 0) {
      writer.uint32(24).uint64(message.cycleID);
    }
    if (message.lineid !== 0) {
      writer.uint32(32).uint64(message.lineid);
    }
    if (message.paid === true) {
      writer.uint32(40).bool(message.paid);
    }
    if (message.producerDeviceID !== "") {
      writer.uint32(50).string(message.producerDeviceID);
    }
    if (message.billContractID !== "") {
      writer.uint32(58).string(message.billContractID);
    }
    if (message.lineWh !== 0) {
      writer.uint32(64).uint64(message.lineWh);
    }
    if (message.lineWhPrice !== 0) {
      writer.uint32(72).uint64(message.lineWhPrice);
    }
    if (message.curency !== "") {
      writer.uint32(82).string(message.curency);
    }
    if (message.lineWhTotalPrice !== 0) {
      writer.uint32(88).uint64(message.lineWhTotalPrice);
    }
    if (message.phase !== 0) {
      writer.uint32(96).uint64(message.phase);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCustomerbillingline {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCustomerbillingline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.customerDeviceID = reader.string();
          break;
        case 3:
          message.cycleID = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.lineid = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.paid = reader.bool();
          break;
        case 6:
          message.producerDeviceID = reader.string();
          break;
        case 7:
          message.billContractID = reader.string();
          break;
        case 8:
          message.lineWh = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.lineWhPrice = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.curency = reader.string();
          break;
        case 11:
          message.lineWhTotalPrice = longToNumber(reader.uint64() as Long);
          break;
        case 12:
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      customerDeviceID: isSet(object.customerDeviceID) ? String(object.customerDeviceID) : "",
      cycleID: isSet(object.cycleID) ? Number(object.cycleID) : 0,
      lineid: isSet(object.lineid) ? Number(object.lineid) : 0,
      paid: isSet(object.paid) ? Boolean(object.paid) : false,
      producerDeviceID: isSet(object.producerDeviceID) ? String(object.producerDeviceID) : "",
      billContractID: isSet(object.billContractID) ? String(object.billContractID) : "",
      lineWh: isSet(object.lineWh) ? Number(object.lineWh) : 0,
      lineWhPrice: isSet(object.lineWhPrice) ? Number(object.lineWhPrice) : 0,
      curency: isSet(object.curency) ? String(object.curency) : "",
      lineWhTotalPrice: isSet(object.lineWhTotalPrice) ? Number(object.lineWhTotalPrice) : 0,
      phase: isSet(object.phase) ? Number(object.phase) : 0,
    };
  },

  toJSON(message: MsgCreateCustomerbillingline): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.customerDeviceID !== undefined && (obj.customerDeviceID = message.customerDeviceID);
    message.cycleID !== undefined && (obj.cycleID = Math.round(message.cycleID));
    message.lineid !== undefined && (obj.lineid = Math.round(message.lineid));
    message.paid !== undefined && (obj.paid = message.paid);
    message.producerDeviceID !== undefined && (obj.producerDeviceID = message.producerDeviceID);
    message.billContractID !== undefined && (obj.billContractID = message.billContractID);
    message.lineWh !== undefined && (obj.lineWh = Math.round(message.lineWh));
    message.lineWhPrice !== undefined && (obj.lineWhPrice = Math.round(message.lineWhPrice));
    message.curency !== undefined && (obj.curency = message.curency);
    message.lineWhTotalPrice !== undefined && (obj.lineWhTotalPrice = Math.round(message.lineWhTotalPrice));
    message.phase !== undefined && (obj.phase = Math.round(message.phase));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateCustomerbillingline>, I>>(object: I): MsgCreateCustomerbillingline {
    const message = createBaseMsgCreateCustomerbillingline();
    message.creator = object.creator ?? "";
    message.customerDeviceID = object.customerDeviceID ?? "";
    message.cycleID = object.cycleID ?? 0;
    message.lineid = object.lineid ?? 0;
    message.paid = object.paid ?? false;
    message.producerDeviceID = object.producerDeviceID ?? "";
    message.billContractID = object.billContractID ?? "";
    message.lineWh = object.lineWh ?? 0;
    message.lineWhPrice = object.lineWhPrice ?? 0;
    message.curency = object.curency ?? "";
    message.lineWhTotalPrice = object.lineWhTotalPrice ?? 0;
    message.phase = object.phase ?? 0;
    return message;
  },
};

function createBaseMsgCreateCustomerbillinglineResponse(): MsgCreateCustomerbillinglineResponse {
  return {};
}

export const MsgCreateCustomerbillinglineResponse = {
  encode(_: MsgCreateCustomerbillinglineResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCustomerbillinglineResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCustomerbillinglineResponse();
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
    return {};
  },

  toJSON(_: MsgCreateCustomerbillinglineResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateCustomerbillinglineResponse>, I>>(
    _: I,
  ): MsgCreateCustomerbillinglineResponse {
    const message = createBaseMsgCreateCustomerbillinglineResponse();
    return message;
  },
};

function createBaseMsgUpdateCustomerbillingline(): MsgUpdateCustomerbillingline {
  return {
    creator: "",
    customerDeviceID: "",
    cycleID: 0,
    lineid: 0,
    paid: false,
    producerDeviceID: "",
    billContractID: "",
    lineWh: 0,
    lineWhPrice: 0,
    curency: "",
    lineWhTotalPrice: 0,
    phase: 0,
  };
}

export const MsgUpdateCustomerbillingline = {
  encode(message: MsgUpdateCustomerbillingline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.customerDeviceID !== "") {
      writer.uint32(18).string(message.customerDeviceID);
    }
    if (message.cycleID !== 0) {
      writer.uint32(24).uint64(message.cycleID);
    }
    if (message.lineid !== 0) {
      writer.uint32(32).uint64(message.lineid);
    }
    if (message.paid === true) {
      writer.uint32(40).bool(message.paid);
    }
    if (message.producerDeviceID !== "") {
      writer.uint32(50).string(message.producerDeviceID);
    }
    if (message.billContractID !== "") {
      writer.uint32(58).string(message.billContractID);
    }
    if (message.lineWh !== 0) {
      writer.uint32(64).uint64(message.lineWh);
    }
    if (message.lineWhPrice !== 0) {
      writer.uint32(72).uint64(message.lineWhPrice);
    }
    if (message.curency !== "") {
      writer.uint32(82).string(message.curency);
    }
    if (message.lineWhTotalPrice !== 0) {
      writer.uint32(88).uint64(message.lineWhTotalPrice);
    }
    if (message.phase !== 0) {
      writer.uint32(96).uint64(message.phase);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCustomerbillingline {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCustomerbillingline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.customerDeviceID = reader.string();
          break;
        case 3:
          message.cycleID = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.lineid = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.paid = reader.bool();
          break;
        case 6:
          message.producerDeviceID = reader.string();
          break;
        case 7:
          message.billContractID = reader.string();
          break;
        case 8:
          message.lineWh = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.lineWhPrice = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.curency = reader.string();
          break;
        case 11:
          message.lineWhTotalPrice = longToNumber(reader.uint64() as Long);
          break;
        case 12:
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      customerDeviceID: isSet(object.customerDeviceID) ? String(object.customerDeviceID) : "",
      cycleID: isSet(object.cycleID) ? Number(object.cycleID) : 0,
      lineid: isSet(object.lineid) ? Number(object.lineid) : 0,
      paid: isSet(object.paid) ? Boolean(object.paid) : false,
      producerDeviceID: isSet(object.producerDeviceID) ? String(object.producerDeviceID) : "",
      billContractID: isSet(object.billContractID) ? String(object.billContractID) : "",
      lineWh: isSet(object.lineWh) ? Number(object.lineWh) : 0,
      lineWhPrice: isSet(object.lineWhPrice) ? Number(object.lineWhPrice) : 0,
      curency: isSet(object.curency) ? String(object.curency) : "",
      lineWhTotalPrice: isSet(object.lineWhTotalPrice) ? Number(object.lineWhTotalPrice) : 0,
      phase: isSet(object.phase) ? Number(object.phase) : 0,
    };
  },

  toJSON(message: MsgUpdateCustomerbillingline): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.customerDeviceID !== undefined && (obj.customerDeviceID = message.customerDeviceID);
    message.cycleID !== undefined && (obj.cycleID = Math.round(message.cycleID));
    message.lineid !== undefined && (obj.lineid = Math.round(message.lineid));
    message.paid !== undefined && (obj.paid = message.paid);
    message.producerDeviceID !== undefined && (obj.producerDeviceID = message.producerDeviceID);
    message.billContractID !== undefined && (obj.billContractID = message.billContractID);
    message.lineWh !== undefined && (obj.lineWh = Math.round(message.lineWh));
    message.lineWhPrice !== undefined && (obj.lineWhPrice = Math.round(message.lineWhPrice));
    message.curency !== undefined && (obj.curency = message.curency);
    message.lineWhTotalPrice !== undefined && (obj.lineWhTotalPrice = Math.round(message.lineWhTotalPrice));
    message.phase !== undefined && (obj.phase = Math.round(message.phase));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateCustomerbillingline>, I>>(object: I): MsgUpdateCustomerbillingline {
    const message = createBaseMsgUpdateCustomerbillingline();
    message.creator = object.creator ?? "";
    message.customerDeviceID = object.customerDeviceID ?? "";
    message.cycleID = object.cycleID ?? 0;
    message.lineid = object.lineid ?? 0;
    message.paid = object.paid ?? false;
    message.producerDeviceID = object.producerDeviceID ?? "";
    message.billContractID = object.billContractID ?? "";
    message.lineWh = object.lineWh ?? 0;
    message.lineWhPrice = object.lineWhPrice ?? 0;
    message.curency = object.curency ?? "";
    message.lineWhTotalPrice = object.lineWhTotalPrice ?? 0;
    message.phase = object.phase ?? 0;
    return message;
  },
};

function createBaseMsgUpdateCustomerbillinglineResponse(): MsgUpdateCustomerbillinglineResponse {
  return {};
}

export const MsgUpdateCustomerbillinglineResponse = {
  encode(_: MsgUpdateCustomerbillinglineResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCustomerbillinglineResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCustomerbillinglineResponse();
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
    return {};
  },

  toJSON(_: MsgUpdateCustomerbillinglineResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateCustomerbillinglineResponse>, I>>(
    _: I,
  ): MsgUpdateCustomerbillinglineResponse {
    const message = createBaseMsgUpdateCustomerbillinglineResponse();
    return message;
  },
};

function createBaseMsgDeleteCustomerbillingline(): MsgDeleteCustomerbillingline {
  return { creator: "", customerDeviceID: "", cycleID: 0, lineid: 0, paid: false };
}

export const MsgDeleteCustomerbillingline = {
  encode(message: MsgDeleteCustomerbillingline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.customerDeviceID !== "") {
      writer.uint32(18).string(message.customerDeviceID);
    }
    if (message.cycleID !== 0) {
      writer.uint32(24).uint64(message.cycleID);
    }
    if (message.lineid !== 0) {
      writer.uint32(32).uint64(message.lineid);
    }
    if (message.paid === true) {
      writer.uint32(40).bool(message.paid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteCustomerbillingline {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteCustomerbillingline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.customerDeviceID = reader.string();
          break;
        case 3:
          message.cycleID = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.lineid = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.paid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCustomerbillingline {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      customerDeviceID: isSet(object.customerDeviceID) ? String(object.customerDeviceID) : "",
      cycleID: isSet(object.cycleID) ? Number(object.cycleID) : 0,
      lineid: isSet(object.lineid) ? Number(object.lineid) : 0,
      paid: isSet(object.paid) ? Boolean(object.paid) : false,
    };
  },

  toJSON(message: MsgDeleteCustomerbillingline): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.customerDeviceID !== undefined && (obj.customerDeviceID = message.customerDeviceID);
    message.cycleID !== undefined && (obj.cycleID = Math.round(message.cycleID));
    message.lineid !== undefined && (obj.lineid = Math.round(message.lineid));
    message.paid !== undefined && (obj.paid = message.paid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteCustomerbillingline>, I>>(object: I): MsgDeleteCustomerbillingline {
    const message = createBaseMsgDeleteCustomerbillingline();
    message.creator = object.creator ?? "";
    message.customerDeviceID = object.customerDeviceID ?? "";
    message.cycleID = object.cycleID ?? 0;
    message.lineid = object.lineid ?? 0;
    message.paid = object.paid ?? false;
    return message;
  },
};

function createBaseMsgDeleteCustomerbillinglineResponse(): MsgDeleteCustomerbillinglineResponse {
  return {};
}

export const MsgDeleteCustomerbillinglineResponse = {
  encode(_: MsgDeleteCustomerbillinglineResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteCustomerbillinglineResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteCustomerbillinglineResponse();
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
    return {};
  },

  toJSON(_: MsgDeleteCustomerbillinglineResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteCustomerbillinglineResponse>, I>>(
    _: I,
  ): MsgDeleteCustomerbillinglineResponse {
    const message = createBaseMsgDeleteCustomerbillinglineResponse();
    return message;
  },
};

function createBaseMsgCreateCustomerbills(): MsgCreateCustomerbills {
  return {
    creator: "",
    billCycleID: 0,
    customerDeviceID: "",
    billDate: 0,
    billTotalWh: 0,
    billTotalPrice: 0,
    billCurrency: "",
    billValid: false,
    paid: false,
  };
}

export const MsgCreateCustomerbills = {
  encode(message: MsgCreateCustomerbills, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.billCycleID !== 0) {
      writer.uint32(16).uint64(message.billCycleID);
    }
    if (message.customerDeviceID !== "") {
      writer.uint32(26).string(message.customerDeviceID);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCustomerbills {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCustomerbills();
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
          message.customerDeviceID = reader.string();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      billCycleID: isSet(object.billCycleID) ? Number(object.billCycleID) : 0,
      customerDeviceID: isSet(object.customerDeviceID) ? String(object.customerDeviceID) : "",
      billDate: isSet(object.billDate) ? Number(object.billDate) : 0,
      billTotalWh: isSet(object.billTotalWh) ? Number(object.billTotalWh) : 0,
      billTotalPrice: isSet(object.billTotalPrice) ? Number(object.billTotalPrice) : 0,
      billCurrency: isSet(object.billCurrency) ? String(object.billCurrency) : "",
      billValid: isSet(object.billValid) ? Boolean(object.billValid) : false,
      paid: isSet(object.paid) ? Boolean(object.paid) : false,
    };
  },

  toJSON(message: MsgCreateCustomerbills): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.billCycleID !== undefined && (obj.billCycleID = Math.round(message.billCycleID));
    message.customerDeviceID !== undefined && (obj.customerDeviceID = message.customerDeviceID);
    message.billDate !== undefined && (obj.billDate = Math.round(message.billDate));
    message.billTotalWh !== undefined && (obj.billTotalWh = Math.round(message.billTotalWh));
    message.billTotalPrice !== undefined && (obj.billTotalPrice = Math.round(message.billTotalPrice));
    message.billCurrency !== undefined && (obj.billCurrency = message.billCurrency);
    message.billValid !== undefined && (obj.billValid = message.billValid);
    message.paid !== undefined && (obj.paid = message.paid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateCustomerbills>, I>>(object: I): MsgCreateCustomerbills {
    const message = createBaseMsgCreateCustomerbills();
    message.creator = object.creator ?? "";
    message.billCycleID = object.billCycleID ?? 0;
    message.customerDeviceID = object.customerDeviceID ?? "";
    message.billDate = object.billDate ?? 0;
    message.billTotalWh = object.billTotalWh ?? 0;
    message.billTotalPrice = object.billTotalPrice ?? 0;
    message.billCurrency = object.billCurrency ?? "";
    message.billValid = object.billValid ?? false;
    message.paid = object.paid ?? false;
    return message;
  },
};

function createBaseMsgCreateCustomerbillsResponse(): MsgCreateCustomerbillsResponse {
  return {};
}

export const MsgCreateCustomerbillsResponse = {
  encode(_: MsgCreateCustomerbillsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCustomerbillsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCustomerbillsResponse();
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
    return {};
  },

  toJSON(_: MsgCreateCustomerbillsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateCustomerbillsResponse>, I>>(_: I): MsgCreateCustomerbillsResponse {
    const message = createBaseMsgCreateCustomerbillsResponse();
    return message;
  },
};

function createBaseMsgUpdateCustomerbills(): MsgUpdateCustomerbills {
  return {
    creator: "",
    billCycleID: 0,
    customerDeviceID: "",
    billDate: 0,
    billTotalWh: 0,
    billTotalPrice: 0,
    billCurrency: "",
    billValid: false,
    paid: false,
  };
}

export const MsgUpdateCustomerbills = {
  encode(message: MsgUpdateCustomerbills, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.billCycleID !== 0) {
      writer.uint32(16).uint64(message.billCycleID);
    }
    if (message.customerDeviceID !== "") {
      writer.uint32(26).string(message.customerDeviceID);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCustomerbills {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCustomerbills();
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
          message.customerDeviceID = reader.string();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      billCycleID: isSet(object.billCycleID) ? Number(object.billCycleID) : 0,
      customerDeviceID: isSet(object.customerDeviceID) ? String(object.customerDeviceID) : "",
      billDate: isSet(object.billDate) ? Number(object.billDate) : 0,
      billTotalWh: isSet(object.billTotalWh) ? Number(object.billTotalWh) : 0,
      billTotalPrice: isSet(object.billTotalPrice) ? Number(object.billTotalPrice) : 0,
      billCurrency: isSet(object.billCurrency) ? String(object.billCurrency) : "",
      billValid: isSet(object.billValid) ? Boolean(object.billValid) : false,
      paid: isSet(object.paid) ? Boolean(object.paid) : false,
    };
  },

  toJSON(message: MsgUpdateCustomerbills): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.billCycleID !== undefined && (obj.billCycleID = Math.round(message.billCycleID));
    message.customerDeviceID !== undefined && (obj.customerDeviceID = message.customerDeviceID);
    message.billDate !== undefined && (obj.billDate = Math.round(message.billDate));
    message.billTotalWh !== undefined && (obj.billTotalWh = Math.round(message.billTotalWh));
    message.billTotalPrice !== undefined && (obj.billTotalPrice = Math.round(message.billTotalPrice));
    message.billCurrency !== undefined && (obj.billCurrency = message.billCurrency);
    message.billValid !== undefined && (obj.billValid = message.billValid);
    message.paid !== undefined && (obj.paid = message.paid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateCustomerbills>, I>>(object: I): MsgUpdateCustomerbills {
    const message = createBaseMsgUpdateCustomerbills();
    message.creator = object.creator ?? "";
    message.billCycleID = object.billCycleID ?? 0;
    message.customerDeviceID = object.customerDeviceID ?? "";
    message.billDate = object.billDate ?? 0;
    message.billTotalWh = object.billTotalWh ?? 0;
    message.billTotalPrice = object.billTotalPrice ?? 0;
    message.billCurrency = object.billCurrency ?? "";
    message.billValid = object.billValid ?? false;
    message.paid = object.paid ?? false;
    return message;
  },
};

function createBaseMsgUpdateCustomerbillsResponse(): MsgUpdateCustomerbillsResponse {
  return {};
}

export const MsgUpdateCustomerbillsResponse = {
  encode(_: MsgUpdateCustomerbillsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCustomerbillsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCustomerbillsResponse();
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
    return {};
  },

  toJSON(_: MsgUpdateCustomerbillsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateCustomerbillsResponse>, I>>(_: I): MsgUpdateCustomerbillsResponse {
    const message = createBaseMsgUpdateCustomerbillsResponse();
    return message;
  },
};

function createBaseMsgDeleteCustomerbills(): MsgDeleteCustomerbills {
  return { creator: "", billCycleID: 0, customerDeviceID: "" };
}

export const MsgDeleteCustomerbills = {
  encode(message: MsgDeleteCustomerbills, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.billCycleID !== 0) {
      writer.uint32(16).uint64(message.billCycleID);
    }
    if (message.customerDeviceID !== "") {
      writer.uint32(26).string(message.customerDeviceID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteCustomerbills {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteCustomerbills();
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
          message.customerDeviceID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCustomerbills {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      billCycleID: isSet(object.billCycleID) ? Number(object.billCycleID) : 0,
      customerDeviceID: isSet(object.customerDeviceID) ? String(object.customerDeviceID) : "",
    };
  },

  toJSON(message: MsgDeleteCustomerbills): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.billCycleID !== undefined && (obj.billCycleID = Math.round(message.billCycleID));
    message.customerDeviceID !== undefined && (obj.customerDeviceID = message.customerDeviceID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteCustomerbills>, I>>(object: I): MsgDeleteCustomerbills {
    const message = createBaseMsgDeleteCustomerbills();
    message.creator = object.creator ?? "";
    message.billCycleID = object.billCycleID ?? 0;
    message.customerDeviceID = object.customerDeviceID ?? "";
    return message;
  },
};

function createBaseMsgDeleteCustomerbillsResponse(): MsgDeleteCustomerbillsResponse {
  return {};
}

export const MsgDeleteCustomerbillsResponse = {
  encode(_: MsgDeleteCustomerbillsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteCustomerbillsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteCustomerbillsResponse();
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
    return {};
  },

  toJSON(_: MsgDeleteCustomerbillsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteCustomerbillsResponse>, I>>(_: I): MsgDeleteCustomerbillsResponse {
    const message = createBaseMsgDeleteCustomerbillsResponse();
    return message;
  },
};

function createBaseMsgCreateProducerbillingline(): MsgCreateProducerbillingline {
  return {
    creator: "",
    producerDeviceID: "",
    cycleID: 0,
    lineid: 0,
    paid: false,
    customerDeviceID: "",
    billContractID: "",
    lineWh: 0,
    lineWhPrice: 0,
    curency: "",
    lineWhTotalPrice: 0,
    phase: 0,
  };
}

export const MsgCreateProducerbillingline = {
  encode(message: MsgCreateProducerbillingline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.paid === true) {
      writer.uint32(40).bool(message.paid);
    }
    if (message.customerDeviceID !== "") {
      writer.uint32(50).string(message.customerDeviceID);
    }
    if (message.billContractID !== "") {
      writer.uint32(58).string(message.billContractID);
    }
    if (message.lineWh !== 0) {
      writer.uint32(64).uint64(message.lineWh);
    }
    if (message.lineWhPrice !== 0) {
      writer.uint32(72).uint64(message.lineWhPrice);
    }
    if (message.curency !== "") {
      writer.uint32(82).string(message.curency);
    }
    if (message.lineWhTotalPrice !== 0) {
      writer.uint32(88).uint64(message.lineWhTotalPrice);
    }
    if (message.phase !== 0) {
      writer.uint32(96).uint64(message.phase);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProducerbillingline {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProducerbillingline();
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
          message.paid = reader.bool();
          break;
        case 6:
          message.customerDeviceID = reader.string();
          break;
        case 7:
          message.billContractID = reader.string();
          break;
        case 8:
          message.lineWh = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.lineWhPrice = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.curency = reader.string();
          break;
        case 11:
          message.lineWhTotalPrice = longToNumber(reader.uint64() as Long);
          break;
        case 12:
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      producerDeviceID: isSet(object.producerDeviceID) ? String(object.producerDeviceID) : "",
      cycleID: isSet(object.cycleID) ? Number(object.cycleID) : 0,
      lineid: isSet(object.lineid) ? Number(object.lineid) : 0,
      paid: isSet(object.paid) ? Boolean(object.paid) : false,
      customerDeviceID: isSet(object.customerDeviceID) ? String(object.customerDeviceID) : "",
      billContractID: isSet(object.billContractID) ? String(object.billContractID) : "",
      lineWh: isSet(object.lineWh) ? Number(object.lineWh) : 0,
      lineWhPrice: isSet(object.lineWhPrice) ? Number(object.lineWhPrice) : 0,
      curency: isSet(object.curency) ? String(object.curency) : "",
      lineWhTotalPrice: isSet(object.lineWhTotalPrice) ? Number(object.lineWhTotalPrice) : 0,
      phase: isSet(object.phase) ? Number(object.phase) : 0,
    };
  },

  toJSON(message: MsgCreateProducerbillingline): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.producerDeviceID !== undefined && (obj.producerDeviceID = message.producerDeviceID);
    message.cycleID !== undefined && (obj.cycleID = Math.round(message.cycleID));
    message.lineid !== undefined && (obj.lineid = Math.round(message.lineid));
    message.paid !== undefined && (obj.paid = message.paid);
    message.customerDeviceID !== undefined && (obj.customerDeviceID = message.customerDeviceID);
    message.billContractID !== undefined && (obj.billContractID = message.billContractID);
    message.lineWh !== undefined && (obj.lineWh = Math.round(message.lineWh));
    message.lineWhPrice !== undefined && (obj.lineWhPrice = Math.round(message.lineWhPrice));
    message.curency !== undefined && (obj.curency = message.curency);
    message.lineWhTotalPrice !== undefined && (obj.lineWhTotalPrice = Math.round(message.lineWhTotalPrice));
    message.phase !== undefined && (obj.phase = Math.round(message.phase));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateProducerbillingline>, I>>(object: I): MsgCreateProducerbillingline {
    const message = createBaseMsgCreateProducerbillingline();
    message.creator = object.creator ?? "";
    message.producerDeviceID = object.producerDeviceID ?? "";
    message.cycleID = object.cycleID ?? 0;
    message.lineid = object.lineid ?? 0;
    message.paid = object.paid ?? false;
    message.customerDeviceID = object.customerDeviceID ?? "";
    message.billContractID = object.billContractID ?? "";
    message.lineWh = object.lineWh ?? 0;
    message.lineWhPrice = object.lineWhPrice ?? 0;
    message.curency = object.curency ?? "";
    message.lineWhTotalPrice = object.lineWhTotalPrice ?? 0;
    message.phase = object.phase ?? 0;
    return message;
  },
};

function createBaseMsgCreateProducerbillinglineResponse(): MsgCreateProducerbillinglineResponse {
  return {};
}

export const MsgCreateProducerbillinglineResponse = {
  encode(_: MsgCreateProducerbillinglineResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProducerbillinglineResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProducerbillinglineResponse();
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
    return {};
  },

  toJSON(_: MsgCreateProducerbillinglineResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateProducerbillinglineResponse>, I>>(
    _: I,
  ): MsgCreateProducerbillinglineResponse {
    const message = createBaseMsgCreateProducerbillinglineResponse();
    return message;
  },
};

function createBaseMsgUpdateProducerbillingline(): MsgUpdateProducerbillingline {
  return {
    creator: "",
    producerDeviceID: "",
    cycleID: 0,
    lineid: 0,
    paid: false,
    customerDeviceID: "",
    billContractID: "",
    lineWh: 0,
    lineWhPrice: 0,
    curency: "",
    lineWhTotalPrice: 0,
    phase: 0,
  };
}

export const MsgUpdateProducerbillingline = {
  encode(message: MsgUpdateProducerbillingline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.paid === true) {
      writer.uint32(40).bool(message.paid);
    }
    if (message.customerDeviceID !== "") {
      writer.uint32(50).string(message.customerDeviceID);
    }
    if (message.billContractID !== "") {
      writer.uint32(58).string(message.billContractID);
    }
    if (message.lineWh !== 0) {
      writer.uint32(64).uint64(message.lineWh);
    }
    if (message.lineWhPrice !== 0) {
      writer.uint32(72).uint64(message.lineWhPrice);
    }
    if (message.curency !== "") {
      writer.uint32(82).string(message.curency);
    }
    if (message.lineWhTotalPrice !== 0) {
      writer.uint32(88).uint64(message.lineWhTotalPrice);
    }
    if (message.phase !== 0) {
      writer.uint32(96).uint64(message.phase);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProducerbillingline {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProducerbillingline();
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
          message.paid = reader.bool();
          break;
        case 6:
          message.customerDeviceID = reader.string();
          break;
        case 7:
          message.billContractID = reader.string();
          break;
        case 8:
          message.lineWh = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.lineWhPrice = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.curency = reader.string();
          break;
        case 11:
          message.lineWhTotalPrice = longToNumber(reader.uint64() as Long);
          break;
        case 12:
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      producerDeviceID: isSet(object.producerDeviceID) ? String(object.producerDeviceID) : "",
      cycleID: isSet(object.cycleID) ? Number(object.cycleID) : 0,
      lineid: isSet(object.lineid) ? Number(object.lineid) : 0,
      paid: isSet(object.paid) ? Boolean(object.paid) : false,
      customerDeviceID: isSet(object.customerDeviceID) ? String(object.customerDeviceID) : "",
      billContractID: isSet(object.billContractID) ? String(object.billContractID) : "",
      lineWh: isSet(object.lineWh) ? Number(object.lineWh) : 0,
      lineWhPrice: isSet(object.lineWhPrice) ? Number(object.lineWhPrice) : 0,
      curency: isSet(object.curency) ? String(object.curency) : "",
      lineWhTotalPrice: isSet(object.lineWhTotalPrice) ? Number(object.lineWhTotalPrice) : 0,
      phase: isSet(object.phase) ? Number(object.phase) : 0,
    };
  },

  toJSON(message: MsgUpdateProducerbillingline): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.producerDeviceID !== undefined && (obj.producerDeviceID = message.producerDeviceID);
    message.cycleID !== undefined && (obj.cycleID = Math.round(message.cycleID));
    message.lineid !== undefined && (obj.lineid = Math.round(message.lineid));
    message.paid !== undefined && (obj.paid = message.paid);
    message.customerDeviceID !== undefined && (obj.customerDeviceID = message.customerDeviceID);
    message.billContractID !== undefined && (obj.billContractID = message.billContractID);
    message.lineWh !== undefined && (obj.lineWh = Math.round(message.lineWh));
    message.lineWhPrice !== undefined && (obj.lineWhPrice = Math.round(message.lineWhPrice));
    message.curency !== undefined && (obj.curency = message.curency);
    message.lineWhTotalPrice !== undefined && (obj.lineWhTotalPrice = Math.round(message.lineWhTotalPrice));
    message.phase !== undefined && (obj.phase = Math.round(message.phase));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateProducerbillingline>, I>>(object: I): MsgUpdateProducerbillingline {
    const message = createBaseMsgUpdateProducerbillingline();
    message.creator = object.creator ?? "";
    message.producerDeviceID = object.producerDeviceID ?? "";
    message.cycleID = object.cycleID ?? 0;
    message.lineid = object.lineid ?? 0;
    message.paid = object.paid ?? false;
    message.customerDeviceID = object.customerDeviceID ?? "";
    message.billContractID = object.billContractID ?? "";
    message.lineWh = object.lineWh ?? 0;
    message.lineWhPrice = object.lineWhPrice ?? 0;
    message.curency = object.curency ?? "";
    message.lineWhTotalPrice = object.lineWhTotalPrice ?? 0;
    message.phase = object.phase ?? 0;
    return message;
  },
};

function createBaseMsgUpdateProducerbillinglineResponse(): MsgUpdateProducerbillinglineResponse {
  return {};
}

export const MsgUpdateProducerbillinglineResponse = {
  encode(_: MsgUpdateProducerbillinglineResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProducerbillinglineResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProducerbillinglineResponse();
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
    return {};
  },

  toJSON(_: MsgUpdateProducerbillinglineResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateProducerbillinglineResponse>, I>>(
    _: I,
  ): MsgUpdateProducerbillinglineResponse {
    const message = createBaseMsgUpdateProducerbillinglineResponse();
    return message;
  },
};

function createBaseMsgDeleteProducerbillingline(): MsgDeleteProducerbillingline {
  return { creator: "", producerDeviceID: "", cycleID: 0, lineid: 0, paid: false };
}

export const MsgDeleteProducerbillingline = {
  encode(message: MsgDeleteProducerbillingline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.paid === true) {
      writer.uint32(40).bool(message.paid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProducerbillingline {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProducerbillingline();
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
          message.paid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteProducerbillingline {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      producerDeviceID: isSet(object.producerDeviceID) ? String(object.producerDeviceID) : "",
      cycleID: isSet(object.cycleID) ? Number(object.cycleID) : 0,
      lineid: isSet(object.lineid) ? Number(object.lineid) : 0,
      paid: isSet(object.paid) ? Boolean(object.paid) : false,
    };
  },

  toJSON(message: MsgDeleteProducerbillingline): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.producerDeviceID !== undefined && (obj.producerDeviceID = message.producerDeviceID);
    message.cycleID !== undefined && (obj.cycleID = Math.round(message.cycleID));
    message.lineid !== undefined && (obj.lineid = Math.round(message.lineid));
    message.paid !== undefined && (obj.paid = message.paid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteProducerbillingline>, I>>(object: I): MsgDeleteProducerbillingline {
    const message = createBaseMsgDeleteProducerbillingline();
    message.creator = object.creator ?? "";
    message.producerDeviceID = object.producerDeviceID ?? "";
    message.cycleID = object.cycleID ?? 0;
    message.lineid = object.lineid ?? 0;
    message.paid = object.paid ?? false;
    return message;
  },
};

function createBaseMsgDeleteProducerbillinglineResponse(): MsgDeleteProducerbillinglineResponse {
  return {};
}

export const MsgDeleteProducerbillinglineResponse = {
  encode(_: MsgDeleteProducerbillinglineResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProducerbillinglineResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProducerbillinglineResponse();
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
    return {};
  },

  toJSON(_: MsgDeleteProducerbillinglineResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteProducerbillinglineResponse>, I>>(
    _: I,
  ): MsgDeleteProducerbillinglineResponse {
    const message = createBaseMsgDeleteProducerbillinglineResponse();
    return message;
  },
};

function createBaseMsgCreateProducerbills(): MsgCreateProducerbills {
  return {
    creator: "",
    billCycleID: 0,
    producerDeviceID: "",
    billDate: 0,
    billTotalWh: 0,
    billTotalPrice: 0,
    billCurrency: "",
    billValid: false,
    paid: false,
  };
}

export const MsgCreateProducerbills = {
  encode(message: MsgCreateProducerbills, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.billCycleID !== 0) {
      writer.uint32(16).uint64(message.billCycleID);
    }
    if (message.producerDeviceID !== "") {
      writer.uint32(26).string(message.producerDeviceID);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProducerbills {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProducerbills();
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
          message.producerDeviceID = reader.string();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      billCycleID: isSet(object.billCycleID) ? Number(object.billCycleID) : 0,
      producerDeviceID: isSet(object.producerDeviceID) ? String(object.producerDeviceID) : "",
      billDate: isSet(object.billDate) ? Number(object.billDate) : 0,
      billTotalWh: isSet(object.billTotalWh) ? Number(object.billTotalWh) : 0,
      billTotalPrice: isSet(object.billTotalPrice) ? Number(object.billTotalPrice) : 0,
      billCurrency: isSet(object.billCurrency) ? String(object.billCurrency) : "",
      billValid: isSet(object.billValid) ? Boolean(object.billValid) : false,
      paid: isSet(object.paid) ? Boolean(object.paid) : false,
    };
  },

  toJSON(message: MsgCreateProducerbills): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.billCycleID !== undefined && (obj.billCycleID = Math.round(message.billCycleID));
    message.producerDeviceID !== undefined && (obj.producerDeviceID = message.producerDeviceID);
    message.billDate !== undefined && (obj.billDate = Math.round(message.billDate));
    message.billTotalWh !== undefined && (obj.billTotalWh = Math.round(message.billTotalWh));
    message.billTotalPrice !== undefined && (obj.billTotalPrice = Math.round(message.billTotalPrice));
    message.billCurrency !== undefined && (obj.billCurrency = message.billCurrency);
    message.billValid !== undefined && (obj.billValid = message.billValid);
    message.paid !== undefined && (obj.paid = message.paid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateProducerbills>, I>>(object: I): MsgCreateProducerbills {
    const message = createBaseMsgCreateProducerbills();
    message.creator = object.creator ?? "";
    message.billCycleID = object.billCycleID ?? 0;
    message.producerDeviceID = object.producerDeviceID ?? "";
    message.billDate = object.billDate ?? 0;
    message.billTotalWh = object.billTotalWh ?? 0;
    message.billTotalPrice = object.billTotalPrice ?? 0;
    message.billCurrency = object.billCurrency ?? "";
    message.billValid = object.billValid ?? false;
    message.paid = object.paid ?? false;
    return message;
  },
};

function createBaseMsgCreateProducerbillsResponse(): MsgCreateProducerbillsResponse {
  return {};
}

export const MsgCreateProducerbillsResponse = {
  encode(_: MsgCreateProducerbillsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProducerbillsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProducerbillsResponse();
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
    return {};
  },

  toJSON(_: MsgCreateProducerbillsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateProducerbillsResponse>, I>>(_: I): MsgCreateProducerbillsResponse {
    const message = createBaseMsgCreateProducerbillsResponse();
    return message;
  },
};

function createBaseMsgUpdateProducerbills(): MsgUpdateProducerbills {
  return {
    creator: "",
    billCycleID: 0,
    producerDeviceID: "",
    billDate: 0,
    billTotalWh: 0,
    billTotalPrice: 0,
    billCurrency: "",
    billValid: false,
    paid: false,
  };
}

export const MsgUpdateProducerbills = {
  encode(message: MsgUpdateProducerbills, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.billCycleID !== 0) {
      writer.uint32(16).uint64(message.billCycleID);
    }
    if (message.producerDeviceID !== "") {
      writer.uint32(26).string(message.producerDeviceID);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProducerbills {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProducerbills();
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
          message.producerDeviceID = reader.string();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      billCycleID: isSet(object.billCycleID) ? Number(object.billCycleID) : 0,
      producerDeviceID: isSet(object.producerDeviceID) ? String(object.producerDeviceID) : "",
      billDate: isSet(object.billDate) ? Number(object.billDate) : 0,
      billTotalWh: isSet(object.billTotalWh) ? Number(object.billTotalWh) : 0,
      billTotalPrice: isSet(object.billTotalPrice) ? Number(object.billTotalPrice) : 0,
      billCurrency: isSet(object.billCurrency) ? String(object.billCurrency) : "",
      billValid: isSet(object.billValid) ? Boolean(object.billValid) : false,
      paid: isSet(object.paid) ? Boolean(object.paid) : false,
    };
  },

  toJSON(message: MsgUpdateProducerbills): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.billCycleID !== undefined && (obj.billCycleID = Math.round(message.billCycleID));
    message.producerDeviceID !== undefined && (obj.producerDeviceID = message.producerDeviceID);
    message.billDate !== undefined && (obj.billDate = Math.round(message.billDate));
    message.billTotalWh !== undefined && (obj.billTotalWh = Math.round(message.billTotalWh));
    message.billTotalPrice !== undefined && (obj.billTotalPrice = Math.round(message.billTotalPrice));
    message.billCurrency !== undefined && (obj.billCurrency = message.billCurrency);
    message.billValid !== undefined && (obj.billValid = message.billValid);
    message.paid !== undefined && (obj.paid = message.paid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateProducerbills>, I>>(object: I): MsgUpdateProducerbills {
    const message = createBaseMsgUpdateProducerbills();
    message.creator = object.creator ?? "";
    message.billCycleID = object.billCycleID ?? 0;
    message.producerDeviceID = object.producerDeviceID ?? "";
    message.billDate = object.billDate ?? 0;
    message.billTotalWh = object.billTotalWh ?? 0;
    message.billTotalPrice = object.billTotalPrice ?? 0;
    message.billCurrency = object.billCurrency ?? "";
    message.billValid = object.billValid ?? false;
    message.paid = object.paid ?? false;
    return message;
  },
};

function createBaseMsgUpdateProducerbillsResponse(): MsgUpdateProducerbillsResponse {
  return {};
}

export const MsgUpdateProducerbillsResponse = {
  encode(_: MsgUpdateProducerbillsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProducerbillsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProducerbillsResponse();
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
    return {};
  },

  toJSON(_: MsgUpdateProducerbillsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateProducerbillsResponse>, I>>(_: I): MsgUpdateProducerbillsResponse {
    const message = createBaseMsgUpdateProducerbillsResponse();
    return message;
  },
};

function createBaseMsgDeleteProducerbills(): MsgDeleteProducerbills {
  return { creator: "", billCycleID: 0, producerDeviceID: "" };
}

export const MsgDeleteProducerbills = {
  encode(message: MsgDeleteProducerbills, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.billCycleID !== 0) {
      writer.uint32(16).uint64(message.billCycleID);
    }
    if (message.producerDeviceID !== "") {
      writer.uint32(26).string(message.producerDeviceID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProducerbills {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProducerbills();
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
          message.producerDeviceID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteProducerbills {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      billCycleID: isSet(object.billCycleID) ? Number(object.billCycleID) : 0,
      producerDeviceID: isSet(object.producerDeviceID) ? String(object.producerDeviceID) : "",
    };
  },

  toJSON(message: MsgDeleteProducerbills): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.billCycleID !== undefined && (obj.billCycleID = Math.round(message.billCycleID));
    message.producerDeviceID !== undefined && (obj.producerDeviceID = message.producerDeviceID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteProducerbills>, I>>(object: I): MsgDeleteProducerbills {
    const message = createBaseMsgDeleteProducerbills();
    message.creator = object.creator ?? "";
    message.billCycleID = object.billCycleID ?? 0;
    message.producerDeviceID = object.producerDeviceID ?? "";
    return message;
  },
};

function createBaseMsgDeleteProducerbillsResponse(): MsgDeleteProducerbillsResponse {
  return {};
}

export const MsgDeleteProducerbillsResponse = {
  encode(_: MsgDeleteProducerbillsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProducerbillsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProducerbillsResponse();
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
    return {};
  },

  toJSON(_: MsgDeleteProducerbillsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteProducerbillsResponse>, I>>(_: I): MsgDeleteProducerbillsResponse {
    const message = createBaseMsgDeleteProducerbillsResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Record(request: MsgRecord): Promise<MsgRecordResponse>;
  Record3(request: MsgRecord3): Promise<MsgRecord3Response>;
  CreatePowerPurchaseContract(request: MsgCreatePowerPurchaseContract): Promise<MsgCreatePowerPurchaseContractResponse>;
  UpdatePowerPurchaseContract(request: MsgUpdatePowerPurchaseContract): Promise<MsgUpdatePowerPurchaseContractResponse>;
  DeletePowerPurchaseContract(request: MsgDeletePowerPurchaseContract): Promise<MsgDeletePowerPurchaseContractResponse>;
  CreatePpaMap(request: MsgCreatePpaMap): Promise<MsgCreatePpaMapResponse>;
  UpdatePpaMap(request: MsgUpdatePpaMap): Promise<MsgUpdatePpaMapResponse>;
  DeletePpaMap(request: MsgDeletePpaMap): Promise<MsgDeletePpaMapResponse>;
  CreateBillingcycles(request: MsgCreateBillingcycles): Promise<MsgCreateBillingcyclesResponse>;
  UpdateBillingcycles(request: MsgUpdateBillingcycles): Promise<MsgUpdateBillingcyclesResponse>;
  DeleteBillingcycles(request: MsgDeleteBillingcycles): Promise<MsgDeleteBillingcyclesResponse>;
  PrepareBill(request: MsgPrepareBill): Promise<MsgPrepareBillResponse>;
  CreateCustomerbillingline(request: MsgCreateCustomerbillingline): Promise<MsgCreateCustomerbillinglineResponse>;
  UpdateCustomerbillingline(request: MsgUpdateCustomerbillingline): Promise<MsgUpdateCustomerbillinglineResponse>;
  DeleteCustomerbillingline(request: MsgDeleteCustomerbillingline): Promise<MsgDeleteCustomerbillinglineResponse>;
  CreateCustomerbills(request: MsgCreateCustomerbills): Promise<MsgCreateCustomerbillsResponse>;
  UpdateCustomerbills(request: MsgUpdateCustomerbills): Promise<MsgUpdateCustomerbillsResponse>;
  DeleteCustomerbills(request: MsgDeleteCustomerbills): Promise<MsgDeleteCustomerbillsResponse>;
  CreateProducerbillingline(request: MsgCreateProducerbillingline): Promise<MsgCreateProducerbillinglineResponse>;
  UpdateProducerbillingline(request: MsgUpdateProducerbillingline): Promise<MsgUpdateProducerbillinglineResponse>;
  DeleteProducerbillingline(request: MsgDeleteProducerbillingline): Promise<MsgDeleteProducerbillinglineResponse>;
  CreateProducerbills(request: MsgCreateProducerbills): Promise<MsgCreateProducerbillsResponse>;
  UpdateProducerbills(request: MsgUpdateProducerbills): Promise<MsgUpdateProducerbillsResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteProducerbills(request: MsgDeleteProducerbills): Promise<MsgDeleteProducerbillsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Record = this.Record.bind(this);
    this.Record3 = this.Record3.bind(this);
    this.CreatePowerPurchaseContract = this.CreatePowerPurchaseContract.bind(this);
    this.UpdatePowerPurchaseContract = this.UpdatePowerPurchaseContract.bind(this);
    this.DeletePowerPurchaseContract = this.DeletePowerPurchaseContract.bind(this);
    this.CreatePpaMap = this.CreatePpaMap.bind(this);
    this.UpdatePpaMap = this.UpdatePpaMap.bind(this);
    this.DeletePpaMap = this.DeletePpaMap.bind(this);
    this.CreateBillingcycles = this.CreateBillingcycles.bind(this);
    this.UpdateBillingcycles = this.UpdateBillingcycles.bind(this);
    this.DeleteBillingcycles = this.DeleteBillingcycles.bind(this);
    this.PrepareBill = this.PrepareBill.bind(this);
    this.CreateCustomerbillingline = this.CreateCustomerbillingline.bind(this);
    this.UpdateCustomerbillingline = this.UpdateCustomerbillingline.bind(this);
    this.DeleteCustomerbillingline = this.DeleteCustomerbillingline.bind(this);
    this.CreateCustomerbills = this.CreateCustomerbills.bind(this);
    this.UpdateCustomerbills = this.UpdateCustomerbills.bind(this);
    this.DeleteCustomerbills = this.DeleteCustomerbills.bind(this);
    this.CreateProducerbillingline = this.CreateProducerbillingline.bind(this);
    this.UpdateProducerbillingline = this.UpdateProducerbillingline.bind(this);
    this.DeleteProducerbillingline = this.DeleteProducerbillingline.bind(this);
    this.CreateProducerbills = this.CreateProducerbills.bind(this);
    this.UpdateProducerbills = this.UpdateProducerbills.bind(this);
    this.DeleteProducerbills = this.DeleteProducerbills.bind(this);
  }
  Record(request: MsgRecord): Promise<MsgRecordResponse> {
    const data = MsgRecord.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "Record", data);
    return promise.then((data) => MsgRecordResponse.decode(new _m0.Reader(data)));
  }

  Record3(request: MsgRecord3): Promise<MsgRecord3Response> {
    const data = MsgRecord3.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "Record3", data);
    return promise.then((data) => MsgRecord3Response.decode(new _m0.Reader(data)));
  }

  CreatePowerPurchaseContract(
    request: MsgCreatePowerPurchaseContract,
  ): Promise<MsgCreatePowerPurchaseContractResponse> {
    const data = MsgCreatePowerPurchaseContract.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "CreatePowerPurchaseContract", data);
    return promise.then((data) => MsgCreatePowerPurchaseContractResponse.decode(new _m0.Reader(data)));
  }

  UpdatePowerPurchaseContract(
    request: MsgUpdatePowerPurchaseContract,
  ): Promise<MsgUpdatePowerPurchaseContractResponse> {
    const data = MsgUpdatePowerPurchaseContract.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "UpdatePowerPurchaseContract", data);
    return promise.then((data) => MsgUpdatePowerPurchaseContractResponse.decode(new _m0.Reader(data)));
  }

  DeletePowerPurchaseContract(
    request: MsgDeletePowerPurchaseContract,
  ): Promise<MsgDeletePowerPurchaseContractResponse> {
    const data = MsgDeletePowerPurchaseContract.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "DeletePowerPurchaseContract", data);
    return promise.then((data) => MsgDeletePowerPurchaseContractResponse.decode(new _m0.Reader(data)));
  }

  CreatePpaMap(request: MsgCreatePpaMap): Promise<MsgCreatePpaMapResponse> {
    const data = MsgCreatePpaMap.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "CreatePpaMap", data);
    return promise.then((data) => MsgCreatePpaMapResponse.decode(new _m0.Reader(data)));
  }

  UpdatePpaMap(request: MsgUpdatePpaMap): Promise<MsgUpdatePpaMapResponse> {
    const data = MsgUpdatePpaMap.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "UpdatePpaMap", data);
    return promise.then((data) => MsgUpdatePpaMapResponse.decode(new _m0.Reader(data)));
  }

  DeletePpaMap(request: MsgDeletePpaMap): Promise<MsgDeletePpaMapResponse> {
    const data = MsgDeletePpaMap.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "DeletePpaMap", data);
    return promise.then((data) => MsgDeletePpaMapResponse.decode(new _m0.Reader(data)));
  }

  CreateBillingcycles(request: MsgCreateBillingcycles): Promise<MsgCreateBillingcyclesResponse> {
    const data = MsgCreateBillingcycles.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "CreateBillingcycles", data);
    return promise.then((data) => MsgCreateBillingcyclesResponse.decode(new _m0.Reader(data)));
  }

  UpdateBillingcycles(request: MsgUpdateBillingcycles): Promise<MsgUpdateBillingcyclesResponse> {
    const data = MsgUpdateBillingcycles.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "UpdateBillingcycles", data);
    return promise.then((data) => MsgUpdateBillingcyclesResponse.decode(new _m0.Reader(data)));
  }

  DeleteBillingcycles(request: MsgDeleteBillingcycles): Promise<MsgDeleteBillingcyclesResponse> {
    const data = MsgDeleteBillingcycles.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "DeleteBillingcycles", data);
    return promise.then((data) => MsgDeleteBillingcyclesResponse.decode(new _m0.Reader(data)));
  }

  PrepareBill(request: MsgPrepareBill): Promise<MsgPrepareBillResponse> {
    const data = MsgPrepareBill.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "PrepareBill", data);
    return promise.then((data) => MsgPrepareBillResponse.decode(new _m0.Reader(data)));
  }

  CreateCustomerbillingline(request: MsgCreateCustomerbillingline): Promise<MsgCreateCustomerbillinglineResponse> {
    const data = MsgCreateCustomerbillingline.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "CreateCustomerbillingline", data);
    return promise.then((data) => MsgCreateCustomerbillinglineResponse.decode(new _m0.Reader(data)));
  }

  UpdateCustomerbillingline(request: MsgUpdateCustomerbillingline): Promise<MsgUpdateCustomerbillinglineResponse> {
    const data = MsgUpdateCustomerbillingline.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "UpdateCustomerbillingline", data);
    return promise.then((data) => MsgUpdateCustomerbillinglineResponse.decode(new _m0.Reader(data)));
  }

  DeleteCustomerbillingline(request: MsgDeleteCustomerbillingline): Promise<MsgDeleteCustomerbillinglineResponse> {
    const data = MsgDeleteCustomerbillingline.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "DeleteCustomerbillingline", data);
    return promise.then((data) => MsgDeleteCustomerbillinglineResponse.decode(new _m0.Reader(data)));
  }

  CreateCustomerbills(request: MsgCreateCustomerbills): Promise<MsgCreateCustomerbillsResponse> {
    const data = MsgCreateCustomerbills.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "CreateCustomerbills", data);
    return promise.then((data) => MsgCreateCustomerbillsResponse.decode(new _m0.Reader(data)));
  }

  UpdateCustomerbills(request: MsgUpdateCustomerbills): Promise<MsgUpdateCustomerbillsResponse> {
    const data = MsgUpdateCustomerbills.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "UpdateCustomerbills", data);
    return promise.then((data) => MsgUpdateCustomerbillsResponse.decode(new _m0.Reader(data)));
  }

  DeleteCustomerbills(request: MsgDeleteCustomerbills): Promise<MsgDeleteCustomerbillsResponse> {
    const data = MsgDeleteCustomerbills.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "DeleteCustomerbills", data);
    return promise.then((data) => MsgDeleteCustomerbillsResponse.decode(new _m0.Reader(data)));
  }

  CreateProducerbillingline(request: MsgCreateProducerbillingline): Promise<MsgCreateProducerbillinglineResponse> {
    const data = MsgCreateProducerbillingline.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "CreateProducerbillingline", data);
    return promise.then((data) => MsgCreateProducerbillinglineResponse.decode(new _m0.Reader(data)));
  }

  UpdateProducerbillingline(request: MsgUpdateProducerbillingline): Promise<MsgUpdateProducerbillinglineResponse> {
    const data = MsgUpdateProducerbillingline.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "UpdateProducerbillingline", data);
    return promise.then((data) => MsgUpdateProducerbillinglineResponse.decode(new _m0.Reader(data)));
  }

  DeleteProducerbillingline(request: MsgDeleteProducerbillingline): Promise<MsgDeleteProducerbillinglineResponse> {
    const data = MsgDeleteProducerbillingline.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "DeleteProducerbillingline", data);
    return promise.then((data) => MsgDeleteProducerbillinglineResponse.decode(new _m0.Reader(data)));
  }

  CreateProducerbills(request: MsgCreateProducerbills): Promise<MsgCreateProducerbillsResponse> {
    const data = MsgCreateProducerbills.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "CreateProducerbills", data);
    return promise.then((data) => MsgCreateProducerbillsResponse.decode(new _m0.Reader(data)));
  }

  UpdateProducerbills(request: MsgUpdateProducerbills): Promise<MsgUpdateProducerbillsResponse> {
    const data = MsgUpdateProducerbills.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "UpdateProducerbills", data);
    return promise.then((data) => MsgUpdateProducerbillsResponse.decode(new _m0.Reader(data)));
  }

  DeleteProducerbills(request: MsgDeleteProducerbills): Promise<MsgDeleteProducerbillsResponse> {
    const data = MsgDeleteProducerbills.encode(request).finish();
    const promise = this.rpc.request("electra.meter.Msg", "DeleteProducerbills", data);
    return promise.then((data) => MsgDeleteProducerbillsResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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

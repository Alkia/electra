import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRecord3 } from "./types/meter/tx";
import { MsgDeletePowerPurchaseContract } from "./types/meter/tx";
import { MsgRecord } from "./types/meter/tx";
import { MsgUpdatePowerPurchaseContract } from "./types/meter/tx";
import { MsgCreatePowerPurchaseContract } from "./types/meter/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/electra.meter.MsgRecord3", MsgRecord3],
    ["/electra.meter.MsgDeletePowerPurchaseContract", MsgDeletePowerPurchaseContract],
    ["/electra.meter.MsgRecord", MsgRecord],
    ["/electra.meter.MsgUpdatePowerPurchaseContract", MsgUpdatePowerPurchaseContract],
    ["/electra.meter.MsgCreatePowerPurchaseContract", MsgCreatePowerPurchaseContract],
    
];

export { msgTypes }
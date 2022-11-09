import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRecord } from "./types/electra/meter/tx";
import { MsgCreatePowerPurchaseContract } from "./types/electra/meter/tx";
import { MsgRecord3 } from "./types/electra/meter/tx";
import { MsgUpdatePowerPurchaseContract } from "./types/electra/meter/tx";
import { MsgDeletePowerPurchaseContract } from "./types/electra/meter/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/electra.meter.MsgRecord", MsgRecord],
    ["/electra.meter.MsgCreatePowerPurchaseContract", MsgCreatePowerPurchaseContract],
    ["/electra.meter.MsgRecord3", MsgRecord3],
    ["/electra.meter.MsgUpdatePowerPurchaseContract", MsgUpdatePowerPurchaseContract],
    ["/electra.meter.MsgDeletePowerPurchaseContract", MsgDeletePowerPurchaseContract],
    
];

export { msgTypes }
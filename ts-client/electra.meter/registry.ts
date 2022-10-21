import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRecord } from "./types/electra/meter/tx";
import { MsgRecord3 } from "./types/electra/meter/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/electra.meter.MsgRecord", MsgRecord],
    ["/electra.meter.MsgRecord3", MsgRecord3],
    
];

export { msgTypes }
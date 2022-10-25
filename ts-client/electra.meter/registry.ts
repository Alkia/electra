import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRecord3 } from "./types/electra/meter/tx";
import { MsgRecord } from "./types/electra/meter/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/electra.meter.MsgRecord3", MsgRecord3],
    ["/electra.meter.MsgRecord", MsgRecord],
    
];

export { msgTypes }
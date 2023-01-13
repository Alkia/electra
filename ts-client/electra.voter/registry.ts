import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdatePoll } from "./types/electra/voter/tx";
import { MsgDeletePoll } from "./types/electra/voter/tx";
import { MsgCreatePoll } from "./types/electra/voter/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/electra.voter.MsgUpdatePoll", MsgUpdatePoll],
    ["/electra.voter.MsgDeletePoll", MsgDeletePoll],
    ["/electra.voter.MsgCreatePoll", MsgCreatePoll],
    
];

export { msgTypes }
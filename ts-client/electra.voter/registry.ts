import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgDeletePoll } from "./types/electra/voter/tx";
import { MsgCreatePoll } from "./types/electra/voter/tx";
import { MsgUpdatePoll } from "./types/electra/voter/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/electra.voter.MsgDeletePoll", MsgDeletePoll],
    ["/electra.voter.MsgCreatePoll", MsgCreatePoll],
    ["/electra.voter.MsgUpdatePoll", MsgUpdatePoll],
    
];

export { msgTypes }
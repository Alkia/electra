import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgDeletePoll } from "./types/electra/voter/tx";
import { MsgDeleteVote } from "./types/electra/voter/tx";
import { MsgCreatePoll } from "./types/electra/voter/tx";
import { MsgCreateVote } from "./types/electra/voter/tx";
import { MsgUpdateVote } from "./types/electra/voter/tx";
import { MsgUpdatePoll } from "./types/electra/voter/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/electra.voter.MsgDeletePoll", MsgDeletePoll],
    ["/electra.voter.MsgDeleteVote", MsgDeleteVote],
    ["/electra.voter.MsgCreatePoll", MsgCreatePoll],
    ["/electra.voter.MsgCreateVote", MsgCreateVote],
    ["/electra.voter.MsgUpdateVote", MsgUpdateVote],
    ["/electra.voter.MsgUpdatePoll", MsgUpdatePoll],
    
];

export { msgTypes }
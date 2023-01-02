import { Client, registry, MissingWalletError } from 'electra-client-ts'

import { EventCreateGroup } from "electra-client-ts/cosmos.group.v1/types"
import { EventUpdateGroup } from "electra-client-ts/cosmos.group.v1/types"
import { EventCreateGroupPolicy } from "electra-client-ts/cosmos.group.v1/types"
import { EventUpdateGroupPolicy } from "electra-client-ts/cosmos.group.v1/types"
import { EventSubmitProposal } from "electra-client-ts/cosmos.group.v1/types"
import { EventWithdrawProposal } from "electra-client-ts/cosmos.group.v1/types"
import { EventVote } from "electra-client-ts/cosmos.group.v1/types"
import { EventExec } from "electra-client-ts/cosmos.group.v1/types"
import { EventLeaveGroup } from "electra-client-ts/cosmos.group.v1/types"
import { Member } from "electra-client-ts/cosmos.group.v1/types"
import { MemberRequest } from "electra-client-ts/cosmos.group.v1/types"
import { ThresholdDecisionPolicy } from "electra-client-ts/cosmos.group.v1/types"
import { PercentageDecisionPolicy } from "electra-client-ts/cosmos.group.v1/types"
import { DecisionPolicyWindows } from "electra-client-ts/cosmos.group.v1/types"
import { GroupInfo } from "electra-client-ts/cosmos.group.v1/types"
import { GroupMember } from "electra-client-ts/cosmos.group.v1/types"
import { GroupPolicyInfo } from "electra-client-ts/cosmos.group.v1/types"
import { Proposal } from "electra-client-ts/cosmos.group.v1/types"
import { TallyResult } from "electra-client-ts/cosmos.group.v1/types"
import { Vote } from "electra-client-ts/cosmos.group.v1/types"


export { EventCreateGroup, EventUpdateGroup, EventCreateGroupPolicy, EventUpdateGroupPolicy, EventSubmitProposal, EventWithdrawProposal, EventVote, EventExec, EventLeaveGroup, Member, MemberRequest, ThresholdDecisionPolicy, PercentageDecisionPolicy, DecisionPolicyWindows, GroupInfo, GroupMember, GroupPolicyInfo, Proposal, TallyResult, Vote };

function initClient(vuexGetters) {
	return new Client(vuexGetters['common/env/getEnv'], vuexGetters['common/wallet/signer'])
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	let structure: {fields: Field[]} = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const getDefaultState = () => {
	return {
				GroupInfo: {},
				GroupPolicyInfo: {},
				GroupMembers: {},
				GroupsByAdmin: {},
				GroupPoliciesByGroup: {},
				GroupPoliciesByAdmin: {},
				Proposal: {},
				ProposalsByGroupPolicy: {},
				VoteByProposalVoter: {},
				VotesByProposal: {},
				VotesByVoter: {},
				GroupsByMember: {},
				TallyResult: {},
				
				_Structure: {
						EventCreateGroup: getStructure(EventCreateGroup.fromPartial({})),
						EventUpdateGroup: getStructure(EventUpdateGroup.fromPartial({})),
						EventCreateGroupPolicy: getStructure(EventCreateGroupPolicy.fromPartial({})),
						EventUpdateGroupPolicy: getStructure(EventUpdateGroupPolicy.fromPartial({})),
						EventSubmitProposal: getStructure(EventSubmitProposal.fromPartial({})),
						EventWithdrawProposal: getStructure(EventWithdrawProposal.fromPartial({})),
						EventVote: getStructure(EventVote.fromPartial({})),
						EventExec: getStructure(EventExec.fromPartial({})),
						EventLeaveGroup: getStructure(EventLeaveGroup.fromPartial({})),
						Member: getStructure(Member.fromPartial({})),
						MemberRequest: getStructure(MemberRequest.fromPartial({})),
						ThresholdDecisionPolicy: getStructure(ThresholdDecisionPolicy.fromPartial({})),
						PercentageDecisionPolicy: getStructure(PercentageDecisionPolicy.fromPartial({})),
						DecisionPolicyWindows: getStructure(DecisionPolicyWindows.fromPartial({})),
						GroupInfo: getStructure(GroupInfo.fromPartial({})),
						GroupMember: getStructure(GroupMember.fromPartial({})),
						GroupPolicyInfo: getStructure(GroupPolicyInfo.fromPartial({})),
						Proposal: getStructure(Proposal.fromPartial({})),
						TallyResult: getStructure(TallyResult.fromPartial({})),
						Vote: getStructure(Vote.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getGroupInfo: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GroupInfo[JSON.stringify(params)] ?? {}
		},
				getGroupPolicyInfo: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GroupPolicyInfo[JSON.stringify(params)] ?? {}
		},
				getGroupMembers: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GroupMembers[JSON.stringify(params)] ?? {}
		},
				getGroupsByAdmin: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GroupsByAdmin[JSON.stringify(params)] ?? {}
		},
				getGroupPoliciesByGroup: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GroupPoliciesByGroup[JSON.stringify(params)] ?? {}
		},
				getGroupPoliciesByAdmin: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GroupPoliciesByAdmin[JSON.stringify(params)] ?? {}
		},
				getProposal: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Proposal[JSON.stringify(params)] ?? {}
		},
				getProposalsByGroupPolicy: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ProposalsByGroupPolicy[JSON.stringify(params)] ?? {}
		},
				getVoteByProposalVoter: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.VoteByProposalVoter[JSON.stringify(params)] ?? {}
		},
				getVotesByProposal: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.VotesByProposal[JSON.stringify(params)] ?? {}
		},
				getVotesByVoter: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.VotesByVoter[JSON.stringify(params)] ?? {}
		},
				getGroupsByMember: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GroupsByMember[JSON.stringify(params)] ?? {}
		},
				getTallyResult: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.TallyResult[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: cosmos.group.v1 initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryGroupInfo({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosGroupV1.query.queryGroupInfo( key.group_id)).data
				
					
				commit('QUERY', { query: 'GroupInfo', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGroupInfo', payload: { options: { all }, params: {...key},query }})
				return getters['getGroupInfo']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGroupInfo API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGroupPolicyInfo({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosGroupV1.query.queryGroupPolicyInfo( key.address)).data
				
					
				commit('QUERY', { query: 'GroupPolicyInfo', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGroupPolicyInfo', payload: { options: { all }, params: {...key},query }})
				return getters['getGroupPolicyInfo']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGroupPolicyInfo API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGroupMembers({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosGroupV1.query.queryGroupMembers( key.group_id, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosGroupV1.query.queryGroupMembers( key.group_id, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'GroupMembers', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGroupMembers', payload: { options: { all }, params: {...key},query }})
				return getters['getGroupMembers']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGroupMembers API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGroupsByAdmin({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosGroupV1.query.queryGroupsByAdmin( key.admin, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosGroupV1.query.queryGroupsByAdmin( key.admin, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'GroupsByAdmin', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGroupsByAdmin', payload: { options: { all }, params: {...key},query }})
				return getters['getGroupsByAdmin']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGroupsByAdmin API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGroupPoliciesByGroup({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosGroupV1.query.queryGroupPoliciesByGroup( key.group_id, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosGroupV1.query.queryGroupPoliciesByGroup( key.group_id, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'GroupPoliciesByGroup', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGroupPoliciesByGroup', payload: { options: { all }, params: {...key},query }})
				return getters['getGroupPoliciesByGroup']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGroupPoliciesByGroup API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGroupPoliciesByAdmin({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosGroupV1.query.queryGroupPoliciesByAdmin( key.admin, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosGroupV1.query.queryGroupPoliciesByAdmin( key.admin, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'GroupPoliciesByAdmin', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGroupPoliciesByAdmin', payload: { options: { all }, params: {...key},query }})
				return getters['getGroupPoliciesByAdmin']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGroupPoliciesByAdmin API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryProposal({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosGroupV1.query.queryProposal( key.proposal_id)).data
				
					
				commit('QUERY', { query: 'Proposal', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryProposal', payload: { options: { all }, params: {...key},query }})
				return getters['getProposal']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryProposal API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryProposalsByGroupPolicy({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosGroupV1.query.queryProposalsByGroupPolicy( key.address, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosGroupV1.query.queryProposalsByGroupPolicy( key.address, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ProposalsByGroupPolicy', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryProposalsByGroupPolicy', payload: { options: { all }, params: {...key},query }})
				return getters['getProposalsByGroupPolicy']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryProposalsByGroupPolicy API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryVoteByProposalVoter({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosGroupV1.query.queryVoteByProposalVoter( key.proposal_id,  key.voter)).data
				
					
				commit('QUERY', { query: 'VoteByProposalVoter', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryVoteByProposalVoter', payload: { options: { all }, params: {...key},query }})
				return getters['getVoteByProposalVoter']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryVoteByProposalVoter API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryVotesByProposal({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosGroupV1.query.queryVotesByProposal( key.proposal_id, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosGroupV1.query.queryVotesByProposal( key.proposal_id, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'VotesByProposal', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryVotesByProposal', payload: { options: { all }, params: {...key},query }})
				return getters['getVotesByProposal']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryVotesByProposal API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryVotesByVoter({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosGroupV1.query.queryVotesByVoter( key.voter, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosGroupV1.query.queryVotesByVoter( key.voter, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'VotesByVoter', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryVotesByVoter', payload: { options: { all }, params: {...key},query }})
				return getters['getVotesByVoter']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryVotesByVoter API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGroupsByMember({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosGroupV1.query.queryGroupsByMember( key.address, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosGroupV1.query.queryGroupsByMember( key.address, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'GroupsByMember', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGroupsByMember', payload: { options: { all }, params: {...key},query }})
				return getters['getGroupsByMember']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGroupsByMember API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryTallyResult({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosGroupV1.query.queryTallyResult( key.proposal_id)).data
				
					
				commit('QUERY', { query: 'TallyResult', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryTallyResult', payload: { options: { all }, params: {...key},query }})
				return getters['getTallyResult']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryTallyResult API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgUpdateGroupMetadata({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.CosmosGroupV1.tx.sendMsgUpdateGroupMetadata({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupMetadata:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateGroupMetadata:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateGroupPolicyMetadata({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.CosmosGroupV1.tx.sendMsgUpdateGroupPolicyMetadata({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupPolicyMetadata:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateGroupPolicyMetadata:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateGroupPolicy({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.CosmosGroupV1.tx.sendMsgCreateGroupPolicy({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateGroupPolicy:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateGroupPolicy:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateGroupPolicyAdmin({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.CosmosGroupV1.tx.sendMsgUpdateGroupPolicyAdmin({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupPolicyAdmin:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateGroupPolicyAdmin:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgWithdrawProposal({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.CosmosGroupV1.tx.sendMsgWithdrawProposal({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawProposal:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgWithdrawProposal:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgVote({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.CosmosGroupV1.tx.sendMsgVote({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgVote:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgVote:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgExec({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.CosmosGroupV1.tx.sendMsgExec({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgExec:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgExec:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateGroupPolicyDecisionPolicy({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.CosmosGroupV1.tx.sendMsgUpdateGroupPolicyDecisionPolicy({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupPolicyDecisionPolicy:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateGroupPolicyDecisionPolicy:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgLeaveGroup({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.CosmosGroupV1.tx.sendMsgLeaveGroup({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgLeaveGroup:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgLeaveGroup:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateGroupMembers({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.CosmosGroupV1.tx.sendMsgUpdateGroupMembers({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupMembers:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateGroupMembers:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateGroupAdmin({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.CosmosGroupV1.tx.sendMsgUpdateGroupAdmin({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupAdmin:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateGroupAdmin:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateGroupWithPolicy({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.CosmosGroupV1.tx.sendMsgCreateGroupWithPolicy({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateGroupWithPolicy:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateGroupWithPolicy:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSubmitProposal({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.CosmosGroupV1.tx.sendMsgSubmitProposal({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSubmitProposal:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSubmitProposal:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateGroup({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.CosmosGroupV1.tx.sendMsgCreateGroup({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateGroup:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateGroup:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgUpdateGroupMetadata({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgUpdateGroupMetadata({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupMetadata:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateGroupMetadata:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateGroupPolicyMetadata({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgUpdateGroupPolicyMetadata({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupPolicyMetadata:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateGroupPolicyMetadata:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateGroupPolicy({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgCreateGroupPolicy({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateGroupPolicy:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateGroupPolicy:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateGroupPolicyAdmin({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgUpdateGroupPolicyAdmin({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupPolicyAdmin:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateGroupPolicyAdmin:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgWithdrawProposal({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgWithdrawProposal({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawProposal:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgWithdrawProposal:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgVote({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgVote({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgVote:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgVote:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgExec({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgExec({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgExec:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgExec:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateGroupPolicyDecisionPolicy({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgUpdateGroupPolicyDecisionPolicy({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupPolicyDecisionPolicy:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateGroupPolicyDecisionPolicy:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgLeaveGroup({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgLeaveGroup({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgLeaveGroup:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgLeaveGroup:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateGroupMembers({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgUpdateGroupMembers({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupMembers:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateGroupMembers:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateGroupAdmin({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgUpdateGroupAdmin({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateGroupAdmin:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateGroupAdmin:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateGroupWithPolicy({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgCreateGroupWithPolicy({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateGroupWithPolicy:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateGroupWithPolicy:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSubmitProposal({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgSubmitProposal({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSubmitProposal:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSubmitProposal:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateGroup({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosGroupV1.tx.msgCreateGroup({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateGroup:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateGroup:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}

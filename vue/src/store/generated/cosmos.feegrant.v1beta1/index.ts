import { Client, registry, MissingWalletError } from 'electra-client-ts'

import { BasicAllowance } from "electra-client-ts/cosmos.feegrant.v1beta1/types"
import { PeriodicAllowance } from "electra-client-ts/cosmos.feegrant.v1beta1/types"
import { AllowedMsgAllowance } from "electra-client-ts/cosmos.feegrant.v1beta1/types"
import { Grant } from "electra-client-ts/cosmos.feegrant.v1beta1/types"


export { BasicAllowance, PeriodicAllowance, AllowedMsgAllowance, Grant };

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
				Allowance: {},
				Allowances: {},
				AllowancesByGranter: {},
				
				_Structure: {
						BasicAllowance: getStructure(BasicAllowance.fromPartial({})),
						PeriodicAllowance: getStructure(PeriodicAllowance.fromPartial({})),
						AllowedMsgAllowance: getStructure(AllowedMsgAllowance.fromPartial({})),
						Grant: getStructure(Grant.fromPartial({})),
						
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
				getAllowance: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Allowance[JSON.stringify(params)] ?? {}
		},
				getAllowances: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Allowances[JSON.stringify(params)] ?? {}
		},
				getAllowancesByGranter: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.AllowancesByGranter[JSON.stringify(params)] ?? {}
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
			console.log('Vuex module: cosmos.feegrant.v1beta1 initialized!')
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
		
		
		
		 		
		
		
		async QueryAllowance({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosFeegrantV1Beta1.query.queryAllowance( key.granter,  key.grantee)).data
				
					
				commit('QUERY', { query: 'Allowance', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAllowance', payload: { options: { all }, params: {...key},query }})
				return getters['getAllowance']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryAllowance API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryAllowances({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosFeegrantV1Beta1.query.queryAllowances( key.grantee, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosFeegrantV1Beta1.query.queryAllowances( key.grantee, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Allowances', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAllowances', payload: { options: { all }, params: {...key},query }})
				return getters['getAllowances']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryAllowances API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryAllowancesByGranter({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosFeegrantV1Beta1.query.queryAllowancesByGranter( key.granter, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosFeegrantV1Beta1.query.queryAllowancesByGranter( key.granter, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'AllowancesByGranter', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAllowancesByGranter', payload: { options: { all }, params: {...key},query }})
				return getters['getAllowancesByGranter']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryAllowancesByGranter API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgGrantAllowance({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.CosmosFeegrantV1Beta1.tx.sendMsgGrantAllowance({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgGrantAllowance:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgGrantAllowance:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRevokeAllowance({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.CosmosFeegrantV1Beta1.tx.sendMsgRevokeAllowance({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRevokeAllowance:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRevokeAllowance:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgGrantAllowance({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosFeegrantV1Beta1.tx.msgGrantAllowance({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgGrantAllowance:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgGrantAllowance:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgRevokeAllowance({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosFeegrantV1Beta1.tx.msgRevokeAllowance({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRevokeAllowance:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRevokeAllowance:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}

import { Client, registry, MissingWalletError } from 'electra-client-ts'

import { GenericAuthorization } from "electra-client-ts/cosmos.authz.v1beta1/types"
import { Grant } from "electra-client-ts/cosmos.authz.v1beta1/types"
import { GrantAuthorization } from "electra-client-ts/cosmos.authz.v1beta1/types"
import { GrantQueueItem } from "electra-client-ts/cosmos.authz.v1beta1/types"
import { EventGrant } from "electra-client-ts/cosmos.authz.v1beta1/types"
import { EventRevoke } from "electra-client-ts/cosmos.authz.v1beta1/types"


export { GenericAuthorization, Grant, GrantAuthorization, GrantQueueItem, EventGrant, EventRevoke };

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
				Grants: {},
				GranterGrants: {},
				GranteeGrants: {},
				
				_Structure: {
						GenericAuthorization: getStructure(GenericAuthorization.fromPartial({})),
						Grant: getStructure(Grant.fromPartial({})),
						GrantAuthorization: getStructure(GrantAuthorization.fromPartial({})),
						GrantQueueItem: getStructure(GrantQueueItem.fromPartial({})),
						EventGrant: getStructure(EventGrant.fromPartial({})),
						EventRevoke: getStructure(EventRevoke.fromPartial({})),
						
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
				getGrants: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Grants[JSON.stringify(params)] ?? {}
		},
				getGranterGrants: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GranterGrants[JSON.stringify(params)] ?? {}
		},
				getGranteeGrants: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GranteeGrants[JSON.stringify(params)] ?? {}
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
			console.log('Vuex module: cosmos.authz.v1beta1 initialized!')
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
		
		
		
		 		
		
		
		async QueryGrants({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosAuthzV1Beta1.query.queryGrants(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosAuthzV1Beta1.query.queryGrants({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Grants', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGrants', payload: { options: { all }, params: {...key},query }})
				return getters['getGrants']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGrants API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGranterGrants({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosAuthzV1Beta1.query.queryGranterGrants( key.granter, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosAuthzV1Beta1.query.queryGranterGrants( key.granter, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'GranterGrants', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGranterGrants', payload: { options: { all }, params: {...key},query }})
				return getters['getGranterGrants']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGranterGrants API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGranteeGrants({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosAuthzV1Beta1.query.queryGranteeGrants( key.grantee, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosAuthzV1Beta1.query.queryGranteeGrants( key.grantee, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'GranteeGrants', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGranteeGrants', payload: { options: { all }, params: {...key},query }})
				return getters['getGranteeGrants']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGranteeGrants API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgExec({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.CosmosAuthzV1Beta1.tx.sendMsgExec({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgExec:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgExec:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRevoke({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.CosmosAuthzV1Beta1.tx.sendMsgRevoke({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRevoke:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRevoke:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgGrant({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.CosmosAuthzV1Beta1.tx.sendMsgGrant({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgGrant:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgGrant:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgExec({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosAuthzV1Beta1.tx.msgExec({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgExec:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgExec:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgRevoke({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosAuthzV1Beta1.tx.msgRevoke({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRevoke:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRevoke:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgGrant({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosAuthzV1Beta1.tx.msgGrant({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgGrant:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgGrant:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}

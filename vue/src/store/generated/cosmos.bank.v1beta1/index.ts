import { Client, registry, MissingWalletError } from 'electra-client-ts'

import { SendAuthorization } from "electra-client-ts/cosmos.bank.v1beta1/types"
import { Params } from "electra-client-ts/cosmos.bank.v1beta1/types"
import { SendEnabled } from "electra-client-ts/cosmos.bank.v1beta1/types"
import { Input } from "electra-client-ts/cosmos.bank.v1beta1/types"
import { Output } from "electra-client-ts/cosmos.bank.v1beta1/types"
import { Supply } from "electra-client-ts/cosmos.bank.v1beta1/types"
import { DenomUnit } from "electra-client-ts/cosmos.bank.v1beta1/types"
import { Metadata } from "electra-client-ts/cosmos.bank.v1beta1/types"
import { Balance } from "electra-client-ts/cosmos.bank.v1beta1/types"
import { DenomOwner } from "electra-client-ts/cosmos.bank.v1beta1/types"


export { SendAuthorization, Params, SendEnabled, Input, Output, Supply, DenomUnit, Metadata, Balance, DenomOwner };

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
				Balance: {},
				AllBalances: {},
				SpendableBalances: {},
				TotalSupply: {},
				SupplyOf: {},
				Params: {},
				DenomMetadata: {},
				DenomsMetadata: {},
				DenomOwners: {},
				
				_Structure: {
						SendAuthorization: getStructure(SendAuthorization.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						SendEnabled: getStructure(SendEnabled.fromPartial({})),
						Input: getStructure(Input.fromPartial({})),
						Output: getStructure(Output.fromPartial({})),
						Supply: getStructure(Supply.fromPartial({})),
						DenomUnit: getStructure(DenomUnit.fromPartial({})),
						Metadata: getStructure(Metadata.fromPartial({})),
						Balance: getStructure(Balance.fromPartial({})),
						DenomOwner: getStructure(DenomOwner.fromPartial({})),
						
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
				getBalance: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Balance[JSON.stringify(params)] ?? {}
		},
				getAllBalances: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.AllBalances[JSON.stringify(params)] ?? {}
		},
				getSpendableBalances: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.SpendableBalances[JSON.stringify(params)] ?? {}
		},
				getTotalSupply: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.TotalSupply[JSON.stringify(params)] ?? {}
		},
				getSupplyOf: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.SupplyOf[JSON.stringify(params)] ?? {}
		},
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getDenomMetadata: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.DenomMetadata[JSON.stringify(params)] ?? {}
		},
				getDenomsMetadata: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.DenomsMetadata[JSON.stringify(params)] ?? {}
		},
				getDenomOwners: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.DenomOwners[JSON.stringify(params)] ?? {}
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
			console.log('Vuex module: cosmos.bank.v1beta1 initialized!')
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
		
		
		
		 		
		
		
		async QueryBalance({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosBankV1Beta1.query.queryBalance( key.address, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosBankV1Beta1.query.queryBalance( key.address, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Balance', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryBalance', payload: { options: { all }, params: {...key},query }})
				return getters['getBalance']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryBalance API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryAllBalances({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosBankV1Beta1.query.queryAllBalances( key.address, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosBankV1Beta1.query.queryAllBalances( key.address, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'AllBalances', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAllBalances', payload: { options: { all }, params: {...key},query }})
				return getters['getAllBalances']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryAllBalances API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QuerySpendableBalances({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosBankV1Beta1.query.querySpendableBalances( key.address, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosBankV1Beta1.query.querySpendableBalances( key.address, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'SpendableBalances', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QuerySpendableBalances', payload: { options: { all }, params: {...key},query }})
				return getters['getSpendableBalances']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QuerySpendableBalances API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryTotalSupply({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosBankV1Beta1.query.queryTotalSupply(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosBankV1Beta1.query.queryTotalSupply({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'TotalSupply', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryTotalSupply', payload: { options: { all }, params: {...key},query }})
				return getters['getTotalSupply']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryTotalSupply API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QuerySupplyOf({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosBankV1Beta1.query.querySupplyOf(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosBankV1Beta1.query.querySupplyOf({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'SupplyOf', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QuerySupplyOf', payload: { options: { all }, params: {...key},query }})
				return getters['getSupplyOf']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QuerySupplyOf API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosBankV1Beta1.query.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryDenomMetadata({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosBankV1Beta1.query.queryDenomMetadata( key.denom)).data
				
					
				commit('QUERY', { query: 'DenomMetadata', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDenomMetadata', payload: { options: { all }, params: {...key},query }})
				return getters['getDenomMetadata']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryDenomMetadata API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryDenomsMetadata({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosBankV1Beta1.query.queryDenomsMetadata(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosBankV1Beta1.query.queryDenomsMetadata({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'DenomsMetadata', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDenomsMetadata', payload: { options: { all }, params: {...key},query }})
				return getters['getDenomsMetadata']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryDenomsMetadata API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryDenomOwners({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.CosmosBankV1Beta1.query.queryDenomOwners( key.denom, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.CosmosBankV1Beta1.query.queryDenomOwners( key.denom, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'DenomOwners', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDenomOwners', payload: { options: { all }, params: {...key},query }})
				return getters['getDenomOwners']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryDenomOwners API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgSend({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.CosmosBankV1Beta1.tx.sendMsgSend({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSend:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSend:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgMultiSend({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.CosmosBankV1Beta1.tx.sendMsgMultiSend({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgMultiSend:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgMultiSend:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgSend({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosBankV1Beta1.tx.msgSend({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSend:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSend:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgMultiSend({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.CosmosBankV1Beta1.tx.msgMultiSend({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgMultiSend:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgMultiSend:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}

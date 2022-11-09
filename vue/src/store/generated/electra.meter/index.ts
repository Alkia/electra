import { Client, registry, MissingWalletError } from 'electra-client-ts'

import { Meterdirectory } from "electra-client-ts/electra.meter/types"
import { Meterreadings } from "electra-client-ts/electra.meter/types"
import { Params } from "electra-client-ts/electra.meter/types"
import { PowerPurchaseContract } from "electra-client-ts/electra.meter/types"


export { Meterdirectory, Meterreadings, Params, PowerPurchaseContract };

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
				Params: {},
				Meterreadings: {},
				MeterreadingsAll: {},
				Meterdirectory: {},
				MeterdirectoryAll: {},
				Listrecordings: {},
				PowerPurchaseContract: {},
				PowerPurchaseContractAll: {},
				
				_Structure: {
						Meterdirectory: getStructure(Meterdirectory.fromPartial({})),
						Meterreadings: getStructure(Meterreadings.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						PowerPurchaseContract: getStructure(PowerPurchaseContract.fromPartial({})),
						
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
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getMeterreadings: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Meterreadings[JSON.stringify(params)] ?? {}
		},
				getMeterreadingsAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.MeterreadingsAll[JSON.stringify(params)] ?? {}
		},
				getMeterdirectory: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Meterdirectory[JSON.stringify(params)] ?? {}
		},
				getMeterdirectoryAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.MeterdirectoryAll[JSON.stringify(params)] ?? {}
		},
				getListrecordings: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Listrecordings[JSON.stringify(params)] ?? {}
		},
				getPowerPurchaseContract: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.PowerPurchaseContract[JSON.stringify(params)] ?? {}
		},
				getPowerPurchaseContractAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.PowerPurchaseContractAll[JSON.stringify(params)] ?? {}
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
			console.log('Vuex module: electra.meter initialized!')
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
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ElectraMeter.query.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryMeterreadings({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ElectraMeter.query.queryMeterreadings( key.deviceID,  key.timestamp)).data
				
					
				commit('QUERY', { query: 'Meterreadings', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryMeterreadings', payload: { options: { all }, params: {...key},query }})
				return getters['getMeterreadings']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryMeterreadings API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryMeterreadingsAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ElectraMeter.query.queryMeterreadingsAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.ElectraMeter.query.queryMeterreadingsAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'MeterreadingsAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryMeterreadingsAll', payload: { options: { all }, params: {...key},query }})
				return getters['getMeterreadingsAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryMeterreadingsAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryMeterdirectory({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ElectraMeter.query.queryMeterdirectory( key.deviceID,  key.barcodeserial)).data
				
					
				commit('QUERY', { query: 'Meterdirectory', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryMeterdirectory', payload: { options: { all }, params: {...key},query }})
				return getters['getMeterdirectory']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryMeterdirectory API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryMeterdirectoryAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ElectraMeter.query.queryMeterdirectoryAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.ElectraMeter.query.queryMeterdirectoryAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'MeterdirectoryAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryMeterdirectoryAll', payload: { options: { all }, params: {...key},query }})
				return getters['getMeterdirectoryAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryMeterdirectoryAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryListrecordings({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ElectraMeter.query.queryListrecordings( key.deviceID,  key.start,  key.end,  key.byUnixTime)).data
				
					
				commit('QUERY', { query: 'Listrecordings', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryListrecordings', payload: { options: { all }, params: {...key},query }})
				return getters['getListrecordings']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryListrecordings API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryPowerPurchaseContract({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ElectraMeter.query.queryPowerPurchaseContract( key.contractID,  key.contractDeviceID)).data
				
					
				commit('QUERY', { query: 'PowerPurchaseContract', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPowerPurchaseContract', payload: { options: { all }, params: {...key},query }})
				return getters['getPowerPurchaseContract']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryPowerPurchaseContract API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryPowerPurchaseContractAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ElectraMeter.query.queryPowerPurchaseContractAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.ElectraMeter.query.queryPowerPurchaseContractAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'PowerPurchaseContractAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPowerPurchaseContractAll', payload: { options: { all }, params: {...key},query }})
				return getters['getPowerPurchaseContractAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryPowerPurchaseContractAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgRecord({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgRecord({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRecord:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRecord:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreatePowerPurchaseContract({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgCreatePowerPurchaseContract({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreatePowerPurchaseContract:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreatePowerPurchaseContract:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRecord3({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgRecord3({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRecord3:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRecord3:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdatePowerPurchaseContract({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgUpdatePowerPurchaseContract({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdatePowerPurchaseContract:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdatePowerPurchaseContract:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeletePowerPurchaseContract({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgDeletePowerPurchaseContract({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeletePowerPurchaseContract:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeletePowerPurchaseContract:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgRecord({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgRecord({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRecord:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRecord:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreatePowerPurchaseContract({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgCreatePowerPurchaseContract({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreatePowerPurchaseContract:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreatePowerPurchaseContract:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgRecord3({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgRecord3({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRecord3:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRecord3:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdatePowerPurchaseContract({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgUpdatePowerPurchaseContract({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdatePowerPurchaseContract:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdatePowerPurchaseContract:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeletePowerPurchaseContract({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgDeletePowerPurchaseContract({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeletePowerPurchaseContract:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeletePowerPurchaseContract:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}

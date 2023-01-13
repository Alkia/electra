import { Client, registry, MissingWalletError } from 'electra-client-ts'

import { Billingcycles } from "electra-client-ts/electra.meter/types"
import { Customerbillingline } from "electra-client-ts/electra.meter/types"
import { Customerbills } from "electra-client-ts/electra.meter/types"
import { Meterdirectory } from "electra-client-ts/electra.meter/types"
import { Meterreadings } from "electra-client-ts/electra.meter/types"
import { Params } from "electra-client-ts/electra.meter/types"
import { PowerPurchaseContract } from "electra-client-ts/electra.meter/types"
import { PpaMap } from "electra-client-ts/electra.meter/types"
import { Producerbillingline } from "electra-client-ts/electra.meter/types"
import { Producerbills } from "electra-client-ts/electra.meter/types"


export { Billingcycles, Customerbillingline, Customerbills, Meterdirectory, Meterreadings, Params, PowerPurchaseContract, PpaMap, Producerbillingline, Producerbills };

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
				PpaMap: {},
				PpaMapAll: {},
				Billingcycles: {},
				BillingcyclesAll: {},
				CurrentcycleID: {},
				Customerbillingline: {},
				CustomerbillinglineAll: {},
				Getcustomerbill: {},
				Customerbills: {},
				CustomerbillsAll: {},
				Producerbillingline: {},
				ProducerbillinglineAll: {},
				Getproducerbill: {},
				Producerbills: {},
				ProducerbillsAll: {},
				
				_Structure: {
						Billingcycles: getStructure(Billingcycles.fromPartial({})),
						Customerbillingline: getStructure(Customerbillingline.fromPartial({})),
						Customerbills: getStructure(Customerbills.fromPartial({})),
						Meterdirectory: getStructure(Meterdirectory.fromPartial({})),
						Meterreadings: getStructure(Meterreadings.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						PowerPurchaseContract: getStructure(PowerPurchaseContract.fromPartial({})),
						PpaMap: getStructure(PpaMap.fromPartial({})),
						Producerbillingline: getStructure(Producerbillingline.fromPartial({})),
						Producerbills: getStructure(Producerbills.fromPartial({})),
						
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
				getPpaMap: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.PpaMap[JSON.stringify(params)] ?? {}
		},
				getPpaMapAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.PpaMapAll[JSON.stringify(params)] ?? {}
		},
				getBillingcycles: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Billingcycles[JSON.stringify(params)] ?? {}
		},
				getBillingcyclesAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.BillingcyclesAll[JSON.stringify(params)] ?? {}
		},
				getCurrentcycleID: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CurrentcycleID[JSON.stringify(params)] ?? {}
		},
				getCustomerbillingline: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Customerbillingline[JSON.stringify(params)] ?? {}
		},
				getCustomerbillinglineAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CustomerbillinglineAll[JSON.stringify(params)] ?? {}
		},
				getGetcustomerbill: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Getcustomerbill[JSON.stringify(params)] ?? {}
		},
				getCustomerbills: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Customerbills[JSON.stringify(params)] ?? {}
		},
				getCustomerbillsAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CustomerbillsAll[JSON.stringify(params)] ?? {}
		},
				getProducerbillingline: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Producerbillingline[JSON.stringify(params)] ?? {}
		},
				getProducerbillinglineAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ProducerbillinglineAll[JSON.stringify(params)] ?? {}
		},
				getGetproducerbill: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Getproducerbill[JSON.stringify(params)] ?? {}
		},
				getProducerbills: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Producerbills[JSON.stringify(params)] ?? {}
		},
				getProducerbillsAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ProducerbillsAll[JSON.stringify(params)] ?? {}
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
				let value= (await client.ElectraMeter.query.queryListrecordings( key.deviceID,  key.start,  key.end,  key.byUnixTime, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.ElectraMeter.query.queryListrecordings( key.deviceID,  key.start,  key.end,  key.byUnixTime, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
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
		
		
		
		
		 		
		
		
		async QueryPpaMap({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ElectraMeter.query.queryPpaMap( key.consumerDeviceID,  key.agreementID,  key.agreementActive,  key.contractID)).data
				
					
				commit('QUERY', { query: 'PpaMap', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPpaMap', payload: { options: { all }, params: {...key},query }})
				return getters['getPpaMap']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryPpaMap API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryPpaMapAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ElectraMeter.query.queryPpaMapAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.ElectraMeter.query.queryPpaMapAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'PpaMapAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPpaMapAll', payload: { options: { all }, params: {...key},query }})
				return getters['getPpaMapAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryPpaMapAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryBillingcycles({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ElectraMeter.query.queryBillingcycles( key.cycleID)).data
				
					
				commit('QUERY', { query: 'Billingcycles', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryBillingcycles', payload: { options: { all }, params: {...key},query }})
				return getters['getBillingcycles']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryBillingcycles API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryBillingcyclesAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ElectraMeter.query.queryBillingcyclesAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.ElectraMeter.query.queryBillingcyclesAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'BillingcyclesAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryBillingcyclesAll', payload: { options: { all }, params: {...key},query }})
				return getters['getBillingcyclesAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryBillingcyclesAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCurrentcycleID({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ElectraMeter.query.queryCurrentcycleId()).data
				
					
				commit('QUERY', { query: 'CurrentcycleID', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCurrentcycleID', payload: { options: { all }, params: {...key},query }})
				return getters['getCurrentcycleID']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCurrentcycleID API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCustomerbillingline({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ElectraMeter.query.queryCustomerbillingline( key.customerDeviceID,  key.cycleID,  key.lineid, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.ElectraMeter.query.queryCustomerbillingline( key.customerDeviceID,  key.cycleID,  key.lineid, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Customerbillingline', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCustomerbillingline', payload: { options: { all }, params: {...key},query }})
				return getters['getCustomerbillingline']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCustomerbillingline API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCustomerbillinglineAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ElectraMeter.query.queryCustomerbillinglineAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.ElectraMeter.query.queryCustomerbillinglineAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'CustomerbillinglineAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCustomerbillinglineAll', payload: { options: { all }, params: {...key},query }})
				return getters['getCustomerbillinglineAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCustomerbillinglineAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGetcustomerbill({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ElectraMeter.query.queryGetcustomerbill( key.customerDeviceID,  key.billCycleID, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.ElectraMeter.query.queryGetcustomerbill( key.customerDeviceID,  key.billCycleID, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Getcustomerbill', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGetcustomerbill', payload: { options: { all }, params: {...key},query }})
				return getters['getGetcustomerbill']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGetcustomerbill API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCustomerbills({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ElectraMeter.query.queryCustomerbills( key.billCycleID,  key.customerDeviceID)).data
				
					
				commit('QUERY', { query: 'Customerbills', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCustomerbills', payload: { options: { all }, params: {...key},query }})
				return getters['getCustomerbills']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCustomerbills API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCustomerbillsAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ElectraMeter.query.queryCustomerbillsAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.ElectraMeter.query.queryCustomerbillsAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'CustomerbillsAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCustomerbillsAll', payload: { options: { all }, params: {...key},query }})
				return getters['getCustomerbillsAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCustomerbillsAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryProducerbillingline({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ElectraMeter.query.queryProducerbillingline( key.producerDeviceID,  key.cycleID,  key.lineid, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.ElectraMeter.query.queryProducerbillingline( key.producerDeviceID,  key.cycleID,  key.lineid, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Producerbillingline', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryProducerbillingline', payload: { options: { all }, params: {...key},query }})
				return getters['getProducerbillingline']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryProducerbillingline API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryProducerbillinglineAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ElectraMeter.query.queryProducerbillinglineAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.ElectraMeter.query.queryProducerbillinglineAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ProducerbillinglineAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryProducerbillinglineAll', payload: { options: { all }, params: {...key},query }})
				return getters['getProducerbillinglineAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryProducerbillinglineAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGetproducerbill({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ElectraMeter.query.queryGetproducerbill( key.producerDeviceID,  key.billCycleID, query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.ElectraMeter.query.queryGetproducerbill( key.producerDeviceID,  key.billCycleID, {...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'Getproducerbill', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGetproducerbill', payload: { options: { all }, params: {...key},query }})
				return getters['getGetproducerbill']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGetproducerbill API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryProducerbills({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ElectraMeter.query.queryProducerbills( key.billCycleID,  key.producerDeviceID)).data
				
					
				commit('QUERY', { query: 'Producerbills', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryProducerbills', payload: { options: { all }, params: {...key},query }})
				return getters['getProducerbills']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryProducerbills API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryProducerbillsAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ElectraMeter.query.queryProducerbillsAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.ElectraMeter.query.queryProducerbillsAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ProducerbillsAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryProducerbillsAll', payload: { options: { all }, params: {...key},query }})
				return getters['getProducerbillsAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryProducerbillsAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgCreateBillingcycles({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgCreateBillingcycles({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateBillingcycles:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateBillingcycles:Send Could not broadcast Tx: '+ e.message)
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
		async sendMsgUpdateProducerbills({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgUpdateProducerbills({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateProducerbills:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateProducerbills:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteBillingcycles({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgDeleteBillingcycles({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteBillingcycles:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteBillingcycles:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateCustomerbills({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgUpdateCustomerbills({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCustomerbills:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateCustomerbills:Send Could not broadcast Tx: '+ e.message)
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
		async sendMsgUpdateBillingcycles({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgUpdateBillingcycles({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateBillingcycles:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateBillingcycles:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgPrepareBill({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgPrepareBill({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgPrepareBill:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgPrepareBill:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteProducerbillingline({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgDeleteProducerbillingline({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteProducerbillingline:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteProducerbillingline:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdatePpaMap({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgUpdatePpaMap({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdatePpaMap:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdatePpaMap:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateProducerbills({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgCreateProducerbills({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateProducerbills:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateProducerbills:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeletePpaMap({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgDeletePpaMap({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeletePpaMap:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeletePpaMap:Send Could not broadcast Tx: '+ e.message)
				}
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
		async sendMsgCreateProducerbillingline({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgCreateProducerbillingline({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateProducerbillingline:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateProducerbillingline:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateProducerbillingline({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgUpdateProducerbillingline({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateProducerbillingline:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateProducerbillingline:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreatePpaMap({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgCreatePpaMap({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreatePpaMap:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreatePpaMap:Send Could not broadcast Tx: '+ e.message)
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
		async sendMsgCreateCustomerbillingline({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgCreateCustomerbillingline({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateCustomerbillingline:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateCustomerbillingline:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteCustomerbills({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgDeleteCustomerbills({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteCustomerbills:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteCustomerbills:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteCustomerbillingline({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgDeleteCustomerbillingline({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteCustomerbillingline:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteCustomerbillingline:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreateCustomerbills({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgCreateCustomerbills({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateCustomerbills:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateCustomerbills:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateCustomerbillingline({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgUpdateCustomerbillingline({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCustomerbillingline:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateCustomerbillingline:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeleteProducerbills({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ElectraMeter.tx.sendMsgDeleteProducerbills({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteProducerbills:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDeleteProducerbills:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgCreateBillingcycles({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgCreateBillingcycles({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateBillingcycles:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateBillingcycles:Create Could not create message: ' + e.message)
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
		async MsgUpdateProducerbills({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgUpdateProducerbills({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateProducerbills:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateProducerbills:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteBillingcycles({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgDeleteBillingcycles({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteBillingcycles:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteBillingcycles:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateCustomerbills({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgUpdateCustomerbills({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCustomerbills:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateCustomerbills:Create Could not create message: ' + e.message)
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
		async MsgUpdateBillingcycles({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgUpdateBillingcycles({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateBillingcycles:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateBillingcycles:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgPrepareBill({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgPrepareBill({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgPrepareBill:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgPrepareBill:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteProducerbillingline({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgDeleteProducerbillingline({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteProducerbillingline:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteProducerbillingline:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdatePpaMap({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgUpdatePpaMap({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdatePpaMap:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdatePpaMap:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateProducerbills({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgCreateProducerbills({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateProducerbills:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateProducerbills:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeletePpaMap({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgDeletePpaMap({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeletePpaMap:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeletePpaMap:Create Could not create message: ' + e.message)
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
		async MsgCreateProducerbillingline({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgCreateProducerbillingline({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateProducerbillingline:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateProducerbillingline:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateProducerbillingline({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgUpdateProducerbillingline({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateProducerbillingline:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateProducerbillingline:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreatePpaMap({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgCreatePpaMap({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreatePpaMap:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreatePpaMap:Create Could not create message: ' + e.message)
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
		async MsgCreateCustomerbillingline({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgCreateCustomerbillingline({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateCustomerbillingline:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateCustomerbillingline:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteCustomerbills({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgDeleteCustomerbills({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteCustomerbills:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteCustomerbills:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteCustomerbillingline({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgDeleteCustomerbillingline({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteCustomerbillingline:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteCustomerbillingline:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCreateCustomerbills({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgCreateCustomerbills({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateCustomerbills:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCreateCustomerbills:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUpdateCustomerbillingline({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgUpdateCustomerbillingline({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCustomerbillingline:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUpdateCustomerbillingline:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeleteProducerbills({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ElectraMeter.tx.msgDeleteProducerbills({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDeleteProducerbills:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgDeleteProducerbills:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}

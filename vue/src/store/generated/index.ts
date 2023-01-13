// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import ElectraMeter from './electra.meter'
import ElectraVoter from './electra.voter'


export default { 
  ElectraMeter: load(ElectraMeter, 'electra.meter'),
  ElectraVoter: load(ElectraVoter, 'electra.voter'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}
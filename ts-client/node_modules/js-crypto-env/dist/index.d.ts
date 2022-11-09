/**
 * index.js
 **/
/**
 * Obtain require(crypto) in Node.js environment.
 * @return {undefined|Object} - Node.js crypto object
 */
declare const getNodeCrypto: () => any;
/**
 * Obtain window.crypto.subtle object in browser environments.
 * @return {undefined|Object} - WebCrypto API object
 */
declare const getWebCrypto: () => any;
/**
 * Obtain window.crypto.subtle or window.msCrypto.subtle object in browser environments.
 * @return {undefined|Object} - WebCrypto API object
 */
declare const getWebCryptoAll: () => any;
/**
 * Obtain window.crypto or window.msCrypto object in browser environments.
 * @return {undefined|Object} - WebCrypto API object
 */
declare const getRootWebCryptoAll: () => any;
/**
 * Retrieve MsCryptoObject, i.e., window.msCrypto.subtle
 * @return {undefined|Object}
 */
declare const getMsCrypto: () => any;
/**
 * Get native crypto lib name.
 * @return {name: 'msCrypto'|'webCrypto'|'nodeCrypto'|undefined, crypto?: any}
 */
declare const getCrypto: () => {
    name: "msCrypto" | "webCrypto" | "nodeCrypto" | undefined;
    crypto?: any;
};
declare const _default: {
    getNodeCrypto: () => any;
    getWebCrypto: () => any;
    getMsCrypto: () => any;
    getWebCryptoAll: () => any;
    getRootWebCryptoAll: () => any;
    getCrypto: () => {
        name: "msCrypto" | "webCrypto" | "nodeCrypto" | undefined;
        crypto?: any;
    };
};
export default _default;
export { getNodeCrypto, getWebCrypto, getMsCrypto, getWebCryptoAll, getRootWebCryptoAll, getCrypto };

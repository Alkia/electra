"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * index.js
 **/
/**
 * Obtain require(crypto) in Node.js environment.
 * @return {undefined|Object} - Node.js crypto object
 */
var getNodeCrypto = function () {
    if (typeof window !== 'undefined')
        return undefined;
    else
        return require('crypto');
};
exports.getNodeCrypto = getNodeCrypto;
/**
 * Obtain window.crypto.subtle object in browser environments.
 * @return {undefined|Object} - WebCrypto API object
 */
var getWebCrypto = function () {
    if (typeof window !== 'undefined' && window.crypto)
        return window.crypto.subtle;
    return undefined;
};
exports.getWebCrypto = getWebCrypto;
/**
 * Obtain window.crypto.subtle or window.msCrypto.subtle object in browser environments.
 * @return {undefined|Object} - WebCrypto API object
 */
var getWebCryptoAll = function () {
    if (typeof window !== 'undefined') {
        // @ts-ignore
        if (window.msCrypto)
            return window.msCrypto.subtle;
        if (window.crypto)
            return window.crypto.subtle;
    }
    return undefined;
};
exports.getWebCryptoAll = getWebCryptoAll;
/**
 * Obtain window.crypto or window.msCrypto object in browser environments.
 * @return {undefined|Object} - WebCrypto API object
 */
var getRootWebCryptoAll = function () {
    if (typeof window !== 'undefined') {
        // @ts-ignore
        if (window.msCrypto)
            return window.msCrypto;
        if (window.crypto)
            return window.crypto;
    }
    return undefined;
};
exports.getRootWebCryptoAll = getRootWebCryptoAll;
/**
 * Retrieve MsCryptoObject, i.e., window.msCrypto.subtle
 * @return {undefined|Object}
 */
var getMsCrypto = function () {
    // @ts-ignore
    if (typeof window !== 'undefined' && window.msCrypto)
        return window.msCrypto.subtle;
    return undefined;
};
exports.getMsCrypto = getMsCrypto;
/**
 * Get native crypto lib name.
 * @return {name: 'msCrypto'|'webCrypto'|'nodeCrypto'|undefined, crypto?: any}
 */
var getCrypto = function () {
    var webCrypto = getWebCrypto();
    var nodeCrypto = getNodeCrypto();
    var msCrypto = getMsCrypto();
    if (typeof nodeCrypto !== 'undefined')
        return { name: 'nodeCrypto', crypto: nodeCrypto };
    else if (typeof webCrypto !== 'undefined' && typeof msCrypto === 'undefined')
        return { name: 'webCrypto', crypto: webCrypto };
    else if (typeof msCrypto !== 'undefined')
        return { name: 'msCrypto', crypto: msCrypto };
    else
        return { name: undefined };
};
exports.getCrypto = getCrypto;
exports.default = { getNodeCrypto: getNodeCrypto, getWebCrypto: getWebCrypto, getMsCrypto: getMsCrypto, getWebCryptoAll: getWebCryptoAll, getRootWebCryptoAll: getRootWebCryptoAll, getCrypto: getCrypto };
//# sourceMappingURL=index.js.map
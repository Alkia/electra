import { HashTypes } from './params';
/**
 * NIST Concatenation KDF fo JOSE
 * @param sharedSecret {Uint8Array} - ECDH Output
 * @param otherInfoBytes {Uint8Array} - other info
 * @param keyDataLen {number} - output key length in bytes
 * @param hash {string} - the default is 'SHA-256'
 * @return {Promise<Uint8Array>}
 */
export declare const nistConcatKdf: (sharedSecret: Uint8Array, otherInfoBytes: Uint8Array, keyDataLen?: number, hash?: HashTypes) => Promise<Uint8Array>;

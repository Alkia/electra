/**
 * hash.js
 */
import { HashTypes } from './params';
/**
 * Compute Hash value.
 * @param {Uint8Array} msg - Byte array of message to be hashed.
 * @param {HashTypes} [hash = 'SHA-256'] - Name of hash algorithm like 'SHA-256'.
 * @return {Promise<Uint8Array>} - Hash value
 * @throws {Error} - Throws if UnsupportedHashAlgorithm, UnsupportedMessageType,
 *  or UnsupportedEnvironment, i.e., a case where even pure js implementation won't work.
 */
export declare const compute: (msg: Uint8Array, hash?: HashTypes) => Promise<Uint8Array>;

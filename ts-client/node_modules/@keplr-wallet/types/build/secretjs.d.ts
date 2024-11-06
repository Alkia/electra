export interface SecretUtils {
    getPubkey: () => Promise<Uint8Array>;
    decrypt: (ciphertext: Uint8Array, nonce: Uint8Array) => Promise<Uint8Array>;
    encrypt: (contractCodeHash: string, msg: object) => Promise<Uint8Array>;
    getTxEncryptionKey: (nonce: Uint8Array) => Promise<Uint8Array>;
}

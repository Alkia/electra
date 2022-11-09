"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("@iov/crypto");
const encoding_1 = require("@iov/encoding");
const pen_1 = require("./pen");
const signature_1 = require("./signature");
const { fromHex } = encoding_1.Encoding;
describe("Sec256k1Pen", () => {
    it("can be constructed", async () => {
        const pen = await pen_1.Secp256k1Pen.fromMnemonic("zebra slush diet army arrest purpose hawk source west glimpse custom record");
        expect(pen).toBeTruthy();
    });
    describe("pubkey", () => {
        it("returns compressed pubkey", async () => {
            // special sign fit simple patrol salute grocery chicken wheat radar tonight ceiling
            // m/44'/118'/0'/0/0
            // pubkey: 02baa4ef93f2ce84592a49b1d729c074eab640112522a7a89f7d03ebab21ded7b6
            const pen = await pen_1.Secp256k1Pen.fromMnemonic("special sign fit simple patrol salute grocery chicken wheat radar tonight ceiling");
            expect(pen.pubkey).toEqual(fromHex("02baa4ef93f2ce84592a49b1d729c074eab640112522a7a89f7d03ebab21ded7b6"));
        });
    });
    describe("createSignature", () => {
        it("creates correct signatures", async () => {
            const pen = await pen_1.Secp256k1Pen.fromMnemonic("special sign fit simple patrol salute grocery chicken wheat radar tonight ceiling");
            const data = encoding_1.Encoding.toAscii("foo bar");
            const { pubkey, signature } = signature_1.decodeSignature(await pen.sign(data));
            const valid = await crypto_1.Secp256k1.verifySignature(crypto_1.Secp256k1Signature.fromFixedLength(signature), new crypto_1.Sha256(data).digest(), pubkey);
            expect(valid).toEqual(true);
        });
    });
});
//# sourceMappingURL=pen.spec.js.map
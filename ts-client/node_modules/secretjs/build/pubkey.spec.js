"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encoding_1 = require("@iov/encoding");
const pubkey_1 = require("./pubkey");
const { fromBase64 } = encoding_1.Encoding;
describe("pubkey", () => {
    describe("encodeSecp256k1Pubkey", () => {
        it("encodes a compresed pubkey", () => {
            const pubkey = fromBase64("AtQaCqFnshaZQp6rIkvAPyzThvCvXSDO+9AzbxVErqJP");
            expect(pubkey_1.encodeSecp256k1Pubkey(pubkey)).toEqual({
                type: "tendermint/PubKeySecp256k1",
                value: "AtQaCqFnshaZQp6rIkvAPyzThvCvXSDO+9AzbxVErqJP",
            });
        });
        it("throws for uncompressed public keys", () => {
            const pubkey = fromBase64("BE8EGB7ro1ORuFhjOnZcSgwYlpe0DSFjVNUIkNNQxwKQE7WHpoHoNswYeoFkuYpYSKK4mzFzMV/dB0DVAy4lnNU=");
            expect(() => pubkey_1.encodeSecp256k1Pubkey(pubkey)).toThrowError(/public key must be compressed secp256k1/i);
        });
    });
    describe("decodeBech32Pubkey", () => {
        it("works", () => {
            expect(pubkey_1.decodeBech32Pubkey("cosmospub1addwnpepqd8sgxq7aw348ydctp3n5ajufgxp395hksxjzc6565yfp56scupfqhlgyg5")).toEqual({
                type: "tendermint/PubKeySecp256k1",
                value: "A08EGB7ro1ORuFhjOnZcSgwYlpe0DSFjVNUIkNNQxwKQ",
            });
        });
        it("works for enigma pubkey", () => {
            expect(pubkey_1.decodeBech32Pubkey("enigmapub1addwnpepqw5k9p439nw0zpg2aundx4umwx4nw233z5prpjqjv5anl5grmnchzp2xwvv")).toEqual({
                type: "tendermint/PubKeySecp256k1",
                value: "A6lihrEs3PEFCu8m01ebcas3KjEVAjDIEmU7P9ED3PFx",
            });
        });
    });
    describe("encodeBech32Pubkey", () => {
        it("works for secp256k1", () => {
            const pubkey = {
                type: "tendermint/PubKeySecp256k1",
                value: "A08EGB7ro1ORuFhjOnZcSgwYlpe0DSFjVNUIkNNQxwKQ",
            };
            expect(pubkey_1.encodeBech32Pubkey(pubkey, "cosmospub")).toEqual("cosmospub1addwnpepqd8sgxq7aw348ydctp3n5ajufgxp395hksxjzc6565yfp56scupfqhlgyg5");
        });
    });
});
//# sourceMappingURL=pubkey.spec.js.map
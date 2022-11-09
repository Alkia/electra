"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequence_1 = require("./sequence");
const txresponse1_json_1 = __importDefault(require("./testdata/txresponse1.json"));
const txresponse2_json_1 = __importDefault(require("./testdata/txresponse2.json"));
const txresponse3_json_1 = __importDefault(require("./testdata/txresponse3.json"));
// Those values must match ./testdata/txresponse*.json
const chainId = "testing";
const accountNumber = 4;
describe("sequence", () => {
    describe("findSequenceForSignedTx", () => {
        it("works", async () => {
            const current = 100; // what we get from GET /auth/accounts/{address}
            expect(await sequence_1.findSequenceForSignedTx(txresponse1_json_1.default.tx, chainId, accountNumber, current)).toEqual(10);
            // We know response3.height > response1.height, so the sequence must be at least 10+1
            expect(await sequence_1.findSequenceForSignedTx(txresponse3_json_1.default.tx, chainId, accountNumber, current, 11)).toEqual(19);
            // We know response3.height > response2.height > response1.height, so the sequence must be at least 10+1 and smaller than 19
            expect(await sequence_1.findSequenceForSignedTx(txresponse2_json_1.default.tx, chainId, accountNumber, 19, 11)).toEqual(13);
        });
        it("returns undefined when sequence is not in range", async () => {
            expect(await sequence_1.findSequenceForSignedTx(txresponse1_json_1.default.tx, chainId, accountNumber, 5)).toBeUndefined();
            expect(await sequence_1.findSequenceForSignedTx(txresponse1_json_1.default.tx, chainId, accountNumber, 20, 11)).toBeUndefined();
            expect(await sequence_1.findSequenceForSignedTx(txresponse1_json_1.default.tx, chainId, accountNumber, 20, 50)).toBeUndefined();
            // upper bound is not included in the possible results
            expect(await sequence_1.findSequenceForSignedTx(txresponse1_json_1.default.tx, chainId, accountNumber, 10)).toBeUndefined();
        });
    });
});
//# sourceMappingURL=sequence.spec.js.map
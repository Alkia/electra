"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const __1 = require("../");
const testutils_spec_1 = require("../testutils.spec");
const mint_1 = require("./mint");
async function makeClientWithMint(rpcUrl) {
    const tmClient = await tendermint_rpc_1.Tendermint34Client.connect(rpcUrl);
    return [__1.QueryClient.withExtensions(tmClient, mint_1.setupMintExtension), tmClient];
}
describe("MintExtension", () => {
    describe("params", () => {
        it("works", async () => {
            (0, testutils_spec_1.pendingWithoutSimapp)();
            const [client, tmClient] = await makeClientWithMint(testutils_spec_1.simapp.tendermintUrl);
            const params = await client.mint.params();
            expect(params.blocksPerYear.toNumber()).toBeGreaterThan(100000);
            expect(params.blocksPerYear.toNumber()).toBeLessThan(100000000);
            expect(params.goalBonded.toString()).toEqual("0.67");
            expect(params.inflationMin.toString()).toEqual("0.07");
            expect(params.inflationMax.toString()).toEqual("0.2");
            expect(params.inflationRateChange.toString()).toEqual("0.13");
            expect(params.mintDenom).toEqual(testutils_spec_1.simapp.denomStaking);
            tmClient.disconnect();
        });
    });
    describe("inflation", () => {
        it("works", async () => {
            (0, testutils_spec_1.pendingWithoutSimapp)();
            const [client, tmClient] = await makeClientWithMint(testutils_spec_1.simapp.tendermintUrl);
            const inflation = await client.mint.inflation();
            expect(inflation.toFloatApproximation()).toBeGreaterThan(0.13);
            expect(inflation.toFloatApproximation()).toBeLessThan(0.1301);
            tmClient.disconnect();
        });
    });
    describe("annualProvisions", () => {
        it("works", async () => {
            (0, testutils_spec_1.pendingWithoutSimapp)();
            const [client, tmClient] = await makeClientWithMint(testutils_spec_1.simapp.tendermintUrl);
            const annualProvisions = await client.mint.annualProvisions();
            expect(annualProvisions.toFloatApproximation()).toBeGreaterThan(5400000000);
            expect(annualProvisions.toFloatApproximation()).toBeLessThan(5500000000);
            tmClient.disconnect();
        });
    });
});
//# sourceMappingURL=mint.spec.js.map
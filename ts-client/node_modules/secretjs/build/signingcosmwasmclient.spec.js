"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("@iov/crypto");
const encoding_1 = require("@iov/encoding");
const utils_1 = require("@iov/utils");
const pen_1 = require("./pen");
const restclient_1 = require("./restclient");
const signingcosmwasmclient_1 = require("./signingcosmwasmclient");
const testutils_spec_1 = require("./testutils.spec");
const { toHex } = encoding_1.Encoding;
const httpUrl = "http://localhost:1317";
const faucet = {
    mnemonic: "economy stock theory fatal elder harbor betray wasp final emotion task crumble siren bottom lizard educate guess current outdoor pair theory focus wife stone",
    pubkey: {
        type: "tendermint/PubKeySecp256k1",
        value: "A08EGB7ro1ORuFhjOnZcSgwYlpe0DSFjVNUIkNNQxwKQ",
    },
    address: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
};
describe("SigningCosmWasmClient", () => {
    describe("makeReadOnly", () => {
        it("can be constructed", async () => {
            const pen = await pen_1.Secp256k1Pen.fromMnemonic(faucet.mnemonic);
            const client = new signingcosmwasmclient_1.SigningCosmWasmClient(httpUrl, faucet.address, (signBytes) => pen.sign(signBytes));
            expect(client).toBeTruthy();
        });
    });
    describe("getHeight", () => {
        it("always uses authAccount implementation", async () => {
            testutils_spec_1.pendingWithoutWasmd();
            const pen = await pen_1.Secp256k1Pen.fromMnemonic(faucet.mnemonic);
            const client = new signingcosmwasmclient_1.SigningCosmWasmClient(httpUrl, faucet.address, (signBytes) => pen.sign(signBytes));
            const openedClient = client;
            const blockLatestSpy = spyOn(openedClient.restClient, "blocksLatest").and.callThrough();
            const authAccountsSpy = spyOn(openedClient.restClient, "authAccounts").and.callThrough();
            const height = await client.getHeight();
            expect(height).toBeGreaterThan(0);
            expect(blockLatestSpy).toHaveBeenCalledTimes(0);
            expect(authAccountsSpy).toHaveBeenCalledTimes(1);
        });
    });
    describe("upload", () => {
        it("works", async () => {
            testutils_spec_1.pendingWithoutWasmd();
            const pen = await pen_1.Secp256k1Pen.fromMnemonic(faucet.mnemonic);
            const client = new signingcosmwasmclient_1.SigningCosmWasmClient(httpUrl, faucet.address, (signBytes) => pen.sign(signBytes));
            const wasm = testutils_spec_1.getHackatom();
            const { codeId, originalChecksum, originalSize, compressedChecksum, compressedSize, } = await client.upload(wasm);
            expect(originalChecksum).toEqual(toHex(new crypto_1.Sha256(wasm).digest()));
            expect(originalSize).toEqual(wasm.length);
            expect(compressedChecksum).toMatch(/^[0-9a-f]{64}$/);
            expect(compressedSize).toBeLessThan(wasm.length * 0.5);
            expect(codeId).toBeGreaterThanOrEqual(1);
        });
        it("can set builder and source", async () => {
            testutils_spec_1.pendingWithoutWasmd();
            const pen = await pen_1.Secp256k1Pen.fromMnemonic(faucet.mnemonic);
            const client = new signingcosmwasmclient_1.SigningCosmWasmClient(httpUrl, faucet.address, (signBytes) => pen.sign(signBytes));
            const wasm = testutils_spec_1.getHackatom();
            const meta = {
                source: "https://crates.io/api/v1/crates/cw-nameservice/0.1.0/download",
                builder: "confio/cosmwasm-opt:0.6.2",
            };
            const { codeId } = await client.upload(wasm, meta);
            const codeDetails = await client.getCodeDetails(codeId);
            expect(codeDetails.source).toEqual(meta.source);
            expect(codeDetails.builder).toEqual(meta.builder);
        });
    });
    describe("instantiate", () => {
        it("works with transfer amount", async () => {
            testutils_spec_1.pendingWithoutWasmd();
            const pen = await pen_1.Secp256k1Pen.fromMnemonic(faucet.mnemonic);
            const client = new signingcosmwasmclient_1.SigningCosmWasmClient(httpUrl, faucet.address, (signBytes) => pen.sign(signBytes));
            const { codeId } = await client.upload(testutils_spec_1.getHackatom());
            const transferAmount = [
                {
                    amount: "1234",
                    denom: "ucosm",
                },
                {
                    amount: "321",
                    denom: "ustake",
                },
            ];
            const beneficiaryAddress = testutils_spec_1.makeRandomAddress();
            const { contractAddress } = await client.instantiate(codeId, {
                verifier: faucet.address,
                beneficiary: beneficiaryAddress,
            }, "My cool label", "Let's see if the memo is used", transferAmount);
            const rest = new restclient_1.RestClient(httpUrl);
            const balance = (await rest.authAccounts(contractAddress)).result.value.coins;
            expect(balance).toEqual(transferAmount);
        });
        it("can instantiate one code multiple times", async () => {
            testutils_spec_1.pendingWithoutWasmd();
            const pen = await pen_1.Secp256k1Pen.fromMnemonic(faucet.mnemonic);
            const client = new signingcosmwasmclient_1.SigningCosmWasmClient(httpUrl, faucet.address, (signBytes) => pen.sign(signBytes));
            const { codeId } = await client.upload(testutils_spec_1.getHackatom());
            const contractAddress1 = await client.instantiate(codeId, {
                verifier: faucet.address,
                beneficiary: testutils_spec_1.makeRandomAddress(),
            }, "contract 1");
            const contractAddress2 = await client.instantiate(codeId, {
                verifier: faucet.address,
                beneficiary: testutils_spec_1.makeRandomAddress(),
            }, "contract 2");
            expect(contractAddress1).not.toEqual(contractAddress2);
        });
    });
    describe("execute", () => {
        it("works", async () => {
            var _a;
            testutils_spec_1.pendingWithoutWasmd();
            const pen = await pen_1.Secp256k1Pen.fromMnemonic(faucet.mnemonic);
            const client = new signingcosmwasmclient_1.SigningCosmWasmClient(httpUrl, faucet.address, (signBytes) => pen.sign(signBytes));
            const { codeId } = await client.upload(testutils_spec_1.getHackatom());
            // instantiate
            const transferAmount = [
                {
                    amount: "233444",
                    denom: "ucosm",
                },
                {
                    amount: "5454",
                    denom: "ustake",
                },
            ];
            const beneficiaryAddress = testutils_spec_1.makeRandomAddress();
            const { contractAddress } = await client.instantiate(codeId, {
                verifier: faucet.address,
                beneficiary: beneficiaryAddress,
            }, "amazing random contract", undefined, transferAmount);
            // execute
            const result = await client.execute(contractAddress, { release: {} }, undefined);
            const wasmEvent = (_a = result.logs.find(() => true)) === null || _a === void 0 ? void 0 : _a.events.find((e) => e.type === "wasm");
            utils_1.assert(wasmEvent, "Event of type wasm expected");
            expect(wasmEvent.attributes).toContain({ key: "action", value: "release" });
            expect(wasmEvent.attributes).toContain({
                key: "destination",
                value: beneficiaryAddress,
            });
            // Verify token transfer from contract to beneficiary
            const rest = new restclient_1.RestClient(httpUrl);
            const beneficiaryBalance = (await rest.authAccounts(beneficiaryAddress)).result.value.coins;
            expect(beneficiaryBalance).toEqual(transferAmount);
            const contractBalance = (await rest.authAccounts(contractAddress)).result.value.coins;
            expect(contractBalance).toEqual([]);
        });
    });
    describe("sendTokens", () => {
        it("works", async () => {
            testutils_spec_1.pendingWithoutWasmd();
            const pen = await pen_1.Secp256k1Pen.fromMnemonic(faucet.mnemonic);
            const client = new signingcosmwasmclient_1.SigningCosmWasmClient(httpUrl, faucet.address, (signBytes) => pen.sign(signBytes));
            // instantiate
            const transferAmount = [
                {
                    amount: "7890",
                    denom: "ucosm",
                },
            ];
            const beneficiaryAddress = testutils_spec_1.makeRandomAddress();
            // no tokens here
            const before = await client.getAccount(beneficiaryAddress);
            expect(before).toBeUndefined();
            // send
            const result = await client.sendTokens(beneficiaryAddress, transferAmount, "for dinner");
            const [firstLog] = result.logs;
            expect(firstLog).toBeTruthy();
            // got tokens
            const after = await client.getAccount(beneficiaryAddress);
            utils_1.assert(after);
            expect(after.balance).toEqual(transferAmount);
        });
    });
});
//# sourceMappingURL=signingcosmwasmclient.spec.js.map
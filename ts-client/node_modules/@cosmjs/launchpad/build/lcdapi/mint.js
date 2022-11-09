"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupMintExtension = void 0;
function setupMintExtension(base) {
    return {
        mint: {
            parameters: async () => base.get(`/minting/parameters`),
            inflation: async () => base.get(`/minting/inflation`),
            annualProvisions: async () => base.get(`/minting/annual-provisions`),
        },
    };
}
exports.setupMintExtension = setupMintExtension;
//# sourceMappingURL=mint.js.map
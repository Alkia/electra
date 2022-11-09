"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSlashingExtension = void 0;
function setupSlashingExtension(base) {
    return {
        slashing: {
            signingInfos: async () => {
                return base.get(`/slashing/signing_infos`);
            },
            parameters: async () => {
                return base.get(`/slashing/parameters`);
            },
        },
    };
}
exports.setupSlashingExtension = setupSlashingExtension;
//# sourceMappingURL=slashing.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSupplyExtension = void 0;
function setupSupplyExtension(base) {
    return {
        supply: {
            totalAll: async () => {
                return base.get(`/supply/total`);
            },
            total: async (denom) => {
                return base.get(`/supply/total/${denom}`);
            },
        },
    };
}
exports.setupSupplyExtension = setupSupplyExtension;
//# sourceMappingURL=supply.js.map
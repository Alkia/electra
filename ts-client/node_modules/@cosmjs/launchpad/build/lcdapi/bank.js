"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupBankExtension = void 0;
function setupBankExtension(base) {
    return {
        bank: {
            balances: async (address) => {
                const path = `/bank/balances/${address}`;
                return base.get(path);
            },
        },
    };
}
exports.setupBankExtension = setupBankExtension;
//# sourceMappingURL=bank.js.map
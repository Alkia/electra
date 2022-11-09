"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAuthExtension = void 0;
function setupAuthExtension(base) {
    return {
        auth: {
            account: async (address) => {
                const path = `/auth/accounts/${address}`;
                const responseData = await base.get(path);
                if (responseData.result.type !== "cosmos-sdk/Account") {
                    throw new Error("Unexpected response data format");
                }
                return responseData;
            },
        },
    };
}
exports.setupAuthExtension = setupAuthExtension;
//# sourceMappingURL=auth.js.map
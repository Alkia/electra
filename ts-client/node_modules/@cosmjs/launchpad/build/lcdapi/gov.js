"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupGovExtension = exports.GovParametersType = void 0;
var GovParametersType;
(function (GovParametersType) {
    GovParametersType["Deposit"] = "deposit";
    GovParametersType["Tallying"] = "tallying";
    GovParametersType["Voting"] = "voting";
})(GovParametersType = exports.GovParametersType || (exports.GovParametersType = {}));
function setupGovExtension(base) {
    return {
        gov: {
            parameters: async (parametersType) => base.get(`/gov/parameters/${parametersType}`),
            proposals: async () => base.get("/gov/proposals"),
            proposal: async (proposalId) => base.get(`/gov/proposals/${proposalId}`),
            proposer: async (proposalId) => base.get(`/gov/proposals/${proposalId}/proposer`),
            deposits: async (proposalId) => base.get(`/gov/proposals/${proposalId}/deposits`),
            deposit: async (proposalId, depositorAddress) => base.get(`/gov/proposals/${proposalId}/deposits/${depositorAddress}`),
            tally: async (proposalId) => base.get(`/gov/proposals/${proposalId}/tally`),
            votes: async (proposalId) => base.get(`/gov/proposals/${proposalId}/votes`),
            vote: async (proposalId, voterAddress) => base.get(`/gov/proposals/${proposalId}/votes/${voterAddress}`),
        },
    };
}
exports.setupGovExtension = setupGovExtension;
//# sourceMappingURL=gov.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupDistributionExtension = void 0;
function setupDistributionExtension(base) {
    return {
        distribution: {
            delegatorRewards: async (delegatorAddress) => base.get(`/distribution/delegators/${delegatorAddress}/rewards`),
            delegatorReward: async (delegatorAddress, validatorAddress) => base.get(`/distribution/delegators/${delegatorAddress}/rewards/${validatorAddress}`),
            withdrawAddress: async (delegatorAddress) => base.get(`/distribution/delegators/${delegatorAddress}/withdraw_address`),
            validator: async (validatorAddress) => base.get(`/distribution/validators/${validatorAddress}`),
            validatorRewards: async (validatorAddress) => base.get(`/distribution/validators/${validatorAddress}/rewards`),
            validatorOutstandingRewards: async (validatorAddress) => base.get(`/distribution/validators/${validatorAddress}/outstanding_rewards`),
            parameters: async () => base.get(`/distribution/parameters`),
            communityPool: async () => base.get(`/distribution/community_pool`),
        },
    };
}
exports.setupDistributionExtension = setupDistributionExtension;
//# sourceMappingURL=distribution.js.map
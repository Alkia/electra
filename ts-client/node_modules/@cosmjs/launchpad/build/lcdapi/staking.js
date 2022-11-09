"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupStakingExtension = exports.BondStatus = void 0;
/**
 * Numeric bonding status
 *
 * @see https://github.com/cosmos/cosmos-sdk/blob/v0.38.5/types/staking.go#L43-L49
 */
var BondStatus;
(function (BondStatus) {
    BondStatus[BondStatus["Unbonded"] = 0] = "Unbonded";
    BondStatus[BondStatus["Unbonding"] = 1] = "Unbonding";
    BondStatus[BondStatus["Bonded"] = 2] = "Bonded";
})(BondStatus = exports.BondStatus || (exports.BondStatus = {}));
function setupStakingExtension(base) {
    return {
        staking: {
            delegatorDelegations: async (delegatorAddress) => base.get(`/staking/delegators/${delegatorAddress}/delegations`),
            delegatorUnbondingDelegations: async (delegatorAddress) => base.get(`/staking/delegators/${delegatorAddress}/unbonding_delegations`),
            delegatorTransactions: async (delegatorAddress) => base.get(`/staking/delegators/${delegatorAddress}/txs`),
            delegatorValidators: async (delegatorAddress) => base.get(`/staking/delegators/${delegatorAddress}/validators`),
            delegatorValidator: async (delegatorAddress, validatorAddress) => base.get(`/staking/delegators/${delegatorAddress}/validators/${validatorAddress}`),
            delegation: async (delegatorAddress, validatorAddress) => base.get(`/staking/delegators/${delegatorAddress}/delegations/${validatorAddress}`),
            unbondingDelegation: async (delegatorAddress, validatorAddress) => base.get(`/staking/delegators/${delegatorAddress}/unbonding_delegations/${validatorAddress}`),
            redelegations: async () => base.get(`/staking/redelegations`),
            validators: async (params) => base.get(`/staking/validators`, params),
            validator: async (validatorAddress) => base.get(`/staking/validators/${validatorAddress}`),
            validatorDelegations: async (validatorAddress) => base.get(`/staking/validators/${validatorAddress}/delegations`),
            validatorUnbondingDelegations: async (validatorAddress) => base.get(`/staking/validators/${validatorAddress}/unbonding_delegations`),
            historicalInfo: async (height) => base.get(`/staking/historical_info/${height}`),
            pool: async () => base.get(`/staking/pool`),
            parameters: async () => base.get(`/staking/parameters`),
        },
    };
}
exports.setupStakingExtension = setupStakingExtension;
//# sourceMappingURL=staking.js.map
#!/usr/bin/env bash
#### Prepare Bill ######################################################
rm ~/electra/billing.log
electrad query meter currentcycle-id
electrad tx meter prepare-bill 78 false --from bob -y
more ~/electra/billing.log
#### Prepare Bill & Write in the blockchain ############################
rm ~/electra/billing.log
electrad query meter currentcycle-id
electrad tx meter prepare-bill 78 true --from bob -y
more ~/electra/billing.log
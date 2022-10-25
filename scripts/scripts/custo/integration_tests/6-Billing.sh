#!/usr/bin/env bash
electrad query meter currentcycle-id
electrad tx meter prepare-bill 78 false --from bob -y
more ~/electra/billing.log
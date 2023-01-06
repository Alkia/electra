#!/bin/bash

KEY="test"
CHAINID="electra"
KEYRING="test"
MONIKER="electra"
KEYALGO="secp256k1"
LOGLEVEL="info"


# validate dependencies are installed
command -v jq > /dev/null 2>&1 || { echo >&2 "jq not installed. More info: https://stedolan.github.io/jq/download/"; exit 1; }
command -v toml > /dev/null 2>&1 || { echo >&2 "toml not installed. More info: https://github.com/mrijken/toml-cli"; exit 1; }

electrad config keyring-backend $KEYRING
electrad config chain-id $CHAINID

# My dear Alice
# electrad keys add alice --recover 
# satisfy dirt consider electric apart coin later recall enhance pizza dust way shop erosion innocent actor member double always budget rival congress person uncle

# My dear bob
# electrad keys add bob --recover 
# mnemonic: address slogan history guitar fringe health coral dish exercise excite utility now thank mosquito soul vacuum doctor squeeze host never dinosaur afford tide tide

electrad keys add $KEY --keyring-backend $KEYRING --algo $KEYALGO
electrad keys add test1 --keyring-backend $KEYRING --algo $KEYALGO
electrad keys add test2 --keyring-backend $KEYRING --algo $KEYALGO
electrad keys add test3 --keyring-backend $KEYRING --algo $KEYALGO

echo >&1 "\n"

# init chain
electrad init $MONIKER --chain-id $CHAINID

# Change parameter token denominations to uelectra
cat $HOME/.electra/config/genesis.json | jq '.app_state["staking"]["params"]["bond_denom"]="uelectra"' > $HOME/.electra/config/tmp_genesis.json && mv $HOME/.electra/config/tmp_genesis.json $HOME/.electra/config/genesis.json
cat $HOME/.electra/config/genesis.json | jq '.app_state["crisis"]["constant_fee"]["denom"]="uelectra"' > $HOME/.electra/config/tmp_genesis.json && mv $HOME/.electra/config/tmp_genesis.json $HOME/.electra/config/genesis.json
cat $HOME/.electra/config/genesis.json | jq '.app_state["gov"]["deposit_params"]["min_deposit"][0]["denom"]="uelectra"' > $HOME/.electra/config/tmp_genesis.json && mv $HOME/.electra/config/tmp_genesis.json $HOME/.electra/config/genesis.json
cat $HOME/.electra/config/genesis.json | jq '.app_state["mint"]["params"]["mint_denom"]="uelectra"' > $HOME/.electra/config/tmp_genesis.json && mv $HOME/.electra/config/tmp_genesis.json $HOME/.electra/config/genesis.json

# Set gas limit in genesis
# cat $HOME/.electra/config/genesis.json | jq '.consensus_params["block"]["max_gas"]="10000000"' > $HOME/.electra/config/tmp_genesis.json && mv $HOME/.electra/config/tmp_genesis.json $HOME/.electra/config/genesis.json

# enable rest server and swagger
# toml set --toml-path $HOME/.electra/config/app.toml api.address "tcp://0.0.0.0:1350"
# toml set --toml-path $HOME/.electra/config/app.toml api.swagger true
# toml set --toml-path $HOME/.electra/config/app.toml api.enable true

# Allocate genesis accounts (cosmos formatted addresses)
electrad add-genesis-account $KEY 1000000000000uelectra --keyring-backend $KEYRING
electrad add-genesis-account test1 1000000000uelectra --keyring-backend $KEYRING
electrad add-genesis-account test2 1000000000uelectra --keyring-backend $KEYRING
electrad add-genesis-account test3 50000000uelectra --keyring-backend $KEYRING

# Sign genesis transaction
electrad gentx $KEY 1000000uelectra --keyring-backend $KEYRING --chain-id $CHAINID

# Collect genesis tx
electrad collect-gentxs

# Run this to ensure everything worked and that the genesis file is setup correctly
electrad validate-genesis

# Start the node (remove the --pruning=nothing flag if historical queries are not needed)
# electrad start --pruning=nothing --log_level $LOGLEVEL --minimum-gas-prices=0.0001uelectra --rpc.laddr tcp://0.0.0.0:1711
electrad start --pruning=nothing --log_level $LOGLEVEL --minimum-gas-prices=0.0001uelectra 

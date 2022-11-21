# Electra Testnet guide
![Electra (1)](https://github.com/Alkia/electra/raw/master/vue/public/Electra.png)


[Website](https://www.alkia.net/) 
[EXPLORER](https://www.mintscan.io/electra/validators)
=
- **Recommended hardware requirements**:

| Network   |CPU | RAM  | Storage  | 
|-----------|----|------|----------|
| Testnet   |  2 | 8GB | 0.25TB SSD/NVMe |
| Mainnet   |  2 | 16GB | 0.5TB SSD/NVMe |


| Ports   | Role  | 
|-----------|----------|
| 1318      | API      |
| 9092      | grpc     |
| 9093      | grpc-web |
| 26658     | P2P laddr|
| 26659     | rpc laddr|
| 6061      | rpc pprof|

### Preparing the server

    sudo apt update && sudo apt upgrade -y && \
    sudo apt install curl tar wget clang pkg-config libssl-dev jq build-essential bsdmainutils git make ncdu gcc git jq chrony liblz4-tool -y
    
## GO 18.7 (one command)
    wget https://golang.org/dl/go1.18.7.linux-amd64.tar.gz; \
    rm -rv /usr/local/go; \
    tar -C /usr/local -xzf go1.18.7.linux-amd64.tar.gz && \
    rm -v go1.18.7.linux-amd64.tar.gz && \
    echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> ~/.bash_profile && \
    source ~/.bash_profile && \
    go version
    
## Build    (27.10.22)
    git clone https://github.com/alkia/electra
    cd electra
    git checkout v0.2.0
    make install
`electrad version`
+ 0.2.0

  
      
## Set the variables
```
# set your names
ELECTRA_NODENAME="MY_NODE"
ELECTRA_WALLET="MY_WALLET"
# update bootstrap-peers
BOOTSTRAP_PEERS=

ELECTRA_NODENAME="electra01"
ELECTRA_WALLET="alice"
ELECTRA_CHAIN="electra-testnet-0"  # do not change

## Init node
```
    # do init
    electrad init $ELECTRA_NODENAME --chain-id $ELECTRA_CHAIN

    # OUTPUT EXAMPLE
 {"app_message":{"auth":{"accounts":[],"params":{"max_memo_characters":"256","sig_verify_cost_ed25519":"590","sig_verify_cost_secp256k1":"1000","tx_sig_limit":"7","tx_size_cost_per_byte":"10"}},"authz":{"authorization":[]},"bank":{"balances":[],"denom_metadata":[],"params":{"default_send_enabled":true,"send_enabled":[]},"supply":[]},"capability":{"index":"1","owners":[]},"crisis":{"constant_fee":{"amount":"1000","denom":"stake"}},"distribution":{"delegator_starting_infos":[],"delegator_withdraw_infos":[],"fee_pool":{"community_pool":[]},"outstanding_rewards":[],"params":{"base_proposer_reward":"0.010000000000000000","bonus_proposer_reward":"0.040000000000000000","community_tax":"0.020000000000000000","withdraw_addr_enabled":true},"previous_proposer":"","validator_accumulated_commissions":[],"validator_current_rewards":[],"validator_historical_rewards":[],"validator_slash_events":[]},"evidence":{"evidence":[]},"feegrant":{"allowances":[]},"genutil":{"gen_txs":[]},"gov":{"deposit_params":{"max_deposit_period":"172800s","min_deposit":[{"amount":"10000000","denom":"stake"}]},"deposits":[],"proposals":[],"starting_proposal_id":"1","tally_params":{"quorum":"0.334000000000000000","threshold":"0.500000000000000000","veto_threshold":"0.334000000000000000"},"votes":[],"voting_params":{"voting_period":"172800s"}},"ibc":{"channel_genesis":{"ack_sequences":[],"acknowledgements":[],"channels":[],"commitments":[],"next_channel_sequence":"0","receipts":[],"recv_sequences":[],"send_sequences":[]},"client_genesis":{"clients":[],"clients_consensus":[],"clients_metadata":[],"create_localhost":false,"next_client_sequence":"0","params":{"allowed_clients":["06-solomachine","07-tendermint"]}},"connection_genesis":{"client_connection_paths":[],"connections":[],"next_connection_sequence":"0","params":{"max_expected_time_per_block":"30000000000"}}},"meter":{"billingcyclesList":[],"customerbillinglineList":[],"customerbillsList":[],"meterdirectoryList":[],"meterreadingsList":[],"params":{"billingAdmin":"electra1krkk5xtp8s7lk9xf2az70txle50zfzga7dah87","maxBillingIteration":"16","moduleParamBestForCustomer":true,"payAutomatically":false},"powerPurchaseContractList":[],"ppaMapList":[],"producerbillinglineList":[],"producerbillsList":[]},"mint":{"minter":{"annual_provisions":"0.000000000000000000","inflation":"0.130000000000000000"},"params":{"blocks_per_year":"6311520","goal_bonded":"0.670000000000000000","inflation_max":"0.200000000000000000","inflation_min":"0.070000000000000000","inflation_rate_change":"0.130000000000000000","mint_denom":"stake"}},"monitoringp":{"connectionChannelID":null,"consumerClientID":null,"monitoringInfo":null,"params":{"consumerChainID":"spn-1","consumerConsensusState":{"nextValidatorsHash":"","root":{"hash":""},"timestamp":""},"consumerRevisionHeight":"1","consumerUnbondingPeriod":"1814400","lastBlockHeight":"1"},"port_id":"monitoringp"},"params":null,"slashing":{"missed_blocks":[],"params":{"downtime_jail_duration":"600s","min_signed_per_window":"0.500000000000000000","signed_blocks_window":"100","slash_fraction_double_sign":"0.050000000000000000","slash_fraction_downtime":"0.010000000000000000"},"signing_infos":[]},"staking":{"delegations":[],"exported":false,"last_total_power":"0","last_validator_powers":[],"params":{"bond_denom":"stake","historical_entries":10000,"max_entries":7,"max_validators":100,"unbonding_time":"1814400s"},"redelegations":[],"unbonding_delegations":[],"validators":[]},"transfer":{"denom_traces":[],"params":{"receive_enabled":true,"send_enabled":true},"port_id":"transfer"},"upgrade":{},"vesting":{}},"chain_id":"electra-testnet-0","gentxs_dir":"","moniker":"electra01","node_id":"62504544f96a078cb70709486e318035c048ebc6"}


```

# Install the Genesis file
    wget https://www.alkia.net/mainnet/genesis.json
    mv genesis.json ~/.electrad/config/    

# save vars
echo 'export ELECTRA_CHAIN='$ELECTRA_CHAIN >> $HOME/.profile
echo 'export ELECTRA_NODENAME='${ELECTRA_NODENAME} >> $HOME/.profile
echo 'export ELECTRA_WALLET='${ELECTRA_WALLET} >> $HOME/.profile
source $HOME/.profile

# update bootstrap-peers
BOOTSTRAP_PEERS=""
# check
echo $BOOTSTRAP_PEERS
# set
sed -i.bak -e "s/^bootstrap-peers *=.*/bootstrap-peers = \"$BOOTSTRAP_PEERS\"/" $HOME/.electra/config/config.toml


```


## Set up the minimum gas price $HOME/.evmosd/config/app.toml as well as seed and peers
    sed -i.bak -e "s/^minimum-gas-prices *=.*/minimum-gas-prices = \"1uelectra\"/;" ~/.electra/config/app.toml

    external_address=$(wget -qO- eth0.me)
    sed -i.bak -e "s/^external_address *=.*/external_address = \"$external_address:26658\"/" $HOME/.electra/config/config.toml

    peers="d8ac979da3dbe2f796e2344616096160dc5cfdc1@164.92.191.127:26656,d5d418256279900c3d1fbf2137ce7142d6f6c682@65.108.139.20:26656,1915b0217865b968646768e2761a8669d5e24bd5@65.108.44.149:26656,1a7bee67d6337d09380b824b952872bdc5dca86f@38.242.194.56:26656,b02259a11e4ee46b29668cfc957e530022a3fca1@62.171.142.145:26656,cc321917ce82b6c541c687420ad5ae0b4b5e055a@144.76.224.246:26656"
    sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.electra/config/config.toml
    seeds=""
    sed -i.bak -e "s/^seeds =.*/seeds = \"$seeds\"/" $HOME/.electra/config/config.toml 
    
## Pruning (optional)
    pruning="custom" && \
    pruning_keep_recent="100" && \
    pruning_keep_every="0" && \
    pruning_interval="10" && \
    sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.electra/config/app.toml && \
    sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.electra/config/app.toml && \
    sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.electra/config/app.toml && \
    sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.electra/config/app.toml
## Indexer (optional)    
    indexer="null" && \
    sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.electrad/config/config.toml    
    
## Reset before start
```
electrad tendermint unsafe-reset-all  
```
## Config client

```bash
electrad config chain-id $ELECTRA_CHAIN
electrad config keyring-backend test
```

##
    
## Create a service file
    sudo tee /etc/systemd/system/electrad.service > /dev/null <<EOF
    [Unit]
    Description=electra
    After=network-online.target

    [Service]
    User=$USER
    ExecStart=$(which electrad) start
    Restart=on-failure
    RestartSec=3
    LimitNOFILE=65535

    [Install]
    WantedBy=multi-user.target
    EOF
    
 [Snapshot](https://polkachu.com/tendermint_snapshots/electra)    (optional) \
    or \
 [RPC](https://nodejumper.io/electra/sync) (optional)
 
# Start
    sudo systemctl daemon-reload
    sudo systemctl enable electrad
    sudo systemctl restart electrad
    sudo journalctl -u electrad -f -o cat

## Create/recover wallet
     electrad keys add <walletname>
     electrad keys add <walletname> --recover
##### when creating, do not forget to write down the seed phrase    
    
## Delete node

    sudo systemctl stop electrad && \
    sudo systemctl disable electrad && \
    rm /etc/systemd/system/electrad.service && \
    sudo systemctl daemon-reload && \
    cd $HOME && \
    rm -rf .electrad && \
    rm -rf electra && \
    rm -rf $(which electrad)

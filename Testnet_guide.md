# Electra Testnet guide
![Electra (1)](https://github.com/Alkia/electra/raw/master/vue/public/Electra.png)


[Website](https://www.alkia.net/) \
[EXPLORER](https://www.mintscan.io/electra/validators)
=
- **Recommended hardware requirements**:

| Network   |CPU | RAM  | Storage  | 
|-----------|----|------|----------|
| Testnet   |  2 | 8GB | 0.25TB SSD/NVMe |
| Mainnet   |  2 | 16GB | 0.5TB SSD/NVMe |

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
    git clone https://github.com/evmos/evmos
    cd evmos
    git checkout v1.0.1
    make install
`electrad version`
+ 1.0.1

      electrad init <moniker-name> --chain-id evmos_9001-2
    
## Create/recover wallet
     electrad keys add <walletname>
     electrad keys add <walletname> --recover
##### when creating, do not forget to write down the seed phrase    
## Genesis
    wget https://www.alkia.net/mainnet/genesis.json
    mv genesis.json ~/.electrad/config/    
## Set up the minimum gas price $HOME/.evmosd/config/app.toml as well as seed and peers
    sed -i.bak -e "s/^minimum-gas-prices *=.*/minimum-gas-prices = \"0.0electra\"/;" ~/.electrad/config/app.toml

    external_address=$(wget -qO- eth0.me)
    sed -i.bak -e "s/^external_address *=.*/external_address = \"$external_address:26656\"/" $HOME/.electrad/config/config.toml

    peers="d8ac979da3dbe2f796e2344616096160dc5cfdc1@164.92.191.127:26656,d5d418256279900c3d1fbf2137ce7142d6f6c682@65.108.139.20:26656,1915b0217865b968646768e2761a8669d5e24bd5@65.108.44.149:26656,1a7bee67d6337d09380b824b952872bdc5dca86f@38.242.194.56:26656,b02259a11e4ee46b29668cfc957e530022a3fca1@62.171.142.145:26656,cc321917ce82b6c541c687420ad5ae0b4b5e055a@144.76.224.246:26656"
    sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.electrad/config/config.toml
    seeds=""
    sed -i.bak -e "s/^seeds =.*/seeds = \"$seeds\"/" $HOME/.electrad/config/config.toml 
    
## Pruning (optional)
    pruning="custom" && \
    pruning_keep_recent="100" && \
    pruning_keep_every="0" && \
    pruning_interval="10" && \
    sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.electra/config/app.toml && \
    sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.electrad/config/app.toml && \
    sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.electrad/config/app.toml && \
    sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.electrad/config/app.toml
## Indexer (optional)    
    indexer="null" && \
    sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.electrad/config/config.toml    
    
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
    
    
## Delete node

    sudo systemctl stop electrad && \
    sudo systemctl disable electrad && \
    rm /etc/systemd/system/electrad.service && \
    sudo systemctl daemon-reload && \
    cd $HOME && \
    rm -rf .electrad && \
    rm -rf electra && \
    rm -rf $(which electrad)

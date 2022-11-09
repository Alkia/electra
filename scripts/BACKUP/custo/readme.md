![Electra Logo](/vue/public/Electra.png "Electra")

# Electra
**electra** is the blockchain that enables local micro-grid to operate smoothly between trustless actors enabling a real circular economy based on exchange of electricity units (kWh) by the means of pre-purchased tokens.

## The BlockChain based Micro-Grid Architecture

A **micro-grid**, is a local transport structure semi-isolated from the main transport backbone.

![Electra Logo](/vue/public/Concept.jpg "Architecture")

**BlockChain Meters**, are the key element of the solution. 
- They precisely measure the power exchanged
- They are a circuit breaker for the microgrid
- They embeds a secure wallet having the capacity to validate the blocks
- They store a full copy of the local chain 

**The Grid Gateway** 
The grid gateway synchronize the micro-grid and import extra energy as needed. This gateway is the master node validating the blocks. In some case the national grid gateway can export energy too should the microgrid and the regulation enables it. 

- The grit All features of a BlockChain meter +
- Demand response 
- Stake/Validate the local Layer 2 BlockChain AS well AS the Layer 1 main chain.

![Electra Logo](/vue/public/Concept.png "The concept")

## Get started

**electra** is built using Cosmos SDK and Tendermint and created with Ignite.


```
ignite chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your Electra blockchain in development.

### Configure


Your Electra blockchain in development can be configured with `config.yml`. 

## Test from CLI 

To check the current cycle ID your Electra chain reached, run the following command:
```
electrad query meter currentcycle-id
```
To prepare a bill:
```
electrad tx meter prepare-bill [cycle-id] [record]
```
## Release

To release a new version of your Electra blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1.5
git push origin v0.1.5
```

After a draft release is created, make your final changes from the release page and publish it.

### Install

To install the latest version of your Electra blockchain node's binary, execute the following command on your machine:

```
curl https://get.ignite.com/alkia/electra@latest! | sudo bash
```
`alkia/electra` are the `username` and `repo_name` of the Github repository to which the source code is pushed. 



### Web Frontend

Electra has a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages.

## Implementing the blockachain meter
![Electra Logo](/vue/public/ElectraSmartMeter.png "Electra BlockChain Smart Meter")
## Learn more
- [Alkia IT Services Co., Ltd.](https://alkia.net)
- [Cosmos SDK docs](https://docs.cosmos.network)
- [Developer Chat](https://discord.gg/ignite)


## Disclaimer | No Liability
This project is bleeding-edge and does not conform with Poetry package structure.

As far as the law allows, this software comes as is, without any warranty or condition, and no contributor will be liable to anyone for any damages related to this software or this license, under any kind of legal claim.

## References

https://docs.tendermint.com/master/tendermint-core/validators.html
https://hub.cosmos.network/master/validators/overview.html


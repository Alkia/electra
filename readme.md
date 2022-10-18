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

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Your Electra blockchain in development can be configured with `config.yml`. 

### Web Frontend

Ignite CLI has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Ignite front-end development](https://github.com/ignite/web).

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.ignite.com/username/electra@latest! | sudo bash
```
`username/electra` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).


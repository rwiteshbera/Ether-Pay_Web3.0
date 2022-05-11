// https://eth-rinkeby.alchemyapi.io/v2/OCF3jbbyk96uawr4TWAhEo-vUQDor24L

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    testnet: {
      url: "http://127.0.0.1:8545",
      accounts: ['27c7852ef7aa3eab3fb1c3efa36e0dba492382f18f0b6d43021aef305d80526b']
    }
  }
}
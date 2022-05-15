// https://eth-rinkeby.alchemyapi.io/v2/OCF3jbbyk96uawr4TWAhEo-vUQDor24L

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    testnet: {
      url: "http://127.0.0.1:8545",
      accounts: ['08705896345e65fc890ea0bb43e89ee42e889c9bee8878a554151d0b0c8dc65e']
    }
  }
}
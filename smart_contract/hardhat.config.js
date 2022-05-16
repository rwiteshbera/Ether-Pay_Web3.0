// https://eth-rinkeby.alchemyapi.io/v2/OCF3jbbyk96uawr4TWAhEo-vUQDor24L

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/As6tKnnWq8XEE49TjFtm1XoTEqC72nRW",
      accounts: ['c4665bdc553ec4bdf42ac9edbb2e01593d3f87e8b6edf9be6b35d77f6557ec04']
    }
  }
}
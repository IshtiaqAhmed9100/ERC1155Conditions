require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.24",
        settings: {
          "viaIR": false,
          optimizer: {
            enabled: true,
            runs: 1000000,
          },
        },
      },
    ],
  },
  networks: {
    sepolia: {
      url: process.env.URL,
      accounts: [process.env.PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
};
// npx hardhat ignition deploy ignition / modules / Lock.js--network sepolia
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "sepolia",
  networks: {
    sepolia:{
      url: 'https://eth-sepolia.g.alchemy.com/v2/RyBmH6DBSV92Ntp-2-nZf3FKXGKTK3E0' ,
      accounts: ['5b47b2392e815f7de69a003514d62503a1775b6ab8a7f4f3227c14e4166f2f2e','b54e0db00210ca7af566b01a6f78dcbe8a53d6595db165f293e23b07a8cad1d7']
    }
  }
};
//0xeEF11F757f6371c483eB20863757eF4bb9196Ac6

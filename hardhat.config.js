require("@nomiclabs/hardhat-solpp");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });


const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const ROPSTEN_PRIVATE_KEY = process.env.ROPSTEN_PRIVATE_KEY;

const RINKEBY_ALCHEMY_API_KEY = process.env.RINKEBY_ALCHEMY_API_KEY;

const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
      
   /*ropsten: {
      //how to identify test network where app would be deploy
      url: ALCHEMY_API_KEY_URL,        
      accou,nts: [ROPSTEN_PRIVATE_KEY],
    },*/

    rinkeby: {
      //how to identify test network where app would be deploy
      url: RINKEBY_ALCHEMY_API_KEY,        
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  }
};

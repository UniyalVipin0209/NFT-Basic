// as typeof EthersT
const { ethers } = require("hardhat");

async function main(){
    console.log(hre);
    const nftContract= await ethers.getContractFactory("console");
    const deployedContract= await nftContract.deploy();
    console.log("NFT Contract Address",deployedContract );
}

main().then(()=>process.exit(0)).catch((error)=>{
    console.error(error);
    process.exit(1);

});
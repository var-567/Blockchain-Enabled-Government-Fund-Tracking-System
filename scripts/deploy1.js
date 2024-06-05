const hre = require("hardhat");

async function main()
{
    const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString())
    const contracfactory=await hre.ethers.getContractFactory("transcation");
    const contract=await contracfactory.deploy('0xC3a11FBB2e6f089930eb01dD72bd07875dFe377a');
    await contract.deployed();


    console.log("contract deployed to : ", contract.address);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
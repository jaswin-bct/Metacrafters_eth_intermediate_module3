const { ethers } = require("hardhat");// import
async function main() {
  const [deployer] = await ethers.getSigners();//get deployer signer address

  console.log("Deploying contracts with the account:", deployer.address);
      //main ,deploying
  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy(
    "Detex",
    "DTX",
    ethers.parseEther("1000")
  );

  console.log("MyToken deployed to:", myToken.target);
}
//execution main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

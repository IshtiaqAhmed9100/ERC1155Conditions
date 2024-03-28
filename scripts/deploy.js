const { ethers } = require("hardhat");
const { run } = require("hardhat");
async function verify(address, constructorArguments) {
  console.log(
    `verify  ${address} with arguments ${constructorArguments.join(",")}`
  );
  await run("verify:verify", {
    address,
    constructorArguments,
  });
}
async function main() {
  let owner = "0x12eF0F1C99D8FD50fFd37cCd12B09Ef7f1213269";
  let name = "ERC1155NFT";
  let symbol = "ENF";

//   const NFT1155Conditions = await ethers.deployContract("NFT1155Conditions", [ name,symbol, ]);

//   console.log("Deploying NFT1155Conditions...");
//   await NFT1155Conditions.waitForDeployment();

//   console.log("NFT1155Conditions deployed to:", NFT1155Conditions.target);

//   await new Promise((resolve) => setTimeout(resolve, 10000));

  verify("0x1F06430c519c421C1ebfF2051EEDE87d4E0858Fe", [name, symbol]);
}
main();

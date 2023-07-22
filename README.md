# MyToken Contract

The MyToken contract is an ERC20-compliant token contract that allows users to create and manage their own token. This contract provides functionalities such as token minting, transferring tokens between addresses, and burning tokens.

## Description

The purpose of this project is to enable users to have full control over their own token by creating a customizable ERC20 token contract. Users can set the name, symbol, and total supply of their token during deployment. The contract owner has the ability to mint new tokens and distribute them to specific addresses. Users can transfer their tokens to other addresses, allowing for peer-to-peer transactions. Additionally, users can burn their tokens if they no longer need them, effectively reducing the token supply.

By providing a flexible and customizable token contract, this project empowers individuals, organizations, and developers to create and manage their own tokens on the Ethereum blockchain. This token can be used for various purposes, such as creating a reward system, facilitating in-app transactions, or launching a new cryptocurrency.

## Getting Started

### Installing

To run the contract, follow these steps:

1. Install the project dependencies by running the following command:

   ```
   npm install
   ```

2. Start a blockchain locally by running the command: 
   ```
   npx hardhat node
   ```

3. Test the contract by running the command: 
   ```
   npx hardhat test
   ```

4. Deploy the Smart Contract smart contract by running the deployment script:

   ```
   npx hardhat run scripts/deploy.js --network localhost
   ```

### Executing program

* Go to [remix](remix.ethereum.org) IDE.
* Paste the contract in the IDE.
* Compile the contract.
* Select the `Dev - Hardhat Provider` as the environment in the Deploy tab.
* Paste your contract address in remix and click on `At Address`.
* Play with your contract in remix!!

## Help

If you encounter any issues or have any questions, you can refer to the project's documentation or seek help from the project contributors.

## Authors

* -[Jaswin](https://github.com/jaswin-bct)

## License

This code is released under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.

# ethereum-todolist-dapp

todo-list applications were always the best kind of prototype applications to learn new technologies. So, here we go again, this time learning and deploying our first smart contract on the ethereum network with the help of truffle, solidity and ganache.

## prerequisites

1. **Metamask** a crypto wallet & our gateway to blockchain apps.
2. **Ganache** a local blockchain with fake etherium to deploy the smart contract and run our transactions.
3. **node & npm** we know why ;)
4. **truffle** a development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM).
5. **solidity** an object-oriented, high-level language for implementing smart contracts. Smart contracts are programs which govern the behaviour of accounts within the Ethereum state.
6. **Mocha** & **Chai** for asynchronous testing for javascript.
7. **lite server** a lighweight and a standard client side application.

go to the main directory and run ```npm i``` to install the dependencies.

## terminal

we can run multiple commands in terminal to interact with our blockchain application.

- ```truffle init``` to start the project
- ```truffle compile``` to compile the code written in solidity
- ```truffle migrate --reset``` to write our application into the blockchain, the flag is to force the migration if a previous version of the smart contract already exists.
- ```truffle test``` to run tests.
- ```truffle console``` allows us to interact with our smart contract directly, using variable and other advanced programming aspects.
  - example of getting of version of the deployed smart contract ```todolist = await TodoList.deployed()```

## proof of interacting with the dapp

the pictures below shows respectively the results of running migrations and tests.

<p align="center">
  <img src="https://user-images.githubusercontent.com/50111205/149852888-99746fcc-1e1d-4549-a030-d613f12fdaac.png" alt="Screenshot_20220114_222901"/>
</p>

![Screenshot_20220118_015620](https://user-images.githubusercontent.com/50111205/149852896-d6fd23f2-846c-47ef-a425-7de4c3d02b13.png)


## running the application

starting the server: ```npm run dev```

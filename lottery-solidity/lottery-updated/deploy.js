const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { abi, evm } = require('./compile');

//?import .env
require('dotenv').config()

const provider = new HDWalletProvider(
  process.env.METAMASK_MNEMONIC,
  process.env.INFURA_AOU_KEY_URL
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object })
    .send({ gas: '1000000', from: accounts[0] });

  console.log(JSON.stringify(abi));
  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();

import web3 from './web3';

const address = '0x95b2E314eE5Ac421F9BC16207c724A3195a43Bde';
const abi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor",
    "signature": "constructor"
  }, {
    "inputs": [],
    "name": "enter",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true,
    "signature": "0xe97dcb62"
  }, {
    "inputs": [],
    "name": "getPlayers",
    "outputs": [{
      "internalType": "address payable[]",
      "name": "",
      "type": "address[]"
    }],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x8b5b9ccc"
  }, {
    "inputs": [],
    "name": "manager",
    "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x481c6a75"
  }, {
    "inputs": [],
    "name": "pickWinner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x5d495aea"
  }, {
    "inputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "name": "players",
    "outputs": [{
      "internalType": "address payable",
      "name": "",
      "type": "address"
    }],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0xf71d96cb"
  }
]
export default new web3.eth.Contract(abi, address);
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const coinbase = web3.eth.coinbase;
const balance = web3.eth.getBalance(coinbase);

console.log(balance);



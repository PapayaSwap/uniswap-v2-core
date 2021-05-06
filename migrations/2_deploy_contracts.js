const UniswapV2ERC20 = artifacts.require("UniswapV2ERC20");
const UniswapV2Factory = artifacts.require("UniswapV2Factory");
const UniswapV2Pair = artifacts.require("UniswapV2Pair");


// in web front-end, use an onload listener and similar to this manual flow ... 



module.exports = function (deployer) {
  deployer.then(async () => {
    var accounts;
    await web3.eth.getAccounts(function(err,res) { accounts = res; });
    var owner = accounts[0]; // first account

    await deployer.deploy(UniswapV2Factory, owner);


  });
};


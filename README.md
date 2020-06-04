# function_signature

## usage

```console
$ npm install keccak

$ node solidity_signature.js <truffle compiled JSON filename>
```

## example

```console
$ node solidity_signature.js ~/some/truffle_proj/build/contracts/ERC20.json
allowance(address,address)=dd62ed3e
approve(address,uint256)=095ea7b3
balanceOf(address)=70a08231
constructor=968ffe4f
decimals()=313ce567
decreaseAllowance(address,uint256)=a457c2d7
increaseAllowance(address,uint256)=39509351
name()=06fdde03
symbol()=95d89b41
totalSupply()=18160ddd
transfer(address,uint256)=a9059cbb
transferFrom(address,address,uint256)=23b872dd
```

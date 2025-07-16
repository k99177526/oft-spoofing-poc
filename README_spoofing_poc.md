
# OFTAdapter ERC2771 Spoofing PoC

## Summary
This PoC demonstrates how an attacker can spoof `msg.sender` using a fake ERC2771 forwarder
to call the `enable(true)` function on the `OFTAdapterForSand` contract without proper authorization.

## Requirements
- Hardhat
- Node.js
- Ethers.js

## Setup

```bash
git clone https://github.com/k99177526/oft-spoofing-poc
cd oft-spoofing-poc
npm install
```

## Run Exploit

```bash
npx hardhat run updated_poc_erc2771_spoofing.js --network localhost
```

🔧 Before running the script, replace `0xYourOFTAdapterContractAddress` in the script
with the actual deployed address of the OFTAdapterForSand contract (on Hardhat or testnet).

Make sure to deploy the vulnerable contract locally before running the exploit.

## Note
This is for responsible disclosure and educational purposes only.
The vulnerability was submitted through Immunefi via proper legal process.

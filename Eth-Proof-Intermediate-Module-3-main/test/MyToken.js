const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
  let MyToken;
  let myToken;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    MyToken = await ethers.getContractFactory("MyToken");
    [owner, addr1, addr2] = await ethers.getSigners();

    myToken = await MyToken.deploy("MyToken", "MTK", ethers.parseEther("1000"));
    await myToken.waitForDeployment();
  });

  it("should have correct initial values", async function () {
    expect(await myToken.name()).to.equal("MyToken");
    expect(await myToken.symbol()).to.equal("MTK");
    expect(await myToken.totalSupply()).to.equal(ethers.parseEther("1000"));
    expect(await myToken.balanceOf(owner.address)).to.equal(
      ethers.parseEther("1000")
    );
  });

  it("should transfer tokens", async function () {
    await myToken.transfer(addr1.address, ethers.parseEther("100"));

    expect(await myToken.balanceOf(owner.address)).to.equal(
      ethers.parseEther("900")
    );
    expect(await myToken.balanceOf(addr1.address)).to.equal(
      ethers.parseEther("100")
    );
  });

  it("should burn tokens", async function () {
    await myToken.burn(ethers.parseEther("100"));

    expect(await myToken.balanceOf(owner.address)).to.equal(
      ethers.parseEther("900")
    );
    expect(await myToken.totalSupply()).to.equal(ethers.parseEther("900"));
  });

  it("should only allow the owner to mint tokens", async function () {
    await expect(
      myToken.connect(addr1).mint(addr1.address, ethers.parseEther("100"))
    ).to.be.revertedWith("Only the contract owner can perform this action");

    await myToken.connect(owner).mint(addr1.address, ethers.parseEther("100"));

    expect(await myToken.balanceOf(addr1.address)).to.equal(
      ethers.parseEther("100")
    );
    expect(await myToken.totalSupply()).to.equal(ethers.parseEther("1100"));
  });
});

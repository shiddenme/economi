const Economi = artifacts.require("Economi")
const Web3 = require("web3")
const web3 = new Web3()

const toWei = amount => web3.utils.toWei(String(amount), 'ether')

contract("Economi", accounts => {
  let instance

  beforeEach(async () => {
    instance = await Economi.deployed()
  })

  it("Testing generate function", async () => {
    await instance.generateNote(100, accounts[2], { from: accounts[0] })
  })

  it("View note data", async () => {
    let note = await instance.getNoteInformation(1)
    assert.equal(note[3], 100)
  })
})

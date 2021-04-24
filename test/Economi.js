const Economi = artifacts.require("Economi")
const EconomiGame = artifacts.require("EconomiGame")

const Web3 = require("web3")
const web3 = new Web3()

const toWei = amount => web3.utils.toWei(String(amount), 'ether')

const timeout = (delay, value) => {
   return new Promise(function(resolve) {
       setTimeout(() => resolve(value), delay)
   })
}

contract("Economi", accounts => {
  let economi 
  let game

  beforeEach(async () => {
    economi = await Economi.deployed()
    game = await EconomiGame.deployed()
  })


  /*
  it("Ensure endtime is 10 minutes from start time", async () => {
    let start = await game.startTime()
    let end = await game.endTime()
    start = new Date(Number(start) * 1000)
    end = new Date(Number(end) * 1000)
    console.log(start, end)
  })
  */

  it("Set the current game address", async () => {
    await economi.setCurrentGameAddress(game.address, { from: accounts[0] })
    const address = await economi.currentGameAddress()
    assert.equal(address, game.address)
  })

  it("Testing generate function", async () => {
    await economi.generateBasicNote(1000, toWei(0.01), { from: accounts[0] })
    await economi.generateBasicNote(2000, toWei(0.02), { from: accounts[0] })
    await economi.generateBasicNote(5000, toWei(0.05), { from: accounts[0] })
    await economi.generateBasicNote(10000, toWei(0.1), { from: accounts[0] })
    await economi.generateBasicNote(20000, toWei(0.2), { from: accounts[0] })
    await economi.generateBasicNote(50000, toWei(0.5), { from: accounts[0] })
    await economi.generateBasicNote(100000, toWei(1), { from: accounts[0] })
  })

  it("Mint Basic Notes", async () => {
    await economi.mintNote(1000, { from: accounts[1], value: toWei(0.01) })
    await economi.mintNote(2000, { from: accounts[2], value: toWei(0.02) })
    await economi.mintNote(5000, { from: accounts[3], value: toWei(0.05) })
    await economi.mintNote(10000, { from: accounts[4], value: toWei(0.1) })
    await economi.mintNote(20000, { from: accounts[5], value: toWei(0.2) })
    await economi.mintNote(50000, { from: accounts[6], value: toWei(0.5) })
    await economi.mintNote(50000, { from: accounts[7], value: toWei(0.5) })
    await economi.mintNote(50000, { from: accounts[8], value: toWei(0.5) })
    await economi.mintNote(100000, { from: accounts[9], value: toWei(1) })
  })

  it("Ensure total supply is accurate", async () => {
    const supply = await economi.totalSupply()
    assert.equal(Number(supply), 9)
  })

  it("Join game", async () => {
    const supply = await economi.totalSupply()
    for (let i=1; i <= supply; i++) {
      //await timeout(5000)
      let owner = await economi.ownerOf(i)
      await economi.approve(game.address, i, { from: accounts[i] })
      assert.equal(owner, accounts[i])
      await game.joinGame(i, { from: accounts[i] })
      owner = await economi.ownerOf(i)
      assert.equal(owner, accounts[0])
    }
  })

  const getAllGDP = async () => {
    const GDP = [
      await game.teamGDP('bankers'),
      await game.teamGDP('programmers'),
      await game.teamGDP('politicians'),
      await game.teamGDP('traders')
    ]

    console.log(
      Number(GDP[0]),
      Number(GDP[1]),
      Number(GDP[2]),
      Number(GDP[3])
    )
  }

  it("log team data.", async () => {
    await game.gameStart({ from: accounts[0] })
  })

  it("Generate events.", async () => {
    for (let i=1; i < 62; i++) {
      try {
        await game.getRandomEvent()
        await getAllGDP()
        await timeout(1000)
      } catch(err) {
        console.log("Game has ended.")
      }
    }
  })

  it("Determine the winner.", async () => {
    let supply = await economi.totalSupply()
    console.log(Number(supply))
    await game.endGame({ from: accounts[0] })
    const winner = await game.winner()
    console.log(winner)
    supply = await economi.totalSupply()
    console.log(Number(supply))
  })
})

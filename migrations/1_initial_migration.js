const Economi = artifacts.require("Economi");
const EconomiGame = artifacts.require("EconomiGame")

module.exports = async (deployer) => {
  await deployer.deploy(Economi)
  await deployer.deploy(EconomiGame, Economi.address)
}

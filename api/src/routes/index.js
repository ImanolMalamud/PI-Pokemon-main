const { Router } = require("express")

const pokemonRoutes = require("./pokemon")
const typeRoutes = require("./type")

const router = Router()

router.use("/pokemons", pokemonRoutes)
router.use("/types", typeRoutes)

module.exports = router

const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonRoutes = require('./pokemon');
const tipoRoutes = require('./type');

const router = Router();

router.use('/pokemons', pokemonRoutes);
router.use('/types', tipoRoutes);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;

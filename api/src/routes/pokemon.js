const { Router } = require('express');
const { Pokemon } = require('../db');
const controlers = require('../controllers/Controllers');
const router = Router();

router.get('/', async (req, res) => {
	const { name } = req.query;
<<<<<<< HEAD
=======
	
>>>>>>> master
	try {
		if (name) {
			const findPokemon = await controlers.getPokemonsName(name);
			return res.json(findPokemon);
		}
		const allPokemons = await controlers.getAllPokemons()
		res.json(allPokemons);
	} catch (error) {
		res.status(400).json(error.message);
	}
});

router.get('/:id', async (req, res) => {
	// Observar que el id del params viene como string.
	const { id } = req.params;
	console.log(id)
	try {
		const pokeInfo = await controlers.getPokemonById(id);
		res.json(pokeInfo);
	} catch (error) {
		console.log(error);
		res.status(400).send(error.message);
	}
});

router.post('/', async (req, res) => {
	const body = req.body;
	
	try {
		const pokeInfo = await controlers.pokeCreate(body);
		res.status(201).send(pokeInfo);
	} catch (error) {
		res.status(400).send(error.message);
	}
});

module.exports = router;

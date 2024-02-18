const { Router } = require('express');
const { Type } = require('../db');
const { getTypes } = require('../controllers/Controllers');
const router = Router();

router.get('/', async (req, res) => {
	try {
		// getTypes hace el llamado desde la base de datos.
		const pokeTypes = await getTypes();
		res.json(pokeTypes);
	} catch (error) {
		res.status(400).json(error.message);
	}
});

module.exports = router;

const axios = require('axios');
const { Pokemon, Type } = require('../db');

const ulr40Pokemon = 'https://pokeapi.co/api/v2/pokemon?limit=70&offset=0';

// Para que el nombre del pokemon empiece en Mayusculas
function toTitleCase(str) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

const getPokemonsApi = async () => {
	try {
		const pokemonApiUrl = await axios.get(ulr40Pokemon);
		const arrayPromise = await pokemonApiUrl?.data.results.map((element) => {
			return axios.get(element.url);
		});
		const promiseData = await Promise.all(arrayPromise);
		const pokeInfo = promiseData?.map((element) => element.data);

		let pokedex = 1;
		
		const pokeInfoFiltered = pokeInfo?.map((element) => {
			

			return {
				id: element.id,
				name: toTitleCase(element.name) ,
				pokedex: pokedex++,
				hp: element.stats[0].base_stat,
				attack: element.stats[1].base_stat,
				defense: element.stats[2].base_stat,
				speed: element.stats[5].base_stat,
				height: element.height,
				weight: element.weight,
				img: element.sprites.other.home.front_default,
				imgShiny: element.sprites.other.home.front_shiny,
				types: element.types.map((element) => element.type.name),
			};
		});
		return pokeInfoFiltered;
	} catch (error) {
		console.log(error, 'getPokemonsApi');
	}
};

const getPokemonDb = async () => {
	const pokeInfoDb = await Pokemon.findAll({
		include: {
			model: Type,
			attributes: ['name'],
			through: {
				attributes: []
			}
		},
	});
	
	// const pokeInfoDb = await Pokemon.findAll();

	// El stringify es para que se vea más legible el pokeInfoDb
	// console.log(JSON.stringify(pokeInfoDb, null, 2));
	return pokeInfoDb;
};

const getAllPokemons = async () => {
	const apiInfo = await getPokemonsApi();
	const dbInfo = await getPokemonDb();
	const allInfo = [...apiInfo, ...dbInfo];

	return allInfo;
};

const getPokemonsName = async (name) => {
	const allPokemons = await getAllPokemons();

	let pokemonFind = allPokemons?.filter((pokemon) =>
		pokemon.name.toLowerCase() === name.toLowerCase()
	);
	
	if (!pokemonFind.length) {
		throw new Error(`No se encontró un pokemon con el nombre ${name}`);
	}
	return pokemonFind;
};

const getPokemonById = async (id) => {
	const allPokemons = await getAllPokemons();
	
	// El id del params viene como string, entonces lo convierto en integer para comparar.
	const findPokemon = allPokemons?.find((pokemon) => pokemon.id === parseInt(id));
	// find me devuelve un objeto pokemon
	console.log('find: ',findPokemon)

	// // find vs filter
	// const filterPokemon = allPokemons?.filter((pokemon) => pokemon.id === parseInt(id));
	// // filter me devuelve un array con un objecto pokemon adentro
	// console.log('filter: ', filterPokemon)

	
	

	if (!findPokemon)
		throw new Error(`El pokemon con id ${id} no fue encontrado`);

	return findPokemon;
};

// typesInDb guarda los types en la db. Esta funcion es llamada desde el index al escuchar el puerto 3001.
const typesInDb = async () => {
	try {
		const apiTypes = await axios.get('https://pokeapi.co/api/v2/type');

		await apiTypes.data.results.map((type) => {
			Type.findOrCreate({
				// Observar que type es un objeto, con la propiedad
				where: {
					name: type.name,
				},
			});
		});
	} catch (error) {
		console.log(error, 'typesInDb');
	}
};

// getTypes te devuelve los types desde la api
const getTypes = async () => {
	const dbTypes = await Type.findAll();

	if (!dbTypes.length) throw new Error(`No se encontraron los tipos`);

	return dbTypes;
};

// pokeCheckName se usa en la funcion pokeCreate
const pokeValidateName = async (name) => {
	const allPokemons = await getAllPokemons();

	const pokemonFind = allPokemons.find(
		pokemon => pokemon.name.toLowerCase() === name.toLowerCase()
	);

	if (pokemonFind) {
		throw new Error(
			`No se pueden crear el pokemon ${name} debido a que ya existe un pokemon con ese nombre`
		);
	}	
};

const pokeCreate = async (body) => {
	const { name, hp, attack, defense, speed, height, weight, img, type } = body;

	if (
		!name ||
		!hp ||
		!attack ||
		!defense ||
		!speed ||
		!height ||
		!weight
	) { throw new Error('Faltan datos')};

	await pokeValidateName(name);

	// La api tiene en total 1154 pokemones
	let pokedex = 1154;

	// Los datos integer del body llegan como string en realidad. Les hago parseInt por eso.
	let newPokemon = await Pokemon.create({
		name: name.toLowerCase(),
		pokedex: ++pokedex,
		hp: parseInt(hp),
		attack: parseInt(attack),
		defense: parseInt(defense),
		speed: parseInt(speed),
		height: parseInt(height),
		weight: parseInt(weight),
		img: img
			? img
			: 'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg',
	});

	const pokeType = await Type.findAll({
		where: {
			name: type,
		},
	});

	// stringify para que se loguee mas lindo
	// console.log("pokeType: \n", JSON.stringify(pokeType, null, 2));

	await newPokemon.addType(pokeType);

	return await Pokemon.findByPk(newPokemon.id, {
		include: {
			model: Type,
			attributes: ['name'],
			through: {
				attributes: [],
			},
		},
	});
};

module.exports = {
	getAllPokemons,
	getPokemonById,
	getPokemonsName,
	typesInDb,
	getTypes,
	pokeCreate,
};

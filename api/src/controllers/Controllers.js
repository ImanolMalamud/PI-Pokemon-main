const axios = require("axios");
const { Pokemon, Type } = require("../db");

const ulr40Pokemon = "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0";

// Para que el nombre del pokemon empiece en Mayusculas
function toTitleCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const getAllPokemons = async () => {
  try {
    const ulr40Pokemon = "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0";

    const pokemonsApiUrlResponse = await axios.get(ulr40Pokemon);
    const pokemonsApiUrl = pokemonsApiUrlResponse.data;

    // Search info of each pokemon. A list of promises is returned.
    const arrayPromise = pokemonsApiUrl.results.map((element) => {
      return axios.get(element.url);
    });

    // Wait for each promise to return something.
    const promiseData = await Promise.all(arrayPromise);

    // We're just interested in the data property (discard a bunch of information given by axios)
    const pokeInfo = promiseData?.map((element) => element.data);

    let pokedex = 1;

    // Format the info to be returned
    const pokeInfoFiltered = pokeInfo?.map((element) => {
      return {
        id: element.id,
        name: toTitleCase(element.name),
        pokedex: pokedex++,
        hp: element.stats[0].base_stat,
        attack: element.stats[1].base_stat,
        defense: element.stats[2].base_stat,
        speed: element.stats[5].base_stat,
        height: element.height,
        weight: element.weight,
        img: element.sprites.other.home.front_default,
        imgShiny: element.sprites.other.home.front_shiny,
        Types: element.types.map((element) => element.type.name),
      };
    });
    return pokeInfoFiltered;
  } catch (error) {
    console.log(error.message);
  }
};

const getPokemonsName = async (name) => {
  const allPokemons = await getAllPokemons();

  let pokemonFind = allPokemons?.filter(
    (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
  );

  if (!pokemonFind.length) {
    throw new Error(`No se encontró un pokemon con el nombre ${name}`);
  }
  return pokemonFind;
};

const getPokemonById = async (id) => {
  const allPokemons = await getAllPokemons();

  // El id del params viene como string, entonces lo convierto en integer para comparar.
  const findPokemon = allPokemons?.find((pokemon) => pokemon.id == id);
  // find me devuelve un objeto pokemon
  // console.log('find: ',findPokemon)

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
    const apiTypes = await axios.get("https://pokeapi.co/api/v2/type");

    await apiTypes.data.results.map((type) => {
      Type.findOrCreate({
        // Observar que type es un objeto, con la propiedad
        where: {
          name: type.name,
        },
      });
    });
  } catch (error) {
    console.log(error, "typesInDb");
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
    (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
  );

  if (pokemonFind) {
    throw new Error(
      `Error al crear el pokemon ${name}. Ya existe uno con ese nombre.`
    );
  }
};

// La api tiene en total 1154 pokemones
let pokedex = 1154;

const pokeCreate = async (body) => {
  const { name, hp, attack, defense, speed, height, weight, img, type } = body;

  if (!name || !hp || !attack || !defense || !speed || !height || !weight) {
    throw new Error("Faltan datos");
  }

  await pokeValidateName(name);

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
      : "https://pbs.twimg.com/profile_images/677508993686700035/5hQ59Dm4_400x400.png",
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
      attributes: ["name"],
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

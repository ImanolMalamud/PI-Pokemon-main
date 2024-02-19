// const axios = require('axios');

// const ulr40Pokemon = 'https://pokeapi.co/api/v2/pokemon?limit=40&offset=0';

// const pokemonsApiUrlResponse = await axios.get(ulr40Pokemon);
// const pokemonsApiUrl = pokemonsApiUrlResponse.data;

// const arrayPromise = pokemonsApiUrl.results.map((element) => {
//     return axios.get(element.url);
// });
// console.log("🚀 ~ arrayPromise ~ arrayPromise:", arrayPromise);


const axios = require('axios');

async function getPokemonData() {
    const ulr40Pokemon = 'https://pokeapi.co/api/v2/pokemon?limit=40&offset=0';

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

    
}

getPokemonData();
import {
	GET_ALL_POKEMONS,
	GET_ALL_TYPES,
	GET_POKEMON_ID,
	GET_ALL_IMG_TYPES,
	CREATE_POKEMON,
	SET_NEW_POKEMON,
	NEW_RESET_ORDER,
	NEW_CHANGE_ORDER,
	NEW_CHANGE_PAGE,
	NEW_FILTER_POKEMONS_BY_NAME,
	NEW_GET_POKEMON_BY_ID,
	NEW_CHANGE_FILTER,
	NEW_RESET_FILTER
} from '../actions/index.js';

import * as reducerControllers from './controllers-reducer.js';

const initialState = {
	pokemons: [],
	types: [],
	imgTypes: [],
	filter: {
		type: ""
	},
	sort: {
		ascName: false,
		descName: false,
		ascAttack: false,
		descAttack: false,
	},
	pokemonsFiltered: [],
	pokemonsSorted: [],
	currentPage: 1,
	newPokemonsPerPage: 12,
	newPokemonDetail: {}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_POKEMONS:
			// Si ha habido algun ordenamiento, no modificamos aquí pokemonsSorted
			for (let prop in state.sort) {
				if (state.sort[prop] === true) {
					return {
						...state,
						pokemons: action.payload,
					};
				}
			}

			// Si ha habido algun filtrado, no modificamos aquí pokemonsFiltered
			for (let filter in state.filter) {
				if (state.filter[filter]) {
					return {
						...state,
						pokemons: action.payload,
					};
				}
			}
			

			// Inicialmente, tanto 'pokemonsFiltered' como 'pokemonsSorted' tienen lo mismo que 'pokemons'
			return {
				...state,
				pokemons: action.payload,
				pokemonsSorted: action.payload,
				pokemonsFiltered: action.payload
			};

		

		case GET_POKEMON_ID:
			return {
				...state,
				loading: false,
				pokeDetail: action.payload,
			};

		case GET_ALL_TYPES:
			return {
				...state,
				types: action.payload,
			};

		case GET_ALL_IMG_TYPES:
			return {
				...state,
				imgTypes: action.payload,
			};

		

		case CREATE_POKEMON:
			return {
				...state,
				newPokemon: true,
			};

		case SET_NEW_POKEMON:
			return {
				...state,
				newPokemon: false,
			};
		

		// queremos hacer un form que envie todos los datos de ordenamiento
		case NEW_RESET_ORDER:
			return {
				...state,
				sort: {
					ascName: false,
					descName: false,
					ascAttack: false,
					descAttack: false,
				},
				pokemonsSorted: state.pokemonsFiltered
			}
		case NEW_CHANGE_ORDER:

			if (action.payload.ascAttack) {
				return {
					...state,
					sort: action.payload,
					pokemonsSorted: reducerControllers.sortAttackAsc(state.pokemonsFiltered)
				}
			}

			if (action.payload.descAttack) {
				return {
					...state,
					sort: action.payload,
					pokemonsSorted: reducerControllers.sortAttackDesc(state.pokemonsFiltered)
				}
			}

			if (action.payload.ascName) {
				return {
					...state,
					sort: action.payload,
					pokemonsSorted: reducerControllers.sortNameAsc(state.pokemonsFiltered)
				}
			}

			if (action.payload.descName) {
				return {
					...state,
					sort: action.payload,
					pokemonsSorted: reducerControllers.sortNameDesc(state.pokemonsFiltered)
				}
			}

			return {
				...state,
				pokemonsSorted: state.pokemonsFiltered
			}
		case NEW_CHANGE_PAGE:
			return {
				...state,
				currentPage: action.payload
			}
		case NEW_FILTER_POKEMONS_BY_NAME:
			if (action.payload.length === 0) {
				return {
					...state,
					currentPage: 1,
					pokemonsSorted: state.pokemons
				}
			}

			return {
				...state,
				currentPage: 1,
				pokemonsFiltered: state.pokemons.filter(poke => {

					let aux = poke.name.slice(0, action.payload.length)

					return aux.toLowerCase() === action.payload.toLowerCase()
				}
				)
			}
		case NEW_GET_POKEMON_BY_ID:
			return {
				...state,
				newPokemonDetail: action.payload
			}
		case NEW_RESET_FILTER:
			return {
				...state,
				filter: {
					type: ""
				}
			}
		case NEW_CHANGE_FILTER:
			return {
				...state,
				filter: action.payload,
				pokemonsFiltered: state.pokemons.filter(pokemon => pokemon.types.includes(action.payload.type))
			}
		
		default:
			return {
				...state
			};
	}
};

export default reducer;

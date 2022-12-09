import * as actions from '../actions'

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
	currentPokemons: [],
	pokemonsPerPage: 12,
	pokemonDetail: {},
	loading: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.GET_ALL_POKEMONS:
			// Si ha habido algun ordenamiento, no modificamos aquí pokemonsSorted
			for (let prop in state.sort) {
				if (state.sort[prop] === true) {

					return {
						...state,
					};
				}
			}

			// Si ha habido algun filtrado, no modificamos aquí pokemonsFiltered
			for (let filter in state.filter) {
				if (state.filter[filter]) {
					return {
						...state,
					};
				}
			}
			

			// Inicialmente, tanto 'pokemonsFiltered' como 'pokemonsSorted' tienen lo mismo que 'pokemons'
			let allPokemons = action.payload
			return {
				...state,
				pokemons: allPokemons,
				pokemonsSorted: allPokemons,
				pokemonsFiltered: allPokemons,
				currentPokemons: state.pokemonsSorted.slice(0, state.pokemonsPerPage),
				loading: false
			};

		case actions.GET_ALL_TYPES:
			return {
				...state,
				types: action.payload,
			};

		case actions.GET_ALL_IMG_TYPES:
			return {
				...state,
				imgTypes: action.payload,
			};

		case actions.CREATE_POKEMON:
			return {
				...state,
				newPokemon: true,
				pokemonsFiltered: state.pokemons
			};

		case actions.SET_NEW_POKEMON:
			return {
				...state,
				newPokemon: false,
			};
		

		// queremos hacer un form que envie todos los datos de ordenamiento
		case actions.RESET_SORT:
			return {
				...state,
				sort: {
					ascName: false,
					descName: false,
					ascAttack: false,
					descAttack: false,
				},
				pokemonsSorted: state.pokemonsFiltered,
				currentPokemons: state.pokemonsFiltered.slice(0, state.pokemonsPerPage),
				currentPage: 1
			}

		case actions.CHANGE_SORT:

			if (action.payload.ascAttack) {
				let aux = reducerControllers.sortAttackAsc(state.pokemonsFiltered)
				return {
					...state,
					sort: action.payload,
					pokemonsSorted: aux,
					currentPokemons: aux.slice(0, state.pokemonsPerPage),
				}
			}

			if (action.payload.descAttack) {
				let aux = reducerControllers.sortAttackDesc(state.pokemonsFiltered)
				return {
					...state,
					sort: action.payload,
					pokemonsSorted: aux,
					currentPokemons: aux.slice(0, state.pokemonsPerPage),
				}
			}

			if (action.payload.ascName) {
				let aux = reducerControllers.sortNameAsc(state.pokemonsFiltered)
				return {
					...state,
					sort: action.payload,
					pokemonsSorted: aux,
					currentPokemons: aux.slice(0, state.pokemonsPerPage),
				}
			}

			if (action.payload.descName) {
				let aux = reducerControllers.sortNameDesc(state.pokemonsFiltered)
				return {
					...state,
					sort: action.payload,
					pokemonsSorted: aux,
					currentPokemons: aux.slice(0, state.pokemonsPerPage),
				}
			}

			return {
				...state,
				pokemonsSorted: state.pokemonsFiltered,
				currentPokemons: state.pokemonsFiltered.slice(0, state.pokemonsPerPage),
			}

		case actions.CHANGE_PAGE:
			let currentPage = action.payload
			let lastPokeOfPage = currentPage * state.pokemonsPerPage
			let firstPokeOfPage = lastPokeOfPage - state.pokemonsPerPage

			return {
				...state,
				currentPage: action.payload,
				currentPokemons: state.pokemonsSorted.slice(firstPokeOfPage, lastPokeOfPage)
			}

		case actions.FILTER_POKEMONS_BY_NAME:
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
		case actions.GET_POKEMON_BY_ID:
			return {
				...state,
				pokemonDetail: action.payload
			}
		case actions.CLEAN_POKEMON_DETAIL:
			return {
				...state,
				pokemonDetail: []
			}
		case actions.RESET_FILTER:
			return {
				...state,
				filter: {
					type: ""
				},
				pokemonsFiltered: state.pokemons,
				pokemonsSorted: state.pokemons,
				currentPage: 1
			}
		case actions.CHANGE_FILTER:
			let aux = state.pokemons?.filter(poke => poke.Types?.includes(action.payload.type))
			console.log(action.payload.type)
			console.log(state.pokemons[0].Types)
			return {
				...state,
				filter: {
					...state.filter,
					type: action.payload.type,
				},
				pokemonsFiltered: aux,
				currentPage: 1
			}
		case actions.RESET_CARDS:
			return {
				...state,
				pokemonsFiltered: state.pokemons,
				pokemonsSorted: state.pokemons
			}
		case actions.RESET_POKEMONS:
			return {
				...state,
				pokemons: []
			}
		case actions.LOADING:
			return {
				...state,
				loading: true
			}
		
		default:
			return {
				...state
			};
	}
};

export default reducer;

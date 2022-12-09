import axios from 'axios';
import { imgTypes } from './imgTypes';

// Get from API
export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_POKEMON_BY_ID = 'GET_POKEMON_BY_ID'
export const GET_ALL_TYPES = 'GET_ALL_TYPES';
export const GET_ALL_IMG_TYPES = 'GET_ALL_IMG_TYPES';

export const LOADING = 'LOADING'

export const CLEAN_POKEMON_DETAIL = 'CLEAN_POKEMON_DETAIL'

// Post in API
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const SET_NEW_POKEMON = 'SET_NEW_POKEMON';
export const RESET_POKEMONS = 'RESET_POKEMONS'

// Filtering and Sorting
export const RESET_SORT = 'RESET_SORT'
export const CHANGE_SORT = 'CHANGE_SORT'
export const RESET_FILTER = 'RESET_FILTER'
export const CHANGE_FILTER = 'CHANGE_FILTER'
export const FILTER_POKEMONS_BY_NAME = 'FILTER_POKEMONS_BY_NAME'
export const RESET_CARDS = 'RESET_CARDS'

// Paginated
export const CHANGE_PAGE = 'CHANGE_PAGE'

// Error Handler
export const POKEMONS_NOT_FOUND = 'POKEMONS_NOT_FOUND'



export function getAllPokemons() {
	return async function (dispatch) {
		try {
			const response = await axios.get(`http://localhost:3001/pokemons`);
			// const response = await axios.get(`/pokemons`);
			dispatch({ type: GET_ALL_POKEMONS, payload: response.data });
		} catch (error) {
			console.log(error.response.data);
		}
	};
}

export function getAllTypes() {
	return async function (dispatch) {
		try {
			const response = await axios.get(`http://localhost:3001/types`);
			dispatch({ type: GET_ALL_TYPES, payload: response.data });
		} catch (error) {
			console.log(error.response.data);
		}
	};
}

export function createPokemon(pokemon) {
	return async function (dispatch) {
		try {
			const response = await axios.post(`http://localhost:3001/pokemons`, pokemon);
			dispatch({ 
				type: CREATE_POKEMON,
				payload: response.data
			});
			return response;
		} catch (error) {
			console.log(error.response.data);
		}
	};
}

export function setNewPokemon() {
	return async function (dispatch) {
		dispatch({ type: SET_NEW_POKEMON });
	};
}

export function getAllImgTypes() {
	return async function (dispatch) {
		// buscando pokemon svg logos en internet, encontré las siguientes imagenes:
		dispatch({ type: GET_ALL_IMG_TYPES, payload: imgTypes });
	};
}

export function resetSort() {
	return {
		type: RESET_SORT
	}
}

export const changeSort = (payload) => {
	return {
		type: CHANGE_SORT,
		payload: payload
	}
}

export const changePage = (payload) => {
	return {
		type: CHANGE_PAGE,
		payload: payload
	}
}

export const filterPokemonsByName = (payload) => {
	return {
		type: FILTER_POKEMONS_BY_NAME,
		payload: payload
	}
}

export function getPokemonById(id) {
	return async function (dispatch) {
		try {
			const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
			dispatch({ 
				type: GET_POKEMON_BY_ID, 
				payload: response.data 
			});
		} catch (error) {
			dispatch({ type: POKEMONS_NOT_FOUND });
		}
	};
}

export function resetFilter() {
	return {
		type: RESET_FILTER
	}
}

export function changeFilter(payload) {
	return {
		type: CHANGE_FILTER,
		payload
	}
}

export function resetCards() {
	return {
		type: RESET_CARDS,
	}
}

export function resetPokemons() {
	return {
		type: RESET_POKEMONS
	}
}

export function loading() {
	return {
		type: LOADING
	}
}

export function cleanPokemonDetail() {
	return {
		type: CLEAN_POKEMON_DETAIL
	}
}
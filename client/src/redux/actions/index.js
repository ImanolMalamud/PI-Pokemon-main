import axios from "axios"
import { imgTypes } from "./imgTypes"

// Get from API
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID"
export const GET_ALL_TYPES = "GET_ALL_TYPES"
export const GET_ALL_IMG_TYPES = "GET_ALL_IMG_TYPES"
export const LOADING = "LOADING"

// Post in API
export const CREATE_POKEMON = "CREATE_POKEMON"
export const SET_NEW_POKEMON = "SET_NEW_POKEMON"
export const RESET_POKEMONS = "RESET_POKEMONS"

// Filtering and Sorting
export const SET_FILTER_BY_TYPE = "SET_FILTER_BY_TYPE"
export const SET_FILTER_BY_NAME = "SET_FILTER_BY_NAME"

// Paginated
export const CHANGE_PAGE = "CHANGE_PAGE"
export const SET_PAGINATED_NUMBERS = "SET_PAGINATED_NUMBERS"

// Error Handler
export const POKEMONS_NOT_FOUND = "POKEMONS_NOT_FOUND"

export const CLEAN_POKEMON_DETAIL = "CLEAN_POKEMON_DETAIL"

export function getAllPokemons() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/pokemons`)
      // const response = await axios.get(`/pokemons`);
      dispatch({ type: GET_ALL_POKEMONS, payload: response.data })
    } catch (error) {
      console.log(error.response.data)
    }
  }
}

export function getAllTypes() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/types`)
      dispatch({ type: GET_ALL_TYPES, payload: response.data })
    } catch (error) {
      console.log(error.response.data)
    }
  }
}

export function createPokemon(pokemon) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`/pokemons`, pokemon)
      dispatch({
        type: CREATE_POKEMON,
        payload: response.data,
      })
      return response
    } catch (error) {
      console.log(error.response.data)
    }
  }
}

export function setNewPokemon() {
  return async function (dispatch) {
    dispatch({ type: SET_NEW_POKEMON })
  }
}

export function getAllImgTypes() {
  return async function (dispatch) {
    // buscando pokemon svg logos en internet, encontré las siguientes imagenes:
    dispatch({ type: GET_ALL_IMG_TYPES, payload: imgTypes })
  }
}

export const changePage = payload => {
  return {
    type: CHANGE_PAGE,
    payload: payload,
  }
}

export function getPokemonById(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/pokemons/${id}`)
      dispatch({
        type: GET_POKEMON_BY_ID,
        payload: response.data,
      })
    } catch (error) {
      dispatch({ type: POKEMONS_NOT_FOUND })
    }
  }
}

export function setLoading(payload) {
  return {
    type: LOADING,
    payload,
  }
}

export function cleanPokemonDetail() {
  return {
    type: CLEAN_POKEMON_DETAIL,
  }
}

export const setFilterByType = payload => {
  return {
    type: SET_FILTER_BY_TYPE,
    payload,
  }
}

export const setFilterByName = payload => {
  return {
    type: SET_FILTER_BY_NAME,
    payload,
  }
}

export const setPaginatedNumbers = payload => {
  return {
    type: SET_PAGINATED_NUMBERS,
    payload,
  }
}

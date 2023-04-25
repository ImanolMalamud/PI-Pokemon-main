import axios from "axios";
import { imgTypes } from "./imgTypes";
import { pokemonsData } from "../../data/pokemonsData";
import { typesData } from "../../data/typesData";

// Get from API
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKEMON_BY_ID_API = "GET_POKEMON_BY_ID_API";
export const GET_POKEMON_BY_ID_JSON = "GET_POKEMON_BY_ID_JSON";
export const GET_ALL_TYPES = "GET_ALL_TYPES";
export const GET_ALL_IMG_TYPES = "GET_ALL_IMG_TYPES";
export const LOADING = "LOADING";

// Post in API
export const CREATE_POKEMON = "CREATE_POKEMON";
export const SET_NEW_POKEMON = "SET_NEW_POKEMON";
export const RESET_POKEMONS = "RESET_POKEMONS";

// Filtering and Sorting
export const SET_FILTER_BY_TYPE = "SET_FILTER_BY_TYPE";
export const SET_FILTER_BY_NAME = "SET_FILTER_BY_NAME";

// Paginated
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_POKEMONS_PER_PAGE = "SET_POKEMONS_PER_PAGE";
export const SET_TOTAL_POKEMONS_AMOUNT = "SET_TOTAL_POKEMONS_AMOUNT";
export const SET_CURRENT_POKEMONS = "SET_CURRENT_POKEMONS";

// Error Handler
export const POKEMONS_NOT_FOUND = "POKEMONS_NOT_FOUND";

export const CLEAN_POKEMON_DETAIL = "CLEAN_POKEMON_DETAIL";

export const CLEAN_CARDS = "CLEAN_CARDS";

export function getAllPokemons() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/pokemons`);

      dispatch({ type: GET_ALL_POKEMONS, payload: response.data });
    } catch (error) {
      console.log(
        "Api is DOWN. Pokemons will be rendered from data stored in the client deploy."
      );
    }

    // If the api doesnt work, lets just dispatch the pokemons from the data folder
    dispatch({ type: GET_ALL_POKEMONS, payload: pokemonsData });
    return pokemonsData;
  };
}

export function getPokemonById(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/pokemons/${id}`); // pokemon (object)
      return dispatch({
        type: GET_POKEMON_BY_ID_API,
        payload: response.data,
      });
    } catch (error) {
      // If the api doesnt work, lets just dispatch the pokemon from the data folder
      console.log(
        "Api is DOWN. Pokemon's properties will be rendered from data stored in the client deploy."
      );
    }

    // let allPokemons = await getAllPokemons();
    // let pokemonById = allPokemons.find((pokemon) => pokemon.id === id);

    // if (!pokemonById) return dispatch({ type: POKEMONS_NOT_FOUND });

    dispatch({
      type: GET_POKEMON_BY_ID_JSON,
      payload: id, // pokemon id
    });
  };
}

export function getAllTypes() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/types`);
      return dispatch({ type: GET_ALL_TYPES, payload: response.data });
    } catch (error) {
      console.log(error.response.data);
    }

    return dispatch({ type: GET_ALL_TYPES, payload: typesData });
  };
}

export function createPokemon(pokemon) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`/pokemons`, pokemon);
      dispatch({
        type: CREATE_POKEMON,
        payload: response.data,
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

export const setCurrentPage = (payload) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: payload,
  };
};

export const setPokemonsPerPage = (payload) => {
  return {
    type: SET_POKEMONS_PER_PAGE,
    payload: payload,
  };
};

export const setTotalPokemonsAmount = (payload) => {
  return {
    type: SET_TOTAL_POKEMONS_AMOUNT,
    payload: payload,
  };
};

export const setCurrentPokemons = (payload) => {
  return {
    type: SET_CURRENT_POKEMONS,
    payload: payload,
  };
};

export function setLoading(payload) {
  return {
    type: LOADING,
    payload,
  };
}

export function cleanPokemonDetail() {
  return {
    type: CLEAN_POKEMON_DETAIL,
  };
}

export const setFilterByType = (payload) => {
  return {
    type: SET_FILTER_BY_TYPE,
    payload,
  };
};

export const setFilterByName = (payload) => {
  return {
    type: SET_FILTER_BY_NAME,
    payload,
  };
};

export const cleanCards = () => {
  return {
    type: CLEAN_CARDS,
  };
};

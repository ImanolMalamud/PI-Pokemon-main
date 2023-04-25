import * as actions from "../actions";

const initialState = {
  allPokemons: [],
  pokemonsFilteredAndSorted: [],
  pokemonsCurrentPage: [],
  types: [],
  imgTypes: [],
  filters: {
    typeFilter: "",
    nameFilter: "",
  },
  currentPage: 1,
  pokemonsPerPage: 10,
  totalPokemonsAmount: 0,
  currentPokemons: [],
  paginatedNumbers: [1],
  pokemonDetail: {},
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ALL_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
        pokemonsFilteredAndSorted: action.payload,
        loading: false,
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

    case actions.SET_FILTER_BY_TYPE:
      return {
        ...state,
        filters: {
          ...state.filters,
          typeFilter: action.payload,
        },
      };

    case actions.SET_FILTER_BY_NAME:
      return {
        ...state,
        filters: {
          ...state.filters,
          nameFilter: action.payload,
        },
      };

    case actions.CREATE_POKEMON:
      return {
        ...state,
        newPokemon: true,
        pokemonsFiltered: state.pokemons,
      };

    case actions.SET_NEW_POKEMON:
      return {
        ...state,
        newPokemon: false,
      };

    case actions.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case actions.SET_POKEMONS_PER_PAGE:
      return {
        ...state,
        pokemonsPerPage: action.payload,
      };

    case actions.SET_TOTAL_POKEMONS_AMOUNT:
      return {
        ...state,
        totalPokemonsAmount: action.payload,
      };

    case actions.SET_CURRENT_POKEMONS:
      return {
        ...state,
        pokemonsCurrentPage: action.payload,
      };

    case actions.GET_POKEMON_BY_ID_API:
      return {
        ...state,
        pokemonDetail: action.payload,
      };

    case actions.GET_POKEMON_BY_ID_JSON:
      let id = action.payload;
      let pokemonById = state.pokemons.find(
        (pokemon) => pokemon.id.toString() === id.toString()
      );
      return {
        ...state,
        pokemonDetail: pokemonById,
      };

    case actions.CLEAN_POKEMON_DETAIL:
      return {
        ...state,
        pokemonDetail: [],
      };

    case actions.LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case actions.CLEAN_CARDS:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;

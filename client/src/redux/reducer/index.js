import * as actions from "../actions"

const initialState = {
  pokemons: [],
  types: [],
  imgTypes: [],
  filters: {
    typeFilter: "",
    nameFilter: "",
  },
  currentPage: 1,
  pokemonsPerPage: 12,
  paginatedNumbers: [],
  pokemonDetail: {},
  loading: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
      }

    case actions.GET_ALL_TYPES:
      return {
        ...state,
        types: action.payload,
      }

    case actions.GET_ALL_IMG_TYPES:
      return {
        ...state,
        imgTypes: action.payload,
      }

    case actions.SET_FILTER_BY_TYPE:
      return {
        ...state,
        filters: {
          ...state.filters,
          typeFilter: action.payload,
        },
      }

    case actions.SET_FILTER_BY_NAME:
      return {
        ...state,
        filters: {
          ...state.filters,
          nameFilter: action.payload,
        },
      }

    case actions.CREATE_POKEMON:
      return {
        ...state,
        newPokemon: true,
        pokemonsFiltered: state.pokemons,
      }

    case actions.SET_NEW_POKEMON:
      return {
        ...state,
        newPokemon: false,
      }

    case actions.CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      }

    case actions.GET_POKEMON_BY_ID:
      return {
        ...state,
        pokemonDetail: action.payload,
      }
    case actions.CLEAN_POKEMON_DETAIL:
      return {
        ...state,
        pokemonDetail: [],
      }

    case actions.LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    case actions.SET_PAGINATED_NUMBERS:
      return {
        ...state,
        paginatedNumbers: action.payload,
      }

    default:
      return {
        ...state,
      }
  }
}

export default reducer

import { setCurrentPokemons } from "../redux/actions";

export const paginatePokemons = (
  filteredAndSorted,
  currentPage,
  pokemonsPerPage,
  dispatch
) => {
  const indexOfLastItem = currentPage * pokemonsPerPage;
  const indexOfFirstItem = indexOfLastItem - pokemonsPerPage;
  const currentPokemons = filteredAndSorted.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  dispatch(setCurrentPokemons(currentPokemons));
};

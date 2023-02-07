export const paginatePokemons = (
  filteredAndSorted,
  currentPage,
  pokemonsPerPage
) => {
  const indexOfLastItem = currentPage * pokemonsPerPage
  const indexOfFirstItem = indexOfLastItem - pokemonsPerPage
  const currentPokemons = filteredAndSorted.slice(
    indexOfFirstItem,
    indexOfLastItem
  )

  return currentPokemons
}

export const paginatePokemons = (items, currentPage, itemsPerPage) => {
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentPokemons = items.slice(indexOfFirstItem, indexOfLastItem)

  return currentPokemons
}

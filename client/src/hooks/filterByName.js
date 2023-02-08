export const filterByName = (
  filteredAndSorted,
  nameFilter,
  resetCurrentPage
) => {
  let filteredByName

  if (nameFilter) {
    filteredByName = filteredAndSorted.filter(poke => {
      let aux = poke.name.slice(0, nameFilter.length)

      return aux.toLowerCase() === nameFilter.toLowerCase()
    })
    resetCurrentPage()

    return filteredByName
  } else {
    resetCurrentPage()
    return filteredAndSorted
  }
}

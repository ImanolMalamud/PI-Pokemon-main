export const filterByType = (items, typeFilter, resetCurrentPage) => {
  let filteredbyType = items

  if (typeFilter === "All Types") {
    resetCurrentPage()
    return filteredbyType
  }

  filteredbyType = filteredbyType.filter(item =>
    item.Types.includes(typeFilter.toLowerCase())
  )

  resetCurrentPage()
  return filteredbyType
}

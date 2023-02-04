export const filterbyType = (items, typeFilter, resetCurrentPage) => {
  let filteredbyType = items

  filteredbyType = filteredbyType.filter(item =>
    item.Categories[0].title.includes(typeFilter)
  )

  resetCurrentPage()

  return filteredbyType
}

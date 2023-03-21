export const sortByAttack = (items, sortBy, resetCurrentPage) => {
  if (sortBy === "Attack - min to max") {
    let sortedItems = items.sort((a, b) => {
      return a.attack - b.attack
    })
    return sortedItems
  } else if (sortBy === "Attack - max to min") {
    let sortedItems = items.sort((a, b) => {
      return b.attack - a.attack
    })
    resetCurrentPage()
    return sortedItems
  }
}

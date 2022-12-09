export const sortNameAsc = (pokemons) => {
    return pokemons
        ? pokemons.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
        : []
    }

export const sortNameDesc = (pokemons) => {
    return pokemons
        ? pokemons.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1))
        : []
}

export const sortAttackAsc = (pokemons) => {
    return pokemons
        ? pokemons.sort((a, b) => (a.attack > b.attack ? 1 : -1))
        : []
}

export const sortAttackDesc = (pokemons) => {
    return pokemons
        ? pokemons.sort((a, b) => (a.attack > b.attack ? -1 : 1))
        : []
    }
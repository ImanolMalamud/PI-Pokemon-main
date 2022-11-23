import './Cards.css'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllImgTypes, getAllPokemons } from '../../redux/actions';
import Card from '../Card/Card';

export default function Cards() {
    const dispatch = useDispatch()

    // Cada vez que cambie newOrder, se renderiza NewCard nuevamente
    // Si no traigo el state newOrder, el ordenamiento no se va a ver reflejado en NewCard.
    const sort = useSelector(state => state.sort) // NO BORRAR!!
    const currentPage = useSelector(state => state.currentPage)
    const pokemonsSorted = useSelector(state => state.pokemonsSorted)
    const pokemonsFiltered = useSelector(state => state.pokemonsFiltered)
    const newPokemonsPerPage = useSelector(state => state.newPokemonsPerPage)
    const pokemons = useSelector(state => state.pokemons)

    useEffect(() => {
        dispatch(getAllPokemons())
        dispatch(getAllImgTypes())
    }, [dispatch])

    const lastPokeOfPage = currentPage * newPokemonsPerPage
    const firstPokeOfPage = lastPokeOfPage - newPokemonsPerPage

    // Estos son los pokemons que vamos a renderizar por pagina
    let currentPokemons = []

    // pokemones filtrados
    if (pokemonsFiltered !== pokemons) {

        // pokemons filtrados y ordenados
        if (pokemonsFiltered !== pokemonsSorted) {
            // pokemonsSorted son los ordenados luego de haber sido filtrados (ver reducer case CHANGE_ORDER)
            currentPokemons = pokemonsSorted.slice(firstPokeOfPage, lastPokeOfPage)
        }

        // pokemones filtrados, pero no ordenados
        currentPokemons = pokemonsFiltered.slice(firstPokeOfPage, lastPokeOfPage)

        // pokemones no filtrados, pero si ordenados  
    } else if (pokemonsSorted !== pokemons) {
        currentPokemons = pokemonsSorted.slice(firstPokeOfPage, lastPokeOfPage)
    }

    // pokemones sin filtrar ni ordenar
    else {
        currentPokemons = pokemons.slice(firstPokeOfPage, lastPokeOfPage)
    }

    return (
        <div className='cards-container'>
            {currentPokemons?.map(pokemon => {
                return (
                    <Card pokemon={pokemon} />
                )
            })}
        </div>

    )
}

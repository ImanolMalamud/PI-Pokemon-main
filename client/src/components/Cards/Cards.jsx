import './Cards.css'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changePage, filterPokemonsByName, getAllImgTypes, getAllPokemons, loading, resetCards, resetFilter, resetSort } from '../../redux/actions';
import Card from '../Card/Card';
import Loading from '../Loading/Loading'
import { useState } from 'react';
import PokemonsNotFound from '../PokemonsNotFound/PokemonsNotFound';

export default function Cards() {
    const dispatch = useDispatch()

    // Cada vez que cambie sort, se renderiza Card nuevamente
    // Si no traigo el state sort, el ordenamiento no se va a ver reflejado en Card.
    const sort = useSelector(state => state.sort) // NO BORRAR!!
    // const currentPage = useSelector(state => state.currentPage)
    const pokemonsSorted = useSelector(state => state.pokemonsSorted)
    // const pokemonsPerPage = useSelector(state => state.pokemonsPerPage)
    const currentPokemons = useSelector(state => state.currentPokemons)
    const loadingState = useSelector(state => state.loading)

    const pokemons = useSelector(state => state.imgTypes)

    return (<>
        {loadingState
            ?
            <Loading />
            :
            <div className='cards-container'>
                {currentPokemons[0]
                    ?
                    currentPokemons.map(pokemon => {
                        return (
                            <Card pokemon={pokemon} />
                        )
                    })
                    :
                    <PokemonsNotFound />
                }
            </div>
        }
    </>


    )
}

import './Cards.css'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changePage, filterPokemonsByName, getAllImgTypes, getAllPokemons, loading, resetCards, resetFilter, resetSort } from '../../redux/actions';
import Card from '../Card/Card';
import Loading from '../Loading/Loading'
import { useState } from 'react';
import PokemonsNotFound from '../PokemonsNotFound/PokemonsNotFound';
import { filterbyType } from '../../hooks/filterAndSort/filterbyType';
import { paginatePokemons } from '../../hooks/paginatePokemons';

export default function Cards() {
    const dispatch = useDispatch()

    const pokemons = useSelector(state => state.pokemons)

    // Estados para Filtros y Ordenamiento
    const typeFilter = useSelector(state => state.typeFilter)

    // Estados para el Paginado
    const currentPage = useSelector(state => state.typeFilter)
    const pokemonsPerPage = useSelector(state => state.pokemonsPerPage)

    // Variable auxiliar para filtrar, ordenar y paginar los items
    let filteredAndSorted = pokemons;

    // funcion para volver a la pagina inicial (se la aplicará luego de cada filtrado u ordenado)
    const resetCurrentPage = () => dispatch(changePage(1))

    // Filtrado por tipos
    // filteredAndSorted = typeFilter
    //     ?
    //     filterbyType(filteredAndSorted, typeFilter, resetCurrentPage)
    //     :
    //     filteredAndSorted


    let currentPokemons = paginatePokemons(filteredAndSorted, currentPage, pokemonsPerPage)


    return (
        <div className='cards-container'>
            {pokemons[0]
                ?
                pokemons.map(pokemon => {
                    return (
                        <Card pokemon={pokemon} />
                    )
                })
                :
                <PokemonsNotFound />
            }
        </div>


    )
}

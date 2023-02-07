import './Cards.css'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../redux/actions';
import Card from '../Card/Card';
import { filterByType } from '../../../hooks/filterByType';
import { paginatePokemons } from '../../../hooks/paginatePokemons';
import { getNumberButtons } from '../../../hooks/getNumberButtons';
import { filterByName } from '../../../hooks/filterByName'
import PokemonsNotFound from '../PokemonsNotFound/PokemonsNotFound';


export default function Cards() {
    const dispatch = useDispatch()

    const pokemons = useSelector(state => state.pokemons)

    // Estados para Filtros y Ordenamiento
    const filters = useSelector(state => state.filters)


    // Variable auxiliar para filtrar, ordenar y paginar los items
    let filteredAndSorted = pokemons;

    // funcion para volver a la pagina inicial (se la aplicará luego de cada filtrado u ordenado)
    const resetCurrentPage = () => dispatch(actions.changePage(1))

    // Filtrado por tipos
    filteredAndSorted = filters?.typeFilter
        ?
        filterByType(filteredAndSorted, filters.typeFilter, resetCurrentPage)
        :
        filteredAndSorted

    // Filtrado por nombre
    filteredAndSorted = filters?.nameFilter
        ?
        filterByName(filteredAndSorted, filters.nameFilter, resetCurrentPage)
        :
        filteredAndSorted

    // Paginado
    const currentPage = useSelector(state => state.currentPage)
    const pokemonsPerPage = useSelector(state => state.pokemonsPerPage)
    let currentPokemons = paginatePokemons(filteredAndSorted, currentPage, pokemonsPerPage)

    getNumberButtons(filteredAndSorted, pokemonsPerPage, dispatch, actions.setPaginatedNumbers)

    return (
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
    )
}

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeSort, filterPokemonsByName, getAllPokemons, resetFilter } from '../../redux/actions';
import './SearchBar.css'

export default function SearchBar() {
    const dispatch = useDispatch()

    const newOrder = useSelector(state => state.newOrder)

    const onHandleChange = (e) => {
        e.preventDefault()

        if (e.target.value.length === 0) return dispatch(resetFilter())

        dispatch(filterPokemonsByName(e.target.value))
        dispatch(changeSort({
            ...newOrder,
            ascName: true,
            descName: false
        }))
    }



    return (

        <div className='search-container'>
            <input type='search' name='search' placeholder="Search pokemons..." onChange={onHandleChange} />
        </div>
    )
}

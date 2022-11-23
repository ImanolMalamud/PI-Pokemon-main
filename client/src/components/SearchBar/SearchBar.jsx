import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { newChangeOrder, newFilterPokemonsByName } from '../../redux/actions';
import './SearchBar.css'

export default function SearchBar() {
    const dispatch = useDispatch()

    const newOrder = useSelector(state => state.newOrder)

    const onHandleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        dispatch(newFilterPokemonsByName(e.target.value))
        dispatch(newChangeOrder({
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

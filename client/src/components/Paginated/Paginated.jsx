import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../../redux/actions'
import './Paginated.css'

export default function Paginated() {

    const dispatch = useDispatch()

    const pokemonsSorted = useSelector(state => state.pokemonsSorted)
    const pokemonsPerPage = useSelector(state => state.pokemonsPerPage)
    const currentPage = useSelector(state => state.currentPage)

    // la cantidad de paginas
    const amountOfPages = Math.ceil(pokemonsSorted.length / pokemonsPerPage)

    const numberButtons = []

    for (let i = 1; i <= amountOfPages; i++) {
        numberButtons.push(i)
    }

    const handleClick = (e) => {
        // setButtonColor('hsl(305, 33%, 69%, .8)')
        // e.target.style.backgroundColor = buttonColor
        dispatch(changePage(e.target.value))
    }


    return (
        <div className='paginated-container'>

            {numberButtons.map(button => {
                if (button === currentPage) {
                    return (
                        <button onClick={handleClick} value={button}>{button}</button>
                    )
                }
                return (
                    <button onClick={handleClick} value={button}>{button}</button>
                )
            })}
        </div>

    )
}

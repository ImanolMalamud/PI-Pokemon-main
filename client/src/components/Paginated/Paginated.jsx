import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newChangePage } from '../../redux/actions'
import './Paginated.css'

export default function Paginated() {

    const dispatch = useDispatch()

    const pokemonsSorted = useSelector(state => state.pokemonsSorted)
    const newPokemonsPerPage = useSelector(state => state.newPokemonsPerPage)

    // la cantidad de paginas
    const amountOfPages = Math.ceil(pokemonsSorted.length / newPokemonsPerPage)

    const numberButtons = []

    for (let i = 1; i <= amountOfPages; i++) {
        numberButtons.push(i)
    }

    const handleClick = (e) => {
        console.log(e.target.value)
        dispatch(newChangePage(e.target.value))
    }


    return (
        <div className='paginated-container'>
            {numberButtons.map(button => {
                return (
                    <button onClick={handleClick} value={button}>{button}</button>
                )
            })}
        </div>
    )
}

import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilterByName } from '../../../redux/actions'
import './SearchBar.css'

export default function SearchBar() {
    const dispatch = useDispatch()

    const handleInputChange = e => {
        dispatch(setFilterByName(e.target.value))
    }

    return (
        <div className='searchbar-container'>
            <input
                type="search"
                placeholder="Buscar"
                aria-label="Search"
                onChange={handleInputChange}
            />
        </div>
    )
}

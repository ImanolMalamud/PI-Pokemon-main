import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilterByName } from '../../../redux/actions'

export default function SearchBar() {
    const dispatch = useDispatch()

    const handleInputChange = e => {
        dispatch(setFilterByName(e.target.value))
    }

    return (
        <div>
            <input
                style={{ background: "white", minWidth: "150px", width: "50%", height: "20px" }}
                type="search"
                placeholder="Buscar"
                aria-label="Search"
                onChange={handleInputChange}
            />
        </div>
    )
}

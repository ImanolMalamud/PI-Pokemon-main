import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../../../redux/actions'
import './Paginated.css'

export default function Paginated() {

    const dispatch = useDispatch()


    const currentPage = useSelector(state => state.currentPage)
    const paginatedNumbers = useSelector(state => state.paginatedNumbers)



    const handleClick = (e) => {
        // setButtonColor('hsl(305, 33%, 69%, .8)')
        // e.target.style.backgroundColor = buttonColor

        dispatch(changePage(e.target.value))
    }


    return (
        <div className='paginated-container'>

            {paginatedNumbers?.map(button => {
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

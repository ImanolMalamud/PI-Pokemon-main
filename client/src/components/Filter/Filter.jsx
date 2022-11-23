import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTypes } from '../../redux/actions'

export default function Filter() {
    const dispatch = useDispatch()


    const types = useSelector(state => state.types)

    useEffect(() => {
        dispatch(getAllTypes())
    }, [dispatch])

    return (
        <div>
            {console.log(types)}
        </div>
    )
}

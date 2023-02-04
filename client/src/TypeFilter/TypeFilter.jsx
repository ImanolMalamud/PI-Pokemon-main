import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTypes, setFilterByType } from '../redux/actions';

export default function TypeFilter() {
    const types = useSelector(state => state.types)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllTypes());
    }, [dispatch]);


    const handleChangeFilter = e => {
        // console.log(e.target.value);
        dispatch(setFilterByType(e.target.value));
    };

    return (
        <div style={{ background: "white" }}>
            <select
                name="type"
                id="type"
                onChange={handleChangeFilter}
            >
                {types?.map(type => {
                    return (<option value={type.name}>{type.name}</option>)
                })}
            </select>
        </div>
    )
}

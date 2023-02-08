import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTypes, setFilterByType } from '../../../redux/actions';
import './TypeFilter.css'


const TypeFilter = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllTypes());
    }, [dispatch]);

    const types = useSelector(state => state.types)

    const handleChangeFilter = e => {
        // console.log(e.target.value);
        dispatch(setFilterByType(e.target.value));
    };

    return (
        <div className='typefilter-container'>
            <select
                class="form-select filterCategory"
                aria-label="Default select example"
                name="type"
                id="type"
                onChange={handleChangeFilter}
                menuPlacement="top"
                defaultValue={'DEFAULT'}
            >

                <option value="All Types" selected>All Types</option>
                {types[0] ? types.map(type => {
                    return (
                        <option>{type.name}</option>
                    )
                }) : <option>No types found</option>}

            </select>
        </div>
    );
};

export default TypeFilter;
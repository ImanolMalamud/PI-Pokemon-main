import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTypes, setFilterByType } from '../../../redux/actions';


const CategoryFilter = () => {
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
        <select
            class="form-select filterCategory"
            aria-label="Default select example"
            name="type"
            id="type"
            onChange={handleChangeFilter}
            menuPlacement="top"
            defaultValue={'DEFAULT'}
        >

            <option value="DEFAULT" disabled hidden selected>Consolas:</option>
            {types?.map(type => {
                return (
                    <option>{type}</option>
                )
            })}

        </select>

    );
};

export default CategoryFilter;





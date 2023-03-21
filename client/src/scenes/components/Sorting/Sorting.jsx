import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortByAttack } from '../../../redux/actions';
import './Sorting.css'


const Sorting = () => {
    const dispatch = useDispatch()


    const handleChangeSort = e => {
        // console.log(e.target.value);
        dispatch(setSortByAttack(e.target.value));
    };

    return (
        <div className='typefilter-container'>
            <select
                class="form-select filterCategory"
                aria-label="Default select example"
                name="type"
                id="type"
                onChange={handleChangeSort}
                menuPlacement="top"
                defaultValue={'DEFAULT'}
            >

                <option value="Sort by" selected>Sort by</option>
                <option value="Attack - max to min">Attack - max to min</option>
                <option value="Attack - min to max">Attack - min to max</option>

            </select>
        </div>
    );
};

export default Sorting;
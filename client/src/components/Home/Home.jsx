import './Home.css'
import React from 'react';
import Sort from '../Sort/Sort';
import Paginated from '../Paginated/Paginated';
import SearchBar from '../SearchBar/SearchBar';
import Cards from '../Cards/Cards';

export default function Home() {

    return (
        <div className='home-container'>
            <div className="search-filter-sort">
                <SearchBar />
                <Sort />
            </div>


            <Cards />

            <div className="paginated-container">
                <Paginated />
            </div>
        </div>

    )
}

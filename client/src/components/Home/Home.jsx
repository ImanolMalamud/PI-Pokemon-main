import './Home.css'
import React from 'react';
import Sort from '../Sort/Sort';
import Paginated from '../Paginated/Paginated';
import SearchBar from '../SearchBar/SearchBar';
import Cards from '../Cards/Cards';
import { useEffect } from 'react';
import { getAllPokemons, resetPokemons } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPokemons())
    }, [dispatch])

    const pokemons = useSelector(state => state.pokemons)

    return (
        <div className='home-container'>
            <div className="search-filter-sort">
                <SearchBar />
                <Sort />
            </div>

            <Paginated />

            {pokemons ? <Cards /> : <div className='.loading'>Loading...</div>}



        </div>

    )
}

import './Home.css'
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../global/NavBar/NavBar';
import Paginated from '../../components/Paginated/Paginated';
import Cards from '../../components/Cards/Cards';
import SearchBar from '../../components/SearchBar/SearchBar'
import TypeFilter from '../../components/TypeFilter/TypeFilter'
import { getAllImgTypes, getAllPokemons, setLoading } from '../../../redux/actions';
import Sorting from '../../components/Sorting/Sorting';

export default function Home() {
    const dispatch = useDispatch()

    const imgTypes = useSelector(state => state.imgTypes)
    const loading = useSelector(state => state.loading)

    useEffect(() => {
        dispatch(setLoading(true))
        dispatch(getAllPokemons())

        imgTypes.length === 0 && dispatch(getAllImgTypes())
    }, [dispatch])


    return (
        <div className='home-container'>

            <NavBar />
            <div className="filters-container">
                <SearchBar />
                <TypeFilter />
                <Sorting />
            </div>
            <Paginated />


            {
                loading
                    ?
                    <h1 style={{ color: "white" }}>loading...</h1>
                    :
                    <Cards />
            }



        </div>

    )
}

import './Home.css'
import React from 'react';
import Paginated from '../Paginated/Paginated';
import Cards from '../Cards/Cards';
import { useEffect } from 'react';
import { getAllImgTypes, getAllPokemons, setLoading } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';

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
            {/* <TypeFilter /> */}

            {/* <Paginated /> */}

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

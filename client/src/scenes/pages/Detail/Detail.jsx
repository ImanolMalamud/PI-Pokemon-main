import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { cleanPokemonDetail, getPokemonById } from '../../../redux/actions'
import NavBar from '../../global/NavBar/NavBar'
import './Detail.css'

export default function Detail() {
    const dispatch = useDispatch()

    const pokemonDetail = useSelector(state => state.pokemonDetail)

    const { id } = useParams()

    useEffect(() => {
        dispatch(getPokemonById(id))
        // console.log(pokemonDetail)
        return (dispatch(cleanPokemonDetail()))
    }, [dispatch])

    return (
        <>
            <NavBar />
            <div className='detail-container'>
                {console.log(pokemonDetail)}
                {pokemonDetail
                    ?
                    <>
                        <div className='name-container'>{pokemonDetail.name}</div>
                        <div className='detail-data'>
                            <div className='pokemon-properties'>
                                <ul>
                                    <li>
                                        Types: {pokemonDetail?.Types?.map(type => {
                                            if (type.name) return (<div>{type.name}</div>)
                                            return (<div>{type}</div>)
                                        })}
                                    </li>
                                    <li>Attack: <div>{pokemonDetail.attack}</div></li>
                                    <li>Defense: <div>{pokemonDetail.defense}</div></li>
                                    <li>Speed: <div>{pokemonDetail.speed}</div></li>
                                    <li>Height: <div>{pokemonDetail.height}</div></li>
                                    <li>Weight: <div>{pokemonDetail.weight}</div></li>
                                </ul>
                            </div>
                            <img src={pokemonDetail.img} alt="" />
                        </div>
                    </>
                    : ""
                }

            </div>
        </>
    )
}

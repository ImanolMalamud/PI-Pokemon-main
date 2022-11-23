import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { newGetPokemonById } from '../../redux/actions'
import './Detail.css'

export default function Detail() {
    const dispatch = useDispatch()

    const newPokemonDetail = useSelector(state => state.newPokemonDetail)

    const { id } = useParams()

    useEffect(() => {
        dispatch(newGetPokemonById(id))
    }, [dispatch])

    return (
        <div className='detail-container'>
            <div className='name-container'>{newPokemonDetail.name}</div>
            <div className='detail-data'>
                <div className='pokemon-properties'>
                    <ul>
                        <li>
                            Types: {newPokemonDetail?.types?.map(type => {
                                return (<div>{type}</div>)
                            })}
                        </li>


                        <li>Attack: <div>{newPokemonDetail.attack}</div></li>
                        <li>Defense: <div>{newPokemonDetail.defense}</div></li>
                        <li>Speed: <div>{newPokemonDetail.speed}</div></li>
                        <li>Height: <div>{newPokemonDetail.height}</div></li>
                        <li>Weight: <div>{newPokemonDetail.weight}</div></li>
                    </ul>
                </div>
                <img src={newPokemonDetail.img} alt="" />
            </div>
        </div>
    )
}

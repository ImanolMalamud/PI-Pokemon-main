import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllImgTypes } from '../../redux/actions'
import './Card.css'
import { Link } from 'react-router-dom';

export default function Card({ pokemon }) {
    const dispatch = useDispatch()

    const allImgTypes = useSelector(state => state.imgTypes)

    useEffect(() => {
        dispatch(getAllImgTypes())
    }, [dispatch])

    return (
        <Link to={`/newhome/${pokemon.id}`} style={{ textDecoration: 'none' }}>
            <div className="card-container">
                <div className="card-info">
                    <div className="nombre">
                        {
                            // al name le cambiamos la primera letra a mayusculas
                            <h1>{pokemon?.name}</h1>
                        }
                    </div>
                    <div className="attack-and-defense">
                        <div className='skill'>
                            <h3>attack</h3>
                            <h2>{pokemon?.attack}</h2>
                        </div>
                        <div className='skill'>
                            <h3>defense</h3>
                            <h2>{pokemon?.defense}</h2>
                        </div>
                    </div>
                    <img src={pokemon?.img} alt="" className='poke-img' />
                    <div className="img-types-container">
                        {allImgTypes?.map(imgType => {
                            if (pokemon?.types?.includes(imgType.type)) {
                                return (
                                    <div className="type-data">
                                        <img src={imgType.url} alt='imgType' className="img-type" />
                                        <p className="img-text">{imgType.type}</p>
                                    </div>
                                )
                            } else {
                                return ""
                            }
                        })}
                    </div>
                </div>
            </div>
        </Link>

    )
}

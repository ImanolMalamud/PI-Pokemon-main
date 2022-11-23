import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import './Sort.css'

export default function Order() {
    const dispatch = useDispatch()

    const sort = useSelector(state => state.sort)
    const types = useSelector(state => state.types)
    const pokemonsFiltered = useSelector(state => state.pokemonsFiltered)
    const pokemons = useSelector(state => state.pokemons)
    const newFilter = useSelector(state => state.newFilter)

    useEffect(() => {
        dispatch(actions.getAllPokemons())
        dispatch(actions.getAllTypes())
    }, [dispatch, sort, newFilter])

    // Cambiamos la variable 'sort' de redux, y en funcion a esta variable se actualiza newPokemonsOrdered
    const handleChange = (e) => {
        dispatch(actions.newResetOrder())
        switch (e.target.value) {
            case "default":
                dispatch(actions.getAllPokemons())
                break
            case "attackAscendent":
                dispatch(actions.newChangeOrder({
                    ...sort,
                    ascAttack: true,
                    descAttack: false
                }))
                break
            case "attackDescendent":
                dispatch(actions.newChangeOrder({
                    ...sort,
                    ascAttack: false,
                    descAttack: true
                }))
                break
            case "nameAscendent":
                dispatch(actions.newChangeOrder({
                    ...sort,
                    ascName: true,
                    descName: false
                }))
                break
            case "nameDescendent":
                dispatch(actions.newChangeOrder({
                    ...sort,
                    ascName: false,
                    descName: true
                }))
                break
            case "nameDefault":
                dispatch(actions.getAllPokemons())
                break
            default:
                return dispatch(actions.newChangeOrder({
                    ...sort
                }))
        }
    }

    const handleChangeType = (e) => {
        dispatch(actions.newResetOrder())
        if (e.target.value === 'typeDefault') {
            return dispatch(actions.newResetFilter())
        }

        dispatch(actions.newChangeFilter({
            type: e.target.value
        }))
        // Los pokemons a renderizar finalmente siempre vienen de la variable newPokemonsOrdered
        return dispatch(actions.newChangeOrder({}))
    }

    const handleResetAll = (e) => {
        e.preventDefault()
        dispatch(actions.newResetOrder())
        dispatch(actions.newResetFilter())
    }

    return (
        <div>
            <form className='sort-container'>

                <select
                    defaultValue={'default'}
                    name={'name'}
                    id={'name'}
                    onChange={handleChange}
                >
                    <option
                        value='default'
                    >
                        Order
                    </option>
                    <option
                        value='nameAscendent'
                    >
                        A - Z
                    </option>
                    <option
                        value='nameDescendent'
                    >
                        Z - A
                    </option>
                    <option
                        value='attackAscendent'
                    >
                        Attack (min)
                    </option>
                    <option
                        value='attackDescendent'
                    >
                        Attack (max)
                    </option>
                </select>

                <select
                    defaultValue={'default'}
                    name={'type'}
                    id={'type'}
                    onChange={handleChangeType}
                >
                    <option
                        value='typeDefault'
                    >
                        All Types
                    </option>
                    {types?.map(type => {
                        return (
                            <option value={type.name}>{type.name}</option>
                        )
                    })}
                </select>
                <button onClick={handleResetAll}>Reset</button>
            </form>
        </div>
    )
}

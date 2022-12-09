import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import './Sort.css'

export default function Order() {
    const dispatch = useDispatch()

    const sort = useSelector(state => state.sort)
    const types = useSelector(state => state.types)
    const pokemonsFiltered = useSelector(state => state.pokemonsFiltered)
    const pokemonsSorted = useSelector(state => state.pokemonsSorted)
    const pokemons = useSelector(state => state.pokemons)
    const filter = useSelector(state => state.filter)

    useEffect(() => {
        dispatch(actions.getAllTypes())
        dispatch(actions.getAllPokemons())
    }, [dispatch, sort, filter])

    // Cambiamos la variable 'sort' de redux, y en funcion a esta variable se actualiza newPokemonsOrdered
    const handleChangeSort = (e) => {
        // dispatch(actions.getAllPokemons())

        switch (e.target.value) {
            case "default":
                dispatch(actions.resetSort())
                break
            case "attackAscendent":
                dispatch(actions.resetSort())
                dispatch(actions.changeSort({
                    ...sort,
                    ascAttack: true,
                    descAttack: false
                }))
                break
            case "attackDescendent":
                dispatch(actions.resetSort())
                dispatch(actions.changeSort({
                    ...sort,
                    ascAttack: false,
                    descAttack: true
                }))
                break
            case "nameAscendent":
                dispatch(actions.resetSort())
                dispatch(actions.changeSort({
                    ...sort,
                    ascName: true,
                    descName: false
                }))
                break
            case "nameDescendent":
                dispatch(actions.resetSort())
                dispatch(actions.changeSort({
                    ...sort,
                    ascName: false,
                    descName: true
                }))
                break
            default:
                return
        }
    }

    const handleChangeType = (e) => {
        dispatch(actions.resetFilter())

        if (e.target.value === 'typeDefault') {
            dispatch(actions.resetFilter())
            // Los pokemons a renderizar finalmente siempre vienen de la variable pokemonsSort
            return dispatch(actions.changeSort({}))
        }

        dispatch(actions.changeFilter({
            ...filter,
            type: e.target.value
        }))


        // Los pokemons a renderizar finalmente siempre vienen de la variable pokemonsSort
        return dispatch(actions.changeSort({}))
    }

    const handleResetAll = (e) => {
        // e.preventDefault()

        dispatch(actions.resetSort())
        dispatch(actions.resetFilter())
    }

    return (
        <div>
            <form className='sort-container'>

                <select
                    defaultValue={'default'}
                    name={'name'}
                    id={'name'}
                    onChange={handleChangeSort}
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
                <button onClick={handleResetAll}>Reload</button>
            </form>
        </div>
    )
}

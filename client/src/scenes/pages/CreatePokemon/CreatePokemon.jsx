import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../redux/actions'
import NavBar from '../../global/NavBar/NavBar';
import './CreatePokemon.css'


export default function CreatePokemon({ history }) {
    const [newPokemon, setNewPokemon] = useState({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        img: '',
        type: [],
    });
    const [errors, setErrors] = useState({
        initial: true
    });

    const dispatch = useDispatch()

    const types = useSelector(state => state.types)
    const pokemons = useSelector(state => state.pokemons)
    const imgTypes = useSelector((state) => state.imgTypes);

    const handleChange = (e) => {
        setNewPokemon({ ...newPokemon, [e.target.name]: e.target.value })
        setErrors(validatePokemon(
            {
                ...newPokemon,
                [e.target.name]: e.target.value
            },
            pokemons
        ))

    }

    const handleChangeType = (e) => {
        const addType = e.target.value.toLowerCase();

        if (newPokemon?.type?.length < 3) {
            if (newPokemon.type.includes(addType))
                return alert('No se pueden agregar dos tipos iguales');

            setNewPokemon({
                ...newPokemon,
                type: [...newPokemon.type, addType],
            });

            setErrors(
                validatePokemon(
                    {
                        ...newPokemon,
                        type: [...newPokemon.type, addType],
                    },
                    pokemons
                )
            );

            console.log(newPokemon);
        } else {
            alert('No se puede agregar más de tres tipos');
        }
    }

    const handleSubmit = (e) => {
        console.log(newPokemon)
        e.preventDefault()
        dispatch(actions.createPokemon(newPokemon));
        alert(`Pokemon ${newPokemon.name} created successfully`)

        history.push('/home')
    }

    useEffect(() => {
        types.length === 0 && dispatch(actions.getAllTypes())
        imgTypes.length === 0 && dispatch(actions.getAllImgTypes())

        return () => {
            dispatch(actions.getAllPokemons())
        }
    }, [])

    return (
        <div className='create-poke'>
            <NavBar />
            <div className='create-poke-title'> Create Pokemon</div>
            <div className="form-container">
                <form className='form' onSubmit={handleSubmit}>

                    <div className="inputs-container">

                        <div className="all-props-container">

                            {/* Name */}
                            <div className="prop-container">
                                <input
                                    type='text'
                                    placeholder='Name'
                                    onChange={handleChange}
                                    value={newPokemon.name}
                                    name='name'
                                    id='name'
                                    autoComplete='off'
                                    required
                                />
                                {errors.name
                                    ?
                                    <span>{errors.name}</span>
                                    :
                                    newPokemon.name && <span>Name</span>
                                }
                            </div>

                            {/* HP */}
                            <div className="prop-container">
                                <input
                                    type='number'
                                    placeholder='HP'
                                    onChange={handleChange}
                                    value={newPokemon.hp}
                                    name='hp'
                                    id='hp'
                                    autoComplete='off'
                                    required
                                />
                                {errors.hp
                                    ?
                                    <span>{errors.hp}</span>
                                    :
                                    newPokemon.hp && <span>HP</span>
                                }
                            </div>

                            {/* attack */}
                            <div className="prop-container">
                                <input
                                    type='number'
                                    placeholder='Attack'
                                    onChange={handleChange}
                                    value={newPokemon.attack}
                                    name='attack'
                                    id='attack'
                                    autoComplete='off'
                                    required
                                />
                                {errors.attack
                                    ?
                                    <span>{errors.attack}</span>
                                    :
                                    newPokemon.attack && <span>attack</span>
                                }
                            </div>

                            {/* defense */}
                            <div className="prop-container">
                                <input
                                    type='number'
                                    placeholder='Defense'
                                    onChange={handleChange}
                                    value={newPokemon.defense}
                                    name='defense'
                                    id='defense'
                                    autoComplete='off'
                                    required
                                />
                                {errors.defense
                                    ?
                                    <span>{errors.defense}</span>
                                    :
                                    newPokemon.defense && <span>defense</span>
                                }
                            </div>

                            {/* speed */}
                            <div className="prop-container">
                                <input
                                    type='number'
                                    placeholder='Speed'
                                    onChange={handleChange}
                                    value={newPokemon.speed}
                                    name='speed'
                                    id='speed'
                                    autoComplete='off'
                                    required
                                />
                                {errors.speed
                                    ?
                                    <span>{errors.speed}</span>
                                    :
                                    newPokemon.speed && <span>speed</span>
                                }
                            </div>

                            {/* height */}
                            <div className="prop-container">
                                <input
                                    type='number'
                                    placeholder='Height'
                                    onChange={handleChange}
                                    value={newPokemon.height}
                                    name='height'
                                    id='height'
                                    autoComplete='off'
                                    required
                                />
                                {errors.height
                                    ?
                                    <span>{errors.height}</span>
                                    :
                                    newPokemon.height && <span>height</span>
                                }
                            </div>

                            {/* weight */}
                            <div className="prop-container">
                                <input
                                    type='number'
                                    placeholder='Weight'
                                    onChange={handleChange}
                                    value={newPokemon.weight}
                                    name='weight'
                                    id='weight'
                                    autoComplete='off'
                                    required
                                />
                                {errors.weight
                                    ?
                                    <span>{errors.weight}</span>
                                    :
                                    newPokemon.weight && <span>weight</span>
                                }
                            </div>

                            {/* img */}
                            <div className="prop-container">
                                <input
                                    type='text'
                                    placeholder='Image(URL)'
                                    onChange={handleChange}
                                    value={newPokemon.img}
                                    name='img'
                                    id='img'
                                    autoComplete='off'
                                />
                                {errors.img
                                    ?
                                    <span>{errors.img}</span>
                                    :
                                    newPokemon.img && <span>img</span>
                                }
                            </div>



                            {/* type */}
                            <div className="prop-container">
                                <select
                                    name="type"
                                    id="type"
                                    onChange={handleChangeType}
                                    menuPlacement="top"
                                >
                                    {types?.map(type => {
                                        return (
                                            <option>{capitalize(type.name)}</option>
                                        )
                                    })}
                                </select>
                                {errors.type && <span className='msg'>{errors.type}</span>}
                            </div>


                        </div>
                        <div className="img-types-and-buttons">

                            {newPokemon.img && (
                                <div className='img-create-poke'>
                                    <img src={newPokemon.img} alt="pokemon image not found" />
                                </div>
                            )}

                            <div className="types-added">
                                Types: {newPokemon?.type?.map(type => {
                                    if (type.name) return (<div>{type.name}</div>)
                                    return (<div>{type}</div>)
                                })}
                            </div>

                            <div className="buttons-container">
                                <button
                                    type='submit'
                                    // disabled={Object.values(errors).length === 0 ? false : true}
                                    className={
                                        Object.values(errors).length === 0
                                            ? "button-create"
                                            : "button-create-disabled"
                                    }
                                    disabled={Object.values(errors).length === 0 ? false : true}
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

const validatePokemon = (input, pokemons) => {
    let errors = {};
    //*Name
    if (!input.name) {
        errors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]*$/.test(input.name)) {
        errors.name = 'Invalid name';
    } else if (input.name.length < 2) {
        errors.name = 'Few characters';
    } else if (input.name.length > 14) {
        errors.name = 'Many characters';
    } else if (pokemons) {
        const pokemonFind = pokemons?.find(
            (pokemon) => pokemon.name.toLowerCase() === input.name.toLowerCase()
        );
        pokemonFind && (errors.name = 'The pokemon name already exists');
    }

    //*Hp
    if (!input.hp) {
        errors.hp = 'Hp is required. Only Positive numbers.';
    } else if (input.hp.length > 4) {
        errors.hp = 'Max four characters';
    } else if (input.hp < 0) {
        errors.hp = 'Only positive numbers';
    }

    //*Attack
    if (!input.attack) {
        errors.attack = 'Attack is required. Only Positive numbers.';
    } else if (input.attack.length > 4) {
        errors.attack = 'Max four characters';
    } else if (input.attack < 0) {
        errors.attack = 'Only positive numbers';
    }

    //*Defense
    if (!input.defense) {
        errors.defense = 'Defense is required. Only Positive numbers.';
    } else if (input.defense.length > 4) {
        errors.defense = 'Max four characters';
    } else if (input.defense < 0) {
        errors.defense = 'Only positive numbers';
    }

    //*Speed
    if (!input.speed) {
        errors.speed = 'Speed is required. Only Positive numbers.';
    } else if (input.speed.length > 4) {
        errors.speed = 'Max four characters';
    } else if (input.speed < 0) {
        errors.speed = 'Only positive numbers';
    }

    //*Height
    if (!input.height) {
        errors.height = 'Height is required. Only Positive numbers.';
    } else if (input.height.length > 4) {
        errors.height = 'Max four characters';
    } else if (input.height < 0) {
        errors.height = 'Only positive numbers';
    }

    //*Weight
    if (!input.weight) {
        errors.weight = 'Weight is required. Only Positive numbers.';
    } else if (input.weight.length > 4) {
        errors.weight = 'Max four characters';
    } else if (input.weight < 0) {
        errors.weight = 'Only positive numbers';
    }

    //*Type
    if (input.type.length === 0) errors.type = 'Select at least one type';

    //*Img
    if (!(/^data:image\/[a-z]+;base64,/.test(input.img) || /(http(s?):)([/|.|\w|\s|-])*.(?:jpg|gif|png|webp)/.test(input.img))) {
        errors.img = 'Invalid URL';
    }

    return errors;
}

const getImgByType = (type, imgTypes) => {

    let img = imgTypes.find(imgType => type.toLowerCase() === imgType.type.toLowerCase())

    if (!img) return ""

    return img
}

const capitalize = (word) =>
    word[0].toUpperCase() + word.slice(1).toLowerCase();
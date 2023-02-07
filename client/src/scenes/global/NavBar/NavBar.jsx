import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className='navbar-container'>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className="logo-container">
                    <h1>Pokemon</h1>
                </div>
            </Link>
            <div className="menu-bar">
                <Link to='/home' style={{ textDecoration: 'none' }}>
                    <h1>Home</h1>
                </Link>
                <Link to='/createpoke' style={{ textDecoration: 'none' }}>
                    <h1>Create Pokemon</h1>
                </Link>

            </div>
        </div>
    )
}

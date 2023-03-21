import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [toggleActive, setToggleActive] = useState(false);

    const toggleNavbar = () => {
        setToggleActive(!toggleActive);
    }

    return (
        <div className={`navbar-container ${toggleActive ? 'navbar-mobile' : ''}`}>

            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className="logo-container">
                    <h1>Pokemon</h1>
                </div>
            </Link>
            <div className={`menu-bar ${toggleActive ? 'navbar-mobile' : ''}`}            >
                <Link to='/home' style={{ textDecoration: 'none' }}>
                    <h1>Home</h1>
                </Link>
                <Link to='/createpoke' style={{ textDecoration: 'none' }}>
                    <h1>Create Pokemon</h1>
                </Link>
                <Link to='/createpoke' style={{ textDecoration: 'none' }}>
                    <h1>Contact</h1>
                </Link>
            </div>

            <button
                className={`navbar-toggle-btn ${toggleActive ? 'navbar-mobile' : ''}`}
                onClick={toggleNavbar}
            >
            </button>
        </div>

    )
}

import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

function Landing(props) {
    return (
        <>
            <section className='mainContainer'>
                <div className='containerInfo'>
                    <img
                        src='../../../img/home-background-paisaje.jpg'
                        alt=''
                    />
                    <Link to='/home'>
                        <button className='buttonGo'>Home</button>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default Landing;

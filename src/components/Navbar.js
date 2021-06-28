import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import marsLogo from '../mars.svg';

function Navbar() {
    return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                   <img src={marsLogo} alt="logo" width="40" height="40"/> Red Planet Travel
                </Link>
            </div>
        </nav>
        </>
    );
}

export default Navbar; 

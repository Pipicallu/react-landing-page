import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import marsLogo from '../mars.svg';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                   <img src={marsLogo} alt="logo" width="40" height="40"/> Red Planet Travel
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/packages' className='nav-links' onClick={closeMobileMenu}>
                            Packages
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/faq' className='nav-links' onClick={closeMobileMenu}>
                            F.A.Q
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-link-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                
            </div>
        </nav>
        </> 
    );
}

export default Navbar; 

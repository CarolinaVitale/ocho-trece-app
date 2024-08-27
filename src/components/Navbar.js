import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logotype.png'

function Navbar() {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img className='logo' src={logo} alt='logo' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-item'>
                            <Link
                                to='/menu'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                menu
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/about'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                about
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/contact'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/catering'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                catering
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
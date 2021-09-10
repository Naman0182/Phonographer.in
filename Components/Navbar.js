// import logo from 'images/logo.png';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {FaTimes, FaBars} from 'react-icons/fa';
import {HiOutlineMenuAlt2} from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';
import './Navbar.css';

function Navbar() {

   
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
        setButton(false);
        } else {
        setButton(true);
        }
    };

    

    return (
        <>
        <IconContext.Provider value={{color:'#000', opacity: '0.8'}}>
        <nav className='navbar'>
            <div className='navbar-container container'>
                <Link to='/' className='navbar-logo'>
                <img src='images\logo.png' alt="" />

                </Link>
                <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <HiOutlineMenuAlt2 />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Portfolio
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/about'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='./Components/Contact'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>

            </ul>
            </div>
        </nav> 
        </IconContext.Provider>
        </>
    )
}

export default Navbar

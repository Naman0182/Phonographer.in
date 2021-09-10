import React from 'react';
import {FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import './Social.css'
import {Link} from 'react-router-dom'
function Social() {
    return (
        <IconContext.Provider value={{color: '#fff'}}>
           <div className="social fa"> 
                <Link  to='https://www.instagram.com/phonographer.in/' className='fa'><FaInstagram /></Link>
                <Link  to='https://www.instagram.com/phonographer.in/' className='fa'><FaTwitter /></Link>
                <Link  to='https://www.instagram.com/phonographer.in/' className='fa'><FaFacebook /></Link>
           </div>
        </IconContext.Provider>
    )
}

export default Social

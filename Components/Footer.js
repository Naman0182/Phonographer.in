import React from 'react'
import { Link } from 'react-router-dom'
import Social from './Social'
import './Footer.css'

function Footer() {
    return (
        <div className ='footer-container'>
            <div className='footer_section reach_us'>
                    <h1>Reach us at</h1>
                    <p><Link to='/' className='link'>Phonographer.in</Link></p>
            </div>
            <div className='footer_section links'>
                    <h1>Social Links</h1>
                    <Social/>
            </div>
            <div className='footer_section '>
            <h1>For Updates</h1>
                <div className='updates-container'>
                    <input type="text" placeholder="E-mail Address"/>
                    <button>ok</button>
                </div>
            </div>
        </div>
    )
}

export default Footer

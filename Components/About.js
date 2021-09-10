import React from 'react';
import { Button } from './Buttons';
import { Link } from 'react-router-dom';
import './About.css';

function About({
    lightBg,
    lightText,
    lightTextDesc,
    description,
    headline,
    buttonLeft,
    buttonRight,
    img,
    alt,
    imgStart,
    highlightUpper,
    highlightLower,

}) {

    return (
        <>
           <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className='container'>
                   <div className='row home__hero-row'
                   style={
                       {
                           display: 'flex',
                           flexDirection: imgStart ==='start' ? 'row-reverse':'row'
                       }
                   }
                   >
                    <div className='col'>
                        <div className='home__hero-img-wrapper'>
                            <img src={img} alt={alt} className='home__hero-img'/>
                        </div>
                    </div>
                   <div className='col'>
                        <div className='home__hero-text-wrapper'>
                            <h1 className={lightText ? 'heading':'heading dark'}>{headline}</h1>
                            <h1  className='home__hero-Upper color heading'>{highlightUpper}</h1>
                            <p className={lightTextDesc ?'home__hero-subtitle light':'home__hero-subtitle dark_s'}>
                            {description}<br/>
                            <Link to='https://www.instagram.com/phonographer.in/' className='home__hero-lower color'>{highlightLower}</Link>
                            </p>
                            
                            <Link to='/' className='Buttons'>
                                <Button buttonSize='btn-wide' buttonColor='black' buttonStyle='btn-primary'>
                                    {buttonLeft}
                                </Button>
                                <Button buttonSize='btn-wide' buttonColor='black' buttonStyle='btn-outline'>
                                    {buttonRight}
                                </Button>
                            </Link>
                        </div>

                   </div>
                           
                    </div> 
                </div>
           </div> 
        </>
    )
}

export default About;

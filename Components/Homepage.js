import React from 'react'
import './Homepage.css'
import Social from './Social'

function Homepage() {
    return (
        <>
           <div className="container1">
               <div className='image-wrapper'>
                    <img src='images/HomePageFinal.png' className='image'/>
               </div>
                <div className="headings">
                    <div className="name-heading">
                        <h1>Mayank Khadane</h1>
                        <p>Photographer</p>
                    </div>  
                </div>
                
                <div className='social-panel'>
                    <Social/>
                </div>
                
            </div> 
            
        </>
    )
}

export default Homepage

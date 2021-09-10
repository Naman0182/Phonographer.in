import React from 'react';
import About from '../../About';
import { homeObjOne , homeObjTwo } from './Data';

function Home() {
    return (
        <>
        <div>
            <About {...homeObjOne}/>
            <About {...homeObjTwo}/>
        </div>
        </>
    )
}

export default Home;


import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/Homepage';
import Home from './Components/Pages/About/Home';
import Contact from './Components/Contact';
import Footer from './Components/Footer';



function App() {
  return (
    <>
     <Router>
       <Navbar/>
       <HomePage/>       
       <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/' component={Contact} />
       </Switch>
       <Contact/>
       <Footer/>
     </Router>
    </>
  );
}

export default App;

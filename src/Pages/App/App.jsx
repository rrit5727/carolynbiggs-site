import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'; 

import NavBar from '../../Components/NavBar/NavBar';
import HomePage from './../HomePage/Home';
import About from './../About/About';
import FAQ  from '../FAQ/Faq';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Media from '../Media/Media';
import Resources from '../Resources/Resources'




function App() {

  return (
    <>
      <main className='App'>
        <>
          <Router>
          <div className='sticky top-0 z-50 w-full'>
            <NavBar />          
          </div>        
            <Routes>
              <Route path='/' element={ <HomePage /> } />
              <Route path='/about' element={ <About /> } />
              <Route path='services' element={ <Services /> } />
              <Route path='faq' element={ <FAQ /> } />
              <Route path='resources' element={ <Resources /> } />
              <Route path='media' element={ <Media /> } />
              <Route path='contact' element={ <Contact /> } />
            </Routes>
          </Router>
        </>
      </main>
    </>
  )
}

export default App

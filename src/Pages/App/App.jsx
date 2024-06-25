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




function App() {

  return (
    <>
      <main className='App'>
        <>
          <Router>
          <div className='w-screen bg-green-600 sticky top-0 z-50 flex justify-between px-4 py-3'>
            <NavBar />          
          </div>        
            <Routes>
              <Route path='/' element={ <HomePage /> } />
              <Route path='/about' element={ <About /> } />
              <Route path='faq' element={ <FAQ /> } />
              <Route path='services' element={ <Services /> } />
              <Route path='contact' element={ <Contact /> } />
            </Routes>
          </Router>
        </>
      </main>
    </>
  )
}

export default App

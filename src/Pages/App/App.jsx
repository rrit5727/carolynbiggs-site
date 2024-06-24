import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import HomePage/Home';
import NavBar from '../../Components/NavBar/NavBar';




function App() {

  return (
    <>
      <main className='App'>
        <>
          <h1>App</h1>
          <NavBar 

          />
          <Router>
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

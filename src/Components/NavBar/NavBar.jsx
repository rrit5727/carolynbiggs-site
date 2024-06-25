import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
      }, 300); // Adjust debounce delay as needed (e.g., 200ms)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId); // Clean up timeout on component unmount
    };
  }, []);

  return (
    <div id="navbar" className={`w-screen absolute flex justify-between px-4 py-3 
                    ${scrolled ? 'bg-white text-white' : 'bg-transparent text-white'}`}>
      <div className='flex-col'>
        <h1 className=''>Carolyn Biggs</h1>
        <p className='text-3xl'>Allied Mental Health Professional</p>
        <h3 className='font-bold'>(BSW Hons., MS., MAASW)</h3>
      </div>
      <ul className='flex items-center'>
        <li className='px-2'>
          <Link to="/" className={scrolled ? 'text-teal-600' : 'text-white'} >
            HOME
          </Link>
        </li>
        <li className='px-2'>
          <Link to="/About" className={scrolled ? 'text-teal-600' : 'text-white'} >
            ABOUT 
          </Link>
        </li>
        <li className='px-2'>
          <Link to="/Services" className={scrolled ? 'text-teal-600' : 'text-white'} >
            SERVICES
          </Link>
        </li>
        <li className='px-2'>
          <Link to="/FAQ" className={scrolled ? 'text-teal-600' : 'text-white'} >
            FAQs
          </Link>
        </li>
        <li className='px-2'>
          <Link to="/Resources" className={scrolled ? 'text-teal-600' : 'text-white'} >
            RESOURCES
          </Link>
        </li>
        <li className='px-2'>
          <Link to="/Media" className={scrolled ? 'text-teal-600' : 'text-white'} >
            MEDIA
          </Link>
        </li>
        <li className='px-2'>
          <Link to="/Contact" className={scrolled ? 'text-teal-600' : 'text-white'} >
            CONTACT 
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
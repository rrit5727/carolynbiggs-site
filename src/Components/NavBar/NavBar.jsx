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
    <div id="navbar" className={`w-screen  flex justify-between px-4 py-3 
                    ${scrolled ? 'bg-white text-turquoise' : 'bg-transparent text-white'}`}>
      <div className='flex-col'>
        <h1>Carolyn Biggs</h1>
        <h2>Allied Mental Health Professional</h2>
        <h3 className='font-bold'>(BSW Hons., MS., MAASW)</h3>
      </div>
      <ul className='flex items-center'>
        <li className='px-2'>
          <Link to="/" >
            HOME
          </Link>
        </li>
        <li className='px-2'>
          <Link to="/About" >
            ABOUT 
          </Link>
        </li>
        <li className='px-2'>
          <Link to="/Services" >
            SERVICES
          </Link>
        </li>
        <li className='px-2'>
          <Link to="/FAQ" >
            FAQs
          </Link>
        </li>
        <li className='px-2'>
          <Link to="/Resources" >
            RESOURCES
          </Link>
        </li>
        <li className='px-2'>
          <Link to="/Media" >
            MEDIA
          </Link>
        </li>
        <li className='px-2'>
          <Link to="/Contact" >
            CONTACT 
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
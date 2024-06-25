import { Link } from 'react-router-dom';

import { useState } from 'react';
import './NavBar.css';

const NavBar = () => {

    return (
       <>
            <div>
                <h1>C . B</h1>
            </div>
            <ul className='flex items-center'>
                <li className='px-2'>
                    <Link to="/" >
                        Home
                    </Link>
                </li>
                <li className='px-2'>
                    <Link to="/About" >
                        About
                    </Link>
                </li>
                <li className='px-2'>
                    <Link to="/FAQ" >
                        FAQs
                    </Link>
                </li>
                <li className='px-2'>
                    <Link to="/Services" >
                        Services
                    </Link>
                </li>
                <li className='px-2'>
                    <Link to="/Contact" >
                        Contact
                    </Link>
                </li>
            </ul>
        </> 
    )

}

export default NavBar;
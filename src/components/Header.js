import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <Link to='/'>
                Home
            </Link>
            
            <Link to='/about'>
                About
            </Link>

            <Link to='#'>
                <i className="fas fa-sun"></i>

                {/* <i class="fas fa-moon"></i> */}
            </Link>
        </nav>
    );
}

export default Header;

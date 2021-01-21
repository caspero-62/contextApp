import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

const Header = () => {
    const {isLightTheme, themeStyles, toggleTheme} = useContext(ThemeContext);
    return (
        <nav className='header'
        style={{
            background: themeStyles.background,
        }}
        >
            <Link to='/' style={{color: themeStyles.linkColors}}>
                Home
            </Link>
            
            <Link to='/about' style={{color: themeStyles.linkColors}}>
                About
            </Link>

            <Link to='#' 
            style={{color: themeStyles.linkColors}}
            onClick={toggleTheme}
            >
                {isLightTheme ? (
                    <i className="fas fa-sun"></i>
                ) : (
                    <i class="fas fa-moon"></i>
                )}
            </Link>
        </nav>
    );
}

export default Header;

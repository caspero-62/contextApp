import React, { useState, createContext } from 'react';

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {

    // General Theme state
    const [theme, setTheme] = useState('light');

    // stylings based on theme chosen
    const lightValues = {
        background: '#fff',
        color: '#00154f',
        linkColors: '#00154f'
    }

    const darkValues = {
        background: '#00154f',
        color: '#f4af1b',
        linkColors: '#f4a1b'
    }

    // Toggle theme Function
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{ theme, lightValues, darkValues, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;

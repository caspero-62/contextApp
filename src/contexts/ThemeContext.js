import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

// stylings based on theme chosen
const themeValues = {
    light: {
        background: '#eee',
        color: '#00154f',
        linkColors: '#00154f'
    },
    dark: {
        background: '#00154f',
        color: '#f4af1b',
        linkColors: '#f4af1b'
    }
}

const ThemeContextProvider = ({ children }) => {

    // General Theme state
    const [isLightTheme, setIsLightTheme] = useState(true);

    // Toggle theme Function
    const toggleTheme = () => {
        setIsLightTheme(isLightTheme ? false : true);
    }

    const themeStyles = isLightTheme ? themeValues.light : themeValues.dark;

    return (
        <ThemeContext.Provider value={{ isLightTheme, themeStyles, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;

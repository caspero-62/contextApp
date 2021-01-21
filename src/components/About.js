import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const About = () => {
    return (
        <ThemeContext.Consumer>
            {context => {
                const { themeStyles } = context;
                return (
                    <div className='about'
                    style={{
                        background: themeStyles.background,
                        color: themeStyles.color
                    }}
                    >
                        <h1>About</h1>
                        <p>This is the About page</p>
                    </div>
                )
            }}
        </ThemeContext.Consumer>
    );
}

export default About;

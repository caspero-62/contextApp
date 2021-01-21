import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Home extends Component {
    static contextType = ThemeContext;
    render() {
        const { themeStyles } = this.context;
        return (
            <div 
            className='home' 
            style={{
                background: themeStyles.background,
                color: themeStyles.color
            }}>
                <h1>Home</h1>
                <p>This is the home page</p>
            </div>
        );
    }
}

export default Home;

import React from 'react';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ThemeContextProvider from './contexts/ThemeContext';

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Header />
        <Switch>
          <Route 
            exact
            path='/'
            component={Home}
          />

          <Route 
            exact
            path='/about'
            component={About}
          />
        </Switch>
      </ThemeContextProvider>
    </div>
  );
}

export default App;



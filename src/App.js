import React from 'react';
import './App.css';
import MainContainer from './MainContainer';
import { Route, Switch } from 'react-router-dom';
import Register from './Register';
import Header from './Header';


const My404 = () => {
  return(
    <div>
      This page is unavailable
    </div>
  )
};


function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path='/' component={ Register } />
        <Route exact path='/employee' component={ MainContainer } />
        <Route component={My404} />
      </Switch>
    </main>
  );
}

export default App;

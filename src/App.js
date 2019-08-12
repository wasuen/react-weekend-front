import React, { Component } from 'react';
import './App.css';
import MainContainer from './MainContainer';
import { Route, Switch } from 'react-router-dom';
import Register from './Register';
import Header from './Header';
import Login from './Login'

 
 

const My404 = () => {
  return(
    <div>
      This page is unavailable
    </div>
  )
};


class App extends Component {

  render() {
      return (
        <main>
          <Header />
          <Switch>
            <Route exact path='/' component={ Register } />
            <Route exact path='/employee' component={ MainContainer } />
            <Route exact path='/login' component={ Login } />
            <Route component={My404} />
          </Switch>
        </main>
      );
  }
}

export default App;
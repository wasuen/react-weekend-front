import React, { Component } from 'react';
import './App.css';
import MainContainer from './MainContainer';
import { Route, Switch } from 'react-router-dom';
import Register from './Register';
import Header from './Header';
import { GoogleLogin } from 'react-google-login';
 
 

const My404 = () => {
  return(
    <div>
      This page is unavailable
    </div>
  )
};


class App extends Component {

  responseGoogle = (response) => {
    console.log(response);
  }
  render() {
      return (
        <main>
          <Header />
          <Switch>
            <Route exact path='/' component={ Register } />
            <Route exact path='/employee' component={ MainContainer } />
            <Route component={My404} />
          </Switch>
          <GoogleLogin
            clientId="943884177518-5f139p2o3hsjsdsn0a2qm8rb6gt3aekf.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}/>
        </main>
      );
  }
}

export default App;
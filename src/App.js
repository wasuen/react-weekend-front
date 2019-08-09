import React from 'react';
import './App.css';
import MovieContainer from "./MovieContainer"
import { Route, Switch } from 'react-router-dom'
import Register from './Register'
import Header from './Header'

const My404 = () => {
  return(
    <div>
      You're lost buddy
    </div>
  )
}

function App() {
  return (
    <main>
      <Header/>
      <Switch>
        <Route exact path="/" component={ Register } />
        <Route exact path="/movies" component={ MovieContainer } />
        <Route component= {My404} />
      </Switch>
    </main>
  );
}

export default App;

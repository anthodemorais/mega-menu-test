import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Settings from './components/Settings';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/settings">
            <Settings/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

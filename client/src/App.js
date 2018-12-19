import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Details from './components/Details';
import NotFound from './components/NotFound';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details" exact component={Details} />
          <Route path="" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

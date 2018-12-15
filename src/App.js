import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
// import Details from './components/Details';
// import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;

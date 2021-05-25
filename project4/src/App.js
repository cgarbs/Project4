import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>Practice your React skills.</h1>
      </div>
    );
  }
}

export default App;

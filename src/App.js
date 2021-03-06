import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IdeasContainer from './components/IdeasContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ethan's Idea Bright Board</h1>
        </header>
        <IdeasContainer />
      </div>
    );
  }
}

export default App;

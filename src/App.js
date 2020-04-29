import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchApp from './components/SearchApp.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Wikipedia & Hackernews React Search</h2>
        </div>
        <SearchApp />
      </div>
    );
  }
}

export default App;

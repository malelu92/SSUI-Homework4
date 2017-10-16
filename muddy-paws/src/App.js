import React, { Component } from 'react';
import logo from './logo.svg';
import mainImage from './images/home_page_im1.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="app-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="app-nav-bar">
        </p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <img src={mainImage} className="main-image" alt="mainImage"/>
        </p>
      </div>
    );
  }
}

export default App;

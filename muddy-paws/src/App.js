import React, { Component } from 'react';
import logo from './logo.svg';
import mainImage from './images/home_page_im1.jpg';
import muddyPawsLogo from './images/muddy_paws_logo.png'
import './App.css';
import Main from './main.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    }
  }

  navToShopPage() {
    this.setState({page: 0})
  }

  renderPageVIew() {
    if(this.state.page === 0)
      return <Main/>
  }


  render() {
    return (
      <div className="App">
        <header className="app-header">
            <img src={muddyPawsLogo} className = {"muddy-paws-logo" + (this.state.page === 0 ? " active" : "")} onClick={(ev) => this.setState({page: 0})} alt="muddy paws logo"/>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="app-nav-bar">
        </div>
        <p className="App-intro">
        </p>
        <div>
          {this.renderPageVIew()}
        </div>
      </div>
    );
  }
}

export default App;

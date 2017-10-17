import React, { Component } from 'react';
import logo from './logo.svg';
import mainImage from './images/home_page_im1.jpg';
import muddyPawsLogo from './images/muddy_paws_logo.png';
import shoppingCart from "./images/shopping_cart.png";
import './App.css';
import Checkout from './checkout.js';
import Main from './main.js';
import Products from './products.js';

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
    if(this.state.page === 1)
      return <Products/>
    if(this.state.page === 2)
      return <Checkout/>
  }


  render() {
    return (
      <div className="App">
        <header className="app-header">
          <img src={muddyPawsLogo} className = {"muddy-paws-logo" + (this.state.page === 0 ? " active" : "")} onClick={(ev) => this.setState({page: 0})} alt="muddy paws logo"/>
          <div className= {"search"}>
            <input type="text" placeholder="Search" className={"search-bar"}/>
            <input type="button" className={"button-search"} value="Search"/>
          </div>
          {/* -------shopping cart icon-------- */}
          <div className={"shopping-cart" + (this.state.page === 2 ? " active" : "")} onClick={(ev) => this.setState({page: 2})}>
            <img src={shoppingCart} className={"shopping-cart-img"} alt="shopping cart image"/>
            <p id="shopping-cart-text">0 items</p>
          </div>
        </header>
        <div className="app-nav-bar">
            <div className = {"app-nav-link" + (this.state.page === 1 ? " active" : "")} onClick={(ev) => this.setState({page: 1})} >Products</div>
        </div>
        <p className="App-intro">
        </p>
        <div>
          {this.renderPageVIew()}
        </div>
        <div className={"footer"}>
          <p>CONTACT US</p>
        </div>
      </div>
    );
  }
}

export default App;

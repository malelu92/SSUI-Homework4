import React, { Component } from 'react';
import logo from './logo.svg';
import mainImage from './images/home_page_im1.jpg';
import muddyPawsLogo from './images/muddy_paws_logo.png';
import shoppingCart from "./images/shopping_cart.png";
import './App.css';
import Checkout from './checkout.js';
import Main from './main.js';
import Products from './products.js';
import ProductInfo from './productInfo.js';
import ShoppingCart from './shoppingCart.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      cartQty: 0,
      cartItems: []
    };
    this.updateCart = this.updateCart.bind(this);
    this.onHover = this.onHover.bind(this);
  }

  onHover() {
    console.log("hover")
  }

  updateCart(field, value) {
    var newQty = this.state.cartQty + value;
    this.setState({cartQty: newQty});
    console.log("parent");
  }

  renderPageView() {
    if(this.state.page === 0)
      return <Main/>
    if(this.state.page === 1)
      return <Products/>
    if(this.state.page === 2)
      return <Checkout/>
    if(this.state.page === 3)
      return <ProductInfo addItem={this.updateCart} updateCart={this.updateCart}/>
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
          <div className={"shopping-cart" + (this.state.page === 2 ? " active" : "")} onMouseOver={this.onHover.bind(this)} onClick={(ev) => this.setState({page: 2})}>
            <img src={shoppingCart} className={"shopping-cart-img"} alt="shopping cart image"/>
            <p id="shopping-cart-text">{this.state.cartQty} items</p>
          </div>
        </header>
        <div className="app-nav-bar">
            <div className = {"app-nav-link" + (this.state.page === 1 ? " active" : "")} onClick={(ev) => this.setState({page: 1})} >Products</div>
            <div className = {"app-nav-link" + (this.state.page === 3 ? " active" : "")} onClick={(ev) => this.setState({page: 3})} >spec</div>
        </div>
        <p className="App-intro">
        </p>
        <div>
          {this.renderPageView()}
        </div>
        <div className={"footer"}>
          <p>CONTACT US</p>
        </div>
      </div>
    );
  }
}

export default App;

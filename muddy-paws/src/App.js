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
import CartHover from './cartHover.js';




import dogHarnessOne from './images/dog_harness1.jpg';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      cartQty: 0,
      cartItems: [],
      cartProdQtys: [],
      prodSel: [],
      cartWindow: null,
    };
    this.updateCart = this.updateCart.bind(this);
    this.updatePage = this.updatePage.bind(this);
    this.onHover = this.onHover.bind(this);
    this.removeCart = this.removeCart.bind(this);
  }

  onHover() {
    var cartHover = <CartHover cartProdQtys = {this.state.cartProdQtys} cartItems = {this.state.cartItems}/>
    this.setState({cartWindow: cartHover});
  }

  offHover() {
    this.setState({cartWindow: null});
  }

  renderCartHover() {
    if(this.state.cartWindow !== null) {
      return this.state.cartWindow;
    }
  }

  updateCart(field, value) {
    var newQty = this.state.cartQty + value;
    var prodFound = false;
    this.setState({cartQty: newQty});
    for (var i = 0; i < this.state.cartItems.length; i++) {
      {/* product already on cart*/}
      if(this.state.prodSel[1] == this.state.cartItems[i][1]) {
        this.state.cartProdQtys[i] += value;
        prodFound = true;
      }
    }
    if (!prodFound) {
      this.state.cartItems.push(this.state.prodSel);
      this.state.cartProdQtys.push(value);
    }
  }

  removeCart(field, value) {
    var newQty = this.state.cartQty - value;
    this.setState({cartQty: newQty});
  }

  updatePage(field, value) {
    this.setState({page: 3});
    this.setState({prodSel: value});
    this.renderPageView();
  }

  renderPageView() {
    if(this.state.page === 0)
      return <Main
              updatePage={this.updatePage}
              />
    if(this.state.page === 1)
      return <Products
              updatePage={this.updatePage}
              />
    if(this.state.page === 2)
      return <Checkout
              cartQty={this.state.cartQty}
              cartItems={this.state.cartItems}
              cartProdQtys={this.state.cartProdQtys}
              updatePage={this.updatePage}
              removeCart={this.removeCart}
              />
    if(this.state.page === 3)
      return <ProductInfo 
              addItem={this.updateCart} 
              updateCart={this.updateCart}
              prodSel={this.state.prodSel}
              />
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
          <div className={"shopping-cart" + (this.state.page === 2 ? " active" : "")} onMouseOver={this.onHover.bind(this)} onMouseOut={this.offHover.bind(this)} onClick={(ev) => this.setState({page: 2})}>
            <img src={shoppingCart} className={"shopping-cart-img"} alt="shopping cart image"/>
            <p id="shopping-cart-text">{this.state.cartQty} items</p>
          </div>
            {this.renderCartHover()}
        </header>
        <div className="app-nav-bar">
            <div className = {"app-nav-link" + (this.state.page === 1 ? " active" : "")} onClick={(ev) => this.setState({page: 1})} >PRODUCTS</div>
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

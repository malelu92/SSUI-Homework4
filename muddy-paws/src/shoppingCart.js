import React, { Component } from 'react';
import './App.css'
import shoppingCart from "./images/shopping_cart.png";

class ShoppingCart extends Component {
  constructor(props) {
	super(props);
	this.state = {
		qty: 0,
	}
  }

  render() {
	return (
	  <div className={"shopping-cart" + (this.state.page === 2 ? " active" : "")} onClick={(ev) => this.setState({page: 2})}>
        <img src={shoppingCart} className={"shopping-cart-img"} alt="shopping cart image"/>
        <p id="shopping-cart-text">0 items</p>
      </div>
	);
  }
}


export default ShoppingCart;
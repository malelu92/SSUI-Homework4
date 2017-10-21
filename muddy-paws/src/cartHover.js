import React, { Component } from 'react';
import './App.css'

class CartHover extends Component {
  constructor(props) {
	super(props);
  }

  render() {
  	var totalPrice = 0;
    if(this.props.cartProdQtys) {
      for (var i=0; i < this.props.cartProdQtys.length; i++) {
        totalPrice += this.props.cartProdQtys[i]*this.props.cartItems[i][3];
      }
    }
	return (
	  <div id="cart-window">
	  	<p> Total price: {totalPrice}</p>
	  <img className="prod-img" src={this.props.image} />
	  </div>
	);
  }
}


export default CartHover;
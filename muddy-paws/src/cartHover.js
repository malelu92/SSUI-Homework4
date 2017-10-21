import React, { Component } from 'react';
import './App.css'

class CartHover extends Component {
  constructor(props) {
	super(props);
  }

  render() {
  	var totalPrice = 0.0;
  	var itemTotalPrice = 0;
  	var items = [];
    if(this.props.cartProdQtys) {
      for (var i=0; i < this.props.cartProdQtys.length; i++) {
      	itemTotalPrice = this.props.cartProdQtys[i]*this.props.cartItems[i][3];
        totalPrice += itemTotalPrice;

      	items.push(    
      	  <div className={"screen-align"}>
            <img id="prod-img-cart" src={this.props.cartItems[i][0]} />
            <div id="prod-info-cart">
              <p>items: {this.props.cartProdQtys[i]}</p>
              <p>price: {itemTotalPrice}</p>
            </div>
          </div>
        );
  	  }
    }
  	return (
	  <div id="cart-window">
	  	<p> Total price: {totalPrice}</p>
	  	{items}
	  </div>
  	);
  }
}


export default CartHover;
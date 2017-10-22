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
      {/* calculates total price*/}
      for (var i=0; i < this.props.cartProdQtys.length; i++) {
      	itemTotalPrice = this.props.cartProdQtys[i]*this.props.cartItems[i][3];
        totalPrice += itemTotalPrice;

      {/* push products to cart window*/}
      	items.push(
          <div>
      	  <div className={"screen-align"}>
            <img id="prod-img-cart" src={this.props.cartItems[i][0]} />
            <div id="prod-info-cart">
              <p>items: {this.props.cartProdQtys[i]}</p>
              <p>price: {itemTotalPrice}</p>
            </div>
          </div>
          <hr/>
          </div>
        );
  	  }
    }
  	return (
	  <div id="cart-window">
	  	<p> Total price: {totalPrice}</p>
      <hr/>
	  	{items}
	  </div>
  	);
  }
}


export default CartHover;
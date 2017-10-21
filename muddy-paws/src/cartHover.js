import React, { Component } from 'react';
import './App.css'

class CartHover extends Component {
  constructor(props) {
	super(props);
  }

  render() {
  	var totalPrice = 0;
  	var items = [];
    if(this.props.cartProdQtys) {
      for (var i=0; i < this.props.cartProdQtys.length; i++) {
        totalPrice += this.props.cartProdQtys[i]*this.props.cartItems[i][3];

      	items.push(    
      	  <div className={"screen-align"}>
            <img className="prod-img" src={this.props.cartItems[i][0]} />
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
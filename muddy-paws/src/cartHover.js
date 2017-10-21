import React, { Component } from 'react';
import './App.css'

class CartHover extends Component {
  constructor(props) {
	super(props);
  }

  render() {
  	console.log("hover page")
  	console.log(this.props.alt)
	return (
	  <div id="cart-window">
	  	<p> Total price: {this.props.totPrice}</p>
	  <img className="prod-img" src={this.props.image} />
	  </div>
	);
  }
}


export default CartHover;
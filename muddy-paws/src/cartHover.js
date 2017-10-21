import React, { Component } from 'react';
import './App.css'

class CartHover extends Component {
  constructor(props) {
	super(props);
	this.state = {
		qty: 0,
	}
  }

  render() {
  	console.log("hover page")
  	console.log(this.props.alt)
	return (
	  <div>
	  <img className="prod-img" src={this.props.image} alt={this.props.altText} />
	  </div>
	);
  }
}


export default CartHover;
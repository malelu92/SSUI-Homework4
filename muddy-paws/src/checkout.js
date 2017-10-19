import React, { Component } from 'react';
import './App.css'

class Checkout extends Component {
  constructor(props) {
	super(props);
  }

  render() {
	return (
	  <div>
		<div className={"checkout-header-info"}>
  		  <p className={"checkout-header"}>Item</p>
  		  <p className={"checkout-header"}>Quantity</p>
  		  <p className={"checkout-header"}>Price</p>
		</div>
		<hr></hr>
	  </div>
	);
  }
}

export default Checkout;
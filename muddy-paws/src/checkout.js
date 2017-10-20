import React, { Component } from 'react';
import './App.css'

import dogHarnessOne from './images/dog_harness1.jpg';
import dogHarnessTwo from './images/dog_harness2.jpg';
import dogHarnessThree from './images/dog_harness3.png';
import fiveStars from './images/five_stars.png';

class Checkout extends Component {
  constructor(props) {
	super(props);
  }

  renderProducts() {
    return (
      <div className={"screen-align"}>
        <img src={dogHarnessOne} className={"prod-img-checkout"} alt="orange dog harness"></img>
        <div className={"checkout-prod-info"}>
          <p className={"checkout-cart-prod"}>Coastal Harness</p>
          <p className={"checkout-cart-prod"} onclick="removeFromCart(this)">1 item - <b>Remove</b></p>
          <p className={"checkout-cart-prod"}>U$ 21,90</p>
        </div>
      </div>
    );
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
		<div className={"screen-align"}>
		  <div className={"screen-checkout-l"}>
    		<div>
          {this.renderProducts()}
      		<hr></hr>
      		<p className={"total-price"}>Total U$ {this.props.totalPrice}</p>
    		</div>
		  </div>
		  <div className={"vertical-line"}></div>
		  <div className={"screen-checkout-r"}>
		    <div className={"checkout-cart-info"}>
      		  <p>{this.props.cartQty} items</p>
      		  <p>Total U$ {this.props.totalPrice}</p>
    		</div>
    		<input type="button" className="button-cart checkout" value="CHECKOUT"></input>
    		<p className={"checkout-cart-info"}>You might also like:</p>
    		<div className={"screen-align"}>
        	  <img src={dogHarnessTwo} className={"prod-img-checkout"} alt="orange dog harness"></img>
      		  <div>
        		<p>Coastal Harness</p>
        		<p>U$ 21,90</p>
        		<img src={fiveStars} className={"stars-main-page"} alt="five stars rating image"></img>
      		  </div>
    		</div>
    		<div className={"screen-align"}>
        	  <img src={dogHarnessThree} className={"prod-img-checkout"} alt="orange dog harness"></img>
      		  <div>
        		<p>Coastal Harness</p>
        		<p>U$ 22,90</p>
        		<img src={fiveStars} className={"stars-main-page"} alt="five stars rating image"></img>
      		  </div>
    		</div>
		  </div>
		</div>
	  </div>
	);
  }
}

export default Checkout;
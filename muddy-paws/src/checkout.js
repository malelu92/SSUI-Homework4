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
      		  <div className={"screen-align"}>
        		<img src={dogHarnessOne} className={"prod-img-checkout"} alt="orange dog harness"></img>
        		<div className={"checkout-prod-info"}>
          		  <p className={"checkout-cart-prod"}>Coastal Harness</p>
          		  <p className={"checkout-cart-prod"} onclick="removeFromCart(this)">1 item - <b>Remove</b></p>
          		  <p className={"checkout-cart-prod"}>U$ 21,90</p>
        		</div>
      		  </div>
      		  <hr></hr>
      		  <p className={"total-price"}>Total U$51,98</p>
    		</div>
		  </div>
		  <div className={"vertical-line"}></div>
		  <div className={"screen-checkout-r"}>
		    <div className={"checkout-cart-info"}>
      		  <p>2 items</p>
      		  <p>Total U$ 51,98</p>
    		</div>
    		<input type="button" className="button-checkout" value="CHECKOUT"></input>
    		<p className={"checkout-cart-info"}>You might also like:</p>
    		<div className="align-info">
        	  <img src={dogHarnessTwo} className={"prod-img-checkout"} alt="orange dog harness"></img>
      		  <div>
        		<p>Coastal Harness</p>
        		<p>U$ 21,90</p>
        		<img src={fiveStars} className={"stars-main-page"} alt="five stars rating image"></img>
      		  </div>
    		</div>
    		<div className="align-info">
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
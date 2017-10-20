import React, { Component } from 'react';
import './App.css'

import dogHarnessOne from './images/dog_harness1.jpg';
import dogHarnessOneTwo from './images/dog_harness1_2.jpg';
import dogHarnessOneThree from './images/dog_harness1_3.jpg';
import fiveStars from'./images/five_stars.png';

class ProductInfo extends Component {
  constructor(props) {
	  super(props);
    this.state = {
      qty: 1,
      color: "strawberry",
      size: "tiny",
    }
    this.handleChange = this.handleChange.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  handleChange(event) {
    this.setState({qty: parseInt(event.target.value)});
  }

  addToCart() {
    if (this.state.qty) {
      const newQty = this.state.qty;
      this.props.updateCart('cartQty', newQty);
    }
  }

  render() {
	return (
	  <div className={"screen-align"}>
		<div className={"screen-spec-prod-l"}>
    	  <img className={"prod-img-sel"} src={dogHarnessOne} alt="orange dog harness"></img>
    	  <div className={"prod-group-cards"}>
      	  	<img className={"prod-mini-cards"} src={dogHarnessOne} alt="orange dog harness"></img>
      		<img className={"prod-mini-cards"} src={dogHarnessOneTwo} alt="orange dog harness"></img>
      		<img className={"prod-mini-cards"} src={dogHarnessOneThree} alt="orange dog harness"></img>
    	  </div>
  		</div>

  		<div className={"vertical-line"}></div>

  		<div className={"screen-spec-prod-r"}>
    	  <p className={"prod-name"}>Dog harness 3000</p>
    	  <div className={"screen-align"}>
      	    <p>
      	      <img src={fiveStars} className={"stars-main-page"} alt="five stars rating image"></img>
            customer review</p>
    	  </div>
    	  <p>U$ 25,90</p>
    	</div>

    	<br></br>

      <div className={"prod-opt"}>
    	<div className={"screen-align"}>
      	  <p>Size</p>
      	  <select id="size">
        	<option value="tiny">Tiny</option>
        	<option value="small">Small</option>
        	<option value="medium">Medium</option>
       		<option value="large">Large</option>
      	  </select>
    	</div>

    	<div className={"screen-align"}>
      	  <p>Color</p>
      	  <select id="color">
        	<option value="strawberry">strawberry</option>
        	<option value="blackberry">blackberry</option>
        	<option value="crazyberry">crazyberry</option>
        	<option value="camouflage">camouflage</option>
        	<option value="nightmoon">night moon</option>
        	<option value="fireorange">fire orange</option>
      	  </select>
    	</div>

    	<div className={"screen-align"}>
      	  <p>Quantity</p>
      	  <select id="quantity" onChange={this.handleChange}>
        	<option value="1">1</option>
        	<option value="2">2</option>
        	<option value="3">3</option>
        	<option value="4">4</option>
        	<option value="5">5</option>
      	  </select>
    	</div>
      </div>

      <input type="button" id="add-item" onClick={this.addToCart.bind(this)} className={"button-cart"} value="ADD TO CART"></input>

	  </div>
	);
  }
}

export default ProductInfo;
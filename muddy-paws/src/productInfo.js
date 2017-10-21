import React, { Component } from 'react';
import './App.css'

import fourStars from'./images/four_stars.jpg';

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
    	  <img className={"prod-img-sel"} src={this.props.prodSel[0]} alt="orange dog harness"></img>
    	  <div className={"prod-group-cards"}>
      	  	<img className={"prod-mini-cards"} src={this.props.prodSel[0]} alt="orange dog harness"></img>
      		<img className={"prod-mini-cards"} src={this.props.prodSel[0]} alt="orange dog harness"></img>
      		<img className={"prod-mini-cards"} src={this.props.prodSel[0]} alt="orange dog harness"></img>
    	  </div>
  		</div>

  		<div className={"vertical-line"}></div>

  		<div className={"screen-spec-prod-r"}>
    	  <p className={"prod-name"}>{this.props.prodSel[1]}</p>
    	  <div className={"screen-align"}>
      	    <p>
      	      <img src={fourStars} className={"stars-main-page"} alt="four stars rating image"></img>
            customer review</p>
    	  </div>
    	  <p className={"prod-price"}>U$ {this.props.prodSel[3]}</p>
        <p id="prod-desc">{this.props.prodSel[2]}</p>

    	<br></br>

    	<div className={"screen-align"}>
      	  <p>Size</p>
          <div className={"sel-opt"}>
      	    <select id="size">
        	  <option value="tiny">Tiny</option>
        	  <option value="small">Small</option>
        	  <option value="medium">Medium</option>
       		  <option value="large">Large</option>
      	    </select>
          </div>
    	</div>

    	<div className={"screen-align"}>
      	  <p>Color</p>
          <div className={"sel-opt"}>
      	    <select id="color">
        	  <option value="strawberry">strawberry</option>
        	  <option value="blackberry">blackberry</option>
        	  <option value="crazyberry">crazyberry</option>
        	  <option value="camouflage">camouflage</option>
        	  <option value="nightmoon">night moon</option>
        	  <option value="fireorange">fire orange</option>
      	    </select>
          </div>
    	</div>

    	<div className={"screen-align"}>
      	  <p>Quantity</p>
          <div className={"sel-opt"}>
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
	  </div>
	);
  }
}

export default ProductInfo;
import React, { Component } from 'react';
import './App.css'
import StoreItem from './storeItem.js';

import dogHarnessOne from './images/dog_harness1.jpg';
import dogHarnessTwo from './images/dog_harness2.jpg';
import fiveStars from './images/five_stars.png';

class Checkout extends Component {
  constructor(props) {
	  super(props);
    var dogHarness1 = {image: dogHarnessOne, altText: "Dog Harness 3000", description: "$22.50 dog harness", price: "22.50"};
    var dogHarness2 = {image: dogHarnessTwo, altText: "Dog Harness Coastal", description: "$25.99 dog harness", price: "25.99"};

    this.state = {
      totalPrice: 0,
      inventory: [dogHarness1, dogHarness2],
    };
    this.selectItem = this.selectItem.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  selectItem(id) {
    var item = this.state.inventory[id];
    var prodInfo = [];
    prodInfo.push(item.image);
    prodInfo.push(item.altText);
    prodInfo.push(item.description);
    prodInfo.push(item.price);
    this.props.updatePage('prodSel', prodInfo);
  }

  removeFromCart(id) {
    console.log("remove")
    var difProds = this.props.cartItems.length
    var items = [];
    var contTotal = 0;
    this.props.removeCart('cartQty', id);
    this.render();
    {/*this.props.cartProdQtys[id].pop();
    for (var i = 0; i < difProds; i++) {
    }*/}
  }

  renderInventory() {
    var suggestedProds = [];
    var elements = []
    for(var i=0; i < this.state.inventory.length; i++)
    {
      var item = this.state.inventory[i]
      elements.push(<StoreItem onClick = {this.selectItem.bind(this, i)} image = {item.image} altText = {item.altText} description = {item.description} price = {item.price}/>)
      suggestedProds.push(
        <div className={"screen-align"}>
          <div>{elements[i]}</div>
        </div>
      );
    }
    return (
      <div>
        {suggestedProds}
      </div>
    )
  }

  renderProducts() {
    var difProds = this.props.cartItems.length
    var items = [];
    var contTotal = 0;
    for (var i = 0; i < difProds; i++) {
      var prodTotalPrice = (this.props.cartItems[i][3])*(this.props.cartProdQtys[i]);
      contTotal += prodTotalPrice;
      items.push(    
        <div className={"screen-align"}>
          <img src={this.props.cartItems[i][0]} className={"prod-img-checkout"} alt="orange dog harness"></img>    
          <div className={"checkout-prod-info"}>
            <p className={"checkout-cart-prod"}>{this.props.cartItems[i][1]}</p>
            <p className={"checkout-cart-prod"} onClick={this.removeFromCart.bind(this, i)}>{this.props.cartProdQtys[i]} items - <b>Remove</b></p>
            <p className={"checkout-cart-prod"}>U$ {prodTotalPrice}</p>
          </div>
        </div>
      );
    }
    this.state.totalPrice = contTotal;
    return (
    <div>
      {items}
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
      		<p className={"total-price"}>Total U$ {this.state.totalPrice}</p>
    		</div>
		  </div>
		  <div className={"vertical-line"}></div>
		  <div className={"screen-checkout-r"}>
		    <div className={"checkout-cart-info"}>
      		  <p>{this.props.cartQty} items</p>
      		  <p>Total U$ {this.state.totalPrice}</p>
    		</div>
    		<input type="button" className="button-cart checkout" value="CHECKOUT"></input>
    		<p className={"checkout-cart-info"}>You might also like:</p>
    		{this.renderInventory()}
		  </div>
		</div>
	  </div>
	);
  }
}

export default Checkout;
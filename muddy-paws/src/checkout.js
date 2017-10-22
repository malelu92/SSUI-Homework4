import React, { Component } from 'react';
import './App.css'
import ProductsData from './productsData.js';
import StoreItem from './storeItem.js';

class Checkout extends Component {
  constructor(props) {
	  super(props);
    var itemsShown = 2
    this.state = {
      totalPrice: 0,
    };
    this.selectItem = this.selectItem.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  selectItem(id, imageSource, stars) {
    var prodInfo = [];
    prodInfo.push(imageSource);
    prodInfo.push(ProductsData.names[id]);
    prodInfo.push(ProductsData.descriptions[id]);
    prodInfo.push(ProductsData.prices[id]);
    prodInfo.push(stars);
    this.props.updatePage('prodSel', prodInfo);
  }

  removeFromCart(id) {
    var difProds = this.props.cartItems.length
    this.props.removeCart('cartQty', id);
    this.render();
  }

  renderInventory() {
    var suggestedProds = [];
    var elements = []
    for(var i=0; i < this.itemsShown; i++)
    {
      const imageSource = "https://s3.us-east-2.amazonaws.com/mudpaws/" + ProductsData.images[i];
      const stars = "https://s3.us-east-2.amazonaws.com/mudpaws/" + ProductsData.stars[i];
      elements.push(<StoreItem onClick = {this.selectItem.bind(this, i, imageSource, stars)} image = {imageSource} altText = {ProductsData.names[i]} description = {ProductsData.descriptions[i]} price = {ProductsData.prices[i]} star = {stars}/>)
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
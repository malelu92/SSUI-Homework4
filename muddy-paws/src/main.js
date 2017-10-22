import React, { Component } from 'react';
import './App.css'
import StoreItem from './storeItem.js';
import ProductsData from './productsData.js';

import mainImage from './images/home_page_im1.jpg';

class Main extends Component {
  constructor(props) {
	  super(props);
	  this.state = {
      itemsShown: 4
    }
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem(id) {
    const imageSource = "https://s3.us-east-2.amazonaws.com/mudpaws/" + ProductsData.images[id];
    var prodInfo = [];
    prodInfo.push(imageSource);
    prodInfo.push(ProductsData.names[id]);
    prodInfo.push(ProductsData.descriptions[id]);
    prodInfo.push(ProductsData.prices[id]);
    this.props.updatePage('prodSel', prodInfo);
  }

  renderInventory() {
    var elements = []
    for(var i=0; i < this.state.itemsShown; i++)
    {
      const imageSource = "https://s3.us-east-2.amazonaws.com/mudpaws/" + ProductsData.images[i];
      const stars = "https://s3.us-east-2.amazonaws.com/mudpaws/" + ProductsData.stars[i];
      console.log(imageSource)
      elements.push(<StoreItem onClick = {this.selectItem.bind(this, i)} image = {imageSource} altText = {ProductsData.names[i]} price = {ProductsData.prices[i]} star = {stars} />)
    }
    return (
      <div className={"prods-display"}>
        {elements}
      </div>
    )
  }

  render() {
	return (
	  <div>
		<img src={mainImage} className="main-image" alt="mainImage"/>
		<div className={"main-text-box"}>
		  <p>HELPING ALL CATS AND DOGS LIVE TO THEIR FULL POTENTIAL</p>
		</div>
		<div className={"pop-prod"}>
  		  <p className={"pop-prod-text"}>Most popular products:</p>
  		  {this.renderInventory()}
		</div>
	  </div>
	);
  }
}

export default Main;
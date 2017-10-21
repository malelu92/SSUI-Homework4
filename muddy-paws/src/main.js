import React, { Component } from 'react';
import './App.css'
import StoreItem from './storeItem.js';
import ProductsData from './productsData.js';

import catHarnessOne from './images/cat_harness1.jpg';
import dogHarnessOne from './images/dog_harness1.jpg';
import dogHarnessTwo from './images/dog_harness2.jpg';
import dogHarnessThree from './images/dog_harness3.png';
import mainImage from './images/home_page_im1.jpg';


class Main extends Component {
  constructor(props) {
	  super(props);
	  this.state = {
      itemsShown: 4,
      inventory: [catHarnessOne, dogHarnessOne, dogHarnessTwo, dogHarnessThree],
    }
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem(id) {
    var prodInfo = [];
    prodInfo.push(this.state.inventory[id]);
    prodInfo.push(ProductsData.names[id]);
    prodInfo.push(ProductsData.descriptions[id]);
    prodInfo.push(ProductsData.prices[id]);
    this.props.updatePage('prodSel', prodInfo);
  }

  renderInventory() {
    const imageSource = ProductsData.images[0];
    var elements = []
    for(var i=0; i < this.state.itemsShown; i++)
    {
      elements.push(<StoreItem onClick = {this.selectItem.bind(this, i)} image = {this.state.inventory[i]} altText = {ProductsData.names[i]} price = {ProductsData.prices[i]} />)
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
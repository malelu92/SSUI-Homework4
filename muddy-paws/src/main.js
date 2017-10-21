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
	  {/*var dogHarness1 = {image: dogHarnessOne, altText: ProductsData.names[1], description: ProductsData.descriptions[1], price: ProductsData.prices[1]};
	  var dogHarness2 = {image: dogHarnessTwo, altText: ProductsData.names[2], description: ProductsData.descriptions[2], price: ProductsData.prices[2]};
	  var dogHarness3 = {image: dogHarnessThree, altText: ProductsData.names[3], description: ProductsData.descriptions[3], price: ProductsData.prices[3]};
	  var catHarness1 = {image: catHarnessOne, altText: ProductsData.names[0], description: ProductsData.descriptions[0], price: ProductsData.prices[0]};*/}
    var images = [];
    images.push(ProductsData.images[0]);
    var prodImage;
	  this.state = {
      itemsShown: 4,
      inventory: [catHarnessOne, dogHarnessOne, dogHarnessTwo, dogHarnessThree],
    }
    this.selectItem = this.selectItem.bind(this);
    {/*inventory: [dogHarness1, dogHarness2, dogHarness3, catHarness1],*/}
  }

  selectItem(id) {
    {/*var item = this.state.inventory[id];*/}
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
      {/*var item = this.state.inventory[i]*/}
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
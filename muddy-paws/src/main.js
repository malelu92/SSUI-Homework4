import React, { Component } from 'react';
import './App.css'
import StoreItem from './storeItem.js';

import catHarnessOne from './images/cat_harness1.jpg';
import dogHarnessOne from './images/dog_harness1.jpg';
import dogHarnessTwo from './images/dog_harness2.jpg';
import dogHarnessThree from './images/dog_harness3.png';
import mainImage from './images/home_page_im1.jpg';


class Main extends Component {
  constructor(props) {
	  super(props);
	  var dogHarness1 = {image: dogHarnessOne, altText: "Dog Harness 3000", description: "Dog harness perfect for adventurous dogs.", price: "22.50"};
	  var dogHarness2 = {image: dogHarnessTwo, altText: "Dog Harness Coastal", description: "Dog harness specially made for your dog.", price: "25.99"};
	  var dogHarness3 = {image: dogHarnessThree, altText: "Dog Harness XYZ", description: "Dog harness that keeps it simple", price: "15.00"};
	  var catHarness1 = {image: catHarnessOne, altText: "Cat Harness 2000", description: "Cat harness for outdoor cats", price: "20.90"};

	  this.state = {
      inventory: [dogHarness1, dogHarness2, dogHarness3, catHarness1],
    }
    this.selectItem = this.selectItem.bind(this);
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

  renderInventory() {
    var elements = []
    for(var i=0; i < this.state.inventory.length; i++)
    {
      var item = this.state.inventory[i]
      elements.push(<StoreItem onClick = {this.selectItem.bind(this, i)} image = {item.image} altText = {item.altText} price = {item.price} />)
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
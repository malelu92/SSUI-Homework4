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
	var dogHarness1 = {image: dogHarnessOne, altText: "dog harness", description: "$22 dog harness"};
	var dogHarness2 = {image: dogHarnessTwo, altText: "dog harness2", description: "$23 dog harness"};
	var dogHarness3 = {image: dogHarnessThree, altText: "dog harness3", description: "$20 dog harness"};
	var catHarness1 = {image: catHarnessOne, altText: "cat harness1", description: "$23 cat harness"};

	this.state = {
      inventory: [dogHarness1, dogHarness2, dogHarness3, catHarness1],
      detail: null,
    }
  }

  selectItem(id) {
    console.log("selected ",id)
    var item = this.state.inventory[id];
  }

  renderInventory() {
    var elements = []
    for(var i=0; i < this.state.inventory.length; i++)
    {
      var item = this.state.inventory[i]
      elements.push(<StoreItem onClick = {this.selectItem.bind(this, i)} image = {item.image} altText = {item.altText} description = {item.description} />)
    }
    return (
      <div className={"prods-display"}>
        {elements}
        {/*{this.renderDetailView()}*/}
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
  		  <p>Most popular products:</p>
  		  {this.renderInventory()}
		</div>
	  </div>
	);
  }
}

export default Main;
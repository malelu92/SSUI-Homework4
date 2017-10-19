import React, { Component } from 'react';
import './App.css'
import ProductInfo from './productInfo.js';
import StoreItem from './storeItem.js';

import catHarnessOne from './images/cat_harness1.jpg';
import dogHarnessOne from './images/dog_harness1.jpg';
import dogHarnessTwo from './images/dog_harness2.jpg';
import dogHarnessThree from './images/dog_harness3.png';
import dogHarnessFour from './images/dog_harness4.png';
import dogHarnessFive from './images/dog_harness5.png';
import dogHarnessSix from './images/dog_harness6.png';
import dogGPS from './images/dogGPS.jpg';

class Products extends Component {
  constructor(props) {
	super(props);
	var dogHarness1 = {image: dogHarnessOne, altText: "dog harness", description: "$22 dog harness"};
	var dogHarness2 = {image: dogHarnessTwo, altText: "dog harness2", description: "$23 dog harness"};
	var dogHarness3 = {image: dogHarnessThree, altText: "dog harness3", description: "$20 dog harness"};
	var dogHarness4 = {image: dogHarnessFour, altText: "dog harness4", description: "$23 dog harness"};
	var dogHarness5 = {image: dogHarnessFive, altText: "dog harness5", description: "$23 dog harness"};
	var dogHarness6 = {image: dogHarnessSix, altText: "dog harness6", description: "$23 dog harness"};
	var dog_gps = {image: dogGPS, altText: "dog gps", description: "$23 dog gps"};
	var catHarness1 = {image: catHarnessOne, altText: "cat harness1", description: "$23 cat harness"};

	this.state = {
      inventory: [dogHarness1, dogHarness2, dogHarness3, dogHarness4, dogHarness5, dogHarness6, dog_gps, catHarness1],
      detail: null,
    }
  }

  renderProductInfo() {
  	console.log(this.state.detail)
    if(this.state.detail !== null)
    {
    	console.log("clicou")
      return <ProductInfo/>
    }
  }

  selectItem(id) {
    console.log("selected ",id)
    var item = this.state.inventory[id]
    var prodInfo = <productInfo onClose = {(ev) => this.setState({detail: null})} image = {item.image} altText = {item.altText} description = {item.description} />
    this.setState({detail: prodInfo});
  }

  createProductDivs(elements) {
  	var elements_block = [];
  	var divs;
  	for(var i=0; i < elements.length; i++) {
  		elements_block.push(elements[i])
  		if (i%3 == 0) {
  			elements_block.push()
  			divs.append(elements_block);
  			elements_block = [];
  		}
  	}
  	return divs;
  }

  renderInventory() {
    var elements = []
    for(var i=0; i < this.state.inventory.length; i++)
    {
      var item = this.state.inventory[i]
      elements.push(<StoreItem onClick = {this.selectItem.bind(this, i)} image = {item.image} altText = {item.altText} description = {item.description} />)
    }
    return (
      <div className={"screen-align"}>
        <div className={"prod-page-screen-l"}>
          <p className={"filter-by"}>Filter by:</p>
              <div>
      			<input id="checkBox" type="checkbox" id="dogsCheckbox"></input>
      			<label for="dogsCheckbox" class="checkbox-text">Dogs</label>
   			  </div>
   			  <div>
      			<input id="checkBox" type="checkbox" id="catsCheckbox"></input>
      			<label for="catsCheckbox" class="checkbox-text">Cats</label>
    		  </div>
    	  <p className={"filter-opt"}>Animal</p>
        </div>
        <div className={"vertical-line"}></div>
        <div className={"prod-page-screen-r"}>
          <div className={"prods-display"}>
            {elements[0]}
            {elements[1]}
            {elements[2]}
          </div>
          <div className={"prods-display"}>  
            {elements[3]}
            {elements[4]}
            {elements[5]}
            {this.renderProductInfo()}
          </div>
        </div>
      </div>
    )
  }

  render() {
	return (
		this.renderInventory()
	  );
  }
}

export default Products;
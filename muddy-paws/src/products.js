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

import oneStar from'./images/one_star.jpg';
import twoStars from'./images/two_stars.jpg';
import threeStars from'./images/three_stars.jpg';
import fourStars from'./images/four_stars.jpg';
import fiveStars from'./images/five_stars.png';

class Products extends Component {
  constructor(props) {
	super(props);
	var dogHarness1 = {image: dogHarnessOne, altText: "Dog Harness 3000", description: "$22.50 dog harness", price: "22.50"};
	var dogHarness2 = {image: dogHarnessTwo, altText: "Dog Harness Coastal", description: "$25.99 dog harness",  price: "25.99"};
	var dogHarness3 = {image: dogHarnessThree, altText: "Dog Harness XYZ", description: "$15.00 dog harness", price: "15.00"};
	var dogHarness4 = {image: dogHarnessFour, altText: "Dog Harness Military", description: "$20.90 dog harness", price: "20.90"};
	var dogHarness5 = {image: dogHarnessFive, altText: "Dog Harness NY", description: "$30 dog harness", price: "30.00"};
	var dogHarness6 = {image: dogHarnessSix, altText: "Dog Harness My Dog", description: "$14.50 dog harness", price: "14.50"};
	var dog_gps = {image: dogGPS, altText: "Dog GPS", description: "$23 dog gps", price: "50.00"};
	var catHarness1 = {image: catHarnessOne, altText: "Cat Harness 2000", description: "$23 cat harness", price: "20.90"};

	this.state = {
      inventory: [dogHarness1, dogHarness2, dogHarness3, dogHarness4, dogHarness5, dogHarness6, dog_gps, catHarness1],
      /*detail: null,*/
    }
    this.selectItem = this.selectItem.bind(this);
  }

  /*renderProductInfo() {
  	console.log(this.state.detail)
    if(this.state.detail !== null)
    {
    	console.log("clicou")
      return <ProductInfo/>
    }
  }*/

  selectItem(id) {
    console.log("selected ",id)
    var item = this.state.inventory[id]
    {/*var prodInfo = <productInfo image = {item.image} altText = {item.altText} description = {item.description} prodId = {item.prodId} />*/}
    var prodInfo = [];
    prodInfo.push(item.image);
    prodInfo.push(item.altText);
    prodInfo.push(item.description);
    prodInfo.push(item.price);
    this.props.updatePage('prodSel', prodInfo);
    {/*this.setState({detail: prodInfo})*/}
    {/*this.renderProductInfo();*/}
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
          <p className={"filter-opt"}>Animal</p>
          <div className={"filter-opt-list"}>
            <div>
      			  <input id="checkBox" type="checkbox" id="dogsCheckbox"></input>
      			  <label for="dogsCheckbox" class="checkbox-text">Dogs</label>
   			    </div>
   			    <div>
      			  <input id="checkBox" type="checkbox" id="catsCheckbox"></input>
      			  <label for="catsCheckbox" class="checkbox-text">Cats</label>
    		    </div>
          </div>
        <p className={"filter-opt"}>Customer review</p>
        <div className={"filter-opt-list"}>
          <input id="checkBox" type="checkbox"></input>
          <img src={fiveStars} className = {"stars-main-page"}></img>
          <br></br>
          <input id="checkBox" type="checkbox"></input>
          <img src={fourStars} className = {"stars-main-page"}></img>
          <br></br>
          <input id="checkBox" type="checkbox"></input>
          <img src={threeStars} className = {"stars-main-page"}></img>
          <br></br>
          <input id="checkBox" type="checkbox"></input>
          <img src={twoStars} className = {"stars-main-page"}></img>
          <br></br>
          <input id="checkBox" type="checkbox"></input>
          <img src={oneStar} className = {"stars-main-page"}></img>
        </div>
        <p className={"filter-opt"}>Price</p>
        <div className={"filter-opt-list"}>
    	    <div>
     		    <input id="checkBox" type="checkbox" id="under10Checkbox"></input>
      		  <label for="under10Checkbox" class="checkbox-text">Under U$ 10</label>
    	    </div>
    	    <div>
      		  <input id="checkBox" type="checkbox" id="10to25Checkbox"></input>
      		  <label for="10to25Checkbox" class="checkbox-text">U$ 10 to U$25</label>
    	    </div>
    	    <div>
      		  <input id="checkBox" type="checkbox" id="25to50Checkbox"></input>
      		  <label for="25to50Checkbox" class="checkbox-text">U$ 25 to U$50</label>
    	    </div>
    	    <div>
      		  <input id="checkBox" type="checkbox" id="50to100Checkbox"></input>
      		  <label for="25to50Checkbox" class="checkbox-text">U$ 50 to U$100</label>
    	    </div>
    	    <div>
      		  <input id="checkBox" type="checkbox" id="above100Checkbox"></input>
      		  <label for="25to50Checkbox" class="checkbox-text">Above U$ 100</label>
    	    </div>
        </div>
        <input type="button" className={"button-cart filter"} value="FILTER"></input>
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
          </div>
          <div className={"prods-display"}>  
            {elements[6]}
            {elements[7]}
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
import React, { Component } from 'react';
import './App.css'
import ProductsData from './productsData.js';
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
	this.state = {
      inventory: [catHarnessOne, dogHarnessOne, dogHarnessTwo, dogHarnessThree, dogHarnessFour, dogHarnessFive, dogHarnessSix, dogGPS],
      stars: [oneStar, twoStars, threeStars, fourStars, fiveStars]
    }
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem(id) {
    console.log("selected ",id)
    var item = this.state.inventory[id]
    var prodInfo = [];
    prodInfo.push(this.state.inventory[id]);
    prodInfo.push(ProductsData.names[id]);
    prodInfo.push(ProductsData.descriptions[id]);
    prodInfo.push(ProductsData.prices[id]);
    prodInfo.push(this.state.stars[3]);
    this.props.updatePage('prodSel', prodInfo);
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
      {/*var item = this.state.inventory[i]*/}
      elements.push(<StoreItem onClick = {this.selectItem.bind(this, i)} image = {this.state.inventory[i]} altText = {ProductsData.names[i]} price = {ProductsData.prices[i]} star = {this.state.stars[3]} />)
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
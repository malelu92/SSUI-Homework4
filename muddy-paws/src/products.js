import React, { Component } from 'react';
import './App.css'
import ProductsData from './productsData.js';
import ProductInfo from './productInfo.js';
import StoreItem from './storeItem.js';

class Products extends Component {
  constructor(props) {
	super(props);
  this.state = {
      itemsShown: 8
    }
  this.selectItem = this.selectItem.bind(this);
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
    var mainStars = []
    for(var i=0; i < 5; i++) {
      var st = "https://s3.us-east-2.amazonaws.com/mudpaws/" + ProductsData.stars[i];
      mainStars.push(st);
    }
    for(var i=0; i < this.state.itemsShown; i++)
    {
      const imageSource = "https://s3.us-east-2.amazonaws.com/mudpaws/" + ProductsData.images[i];
      const stars = "https://s3.us-east-2.amazonaws.com/mudpaws/" + ProductsData.stars[i];
      elements.push(<StoreItem onClick = {this.selectItem.bind(this, i, imageSource, stars)} image = {imageSource} altText = {ProductsData.names[i]} price = {ProductsData.prices[i]} star = {stars} />)
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
          <img src={mainStars[0]} className = {"stars-main-page"}></img>
          <br></br>
          <input id="checkBox" type="checkbox"></input>
          <img src={mainStars[1]} className = {"stars-main-page"}></img>
          <br></br>
          <input id="checkBox" type="checkbox"></input>
          <img src={mainStars[2]} className = {"stars-main-page"}></img>
          <br></br>
          <input id="checkBox" type="checkbox"></input>
          <img src={mainStars[3]} className = {"stars-main-page"}></img>
          <br></br>
          <input id="checkBox" type="checkbox"></input>
          <img src={mainStars[4]} className = {"stars-main-page"}></img>
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
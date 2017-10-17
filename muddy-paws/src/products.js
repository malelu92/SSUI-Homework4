import React, { Component } from 'react';
import './App.css'
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

  selectItem(id) {
    console.log("selected ",id)
    var item = this.state.inventory[id]
    {/*var detailView = <DetailItemView onClose = {(ev) => this.setState({detail: null})} image = {item.image} altText = {item.altText} description = {item.description} />
    this.setState({detail: detailView})*/}
  }

  renderInventory() {
    var elements = []
    for(var i=0; i < this.state.inventory.length; i++)
    {
      var item = this.state.inventory[i]
      elements.push(<StoreItem onClick = {this.selectItem.bind(this, i)} image = {item.image} altText = {item.altText} description = {item.description} />)
      console.log(item.image)
      console.log(item.altText)
    }
    return (
      <div>
        {elements}
        {/*{this.renderDetailView()}*/}
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
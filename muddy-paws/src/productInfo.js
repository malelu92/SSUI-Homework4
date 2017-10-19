import React, { Component } from 'react';
import './App.css'

import dogHarnessOne from './images/dog_harness1.jpg';
import dogHarnessOneTwo from './images/dog_harness1_2.jpg';
import dogHarnessOneThree from './images/dog_harness1_3.jpg';

class ProductInfo extends Component {
  constructor(props) {
	super(props);
  }

  render() {
	return (
	  <div>
		<div className={"screen-spec-prod-l"}>
    	  <img className={"prod-img-sel"} src={dogHarnessOne} alt="orange dog harness"></img>
    	  <div className={"prod-group-cards"}>
      	  	<img className={"prod-mini-cards"} src={dogHarnessOne} alt="orange dog harness"></img>
      		<img className={"prod-mini-cards"} src={dogHarnessOneTwo} alt="orange dog harness"></img>
      		<img className={"prod-mini-cards"} src={dogHarnessOneThree} alt="orange dog harness"></img>
    	  </div>
  		</div>
	  </div>
	);
  }
}

export default ProductInfo;
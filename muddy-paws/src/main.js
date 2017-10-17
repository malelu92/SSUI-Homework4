import React, { Component } from 'react';
import './App.css'

import mainImage from './images/home_page_im1.jpg';

class Main extends Component {
  constructor(props) {
	super(props);
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
		</div>
	  </div>
	);
  }
}

export default Main;
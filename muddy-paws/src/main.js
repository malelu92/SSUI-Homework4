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
		  <p> lalala </p>
		</div>
	  );
  }
}

export default Main;
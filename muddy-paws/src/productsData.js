import React, { Component } from 'react';
import './App.css'

class ProductsData {
  constructor(){
    var data = require('./data.json');
    this.images = data.images;
    this.names = data.names;
    this.descriptions = data.descriptions;
    this.prices = this.prices;
  }
}

export default (new ProductsData());
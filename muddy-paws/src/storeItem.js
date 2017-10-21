import React, { Component } from 'react';
import './App.css';


class StoreItem extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="productWrapper" onClick = {this.props.onClick}>
        <img className="prod-img" src={this.props.image} />
        <div className="productLabel">{this.props.altText}</div>
        <div className="productLabel">U$ {this.props.price}</div>
      </div>
    );
  }
}


export default StoreItem;
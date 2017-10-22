class ProductsData {
  constructor(){
    var data = require('./data.json');
    this.images = data.images;
    this.names = data.names;
    this.descriptions = data.descriptions;
    this.prices = data.prices;
    this.stars = data.stars;
  }
}

export default (new ProductsData());
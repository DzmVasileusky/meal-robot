var _ = require('lodash');
var Diet = require('./dietCategory')

var products = [
  { "id": 1, "name": "milk", "dietId": 3 },
  { "id": 2, "name": "chicken egg", "dietId": 2 },
  { "id": 3, "name": "pork", "dietId": 1 },
  { "id": 4, "name": "beef", "dietId": 1 },
  { "id": 5, "name": "lamb", "dietId": 1 },
  { "id": 6, "name": "chicken", "dietId": 1 },
  { "id": 7, "name": "duck", "dietId": 1 },
  { "id": 8, "name": "rabbit", "dietId": 1 },
  { "id": 9, "name": "turkey", "dietId": 1 },
  { "id": 10, "name": "dorada", "dietId": 4 },
  { "id": 11, "name": "seabass", "dietId": 4 },
  { "id": 12, "name": "tuna", "dietId": 4 },
  { "id": 13, "name": "bass", "dietId": 4 },
  { "id": 14, "name": "lemonema", "dietId": 4 },
  { "id": 15, "name": "scabard", "dietId": 4 },
  { "id": 16, "name": "salmon", "dietId": 4 },
  { "id": 17, "name": "trout", "dietId": 4 },
  { "id": 18, "name": "mussels", "dietId": 4 },
  { "id": 19, "name": "sand lobster", "dietId": 4 },
  { "id": 20, "name": "river lobster", "dietId": 4 },
  { "id": 21, "name": "orange", "dietId": 5 },
  { "id": 22, "name": "potato", "dietId": 5 },
  { "id": 23, "name": "cabbage", "dietId": 5 },
  { "id": 24, "name": "liver", "dietId": 1 },
  { "id": 25, "name": "pig ears", "dietId": 1 },
  { "id": 26, "name": "pig ribs", "dietId": 1 },
  { "id": 27, "name": "shells", "dietId": 4 },
  { "id": 28, "name": "duck egg", "dietId": 2 },
  { "id": 29, "name": "turkey egg", "dietId": 2 },
  { "id": 31, "name": "kefir", "dietId": 3 },
  { "id": 32, "name": "kurd", "dietId": 3 },
  { "id": 33, "name": "mascarpone", "dietId": 3 },
  { "id": 34, "name": "radamer", "dietId": 3 },
  { "id": 35, "name": "mozarella", "dietId": 3 },
  { "id": 36, "name": "salad", "dietId": 5 },
  { "id": 37, "name": "carrot", "dietId": 5 },
  { "id": 38, "name": "apple", "dietId": 5 },
  { "id": 39, "name": "pear", "dietId": 5 },
  { "id": 40, "name": "plum", "dietId": 5 },
  { "id": 41, "name": "salary", "dietId": 5 },
  { "id": 42, "name": "tomato", "dietId": 5 },
  { "id": 43, "name": "cucubmer", "dietId": 5 }
];

var buildProducts = function() {
  var rawProducts = JSON.parse(JSON.stringify(products));
  var buildProducts = [];
  var product;

  for(var i=0, l=rawProducts.length; i < l; i++) {
    product = rawProducts[i];
    product.diet = Diet.get(product.dietId);
    buildProducts.push(product);
  }
  return buildProducts;
}

module.exports = {
  get: function(id) {
    return _.find(buildProducts(), function(product){
      return product.id === id;
    });
  },
  all: function() {
    return buildProducts();
  },
  update: function(product) {
    var updatedProduct;
    for(var i=0, l=products.length; i < l; i++) {
      if(products[i].id === product.id){
        _.assign(products[i], product);
        updatedProduct = products[i];
        break;
      }
    }
    return updatedProduct;
  },
  delete: function(id) {
    var deletedProduct;
    for(var i=0, l=products.length; i < l; i++) {
      if(products[i].id === id){
        deletedProduct = products[i];
        products.splice(i, 1);
        break;
      }
    }
    return deletedProduct;
  },
  create: function(product) {
    product.id = products.length + 1;
    products.push(product)
    return product;
  }
}

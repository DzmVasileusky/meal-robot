var _ = require('lodash');
var Product = require('../models/products')

module.exports = function(app) {
  app.get('/products', function(req, res) {
    res.json(Product.all());
  });

  app.post('/products', function(req, res) {
    setTimeout(function(){
      res.json(Product.create(req.body));
    }, 1000);
  });

  app.put('/products/:id', function(req, res) {
    setTimeout(function(){
      res.json(Product.update(req.body));
    },1000)
  });

  app.get('/products/:id', function(req, res) {
    var productId = parseInt(req.param('id'), 10);
    res.json(Product.get(productId) || {});
  });

  app.delete('/products/:id', function(req, res) {
    res.json(Product.delete(parseInt(req.param('id'), 10)) || {});
  });
};

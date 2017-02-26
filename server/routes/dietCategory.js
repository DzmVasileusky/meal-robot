var Diet = require('../models/dietCategory');

module.exports = function(app) {
  // Return a list of available node types
  app.get('/diets', function(req, res) {
    res.json(Diet.all());
  });

  app.get('/diets/:id', function(req, res) {
    var dietId = parseInt(req.param('id'), 10);
    res.json(Diet.get(dietId) || {});
  });
};
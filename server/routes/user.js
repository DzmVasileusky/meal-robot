var User = require('../models/user');

module.exports = function(app){
  app.get('/users', function(req, res){
    res.json(User.all());
  });

  app.post('/users', function(req, res) {
    setTimeout(function(){
      res.json(User.create(req.body));
    }, 1000);
  });

  app.put('/users/:id', function(req, res) {
    setTimeout(function(){
      res.json(User.update(req.body));
    },1000)
  });

  app.get('/users/:id', function(req, res){
    var userId = parseInt(req.params.id, 10);
    res.json(User.get(userId) || {});
  });
};

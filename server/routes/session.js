var User = require('../models/user');

module.exports = function(app){
  app.post('/sessions', function(req, res) {
    setTimeout(function(){
      res.json(User.fetchToken(req.body));
    }, 1000);
  });

  app.get('/sessions/:token', function(req, res) {
    setTimeout(function(){
      res.json(User.getUserByToken(req.params.token));
    }, 1000);
  });

  app.delete('/sessions/:token', function(req, res) {
    setTimeout(function(){
      res.json(User.deleteToken(req.body));
    }, 1000);
  });
};

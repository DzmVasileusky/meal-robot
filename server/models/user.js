var _ = require('lodash');

var users = [
  { "id": "1", "username": "dzmvas", "email": "dzmvas@dzmvas.com", "name": "Dzmitry", "surname": "Vasileuski", "bio": "Inspired by dumplings", "photo": "assets/img/ava-2.jpg", "password": "3434" },
  { "id": "2", "username": "ivfleri", "email": "azaronak@azaronak.com", "name": "Alina", "surname": "Azaronak", "bio": "", "photo": "assets/img/ava-1.jpg", "password": "3434" },
  { "id": "3", "username": "caramazov", "email": "caramazov@caramazov.com", "name": "Alex", "surname": "", "bio": "Simple cuisin lover", "photo": "", "password": "3434" },
  { "id": "4", "username": "jackr12", "email": "jackr12@jackr12.com", "name": "Jack", "surname": "McMack", "bio": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.", "photo": "assets/img/ava-3.jpg", "password": "3434" },
  { "id": "5", "username": "hurt", "email": "hurt@hurt.com", "name": "Jeremy", "surname": "Hurt", "bio": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.", "photo": "", "password": "3434" }
];

module.exports = {
  get: function(id) {
    return _.find(users, function(user){
      return user.id == id;
    });
  },
  all: function() {
    return users;
  },
  update: function(user) {
    var updatedUser;
    for(var i=0, l=users.length; i < l; i++) {
      if(users[i].id == user.id){
        _.assign(users[i], user);
        updatedUser = users[i];
        break;
      }
    }
    return updatedUser;
  },
  create: function(user) {
    user.id = users.length + 1;
    users.push(user)
    return user;
  }
}

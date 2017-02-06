var _ = require('lodash');

var users = [
  { "id": "1", "username": "dzmvas", "email": "dzmvas@dzmvas.com", "name": "Dzmitry", "surname": "Vasileuski", "bio": "Inspired by dumplings" },
  { "id": "2", "username": "ivfleri", "email": "azaronak@azaronak.com", "name": "Alina", "surname": "Azaronak", "bio": "" },
  { "id": "3", "username": "caramazov", "email": "caramazov@caramazov.com", "name": "Alex", "surname": "", "bio": "Simple cuisin lover" },
  { "id": "4", "username": "jackr12", "email": "jackr12@jackr12.com", "name": "Jack", "surname": "McMack", "bio": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." },
  { "id": "5", "username": "hurt", "email": "hurt@hurt.com", "name": "Jeremy", "surname": "Hurt", "bio": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." }
];

module.exports = {
  get: function(id) {
    return _.find(users, function(user){
      return user.id === id;
    });
  },
  all: function() {
    return users;
  }
}

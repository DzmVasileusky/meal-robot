var _ = require('lodash');

var users = [
  { "id": "1", "username": "dzmvas", "email": "dzmvas@dzmvas.com", "name": "Dzmitry", "surname": "Vasileuski", "bio": "Inspired by dumplings", "photo": "assets/img/ava-2.jpg", "password": "3434" },
  { "id": "2", "username": "ivfleri", "email": "azaronak@azaronak.com", "name": "Alina", "surname": "Azaronak", "bio": "", "photo": "assets/img/ava-1.jpg", "password": "3434" },
  { "id": "3", "username": "caramazov", "email": "caramazov@caramazov.com", "name": "Alex", "surname": "", "bio": "Simple cuisin lover", "photo": "", "password": "3434" },
  { "id": "4", "username": "jackr12", "email": "jackr12@jackr12.com", "name": "Jack", "surname": "McMack", "bio": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.", "photo": "assets/img/ava-3.jpg", "password": "3434" },
  { "id": "5", "username": "hurt", "email": "hurt@hurt.com", "name": "Jeremy", "surname": "Hurt", "bio": "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.", "photo": "", "password": "3434" }
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

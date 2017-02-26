var _ = require('lodash');

var categories = [
  {"id": 1, "name": "meat"},
  {"id": 2, "name": "egg"},
  {"id": 3, "name": "lacto"},
  {"id": 4, "name": "fish"},
  {"id": 5, "name": "vegeterian"}
]

module.exports = {
  get: function(id) {
    return _.find(categories, function(category){
      return category.id === id;
    });
  },
  all: function() {
    return categories;
  }
}
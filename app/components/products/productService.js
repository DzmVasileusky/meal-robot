angular.module('MealRobot').factory('Product', ['Restangular', function(Restangular) {

  function getAll() {
    return Restangular.all('products').getList();
  };

  function getOne(id) {
    return Restangular.one('products', id).get();
  };

  return {
    all: getAll,
    one: getOne
  }
}]);
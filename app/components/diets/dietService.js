angular.module('MealRobot').factory('Diet', ['Restangular', function(Restangular) {

  function getAll() {
    return Restangular.all('diets').getList();
  };

  function getOne(id) {
    return Restangular.one('diets', id).get();
  };

  return {
    all: getAll,
    one: getOne
  }
}]);
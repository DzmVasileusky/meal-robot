angular.module('MealRobot').factory('User', ['Restangular', function(Restangular) {
  function getAll() {
    return Restangular.all('users').getList();
  };

  function getOne(id) {
    return Restangular.one('users', id).get();
  };

  function save(user) {
    return Restangular.all('users').post(user);
  };

  return {
    all: getAll,
    one: getOne,
    save: save,
  }
}]);
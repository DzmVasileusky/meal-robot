angular.module('MealRobot').factory('Product', ['Restangular', function(Restangular) {

  function getAll() {
    return Restangular.all('products').getList();
  };

  function getPage(page, perPage) {
    return Restangular.all('products').getList({
      page: page,
      perpage: perPage
    });
  };

  function getOne(id) {
    return Restangular.one('products', id).get();
  };

  return {
    all: getAll,
    one: getOne,
    page: getPage
  }
}]);
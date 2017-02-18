angular.module('MealRobot').factory('User', ['$resource', function($resource) {
  return $resource('/users/:id', {'id': '@id'});
}]);
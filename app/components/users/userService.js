angular.module('MealRobot').factory('User', function($resource) {
  return $resource('/users/:id');
});
angular.module('MealRobot').controller('UserShowController', ['User', '$scope', '$routeParams', function(User, $scope, $routeParams) {
  $scope.user = User.get({id: $routeParams.id});
}]);
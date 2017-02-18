angular.module('MealRobot').controller('UserShowController', ['User', '$scope', '$routeParams', function(User, $scope, $routeParams) {
  $scope.user = {};
  User.one($routeParams.id).then(function(data) {
    $scope.user = data;
  });
}]);
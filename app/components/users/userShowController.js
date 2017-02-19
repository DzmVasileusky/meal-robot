angular.module('MealRobot').controller('UserShowController', ['User', '$scope', '$stateParams', function(User, $scope, $stateParams) {
  $scope.user = {};
  User.one($stateParams.id).then(function(data) {
    $scope.user = data;
  });
}]);
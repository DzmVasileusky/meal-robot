angular.module('MealRobot').controller('UserListController', ['User', '$scope', function(User, $scope) {
  $scope.users = User.query();
}]);
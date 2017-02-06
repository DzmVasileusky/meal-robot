angular.module('MealRobot').controller('UserListController', function(User, $scope) {
  $scope.users = User.query();
});
angular.module('MealRobot').controller('UserEditController', ['User', '$scope', '$location', '$routeParams', function(User, $scope, $location, $routeParams) {
  $scope.isSubmitting = false;
  $scope.user = {};

  if ($routeParams.id) {
    $scope.title = 'Edit';
    $scope.user = User.one($routeParams.id).then(function(data) {
      $scope.user = data;
      $scope.title += ' ' + $scope.user.name + ' ' + $scope.user.surname || $scope.user.username;
    });
  } else {
    $scope.title = 'Registration';
  }

  $scope.save = function(user) {
    $scope.isSubmitting = true;
    User.save(user).then(function(data) {
      $scope.isSubmitting = false;
      $location.path('users/' + data.id);
    });
  };
}]);
angular.module('MealRobot').controller('UserEditController', ['User', '$scope', '$location', '$routeParams', function(User, $scope, $location, $routeParams) {
  $scope.isSubmitting = false;

  if ($routeParams.id) {
    $scope.title = 'Edit';
    $scope.user = User.get({id: $routeParams.id}, function() {
      $scope.title += ' ' + $scope.user.name + ' ' + $scope.user.surname || $scope.user.username;
    });
  } else {
    $scope.title = 'Registration';
    $scope.user = new User();
  }

  $scope.save = function(user) {
    $scope.isSubmitting = true;
    user.$save().finally(function() {
      $scope.isSubmitting = false;
      $location.path('users/' + user.id);
    });
  };
}]);
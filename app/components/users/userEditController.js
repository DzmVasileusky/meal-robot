angular.module('MealRobot').controller('UserEditController', ['User', '$scope', '$state', '$stateParams', 'AuthService', function(User, $scope, $state, $stateParams, AuthService) {
  $scope.isSubmitting = false;
  $scope.user = {};

  if ($stateParams.id) {
    $scope.title = 'Edit';
    $scope.user = User.one($stateParams.id).then(function(data) {
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

      // authorize
      if ($scope.currentUser) 
        AuthService.getUser();
      else 
        AuthService.loginByCredentials(data);

      $state.go('users.id', { id: data.id });
    });
  };
}]);
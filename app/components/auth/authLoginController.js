angular.module('MealRobot').controller('AuthLoginController', ['$scope', 'AuthService', '$state', function($scope, AuthService, $state) {
  $scope.credentials = {
    email: '',
    password: ''
  };

  $scope.login = function(credentials) {
    AuthService.loginByCredentials(credentials).then(function(data) {
      if (data.errors) 
        $scope.errors = data.errors;
      else {
        $scope.errors = false;
        $state.go('users.id', { id: data.user.id });
      }
    });
  };

  
}]);
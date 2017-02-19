angular.module('MealRobot').controller('AuthLoginController', ['$scope', 'AuthService', function($scope, AuthService) {
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
      }
    });
  };

  
}]);
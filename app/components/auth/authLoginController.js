angular.module('MealRobot').controller('AuthLoginController', ['$scope', 'AuthService', function($scope, AuthService) {
  $scope.credentials = {
    username: '',
    password: ''
  };

  $scope.login = function(credentials) {
    
  };
}]);
angular.module('MealRobot').controller('AppController', ['$scope', '$localStorage', 'AuthService', function($scope, $localStorage, AuthService) {

  // logout
  $scope.logout = AuthService.logout;

  // set current user
  $scope.$on('auth:change', function() {
    $scope.currentUser = AuthService.user;
  });

  $scope.currentUser = false;
  AuthService.getUser($localStorage.accessToken);

}]);
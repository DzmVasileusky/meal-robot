angular.module('MealRobot').controller('AppController', ['$scope', '$localStorage', 'AuthService', function($scope, $localStorage, AuthService) {

  // set current user
  $scope.$on('auth:loged', function() {
    $scope.currentUser = AuthService.user;
  });

  $scope.currentUser = false;
  if ($localStorage.accessToken)
    AuthService.getUser($localStorage.accessToken);

}]);
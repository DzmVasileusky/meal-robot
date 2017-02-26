angular.module('MealRobot').controller('AppController', ['$scope', '$rootScope', '$localStorage', 'AuthService', '$state', function($scope, $rootScope, $localStorage, AuthService, $state) {

  // logout
  $scope.logout = AuthService.logout;

  // set current user
  $scope.$on('auth:change', function() {
    $scope.currentUser = AuthService.user;
  });

  $scope.currentUser = false;
  AuthService.getUser($localStorage.accessToken);

  // state filter
  $rootScope.$on('$stateChangeStart', function(e, to, toParams, from) {
    if (!to.data || typeof to.data.rule !== 'function') return;

    var result = to.data.rule($scope.currentUser, toParams.id),
        returnTo = from.abstract ? 'login' : from;
    if (result) {
      e.preventDefault();
      $state.go( returnTo );
    }
  });

}]);
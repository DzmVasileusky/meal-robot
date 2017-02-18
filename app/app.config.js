angular.module('MealRobot').config(['$routeProvider', '$qProvider', 'RestangularProvider', function($routeProvider, $qProvider, RestangularProvider) {

  $qProvider.errorOnUnhandledRejections(false);
  
  $routeProvider
    .when('/', {
      redirectTo: '/users'
    })

    .when('/users', {
      templateUrl: 'app/components/users/list.html',
      controller: 'UserListController'
    })

    .when('/sign-up', {
      templateUrl: 'app/components/users/edit.html',
      controller: 'UserEditController'
    })

    .when('/users/:id', {
      templateUrl: 'app/components/users/show.html',
      controller: 'UserShowController'
    })

    .when('/users/:id/edit', {
      templateUrl: 'app/components/users/edit.html',
      controller: 'UserEditController'
    })

    .when('/login', {
      templateUrl: 'app/components/auth/login.html',
      controller: 'AuthLoginController'
    })

    .otherwise({
      redirectTo: '/'
    });

  RestangularProvider.setBaseUrl('http://localhost:8001/');
}]);
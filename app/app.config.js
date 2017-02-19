angular.module('MealRobot').config(['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', 'RestangularProvider', function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, RestangularProvider) {
  $urlMatcherFactoryProvider.strictMode(false);

  $stateProvider
    .state('users', {
      url: '/users',
      abstract: true,
      template: '<ui-view>'
    })

    .state('users.list', {
      url: '/',
      templateUrl: 'app/components/users/list.html',
      controller: 'UserListController'
    })

    .state('users.id', {
      url: '/:id',
      templateUrl: 'app/components/users/show.html',
      controller: 'UserShowController'
    })

    .state('users.edit', {
      url: '/:id/edit',
      templateUrl: 'app/components/users/edit.html',
      controller: 'UserEditController'
    })
  
    .state('signup', {
      url: '/sign-up',
      templateUrl: 'app/components/users/edit.html',
      controller: 'UserEditController'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'app/components/auth/login.html',
      controller: 'AuthLoginController'
    });

  $urlRouterProvider
    .when('/', '/users/')

    .otherwise('/users/');

  RestangularProvider.setBaseUrl('http://localhost:8001/');
}]);
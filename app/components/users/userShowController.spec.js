describe('UserListController', function() {
  var $controller,
      $scope,
      UserService,
      UserShowController,
      deffered,
      promise,
      mockUser = { "id": "1", "username": "dzmvas", "email": "dzmvas@dzmvas.com", "name": "Dzmitry", "surname": "Vasileuski", "bio": "Inspired by dumplings", "photo": "assets/img/ava-2.jpg", "password": "3434" };

  
  beforeEach(function() {
    angular.mock.module('restangular');
    angular.mock.module('ngStorage');
    angular.mock.module('Shared');
    angular.mock.module('ui.router');
    angular.mock.module('MealRobot');

    inject(function(_User_, $q) {
      UserService = _User_;

      spyOn(UserService, 'one').and.callFake(function() {
        deffered = $q.defer();
        promise = deffered.promise;
        deffered.resolve(mockUser);
        return promise;
      });
    });
  });

  beforeEach(function() {
    inject(function(_$controller_, _$rootScope_, _$stateParams_) {
      $scope = _$rootScope_.$new();
      UserShowController = _$controller_('UserShowController', { User: UserService, $scope: $scope, $stateParams: _$stateParams_ });
    });
  });

  it('should exist', function() {
    expect(UserShowController).toBeDefined();
  });

  it('should have no user on initialization', function() {
    expect($scope.user).toEqual({});
  });

  it('should fill user list', function(done) {
    expect(UserService.one).toHaveBeenCalled();

    promise.finally(function() {
      expect($scope.user.id).toBe('1');
      done();
    });

    deffered.resolve(mockUser);
    $scope.$apply();
  });
});
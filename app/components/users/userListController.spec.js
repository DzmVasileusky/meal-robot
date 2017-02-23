describe('UserListController', function() {
  var $controller,
      $scope,
      UserService,
      UserListController,
      deffered,
      promise,
      mockUsers = [
        { "id": "1", "username": "dzmvas", "email": "dzmvas@dzmvas.com", "name": "Dzmitry", "surname": "Vasileuski", "bio": "Inspired by dumplings", "photo": "assets/img/ava-2.jpg", "password": "3434" },
        { "id": "2", "username": "ivfleri", "email": "azaronak@azaronak.com", "name": "Alina", "surname": "Azaronak", "bio": "", "photo": "assets/img/ava-1.jpg", "password": "3434" },
        { "id": "3", "username": "caramazov", "email": "caramazov@caramazov.com", "name": "Alex", "surname": "", "bio": "Simple cuisin lover", "photo": "", "password": "3434" }
      ];

  
  beforeEach(function() {
    angular.mock.module('restangular');
    angular.mock.module('ngStorage');
    angular.mock.module('Shared');
    angular.mock.module('ui.router');
    angular.mock.module('MealRobot');

    inject(function(_User_, $q) {
      UserService = _User_;

      spyOn(UserService, 'all').and.callFake(function() {
        deffered = $q.defer();
        promise = deffered.promise;
        deffered.resolve(mockUsers);
        return promise;
      });
    });
  });

  beforeEach(function() {
    inject(function(_$controller_, _$rootScope_) {
      $scope = _$rootScope_.$new();
      UserListController = _$controller_('UserListController', { User: UserService, $scope: $scope });
    });
  });

  it('should exist', function() {
    expect(UserListController).toBeDefined();
  });

  it('should have no users on initialization', function() {
    expect($scope.users.length).toBe(0);
  });

  it('should fill user list', function() {
    expect(UserService.all).toHaveBeenCalled();
    
    setTimeout(function() {
      expect($scope.users.length > 0).toBeTruthy();
    }, 1);
  });
});
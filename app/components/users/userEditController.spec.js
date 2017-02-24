describe('UserEditController', function() {
  var $controller,
      $scope,
      $state,
      $stateParams,
      $rootScope,
      AuthService,
      UserService,
      UserEditController,
      deffered = {},
      promises = {},
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
        deffered['UserService.one'] = $q.defer();
        promises['UserService.one'] = deffered['UserService.one'].promise;
        return promises['UserService.one'];
      });

      spyOn(UserService, 'save').and.callFake(function() {
        deffered['UserService.save'] = $q.defer();
        promises['UserService.save'] = deffered['UserService.save'].promise;
        deffered['UserService.save'].resolve(mockUser);
        return promises['UserService.save'];
      });
    });

    inject(function(_AuthService_, $q) {
      AuthService = _AuthService_;

      spyOn(AuthService, 'getUser').and.callFake(function() {return;});
      spyOn(AuthService, 'loginByCredentials').and.callFake(function() {return;});
    });
  });

  beforeEach(function() {
    inject(function(_$controller_, _$rootScope_, _$state_, _$stateParams_) {
      $controller = _$controller_;

      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();

      $state = _$state_;
      spyOn($state, 'go').and.callThrough();

      $stateParams = _$stateParams_;
      UserEditController = $controller('UserEditController', { User: UserService, $scope: $scope, $state: $state, $stateParams, AuthService: AuthService });
    });
  });

  it('should exist', function() {
    expect(UserEditController).toBeDefined();
  });

  it('should have no user on initialization and not pending state', function() {
    expect($scope.user).toEqual({});
    expect($scope.isSubmitting).toBe(false);
  });

  it('should represent create state', function() {
    $stateParams.id = false;
    expect($scope.title).toBe('Registration');
  });

  describe('if $stateParams.id exist', function() {
    beforeEach(function() {
       UserEditController = $controller('UserEditController', { User: UserService, $scope: $scope, $state: $state, $stateParams: { id: 1 }, AuthService: AuthService });
     });

    it('should represent edit state', function(done) {
      expect(UserService.one).toHaveBeenCalled();

      promises['UserService.one'].finally(function() {
        expect($scope.user.id).toBe('1');
        expect($scope.title).toBe('Edit Dzmitry Vasileuski');
        done();
      });

      deffered['UserService.one'].resolve(mockUser);
      $rootScope.$apply();
    });
  });

  describe('Save user', function() {

    it('should call save with user data and redirect', function() {
      $scope.save(mockUser);
      $scope.$apply();

      expect(UserService.save).toHaveBeenCalledWith(mockUser);
      expect($state.go).toHaveBeenCalled();
    });

    it('should get user if authorize', function() {
      $rootScope.currentUser = true;
      $scope.save(mockUser);
      $scope.$apply();

      expect(AuthService.getUser).toHaveBeenCalled();
    });

    it('should login user if not authorize', function() {
      $rootScope.currentUser = false;
      $scope.save(mockUser);
      $scope.$apply();

      expect(AuthService.loginByCredentials).toHaveBeenCalled();
    });
  });
});
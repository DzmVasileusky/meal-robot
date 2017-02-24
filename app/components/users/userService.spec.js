describe('User service', function() {
  var User,
      $httpBackend;
  
  beforeEach(function() {
    angular.mock.module('MealRobot');
    inject(function(_User_, _$httpBackend_) {
      User = _User_;
      $httpBackend = _$httpBackend_;
    });
  });

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should exist', function() {
    expect(User).toBeDefined();
  });

  describe('public methods', function() {
    it('method .all() should GET', function() {
      $httpBackend.expectGET(/\/users$/).respond(200);
      User.all();
      $httpBackend.flush();
    });

    it('method .one() should GET with id', function() {
      $httpBackend.expectGET(/\/users\/\d/, undefined, undefined, {id: 1}).respond(200);
      User.one(1);
      $httpBackend.flush();
    });

    it('method .save() should POST user', function() {
      $httpBackend.expectPOST(/\/users$/, { "username": "dzmvas", "email": "dzmvas@dzmvas.com", "name": "Dzmitry", "surname": "Vasileuski", "bio": "Inspired by dumplings", "photo": "assets/img/ava-2.jpg", "password": "3434" }).respond(200);
      User.save({ "username": "dzmvas", "email": "dzmvas@dzmvas.com", "name": "Dzmitry", "surname": "Vasileuski", "bio": "Inspired by dumplings", "photo": "assets/img/ava-2.jpg", "password": "3434" });
      $httpBackend.flush();
    });
  });
});
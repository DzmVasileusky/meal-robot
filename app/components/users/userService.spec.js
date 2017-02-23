describe('User service', function() {
  var User;
  
  beforeEach(function() {
    angular.mock.module('MealRobot');
    inject(function(_User_) {
      User = _User_;
    });
  });

  it('should exist', function() {
    expect(User).toBeDefined();
  });

  describe('public methods', function() {
    it('should have method .all()', function() {
      expect(User.all).toBeDefined();
    });

    it('should have method .one()', function() {
      expect(User.one).toBeDefined();
    });

    it('should have method .save()', function() {
      expect(User.save).toBeDefined();
    });
  });
});
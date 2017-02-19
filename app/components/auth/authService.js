angular.module('MealRobot').factory('AuthService', ['Restangular', '$localStorage', '$rootScope', function(Restangular, $localStorage, $rootScope) {
  var that = this;

  that.user = false;

  that.loginByCredentials = function(credentials) {
    return Restangular.all('sessions').post({ email: credentials.email, password: credentials.password }).then(function(data) {
      if (data.token) {
        $localStorage.accessToken = data.token;
        that.user = data.user;
        $rootScope.$broadcast('auth:change');
      }
      
      return data;
    });
  };

  that.logout = function() {
    var token = $localStorage.accessToken;
    delete $localStorage.accessToken;
    that.user = false;
    $rootScope.$broadcast('auth:change');
    return Restangular.all('sessions').remove({ token: token });
  };

  that.getUser = function() {
    if ($localStorage.accessToken)
      return Restangular.all('sessions').get($localStorage.accessToken).then(function(data) {
        that.user = data;
        $rootScope.$broadcast('auth:change');
        return data;
      });
  };

  return that;
}]);
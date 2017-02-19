angular.module('MealRobot').factory('AuthService', ['Restangular', '$localStorage', '$rootScope', function(Restangular, $localStorage, $rootScope) {
  var that = this;

  that.user = false;

  that.loginByCredentials = function(credentials) {
    return Restangular.all('sessions').post({ email: credentials.email, password: credentials.password }).then(function(data) {
      if (data.token) {
        $localStorage.accessToken = data.token;
        that.user = data.user;
        $rootScope.$broadcast('auth:loged');
      }
      
      return data;
    });
  };

  that.logout = function() {
    var token = $localStorage.accessToken;
    delete $localStorage.accessToken;
    return Restangular.all('sessions').remove({ token: token });
  };

  that.getUser = function(token) {
    return Restangular.all('sessions').get(token).then(function(data) {
      that.user = data;
      $rootScope.$broadcast('auth:loged');
      return data;
    });
  };

  return that;
}]);
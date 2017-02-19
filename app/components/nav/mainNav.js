angular.module('MealRobot').directive('mainNav', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'app/components/nav/nav.html',
    controller: ['$scope', '$location', function($scope, $location) {
      $scope.isCurrent = function(name) {
        return new RegExp('/' + name + '($|/)').test($location.path());
      };
    }]
  }
});
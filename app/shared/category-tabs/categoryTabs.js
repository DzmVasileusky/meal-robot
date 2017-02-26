angular.module('Shared').directive('categoryTabs', [ function() {
  return {
    scope: {
      categories: '=',
      currentCategory: '='
    },
    restrict: 'E',
    templateUrl: 'app/shared/category-tabs/category-tabs.html',
    replace: true,
    link: function(scope, el, attrs) {
      scope.isCurrent = function(name) {
        return scope.currentCategory === name;
      };

      scope.setCurrent = function(name) {
        scope.currentCategory = name;
      };
    }
  };
}]);
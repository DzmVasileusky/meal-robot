angular.module('Shared').directive('infiniteScroll', ['$window', function($window) {
  return {
    scope: {
      onReachEnd: '&'
    },
    restrict: 'E',
    templateUrl: 'app/shared/infinite-scroll/infinite-scroll.html',
    replace: true,
    transclude: true,
    link: function(scope, el) {
      var loading = false,
          aWindow = angular.element($window);

      function onScroll() {
        if (loading) return;

        if ($window.innerHeight + $window.pageYOffset >= el.offset().top + el.height()) {
          loading = true;
          el.addClass('infinite-scroll--loading');

          scope.onReachEnd().then(function(data) {
            if (!data.length) {
              aWindow.off('scroll', onScroll);
            }
          }).finally(function(data) {
            loading = false;
            el.removeClass('infinite-scroll--loading');
          });
        }
      };

      aWindow.on('scroll', onScroll);
    }
  };
}]);
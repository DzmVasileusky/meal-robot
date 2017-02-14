/*********************************************** 
  Background image directive
***********************************************/
angular.module('Shared').directive('bgImage', function() {
  return function(scope, element, attrs) {
    attrs.$observe('bgImage', function(val) {
      if (val)
        element.css({
          'background-image': 'url(' + val + ')'
        });
    });
  }
});
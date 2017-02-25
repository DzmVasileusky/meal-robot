/*********************************************** 
  Image loader with preview directive
***********************************************/
angular.module('Shared').directive('dnd', ['$document', function($document) {
  return function(scope, el) {
    var startX = startY = x = y = 0;
    console.log(el);
    el.css({ 'position': 'absolute' });

    el.on('mousedown', function(event) {
      event.preventDefault();
      startX = event.pageX - x;
      startY = event.pageY - y;
      $document.on('mousemove', mousemove);
      $document.on('mouseup', mouseup);
    });

    function mousemove(event) {
      x = event.pageX - startX;
      y = event.pageY - startY;

      el.css({
        left: x + 'px',
        top: y + 'px'
      });
    };

    function mouseup(event) {
      $document.off('mousemove', mousemove);
      $document.off('mouseup', mouseup);
    }

    scope.$on('$destroy', function() {
      el.off('mousedown', mousemove);
    });
  };
}]);
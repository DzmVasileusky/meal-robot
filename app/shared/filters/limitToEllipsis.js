/*********************************************** 
  Limit to filter with ellipsis crop
***********************************************/
angular.module('Shared').filter('limitToEllipsis', function() {
  return function(input, limit, cropper) {
    if (!cropper) cropper = '...';
    return input.length > limit ? input.slice(0, limit) + cropper : input;
  };
});
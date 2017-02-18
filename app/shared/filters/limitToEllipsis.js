/*********************************************** 
  Limit to filter with ellipsis crop
***********************************************/
angular.module('Shared').filter('limitToEllipsis', function() {
  return function(input, params) {
    var cropped = input,
        r;
    if (!params.cropper) params.cropper = '...';

    if (input.length > params.ammount) {
      r = new RegExp('\(\^\.\{1,' + params.ammount + '\}\)\\s\.\*');
      cropped = params.saveWords ? cropped.replace(r,'$1') : input.slice(0, params.ammount);
      cropped += params.cropper;
    }

    return cropped;
  };
});
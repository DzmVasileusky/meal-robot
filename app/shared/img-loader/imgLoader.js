/*********************************************** 
  Image loader with preview directive
***********************************************/
angular.module('Shared').directive('imageLoader', ['FileUploader', function(FileUploader) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      source: '<',
      name: '@inputName',
      userphoto: '='
    },
    templateUrl: 'app/shared/img-loader/img-loader.html',
    link: function(scope, el, attrs) {
      var buttons = el.find('.image-loader_upload'),
          input = el.find('[type=file]');

      function setSrc(file) {
        var reader = new FileReader();

        reader.onload = function(e) {
          scope.source = e.target.result;
          scope.userphoto = file;
          scope.$apply();
        };

        reader.readAsDataURL(file);
      };

      buttons.on('click', function(e) {
        e.preventDefault();
        input.trigger('click');
      })

      input.on('change', function() {
        setSrc(this.files && this.files[0]);
      });
    }
  }
}]);
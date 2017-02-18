/*********************************************** 
  Validation module
***********************************************/
angular.module('NeedValidation', ['ngMessages']);

angular.module('NeedValidation').directive('password', function(){
  return {
    require: 'ngModel',
    link: function($scope, elm, attrs, ctrl) {
      ctrl.$validators.password = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          return true;
        }

        return (/(?=^.{8,}$)(?![.\n])((?=.*\W)|(?=.*\d))(?=.*[A-Z])(?=.*[a-z]).*$/).test(viewValue);
      };
    }
  };
});
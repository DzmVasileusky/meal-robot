angular.module('MealRobot').controller('ProductListController', ['Product', 'Diet', '$scope', function(Product, Diet, $scope) {
  $scope.products = [];
  $scope.diets = [];
  $scope.currentCategory = '';
  
  Product.all().then(function(data) {
    $scope.products = data;
  });

  Diet.all().then(function(data) {
    $scope.diets = data;
  });
}]);
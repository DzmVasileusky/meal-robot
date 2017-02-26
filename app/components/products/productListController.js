angular.module('MealRobot').controller('ProductListController', ['Product', 'Diet', '$scope', function(Product, Diet, $scope) {
  $scope.products = [];
  $scope.diets = [];
  $scope.currentCategory = '';
  
  Product.page(1, 8).then(function(data) {
    console.log(data);
    $scope.products = data;
  });

  Diet.all().then(function(data) {
    $scope.diets = data;
  });
}]);
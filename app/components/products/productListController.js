angular.module('MealRobot').controller('ProductListController', ['Product', 'Diet', '$scope', function(Product, Diet, $scope) {
  $scope.products = [];
  $scope.diets = [];
  $scope.currentCategory = '';
  $scope.currentPage = 1;
  
  Product.page($scope.currentPage, 8).then(function(data) {
    $scope.products = data;
    $scope.currentPage++;
  });

  Diet.all().then(function(data) {
    $scope.diets = data;
  });

  $scope.loadMore = function() {
    return Product.page($scope.currentPage, 8).then(function(data) {
      $scope.products = $scope.products.concat(data);
      $scope.currentPage++;
      return data;
    });
  };
}]);
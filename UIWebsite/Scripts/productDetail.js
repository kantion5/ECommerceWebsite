var product = angular.module('product', []);

product.controller('ProductController', function ProductController($scope, $rootScope){
  console.log($rootScope.item)
});

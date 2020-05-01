var cart = angular.module('cart', []);

cart.controller('CartController', function CartController($scope){
  $scope.i = 10;
  $scope.temp = [
    {img1: '../Assets/images/1.jpg', price: 10, rating: 10}
  ]
});

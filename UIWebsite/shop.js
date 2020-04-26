var shop = angular.module('shop', []);

shop.controller('ItemController', function ItemController($scope){
  $scope.temp = 4;
  $scope.images = [
    {img1 : "./Assets/images/1.jpg", rating: "Rating: 3.6", price: "$10.50"},
    {img1 : "./Assets/images/2.jpg", rating: "Rating: 4.1", price: "$9.25"},
    {img1 : "./Assets/images/3.jpg", rating: "Rating: 4.2", price: "$9.25"},
    {img1 : "./Assets/images/4.jpg", rating: "Rating: 4.1", price: "$59.99"},
    {img1 : "./Assets/images/5.jpg", rating: "Rating: 4.1", price: "$59.99"},
    {img1 : "./Assets/images/6.jpg", rating: "Rating: 3.7", price: "$59.99"},
    {img1 : "./Assets/images/7.jpg", rating: "Rating: 3.8", price: "$59.99"},
    {img1 : "./Assets/images/8.jpg", rating: "Rating: 3.1", price: "$42.99"},
    {img1 : "./Assets/images/9.jpg", rating: "Rating: 5.0", price: "$35.99"},
    {img1 : "./Assets/images/10.jpg", rating: "Rating: 4.2", price: "$12.50"},
    {img1 : "./Assets/images/11.jpg", rating: "Rating: 4.1", price: "$30.99"},
    {img1 : "./Assets/images/12.jpg", rating: "Rating: 4.7", price: "$30.99"},
    {img1 : "./Assets/images/13.jpg", rating: "Rating: 3.9", price: "$30.99"},
    {img1 : "./Assets/images/14.jpg", rating: "Rating: 4.1", price: "$59.99"},
    {img1 : "./Assets/images/15.jpg", rating: "Rating: 3.9", price: "$12.50"},
    {img1 : "./Assets/images/16.jpg", rating: "Rating: 4.7", price: "$12.50"},
    {img1 : "./Assets/images/17.jpg", rating: "Rating: 3.5", price: "$12.50"},
    {img1 : "./Assets/images/19.jpg", rating: "Rating: 5.0", price: "$25.00"},
    {img1 : "./Assets/images/18.jpg", rating: "Rating: 4.6", price: "$20.00"},
    {img1 : "./Assets/images/20.jpg", rating: "Rating: 3.6", price: "$42.99"},
    {img1 : "./Assets/images/21.jpg", rating: "Rating: 4.1", price: "$52.00"},
    {img1 : "./Assets/images/22.jpg", rating: "Rating: 4.2", price: "$60.00"},
    {img1 : "./Assets/images/23.jpg", rating: "Rating: 4.1", price: "$40.00"},
    {img1 : "./Assets/images/24.jpg", rating: "Rating: 4.1", price: "$35.99"},
    {img1 : "./Assets/images/25.jpg", rating: "Rating: 3.7", price: "$120.00"},
    {img1 : "./Assets/images/26.jpg", rating: "Rating: 3.8", price: "$42.99"},
    {img1 : "./Assets/images/27.jpg", rating: "Rating: 3.1", price: "$90.00"},
    {img1 : "./Assets/images/28.jpg", rating: "Rating: 5.0", price: "$100.00"},
    {img1 : "./Assets/images/29.jpg", rating: "Rating: 4.2", price: "$120.00"},
    {img1 : "./Assets/images/30.jpg", rating: "Rating: 4.1", price: "$45.00"},
    {img1 : "./Assets/images/31.jpg", rating: "Rating: 4.7", price: "$55.00"},
    {img1 : "./Assets/images/32.jpg", rating: "Rating: 3.9", price: "$70.00"},
    {img1 : "./Assets/images/33.jpg", rating: "Rating: 4.1", price: "$60.50"},
    {img1 : "./Assets/images/34.jpg", rating: "Rating: 3.9", price: "$36.00"},
    {img1 : "./Assets/images/35.jpg", rating: "Rating: 4.7", price: "$42.99"},
    {img1 : "./Assets/images/36.jpg", rating: "Rating: 3.5", price: "$70.99"},
    {img1 : "./Assets/images/37.jpg", rating: "Rating: 4.6", price: "$50.99"},
    {img1 : "./Assets/images/38.jpg", rating: "Rating: 5.0", price: "$110.00"},
    {img1 : "./Assets/images/39.jpg", rating: "Rating: 4.2", price: "$103.00"},
    {img1 : "./Assets/images/40.jpg", rating: "Rating: 4.1", price: "$12.99"}
  ];

});

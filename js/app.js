var pcShop = angular.module('pcShop', []);
// function decode_utf8(s) {
//     return decodeURIComponent(escape(s));
//   }
// function encode_utf8(s) {
//     return unescape(encodeURIComponent(s));
//   }
pcShop.controller('mainController', function ($scope, $http) {
    $scope.oKategorije = [];
    $http({
        method: "GET",
        url: "./kategorije.php"
    }).then(function (response) {
        console.log(response.data); 
        $scope.oKategorije = response.data;
    }, function (response) {
        console.log('Doslo je do poreške');
    });
});


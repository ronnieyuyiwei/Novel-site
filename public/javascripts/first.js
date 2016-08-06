/**
 * Created by YYW on 2016/8/2.
 */
var firstApp = angular.module('firstApp',[]);
firstApp.controller('FirstController',function ($scope) {
    $scope.first = 'Some';
    $scope.last = 'One';
    $scope.heading = 'Message： ';
    $scope.updateMessage = function () {
        console.log("333")
        $scope.message = 'Hello ' + $scope.first + ' ' + $scope.last  + '!';
    };
});
var secondApp = angular.module('secondApp',[]);
secondApp.controller('SecondController',function ($scope) {
    $scope.name = 'YYW';
    $scope.email = '444@145.com';
});

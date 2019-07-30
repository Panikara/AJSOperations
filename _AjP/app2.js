
var fst = angular.module("myapp",[]);
fst.controller("myctrl", function ($scope, $http) {
    alert("ht");
    $http.get("myservice.asmx/GetAll").then(function (response) {
        console.log(response.data)
        $scope.more=response.data;
    })
})
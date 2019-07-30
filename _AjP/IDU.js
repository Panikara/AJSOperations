/// <reference path="C:\Users\spuser.VTSLINDIA\documents\visual studio 2015\Projects\_AjP\_AjP\Scripts/angular.js" />
var app = angular.module("scidumodule", ['GetAllmodule', 'ADDmodule']);
var GetAllmodule = angular.module("GetAllmodule", ['ngRoute']);
var ADDmodule = angular.module("ADDmodule", ['ngRoute']);
GetAllmodule.config(function ($routeProvider) {
    $routeProvider.when("/GetAll", {
        templateUrl: "GetAll.html"
    })
  
});
ADDmodule.config(function ($routeProvider) {
    $routeProvider.when("/ADD", {
        templateUrl: "ADD.html"
    })
   
   
})
ADDmodule.controller("ADDctrl", function ($scope, $http) {
    alert("Done2");
    $scope.SaveInsert = function () {
        alert("Done");
        //  if (typeof ($scope.id) == "undefined" || typeof ($scope.name) == "undefined" || typeof ($scope.place) == "undefined") {
        // return;
        // }

        alert("Start");
        var post = $http({
            method: "POST",
            url: "/Home/Index",
            data: "{empid: '" + parseInt ($scope.empid) + "', name: '" + $scope.name + "',place: '" + $scope.place + "'}",

            dataType: 'json',
            headers: { "Content-Type": "application/json" }
        });

        post.success(function (data, status) {

            $scope.dIn.push(data)
        });
        alert("Done");
        $scope.empid = "";
        $scope.name = "";
        $scope.place = "";
    };



})

GetAllmodule.controller("Getctrl", function () {
    alert("getctrl");
    $scope.show = {};
    $http.get("/Home/GetAll").then(function (response) {
        console.log(response.data);
        $scope.show = response.data;
    })
})
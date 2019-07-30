/// <reference path="C:\Users\spuser.VTSLINDIA\documents\visual studio 2015\Projects\_AjP\_AjP\Scripts/angular.js" />

var app = angular.module("OpModule", []);
app.controller("myctrl", function ($scope, $http) {
  
    $scope.SaveInsert = function () {
      //  alert("Done");
      //  if (typeof ($scope.id) == "undefined" || typeof ($scope.name) == "undefined" || typeof ($scope.place) == "undefined") {
           // return;
       // }

        alert("Start");
        var post = $http({
            method: "POST",
            url: "/Home/Index",
            data: "{empid: '" + typeof ($scope.empid) + "', name: '" + $scope.name + "',place: '" + $scope.place + "'}",

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
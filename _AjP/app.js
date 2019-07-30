var app = angular.module("ksmodule", ['usermodule','Questionmodule',]);
var usermodule = angular.module("usermodule",['ngRoute']);
var Questionmodule = angular.module("Questionmodule", ['ngRoute']);


usermodule.config(function ($routeProvider) {
    $routeProvider.when("/login", {
        templateUrl: "login.html"
    })
    $routeProvider.when("/Register", {
        templateUrl: "Register.html"
    })
})
usermodule.controller("Logincontroller", function () {

})
usermodule.service("userservice", function ($http) {
    this.login = function () {

    }
    this.register = function () {

    }

})
Questionmodule.config(function ($routeProvider) {
    $routeProvider.when("/addQuestions", {
        templateUrl: "addQuestions.html",
        controller:"addQuestioncontroller"
      
    })
    $routeProvider.when("/addAnswer", {
        templateUrl: "addAnswer.html"
    })
    $routeProvider.when("/chooseAnswer", {
        templateUrl: "chooseAnswer.html"
    })
})
Questionmodule.controller("addQuestioncontroller", function ($scope, Questionservice) {
    alert("ctrl");
    $scope.question = {};

    $scope.addQuestion = function () {
        $scope.question.userId = localStorage.getItem("userId");
        Questionservice.addQuestion($scope.question);

        

    }
    
})
Questionmodule.service("Questionservice", function ($http) {
    this.addQuestion = function (data) {
        $http.post("http://localhost:3000/questions", data).then(function (response) {
            
            alert("success");
        })
    }


})
Questionmodule.controller("QuestioncontrollerList", function () {

})
Questionmodule.controller("OuestioncontrollerAnswer", function () {

})





    





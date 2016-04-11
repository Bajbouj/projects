angular.module("myApp.controllers",[])
.controller("loginCtrl",function($scope,$state){
  $scope.login="";
  $scope.pwd="";
  $scope.connect=function(){
    if ($scope.login=="mohamed.jridi@esprit.tn" && $scope.pwd=="med") {
      alert("hello "+$scope.login);
      $state.go("home");
    }
    else {
      alert("bye bye");

    }

  }
})
.controller("homeCtrl",function(){

})
.controller("profilCtrl",function(){

});

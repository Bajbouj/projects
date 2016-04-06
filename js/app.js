var app=angular.module('monApp',[]);
app.controller('logCtrl',function($scope){
  $scope.log="";
  $scope.pwd="";
  $scope.connect=function(){
    if ($scope.log=="med" && $scope.pwd=="med") {
      alert("hello"+$scope.log);
      console.log('$scope.log');
    }
    else {
      alert("bye bye");

    }
  }
});

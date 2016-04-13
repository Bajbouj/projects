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
.controller("homeCtrl",function($scope){
$scope.fullName="Mohamed Jridi";
$scope.favoris=["News","Messages","Events","Groups","Football","Series"];
$scope.groups=["Craft academy","ESPRIT","Engineer"];
$scope.status=[];
$scope.getStatus=function(){
  $scope.stat=false;
  if (  $scope.newStatus) {
$scope.status.push($scope.newStatus);
}
console.log($scope.newStatus);

  $scope.newStatus="";
  $scope.stat=true;



}
})
.controller("profilCtrl",function(){

});

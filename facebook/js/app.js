var app=angular.module("myApp",["ui.router","ui.bootstrap"]);
app.config(function($stateProvider,$urlRouterProvider){
$urlRouterProvider.otherwise("/login");
$stateProvider.state("login",{
  url:"/login",
  templateUrl:"pages/login.html",
  controller: "loginCtrl"
})
  .state("home",{
    url:"/home",
    templateUrl:"pages/home.html",
    controller: "homeCtrl"
  })
  .state("profil",{
    url:"/profil",
    templateUrl:"pages/profil.html",
    controller: "profilCtrl"
  });
});

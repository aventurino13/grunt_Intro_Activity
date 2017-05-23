var myApp = angular.module('myApp', []);

myApp.controller('HeroController', function() {

  // grab the view model
  var vm = this;

  // function to add hero
  vm.addHero = function() {

  }

  // function to get heros
  vm.getHero = function() {

  }

  // when controller loads it will get all heros
  vm.getHero();
});

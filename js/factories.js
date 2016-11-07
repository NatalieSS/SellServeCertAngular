var factories = angular.module('sell_serve_cert_app.factories', [])


factories.factory('Factory', function ($http) {

  var submitState = function(work) {
  	console.log("submitForm working");
    // return $http({
    //   method: 'POST',
    //   url: '/api/searchworks',
    //   data: work, //forms user object
    // })
   
    // fill in some varialbe with state specific info that you then inject into the stat_view html
    // $scope.changeView = function (view) {
    //   $location.path("");
    // }

    // var chosenState = "";
    // chosenState = $("#pick-state option:selected").text();

    // // if (chosenState = "Select") {
    // //   alert("Please pick a state.");
    // // } 
   
    //   $(".state-info").append(chosenState);
  };


});
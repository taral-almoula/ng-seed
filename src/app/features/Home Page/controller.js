/**
 * Created by Sony on 8/7/2016.
 */
var app = angular.module('mainApp', []);
// setting - using the global angular object, and u are using the module method

app.controller('MovieCtrl', function($scope) {

  $http.get('http://localhost:63342/angular/list.json')
    .success(function (response) {
      $scope.mov = response;

      var nid = "19";
      $scope.isMovie = function(titles) {
        return titles.Genre === "Action";
      };

    });
  $scope.select = function(item) {
    $scope.selectedItem = item;
  };
  $scope.selectedItem = "Please select from list";
});

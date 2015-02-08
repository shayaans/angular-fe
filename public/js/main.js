angular.module('displayImageGrid', []);

angular.module('displayImageGrid').controller('mainController', function($scope, $http) {
  $http.get('/results.json').then(function(response) {
    $scope.results = response.data.marks;
  });
});
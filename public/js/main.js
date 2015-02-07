angular.module('displayImageGrid', []);

angular.module("displayImageGrid").controller("mainController", function($scope) {
  $scope.results = [{
    "Id": 1,
    "IMI": {
      "Name": "Fly Round-Trip to Myrtle Beach Philadelphia",
      "Brand": "Expedia",
      "Image": "https://stream.inmarkit.com/uploads/mm/P498/62/GwVmHPI_50x50.jpg"
    }
  }, {
    "Id": 1,
    "IMI": {
      "Name": "Fly Round-Trip to Myrtle Beach Philadelphia",
      "Brand": "Expedia",
      "Image": "https://stream.inmarkit.com/uploads/mm/P498/62/GwVmHPI_50x50.jpg"
    }
  }, {
    "Id": 1,
    "IMI": {
      "Name": "Fly Round-Trip to Myrtle Beach Philadelphia",
      "Brand": "Expedia",
      "Image": "https://stream.inmarkit.com/uploads/mm/P498/62/GwVmHPI_50x50.jpg"
    }
  }];
});
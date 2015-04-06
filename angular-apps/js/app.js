// app.js
angular.module('sortApp', [])

  .controller('mainController', function($scope) {

    $scope.sortType = 'fish'; // set the default sort type
    $scope.sortReverse = 'false'; //set the default sort order
    $scope.searchFish = ''; // set the default search/filter term

    $scope.sushi = [
      {name: 'Cali Roll', fish: 'Crab', tastiness: 2},
      {name: 'Philly', fish: 'Tuna', tastiness: 4},
      {name: 'Rainbow', fish: 'Variety', tastiness: 6},
      {name: 'Tiger', fish: 'Eel', tastiness: 7}
    ];

  });
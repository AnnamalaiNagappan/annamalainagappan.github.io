angular.module('displayApp', [])
  .controller('galleryController', function($scope) {
    $scope.gallery_items = [
      {title: 'Time Relativity', url: 'angular-apps/time_relativity/index.html'},
      {title: 'Sort | Filter Tables', url: 'angular-apps/sort_filter_tables/index.html'},
    ];
  });
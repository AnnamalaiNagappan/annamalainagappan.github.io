angular.module('displayApp', [])
  .controller('galleryController', function($scope) {
    $scope.gallery_items = [
      {title: 'Time Relativity', url: 'angular-apps/time_relativity/index.html', category: 'Angular'},
      {title: 'Sort | Filter Tables', url: 'angular-apps/sort_filter_tables/index.html', category: 'Angular'},
      {title: 'Invoice', url: 'invoice.html', category: 'Bootstrap'},
      {title: 'Data Sharing', url: 'http://datashare.meteor.com/', category: 'Meteor'},
      {title: 'Contacts', url: 'angular-apps/contact/index.html', category: 'Angular'},
    ];
  });
'use strict';

angular.module('accountApp', [])
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
  }]);

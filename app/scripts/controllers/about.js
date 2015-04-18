'use strict';

/**
 * @ngdoc function
 * @name soundCribApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the soundCribApp
 */
angular.module('soundCribApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

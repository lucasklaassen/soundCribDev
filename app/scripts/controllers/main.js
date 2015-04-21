'use strict';

/**
 * @ngdoc function
 * @name soundCribApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the soundCribApp
 */
angular.module('soundCribApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.artists = [
      {
        name:'A$AP Rocky', url:'https://soundcloud.com/asap-rocky/sets/liveloveasap', img_href:'assets/images/artists/asap-rocky.jpg'
      },
      {
        name:'Kygo', url:'https://soundcloud.com/soundcrib/sets/kygo', img_href:'assets/images/artists/asap-rocky.jpg'
      },
      {
        name:'Avicii', url:'https://soundcloud.com/soundcrib/sets/avicii-1', img_href:'assets/images/artists/asap-rocky.jpg'
      },
      {
        name:'Schoolboy Q', url:'https://soundcloud.com/soundcrib/sets/schoolboy-q', img_href:'assets/images/artists/asap-rocky.jpg'
      }
    ];
  });

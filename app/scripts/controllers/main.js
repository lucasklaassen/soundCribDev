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
        name:'A$AP Rocky', url:'https://soundcloud.com/asap-rocky/sets/liveloveasap', imgURL:'assets/images/artists/asap-rocky.jpg', active: false
      },
      {
        name:'Kygo', url:'https://soundcloud.com/soundcrib/sets/kygo', imgURL:'assets/images/artists/asap-rocky.jpg', active: false
      },
      {
        name:'Avicii', url:'https://soundcloud.com/soundcrib/sets/avicii-1', imgURL:'assets/images/artists/asap-rocky.jpg', active: false
      },
      {
        name:'Schoolboy Q', url:'https://soundcloud.com/soundcrib/sets/schoolboy-q', imgURL:'assets/images/artists/asap-rocky.jpg', active: false
      }
    ];
    $scope.showArtistPlayer = function(){

    };
  });

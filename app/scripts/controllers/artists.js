'use strict';

/**
 * @ngdoc function
 * @name soundCribApp.controller:ArtistsCtrl
 * @description
 * # ArtistsCtrl
 * Controller of the soundCribApp
 */
angular.module('soundCribApp')
  .controller('ArtistsCtrl', function ($scope) {
    $scope.artists = [
      {
        name:'A$AP Rocky', url:'https://soundcloud.com/asap-rocky/sets/liveloveasap', imgURL:'assets/images/artists/asap-rocky.jpg', active: false
      },
      {
        name:'Kygo', url:'https://soundcloud.com/soundcrib/sets/kygo', imgURL:'assets/images/artists/kygo.jpg', active: false
      },
      {
        name:'Avicii', url:'https://soundcloud.com/soundcrib/sets/avicii-1', imgURL:'assets/images/artists/avicii.jpg', active: false
      },
      {
        name:'Schoolboy Q', url:'https://soundcloud.com/soundcrib/sets/schoolboy-q', imgURL:'assets/images/artists/schoolboyq.jpg', active: false
      }
    ];
  });

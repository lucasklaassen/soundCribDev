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
    $scope.mixes = [
      {
        name:'SoundCrib Mix #1', url:'http://soundcloud.com/soundcrib/sets/soundcrib', active: false, defaultMix: false
      },
      {
        name:'SoundCrib Mix #2', url:'http://soundcloud.com/soundcrib/sets/soundcrib-mix-2', active: true, defaultMix: true
      }
    ];
    $scope.filterDefault = function(mix) {
      return mix.defaultMix !== true;
    };
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

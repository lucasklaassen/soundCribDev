'use strict';

/**
 * @ngdoc overview
 * @name soundCribApp
 * @description
 * # soundCribApp
 *
 * Main module of the application.
 */
angular
  .module('soundCribApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'plangular'
  ])
  .config(function ($routeProvider, plangularConfigProvider) {
    plangularConfigProvider.clientId = 'bc5a4908b1f2c9eb5d1a31bc80dc6614';
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

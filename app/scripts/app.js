'use strict';

/**
 * @ngdoc overview
 * @name sgetechApp
 * @description
 * # sgetechApp
 *
 * Main module of the application.
 */
angular
  .module('sgetechApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/office365', {
        templateUrl: 'views/office365.html',
        controller: 'Office365Ctrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/office365ProPlus', {
        templateUrl: 'views/office365ProPlus.html',
        controller: 'Office365proplusCtrl'
      })
      .when('/sharepointOnline', {
        templateUrl: 'views/sharepointOnline.html',
        controller: 'SharepointonlineCtrl'
      })
      .when('/hardware', {
        templateUrl: 'views/hardware.html',
        controller: 'HardwareCtrl'
      })
      .when('/lyncOnline', {
        templateUrl: 'views/lyncOnline.html',
        controller: 'LynconlineCtrl'
      })
      .when('/whoweare', {
        templateUrl: 'views/whoweare.html',
        controller: 'WhoweareCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });

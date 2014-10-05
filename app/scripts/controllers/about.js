'use strict';

/**
 * @ngdoc function
 * @name sgetechApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sgetechApp
 */
angular.module('sgetechApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

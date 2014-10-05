'use strict';

/**
 * @ngdoc function
 * @name sgetechApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sgetechApp
 */
angular.module('sgetechApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $scope.myInterval = 2500;
  $scope.slides = [ {
    image: 'images/cloudcomputing.jpg',
    text: "Trabajamos para  comprender las necesidades de nuestros clientes, ese es nuestro principal objetivo",
    active: true
  },{
    image: 'images/reunion.jpg',
    text:  "Consultoría en software y hardware, aumente la productividad y reduzca los costos de su empresa.",
    active: false
  },
  {
    image: 'images/cloud.jpg',
    text: "Soluciones tecnológicas a medida de sus necesidades",
    active: false
  }];

  $scope.tabs = [
    {
      title: "Home",

    },
    {
      title: "Profile",

    },
    {
      title: "About",

    }
  ];

});













/*!
 * Copyright (c) 2016 Digital Bazaar, Inc. All rights reserved.
 */
define([
  'angular',
  './test-harness-component'
], function(angular) {

'use strict';

var module = angular.module('bedrock.color-picker-test', [
  'bedrock.color-picker'
]);

Array.prototype.slice.call(arguments, 1).forEach(function(register) {
  register(module);
});

/* @ngInject */
module.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      title: 'Test Harness',
      template: '<br-test-harness></br-test-harness>'
    });
});

});

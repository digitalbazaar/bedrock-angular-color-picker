/*!
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
define([
  'angular',
  './color-picker-component'
], function(angular) {

'use strict';

var module = angular.module('bedrock.color-picker', [
  'bedrock.form', 'mp.colorPicker'
]);

Array.prototype.slice.call(arguments, 1).forEach(function(register) {
  register(module);
});

});

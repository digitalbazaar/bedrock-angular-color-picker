/*!
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
define([], function() {

'use strict';

function register(module) {
  module.component('brTestHarness', {
    controller: Ctrl,
    templateUrl: requirejs.toUrl(
      'bedrock-angular-color-picker-test/test-harness-component.html')
  });
}

/* @ngInject */
function Ctrl() {
  var self = this;
  self.color = "#444444";
}

return register;

});

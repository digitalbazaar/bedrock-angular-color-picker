/*!
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
/* global requirejs */
define([], function() {

'use strict';

function register(module) {
  module.component('brColorPicker', {
    bindings: {
      inputOptions: '<brInputOptions',
      inputHelpText: '@?brInputHelpText',
      color: '=ngModel'
    },
    controller: Ctrl,
    templateUrl: requirejs.toUrl(
      'bedrock-angular-color-picker/color-picker-component.html')
  });
}

/* @ngInject */
function Ctrl() {
  var self = this;
  self.display = {
    picker: false
  };

  self.$onInit = function() {
    self.inputHelpText = self.inputHelpText || 'Pick a color.';
  };
}

return register;

});

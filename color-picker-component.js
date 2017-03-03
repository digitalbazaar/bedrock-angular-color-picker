/*!
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
define([], function() {

'use strict';

function register(module) {
  module.component('brColorPicker', {
    bindings: {
      options: '<brOptions',
      color: '=ngModel'
    },
    transclude: {
      'br-color-picker-help': '?brColorPickerHelp',
      'br-color-picker-validation-errors': '?brColorPickerValidationErrors'
    },
    controller: Ctrl,
    templateUrl: requirejs.toUrl(
      'bedrock-angular-color-picker/color-picker-component.html')
  });
}

/* @ngInject */
function Ctrl() {
  var self = this;

  self.$onInit = function() {
    self.display = {
      picker: false
    };
    console.log('self.options', self.options);
  };
}

return register;

});

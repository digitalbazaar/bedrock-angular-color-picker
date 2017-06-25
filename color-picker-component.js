/*!
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
export default {
  bindings: {
    inputOptions: '<brInputOptions',
    inputHelpText: '@?brInputHelpText',
    color: '=ngModel'
  },
  controller: Ctrl,
  templateUrl: 'bedrock-angular-color-picker/color-picker-component.html'
};

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

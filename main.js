/*!
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
import angular from 'angular';
import ColorPickerComponent from './color-picker-component';

var module = angular.module('bedrock.color-picker', [
  'bedrock.form', 'mp.colorPicker'
]);

module.component('brColorPicker', ColorPickerComponent);

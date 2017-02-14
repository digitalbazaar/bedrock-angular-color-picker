/*!
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
var bedrock = require('bedrock');
var config = bedrock.config;
var path = require('path');

config.protractor.config.suites['general'] =
  path.join(__dirname, 'protractor', 'tests', '**', '*.js');

// default multiCapabilities, used with Sauce Labs
var caps = config.sauceLabs.capabilities;
config.sauceLabs.multiCapabilities = [
  caps.linux.firefox, caps.linux.chrome, caps.osx1011.safari,
  caps.osx1010.safari, caps.windows10.ie
];

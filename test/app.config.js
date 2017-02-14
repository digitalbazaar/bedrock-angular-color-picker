/*!
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
var bedrock = require('bedrock');
var config = bedrock.config;
var path = require('path');

var dir = path.join(__dirname);
config.requirejs.bower.packages.push({
  path: path.join(dir, 'components'),
  manifest: path.join(dir, 'bower.json')
});

var parentDir = path.join(__dirname, '..');
config.requirejs.bower.packages.push({
  path: path.join(parentDir),
  manifest: path.join(parentDir, 'bower.json')
});

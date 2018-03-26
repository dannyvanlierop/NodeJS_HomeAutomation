#!/usr/bin/env node

function VariablesConfig(){
  
  process.stdout.write( '\n' + " initialize Config ");
  
//  sVariableName = typeof sVariableName !== undefined ? sVariableName : "DefaultStartValue";

  exec = require('child_process').exec;
  fs = require('fs');

  debug = false;
  
  pathroot = '/root/scripts/HomeAutomation/';       //  sVariableName = typeof sVariableName !== undefined ? sVariableName : "DefaultStartValue";
  pathconfig = pathroot + './config/';
  pathlib = pathroot + './lib/';
  pathsrc = pathroot + './src/';
  pathresources = pathroot + './resources/';

  
  module.exports = require( pathconfig + './init.js');
  module.exports = require( pathlib + './init.js');
  module.exports = require( pathsrc + './init.js');
  module.exports = require( pathresources + './init.js');
  
};
VariablesConfig();

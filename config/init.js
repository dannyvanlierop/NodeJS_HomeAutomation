#!/usr/bin/env node

function VariablesConfig(){
  
  process.stdout.write( '\n' + " initialize Config ");
  
//  sVariableName = typeof sVariableName !== undefined ? sVariableName : "DefaultStartValue";

  exec = require('child_process').exec;
  fs = require('fs');

  debug = false;
  
  pathroot = '/root/scripts/HomeAutomation/';       //  sVariableName = typeof sVariableName !== undefined ? sVariableName : "DefaultStartValue";
  pathconfig = pathroot + './config/';
  pathresources = pathroot + './resources/';
  pathlib = pathroot + './lib/';
  pathsrc = pathroot + './src/';
  
  module.exports = require( pathconfig + './init.js');
  module.exports = require( pathlib + './init.js');
  module.exports = require( pathresources + './init.js');
  module.exports = require( pathsrc + './init.js');
  
};
VariablesConfig();

#!/usr/bin/env node

function VariablesResources(){
  
  process.stdout.write( '\n' + " initialize Resources ");
  
  pathhue = pathresources + './hue/';
  pathledstrip = pathresources + './ledstrip/';
  
  module.exports = require( pathhue + './init.js');
  module.exports = require( pathledstrip + './init.js');
  
};
VariablesResources();




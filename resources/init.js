#!/usr/bin/env node

function VariablesResources(){
  
  process.stdout.write( '\n' + " initialize Resources ");
  
  pathhue = pathresources + './hue/';
  pathrpi = pathresources + './RPi/';
  
  module.exports = require( pathhue + './init.js');
  module.exports = require( pathrpi + './init.js');
    
};
VariablesResources();




#!/usr/bin/env node

function VariablesHue(){
  
  process.stdout.write( '\n' + " initialize Resources-Hue ");
  
  hue = require('hue-sdk');
  client = new hue.Hue(require( pathconfig + './.credentials.json' ));
  
  pathhuebridge = pathhue + './bridge/';
  pathhuelight = pathhue + './light/';
  pathhuesensor = pathhue + './sensor/';

  module.exports = require( pathhuebridge + './init.js');
  module.exports = require( pathhuelight + './init.js');
  module.exports = require( pathhuesensor + './init.js');
  
};
VariablesHue();
 
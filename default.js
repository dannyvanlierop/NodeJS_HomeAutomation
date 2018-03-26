#!/usr/bin/env node

process.stdout.write( '\n' + " Start: " + '\n' );

function VariablesDefault(){
  
  process.stdout.write( '\n' + " initialize Main ");
  
  pathroot = '/root/scripts/HomeAutomation/';
  pathconfig = pathroot + './config/';
  pathresources = pathroot + './resources/';
  pathlib = pathroot + './lib/';
  module.exports = pathsrc = pathroot + './src/';
  
  module.exports = require( pathconfig + './init.js');
  module.exports = require( pathlib + './init.js');
  module.exports = require( pathresources + './init.js');
  module.exports = require( pathsrc + './init.js');
};
module.exports = VariablesDefault();	

console.log(" ");

//Everything runs from this function 
var myInit = function() {

  counter++;
  
  if ( ( counter % 10 ) == 0 ){
    sensor.fetchInfo();
    light.fetchInfo();
  }

  //if ( iArraySensorTemperature[6] !== undefined ){
  //  if ( ( counter % 10 ) == 0 ){
  //    //console.log(light.sArrayLightManufacturerName[1]);
	//    process.stdout.write('\n' + "Last: " + sArraySensorLastupdated[5] + " Button: " + iArraySensorButtonEvent[5] + " Temp: " + iArraySensorTemperature[6]);
  //  }
  //}
  process.stdout.write('.');
  setTimeout(myInit, 100);
  
};
setTimeout(myInit, 8000);	//myInit();
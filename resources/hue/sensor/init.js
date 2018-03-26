#!/usr/bin/env node

process.stdout.write( '\n' + " initialize Resources-Hue-Sensor ");

module.exports = pathhuesensorvalues = pathhuesensor + './.values/';
module.exports = require( pathhuesensorvalues + './init.js');

function VariablesSensor(){
    
 // ##############
 // #   Sensors  #
 // ##############

  sensor = require('./sensor.js');
  iArraySensorConnected = [1, 2, 5, 6, 7, 8, 9, 10, 11];        //i++; if ( i == 3 ){ i = 5; } else if ( i == 11 ){ i = 1; } sensor.getInfo(i);
 
  //sensor.getLightLevel(8);
  //sensor.getTemperature(6);
  //sensor.getButtonevent(5);
  //sensor.getLastupdated(5);

  sArraySensorName = [''];                  //if (typeof sArraySensorName[i]               !== undefined){ process.stdout.write(" " + sArraySensorName[i]); };
  sArraySensorType = [''];                  //if (typeof sArraySensorType[i]               !== undefined){ process.stdout.write(" " + sArraySensorType[i]); };
  sArraySensorModelId = [''];               //if (typeof sArraySensorModelId[i]            !== undefined){ process.stdout.write(" " + sArraySensorModelId[i]); };
  sArraySensorManufacturerName = [''];      //if (typeof sArraySensorManufacturerName[i]   !== undefined){ process.stdout.write(" " + sArraySensorManufacturerName[i]); };
  sArraySensorSwversion = [''];             //if (typeof sArraySensorSwversion[i]          !== undefined){ process.stdout.write(" " + sArraySensorSwversion[i]); };
  sArraySensorUniqueId = [''];              //if (typeof sArraySensorUniqueId[i]           !== undefined){ process.stdout.write(" " + sArraySensorUniqueId[i]); };
  bArraySensorRecycle = [''];               //if (typeof bArraySensorRecycle[i]            !== undefined){ process.stdout.write(" " + bArraySensorRecycle[i]); };

  iArraySensorButtonEvent = [''];           //if (typeof iArraySensorButtonEvent[i]       !== undefined){ process.stdout.write(" " + iArraySensorButtonEvent[i]); };
  iArraySensorLightLevel = [''];            //if (typeof iArraySensorLightLevel[i]        !== undefined){ process.stdout.write(" " + iArraySensorLightLevel[i]); };    
  bArraySensorDark = [''];                  //if (typeof bArraySensorDark[i]              !== undefined){ process.stdout.write(" " + bArraySensorDark[i]); };  
  bArraySensorDaylight = [''];              //if (typeof bArraySensorDaylight[i]          !== undefined){ process.stdout.write(" " + bArraySensorDaylight[i]); };  
  iArraySensorStatus = [''];                //if (typeof iArraySensorStatus[i]            !== undefined){ process.stdout.write(" " + iArraySensorStatus[i]); };    
  sArraySensorLastupdated = [''];           //if (typeof sArraySensorLastupdated[i]       !== undefined){ process.stdout.write(" " + sArraySensorLastupdated[i]); };  
  bArraySensorPresence = [''];              //if (typeof bArraySensorPresence[i]          !== undefined){ process.stdout.write(" " + bArraySensorPresence[i]); };  
  iArraySensorTemperature = [''];           //if (typeof iArraySensorTemperature[i]       !== undefined){ process.stdout.write(" " + iArraySensorTemperature[i]); };  
 
  bArraySensorOn = [''];                    //if (typeof bArraySensorOn[i]                !== undefined){ process.stdout.write(" " + bArraySensorOn[i]); };
  iArraySensorBattery = [''];               //if (typeof iArraySensorBattery[i]           !== undefined){ process.stdout.write(" " + iArraySensorBattery[i]); };
  bArraySensorConfigured = [''];            //if (typeof bArraySensorConfigured[i]        !== undefined){ process.stdout.write(" " + bArraySensorConfigured[i]); };
  bArraySensorReachable = [''];             //if (typeof bArraySensorReachable[i]         !== undefined){ process.stdout.write(" " + bArraySensorReachable[i]); };
  sArraySensorAlert = [''];                 //if (typeof sArraySensorAlert[i]             !== undefined){ process.stdout.write(" " + sArraySensorAlert[i]); };
  iArraySensorTholdDark = [''];             //if (typeof iArraySensorTholdOffset[i]       !== undefined){ process.stdout.write(" " + iArraySensorTholdOffset[i]); };
  iArraySensorTholdOffset = [''];           //if (typeof iArraySensorTholdOffset[i]       !== undefined){ process.stdout.write(" " + iArraySensorTholdOffset[i]); };
  iArraySensorStatus = [''];                //if (typeof iArraySensorStatus[i]            !== undefined){ process.stdout.write(" " + iArraySensorStatus[i]); };
  iArraySensorTholdOffset = [''];           //if (typeof iArraySensorTholdOffset[i]       !== undefined){ process.stdout.write(" " + iArraySensorTholdOffset[i]); };
  bArraySensorLedindication = [''];         //if (typeof bArraySensorLedindication[i]     !== undefined){ process.stdout.write(" " + bArraySensorLedindication[i]); };
  bArraySensorUsertest = [''];              //if (typeof bArraySensorUsertest[i]          !== undefined){ process.stdout.write(" " + bArraySensorUsertest[i]); };
  iArraySensorSensitivity = [''];           //if (typeof iArraySensorSensitivity[i]       !== undefined){ process.stdout.write(" " + iArraySensorSensitivity[i]); };
  iArraySensorSensitivityMax = [''];        //if (typeof iArraySensorSensitivityMax[i]    !== undefined){ process.stdout.write(" " + iArraySensorSensitivityMax[i]); };
  iArraySensorSunsetoffset = [''];          //if (typeof iArraySensorSunsetoffset[i]      !== undefined){ process.stdout.write(" " + iArraySensorSunsetoffset[i]); };
  iArraySensorSunriseoffset = [''];         //if (typeof iArraySensorSunriseoffset[i]     !== undefined){ process.stdout.write(" " + iArraySensorSunriseoffset[i]); };
  sArraySensorPending = [''];               //if (typeof sArraySensorPending[i]           !== undefined){ process.stdout.write(" " + sArraySensorPending[i]); };    

  sensor.fetchInfo();
};
VariablesSensor();

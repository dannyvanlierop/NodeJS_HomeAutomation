#!/usr/bin/env node

debug = false;

//# Situation:                # Function:
//#################################################################
//# Hue To Scriptvar          # getInfo, getInfoAll
//# Scriptvar to Hue          # setInfo, setInfoAll
//# From Hue                  # get[Variable], get[Variable]]All
//# To Hue                    # set[Variable], set[Variable]]All
//# From disk                 # loadInfo, loadInfoALL
//# To disk                   # saveInfo, saveInfoAll
//# From/To script            # not needed


/** getInfo **/
//get all attributes for 1 sensor from hue to script-variables
exports.getInfo = function( iSensorNumber,sValue){
  client.getSensor( iSensorNumber, function( err, result ){ 

    if ( err || result === undefined || result.state === undefined ){ return err;}
    
    //General:
    if ( typeof result.manufacturername !== undefined){         sArraySensorManufacturerName[iSensorNumber] = result.manufacturername;         };  
    if ( typeof result.modelid !== undefined         ){         sArraySensorModelId[iSensorNumber] = result.modelid;                           };  
    if ( typeof result.name !== undefined            ){         sArraySensorName[iSensorNumber] = result.name;                                 };  
    if ( typeof result.swversion !== undefined       ){         sArraySensorSwVersion[iSensorNumber] = result.swversion;                       };  
    if ( typeof result.type !== undefined            ){         sArraySensorType[iSensorNumber] = result.type;                                 };  
    if ( typeof result.uniqueid !== undefined        ){         sArraySensorUniqueId[iSensorNumber] = result.uniqueid;                         };  
                                                                                                                                            
    //State:
    if ( typeof result.state.lightlevel !== undefined ){        iArraySensorLightLevel[iSensorNumber] = result.state.lightlevel;               };
    if ( typeof result.state.dark !== undefined ){              bArraySensorDark[iSensorNumber] = result.state.dark;                           };
    if ( typeof result.state.daylight !== undefined ){          bArraySensorDaylight[iSensorNumber] = result.state.daylight;                   };
    if ( typeof result.state.status !== undefined ){            iArraySensorStatus[iSensorNumber] = result.state.status;                       };
    if ( typeof result.state.lastupdated !== undefined ){       sArraySensorLastupdated[iSensorNumber] = result.state.lastupdated;             };
    if ( typeof result.state.presence !== undefined ){          bArraySensorPresence[iSensorNumber] = result.state.presence;                   };
    if ( typeof result.state.temperature !== undefined ){       iArraySensorTemperature[iSensorNumber] = result.state.temperature;             };

    //Config:
    if ( typeof result.config.on !== undefined ){               bArraySensorOn[iSensorNumber] = result.config.on;                              };
    if ( typeof result.config.battery  !== undefined ){         iArraySensorBattery[iSensorNumber] = result.config.battery;                    };
    if ( typeof result.config.configured !== undefined ){       bArraySensorConfigured[iSensorNumber] = result.config.configured;              };
    if ( typeof result.config.reachable !== undefined ){        bArraySensorReachable[iSensorNumber] = result.config.reachable;                };
    if ( typeof result.config.alert !== undefined ){            sArraySensorAlert[iSensorNumber] = result.config.alert;                        };
    if ( typeof result.config.tholddark !== undefined ){        iArraySensorTholdDark[iSensorNumber] = result.config.tholddark;                };
    if ( typeof result.config.tholdoffset !== undefined ){      iArraySensorTholdOffset[iSensorNumber] = result.config.tholdoffset;            };
    if ( typeof result.config.ledindication !== undefined ){    bArraySensorLedindication[iSensorNumber] = result.config.ledindication;        };
    if ( typeof result.config.usertest !== undefined ){         bArraySensorUsertest[iSensorNumber] = result.config.usertest;                  };
    if ( typeof result.config.sensitivity !== undefined ){      iArraySensorSensitivity[iSensorNumber] = result.config.sensitivity;            };
    if ( typeof result.config.sensitivitymax !== undefined ){   iArraySensorSensitivityMax[iSensorNumber] = result.config.sensitivitymax;      };
    if ( typeof result.config.sunsetoffset !== undefined ){     iArraySensorSunsetoffset[iSensorNumber] = result.config.sunsetoffset;          };
    if ( typeof result.config.sunriseoffset !== undefined ){    iArraySensorSunriseoffset[iSensorNumber] = result.config.sunriseoffset;        };
    if ( typeof result.config.pending !== undefined ){          sArraySensorPending[iSensorNumber] = result.config.pending;                    };

    //Recycle:
    if ( typeof result.recycle !== undefined                      ){ bArraySensorRecycle[iSensorNumber] = result.recycle;                      };  // sensor.getRecycle( iSensorNumber );  

  });
};

/** getInfo - ALL**/
//get all attributes for all sensors from hue to script-variables
exports.getInfoAll = function(){
  //process.stdout.write('\n' + " Fetch Sensor Info...");
  for ( x = 0; x < iArraySensorConnected.length; x++ ){ 
    sensor.getInfo(iArraySensorConnected[x]); 
  }
}


/** setInfo **/
//sets all attributes from 1 light from script-variables to hue
exports.setInfo = function( iSensorNumber,sValue){

  // changeSensorConfig parameterinfo:
  // not modifiable : "configured, reachable, sensitivitymax"
  // modifiable : "on, sunriseoffset, sunsetoffset, battery, alert, ledindication, usertest, pending, sensitivity, tholddark, tholdoffset"
  //
  // Parameter               //  iSensorNumber
  // "on": 16000,            //  all
  // "sunriseoffset": 0,     //  1,
  // "sunsetoffset": 0,      //  1,
  // "battery": 100,         //  2,6,7,8,
  // "alert": "none",        //  6,7,8,
  // "ledindication": False, //  6,7,8,
  // "usertest": False,      //  6,7,8,
  // "pending": [],          //  6,7,8,
  // "sensitivity": false,   //  7,
  // "tholddark": false,     //  8,
  // "tholdoffset": 1,       //  8,
  
  client.changeSensorConfig( iSensorNumber, {

  }, function( err, result ){ if ( err) throw err; console.log(result);
  });





  client.changeSensorState( 2, {    
  //"parameterinfo" : buttonevent, dark, daylight, lastupdated, lightlevel, presence, temperature" are not modifiable, only "status" is modifiable
  //"status": 0,        //  2,9
  }, function( err, result ){ if ( err) throw err; console.log(result);
  });
};


function changeSensorConfig(){
  
  //WERKEND!
  client.changeSensorConfig( 8, {    
    //"parameterinfo" : "configured, reachable, sensitivitymax" are not available, further "on, sunriseoffset, sunsetoffset, battery, alert, ledindication, usertest, pending, sensitivity, tholddark, tholdoffset" is modifiable
    //"on": 16000,
    //"sunriseoffset": 7000,
    //"sunsetoffset": false,
    //"battery": false,
    //"alert": 1,
    //"ledindication": false,
    //"usertest": 16000,
    //"pending": 7000,
    //"sensitivity": false,
    //"tholddark": false,
    //"tholdoffset": 1,
    }, function( err, result ){ if ( err) throw err; console.log(result);
  });

  //WERKEND!
  //  client.changeSensorState( 2, {    
  //    //"parameterinfo" : buttonevent, dark, daylight, lastupdated, lightlevel, presence, temperature" are not modifiable, only "status" is modifiable
  //    "status": 0,
  //  },
  //  function( err, result ){ 
  //    if ( err) throw err;
  //    console.log(result);
  //  });

}

changeSensorConfig();


/** setInfo **/
//sets all attributes from 1 sensor from script-variables to hue
exports.setInfo = function( iSensorNumber,sValue){
  client.setSensor( iSensorNumber, function( err, result ){
  
    if ( err || result === undefined || result.state === undefined ){ return err;}


   //State: 
    if ( bArrayLightOn[iLightNumber]              !== undefined ){   client.setLightState( iLightNumber, { "on": bArrayLightOn[iLightNumber] },                          function( err, result ){ if ( err ) return err; }); };              
    if ( iArrayLightBriCur[iLightNumber]          !== undefined ){   client.setLightState( iLightNumber, { "bri": iArrayLightBriCur[iLightNumber] },                     function( err, result ){ if ( err ) return err; }); };              
    if ( iArrayLightHueCur[iLightNumber]          !== undefined ){   client.setLightState( iLightNumber, { "hue": iArrayLightHueCur[iLightNumber] },                     function( err, result ){ if ( err ) return err; }); };              
    if ( iArrayLightSatCur[iLightNumber]          !== undefined ){   client.setLightState( iLightNumber, { "sat": iArrayLightSatCur[iLightNumber] },                     function( err, result ){ if ( err ) return err; }); };              
    if ( sArrayLightEffect[iLightNumber]          !== undefined ){   client.setLightState( iLightNumber, { "effect": sArrayLightEffect[iLightNumber] },                  function( err, result ){ if ( err ) return err; }); };           
    if ( fArrayLightXyCur[iLightNumber]           !== undefined ){   client.setLightState( iLightNumber, { "xy": fArrayLightXyCur[iLightNumber] },                       function( err, result ){ if ( err ) return err; }); };      
    if ( fArrayLightXyXCur[iLightNumber]          !== undefined ){   client.setLightState( iLightNumber, { "xy[0]": fArrayLightXyXCur[iLightNumber] },                   function( err, result ){ if ( err ) return err; }); };          
    if ( fArrayLightXyYCur[iLightNumber]          !== undefined ){   client.setLightState( iLightNumber, { "xy[1]": fArrayLightXyYCur[iLightNumber] },                   function( err, result ){ if ( err ) return err; }); };          
    if ( iArrayLightCtCur[iLightNumber]           !== undefined ){   client.setLightState( iLightNumber, { "ct": iArrayLightCtCur[iLightNumber] },                       function( err, result ){ if ( err ) return err; }); };      
    if ( sArrayLightAlert[iLightNumber]           !== undefined ){   client.setLightState( iLightNumber, { "alert": sArrayLightAlert[iLightNumber] },                    function( err, result ){ if ( err ) return err; }); };         
    if ( sArrayLightColorMode[iLightNumber]       !== undefined ){   client.setLightState( iLightNumber, { "colormode": sArrayLightColorMode[iLightNumber] },            function( err, result ){ if ( err ) return err; }); };
    if ( bArrayLightReachable[iLightNumber]       !== undefined ){   client.setLightState( iLightNumber, { "reachable": bArrayLightReachable[iLightNumber] },            function( err, result ){ if ( err ) return err; }); };   
    if ( iArrayLightTransitionTime[iLightNumber]  !== undefined ){   client.setLightState( iLightNumber, { "transitiontime": iArrayLightTransitionTime[iLightNumber] },  function( err, result ){ if ( err ) return err; }); }; 
  
  });
}




exports.getName = function( iSensorNumber ){                client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.name === undefined ) return err;                 sArraySensorName[iSensorNumber] = result.state.name;                            });};    //if ( debug ){ console.log(`    Name:             ${result.name}`);                    }; });};
exports.getType= function( iSensorNumber ){                 client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.type === undefined ) return err;                 sArraySensorType[iSensorNumber] = result.state.type;                            });};    //if ( debug ){ console.log(`    Type:             ${result.type}`);                    }; });};
exports.getModelId = function( iSensorNumber ){             client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.modelid === undefined ) return err;              sArraySensorModelId[iSensorNumber] = result.state.modelid;                      });};    //if ( debug ){ console.log(`    ModelId:          ${result.modelid}`);                }; });};
exports.getManufacturername = function( iSensorNumber ){    client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.manufacturername === undefined ) return err;     sArraySensorManufacturerName[iSensorNumber] = result.state.manufacturername;    });};    //if ( debug ){ console.log(`    Manufacturername: ${result.manufacturername}`);        }; });};
exports.getSwversion = function( iSensorNumber ){           client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.swversion === undefined ) return err;            sArraySensorSwVersion[iSensorNumber] = result.state.swversion;                  });};    //if ( debug ){ console.log(`    Swversion:        ${result.swversion}`);                }; });};
exports.getUniqueid = function( iSensorNumber ){            client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.uniqueid === undefined ) return err;             sArraySensorUniqueId[iSensorNumber] = result.state.uniqueid;                    });};    //if ( debug ){ console.log(`    Uniqueid:         ${result.uniqueid}`);                }; });};
exports.getRecycle = function( iSensorNumber ){             client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.recycle === undefined ) return err;              bArraySensorRecycle[iSensorNumber] = result.state.recycle;                      });};    //if ( debug ){ console.log(`    Recycle:          ${result.recycle}`);                }; });};

exports.getButtonevent = function( iSensorNumber ){         client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.buttonevent === undefined ) return err;          iArraySensorButtonEvent[iSensorNumber] = result.state.buttonevent;              });};    //if ( debug ){ console.log(`${result.state.buttonevent}`);        }; });};
exports.getLightLevel = function( iSensorNumber ){          client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.lightlevel === undefined ) return err;           iArraySensorLightLevel[iSensorNumber] = result.state.lightlevel;                });};    //if ( debug ){ console.log(`${result.state.lightlevel}`);         }; });};
exports.getDark = function( iSensorNumber ){                client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.dark === undefined ) return err;                 bArraySensorDark[iSensorNumber] = result.state.dark;                            });};    //if ( debug ){ console.log(`${result.state.dark}`);            }; });};
exports.getDaylight = function( iSensorNumber ){            client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.daylight === undefined ) return err;             bArraySensorDaylight[iSensorNumber] = result.state.daylight;                    });};    //if ( debug ){ console.log(`${result.state.daylight}`);        }; });};
exports.getStatus = function( iSensorNumber ){              client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.status === undefined ) return err;               iArraySensorStatus[iSensorNumber] = result.state.status;                        });};    //if ( debug ){ console.log(`${result.state.status}`);            }; });};
exports.getLastupdated = function( iSensorNumber ){         client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.lastupdated === undefined ) return err;          sArraySensorLastupdated[iSensorNumber] = result.state.lastupdated;              });};    //if ( debug ){ console.log(`${result.state.lastupdated}`);        }; });};
exports.getPresence = function( iSensorNumber ){            client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.presence === undefined ) return err;             bArraySensorPresence[iSensorNumber] = result.state.presence;                    });};    //if ( debug ){ console.log(`${result.state.presence}`);        }; });};
exports.getTemperature = function( iSensorNumber ){         client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.temperature === undefined ) return err;          iArraySensorTemperature[iSensorNumber] = result.state.temperature;              });};    //if ( debug ){ console.log(`${result.state.temperature}`);        }; });};

exports.getOn = function( iSensorNumber ){                  client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.on === undefined ) return err;                   bArraySensorOn[iSensorNumber] = result.state.on;                                });};    //if ( debug ){ console.log(`${result.config.on}`);                }; });};
exports.getBattery = function( iSensorNumber ){             client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.battery === undefined ) return err;              iArraySensorBattery[iSensorNumber] = result.state.battery;                      });};    //if ( debug ){ console.log(`${result.config.battery}`);        }; });};
exports.getConfigured = function( iSensorNumber ){          client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.configured === undefined ) return err;           bArraySensorConfigured[iSensorNumber] = result.state.configured;                });};    //if ( debug ){ console.log(`${result.config.configured}`);        }; });};
exports.getReachable = function( iSensorNumber ){           client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.reachable === undefined ) return err;            bArraySensorReachable[iSensorNumber] = result.state.reachable;                  });};    //if ( debug ){ console.log(`${result.config.reachable}`);        }; });};
exports.getAlert = function( iSensorNumber ){               client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.tholddark === undefined ) return err;            sArraySensorAlert[iSensorNumber] = result.state.alert;                          });};    //if ( debug ){ console.log(`${result.config.alert}`);            }; });};
exports.getTholdDark = function( iSensorNumber ){           client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.alert === undefined ) return err;                iArraySensorTholdDark[iSensorNumber] = result.state.tholddark;                  });};    //if ( debug ){ console.log(`${result.config.tholddark}`);        }; });};
exports.getTholdOffset = function( iSensorNumber ){         client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.tholdoffset === undefined ) return err;          iArraySensorTholdOffset[iSensorNumber] = result.state.tholdoffset;              });};    //if ( debug ){ console.log(`${result.config.tholdoffset}`);    }; });};
exports.getLedindication = function( iSensorNumber ){       client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.ledindication === undefined ) return err;        bArraySensorLedindication[iSensorNumber] = result.state.ledindication;          });};    //if ( debug ){ console.log(`${result.config.ledindication}`);    }; });};
exports.getUsertest = function( iSensorNumber ){            client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.usertest === undefined ) return err;             bArraySensorUsertest[iSensorNumber] = result.state.usertest;                    });};    //if ( debug ){ console.log(`${result.config.usertest}`);        }; });};
exports.getSensitivity = function( iSensorNumber ){         client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.sensitivity === undefined ) return err;          iArraySensorSensitivity[iSensorNumber] = result.state.sensitivity;              });};    //if ( debug ){ console.log(`${result.config.sensitivity}`);    }; });};
exports.getSensitivitymax = function( iSensorNumber ){      client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.sensitivitymax === undefined ) return err;       iArraySensorSensitivityMax[iSensorNumber] = result.state.sensitivitymax;        });};    //if ( debug ){ console.log(`${result.config.sensitivitymax}`);    }; });};
exports.getSunsetoffset = function( iSensorNumber ){        client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.sunsetoffset === undefined ) return err;         iArraySensorSunsetoffset[iSensorNumber] = result.state.sunsetoffset;            });};    //if ( debug ){ console.log(`${result.config.sunsetoffset}`);    }; });};
exports.getUnriseoffset = function( iSensorNumber ){        client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.sunriseoffset === undefined ) return err;        iArraySensorSunriseoffset[iSensorNumber] = result.state.sunriseoffset;          });};    //if ( debug ){ console.log(`${result.config.sunriseoffset}`);    }; });};
exports.getPending = function( iSensorNumber ){             client.getSensor( iSensorNumber, function( err, result ){     if ( err || typeof result.state.pending === undefined ) return err;              sArraySensorPending[iSensorNumber] = result.state.pending;                      });};    //if ( debug ){ console.log(`${result.config.pending}`);        }; });};


exports.fetchInfo = function(){
  //process.stdout.write('\n' + " Fetch Sensor Info...");
    for ( x = 0; x < iArraySensorConnected.length; x++ ){ 
    //process.stdout.write(" #" + x + "...");
    sensor.getInfo(iArraySensorConnected[x]);
    }
}

//        exports.getInfo = function( iSensorNumber,sValue){
//            if ( sValue === "manufacturername" ){         sensor.getManufacturerName( iSensorNumber );
//            } else if ( sValue === "modelid" ){           sensor.getModelId( iSensorNumber );
//            } else if ( sValue === "manufacturername" ){  sensor.getManufacturerName( iSensorNumber );
//            } else if ( sValue === "modelid" ){           sensor.getModelId( iSensorNumber );
//            } else if ( sValue === "name" ){              sensor.getName( iSensorNumber );
//            } else if ( sValue === "swversion" ){         sensor.getSwVersion( iSensorNumber );
//            } else if ( sValue === "type" ){              sensor.getType( iSensorNumber );
//            } else if ( sValue === "uniqueid" ){          sensor.getUniqueid( iSensorNumber );
//            //Output all attributes found
//            } else { 
//                
//                if (!fs.existsSync( pathhuesensor + "./_values/" + iSensorNumber + + "/" + "./state")) {
//                        exec( "/bin/mkdir -p " +  pathhuesensor + "./_values/" + iSensorNumber + "/" + "./state" );
//                }
//        
//                if (!fs.existsSync(  pathhuesensor + "./_values/" + iSensorNumber + "/" + "./config" )) {
//                        exec( "/bin/mkdir -p " +  pathhuesensor + "./_values/" + iSensorNumber + "/" + "./config" );
//                }
//                
//                client.getSensor( iSensorNumber, function( err, result ){ 
//        
//                    //if ( err) throw err;
//                    if ( err || result === undefined|| result.state === undefined|| result.config === undefined ) return err;
//            
//                    if ( debug ){ console.log('General:' + iSensorNumber ); };            //if (typeof query !== undefined && query !== null)
//                    if ( typeof result.name !== undefined ){                     sArraySensorName[iSensorNumber] = result.name;                                };    //if ( debug ){ console.log(`    Name:             ${result.name}`) }; };
//                    if ( typeof result.type !== undefined ){                     sArraySensorType[iSensorNumber] = result.type;                                };    //if ( debug ){ console.log(`    Type:             ${result.type}`) }; };
//                    if ( typeof result.modelid !== undefined ){                  sArraySensorModelId[iSensorNumber] = result.modelid;                          };    //if ( debug ){ console.log(`    ModelId:          ${result.modelid}`) }; };
//                    if ( typeof result.manufacturername !== undefined ){         sArraySensorManufacturerName[iSensorNumber] = result.manufacturername;        };    //if ( debug ){ console.log(`    Manufacturername: ${result.manufacturername}`) }; };
//                    if ( typeof result.swversion !== undefined ){                sArraySensorSwVersion[iSensorNumber] = result.swversion;                      };    //if ( debug ){ console.log(`    Swversion:        ${result.swversion}`) }; };
//                    if ( typeof result.uniqueid !== undefined ){                 sArraySensorUniqueId[iSensorNumber] = result.uniqueid;                        };    //if ( debug ){ console.log(`    Uniqueid:         ${result.uniqueid}`) }; };
//                    if ( typeof result.recycle !== undefined ){                  bArraySensorRecycle[iSensorNumber] = result.recycle;                          };    //if ( debug ){ console.log(`    Recycle:          ${result.recycle}`) }; };
//            
//                    //if ( debug ){ console.log('State:'); };typeof query !== undefined && query !== null
//                    if ( result.state.buttonevent !== undefined && result.state.buttonevent !== null){ iArraySensorButtonEvent[iSensorNumber] = result.state.buttonevent; 
//                    //if ( debug ){ console.log(`    Buttonevent:      ${result.state.buttonevent}`) };
//                    };
//                    if ( typeof result.state.lightlevel !== undefined ){        iArraySensorLightLevel[iSensorNumber] = result.state.lightlevel;               };    //if ( debug ){ console.log(`    LightLevel:       ${result.state.lightlevel}`) }; }; //10250
//                    if ( typeof result.state.dark !== undefined ){              bArraySensorDark[iSensorNumber] = result.state.dark;                           };    //if ( debug ){ console.log(`    Dark:             ${result.state.dark}`) }; };
//                    if ( typeof result.state.daylight !== undefined ){          bArraySensorDaylight[iSensorNumber] = result.state.daylight;                   };    //if ( debug ){ console.log(`    Daylight:         ${result.state.daylight}`) }; };
//                    if ( typeof result.state.status !== undefined ){            iArraySensorStatus[iSensorNumber] = result.state.status;                       };    //if ( debug ){ console.log(`    Status:           ${result.state.status}`) }; };
//                    if ( typeof result.state.lastupdated !== undefined ){       sArraySensorLastupdated[iSensorNumber] = result.state.lastupdated;             };    //if ( debug ){ console.log(`    Lastupdated:      ${result.state.lastupdated}`) }; };
//                    if ( typeof result.state.presence !== undefined ){          bArraySensorPresence[iSensorNumber] = result.state.presence;                   };    //if ( debug ){ console.log(`    Presence:         ${result.state.presence}`) }; };
//                    if ( typeof result.state.temperature !== undefined ){       iArraySensorTemperature[iSensorNumber] = result.state.temperature;             };    //if ( debug ){ console.log(`    Temperature:      ${result.state.temperature}`) }; };
//                    
//                    if ( debug ){ console.log('Config:'); };
//                    if ( typeof result.config.on !== undefined ){               bArraySensorOn[iSensorNumber] = result.config.on;                              };    //if ( debug ){ console.log(`    On:               ${result.config.on}`) }; };
//                    if ( typeof result.config.battery  !== undefined ){         iArraySensorBattery[iSensorNumber] = result.config.battery;                    };    //if ( debug ){ console.log(`    Battery:          ${result.config.battery}`) }; };
//                    if ( typeof result.config.configured !== undefined ){       bArraySensorConfigured[iSensorNumber] = result.config.configured;              };    //if ( debug ){ console.log(`    Configured:       ${result.config.configured}`) }; };
//                    if ( typeof result.config.reachable !== undefined ){        bArraySensorReachable[iSensorNumber] = result.config.reachable;                };    //if ( debug ){ console.log(`    Reachable:        ${result.config.reachable}`) }; };
//                    if ( typeof result.config.alert !== undefined ){            sArraySensorAlert[iSensorNumber] = result.config.alert;                        };    //if ( debug ){ console.log(`    Alert:            ${result.config.alert}`) }; };
//                    if ( typeof result.config.tholddark !== undefined ){        iArraySensorTholdDark[iSensorNumber] = result.config.tholddark;                };    //if ( debug ){ console.log(`    TholdDark:        ${result.config.tholddark}`) }; };
//                    if ( typeof result.config.tholdoffset !== undefined ){      iArraySensorTholdOffset[iSensorNumber] = result.config.tholdoffset;            };    //if ( debug ){ console.log(`    TholdOffset:      ${result.config.tholdoffset}`) }; };
//                    if ( typeof result.config.ledindication !== undefined ){    bArraySensorLedindication[iSensorNumber] = result.config.ledindication;        };    //if ( debug ){ console.log(`    Ledindication:    ${result.config.ledindication}`) }; };
//                    if ( typeof result.config.usertest !== undefined ){         bArraySensorUsertest[iSensorNumber] = result.config.usertest;                  };    //if ( debug ){ console.log(`    Usertest:         ${result.config.usertest}`) }; };
//                    if ( typeof result.config.sensitivity !== undefined ){      iArraySensorSensitivity[iSensorNumber] = result.config.sensitivity;            };    //if ( debug ){ console.log(`    Sensitivity:      ${result.config.sensitivity}`) }; };
//                    if ( typeof result.config.sensitivitymax !== undefined ){   iArraySensorSensitivityMax[iSensorNumber] = result.config.sensitivitymax;      };    //if ( debug ){ console.log(`    Sensitivitymax:   ${result.config.sensitivitymax}`) }; };
//                    if ( typeof result.config.sunsetoffset !== undefined ){     iArraySensorSunsetoffset[iSensorNumber] = result.config.sunsetoffset;          };    //if ( debug ){ console.log(`    Sunsetoffset:     ${result.config.sunsetoffset}`) }; };
//                    if ( typeof result.config.sunriseoffset !== undefined ){    iArraySensorSunriseoffset[iSensorNumber] = result.config.sunriseoffset;        };    //if ( debug ){ console.log(`    Unriseoffset:     ${result.config.sunriseoffset}`) }; };
//                    if ( typeof result.config.pending !== undefined ){          sArraySensorPending[iSensorNumber] = result.config.pending;                    };    //if ( debug ){ console.log(`    Pending:          ${result.config.pending}`) }; };
//                });
//            }
//        }



//exports.setInfo = function( iSensorNumber,sTarget,SomeValue){
//    //Temp Cleanup
//    sTarget = sTarget.toLowerCase();
//    fValue = SomeValue;
//    iValue = SomeValue;
//    sValue = SomeValue;
//    
//    if ( sTarget === "on" ){                        
//        } else if ( sTarget === "battery" ){        
//        } else if ( sTarget === "configured" ){        
//        } else if ( sTarget === "reachable" ){        
//        } else if ( sTarget === "alert" ){            
//        } else if ( sTarget === "tholddark" ){        
//        } else if ( sTarget === "tholdoffset" ){    
//        } else if ( sTarget === "ledindication" ){    
//        } else if ( sTarget === "usertest" ){        
//        } else if ( sTarget === "sensitivity" ){    
//        } else if ( sTarget === "sensitivitymax" ){    
//        } else if ( sTarget === "sunsetoffset" ){    
//        } else if ( sTarget === "sunriseoffset" ){    
//        } else if ( sTarget === "pending" ){        
//    }
//}
//
//exports.setName = function( iSensorNumber ){                 client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.name}`);});};
//exports.setType= function( iSensorNumber ){                     client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.type}`);});};
//exports.setModelId = function( iSensorNumber ){                 client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.modelid}`);});};
//exports.setManufacturername = function( iSensorNumber ){     client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.manufacturername}`);});};
//exports.setSwversion = function( iSensorNumber ){             client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.swversion}`);});};
//exports.setUniqueid = function( iSensorNumber ){             client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.uniqueid}`);});};
//exports.setRecycle = function( iSensorNumber ){                 client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.recycle}`);});};
//
//exports.setButtonevent = function( iSensorNumber ){             client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.state.buttonevent}`);});};
//exports.setLightLevel = function( iSensorNumber ){             client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.state.lightlevel}`);});};
//exports.setDark = function( iSensorNumber ){                 client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.state.dark}`);});};
//exports.setDaylight = function( iSensorNumber ){             client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.state.daylight}`);});};
//exports.setStatus = function( iSensorNumber ){                 client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.state.status}`);});};
//exports.setLastupdated = function( iSensorNumber ){             client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.state.lastupdated}`);});};
//exports.setPresence = function( iSensorNumber ){             client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.state.presence}`);});};
//exports.setTemperature = function( iSensorNumber ){             client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.state.temperature}`);});};
//
//exports.setOn = function( iSensorNumber ){                     client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.config.on}`);});};
//exports.setBattery = function( iSensorNumber ){                 client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.config.battery}`);});};
//exports.setConfigured = function( iSensorNumber ){             client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.config.configured}`);});};
//exports.setReachable = function( iSensorNumber ){             client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.config.reachable}`);});};
//exports.setAlert = function( iSensorNumber ){                 client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.config.alert}`);});};
//exports.setTholdDark = function( iSensorNumber ){             client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.config.tholddark}`);});};
//exports.setTholdOffset = function( iSensorNumber ){             client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.config.tholdoffset}`);});};
//exports.setLedindication = function( iSensorNumber ){         client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.config.ledindication}`);});};
//exports.setUsertest = function( iSensorNumber ){             client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.config.usertest}`);});};
//exports.setSensitivity = function( iSensorNumber ){             client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.config.sensitivity}`);});};
//exports.setSensitivitymax = function( iSensorNumber ){         client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.config.sensitivitymax}`);});};
//exports.setSunsetoffset = function( iSensorNumber ){         client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.config.sunsetoffset}`);});};
//exports.setUnriseoffset = function( iSensorNumber ){         client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.config.sunriseoffset}`);});};
//exports.setPending = function( iSensorNumber ){                 client.getSensor( iSensorNumber, function( err, result ){ if ( err) throw err;    console.log(`${result.config.pending}`);});};




//function ShowSensorInfo(){
//  for ( x = 0; x < iArraySensorConnected.length; x++ ){
//    process.stdout.write('\n' + " Fetch Sensor Info..." + iArraySensorConnected[x] + '\n');
//      if ( sArraySensorManufacturerName[iArraySensorConnected[x]] !== undefined ) console.log(sArraySensorManufacturerName[iArraySensorConnected[x]]    );                                                                                                   
//      if ( sArraySensorModelId[iArraySensorConnected[x]]          !== undefined ) console.log(sArraySensorModelId[iArraySensorConnected[x]]             );                                                                                                   
//      if ( sArraySensorName[iArraySensorConnected[x]]             !== undefined ) console.log(sArraySensorName[iArraySensorConnected[x]]                );                                                                                                   
//      if ( sArraySensorSwVersion[iArraySensorConnected[x]]        !== undefined ) console.log(sArraySensorSwVersion[iArraySensorConnected[x]]           );                                                                                                   
//      if ( sArraySensorType[iArraySensorConnected[x]]             !== undefined ) console.log(sArraySensorType[iArraySensorConnected[x]]                );                                                                                                   
//      if ( sArraySensorUniqueId[iArraySensorConnected[x]]         !== undefined ) console.log(sArraySensorUniqueId[iArraySensorConnected[x]]            );                                                                                                   
//      if ( iArraySensorLightLevel[iArraySensorConnected[x]]       !== undefined ) console.log(iArraySensorLightLevel[iArraySensorConnected[x]]          );                                                                                                   
//      if ( bArraySensorDark[iArraySensorConnected[x]]             !== undefined ) console.log(bArraySensorDark[iArraySensorConnected[x]]                );                                                                                                   
//      if ( bArraySensorDaylight[iArraySensorConnected[x]]         !== undefined ) console.log(bArraySensorDaylight[iArraySensorConnected[x]]            );                                                                                                   
//      if ( iArraySensorStatus[iArraySensorConnected[x]]           !== undefined ) console.log(iArraySensorStatus[iArraySensorConnected[x]]              );                                                                                                   
//      if ( sArraySensorLastupdated[iArraySensorConnected[x]]      !== undefined ) console.log(sArraySensorLastupdated[iArraySensorConnected[x]]         );                                                                                                   
//      if ( bArraySensorPresence[iArraySensorConnected[x]]         !== undefined ) console.log(bArraySensorPresence[iArraySensorConnected[x]]            );                                                                                                   
//      if ( iArraySensorTemperature[iArraySensorConnected[x]]      !== undefined ) console.log(iArraySensorTemperature[iArraySensorConnected[x]]         );                                                                                                   
//      if ( bArraySensorOn[iArraySensorConnected[x]]               !== undefined ) console.log(bArraySensorOn[iArraySensorConnected[x]]                  );                                                                                                   
//      if ( iArraySensorBattery[iArraySensorConnected[x]]          !== undefined ) console.log(iArraySensorBattery[iArraySensorConnected[x]]             );                                                                                                   
//      if ( bArraySensorConfigured[iArraySensorConnected[x]]       !== undefined ) console.log(bArraySensorConfigured[iArraySensorConnected[x]]          );                                                                                                   
//      if ( bArraySensorReachable[iArraySensorConnected[x]]        !== undefined ) console.log(bArraySensorReachable[iArraySensorConnected[x]]           );                                                                                                   
//      if ( sArraySensorAlert[iArraySensorConnected[x]]            !== undefined ) console.log(sArraySensorAlert[iArraySensorConnected[x]]               );                                                                                                   
//      if ( iArraySensorTholdDark[iArraySensorConnected[x]]        !== undefined ) console.log(iArraySensorTholdDark[iArraySensorConnected[x]]           );                                                                                                   
//      if ( iArraySensorTholdOffset[iArraySensorConnected[x]]      !== undefined ) console.log(iArraySensorTholdOffset[iArraySensorConnected[x]]         );                                                                                                   
//      if ( bArraySensorLedindication[iArraySensorConnected[x]]    !== undefined ) console.log(bArraySensorLedindication[iArraySensorConnected[x]]       );                                                                                                   
//      if ( bArraySensorUsertest[iArraySensorConnected[x]]         !== undefined ) console.log(bArraySensorUsertest[iArraySensorConnected[x]]            );                                                                                                   
//      if ( iArraySensorSensitivity[iArraySensorConnected[x]]      !== undefined ) console.log(iArraySensorSensitivity[iArraySensorConnected[x]]         );                                                                                                   
//      if ( iArraySensorSensitivityMax[iArraySensorConnected[x]]   !== undefined ) console.log(iArraySensorSensitivityMax[iArraySensorConnected[x]]      );                                                                                                   
//      if ( iArraySensorSunsetoffset[iArraySensorConnected[x]]     !== undefined ) console.log(iArraySensorSunsetoffset[iArraySensorConnected[x]]        );                                                                                                   
//      if ( iArraySensorSunriseoffset[iArraySensorConnected[x]]    !== undefined ) console.log(iArraySensorSunriseoffset[iArraySensorConnected[x]]       );                                                                                                   
//      if ( sArraySensorPending[iArraySensorConnected[x]]          !== undefined ) console.log(sArraySensorPending[iArraySensorConnected[x]]             );                                                                                                   
//
//  }
//}
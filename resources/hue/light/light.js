#!/usr/bin/env node

debug = false;

/** getInfo **/           //get all atributes for 1 light from hue to script-variables
exports.getInfo = function( iLightNumber,sValue){
  client.getLight( iLightNumber, function( err, result ){ 

    if ( err || result === undefined || result.state === undefined ){ return err;}
    
    //General:
    if ( typeof result.manufacturername !== undefined   ){ sArrayLightManufacturerName[iLightNumber] = result.manufacturername;  };  // light.getManufacturerName( iLightNumber );     
    if ( typeof result.productname !== undefined        ){ sArrayLightProductname[iLightNumber] = result.productname;            };  // light.getModelId( iLightNumber );              
    if ( typeof result.modelid !== undefined            ){ sArrayLightModelid[iLightNumber] = result.modelid;                    };  // light.getModelId( iLightNumber );              
    if ( typeof result.name !== undefined               ){ sArrayLightName[iLightNumber] = result.name;                          };  // light.getName( iLightNumber );                 
    if ( typeof result.swversion !== undefined          ){ sArrayLightSwversion[iLightNumber] = result.swversion;                };  // light.getSwVersion( iLightNumber );            
    if ( typeof result.type !== undefined               ){ sArrayLightType[iLightNumber] = result.type;                          };  // light.getType( iLightNumber );                 
    if ( typeof result.uniqueid !== undefined           ){ sArrayLightUniqueid[iLightNumber] = result.uniqueid;                  };  // light.getUniqueid( iLightNumber );             
                                                                                                                                            
    //State:                                                                                                  
    if ( typeof result.state.on !== undefined           ){ bArrayLightOn[iLightNumber] = result.state.on;                         };  //light.getOn( iLightNumber );       
    if ( typeof result.state.bri !== undefined          ){ iArrayLightBriCur[iLightNumber] = result.state.bri;                    };  //light.getBri( iLightNumber );      
    if ( typeof result.state.hue !== undefined          ){ iArrayLightHueCur[iLightNumber] = result.state.hue;                    };  //light.getHue( iLightNumber );      
    if ( typeof result.state.sat !== undefined          ){ iArrayLightSatCur[iLightNumber] = result.state.sat;                    };  //light.getSat( iLightNumber );      
    if ( typeof result.state.effect !== undefined       ){ sArrayLightEffect[iLightNumber] = result.state.effect;                 };  //light.getEffect( iLightNumber );   
    if ( typeof result.state.xy !== undefined           ){ fArrayLightXyCur[iLightNumber] = result.state.xy;                      };  //light.getXy( iLightNumber );       
    if ( typeof result.state.xy[0] !== undefined        ){ fArrayLightXyXCur[iLightNumber] = result.state.xy[0];                  };  //light.getXyX( iLightNumber );      
    if ( typeof result.state.xy[1] !== undefined        ){ fArrayLightXyYCur[iLightNumber] = result.state.xy[1];                  };  //light.getXyY( iLightNumber );      
    if ( typeof result.state.ct !== undefined           ){ iArrayLightCtCur[iLightNumber] = result.state.ct;                      };  //light.getCt( iLightNumber );       
    if ( typeof result.state.alert !== undefined        ){ sArrayLightAlert[iLightNumber] = result.state.alert;                   };  //light.getAlert( iLightNumber );    
    if ( typeof result.state.colormode !== undefined    ){ sArrayLightColorMode[iLightNumber] = result.state.colormode;           };  //light.getColormode( iLightNumber );
    if ( typeof result.state.reachable !== undefined    ){ bArrayLightReachable[iLightNumber] = result.state.reachable;           };  //light.getReachable( iLightNumber );

  });
}


/** getInfo - ALL**/    //get all atributes for all lights from hue to script-variables
exports.getInfoAll = function(){
  //process.stdout.write('\n' + " Fetch Light Info...");
  for ( x = 0; x < iArrayLightConnected.length; x++ ){ 
    light.getInfo(iArrayLightConnected[x]); 
  }
}


/** setInfo **/         //sets all atributes from 1 light from variables to hue
exports.setInfo = function( iLightNumber,sValue){
  client.setLight( iLightNumber, function( err, result ){
  
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


/** setInfo - ALL**/   //sets all atributes for all lights from script variables to hue
exports.setInfoAll = function(){
  //process.stdout.write('\n' + " Fetch Light Info...");
  for ( x = 0; x < iArrayLightConnected.length; x++ ){ 
    light.setInfo(iArrayLightConnected[x]); 
  }
}


/** getValue **/
exports.getManufacturerName = function( iLightNumber ){ client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.manufacturername !== undefined ){ return err;} sArrayLightManufacturerName[iLightNumber] = result.manufacturername; }); };
exports.getProductName = function( iLightNumber ){      client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.productname !== undefined      ){ return err;} sArrayLightProductname[iLightNumber] = result.productname;           }); };   
exports.getModelId = function( iLightNumber ){          client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.modelid !== undefined          ){ return err;} sArrayLightModelid[iLightNumber] = result.modelid;                   }); };   
exports.getName = function( iLightNumber ){             client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.name !== undefined             ){ return err;} sArrayLightName[iLightNumber] = result.name;                         }); };   
exports.getSwVersion = function( iLightNumber ){        client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.swversion !== undefined        ){ return err;} sArrayLightSwversion[iLightNumber] = result.swversion;               }); };   
exports.getType = function( iLightNumber ){             client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.type !== undefined             ){ return err;} sArrayLightType[iLightNumber] = result.type;                         }); };   
exports.getUniqueid = function( iLightNumber ){         client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.uniqueid !== undefined         ){ return err;} sArrayLightUniqueid[iLightNumber] = result.uniqueid;                 }); };   
exports.getOn = function( iLightNumber ){               client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.on !== undefined         ){ return err;} bArrayLightOn[iLightNumber] = result.state.on;                       }); };   
exports.getBri = function( iLightNumber ){              client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.bri !== undefined        ){ return err;} iArrayLightBriCur[iLightNumber] = result.state.bri;                  }); };   
exports.getHue = function( iLightNumber ){              client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.hue !== undefined        ){ return err;} iArrayLightHueCur[iLightNumber] = result.state.hue;                  }); };   
exports.getSat = function( iLightNumber ){              client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.sat !== undefined        ){ return err;} iArrayLightSatCur[iLightNumber] = result.state.sat;                  }); };   
exports.getEffect = function( iLightNumber ){           client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.effect !== undefined     ){ return err;} sArrayLightEffect[iLightNumber] = result.state.effect;               }); };   
exports.getXy = function( iLightNumber ){               client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.xy !== undefined         ){ return err;} fArrayLightXyCur[iLightNumber] = result.state.xy;                    }); };   
exports.getXyX = function( iLightNumber ){              client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.xy[0] !== undefined      ){ return err;} fArrayLightXyXCur[iLightNumber] = result.state.xy[0];                }); };   
exports.getXyY = function( iLightNumber ){              client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.xy[1] !== undefined      ){ return err;} fArrayLightXyYCur[iLightNumber] = result.state.xy[1];                }); };   
exports.getCt = function( iLightNumber ){               client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.ct !== undefined         ){ return err;} iArrayLightCtCur[iLightNumber] = result.state.ct;                    }); };   
exports.getAlert = function( iLightNumber ){            client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.alert !== undefined      ){ return err;} sArrayLightAlert[iLightNumber] = result.state.alert;                 }); };   
exports.getColormode = function( iLightNumber ){        client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.colormode !== undefined  ){ return err;} sArrayLightColorMode[iLightNumber] = result.state.colormode;         }); };   
exports.getReachable = function( iLightNumber ){        client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.reachable !== undefined  ){ return err;} bArrayLightReachable[iLightNumber] = result.state.reachable;         }); };   


/** setValue **/
exports.setOn = function( iLightNumber,bValue){             client.setLightState( iLightNumber, { "on": bValue },                    function( err, result ){ if ( err ) return err; }); };
exports.setOff = function( iLightNumber ){                  client.setLightState( iLightNumber, { "on": false },                     function( err, result ){ if ( err ) return err; }); };                                       
exports.setBri = function( iLightNumber,iValue){            client.setLightState( iLightNumber, { "bri": iValue },                   function( err, result ){ if ( err ) return err; }); };
exports.setBriDec = function( iLightNumber,iValue){         client.setLightState( iLightNumber, { "bri_inc": -iValue },              function( err, result ){ if ( err ) return err; }); };
exports.setBriInc = function( iLightNumber,iValue){         client.setLightState( iLightNumber, { "bri_inc": iValue },               function( err, result ){ if ( err ) return err; }); };
exports.setHue = function( iLightNumber,iValue){            client.setLightState( iLightNumber, { "hue": iValue },                   function( err, result ){ if ( err ) return err; }); };
exports.setHueDec = function( iLightNumber,iValue){         client.setLightState( iLightNumber, { "hue_inc": -iValue },              function( err, result ){ if ( err ) return err; }); };
exports.setHueInc = function( iLightNumber,iValue){         client.setLightState( iLightNumber, { "hue_inc": iValue },               function( err, result ){ if ( err ) return err; }); };
exports.setSat = function( iLightNumber,iValue){            client.setLightState( iLightNumber, { "sat": iValue },                   function( err, result ){ if ( err ) return err; }); };
exports.setSatDec = function( iLightNumber,iValue){         client.setLightState( iLightNumber, { "sat_inc": -iValue },              function( err, result ){ if ( err ) return err; }); };
exports.setSatInc = function( iLightNumber,iValue){         client.setLightState( iLightNumber, { "sat_inc": iValue },               function( err, result ){ if ( err ) return err; }); };
exports.setEffect = function( iLightNumber,sValue){         client.setLightState( iLightNumber, { "effect": sValue },                function( err, result ){ if ( err ) return err; }); };
exports.setXy = function( iLightNumber,fValue1,fValue2){    client.setLightState( iLightNumber, { "xy": [fValue1, fValue2] },        function( err, result ){ if ( err ) return err; }); };
exports.setXyDec = function( iLightNumber,fValue){          client.setLightState( iLightNumber, { "xy_inc": [-fValue, -fValue] },    function( err, result ){ if ( err ) return err; }); };
exports.setXyInc = function( iLightNumber,fValue){          client.setLightState( iLightNumber, { "xy_inc": [fValue, fValue] },      function( err, result ){ if ( err ) return err; }); };
exports.setCt = function( iLightNumber,iValue){             client.setLightState( iLightNumber, { "ct": iValue },                    function( err, result ){ if ( err ) return err; }); };
exports.setAlert = function( iLightNumber,sValue){          client.setLightState( iLightNumber, { "alert": sValue },                 function( err, result ){ if ( err ) return err; }); };
exports.setAlertNone = function( iLightNumber ){            client.setLightState( iLightNumber, { "alert": `none` },                 function( err, result ){ if ( err ) return err; }); };
exports.setAlertSelect = function( iLightNumber ){          client.setLightState( iLightNumber, { "alert": `select` },               function( err, result ){ if ( err ) return err; }); };
exports.setAlertLSelect = function( iLightNumber ){         client.setLightState( iLightNumber, { "alert": `lselect` },              function( err, result ){ if ( err ) return err; }); };
exports.setColormode = function( iLightNumber,sValue){      client.setLightState( iLightNumber, { "colormode": sValue },             function( err, result ){ if ( err ) return err; }); };
exports.setReachable = function( iLightNumber,bValue){      client.setLightState( iLightNumber, { "reachable": bValue },             function( err, result ){ if ( err ) return err; }); };
exports.setTransitionTime = function( iLightNumber,iValue){ client.setLightState( iLightNumber, { "transitiontime": iValue },        function( err, result ){ if ( err ) return err; }); };

exports.setInfo = function( iLightNumber,sTarget,SomeValue){
    //Temp Cleanup
    sTarget = sTarget.toLowerCase();
    fValue = SomeValue;
    iValue = SomeValue;
    sValue = SomeValue;
    
    if ( sTarget === "on" ){                        light.setOn( iLightNumber,iValue);
        } else if ( sTarget === "bri" ){            light.setBri( iLightNumber,iValue);
        } else if ( sTarget === "hue" ){            light.setHue( iLightNumber,iValue);
        } else if ( sTarget === "sat" ){            light.setSat( iLightNumber,iValue);
        } else if ( sTarget === "effect" ){         light.setEffect( iLightNumber,sValue);
        } else if ( sTarget === "xy" ){             light.setXy( iLightNumber,fValue);
        } else if ( sTarget === "xyx" ){            light.setXyX( iLightNumber,fValue);
        } else if ( sTarget === "xyy" ){            light.setXyY( iLightNumber,fValue);
        } else if ( sTarget === "ct" ){             light.setCt( iLightNumber,iValue);
        } else if ( sTarget === "alert" ){          light.setAlert( iLightNumber,sValue);            
        } else if ( sTarget === "colormode" ){      light.setColormode( iLightNumber,iValue);
        } else if ( sTarget === "reachable" ){      light.setReachable( iLightNumber,bValue);
        } else if ( sTarget === "transitiontime" ){ light.setTransitionTime( iLightNumber,iValue);
    }
}


//Variable export naar disk
//    if (!fs.existsSync(pathresources + "/hue/light/.values/" + iLightNumber + "/state")) {
//      exec("/bin/mkdir -p " + pathresources + "/hue/light/.values/" + iLightNumber + "/state" );
//    }
//    exec("/bin/echo '" + `${result.manufacturername}` + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/manufacturername" );    
//    exec("/bin/echo '" + result.productname + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/productname" );                   
//    exec("/bin/echo '" + result.modelid + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/modelid" );                           
//    exec("/bin/echo '" + result.name + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/name" );                                 
//    exec("/bin/echo '" + result.swversion + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/swversion" );                       
//    exec("/bin/echo '" + result.type + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/type" );                                 
//    exec("/bin/echo '" + result.uniqueid + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/uniqueid" );                         
//    exec("/bin/echo '" + result.state.on + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/on" );                         
//    exec("/bin/echo '" + result.state.bri + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/bri" );                       
//    exec("/bin/echo '" + result.state.hue + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/hue" );                       
//    exec("/bin/echo '" + result.state.sat + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/sat" );                       
//    exec("/bin/echo '" + result.state.effect + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/effect" );                 
//    exec("/bin/echo '" + result.state.xy + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/xy/xy" );                      
//    exec("/bin/echo '" + result.state.xy[0] + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/xy/x" );                    
//    exec("/bin/echo '" + result.state.xy[1] + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/xy/y" );                    
//    exec("/bin/echo '" + result.state.ct + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/ct" );                         
//    exec("/bin/echo '" + result.state.alert + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/alert" );                   
//    exec("/bin/echo '" + result.state.colormode + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/colormode" );           
//    exec("/bin/echo '" + result.state.reachable + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/reachable" );           


//Variable import van disk
//    exec("/bin/cat '" + `${result.manufacturername}` + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/manufacturername" );    
//    exec("/bin/cat '" + result.productname + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/productname" );                   
//    exec("/bin/cat '" + result.modelid + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/modelid" );                           
//    exec("/bin/cat '" + result.name + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/name" );                                 
//    exec("/bin/cat '" + result.swversion + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/swversion" );                       
//    exec("/bin/cat '" + result.type + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/type" );                                 
//    exec("/bin/cat '" + result.uniqueid + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/uniqueid" );                         
//    exec("/bin/cat '" + result.state.on + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/on" );                         
//    exec("/bin/cat '" + result.state.bri + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/bri" );                       
//    exec("/bin/cat '" + result.state.hue + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/hue" );                       
//    exec("/bin/cat '" + result.state.sat + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/sat" );                       
//    exec("/bin/cat '" + result.state.effect + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/effect" );                 
//    exec("/bin/cat '" + result.state.xy + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/xy/xy" );                      
//    exec("/bin/cat '" + result.state.xy[0] + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/xy/x" );                    
//    exec("/bin/cat '" + result.state.xy[1] + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/xy/y" );                    
//    exec("/bin/cat '" + result.state.ct + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/ct" );                         
//    exec("/bin/cat '" + result.state.alert + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/alert" );                   
//    exec("/bin/cat '" + result.state.colormode + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/colormode" );           
//    exec("/bin/cat '" + result.state.reachable + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/reachable" );           


////Variable zetten       setValue
//    sArrayLightManufacturerName[iLightNumber] = result.manufacturername;
//    sArrayLightProductname[iLightNumber] = result.productname;          
//    sArrayLightModelid[iLightNumber] = result.modelid;                  
//    sArrayLightName[iLightNumber] = result.name;                        
//    sArrayLightSwversion[iLightNumber] = result.swversion;              
//    sArrayLightType[iLightNumber] = result.type;                        
//    sArrayLightUniqueid[iLightNumber] = result.uniqueid;                
//    bArrayLightOn[iLightNumber] = result.state.on;                      
//    iArrayLightBriCur[iLightNumber] = result.state.bri;                 
//    iArrayLightHueCur[iLightNumber] = result.state.hue;                 
//    iArrayLightSatCur[iLightNumber] = result.state.sat;                 
//    sArrayLightEffect[iLightNumber] = result.state.effect;              
//    fArrayLightXyCur[iLightNumber] = result.state.xy;                   
//    fArrayLightXyXCur[iLightNumber] = result.state.xy[0];               
//    fArrayLightXyYCur[iLightNumber] = result.state.xy[1];               
//    iArrayLightCtCur[iLightNumber] = result.state.ct;                   
//    sArrayLightAlert[iLightNumber] = result.state.alert;                
//    sArrayLightColorMode[iLightNumber] = result.state.colormode;        
//    bArrayLightReachable[iLightNumber] = result.state.reachable;        

////Variable bekijken     getValue

//    bValue = typeof bValue !== undefined ? bValue : true;       if ( debug ){ console.log(result); }; }); };
//                                                                if ( debug ){ console.log(result); }; }); };                                                                                                                                                                                           
//    iValue = typeof iValue !== undefined ? iValue : 255;        if ( debug ){ console.log(result); }; }); };
//    iValue = typeof iValue !== undefined ? iValue : 1;          if ( debug ){ console.log(result); }; }); };
//    iValue = typeof iValue !== undefined ? iValue : 1;          if ( debug ){ console.log(result); }; }); };
//    iValue = typeof iValue !== undefined ? iValue : 255;        if ( debug ){ console.log(result); }; }); };
//    iValue = typeof iValue !== undefined ? iValue : 1;          if ( debug ){ console.log(result); }; }); };
//    iValue = typeof iValue !== undefined ? iValue : 1;          if ( debug ){ console.log(result); }; }); };
//    iValue = typeof iValue !== undefined ? iValue : 255;        if ( debug ){ console.log(result); }; }); };
//    iValue = typeof iValue !== undefined ? iValue : 1;          if ( debug ){ console.log(result); }; }); };
//    iValue = typeof iValue !== undefined ? iValue : 1;          if ( debug ){ console.log(result); }; }); };
//    sValue = typeof sValue !== undefined ? sValue : 'none';     if ( debug ){ console.log(result); }; }); };
//                                                                if ( debug ){ console.log(result); }; }); };
//    fValue = typeof fValue !== undefined ? fValue : 0.1;        if ( debug ){ console.log(result); }; }); };
//    fValue = typeof fValue !== undefined ? fValue : 0.1;        if ( debug ){ console.log(result); }; }); };
//                                                                if ( debug ){ console.log(result); }; }); };
//    sValue = typeof sValue !== undefined ? sValue : 'none';     if ( debug ){ console.log(result); }; }); };
//                                                                if ( debug ){ console.log(result); }; }); };        //“none” – The light is not performing an alert effect.
//                                                                if ( debug ){ console.log(result); }; }); };        //“select” – The light is performing one breathe cycle.
//                                                                if ( debug ){ console.log(result); }; }); };        //“lselect” – The light is performing breathe cycles for 15 seconds or until an "alert": "none" command is received.
//    sValue = typeof sValue !== undefined ? sValue : 'hs';       if ( debug ){ console.log(result); }; }); };
//                                                                if ( debug ){ console.log(result); }; }); };
//    sValue = typeof sValue !== undefined ? sValue : 1;          if ( debug ){ console.log(result); }; }); };

//if ( sTarget === "on" ){                        light.setOn(              iLightNumber,bArrayLightOn[iLightNumber]);
//} else if ( sTarget === "bri" ){            light.setBri(             iLightNumber,iArrayLightBriCur[iLightNumber]);
//} else if ( sTarget === "hue" ){            light.setHue(             iLightNumber,iArrayLightHueCur[iLightNumber]);
//} else if ( sTarget === "sat" ){            light.setSat(             iLightNumber,iArrayLightSatCur[iLightNumber]);
//} else if ( sTarget === "effect" ){         light.setEffect(          iLightNumber,sArrayLightEffect[iLightNumber]);
//} else if ( sTarget === "xy" ){             light.setXy(              iLightNumber,fArrayLightXyCur[iLightNumber]);
//} else if ( sTarget === "xyx" ){            light.setXyX(             iLightNumber,fArrayLightXyXCur[iLightNumber]);
//} else if ( sTarget === "xyy" ){            light.setXyY(             iLightNumber,fArrayLightXyYCur[iLightNumber]);
//} else if ( sTarget === "ct" ){             light.setCt(              iLightNumber,iArrayLightCtCur[iLightNumber]);
//} else if ( sTarget === "alert" ){          light.setAlert(           iLightNumber,sArrayLightAlert[iLightNumber]);            
//} else if ( sTarget === "colormode" ){      light.setColormode(       iLightNumber,sArrayLightColorMode[iLightNumber]);
//} else if ( sTarget === "reachable" ){      light.setReachable(       iLightNumber,bArrayLightReachable[iLightNumber]);
//} else if ( sTarget === "transitiontime" ){ light.setTransitionTime(  iLightNumber,iArrayLightTransitionTime[iLightNumber]);
//}
//






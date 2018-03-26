#!/usr/bin/env node

debug = false;


exports.getManufacturerName = function( iLightNumber ){ client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.manufacturername === undefined ) return err;    exec("/bin/echo '" + `${result.manufacturername}` + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/manufacturername" );   sArrayLightManufacturerName[iLightNumber] = result.manufacturername;    });};    //if ( debug ){ console.log(`    Manufacturername: ${result.manufacturername}`);};});};
exports.getProductName = function( iLightNumber ){      client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.productname === undefined ) return err;         exec("/bin/echo '" + result.productname + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/productname" );             sArrayLightProductname[iLightNumber] = result.productname;              });};    //if ( debug ){ console.log(`    ProductName:      ${result.productname}`);};});};
exports.getModelId = function( iLightNumber ){          client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.modelid === undefined ) return err;             exec("/bin/echo '" + result.modelid + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/modelid" );                     sArrayLightModelid[iLightNumber] = result.modelid;                      });};    //if ( debug ){ console.log(`    ModelId:          ${result.modelid}`);};});};
exports.getName = function( iLightNumber ){             client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.name === undefined ) return err;                exec("/bin/echo '" + result.name + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/name" );                           sArrayLightName[iLightNumber] = result.name;                            });};    //if ( debug ){ console.log(`    Name:             ${result.name}`);};});};
exports.getSwVersion = function( iLightNumber ){        client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.swversion === undefined ) return err;           exec("/bin/echo '" + result.swversion + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/swversion" );                 sArrayLightSwversion[iLightNumber] = result.swversion;                  });};    //if ( debug ){ console.log(`    Swversion:        ${result.swversion}`);};});};
exports.getType = function( iLightNumber ){             client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.type === undefined ) return err;                exec("/bin/echo '" + result.type + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/type" );                           sArrayLightType[iLightNumber] = result.type;                            });};    //if ( debug ){ console.log(`    Type:             ${result.type}`);};});};
exports.getUniqueid = function( iLightNumber ){         client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.uniqueid === undefined ) return err;            exec("/bin/echo '" + result.uniqueid + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/uniqueid" );                   sArrayLightUniqueid[iLightNumber] = result.uniqueid;                    });};    //if ( debug ){ console.log(`    Uniqueid:         ${result.uniqueid}`);};});};
                                                                                                                                                                                           
exports.getOn = function( iLightNumber ){               client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.on === undefined ) return err;            exec("/bin/echo '" + result.state.on + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/on" );                   bArrayLightOn[iLightNumber] = result.state.on;                          });};    //if ( debug ){ console.log(`    On:               ${result.state.on}`);};});};
exports.getBri = function( iLightNumber ){              client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.bri === undefined ) return err;           exec("/bin/echo '" + result.state.bri + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/bri" );                 iArrayLightBriCur[iLightNumber] = result.state.bri;                     });};    //if ( debug ){ console.log(`    Bri:              ${result.state.bri}`);};});};
exports.getHue = function( iLightNumber ){              client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.hue === undefined ) return err;           exec("/bin/echo '" + result.state.hue + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/hue" );                 iArrayLightHueCur[iLightNumber] = result.state.hue;                     });};    //if ( debug ){ console.log(`    Hue:              ${result.state.hue}`);};});}; //10250
exports.getSat = function( iLightNumber ){              client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.sat === undefined ) return err;           exec("/bin/echo '" + result.state.sat + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/sat" );                 iArrayLightSatCur[iLightNumber] = result.state.sat;                     });};    //if ( debug ){ console.log(`    Sat:              ${result.state.sat}`);};});};
exports.getEffect = function( iLightNumber ){           client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.effect === undefined ) return err;        exec("/bin/echo '" + result.state.effect + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/effect" );           sArrayLightEffect[iLightNumber] = result.state.effect;                  });};    //if ( debug ){ console.log(`    Effect:           ${result.state.effect}`);};});};
exports.getXy = function( iLightNumber ){               client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.xy === undefined ) return err;            exec("/bin/echo '" + result.state.xy + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/xy/xy" );                fArrayLightXyCur[iLightNumber] = result.state.xy;                       });};    //if ( debug ){ console.log(`    Xy:               ${result.state.xy}`);};});};
exports.getXyX = function( iLightNumber ){              client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.xy[0] === undefined ) return err;         exec("/bin/echo '" + result.state.xy[0] + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/xy/x" );              fArrayLightXyXCur[iLightNumber] = result.state.xy[0];                   });};    //if ( debug ){ console.log(`    XyX:              ${result.state.xy[0]}`);};});};
exports.getXyY = function( iLightNumber ){              client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.xy[1] === undefined ) return err;         exec("/bin/echo '" + result.state.xy[1] + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/xy/y" );              fArrayLightXyYCur[iLightNumber] = result.state.xy[1];                   });};    //if ( debug ){ console.log(`    XyY:              ${result.state.xy[1]}`);};});};
exports.getCt = function( iLightNumber ){               client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.ct === undefined ) return err;            exec("/bin/echo '" + result.state.ct + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/ct" );                   iArrayLightCtCur[iLightNumber] = result.state.ct;                       });};    //if ( debug ){ console.log(`    Ct:               ${result.state.ct}`);};});};
exports.getAlert = function( iLightNumber ){            client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.alert === undefined ) return err;         exec("/bin/echo '" + result.state.alert + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/alert" );             sArrayLightAlert[iLightNumber] = result.state.alert;                    });};    //if ( debug ){ console.log(`    Alert:            ${result.state.alert}`);};});};
exports.getColormode = function( iLightNumber ){        client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.colormode === undefined ) return err;     exec("/bin/echo '" + result.state.colormode + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/colormode" );     sArrayLightColorMode[iLightNumber] = result.state.colormode;            });};    //if ( debug ){ console.log(`    Colormode:        ${result.state.colormode}`);};});};
exports.getReachable = function( iLightNumber ){        client.getLight( iLightNumber, function( err, result ){ if ( err || typeof result.state.reachable === undefined ) return err;     exec("/bin/echo '" + result.state.reachable + "' > " + pathresources + "/hue/light/.values/" + iLightNumber + "/state/reachable" );     bArrayLightReachable[iLightNumber] = result.state.reachable;            });};    //if ( debug ){ console.log(`    Reachable:        ${result.state.reachable}`);};});};

exports.fetchInfo = function(){
  //process.stdout.write('\n' + " Fetch Light Info...");
  for ( x = 0; x < iArrayLightConnected.length; x++ ){ 
    //process.stdout.write(" #" + x + "...");
    light.getInfo(iArrayLightConnected[x]);
  }
}

exports.getInfo = function( iLightNumber,sValue){
            
    if ( sValue === "manufacturername" ){               light.getManufacturerName( iLightNumber );
    } else if ( sValue === "modelid" ){                 light.getModelId( iLightNumber );
    } else if ( sValue === "manufacturername" ){        light.getManufacturerName( iLightNumber );
    } else if ( sValue === "modelid" ){                 light.getModelId( iLightNumber );
    } else if ( sValue === "name" ){                    light.getName( iLightNumber );
    } else if ( sValue === "swversion" ){               light.getSwVersion( iLightNumber );
    } else if ( sValue === "type" ){                    light.getType( iLightNumber );
    } else if ( sValue === "uniqueid" ){                light.getUniqueid( iLightNumber );
        
    } else if ( sValue === "on" ){                      light.getOn( iLightNumber );
    } else if ( sValue === "bri" ){                     light.getBri( iLightNumber );            
    } else if ( sValue === "hue" ){                     light.getHue( iLightNumber );
    } else if ( sValue === "sat" ){                     light.getSat( iLightNumber );
    } else if ( sValue === "effect" ){                  light.getEffect( iLightNumber );
    } else if ( sValue === "xy" ){                      light.getXy( iLightNumber );
    } else if ( sValue === "ct" ){                      light.getCt( iLightNumber );
    } else if ( sValue === "alert" ){                   light.getAlert( iLightNumber );
    } else if ( sValue === "colormode" ){               light.getColormode( iLightNumber );
    } else if ( sValue === "reachable" ){               light.getReachable( iLightNumber );
    
    //Output all attributes found
    } else { 
    
        //if (fs.existsSync("./" + pathresources + iLightNumber)) {
        //  //  exec("/bin/echo '1' > ./mapgevonden" );
        //} else {
        //      //exec("/bin/echo '0' > ./mapgevonden" );
        //}

        if (!fs.existsSync(pathresources + "/hue/light/.values/" + iLightNumber + "/state")) {
                exec("/bin/mkdir -p " + pathresources + "/hue/light/.values/" + iLightNumber + "/state" );
        }
        
        //exec("/bin/mkdir ./" + pathresources + iLightNumber + "/state/" );    
    
        client.getLight( iLightNumber, function( err, result ){ 
    
            //if ( err) throw err;
            if ( err || result === undefined || result.state === undefined ) return err;
            
            if ( debug ){ console.log('General:'); };
            if ( typeof result.manufacturername !== undefined ){ light.getManufacturerName( iLightNumber );     sArrayLightManufacturerName[iLightNumber] = result.manufacturername;  };    //    if ( debug ){ console.log(`    Manufacturername: ${result.manufacturername}`)}; };
            if ( typeof result.productname !== undefined ){      light.getModelId( iLightNumber );              sArrayLightProductname[iLightNumber] = result.productname;            };    //    if ( debug ){ console.log(`    ProductName:      ${result.productname}`)}; };
            if ( typeof result.modelid !== undefined ){          light.getModelId( iLightNumber );              sArrayLightModelid[iLightNumber] = result.modelid;                    };    //    if ( debug ){ console.log(`    ModelId:          ${result.modelid}`)}; };
            if ( typeof result.name !== undefined ){             light.getName( iLightNumber );                 sArrayLightName[iLightNumber] = result.name;                          };    //    if ( debug ){ console.log(`    Name:             ${result.name}`)}; };
            if ( typeof result.swversion !== undefined ){        light.getSwVersion( iLightNumber );            sArrayLightSwversion[iLightNumber] = result.swversion;                };    //    if ( debug ){ console.log(`    Swversion:        ${result.swversion}`)}; };
            if ( typeof result.type !== undefined ){             light.getType( iLightNumber );                 sArrayLightType[iLightNumber] = result.type;                          };    //    if ( debug ){ console.log(`    Type:             ${result.type}`)}; };
            if ( typeof result.uniqueid !== undefined ){         light.getUniqueid( iLightNumber );             sArrayLightUniqueid[iLightNumber] = result.uniqueid;                  };    //    if ( debug ){ console.log(`    Uniqueid:         ${result.uniqueid}`)}; };
                                                                                                                                                    
            if ( debug ){ console.log('State:'); };                                                                                                  
            if ( typeof result.state.on !== undefined ){         light.getOn( iLightNumber );                   bArrayLightOn[iLightNumber] = result.state.on;                        };    //    if ( debug ){ console.log('On:' + "               " + result.state.on )}; };
            if ( typeof result.state.bri !== undefined ){        light.getBri( iLightNumber );                  iArrayLightBriCur[iLightNumber] = result.state.bri;                   };    //    if ( debug ){ console.log(`    Bri:              ${result.state.bri}`)}; };
            if ( typeof result.state.hue !== undefined ){        light.getHue( iLightNumber );                  iArrayLightHueCur[iLightNumber] = result.state.hue;                   };    //    if ( debug ){ console.log(`    Hue:              ${result.state.hue}`)}; }; //10250
            if ( typeof result.state.sat !== undefined ){        light.getSat( iLightNumber );                  iArrayLightSatCur[iLightNumber] = result.state.sat;                   };    //    if ( debug ){ console.log(`    Sat:              ${result.state.sat}`)}; };
            if ( typeof result.state.effect !== undefined ){     light.getEffect( iLightNumber );               sArrayLightEffect[iLightNumber] = result.state.effect;                };    //    if ( debug ){ console.log(`    Effect:           ${result.state.effect}`)}; };
            if ( typeof result.state.xy !== undefined ){         light.getXy( iLightNumber );                   fArrayLightXyCur[iLightNumber] = result.state.xy;                     };    //    if ( debug ){ console.log(`    Status:           ${result.state.xy}`)}; };
            if ( typeof result.state.xy[0] !== undefined ){      light.getXyX( iLightNumber );                   fArrayLightXyXCur[iLightNumber] = result.state.xy[0];                 };    //    if ( debug ){ console.log(`    Status:           ${result.state.xy[0]}`)}; };           
            if ( typeof result.state.xy[1] !== undefined ){      light.getXyY( iLightNumber );                   fArrayLightXyYCur[iLightNumber] = result.state.xy[1];                 };    //    if ( debug ){ console.log(`    Status:           ${result.state.xy[1]}`)}; };
                                                                                                                
                                                                                                                
            if ( typeof result.state.ct !== undefined ){          light.getCt( iLightNumber );                  iArrayLightCtCur[iLightNumber] = result.state.ct;                     };    //    if ( debug ){ console.log(`    Ct:               ${result.state.ct}`)}; };
            if ( typeof result.state.alert !== undefined ){       light.getAlert( iLightNumber );               sArrayLightAlert[iLightNumber] = result.state.alert;                  };    //    if ( debug ){ console.log(`    Alert:            ${result.state.alert}`)}; };
            if ( typeof result.state.colormode !== undefined ){   light.getColormode( iLightNumber );           sArrayLightColorMode[iLightNumber] = result.state.colormode;          };    //    if ( debug ){ console.log(`    Colormode:        ${result.state.colormode}`)}; };
            if ( typeof result.state.reachable !== undefined ){   light.getReachable( iLightNumber );           bArrayLightReachable[iLightNumber] = result.state.reachable;          };    //    if ( debug ){ console.log(`    Reachable:        ${result.state.reachable}`)}; };
        });
    }
}




exports.setOn = function( iLightNumber,bValue){                 bValue = typeof bValue !== undefined ? bValue : true;  client.setLightState( iLightNumber, { "on": bValue },                    function( err, result ){ if ( err) return err;     }); };    //    if ( debug ){ console.log(result); }; }); };
exports.setOff = function( iLightNumber ){                                                                             client.setLightState( iLightNumber, { "on": false },                     function( err, result ){ if ( err) return err;     }); };    //    if ( debug ){ console.log(result); }; }); };
                                                                                                                                                                                                                                            
exports.setBri = function( iLightNumber,iValue){               iValue = typeof iValue !== undefined ? iValue : 255;    client.setLightState( iLightNumber, { "bri": iValue },                   function( err, result ){ if ( err) return err;     }); };    //    if ( debug ){ console.log(result); }; }); };
exports.setBriDec = function( iLightNumber,iValue){            iValue = typeof iValue !== undefined ? iValue : 1;      client.setLightState( iLightNumber, { "bri_inc": -iValue },              function( err, result ){ if ( err) return err;     }); };    //    if ( debug ){ console.log(result); }; }); };
exports.setBriInc = function( iLightNumber,iValue){            iValue = typeof iValue !== undefined ? iValue : 1;      client.setLightState( iLightNumber, { "bri_inc": iValue },               function( err, result ){ if ( err) return err;     }); };    //    if ( debug ){ console.log(result); }; }); };
exports.setHue = function( iLightNumber,iValue){               iValue = typeof iValue !== undefined ? iValue : 255;    client.setLightState( iLightNumber, { "hue": iValue },                   function( err, result ){ if ( err) return err;     }); };    //    if ( debug ){ console.log(result); }; }); };
exports.setHueDec = function( iLightNumber,iValue){            iValue = typeof iValue !== undefined ? iValue : 1;      client.setLightState( iLightNumber, { "hue_inc": -iValue },              function( err, result ){ if ( err) return err;     }); };    //    if ( debug ){ console.log(result); }; }); };
exports.setHueInc = function( iLightNumber,iValue){            iValue = typeof iValue !== undefined ? iValue : 1;      client.setLightState( iLightNumber, { "hue_inc": iValue },               function( err, result ){ if ( err) return err;     }); };    //    if ( debug ){ console.log(result); }; }); };
exports.setSat = function( iLightNumber,iValue){               iValue = typeof iValue !== undefined ? iValue : 255;    client.setLightState( iLightNumber, { "sat": iValue },                   function( err, result ){ if ( err) return err;     }); };    //    if ( debug ){ console.log(result); }; }); };
exports.setSatDec = function( iLightNumber,iValue){            iValue = typeof iValue !== undefined ? iValue : 1;      client.setLightState( iLightNumber, { "sat_inc": -iValue },              function( err, result ){ if ( err) return err;     }); };    //    if ( debug ){ console.log(result); }; }); };
exports.setSatInc = function( iLightNumber,iValue){            iValue = typeof iValue !== undefined ? iValue : 1;      client.setLightState( iLightNumber, { "sat_inc": iValue },               function( err, result ){ if ( err) return err;     }); };    //    if ( debug ){ console.log(result); }; }); };
exports.setEffect = function( iLightNumber,sValue){            sValue = typeof sValue !== undefined ? sValue : 'none'; client.setLightState( iLightNumber, { "effect": sValue },                function( err, result ){ if ( err) return err;     }); };    //    if ( debug ){ console.log(result); }; }); };
exports.setXy = function( iLightNumber,fValue1,fValue2){                                                               client.setLightState( iLightNumber, { "xy": [fValue1, fValue2] },        function( err, result ){ if ( err) return err;     }); };    //    if ( debug ){ console.log(result); }; }); };
exports.setXyDec = function( iLightNumber,fValue){             fValue = typeof fValue !== undefined ? fValue : 0.1;    client.setLightState( iLightNumber, { "xy_inc": [-fValue, -fValue] },    function( err, result ){ if ( err) return err;     }); };    //    if ( debug ){ console.log(result); }; }); };
exports.setXyInc = function( iLightNumber,fValue){             fValue = typeof fValue !== undefined ? fValue : 0.1;    client.setLightState( iLightNumber, { "xy_inc": [fValue, fValue] },      function( err, result ){ if ( err) return err;     }); };    //    if ( debug ){ console.log(result); }; }); };
exports.setCt = function( iLightNumber,iValue){                                                                        client.setLightState( iLightNumber, { "ct": iValue },                    function( err, result ){ if ( err) return err;     }); };    //    if ( debug ){ console.log(result); }; }); };
exports.setAlert = function( iLightNumber,sValue){             sValue = typeof sValue !== undefined ? sValue : 'none'; client.setLightState( iLightNumber, { "alert": sValue },                 function( err, result ){ if ( err) return err;     }); };    //    if ( debug ){ console.log(result); }; }); };
exports.setAlertNone = function( iLightNumber ){                                                                       client.setLightState( iLightNumber, { "alert": `none` },                 function( err, result ){ if ( err) return err;     }); };    //    if ( debug ){ console.log(result); }; }); };        //“none” – The light is not performing an alert effect.
exports.setAlertSelect = function( iLightNumber ){                                                                     client.setLightState( iLightNumber, { "alert": `select` },               function( err, result ){ if ( err) return err;     }); };    //    if ( debug ){ console.log(result); }; }); };        //“select” – The light is performing one breathe cycle.
exports.setAlertLSelect = function( iLightNumber ){                                                                    client.setLightState( iLightNumber, { "alert": `lselect` },              function( err, result ){ if ( err) return err;     }); };    //    if ( debug ){ console.log(result); }; }); };        //“lselect” – The light is performing breathe cycles for 15 seconds or until an "alert": "none" command is received.
exports.setColormode = function( iLightNumber,sValue){         sValue = typeof sValue !== undefined ? sValue : 'hs';   client.setLightState( iLightNumber, { "colormode": sValue },             function( err, result ){ if ( err) return err;     }); };    //    if ( debug ){ console.log(result); }; }); };
exports.setReachable = function( iLightNumber,bValue){                                                                 client.setLightState( iLightNumber, { "reachable": bValue },             function( err, result ){ if ( err) return err;     }); };    //    if ( debug ){ console.log(result); }; }); };
exports.setTransitionTime = function( iLightNumber,iValue){    sValue = typeof sValue !== undefined ? sValue : 1;      client.setLightState( iLightNumber, { "transitiontime": iValue },        function( err, result ){ if ( err) return err;     }); };    //    if ( debug ){ console.log(result); }; }); };



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

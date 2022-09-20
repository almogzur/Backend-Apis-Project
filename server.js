//GreenLock  wrapps the express app and serve it after encrypting the trafic

/////////////// HTTPS  /////////////
"use strict";
const MainEx = require("./MainEx.js");
const greenlock = require("greenlock-express") 
   greenlock
    .init({
        packageRoot: __dirname,
        configDir: "./greenlock.d",
        maintainerEmail:"almngzur1@gmail.com",
        cluster: false
    })
    .serve(MainEx); // the warpe 

/////////////// HTTPS END ////////////////

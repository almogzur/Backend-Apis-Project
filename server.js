//GreenLock  wrapps the express app and serve it after encrypting the trafic

/////////////// HTTPS  /////////////
"use strict";
const expressServer = require("./expressServer.js");
const greenlock = require("greenlock-express") 
   greenlock
    .init({
        packageRoot: __dirname,
        configDir: "./greenlock.d",
        maintainerEmail:"almngzur1@gmail.com",
        cluster: false
    })
    .serve(expressServer); // the warpe 

/////////////// HTTPS END ////////////////

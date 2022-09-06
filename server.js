//this wrapp the express app

/////////////// HTTPS  /////////////
"use strict";
const { dirname } = require('path');
const pkg = require('./package.json');
const expressServer = require("./expressServer.js");
const greenlock = require("greenlock-express") 
var defaults = await greenlock.defaults();
   greenlock
    .init({
        packageRoot: __dirname,
        configDir: "./greenlock.d",
        maintainerEmail:pkg.author,
        cluster: false
    })
    .serve(expressServer); // the warpe 



/////////////// HTTPS END ////////////////

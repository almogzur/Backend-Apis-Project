/////////////// HTTPS  /////////////
"use strict";
const { dirname } = require('path');
const pkg = require('./package.json');
const expressServer = require("./app.js");
const greenlock = require("greenlock-express") 
   greenlock
    .init({
        // where to find .greenlockrc and set default paths
        packageRoot: __dirname,
        // where config and certificate stuff go
        configDir: "./greenlock.d",
        // contact for security and critical bug notices
        maintainerEmail: "almogzur1@gmail.com",
        // name & version for ACME client user agent
        //packageAgent: pkg.name + "/" + pkg.version,
        // whether or not to run at cloudscale
        cluster: false
    })
    .serve(expressServer);



/////////////// HTTPS END ////////////////

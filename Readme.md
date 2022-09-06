  inst  == install  all packages 
    (npm i && cd front && npm i && npm run build  )

  Reactdev -- work on react env only 
     cd front && npm run build && npm run start

  Exdev  -- work on Express env only creat react build 
     nodemon --inspect ./expressServer.js // for auto dyploy changes 

  devenv // runing both servers 

    concurrently "npm run Reactdev" "npm run Exdev"

  server
    npm start --staging (greenlock http auto https quto cert) run Http server => Ex servr =>react build 

    repo link gh repo clone almogzur/Https-Time-Server-
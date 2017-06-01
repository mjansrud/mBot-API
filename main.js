'use strict';

/*

    mBot backend server
    Written by Morten Jansrud

 */

//variables
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

//Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Starts the rest API
function startApi(){

    console.log("Starting API");

    //Modules
    require('./routes')(app);
    require('./utilities/pononiex');

    //Start spawning bots
    var supervior = require('./bot/supervisor');
    supervior.spawnBots();

    /*

     Start server

     */

    var server = app.listen(process.env.NODE_ENV_SERVER_PORT, function() {
        console.log('Welcome to mBot-API, listening on port ' + server.address().port);
    });

}

//Start the cluster of workers
function startWorkers(){

    console.log("Starting workers");

    /*

     Start worker

     */

    require('./bot/workers').startWorkers();

}

switch (process.argv[process.argv.length - 1]) {

    case 'api':
        startApi();
        break;
    case 'worker':
        startWorkers();
        break;
    default:
        console.log(`
          ~~~~~~~~~~~~~~~~~~~~~~~~~
                  ~~ mBOT ~~
          ~~~~~~~~~~~~~~~~~~~~~~~~~
    
          Argument must be one of the following:
    
          api - Starts the rest server
          worker - Runs workers for async tasks
        `);
        process.exit(1);
        break;

}


module.exports = app;
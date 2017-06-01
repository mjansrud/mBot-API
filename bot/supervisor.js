/**
 * Created by jansrud on 29.05.2017.
 */

//Includes
var sqs = require('../utilities/sqs');

/*
 mBot core
 The supervisior - spawns workers when needed
 */

var supervisor = module.exports = {};

// main.js
supervisor.spawnBots = function() {

        sqs.awsConfigure();
        sqs.awsListQueues();
        sqs.awsRequestWorker();

    };

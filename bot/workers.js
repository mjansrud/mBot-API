/**
 * Created by jansrud on 29.05.2017.
 */

//Imports
const Queue = require('bull');
const sqs = require('../utilities/sqs');

//Variables
var queue = new Queue('algorithm');

/*

    Worker --
    Makes all the calculations for a single bot session

 */

var worker = module.exports = {};

// main.js
worker.startWorkers = function() {

    //Connect to AWS SQS
    sqs.awsConfigure();
    sqs.awsListQueues();

    queue.process(function(job, done){

        console.log("Job finished " + job);

        // call done when finished
        done();

        // If the job throws an unhandled exception it is also handled correctly
        throw new Error('Some unexpected error');
    });

    queue.on('completed', function(job, result){

        console.log("Job completed " + result);

    })

    setInterval(function () {

        var bot = [];
        bot.tick = 'USDT_BTC';

        console.log("Starting bot for " + bot.tick);

        queue.add({ type: 'algorithm', bot })
            .then((job) => {
                console.log(job);
                return bot;
            });

    }, 5000);

}
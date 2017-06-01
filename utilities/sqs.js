/**
 * Created by jansrud on 31.05.2017.
 */
var aws = require('aws-sdk');

var exports = module.exports = {};

exports.awsConfigure = function(){

    // Configure
    aws.config.update({
        region: process.env.NODE_ENV_SQS_REGION,
        accessKeyId: process.env.NODE_ENV_SQS_KEY,
        secretAccessKey: process.env.NODE_ENV_SQS_SECRET
    });

    // Instantiate SQS.
    sqs = new aws.SQS();

};


exports.awsListQueues = function(){

    var params = {};
    sqs.listQueues(params, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data.QueueUrls);
        }
    });

};

exports.awsRequestWorker = function(){

    var params = {
        MessageBody: 'Hello world!',
        QueueUrl: process.env.NODE_ENV_SQS_QUEUE,
        DelaySeconds: 0
    };

    sqs.sendMessage(params, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
        }
    });

};


exports.awsReceiveRequest = function(){

    var params = {
        QueueUrl: process.env.NODE_ENV_SQS_QUEUE,
        VisibilityTimeout: 600 // 10 min wait time for anyone else to process.
    };

    sqs.receiveMessage(params, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
        }
    });

};

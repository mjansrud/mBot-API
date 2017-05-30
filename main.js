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

//Modules
require('./routes')(app);
require('./utilities')(app);
require('./bot/supervisor')(app);

module.exports = app;
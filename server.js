'use strict';

//Make environmental variables available
require('dotenv').config();

/*
    Variables
 */
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

/*
    Parser
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/*
   Modules
 */

require('./routes')(app);
require('./utilities')(app);
require('./bot/supervisor')(app);

/*
    Start server
 */

app.listen(3001);
console.log('Welcome to mBot-API, listening on localhost:3001');
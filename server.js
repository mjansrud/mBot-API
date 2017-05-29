'use strict';

//Make environmental variables available
require('dotenv').config();


//Variables
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const pg = require('pg');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/*
   Modules
 */

require('./routes')(app);
require('./utilities')(app);

/*
    Listen
 */

app.listen(3001);
console.log('Welcome to mBot-API, listening on localhost:3001');
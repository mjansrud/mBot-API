'use strict';

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');
const pg = require('pg');
const path = require('path');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';
const Poloniex = require('poloniex-api-node');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: process.env.NODE_ENV_AUTH_JWKS_URL
    }),
    audience: process.env.NODE_ENV_AUTH_AUDIENCE,
    issuer: process.env.NODE_ENV_AUTH_ISSUER,
    algorithms: ['RS256']
});

/*

    Poloniex

 */

let poloniex = new Poloniex(process.env.NODE_ENV_POLONIEX_KEY, process.env.NODE_ENV_POLONIEX_SECRET, { socketTimeout: 15000 });

app.get('/api/ticker', (req,res) => {
    poloniex.returnTicker(function(err, data) {
        res.json(data);
    });
})

app.get('/api/currencies', (req,res) => {
    poloniex.returnCurrencies(function (err, data) {
        res.json(data);
    });
})

app.get('/api/trades/:pair', authCheck, (req,res) => {

})

app.get('/api/chart/:pair/:period/:start/:end', authCheck, (req,res) => {
    poloniex.returnChartData(req.params.pair, req.params.period, req.params.start, req.query.end, function (err, data) {
        res.json(data);
    });
})

app.get('/api/sessions', authCheck, (req,res) => {

})


app.listen(3001);
console.log('Welcome to mBot-API, listening on localhost:3001');
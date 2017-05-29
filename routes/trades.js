/**
 * Created by jansrud on 29.05.2017.
 */

var express = require('express')
    , jwt = require('express-jwt')
    , jwks = require('jwks-rsa')
    , Poloniex = require('poloniex-api-node')

/*
    User API
 */

var poloniex = new Poloniex(process.env.NODE_ENV_POLONIEX_KEY, process.env.NODE_ENV_POLONIEX_SECRET, { socketTimeout: 15000 });

/*
    Authentication
 */

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
    Routes
 */

module.exports = function(app){

    app.get('/api/ticker', (req,res) => {
        console.log("Ticker request");
        poloniex.returnTicker(function(err, data) {
            res.json(data);
        });

    });

    app.get('/api/currencies', (req,res) => {
        console.log("Currencies request");
        poloniex.returnCurrencies(function (err, data) {
            res.json(data);
        });
    });

    app.get('/api/trades/:pair/:start/:end' , (req,res) => {
        console.log("Trades request: " + req.params.pair);
        poloniex.returnMyTradeHistory(req.params.pair, req.params.start, req.query.end, function (err, data) {
            res.json(data);
        });
    });

    app.get('/api/chart/:pair/:period/:start/:end', (req,res) => {
        console.log("Chart request: " + req.params.pair);
        poloniex.returnChartData(req.params.pair, req.params.period, req.params.start, req.query.end, function (err, data) {
            res.json(data);
        });
    });

    app.get('/api/sessions', authCheck, (req,res) => {

    });

};

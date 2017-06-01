/**
 * Created by jansrud on 29.05.2017.
 */

var ticksController = require('../controllers').ticks;

/*

 Poloniex ----
 This module subscribes to the poloniex push api and inserts the rows into the database.

 */

var autobahn = require('autobahn');
var wsuri = "wss://api.poloniex.com";
var connection = new autobahn.Connection({
    url: wsuri,
    realm: "realm1"
});

module.exports = function(){

    connection.onopen = function (session) {

        function tickerEvent (data,kwargs) {

            console.log(data);
            ticksController.create(data);

        }

         /*
         Tick.findOne().then(tick => {
         console.log(tick.get('last'));
         });
         */

         //session.subscribe('ticker', tickerEvent);
    }

    connection.onclose = function () {
        console.log("Websocket connection closed");
    }

    connection.open();


};


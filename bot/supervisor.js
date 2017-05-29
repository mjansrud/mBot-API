/**
 * Created by jansrud on 29.05.2017.
 */

var workerFarm = require('worker-farm')
    , worker    = workerFarm(require.resolve('./worker'))
    , ret        = 0

/*
 mBot core
 The supervisior for all the workers
 */

module.exports = function(app){

    var checkSessions = setInterval(function()
    {
        /*
         Spawn workers
         */
        for (var id = 0; id < 10; id++) {
            worker('#' + id + ' FOO', function (err, outp) {
                console.log(outp)
                if (++ret == 10) workerFarm.end(worker)
            });
        }

    }, 5000);


};


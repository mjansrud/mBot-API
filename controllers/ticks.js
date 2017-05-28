const Tick = require('../models').Tick;

module.exports = {
    create(object, res) {

        return Tick
            .create({
                pair: object.pair,
                last: object.last,
                lowest_ask: object.lowest_ask,
                higest_bid:  object.higest_bid,
                percent_change:  object.percent_change,
                base_volume:  object.base_volume,
                quote_volume:  object.quote_volume,
                is_frozen:  object.is_frozen,
                day_high:  object.day_high,
                day_low:  object.day_low
            })
            .then(tick => console.log(tick))
            .catch(error => console.log(error));
    }

    /* Something for DB?
    create(req, res) {
        console.log(object);
        return Tick
            .create({
                ...
            })
            .then(tick => res.status(201).send(tick))
            .catch(error => res.status(400).send(error));
    },
    */

};
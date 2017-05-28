'use strict';
module.exports = function(sequelize, DataTypes) {
    var tick = sequelize.define('tick', {
        pair: DataTypes.STRING,
        last: DataTypes.FLOAT,
        lowest_ask: DataTypes.FLOAT,
        highest_bid: DataTypes.FLOAT,
        percent_change: DataTypes.FLOAT,
        base_volume: DataTypes.FLOAT,
        quote_volume: DataTypes.FLOAT,
        is_frozen: DataTypes.BOOLEAN,
        day_high: DataTypes.FLOAT,
        day_low: DataTypes.FLOAT
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return tick;
};
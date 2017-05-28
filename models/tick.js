"use strict";

module.exports = function(sequelize, DataTypes) {
    var Tick = sequelize.define("tick", {
        pair: DataTypes.STRING,
        last: DataTypes.STRING,
        lowest_ask: DataTypes.STRING,
        highest_bid: DataTypes.STRING,
        percent_change: DataTypes.STRING,
        base_volume: DataTypes.STRING,
        quote_volume: DataTypes.STRING,
        is_frozen: DataTypes.STRING,
        day_high: DataTypes.STRING,
        day_low: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                User.hasMany(models.Task)
            }
        }
    });

    return User;
};
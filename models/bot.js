"use strict";

module.exports = function(sequelize, DataTypes) {
    var Bot = sequelize.define("Bot", {
        pair: DataTypes.STRING,
        paper: DataTypes.BOOLEAN,
        period: DataTypes.STRING,
        start_capital: DataTypes.STRING,
        buy_rate: DataTypes.STRING,
        sell_rate: DataTypes.STRING,
        rsi_periods: DataTypes.STRING,
        trend_ema: DataTypes.STRING,
        max_buy_duration: DataTypes.STRING,
        max_sell_duration: DataTypes.STRING,
        balance: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                User.hasMany(models.Task)
            }
        }
    });

    return User;
};
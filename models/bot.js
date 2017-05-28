'use strict';
module.exports = function(sequelize, DataTypes) {
    var bot = sequelize.define('bot', {
        pair: DataTypes.STRING,
        paper: DataTypes.BOOLEAN,
        period: DataTypes.INTEGER,
        start_capital: DataTypes.FLOAT,
        buy_rate: DataTypes.FLOAT,
        sell_rate: DataTypes.FLOAT,
        rsi_oeriods: DataTypes.INTEGER,
        trend_ema: DataTypes.FLOAT,
        max_buy_duration: DataTypes.INTEGER,
        max_sell_duration: DataTypes.INTEGER,
        balance: DataTypes.FLOAT
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return bot;
};
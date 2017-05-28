'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    pair: DataTypes.STRING,
    paper: DataTypes.STRING,
    period: DataTypes.INTEGER,
    buy_rate: DataTypes.FLOAT,
    sell_rate: DataTypes.FLOAT,
    rsi_periods: DataTypes.INTEGER,
    trend_ema: DataTypes.FLOAT,
    max_buy_duration: DataTypes.INTEGER,
    max_sell_duration: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user;
};
"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: DataTypes.STRING,
        name: DataTypes.STRING,
        nickname: DataTypes.STRING,
        picture: DataTypes.STRING,
        website: DataTypes.STRING,
        gender: DataTypes.STRING,
        birthdate: DataTypes.STRING,
        zoneinfo: DataTypes.STRING,
        locale: DataTypes.STRING,
        poloniex_key: DataTypes.STRING,
        poloniex_secret: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                User.hasMany(models.Bot)
            }
        }
    });

    return User;
};
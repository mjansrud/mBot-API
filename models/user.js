'use strict';
module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define('user', {
        auth_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        nickname: DataTypes.STRING,
        picture: DataTypes.STRING,
        email: DataTypes.STRING,
        poloniex_key: DataTypes.STRING,
        poloniex_secrey: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return user;
};
'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var db        = {};

if (env == 'production') {
  var sequelize = new Sequelize('ebdb', process.env.RDS_USERNAME, process.env.RDS_PASSWORD, {host: process.env.RDS_HOSTNAME, port: process.env.RDS_PORT, dialect: 'postgres'});
} else {
  var sequelize = new Sequelize(process.env.NODE_ENV_DATABASE_NAME, process.env.NODE_ENV_DATABASE_USERNAME, process.env.NODE_ENV_DATABASE_PASSWORD, {host: process.env.NODE_ENV_DATABASE_HOST, dialect: 'postgres'});
}

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

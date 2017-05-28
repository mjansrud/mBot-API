/*
 Create database structure
 Call this manually once

 */

//Make environmental variables available
require('dotenv').config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.NODE_ENV_DATABASE_NAME, process.env.NODE_ENV_DATABASE_USERNAME, process.env.NODE_ENV_DATABASE_PASSWORD, {
    host: process.env.NODE_ENV_DATABASE_HOST,
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }

}); 

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


const User = sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
});

// force: true will drop the table if it already exists
User.sync({force: true}).then(() => {
    // Table created
    return User.create({
        firstName: 'John',
        lastName: 'Hancock'
    });
});


User.findAll().then(user => {
    console.log(user)
})
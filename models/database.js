/*
 Create database structure
 */

//Connect
const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/mbot';
const client = new pg.Client(connectionString);
client.connect();

//Databases
const query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');

//Exit connections
query.on('end', () => { client.end(); });
const keys = require('./keys');

// express app setup

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres setup

const { Pool} = require('pg');
const pgClient =new Pool({
   user: keys.pgUser,
   user: keys.pgHost,
   database: keys.pgDatabase,
   password: keys.pgPassword,
   port: keys.pgPort
});

pgClient.on('error',() => console.log('Lost Postgres Connection'));

pgClient
    .query('CREATE TABLE IF NOT EXISTS values (number INT )')
    .catch(error => console.log(error));
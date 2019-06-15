// This file connects to the database
// const mysql = require('mysql');
require('dotenv').config();
// const fs = require('fs');

module.exports = {
  development: {
    insecureAuth: true,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'Whats4Dinner_db',
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,

  },
  test: {
    username: 'root',
    password: '',
    database: 'test_Whats4Dinner_db',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false,
    // insecureAuth: true
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'Whats4Dinner_db',
    host: process.env.DB_HOST,
    dialect: 'mysql',
    insecureAuth: true,
  },
};

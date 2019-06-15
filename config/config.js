// This file connects to the database
<<<<<<< HEAD
var mysql = require("mysql");
require("dotenv").config();
const fs = require("fs");
=======
// const mysql = require('mysql');
require('dotenv').config();
// const fs = require('fs');
>>>>>>> 89425597d0d8c03e8c7efef3e9de9b587a613f8d

module.exports = {
  development: {
    insecureAuth: true,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
<<<<<<< HEAD
    database: "Whats4Dinner_db",
    host: process.env.DB_HOST,
    dialect: "mysql"
=======
    database: 'Whats4Dinner_db',
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,

>>>>>>> 89425597d0d8c03e8c7efef3e9de9b587a613f8d
  },
  test: {
    username: process.env.TEST_DB_USER,
    password: process.env.TEST_DB_PASS,
<<<<<<< HEAD
    database: "test_Whats4Dinner_db",
    host: process.env.TEST_DB_HOST,
    dialect: "mysql"
    //insecureAuth: true
=======
    database: 'test_Whats4Dinner_db',
    host: process.env.TEST_DB_HOST,
    dialect: 'mysql',
    logging: false,
    // insecureAuth: true
>>>>>>> 89425597d0d8c03e8c7efef3e9de9b587a613f8d
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
<<<<<<< HEAD
    database: "Whats4Dinner_db",
    host: process.env.DB_HOST,
    dialect: "mysql",
    insecureAuth: true
  }
=======
    database: 'Whats4Dinner_db',
    host: process.env.DB_HOST,
    dialect: 'mysql',
    insecureAuth: true,
  },
>>>>>>> 89425597d0d8c03e8c7efef3e9de9b587a613f8d
};

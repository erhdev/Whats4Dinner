// This file connects to the database
var mysql = require("mysql");
require('dotenv').config();

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    //connect to the burgers_db
    var connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: "restaurantrecipesapp",
        insecureAuth: true
    });
};
// db connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
// export for use in other files
module.exports = connection;
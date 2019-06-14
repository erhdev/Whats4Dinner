var express = require("express");
var bodyParser = require("body-parser");

// Sets up dotenv
const dotenv = require('dotenv');
dotenv.config();

// Sets up the Express App
var app = express();
var server = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// EXPRESS
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// BODY-PARSER
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));
//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//Parse application/json
app.use(bodyParser.json());

// HANDLEBARS
// Set Handlebars as the default templating engine.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ROUTES
var routes = require("./controllers/api_controllers");


app.use(routes);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: false }).then(function () {
    app.listen(server, function () {
        console.log("App listening on PORT " + server);
    });
});

module.exports = app;
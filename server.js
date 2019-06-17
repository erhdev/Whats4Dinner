/* eslint-disable no-console */
const express = require("express");
const bodyParser = require("body-parser");
// HANDLEBARS
// Set Handlebars as the default templating engine.
const exphbs = require("express-handlebars");

// Sets up dotenv
const dotenv = require("dotenv");

dotenv.config();

// Sets up the Express App
const app = express();
const server = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require("./models");

// EXPRESS
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// BODY-PARSER
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(`${__dirname}/public`));
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ROUTES
const routes = require("./controllers/api_controllers");

app.use(routes);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: false }).then(() => {
  app.listen(server, () => {
    console.log(`App listening on PORT ${server}`);
  });
});

module.exports = app;

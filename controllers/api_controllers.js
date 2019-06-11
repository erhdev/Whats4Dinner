const db = require("../models");
const express = require("express");
const exphbs = require("express-handlebars");
// const router = express.Router();

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
//Utilizes models folder to create our routes.
module.exports = function(app) {
  //Retrieves list of all restaurants and includes the menu items associated with those restaurants.
  app.get("/", (req, res) => {
    db.Restaurant.findAll({
      include: models.Menu_Item
    }).then(menu_item => {
      res.render("index", { menu_item: menu_item });
      console.log(menu_item);
    });
  });

  app.get("/restaurant/:id", (req, res) => {
    db.Restaurant.findOne({
      where: {
        id: req.params.id
      }
    }).then(res => {
      res.json({ status: 200, message: res });
    });
  });

  app.get("/food/:id", (req, res) => {
    db.Food.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbRestaurant => {
      res.json(dbRestaurant);
    });
  });
};

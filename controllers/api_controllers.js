const db = require("../models");
const express = require("express");
const router = express.Router();




//Utilizes models folder to create our routes.


  //Retrieves list of all restaurants and includes the menu items associated with those restaurants.
  router.get("/", (req, res) => {
    db.Restaurant.findAll({
      include: [db.Menu_Item]
    }).then(menu_item => {
      res.render("index", menu_item);
      console.log(menu_item);
    });
  });

  router.get("/restaurant/:id", (req, res) => {
    db.Restaurant.findOne({
      where: {
        id: req.params.id
      }
    }).then(res => {
      res.json({ status: 200, message: res });
    });
  });

  router.get("/food/:id", (req, res) => {
    db.Food.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbRestaurant => {
      res.json(dbRestaurant);
    });
  });


  module.exports = router;

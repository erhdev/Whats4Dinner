const db = require("../models");
const router = require('express').router;
const express = require('express');
const router = express.Router();

//Utilizes models folder to create our routes.

//Retrieves list of all restaurants and includes the menu items associated with those restaurants.
router.get("/", function (req, res) {
    db.Restaurant.findAll({
        include: [db.Menu_Item]
    }).then(function (menu_item) {
        res.json({ status: 200, message: menu_item })
    });
});

router.get('/restaurant', function (req, res) {
    models.Restaurant.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (dbRestaurant) {
        res.json(dbRestaurant);
    });
});

router.get('/food/:id', function (req, res) {
    models.Food.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (dbRestaurant) {
        res.json(dbRestaurant);
    });
});
    db.Restaurant.create(req.body).then(function(dbRestaurant) {
      res.json(dbRestaurant);
    });
  });
}


module.exports = router;

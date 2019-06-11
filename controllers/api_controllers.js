const db = require("../models");
const express = require('express');
const router = express.Router();

//Utilizes models folder to create our routes.

//Retrieves list of all restaurants and includes the menu items associated with those restaurants.
router.get("/", function (req, res) {
    db.Restaurant.findAll({
        include: [db.Menu_Item]
    }).then(function (menu_item) {
        res.render('index', menu_item);
    });
});

router.get('/restaurant/:id', function (req, res) {
    db.Restaurant.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (res) {
        res.json({ status: 200, message: res });
    });
});

router.get('/food/:id', function (req, res) {
    db.Food.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (dbRestaurant) {
        res.json(dbRestaurant);
    });
});



module.exports = router;
const db = require("../models");
const express = require("express");
const router = express.Router();




//Utilizes models folder to create our routes.


//Retrieves list of all restaurants and includes the menu items associated with those restaurants.
router.get("/", (req, res) => {
    db.Restaurant.findAll({
        include: [db.Menu_Item]
    }).then(function (restaurant) {
        //res.render('index', { restaurant: restaurant });
        res.json({ status: 200 });
        //for (i = 0; i)
        res.json({ restaurants: restaurant });
    });
});

router.get("/restaurant/:id", (req, res) => {
    db.Restaurant.findOne({
        where: {
            id: req.params.id
        }
    }).then(result => {
        db.Menu_Item.findAll({
            where: {
                RestaurantId: result.id
            }
        }).then(result => {
            res.json({ status: 200, message: result });
        });
    });
});

router.get("/menu_item/:id", (req, res) => {
    db.Menu_Item.findAll({
        where: {
            id: req.params.id
        }
    }).then(result => {
        db.Recipe.findAll({
            where: {
                MenuItemId: result[0].id
            }
        }).then(result => {
            res.json({ status: 200, message: result });
        });
    });
});


module.exports = router;
const db = require("../models");
const express = require("express");
const router = express.Router();




//Utilizes models folder to create our routes.


//Retrieves list of all restaurants and includes the menu items associated with those restaurants.
router.get("/", (req, res) => {
    db.Restaurant.findAll({
        include: [db.Menu_Item]
    }).then(function (restaurant) {
        res.render('index', { restaurant: restaurant });
        // res.json({ status: 200, restaurant: restaurant });
    });
});

router.get("/restaurant/:id", (req, res) => {
    console.log(req.params);
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





        // console.log(result);
        // res.json({ status: 200, message: result });
    });
});

router.get("/menu_item/:id", (req, res) => {
    db.Menu_Item.findOne({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json({ status: 200, message: result });
    });
});


module.exports = router;
const db = require("../models");
const express = require("express");
const router = express.Router();

//Retrieves list of all restaurants and includes the menu items associated with those restaurants.
router.get("/", (req, res) => {
    db.Restaurant.findAll({
        include: [db.Menu_Item]
    }).then(function (result) {
        // var data = {result: restaurant}
        //res.json(result);
        res.json({ status: 200, message: result });
        // res.render('index' , data);
    });
});

//Finds all menu items from a restaurant
//Called when user chooses to search all menu_items from a restaurant
router.get("/restaurant/:id", (req, res) => {
    db.Restaurant.findOne({
        where: {
            id: req.params.id
        }, include: {
            model: db.Menu_Item
        }
    }).then(result => {
        // var data = {restaurant: result}
        // res.render('index' , data);
        res.json({ status: 200, message: result });
    });
});

//Finds all menu items from a category
//Called when user chooses to search all menu_items for a category
router.get("/category/:category", (req, res) => {
    db.Restaurant.findAll({
        where: {
            restaurant_category: req.params.category
        }, include: {
            model: db.Menu_Item
        }
    }).then(result => {
        // var data = {categories: result}
        // res.render('index' , data);
        console.log(result);
        res.json({ status: 200, message: result });
    });
});

//Finds the recipe for the menu item
//Called when user selects a menu item
router.get("/menu_item/:id", (req, res) => {
    db.Menu_Item.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: db.Recipe
        }
    }).then(result => {
        // var data = {data: result}
        // res.render('index' , data);
        res.json({ status: 200, message: result });
    });
});

//POST route to create/add a restaurant.
router.post("/api/restaurant", function (req, res) {
    db.Restaurant.create(req.body)
        .then(result =>
            res.json({ status: 200, result: result }))
        .catch(err => {
            //console.log(err);
        });
});

//POST route to create/add a menu_item.
router.post("/api/menu_item/:id", function (req, res) {
    db.Menu_Item.create({
        ...req.body,
        RestaurantId: req.params.id
    })
        .then(result =>
            res.json({ status: 200 }))
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;
const db = require("../models");
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


//   //Route for retrieving entree data for individual restaurant when clicked.
//   router.get('/restaurant', function (req, res){
//       models.Restaurant.findOne({
//           where:{
//               id: req.params.id
//           }
//       }).then(function(dbRestaurant){
//           res.json(dbRestaurant);
//       });
//   });
//   //Display recipe for selected entree.

//   //Route for retrieving ingredients data for a recipe.
//   router.get('/food/:id', function (req, res){
//       models.Food.findOne({
//           where:{
//               id: req.params.id
//           }
//       }).then(function(dbRestaurant){
//           res.json(dbRestaurant);
//       });
//     });

//   //Updates restaurant db when user adds their own restaurant
//   router.post("/api/new", function(req, res) {

//     db.Restaurant.create({
//         name: req.body.name,
//         category: req.body.category,
//         created_at: req.body.created_at
//     }).then(function(results){
//         //the results would be the newly created restaurant.
//         res.end();
//     });
//   });

//   app.post("/api/CHANGE", function(req, res) {});
// };

module.exports = router;

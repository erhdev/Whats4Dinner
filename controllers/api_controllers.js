const db = require("../models");
const router = express.router();

//Utilizes models folder to create our routes.
module.exports = app => {
  //Retrieves list of all restaurants and includes the menu items associated with those restaurants.
  router.get("/", function(req, res) {
    models.Restaurant.findAll({
      include: [models.food]
    }).then(function(entree) {
      res.render("index", {
        title: "Here is your recipe",
        food: food
      });
    });
  });

  //Route for retrieving entree data for individual restaurant when clicked.

  //Display recipe for selected entree.

  //Route for retrieving ingredients data for a recipe.
  router.get('/food/:id', function (req, res){
      models.Food.findOne({
          where:{
              id: req.params.id
          }
      }).then(function(dbRestaurant){
          res.json(dbRestaurant);
      });
    });

  //Updates restaurant db when user adds their own restaurant
  router.post("/api/:id", function(req, res) {

    db.Restaurant.create(req.body).then(function(dbRestaurant) {
      res.json(dbRestaurant);
    });
  });

//   app.post("/api/CHANGE", function(req, res) {});
// };

var db = require("../models");
var express = require('express');
var router = express.Router();
// var app = require("../server.js");

router.get('/', function (req, res) {
    db.Restaurant.findAll({
        include: [db.Menu_Item]
    }).then(function (restaurants) {
        res.json(restaurants);
        return restaurants;
    });
});

// findAll(table, col, kevin) {
//     return kevin(res)
// }


// module.exports = function (app) {
//     app.get("/", function (req, res) {
//         db.Restaurant.findAll({
//             include: [db.Menu_Item]
//         }).then(function (restaurants) {
//             res.json(restaurants);
//             return restaurants;
//         });
//     });
// }
        //objects: key, value
        /* 
        1) The first key-value will be in your database. 
            { recipe : details of the recipe }
        2) Grab the key value of recipe from the database and pass it through your route
            { routeRecipe : recipe(from the database)}
        3) If you were working with handlebars, 
            { handlebarsRecipe : routeRecipe || recipe(from the database)}
        
        */

module.exports = router;

var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../../server");
var db = require("../../models");
var expect = chai.expect;

var request;

// Setting up the chai http plugin
chai.use(chaiHttp);

describe("POST /api/recipe/:menu_item_id", function () {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach(function () {
        request = chai.request(server);
        return db.sequelize.sync({ force: true });
    });

    it("should save a recipe", function (done) {
        // Create an object to send to the endpoint
        db.Restaurant.bulkCreate([
            { restaurant_name: "First Restaurant", restaurant_category: "First Cateogry" },
            { restaurant_name: "Second Restaurant", restaurant_category: "Second Cateogry" }
        ]).then(function () {
            db.Menu_Item.bulkCreate([
                { menu_item: "First" },
                { menu_item: "Second" }
            ]).then(function () {

                var reqBody = {
                    ingredient: "ingredient",
                    instruction: "instruction",
                    MenuItemId: 1
                };

                // POST the request body to the server
                request
                    .post("/api/recipe/1")
                    .send(reqBody)
                    .end(function (err, res) {
                        var responseStatus = res.body.status;
                        var responseBody = res.body.result;

                        // Run assertions on the response

                        expect(err).to.be.null;

                        expect(responseStatus).to.equal(200);

                        expect(responseBody)
                            .to.be.an("object")
                            .that.includes(reqBody);

                        // The `done` function is used to end any asynchronous tests
                        done();
                    });
            });
        });
    });
});
// //process.env.NODE_ENV = 'test';
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const db = require('../../models');
// const express = require('express');
// const apiRouter = require('../../controllers/api_controllers');
// //const should = chai.should();
// const expect = chai.expect;
// const server = require('../../server');
// // Setting up the chai http plugin
// chai.use(chaiHttp);

// let request;

var chai = require("chai");
var chaiHttp = require("chai-http");
var express = require("express");
var bodyParser = require("body-parser");
var routes = require("../../controllers/api_controllers");
var db = require("../../models");
var expect = chai.expect;

var request;

var server = express();

// Setting up the chai http plugin
chai.use(chaiHttp);

describe("GET /menu_item/:name", function () {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach(function () {
        server.use(routes);
        request = chai.request(server);
        return db.sequelize.sync({ force: true });
    });

    it("should find the first menu item", function (done) {
        // Add some examples to the db to test with
        db.Menu_Item.bulkCreate([
            { menu_item: "First" },
            { menu_item: "Second" }
        ]).then(function () {
            // Request the route that returns all examples
            request.get("/menu_item/First").end(function (err, res) {
                var responseStatus = res.status;
                var responseBody = res.body;

                // Run assertions on the response

                expect(err).to.be.null;

                expect(responseStatus).to.equal(200);

                expect(responseBody.message)
                    .to.be.an("object")
                    .that.includes({ menu_item: "First" });

                // The `done` function is used to end any asynchronous tests
                done();
            });
        });
    });
    it("should return an error", function (done) {
        // Add some examples to the db to test with
        db.Menu_Item.bulkCreate([
            { menu_item: "First" },
            { menu_item: "Second" },
            { menu_item: "_abc"}
        ]).then(function () {
            // Request the route that returns all examples
            request.get("/menu_item/_abc").end(function (err, res) {
                var responseStatus = res.status;
                var responseBody = res.body;
                console.log(res.body);

                // Run assertions on the response

                expect(err).to.not.be.null;

                expect(responseStatus).to.equal(500);

                // expect(responseBody.message)
                //     .to.be.an("object")
                //     .that.includes({ menu_item: "First" });

                // The `done` function is used to end any asynchronous tests
                done();
            });
        });
    });
});

describe("POST /api/menu_item/:restaurant_id", function () {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach(function () {
        server.use(bodyParser.urlencoded({ extended: false }))
        server.use(bodyParser.json());
        server.use(routes);
        request = chai.request(server);
        return db.sequelize.sync({ force: true });
    });

    it("should save a menu item", function (done) {
        // Create an object to send to the endpoint
        db.Restaurant.bulkCreate([
            { restaurant_name: "First Restaurant", restaurant_category: "First Cateogry" },
            { restaurant_name: "Second Restaurant", restaurant_category: "Second Cateogry" }
        ]).then(function () {
            var reqBody = {
                menu_item: "menuItem",
                RestaurantId: 1
            };

            // POST the request body to the server
            request
                .post("/api/menu_item/1")
                .send(reqBody)
                .end(function (err, res) {
                    //console.log("KEVIN - ", res.body);
                    var responseStatus = res.body.status;
                    var responseBody = res.body.result;

                    // Run assertions on the response

                    expect(err).to.be.null;

                    expect(responseStatus).to.equal(200);

                    expect(responseBody)
                        .to.be.an("object");

                    // The `done` function is used to end any asynchronous tests
                    done();
                });
        });
    });

});

